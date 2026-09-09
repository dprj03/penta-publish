import type { ReactNode } from "react";
import { SITES } from "@/lib/sites";
import { SiteChrome } from "@/components/SiteChrome";
import { JsonLd } from "@/components/JsonLd";

export const metadata = {
  title: {
    default: "FormKitIN — photo, signature, age and PDF tools for Indian forms",
    template: "%s · FormKitIN",
  },
  description: SITES.formkit.description,
  keywords: SITES.formkit.keywords,
};

export default function FormkitLayout({ children }: { children: ReactNode }) {
  const site = SITES.formkit;
  return (
    <SiteChrome site={site}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: site.name,
          url: `https://${site.domain}`,
          description: site.description,
        }}
      />
      {children}
    </SiteChrome>
  );
}
