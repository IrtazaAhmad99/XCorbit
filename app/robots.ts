import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.cloodykit.com"; // Replace with your domain

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}