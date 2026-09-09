export const SITES = {
  naukri: { id: 'naukri', name: 'NaukriSetu', domain: 'naukrisetu.in', prefix: '/naukri' },
  yojana: { id: 'yojana', name: 'YojanaPath', domain: 'yojanapath.in', prefix: '/yojana' },
  hisab: { id: 'hisab', name: 'HisabBox', domain: 'hisabbox.in', prefix: '/hisab' },
  pariksha: { id: 'pariksha', name: 'ParikshaDaily', domain: 'parikshadaily.in', prefix: '/pariksha' },
  formkit: { id: 'formkit', name: 'FormKitIN', domain: 'formkit.in', prefix: '/formkit' },
} as const

export type SiteId = keyof typeof SITES
