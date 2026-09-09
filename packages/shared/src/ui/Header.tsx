import Link from 'next/link';

export function Header({
  siteName,
  basePath,
  nav,
}: {
  siteName: string;
  basePath: string;
  nav: { href: string; label: string }[];
}) {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link href={basePath} className="text-lg font-bold tracking-tight">
          {siteName}
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-medium sm:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-gray-700 hover:text-blue-600">
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
