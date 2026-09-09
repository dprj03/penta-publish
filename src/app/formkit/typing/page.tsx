import { AdSlot } from "@/components/AdSlot";
import { TypingTest } from "../_components/TypingTest";
export const metadata = { title: "English typing practice for SSC and bank skill tests" };
export default function Page() {
  return (
    <article>
      <h1 className="display text-3xl">Typing practice — 1 minute English</h1>
      <AdSlot slot="top" />
      <TypingTest />
      <div className="prose-site mt-8 max-w-3xl">
        <h2>This is not the official skill-test engine</h2>
        <p>
          SSC CHSL DEST and bank clerical typing tests use their own passages, duration
          and error formulas. Practise muscle memory here. Read the latest official
          scheme for the qualifying speed and whether backspace is allowed.
        </p>
      </div>
    </article>
  );
}
