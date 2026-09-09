# Penta Publish — five AdSense-ready sites, one Next.js backend

Mobile-first publishing network for Indian search demand. One codebase, five brands, shared components, shared legal templates, reserved AdSense slots.

| Site | Path (demo) | Intended domain | Job |
| --- | --- | --- | --- |
| **NaukriSetu** | `/naukri` | naukrisetu.in | Sarkari Naukri — better than a cluttered jobs dump |
| **YojanaPath** | `/yojana` | yojanapath.in | Central schemes + scholarships |
| **HisabBox** | `/hisab` | hisabbox.in | EMI, SIP, tax, salary calculators |
| **ParikshaDaily** | `/pariksha` | parikshadaily.in | Exam hubs, quizzes, cut-offs |
| **FormKitIN** | `/formkit` | formkit.in | Photo / signature / age / PDF tools + guides |

Network index: `/`

## Run locally

```bash
cd adsense-network
npm install
npm run dev
```

Open http://localhost:3000

## Host (when you are ready)

1. Buy the five domains above (or your own names).
2. Create a Vercel / Cloudflare Pages / any Node 18+ host.
3. Set root directory to this folder.
4. After first deploy, map each domain to the same project.
5. `src/middleware.ts` already rewrites the five production hostnames to `/naukri`, `/yojana`, `/hisab`, `/pariksha`, `/formkit`. On localhost the path prefixes work as-is.

## AdSense

- Reserved advertisement blocks are already in the layout (top, in-article, mobile anchor). They have min-height to protect CLS.
- Replace `ca-pub-XXXXXXXXXXXXXXXX` in `src/lib/sites.ts`.
- Replace the publisher id in `public/ads.txt`.
- Privacy, About, Contact, Disclaimer, Terms exist on every site.
- Do not click your own ads. Do not buy PTC / autosurf traffic.

## Honest revenue note

Brand-new domains will not print **$1,000 in September 2026** from organic AdSense. India jobs/education RPM is often well under $3. Hitting $1k needs hundreds of thousands of clean pageviews, an approved account, and indexed pages — that is a 6–12 week compounding problem, not a theme install.

What *can* happen this month: ship, index, apply for AdSense once each site has original pages + policy pages, start Telegram / WhatsApp distribution for jobs and quizzes, and let HisabBox (higher RPM) and FormKitIN (repeat tools) raise session depth.

Read `PLAYBOOK.md`.

## Architecture

```
src/app/{naukri,yojana,hisab,pariksha,formkit}   # five frontends
src/components                                   # shared chrome, ads, cards
src/content                                      # jobs, schemes, exams, articles, quizzes
src/lib/sites.ts                                 # brand tokens + nav
```

Content is typed TypeScript modules so you can later swap in a CMS / API without rewriting pages.

## Editorial rules

- Every job / scheme cites the official URL. We never host the application form.
- Calculators print the formula and say they are estimates.
- Form tools run in the browser. Do not add a server upload.
- Corrigenda beat our copy. Date-stamp pages when you refresh them.
