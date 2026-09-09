import { SiteChrome } from '@/components/SiteChrome';
import { sites } from '@/lib/sites';

const site = sites.naukri;

export default function NaukriLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteChrome
      siteName={site.name}
      basePath={site.path}
      nav={[
        { href: `${site.path}/jobs`, label: 'Jobs' },
        { href: `${site.path}/exams`, label: 'Exams' },
        { href: `${site.path}/admit-cards`, label: 'Admit Cards' },
        { href: `${site.path}/results`, label: 'Results' },
        { href: `${site.path}/matcher`, label: 'Matcher' },
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
