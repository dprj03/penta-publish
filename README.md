# Penta Publish — Five AdSense Sites

Monorepo-style single Next.js app powering five Indian utility sites for Google AdSense.

## Sites

| Prefix | Brand | Focus |
|--------|-------|-------|
| `/naukri` | NaukriSetu | Sarkari jobs, admit cards, results |
| `/yojana` | YojanaPath | Schemes, scholarships, eligibility |
| `/hisab` | HisabBox | EMI, SIP, tax, salary calculators |
| `/pariksha` | ParikshaDaily | Exams, quizzes, cutoffs |
| `/formkit` | FormKitIN | Photo/signature resize, form tools |

## Stack
- Next.js 14 App Router
- Tailwind CSS
- TypeScript
- Shared UI package

## Local
```bash
npm install
npm run dev
```

Open http://localhost:3000 and navigate via prefixes.

## Structure
```
src/app/{naukri,yojana,hisab,pariksha,formkit}/
packages/shared/
content/
```

See PLAYBOOK.md for publishing strategy.
