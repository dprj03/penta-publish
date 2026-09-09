import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  const paths = ["/", "/naukri", "/yojana", "/hisab", "/pariksha", "/formkit"];
  return paths.map((p) => ({ url: `${base}${p}`, lastModified: new Date(), changeFrequency: "daily", priority: p === "/" ? 1 : 0.8 }));
}
