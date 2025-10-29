import Section from "@/components/section";
import ProjectCard from "@/components/project-card";
import { getAllProjects } from "@/lib/projects";

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <Section title="Projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard
            key={p.slug}
            title={p.title}
            summary={p.summary}
            tags={p.tags || []}
            href={`/projects/${p.slug}`}
          />
        ))}
      </div>
    </Section>
  );
}
