// components/hero.tsx
"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-balance">
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-semibold tracking-tight sm:text-5xl"
      >
        Hi, I’m <span className="underline decoration-dashed">Your Name</span>.
        I build reliable data-driven products.
      </motion.h1>

      <p className="mt-5 text-muted-foreground">
        M.S. Software Engineering (Data Science) — projects, case studies, and impact.
      </p>

      <div className="mt-8">
        <a
          href="/projects"
          className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-secondary"
        >
          View projects <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}
