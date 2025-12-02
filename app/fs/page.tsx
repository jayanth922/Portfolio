"use client";

import Link from "next/link";
import LayoutShell from "@/components/LayoutShell";
import FSAboutSection from "@/components/fs/AboutSection";
import FSProjectsSection from "@/components/fs/ProjectsSection";
import FSResumeSection from "@/components/fs/ResumeSection";
import FSSkillsSection from "@/components/fs/SkillsSection";
import FSExperienceSection from "@/components/fs/ExperienceSection";
import FSContactSection from "@/components/fs/ContactSection";
import SiteFooter from "@/components/SiteFooter";
import { motion } from "motion/react";
import { Download } from "lucide-react";

export default function FullStackPage() {
    return (
        <LayoutShell theme="dark">
            <section id="home" className="min-h-screen flex flex-col justify-center p-8 md:p-12 relative overflow-hidden">
                {/* Animated background gradient with multiple layers */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
                    <div className="absolute inset-0 bg-gradient-to-tl from-blue-600/5 via-transparent to-purple-600/5" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                </div>
                
                <motion.div 
                    className="space-y-8 max-w-4xl relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.h1 
                        className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-3xl opacity-40" />
                        <span className="relative bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Full Stack Engineer
                        </span>
                    </motion.h1>
                    <motion.p 
                        className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-light"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Building distributed systems, microservices, and scalable applications with React, Node.js, and cloud technologies.
                    </motion.p>
                    <motion.div 
                        className="flex flex-wrap gap-4 pt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link 
                                href="#projects" 
                                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    View Work
                                    <motion.span
                                        className="inline-block"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        →
                                    </motion.span>
                                </span>
                                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <motion.span
                                    className="absolute inset-0 bg-white/20"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 0.6 }}
                                />
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link 
                                href="/resume-fs.pdf"
                                download
                                className="group px-10 py-5 border-2 border-white/20 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black backdrop-blur-sm flex items-center gap-3"
                            >
                                <Download className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                                Download Resume
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link 
                                href="#contact" 
                                className="group px-10 py-5 border-2 border-white/20 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black backdrop-blur-sm"
                            >
                                Contact Me
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            <FSAboutSection />
            <FSSkillsSection />
            <FSExperienceSection />
            <FSProjectsSection />
            <FSContactSection />
            <SiteFooter theme="dark" />
        </LayoutShell>
    );
}
