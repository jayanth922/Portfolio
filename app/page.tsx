"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function GatewayPage() {

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20 md:py-32 bg-black overflow-hidden">
          {/* Twinkling Stars - Dense like Raghav's */}
          <div className="absolute inset-0">
            {/* Layer 1 - Tiny dim stars (150) */}
            {[...Array(150)].map((_, i) => (
              <div
                key={`s1-${i}`}
                className="absolute w-[1px] h-[1px] bg-white rounded-full animate-twinkle"
                style={{
                  left: `${(i * 13 + 7) % 100}%`,
                  top: `${(i * 17 + 3) % 100}%`,
                  opacity: 0.4 + (i % 5) * 0.1,
                  animationDelay: `${(i * 0.2) % 5}s`
                }}
              />
            ))}
            {/* Layer 2 - Small stars (100) */}
            {[...Array(100)].map((_, i) => (
              <div
                key={`s2-${i}`}
                className="absolute w-[1.5px] h-[1.5px] bg-white rounded-full animate-twinkle"
                style={{
                  left: `${(i * 19 + 11) % 100}%`,
                  top: `${(i * 23 + 13) % 100}%`,
                  opacity: 0.5 + (i % 4) * 0.12,
                  animationDelay: `${(i * 0.25) % 6}s`
                }}
              />
            ))}
            {/* Layer 3 - Medium stars (50) */}
            {[...Array(50)].map((_, i) => (
              <div
                key={`s3-${i}`}
                className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle"
                style={{
                  left: `${(i * 29 + 5) % 100}%`,
                  top: `${(i * 31 + 7) % 100}%`,
                  opacity: 0.6 + (i % 3) * 0.13,
                  animationDelay: `${(i * 0.3) % 4}s`
                }}
              />
            ))}
            {/* Layer 4 - Slightly larger stars (20) */}
            {[...Array(20)].map((_, i) => (
              <div
                key={`s4-${i}`}
                className="absolute w-[2.5px] h-[2.5px] bg-white rounded-full animate-twinkle"
                style={{
                  left: `${(i * 37 + 17) % 100}%`,
                  top: `${(i * 41 + 19) % 100}%`,
                  opacity: 0.8,
                  animationDelay: `${(i * 0.35) % 4}s`
                }}
              />
            ))}
          </div>

          {/* Subtle vignette */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)'
            }}
          />
          
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0 }}
              className="mb-4 text-[56px] font-bold leading-[67.2px] tracking-tight text-white"
            >
              Jayanth Kalyanam
            </motion.h1>

            {/* Title & Education */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-8 space-y-3"
            >
              <h5 className="text-xl font-normal text-white/75">
                Software Engineer | ML Engineer
              </h5>
              <div className="flex flex-wrap items-center justify-center gap-4 text-white/75">
                <span className="text-base">MS Software Engineering, SJSU</span>
                <span className="hidden md:inline">•</span>
                <span className="text-base">San Jose, CA</span>
          </div>
            </motion.div>

            {/* Brief Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-10 mx-auto max-w-xl text-[18px] leading-[28px] text-white/70"
            >
              Exploring both worlds — building scalable systems and intelligent applications.
            </motion.p>

            {/* Primary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="#doors"
                className="px-6 py-2 border border-white/75 text-white/75 rounded font-normal transition-all duration-200 hover:text-white hover:border-white flex items-center gap-2"
              >
                View My Work
            <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className="px-6 py-2 border border-white/75 text-white/75 rounded font-normal transition-all duration-200 hover:text-white hover:border-white"
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Link href="#doors" className="flex flex-col items-center gap-2 text-white/50 hover:text-white/75 transition-colors">
              <span className="text-xs tracking-wider uppercase">Explore</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ChevronDown className="h-5 w-5" />
        </motion.div>
      </Link>
          </motion.div>
        </section>


        {/* Explore My Work Section */}
        <section id="doors" className="relative border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-20 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center"
            >
              <motion.h2 
                className="mb-4 text-[32px] font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Explore My Work
              </motion.h2>
              <motion.p 
                className="mx-auto max-w-2xl text-[20px] leading-[30px] text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Two domains, one engineer. Pick a path to see relevant projects and experience.
              </motion.p>
            </motion.div>

            {/* Two Doors */}
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              {/* Full Stack Door */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
      <Link
                  href="/fs"
                  className="group block border border-gray-300 p-8 text-center transition-all duration-200 hover:border-gray-400 hover:shadow-sm"
                >
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">
                    Software Engineering
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Distributed systems, microservices, and scalable web applications
                  </p>
                  <p className="mb-6 text-sm text-gray-500">
                    REST/GraphQL APIs • Cloud Infrastructure • CI/CD Pipelines
                  </p>
                  <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
                    {["TypeScript", "React", "Node.js", "Spring Boot", "AWS", "K8s"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-bold bg-gray-50 text-gray-900 border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 group-hover:gap-3 transition-all">
                    Explore <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>

              {/* Data Science & AI Door */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Link
                  href="/ai"
                  className="group block border border-gray-300 p-8 text-center transition-all duration-200 hover:border-gray-400 hover:shadow-sm"
                >
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">
                    Machine Learning & AI
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Production ML systems, LLM applications, and data pipelines
                  </p>
                  <p className="mb-6 text-sm text-gray-500">
                    Model Training • RAG Systems • MLOps & Deployment
                  </p>
                  <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
                    {["Python", "PyTorch", "LangChain", "FastAPI", "AWS SageMaker"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-bold bg-gray-50 text-gray-900 border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 group-hover:gap-3 transition-all">
                    Explore <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-4xl px-4 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-4 text-[32px] font-bold text-gray-900">
                Let's Connect
              </h2>
              <p className="mb-8 text-[18px] leading-[28px] text-gray-600">
                Open to co-op roles from Jan 2026 and full-time from May 2026.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:jayanth.kalyanam@sjsu.edu"
                  className="px-6 py-2 border border-gray-900 text-gray-900 rounded font-normal transition-all duration-200 hover:bg-gray-50"
                >
                  Send Email
                </a>
                <a
                  href="https://linkedin.com/in/jayanth7111/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 border border-gray-900 text-gray-900 rounded font-normal transition-all duration-200 hover:bg-gray-50"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/jayanth922"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 border border-gray-900 text-gray-900 rounded font-normal transition-all duration-200 hover:bg-gray-50"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white py-8">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Jayanth Kalyanam. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
