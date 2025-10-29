import { getProjectBySlug } from "@/lib/projects";

export async function generateMetadata({ params }: { params: Promise<{ slug?: string }> }) {
  const { slug } = await params;
  if (!slug) return { title: "Project Not Found" };

  const data = await getProjectBySlug(slug);
  if (!data) return { title: "Project Not Found" };

  const { frontmatter } = data;
  const title = frontmatter.title ?? "Project";
  const description = frontmatter.summary ?? "Case study";

  return {
    title,
    description,
    openGraph: { title, description },
  };
}