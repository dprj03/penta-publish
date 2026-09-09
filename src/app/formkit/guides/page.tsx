import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { FORM_GUIDES } from "@/lib/formkit-guides";
export const metadata = { title: "Form guides" };
export default function Page() {
  return (
    <div>
      <h1 className="display text-3xl">Form guides</h1>
      <AdSlot slot="top" />
      <div className="mt-6 grid gap-4">
        {FORM_GUIDES.map((g) => (
          <Link key={g.slug} href={`/formkit/guides/${g.slug}`} className="tool-tile min-h-0">
            <h2>{g.title}</h2>
            <p className="text-sm text-muted">{g.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
