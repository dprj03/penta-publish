import { AdSlot } from "@/components/AdSlot";
import { JpgPdf } from "../_components/JpgPdf";
export const metadata = { title: "JPG to PDF for application forms", description: "Wrap one JPEG in a single-page PDF inside the browser." };
export default function Page() {
  return (
    <article>
      <h1 className="display text-3xl">JPG to PDF</h1>
      <p className="mt-3 text-muted max-w-2xl">For boards that want a .pdf of a certificate photograph. Built locally — we do not store the file.</p>
      <AdSlot slot="top" />
      <JpgPdf />
      <div className="prose-site mt-8 max-w-3xl">
        <h2>When not to use this</h2>
        <p>
          Do not rebuild an official marksheet as a photograph-in-a-PDF if the board
          already issued a digital PDF. Upload that file. Use this helper only when
          the notice asks for a scan and the portal accepts PDF rather than JPEG.
        </p>
      </div>
    </article>
  );
}
