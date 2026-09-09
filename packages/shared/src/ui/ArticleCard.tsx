import Link from 'next/link';
export function ArticleCard({ href, title, summary }: { href: string; title: string; summary?: string }) {
  return (
    <Link href={href} className="block rounded-lg border p-4 hover:shadow-sm">
      <h3 className="font-semibold">{title}</h3>
      {summary && <p className="mt-1 text-sm text-gray-600">{summary}</p>}
    </Link>
  );
}
