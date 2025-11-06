import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const routes = ["/", "/about", "/services", "/projects", "/contact", "/legal/privacy", "/legal/terms", "/legal/cookies"];
  const now = new Date();
  return routes.map((path) => ({ url: new URL(path, base).toString(), lastModified: now, changeFrequency: "weekly", priority: 0.8 }));
}


