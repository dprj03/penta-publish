import Link from "next/link";
import type { SiteConfig } from "@/lib/sites";

export function Footer({ site }: { site: SiteConfig }) {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">
          {(site.footerLinks ?? []).map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-slate-900">
              {l.label}
            </Link>
          ))}
        </div>
        <p className="mt-4 text-xs text-slate-500">
          © {year} {site.name}. Information is for guidance only. Always verify on official government
          websites. We do not host application forms.
        </p>
      </div>
    </footer>
  );
}
