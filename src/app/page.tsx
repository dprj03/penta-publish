import Link from "next/link";

const sites = [
  { href: "/naukri", name: "NaukriSetu", blurb: "Sarkari Naukri briefings with last dates and official links" },
  { href: "/yojana", name: "YojanaPath", blurb: "Central schemes, scholarships and eligibility notes" },
  { href: "/hisab", name: "HisabBox", blurb: "EMI, SIP, tax and salary calculators" },
  { href: "/pariksha", name: "ParikshaDaily", blurb: "Exam hubs, daily quizzes and cut-offs" },
  { href: "/formkit", name: "FormKitIN", blurb: "Photo, signature, age and form tools" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Penta Publish</h1>
      <p className="mt-2 text-slate-600">
        Five AdSense-ready sites, one Next.js backend. Path prefixes for local demo; production hosts rewrite via middleware.
      </p>
      <ul className="mt-8 space-y-3">
        {sites.map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              className="block rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-slate-300"
            >
              <span className="font-semibold text-slate-900">{s.name}</span>
              <span className="mt-1 block text-sm text-slate-600">{s.blurb}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
