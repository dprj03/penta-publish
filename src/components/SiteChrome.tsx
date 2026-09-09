import type { ReactNode } from "react";
import type { SiteConfig } from "@/lib/sites";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AdSlot } from "./AdSlot";

export function SiteChrome({
  site,
  children,
}: {
  site: SiteConfig;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Header site={site} />
      <AdSlot slot="top" />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6">{children}</main>
      <AdSlot slot="anchor" className="sticky bottom-0 z-30 md:static" />
      <Footer site={site} />
    </div>
  );
}
