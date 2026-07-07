import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://akshaykumar.dev"; // TODO: replace with your real deployed domain
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
