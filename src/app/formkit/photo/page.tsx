import { AdSlot } from "@/components/AdSlot";
import { PhotoResize } from "../_components/PhotoResize";

export const metadata = { title: "Photo resize for government forms (20–50 KB)", description: "Resize a passport photograph to the pixel box and kilobyte window printed in the notice. The file never leaves this browser." };

export default function Page() {
  return (
    <article>
      <h1 className="display text-3xl md:text-4xl">Photo resize for government forms (20–50 KB)</h1>
      <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted">Resize a passport photograph to the pixel box and kilobyte window printed in the notice. The file never leaves this browser.</p>
      <AdSlot slot="top" />
      <PhotoResize />
      <AdSlot slot="inarticle" />
      <div className="prose-site mt-8 max-w-3xl">
        <h2>How to take a photograph that survives the compressor</h2>
        <p>
          Sit facing a plain wall. Daylight from the front, not a yellow bulb behind
          you. Keep both ears visible unless a religious article covers them and the
          notice allows it. Do not wear dark glasses. Do not paste the photograph on a
          form and rescan it — start from the original camera file.
        </p>
        <p>
          Default pixels on this page (413 × 531) approximate 3.5 cm × 4.5 cm at 300 dpi.
          Some bank forms want 200 × 230. Overwrite the boxes. Then let the compressor
          hunt for a JPEG quality that lands between 20 and 50 KB. If the face smears,
          raise the pixel box slightly and try again rather than adding a filter.
        </p>

      </div>
    </article>
  );
}
