import Link from 'next/link';

export function Footer({
  siteName,
  basePath,
  links,
}: {
  siteName: string;
  basePath: string;
  links: { href: string; label: string }[];
}) {
  return (
    <footer className="mt-12 border-t bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-wrap gap-4 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-gray-600 hover:text-gray-900">
              {l.label}
            </Link>
          ))}
        </div>
        <p className="mt-4 text-xs text-gray-500">
          © {new Date().getFullYear()} {siteName}. Information is for guidance only. Always verify on
          official government websites.
        </p>
      </div>
    </footer>
  );
}
