import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { seoPages } from "@/lib/seo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteConfig.url, lastModified, changeFrequency: "weekly", priority: 1 },
    ...seoPages.map((page) => ({
      url: `${siteConfig.url}/${String(page.slug)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: page.audience === "driver" ? 0.8 : 0.85,
    })),
    { url: `${siteConfig.url}/confidentialitate`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
