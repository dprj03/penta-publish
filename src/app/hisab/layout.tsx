import { SiteChrome } from '@/components/SiteChrome';
import { sites } from '@/lib/sites';

const site = sites.hisab;

export default function HisabLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteChrome
      siteName={site.name}
      basePath={site.path}
      nav={[
        { href: `${site.path}/calculators`, label: 'Calculators' },
        { href: `${site.path}/emi`, label: 'EMI' },
        { href: `${site.path}/sip`, label: 'SIP' },
        { href: `${site.path}/tax`, label: 'Tax' },
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
