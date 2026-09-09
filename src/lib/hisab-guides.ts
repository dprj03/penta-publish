export type HisabGuide = { slug: string; title: string; excerpt: string; minutes: number; updatedAt: string; body: string[] };

export const HISAB_GUIDES: HisabGuide[] = [
  {
    slug: "emi-formula",
    title: "EMI formula and how banks round it",
    excerpt: "Standard reducing-balance EMI. Banks may round the final rupee.",
    minutes: 3,
    updatedAt: "2026-09-01",
    body: [
      "EMI = P × r × (1+r)^n / ((1+r)^n − 1), where r is the monthly rate and n is months.",
      "Our calculators show the formula. Treat the result as an estimate; the sanction letter is the source of truth.",
    ],
  },
];

export function getHisabGuide(slug: string) {
  return HISAB_GUIDES.find((g) => g.slug === slug);
}
