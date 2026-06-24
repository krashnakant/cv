import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/data/blog-data";

const BASE = "https://krashna.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPublishedPosts().map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...posts,
  ];
}
