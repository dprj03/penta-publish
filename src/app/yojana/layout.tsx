import { SiteChrome } from '@/components/SiteChrome';
import { sites } from '@/lib/sites';

const site = sites.yojana;

export default function YojanaLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteChrome
      siteName={site.name}
      basePath={site.path}
      nav={[
        { href: `${site.path}/schemes`, label: 'Schemes' },
        { href: `${site.path}/scholarships`, label: 'Scholarships' },
        { href: `${site.path}/states`, label: 'States' },
        { href: `${site.path}/matcher`, label: 'Matcher' },
        { href: `${site.path}/guides`, label: 'Guides' },
      ]}
      footerLinks={[
        { href: `${site.path}/about`, label: 'About' },
        { href: `${site.path}/privacy`, label: 'Privacy' },
        { href: `${site.path}/contact`, label: 'Contact' },
        { href: `${site.path}/disclaimer`, label: 'Disclaimer' },
        { href: `${site.path}/terms`, label: 'Terms' },
      ]}
    >
      {children}
    </SiteChrome>
  );
}
