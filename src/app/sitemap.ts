import type { MetadataRoute } from "next";
import { products, getProductSlug } from "@/data/mock";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://ngao.store").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const productUrls = products.map((p) => ({
    url: `${SITE_URL}/products/${getProductSlug(p)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/products`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/blogs/sim-ghep-ha-noi`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/blogs/sim-ghep-da-nang`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/blogs/ghep-sim-iphone-lock`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/blogs/mua-sim-ghep`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/blogs`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...productUrls,
  ];
}
