import type { MetadataRoute } from "next";
import { publishedPosts } from "@/data/posts";
import { cities } from "@/data/cities";

export const revalidate = 3600;

const base = "https://safijamil.com";

// Set this to the last time you meaningfully updated the site's core pages
// (homepage copy, case studies, service pages). Update it manually whenever
// you make a real content change to these pages — don't use new Date() here,
// that fakes a "changed today" signal to Google on every single deploy.
const SITE_LAST_UPDATED = "2026-08-26";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = publishedPosts();

  // The blog index page's "last modified" should reflect the newest post,
  // since that's genuinely when that page's content last changed.
  const latestPostDate =
    posts.length > 0
      ? new Date(posts[0].date + "T00:00:00Z")
      : new Date(SITE_LAST_UPDATED + "T00:00:00Z");

  return [
    {
      url: base,
      lastModified: new Date(SITE_LAST_UPDATED + "T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/blog`,
      lastModified: latestPostDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.date + "T00:00:00Z"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${base}/case-studies`,
      lastModified: new Date(SITE_LAST_UPDATED + "T00:00:00Z"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/google-ads-expert`,
      lastModified: new Date(SITE_LAST_UPDATED + "T00:00:00Z"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...cities.map((c) => ({
      url: `${base}/google-ads-expert/${c.slug}`,
      lastModified: new Date(SITE_LAST_UPDATED + "T00:00:00Z"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
