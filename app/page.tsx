"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Mail, Github, Linkedin, MapPin, GraduationCap, Code2, Brain } from "lucide-react";
import StarBackground from "@/components/StarBackground";

export default function GatewayPage() {

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Subtle Background */}
      <StarBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/95" />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20 md:py-32">
          <div className="mx-auto max-w-5xl text-center">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 backdrop-blur-sm"
            >
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              <span className="text-sm font-medium text-green-400">Actively seeking full-time opportunities</span>
            </motion.div>

            {/* Name with animated gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-4 text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl relative"
            >
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-2xl opacity-50 animate-pulse" />
                <span className="relative bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Jayanth Kalyanam
                </span>
              </span>
            </motion.h1>

            {/* Title & Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 space-y-3"
            >
              <p className="text-xl font-semibold text-gray-300 md:text-2xl">
                Master's Student | Aspiring Software Engineer & Data Scientist
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  <span className="text-base md:text-lg">Master's in Software Engineering, SJSU</span>
                </div>
                <span className="hidden md:inline text-gray-600">•</span>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span className="text-base md:text-lg">San Jose, CA</span>
                </div>
              </div>
            </motion.div>

            {/* Professional Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-12 mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl"
            >
              Currently pursuing my Master's in Software Engineering with a specialization in Data Science at SJSU.
              I've worked on AI projects during my internship and built several full-stack applications. I'm excited to bring
              this unique combination of skills to solve challenging problems in the industry.
            </motion.p>

            {/* Primary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-16 flex flex-wrap items-center justify-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
      <Link
                  href="#contact"
                  className="group relative flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white overflow-hidden transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Mail className="h-5 w-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">Get In Touch</span>
                  <motion.span
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Link>
              </motion.div>
            </motion.div>

            {/* Social Links */}
        <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center gap-4"
            >
              {[
                { icon: Github, href: "https://github.com/jayanth922", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/jayanth7111/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:jayanth.kalyanam@sjsu.edu", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-gray-400 ring-1 ring-white/10 transition-all hover:bg-white/10 hover:text-white hover:ring-white/20"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </motion.div>
          </div>
        </section>


        {/* I-Do, I-Am Section - Creative "Door" Concept */}
        <section className="relative border-t border-white/10 bg-black/50 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 py-20 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20 text-center"
            >
              <motion.h2 
                className="mb-6 text-5xl font-bold md:text-6xl lg:text-7xl relative inline-block"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-3xl opacity-30" />
                <span className="relative bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  I-Do, I-Am
                </span>
              </motion.h2>
              <motion.p 
                className="mx-auto max-w-2xl text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Choose a door to explore my work across different domains
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
                  className="group relative block overflow-hidden rounded-3xl border-2 border-white/10 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-black/90 p-10 md:p-14 text-center transition-all duration-700 hover:border-blue-500/60 hover:shadow-[0_0_60px_rgba(59,130,246,0.3)]"
                >
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-blue-500/0 to-blue-600/0 opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
                  
                  {/* Door Frame Effect */}
                  <div className="absolute inset-0 border-4 border-transparent bg-gradient-to-br from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 rounded-3xl" />
                  
                  {/* Animated grid pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700" style={{
                    backgroundImage: `linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                  }} />
                  
                  {/* Door Handle */}
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20">
                    <motion.div
                      className="h-14 w-14 rounded-full border-2 border-blue-400/50 bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-md shadow-lg shadow-blue-500/30"
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      whileHover={{ scale: 1.2, rotate: 180 }}
                    >
                      <div className="absolute inset-2 rounded-full bg-blue-400/30" />
                    </motion.div>
          </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      className="mb-8 inline-flex rounded-3xl bg-gradient-to-br from-blue-500/30 to-blue-600/20 p-8 ring-4 ring-blue-500/30 transition-all duration-500 group-hover:scale-110 group-hover:ring-blue-400/60 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
                      whileHover={{ rotate: [0, -15, 15, 0], scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Code2 className="h-20 w-20 text-blue-300 drop-shadow-lg" />
                    </motion.div>
                    <h3 className="mb-4 text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-300 bg-clip-text text-transparent transition-all duration-500 group-hover:from-blue-300 group-hover:via-blue-200 group-hover:to-white md:text-5xl">
                      Software Engineering
                    </h3>
                    <p className="mb-8 text-xl text-gray-300 transition-colors group-hover:text-blue-200 font-medium">
                      Open! SWE Door
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      {["React", "Node.js", "TypeScript", "AWS"].map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="rounded-lg bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 ring-1 ring-blue-500/30 group-hover:bg-blue-500/20 group-hover:ring-blue-400/50 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
          </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                  
                  {/* Corner decorations */}
                  <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                  className="group relative block overflow-hidden rounded-3xl border-2 border-white/10 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-black/90 p-10 md:p-14 text-center transition-all duration-700 hover:border-purple-500/60 hover:shadow-[0_0_60px_rgba(168,85,247,0.3)]"
                >
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-500/0 to-purple-600/0 opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
                  
                  {/* Door Frame Effect */}
                  <div className="absolute inset-0 border-4 border-transparent bg-gradient-to-br from-purple-500/0 via-purple-500/20 to-purple-500/0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 rounded-3xl" />
                  
                  {/* Animated grid pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700" style={{
                    backgroundImage: `linear-gradient(rgba(168,85,247,0.1) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(168,85,247,0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                  }} />
                  
                  {/* Door Handle */}
                  <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20">
                    <motion.div
                      className="h-14 w-14 rounded-full border-2 border-purple-400/50 bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-md shadow-lg shadow-purple-500/30"
                      animate={{ x: [0, -6, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      whileHover={{ scale: 1.2, rotate: -180 }}
                    >
                      <div className="absolute inset-2 rounded-full bg-purple-400/30" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
        <motion.div
                      className="mb-8 inline-flex rounded-3xl bg-gradient-to-br from-purple-500/30 to-purple-600/20 p-8 ring-4 ring-purple-500/30 transition-all duration-500 group-hover:scale-110 group-hover:ring-purple-400/60 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]"
                      whileHover={{ rotate: [0, 15, -15, 0], scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Brain className="h-20 w-20 text-purple-300 drop-shadow-lg" />
                    </motion.div>
                    <h3 className="mb-4 text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-300 bg-clip-text text-transparent transition-all duration-500 group-hover:from-purple-300 group-hover:via-pink-200 group-hover:to-white md:text-5xl">
                      Data Science & AI
                    </h3>
                    <p className="mb-8 text-xl text-gray-300 transition-colors group-hover:text-purple-200 font-medium">
                      Open! MLE Door
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      {["Python", "PyTorch", "TensorFlow", "MLOps"].map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="rounded-lg bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 ring-1 ring-purple-500/30 group-hover:bg-purple-500/20 group-hover:ring-purple-400/50 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
          </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 translate-x-full bg-gradient-to-l from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-0" />
                  
                  {/* Corner decorations */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-purple-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-purple-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative border-t border-white/10 bg-black/50 backdrop-blur-sm">
          <div className="mx-auto max-w-4xl px-4 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Let's Connect
              </h2>
              <p className="mb-8 text-lg text-gray-400">
                I'm actively seeking full-time opportunities in Software Engineering and Data Science.
                Open to internships and new grad positions starting May 2025.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:jayanth.kalyanam@sjsu.edu"
                  className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <Mail className="h-5 w-5" />
                  Send Email
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
