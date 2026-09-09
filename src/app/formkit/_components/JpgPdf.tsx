"use client";
import { useState } from "react";

function wrap(bytes: Uint8Array) {
  let out = "";
  for (let i = 0; i < bytes.length; i++) out += String.fromCharCode(bytes[i]);
  return out;
}

function makePdf(jpeg: Uint8Array, w: number, h: number) {
  const img = wrap(jpeg);
  const objs: string[] = [];
  objs[1] = "<< /Type /Catalog /Pages 2 0 R >>";
  objs[2] = "<< /Type /Pages /Kids [3 0 R] /Count 1 >>";
  objs[3] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${w} ${h}] /Contents 4 0 R /Resources << /XObject << /Im0 5 0 R >> >> >>`;
  const stream = `q ${w} 0 0 ${h} 0 0 cm /Im0 Do Q`;
  objs[4] = `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`;
  objs[5] = `<< /Type /XObject /Subtype /Image /Width ${w} /Height ${h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpeg.length} >>\nstream\n${img}\nendstream`;

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  for (let i = 1; i <= 5; i++) {
    offsets[i] = pdf.length;
    pdf += `${i} 0 obj\n${objs[i]}\nendobj\n`;
  }
  const start = pdf.length;
  pdf += `xref\n0 6\n0000000000 65535 f \n`;
  for (let i = 1; i <= 5; i++) pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  pdf += `trailer << /Size 6 /Root 1 0 R >>\nstartxref\n${start}\n%%EOF`;
  return new Blob([pdf], { type: "application/pdf" });
}

export function JpgPdf() {
  const [url, setUrl] = useState("");
  const [info, setInfo] = useState("");

  async function onFile(file: File) {
    const buf = new Uint8Array(await file.arrayBuffer());
    const img = new Image();
    const src = URL.createObjectURL(file);
    await new Promise<void>((res) => {
      img.onload = () => res();
      img.src = src;
    });
    const pdf = makePdf(buf, img.naturalWidth || 595, img.naturalHeight || 842);
    URL.revokeObjectURL(src);
    if (url) URL.revokeObjectURL(url);
    const next = URL.createObjectURL(pdf);
    setUrl(next);
    setInfo(`${Math.round(pdf.size / 1024)} KB PDF`);
  }

  return (
    <div className="calc-card">
      <label className="field">
        <span className="field-label">JPEG to wrap in a one-page PDF</span>
        <input type="file" accept="image/jpeg,image/jpg" onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])} />
      </label>
      {url ? (
        <p>
          <span className="fineprint">{info} — built in your browser.</span>
          <br />
          <a className="chip chip-ok" href={url} download="document.pdf">Download PDF</a>
        </p>
      ) : (
        <p className="fineprint">
          Many boards accept a single-page PDF of a certificate photograph. Convert a
          JPEG here. For multi-page official PDFs use the issuing authority’s file
          instead of stitching photos.
        </p>
      )}
    </div>
  );
}
