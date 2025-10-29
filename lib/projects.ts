import fs from "node:fs/promises";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";

const PROJECTS_DIR = path.resolve(process.cwd(), "content", "projects");

export type ProjectFrontmatter = {
  title: string;
  summary: string;
  date?: string;
  tags?: string[];
};

async function safeStat(p: string) {
  try {
    await fs.stat(p);
    return true;
  } catch {
    return false;
  }
}

export async function getAllProjects(): Promise<
  Array<{ slug: string } & ProjectFrontmatter>
> {
  try {
    const files = await fs.readdir(PROJECTS_DIR);
    const mdxFiles = files.filter((f) => f.endsWith(".mdx"));

    const results: Array<{ slug: string } & ProjectFrontmatter> = [];
    for (const file of mdxFiles) {
      const source = await fs.readFile(path.join(PROJECTS_DIR, file), "utf8");
      const { frontmatter } = await compileMDX<ProjectFrontmatter>({
        source,
        options: { parseFrontmatter: true },
      });
      results.push({ slug: file.replace(/\.mdx$/, ""), ...frontmatter });
    }
    results.sort((a, b) => ((b.date || "").localeCompare(a.date || "")));
    return results;
  } catch {
    return [];
  }
}

export async function getProjectBySlug(slug: string) {
  if (!slug) return null;

  const full = path.join(PROJECTS_DIR, `${slug}.mdx`);
  if (!(await safeStat(full))) return null;

  // Read + compile (if compile fails, throw so we can see the real error)
  const source = await fs.readFile(full, "utf8");
  const { content, frontmatter } = await compileMDX<ProjectFrontmatter>({
    source,
    options: { parseFrontmatter: true },
  });

  // return 'content' as a React node; render with {content}
  return { slug, frontmatter, content };
}