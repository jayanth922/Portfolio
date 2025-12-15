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
import StarryBackground from "@/components/StarryBackground";
import { motion } from "motion/react";
import { Download, ChevronDown } from "lucide-react";

export default function FullStackPage() {
    return (
        <LayoutShell theme="light">
            <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden bg-black">
                <StarryBackground />
                <motion.div 
                    className="space-y-6 max-w-4xl mx-auto w-full relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.h1 
                        className="text-[56px] font-bold leading-[67.2px] tracking-tight text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    >
                        Full Stack Engineer
                    </motion.h1>
                    <motion.p 
                        className="text-[20px] leading-[30px] text-white/75"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        Building distributed systems, microservices, and scalable applications with React, Node.js, and cloud technologies.
                    </motion.p>
                    <motion.div 
                        className="flex flex-wrap gap-4 pt-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    >
                        <Link 
                            href="#projects" 
                            className="px-6 py-1 border border-white/75 text-white/75 rounded font-normal transition-all duration-200 hover:text-white hover:border-white"
                        >
                            View Work
                        </Link>
                        <Link 
                            href="/resume-fs.pdf"
                            download
                            className="px-6 py-1 border border-white/75 text-white/75 rounded font-normal transition-all duration-200 hover:text-white hover:border-white flex items-center gap-2"
                        >
                            <Download className="h-4 w-4" />
                            Download Resume
                        </Link>
                        <Link 
                            href="#contact" 
                            className="px-6 py-1 border border-white/75 text-white/75 rounded font-normal transition-all duration-200 hover:text-white hover:border-white"
                        >
                            Contact Me
                        </Link>
                    </motion.div>
                </motion.div>
                
                {/* Scroll indicator */}
                <motion.div 
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                >
                    <Link href="#about" className="flex flex-col items-center gap-2 text-white/50 hover:text-white/75 transition-colors">
                        <span className="text-xs tracking-wider uppercase">Scroll</span>
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        >
                            <ChevronDown className="h-5 w-5" />
                        </motion.div>
                    </Link>
                </motion.div>
            </section>

            <FSAboutSection />
            <FSSkillsSection alternate />
            <FSExperienceSection />
            <FSProjectsSection alternate />
            <FSContactSection />
            <SiteFooter theme="light" />
        </LayoutShell>
    );
}
