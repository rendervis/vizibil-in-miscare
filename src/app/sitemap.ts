import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { seoPages } from "@/lib/seo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: siteConfig.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...seoPages.map((page) => ({ url: `${siteConfig.url}/${page.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.75 })),
  ];
}
