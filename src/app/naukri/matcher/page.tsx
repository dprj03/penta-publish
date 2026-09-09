import { AdSlot } from "@/components/AdSlot";
import { EligibilityMatcher } from "@/components/naukri/EligibilityMatcher";
import { JOBS } from "@/content/jobs";

export const metadata = {
  title: "Am I eligible?",
  description: "Filter Sarkari Naukri by education, date of birth and category relaxation.",
};

export default function MatcherPage() {
  return (
    <div>
      <h1 className="display text-3xl">Am I eligible?</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
        This sieve uses standard central relaxations (OBC +3, SC/ST +5, PwBD +10) and treats the last date as
        the crucial date when the notice does not print a separate “as on” day. It cannot see medical standards
        or “degree with X subject” footnotes.
      </p>
      <AdSlot slot="top" />
      <EligibilityMatcher jobs={JOBS} />
    </div>
  );
}
