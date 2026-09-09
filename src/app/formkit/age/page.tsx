import { AdSlot } from "@/components/AdSlot";
import { AgeAsOn } from "../_components/AgeAsOn";

export const metadata = { title: "Age as on date calculator", description: "Count completed years on the exact date printed in a recruitment notice — not today." };

export default function Page() {
  return (
    <article>
      <h1 className="display text-3xl md:text-4xl">Age as on date calculator</h1>
      <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted">Count completed years on the exact date printed in a recruitment notice — not today.</p>
      <AdSlot slot="top" />
      <AgeAsOn />
      <AdSlot slot="inarticle" />
      <div className="prose-site mt-8 max-w-3xl">
        <h2>Why “as on” is not your birthday maths</h2>
        <p>
          SSC CHSL 2026 counts age on 1 January 2026. A candidate born on 2 January 1999
          is 26 years 11 months 30 days that morning, not 27. Type the notice date, not
          the day you fill the form.
        </p>
        <p>
          Category relaxation is added to the maximum age in the PDF. OBC (non-creamy
          layer) is usually three years, SC and ST five. Ex-servicemen and PwBD have
          their own paragraphs. This page does not invent those years — you type the
          relaxed maximum after you read them.
        </p>

      </div>
    </article>
  );
}
