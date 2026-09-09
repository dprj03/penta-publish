# AdSense Network Playbook

## Goal
Ship five clean, original, policy-compliant Indian publisher sites that can get AdSense approved and compound organic traffic.

## Sites
1. **NaukriSetu** — Sarkari jobs, admit cards, results, exam calendar. Better UX than cluttered job dumps.
2. **YojanaPath** — Central schemes + scholarships with eligibility matcher.
3. **HisabBox** — EMI, SIP, FD, tax, salary, NPS, gratuity calculators (higher RPM niche).
4. **ParikshaDaily** — Exam hubs, quizzes, cut-offs, syllabus.
5. **FormKitIN** — Browser-side photo/signature resize, age, percentage, JPG→PDF, typing test + guides.

## Architecture
Single Next.js 14 App Router app. Path prefixes `/naukri` `/yojana` `/hisab` `/pariksha` `/formkit`. Middleware rewrites production hostnames.

## Editorial rules (non-negotiable)
- Every job / scheme cites the official URL. Never host the application form.
- Calculators show the formula and say they are estimates.
- Form tools run entirely in the browser. No server upload.
- Date-stamp pages when you refresh them. Corrigenda beat our copy.
- Privacy, About, Contact, Disclaimer, Terms on every site before AdSense application.

## AdSense checklist
- [ ] Replace `ca-pub-XXXXXXXXXXXXXXXX` in `src/lib/sites.ts`
- [ ] Update `public/ads.txt`
- [ ] Original content + policy pages live
- [ ] No bought traffic / PTC / autosurf
- [ ] Do not click your own ads

## Revenue reality
New domains + India jobs/education RPM will not hit $1k in the first month. Build for approval + compounding. HisabBox and FormKitIN raise session depth and RPM.

## Next actions after deploy
1. Index pages (Google Search Console)
2. Apply for AdSense once each site has 15–30 original pages + policy pages
3. Telegram / WhatsApp distribution for jobs and quizzes
4. Refresh job and scheme data weekly
