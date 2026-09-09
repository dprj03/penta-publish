import type { SiteConfig } from "@/lib/sites";

export function AboutPage({ site }: { site: SiteConfig }) {
  return (
    <article className="prose-site max-w-3xl">
      <h1 className="display text-3xl">About {site.name}</h1>
      <p>{site.description}</p>
      <p>
        {site.name} is part of an independent Indian publisher network that also
        runs NaukriSetu (government jobs), YojanaPath (schemes), HisabBox (money
        calculators), ParikshaDaily (exams) and FormKitIN (application tools).
        We are not a government website, a bank, a coaching centre or an
        examining body.
      </p>
      <p>
        Editorial standard: every listing cites an official source URL. Every
        calculator prints the formula and the assumption. We do not charge
        readers to view a notification or to use a tool.
      </p>
      <p>{site.footerNote}</p>
    </article>
  );
}

export function ContactPage({ site }: { site: SiteConfig }) {
  return (
    <article className="prose-site max-w-3xl">
      <h1 className="display text-3xl">Contact {site.name}</h1>
      <p>
        Email editorial corrections to hello@{site.domain}. Include the page URL,
        the official source you want us to check, and a short note. We do not
        accept paid job listings, paid scheme rankings or paid exam predictions.
      </p>
      <p>
        For privacy requests use the same address with the subject line
        “Privacy — {site.name}”.
      </p>
    </article>
  );
}

export function PrivacyPage({ site }: { site: SiteConfig }) {
  return (
    <article className="prose-site max-w-3xl">
      <h1 className="display text-3xl">Privacy policy</h1>
      <p>Last updated: 8 September 2026. This policy applies to {site.domain}.</p>
      <h2>What we collect</h2>
      <p>
        Server logs (IP address, user agent, referring URL) for security and
        uptime. Optional analytics cookies after you interact with the page.
        We do not ask you to create an account to read a guide or run a
        calculator.
      </p>
      <h2>Tools that stay in your browser</h2>
      <p>
        Photo, signature and PDF helpers on FormKitIN process files with the
        Canvas API. The file is not uploaded to our servers. Clear the tab and
        the bytes leave with it.
      </p>
      <h2>Advertising</h2>
      <p>
        After Google AdSense approval this site will show interest-based ads.
        Google uses cookies such as NID and IDE. You can opt out of
        personalised ads at adssettings.google.com. We use a reserved ad slot
        even before approval so the layout does not jump.
      </p>
      <h2>Legal basis and retention</h2>
      <p>
        Logs are kept up to 90 days unless needed for abuse investigation.
        We do not sell personal information. Contact hello@{site.domain} to
        request deletion of an email you sent us.
      </p>
    </article>
  );
}

export function DisclaimerPage({ site }: { site: SiteConfig }) {
  return (
    <article className="prose-site max-w-3xl">
      <h1 className="display text-3xl">Disclaimer</h1>
      <p>{site.footerNote}</p>
      <p>
        Dates, vacancies, slab rates, DA percentages and eligibility rules
        change without notice. Treat every page as journalism and a worksheet,
        never as an offer letter, a tax filing or a legal opinion. Follow the
        official URL printed on the page before you pay a fee or upload a
        document.
      </p>
      <p>
        {site.name} is not affiliated with the Government of India, any state
        government, UPSC, SSC, IBPS, RRB, NTA, CBDT or any public sector bank.
      </p>
    </article>
  );
}

export function TermsPage({ site }: { site: SiteConfig }) {
  return (
    <article className="prose-site max-w-3xl">
      <h1 className="display text-3xl">Terms of use</h1>
      <p>
        By using {site.domain} you agree that content is provided “as is”, that
        you will not scrape the site in a way that degrades service, and that
        you will not present our pages as an official government circular.
      </p>
      <p>
        You may quote short excerpts with a link back. You may not copy entire
        guides or calculator copy into another AdSense site.
      </p>
    </article>
  );
}
