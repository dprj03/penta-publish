import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { SITES } from "@/lib/sites";

const tools = [
  { t: "Age as on date", d: "Completed years, months and days against the date printed in the notice.", h: "/formkit/age", tag: "Eligibility" },
  { t: "Photo resize 20–50 KB", d: "Crop to pixels and compress JPEG in your browser. Nothing is uploaded.", h: "/formkit/photo", tag: "Upload" },
  { t: "Signature size", d: "Resize a black-on-white signature to the notice’s pixel and KB cap.", h: "/formkit/signature", tag: "Upload" },
  { t: "JPG to PDF", d: "Wrap one JPEG in a single-page PDF for boards that want a file, not a photo.", h: "/formkit/jpg-pdf", tag: "File" },
  { t: "Typing practice", d: "One-minute English drill with WPM and accuracy.", h: "/formkit/typing", tag: "Skill" },
  { t: "7th CPC peek", d: "Entry basic and the next cells for Levels 1–14.", h: "/formkit/pay", tag: "Pay" },
  { t: "Marks percentage", d: "Obtained ÷ maximum × 100 for form boxes.", h: "/formkit/percentage", tag: "Marks" },
];

export default function Page() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-accent">Government form toolkit</p>
      <h1 className="display mt-1 text-3xl md:text-4xl">{SITES.formkit.tagline}</h1>
      <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted">
        Every rejected SSC or bank form we hear about fails on three things: a photograph
        that is 8 KB too heavy, a signature that includes a date, or an age counted from
        today instead of the as-on date. These tools stay on your phone.
      </p>
      <AdSlot slot="top" />
      <div className="tool-grid">
        {tools.map((t) => (
          <Link key={t.h} href={t.h} className="tool-tile">
            <span className="chip">{t.tag}</span>
            <h2>{t.t}</h2>
            <p className="text-sm text-muted">{t.d}</p>
          </Link>
        ))}
      </div>
      <section className="prose-site mt-10 max-w-3xl">
        <h2>Why we wrap tools in guides</h2>
        <p>
          A bare photo compressor is a thin page. FormKitIN therefore explains the
          notice language — “20 KB to 50 KB”, “3.5 cm × 4.5 cm”, “age as on 01.01.2026” —
          and then runs the tool. Read the official PDF first. Use this page second.
        </p>
      </section>
    </div>
  );
}
