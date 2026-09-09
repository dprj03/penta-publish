import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { FORM_GUIDES, getFormGuide } from "@/lib/formkit-guides";
export function generateStaticParams() { return FORM_GUIDES.map((g) => ({ slug: g.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const g = getFormGuide(params.slug);
  return { title: g?.title || "Guide", description: g?.excerpt };
}
export default function Page({ params }: { params: { slug: string } }) {
  const g = getFormGuide(params.slug);
  if (!g) notFound();
  return (
    <article className="prose-site max-w-3xl">
      <h1 className="display text-3xl">{g.title}</h1>
      <p className="text-sm text-muted">{g.minutes} min · {g.updatedAt}</p>
      <AdSlot slot="top" />
      {g.body.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
    </article>
  );
}
