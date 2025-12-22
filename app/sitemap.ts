import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: "https://tryraba.com",
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://tryraba.com/about",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://tryraba.com/blog",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://tryraba.com/contact",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://tryraba.com/field-agent",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
