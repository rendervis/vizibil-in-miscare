import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { seoPages } from "@/lib/seo-pages";
import { contentPages } from "@/lib/content-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, changeFrequency: "weekly", priority: 1 },
    ...seoPages.map((page) => ({
      url: `${siteConfig.url}/${String(page.slug)}`,
      changeFrequency: "monthly" as const,
      priority: page.audience === "driver" ? 0.8 : 0.85,
    })),
    ...contentPages.map((page) => ({
      url: `${siteConfig.url}/${page.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${siteConfig.url}/confidentialitate`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
