import type { MetadataRoute } from "next";
import { publishedPosts } from "@/data/posts";
import { cities } from "@/data/cities";

export const revalidate = 3600;

const base = "https://safijamil.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...publishedPosts().map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.date + "T00:00:00Z"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${base}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/google-ads-expert`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...cities.map((c) => ({
      url: `${base}/google-ads-expert/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
