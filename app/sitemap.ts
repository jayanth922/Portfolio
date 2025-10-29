import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const projects = await getAllProjects();
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/projects`, changeFrequency: "monthly" },
    { url: `${base}/resume`, changeFrequency: "yearly" },
    { url: `${base}/about`, changeFrequency: "yearly" },
    { url: `${base}/contact`, changeFrequency: "yearly" },
    ...projects.map((p) => ({
      url: `${base}/projects/${p.slug}`,
      changeFrequency: "yearly" as const,
    })),
  ];
}