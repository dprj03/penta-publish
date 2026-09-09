import { SiteChrome } from '@/components/SiteChrome';
import { sites } from '@/lib/sites';

const site = sites.pariksha;

export default function ParikshaLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteChrome
      siteName={site.name}
      basePath={site.path}
      nav={[
        { href: `${site.path}/exams`, label: 'Exams' },
        { href: `${site.path}/quiz`, label: 'Quiz' },
        { href: `${site.path}/cutoffs`, label: 'Cut-offs' },
        { href: `${site.path}/syllabus`, label: 'Syllabus' },
        { href: `${site.path}/results`, label: 'Results' },
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
