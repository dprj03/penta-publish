import { AdSlot } from "@/components/AdSlot";
import { Percentage } from "../_components/Percentage";
export const metadata = { title: "Marks percentage calculator", description: "Convert obtained marks to a percentage for application forms." };
export default function Page() {
  return (
    <article>
      <h1 className="display text-3xl">Marks percentage calculator</h1>
      <p className="mt-3 text-muted">For the percentage field on SSC, bank and university forms.</p>
      <AdSlot slot="top" />
      <Percentage />
      <div className="prose-site mt-8 max-w-3xl">
        <h2>CGPA to percentage</h2>
        <p>
          Many universities print their own conversion (×9.5, ×10, or a printed
          equivalent percentage on the marksheet). If the marksheet already shows a
          percentage, type that. Do not invent a multiplier the university did not notify.
        </p>
      </div>
    </article>
  );
}
