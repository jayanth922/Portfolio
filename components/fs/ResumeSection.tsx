"use client";

import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "motion/react";

export default function FSResumeSection() {
    return (
        <SectionWrapper id="resume">
            <motion.div className="mb-12 text-center">
                <motion.h2 
                    className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 relative inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-2xl opacity-30" />
                    <span className="relative bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Resume
                    </span>
                </motion.h2>
                <motion.div 
                    className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"
                    initial={{ width: 0 }}
                    whileInView={{ width: 96 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                />
            </motion.div>
            <div className="flex flex-col items-center gap-6 max-w-3xl mx-auto">
                <p className="text-lg text-gray-300 max-w-2xl">
                    Download my full-stack engineering resume to see my complete experience, projects, and technical skills in detail.
                </p>

                <div className="flex flex-wrap gap-4">
                    <Button className="bg-blue-600 hover:bg-blue-500 text-white border-none shadow-[0_0_15px_rgba(37,99,235,0.5)]" asChild>
                        <Link href="/resume-fs.pdf" target="_blank" download>
                            <Download className="mr-2 h-4 w-4" />
                            Download Full-Stack Resume
                        </Link>
                    </Button>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                        <Link href="/resume" target="_blank">
                            <FileText className="mr-2 h-4 w-4" />
                            View Online
                        </Link>
                    </Button>
                </div>
            </div>
        </SectionWrapper>
    );
}
