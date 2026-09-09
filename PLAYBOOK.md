# AdSense Network Playbook

## Sites (locked)
1. **NaukriSetu** — Sarkari jobs, admit cards, results, eligibility matcher
2. **YojanaPath** — Government schemes, scholarships, state pages
3. **HisabBox** — Finance calculators (EMI, SIP, tax, salary, NPS, PPF, FD)
4. **ParikshaDaily** — Exams, syllabus, cutoffs, quizzes, results
5. **FormKitIN** — Form tools (photo resize, signature, JPG→PDF, age, percentage, typing, pay matrix) + guides

## Architecture
Single Next.js App Router multi-tenant app.
Path prefixes: `/naukri` `/yojana` `/hisab` `/pariksha` `/formkit`
Shared package: `packages/shared`
Content JSON under `content/`

## Domains (target)
- naukrisetu.in / .com
- yojanapath.in
- hisabbox.in
- parikshadaily.in
- formkit.in

## AdSense goals
- Approval first on each domain
- Organic compounding, not paid traffic
- India jobs / schemes RPM is low; volume + long-tail tools

## Deploy
Vercel recommended. One project, path-based or domain-based routing via middleware.
