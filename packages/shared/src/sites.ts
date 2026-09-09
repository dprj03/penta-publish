export type SiteId = 'naukri' | 'yojana' | 'hisab' | 'pariksha' | 'formkit';

export const sites = {
  naukri: { id: 'naukri' as const, name: 'NaukriSetu', path: '/naukri', domain: 'naukrisetu.in' },
  yojana: { id: 'yojana' as const, name: 'YojanaPath', path: '/yojana', domain: 'yojanapath.in' },
  hisab: { id: 'hisab' as const, name: 'HisabBox', path: '/hisab', domain: 'hisabbox.in' },
  pariksha: { id: 'pariksha' as const, name: 'ParikshaDaily', path: '/pariksha', domain: 'parikshadaily.in' },
  formkit: { id: 'formkit' as const, name: 'FormKitIN', path: '/formkit', domain: 'formkit.in' },
};
