"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Highlights from "@/components/highlights";

export default function Home() {
  return (
    <>
      <section className="py-24">
        <div className="mx-auto max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
          >
            Hi, I’m{" "}
            <span className="bg-gradient-to-t from-primary/30 to-primary/30 bg-[length:100%_0.4em] bg-left-bottom bg-no-repeat">
              Your Name
            </span>
            . I build reliable data-driven products.
          </motion.h1>

          <p className="mt-5 text-lg text-muted-foreground">
            M.S. Software Engineering (Data Science) — projects, case studies, and impact.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href="/projects">View projects</a>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/resume.pdf">Download résumé</Link>
            </Button>
          </div>
        </div>
      </section>

      <Highlights />
    </>
  );
}
