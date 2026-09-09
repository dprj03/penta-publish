import Link from "next/link";
import type { SiteConfig } from "@/lib/sites";

export function Header({ site }: { site: SiteConfig }) {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link href={site.path} className="text-lg font-bold tracking-tight text-slate-900">
          {site.name}
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-medium sm:flex">
          {site.nav?.map((n) => (
            <Link key={n.href} href={n.href} className="text-slate-700 hover:text-blue-600">
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
