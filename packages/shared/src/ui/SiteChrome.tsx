import { Header } from './Header';
import { Footer } from './Footer';
import { AdSlot } from './AdSlot';

export function SiteChrome({
  siteName,
  basePath,
  nav,
  footerLinks,
  children,
}: {
  siteName: string;
  basePath: string;
  nav: { href: string; label: string }[];
  footerLinks: { href: string; label: string }[];
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header siteName={siteName} basePath={basePath} nav={nav} />
      <AdSlot slot="top" />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6">{children}</main>
      <AdSlot slot="anchor" />
      <Footer siteName={siteName} basePath={basePath} links={footerLinks} />
    </div>
  );
}
