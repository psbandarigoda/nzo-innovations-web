import type { MetadataRoute } from "next";
import { INSIGHTS, SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/services",
    "/industries",
    "/approach",
    "/products",
    "/insights",
    "/case-studies",
    "/careers",
    "/contact",
  ];

  const insightPages = INSIGHTS.map((article) => ({
    url: `${SITE.url}/insights/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages.map((path) => ({
      url: `${SITE.url}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.8,
    })),
    ...insightPages,
  ];
}
