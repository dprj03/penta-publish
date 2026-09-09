export type FormGuide = { slug: string; title: string; excerpt: string; minutes: number; updatedAt: string; body: string[] };

export const FORM_GUIDES: FormGuide[] = [
  {
    slug: "ssc-photo-signature-specs",
    title: "SSC photo and signature size — what the notice actually means",
    excerpt: "Pixel boxes, KB windows and why the portal rejects a 51 KB JPEG.",
    minutes: 4,
    updatedAt: "2026-09-01",
    body: [
      "SSC notices print a range (for example 20 KB to 50 KB) and a pixel box. Upload outside either band and the form freezes on the next page.",
      "Use a plain background, face the light, crop to the head-and-shoulders box, then compress. Do not start from a scanned form photograph.",
      "Signature files fail when the pen is blue, the paper is lined, or the crop includes a date. Black ball pen on white paper, crop tight.",
    ],
  },
  {
    slug: "age-as-on-date",
    title: "Age as on date — how boards count completed years",
    excerpt: "The as-on date is almost never today. Count completed years against the date in the notice.",
    minutes: 3,
    updatedAt: "2026-09-01",
    body: [
      "Boards write age as on 01.01.2026 or 01.08.2026. That is the reference, not the day you fill the form.",
      "Completed years means full birthdays that have passed before the as-on date. A candidate born 15.03.2005 is 20 years on 01.01.2026, not 21.",
    ],
  },
];

export function getFormGuide(slug: string) {
  return FORM_GUIDES.find((g) => g.slug === slug);
}
