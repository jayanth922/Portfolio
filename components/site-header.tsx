"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(href + "/");
  return (
    <Link
      href={href}
      className={cn(
        "rounded-md px-3 py-2 text-sm transition hover:bg-secondary",
        active && "bg-secondary"
      )}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-semibold tracking-tight">
          Your&nbsp;Name
        </Link>

        <nav className="flex items-center gap-3">
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>

          <Button variant="outline" asChild>
            <Link href="/resume">Résumé</Link>
          </Button>

          {/* small hint for ⌘K; the palette mounts in layout */}
          <span className="hidden text-xs text-muted-foreground sm:inline">
            ⌘K
          </span>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
