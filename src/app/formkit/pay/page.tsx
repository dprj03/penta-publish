import { AdSlot } from "@/components/AdSlot";
import { PayMatrix } from "../_components/PayMatrix";
import Link from "next/link";
export const metadata = { title: "7th CPC pay matrix peek", description: "Entry basic and next cells for central pay levels 1–14." };
export default function Page() {
  return (
    <article>
      <h1 className="display text-3xl">7th CPC pay matrix peek</h1>
      <p className="mt-3 text-muted max-w-2xl">
        Enough of the matrix to read a notification. For a full in-hand estimate open the
        HisabBox salary calculator.
      </p>
      <AdSlot slot="top" />
      <PayMatrix />
      <p className="mt-4 text-sm">
        <Link className="text-brand underline" href="/hisab/salary">In-hand salary with DA 60% →</Link>
      </p>
    </article>
  );
}
