import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function ProjectCard({
  title,
  summary,
  tags,
  href = "#",
}: {
  title: string;
  summary: string;
  tags: string[];
  href?: string;
}) {
  return (
    <Card className="group h-full transition hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{summary}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border px-2 py-0.5 leading-none"
            >
              {t}
            </span>
          ))}
        </div>
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-1 text-sm font-medium"
        >
          Read case study <ArrowRight className="size-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
