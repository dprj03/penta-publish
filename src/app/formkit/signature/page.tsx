import { AdSlot } from "@/components/AdSlot";
import { SignatureResize } from "../_components/SignatureResize";

export const metadata = { title: "Signature size for SSC and bank forms", description: "Resize a black-pen signature to the notice’s pixel and kilobyte cap." };

export default function Page() {
  return (
    <article>
      <h1 className="display text-3xl md:text-4xl">Signature size for SSC and bank forms</h1>
      <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted">Resize a black-pen signature to the notice’s pixel and kilobyte cap.</p>
      <AdSlot slot="top" />
      <SignatureResize />
      <AdSlot slot="inarticle" />
      <div className="prose-site mt-8 max-w-3xl">
        <h2>What gets forms rejected</h2>
        <p>
          A signature that includes the date, a name stamp, or a photo of a PAN card
          signature block. Sign once on white paper with a black ball pen, crop tightly,
          then run this tool. If the notice wants a Hindi and an English signature,
          make two files.
        </p>

      </div>
    </article>
  );
}
