export type SiteId = 'naukri' | 'yojana' | 'hisab' | 'pariksha' | 'formkit';

export const sites = {
  naukri: {
    id: 'naukri' as const,
    name: 'NaukriSetu',
    path: '/naukri',
    domain: 'naukrisetu.in',
    tagline: 'Sarkari Naukri, admit cards & results — clean and official',
    adsensePublisherId: 'ca-pub-XXXXXXXXXXXXXXXX',
  },
  yojana: {
    id: 'yojana' as const,
    name: 'YojanaPath',
    path: '/yojana',
    domain: 'yojanapath.in',
    tagline: 'Central schemes & scholarships explained simply',
    adsensePublisherId: 'ca-pub-XXXXXXXXXXXXXXXX',
  },
  hisab: {
    id: 'hisab' as const,
    name: 'HisabBox',
    path: '/hisab',
    domain: 'hisabbox.in',
    tagline: 'EMI, SIP, tax & salary calculators for India',
    adsensePublisherId: 'ca-pub-XXXXXXXXXXXXXXXX',
  },
  pariksha: {
    id: 'pariksha' as const,
    name: 'ParikshaDaily',
    path: '/pariksha',
    domain: 'parikshadaily.in',
    tagline: 'Exam hubs, quizzes, cut-offs & syllabus',
    adsensePublisherId: 'ca-pub-XXXXXXXXXXXXXXXX',
  },
  formkit: {
    id: 'formkit' as const,
    name: 'FormKitIN',
    path: '/formkit',
    domain: 'formkit.in',
    tagline: 'Photo, signature, age & PDF tools that run in your browser',
    adsensePublisherId: 'ca-pub-XXXXXXXXXXXXXXXX',
  },
} as const;

export type Site = (typeof sites)[SiteId];
