import type { Metadata } from "next";
import Section from "@/components/section";
import { getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getProjectBySlug(slug);
  const title = data?.frontmatter.title || "Project";
  const description = data?.frontmatter.summary || "Case study";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/projects/${slug}`,
      images: [{ url: `/projects/${slug}/opengraph-image` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/projects/${slug}/opengraph-image`],
    },
    alternates: {
      canonical: `/projects/${slug}`,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  // 👇 In Next 15, params is a Promise in RSC
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // 👈 unwrap first

  const data = await getProjectBySlug(slug);
  if (!data) notFound();

  const { frontmatter, content } = data;

  return (
    <Section title={frontmatter.title}>
      <article className="prose prose-invert max-w-3xl">{content}</article>
    </Section>
  );
}