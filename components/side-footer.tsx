import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-10">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Name
        </p>
        <nav className="flex items-center gap-4">
          <Link
            href="https://github.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded p-2 hover:bg-secondary"
          >
            <Github className="size-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded p-2 hover:bg-secondary"
          >
            <Linkedin className="size-5" />
          </Link>
          <Link
            href="mailto:you@example.com"
            aria-label="Email"
            className="rounded p-2 hover:bg-secondary"
          >
            <Mail className="size-5" />
          </Link>
        </nav>
      </div>
    </footer>
  );
}
