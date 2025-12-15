"use client";

import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "motion/react";

export default function FSResumeSection() {
    return (
        <SectionWrapper id="resume">
            <motion.h2 
                className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Resume
            </motion.h2>
            <div className="flex flex-col items-center gap-6 max-w-3xl mx-auto">
                <p className="text-lg text-gray-600 max-w-2xl">
                    Download my full-stack engineering resume to see my complete experience, projects, and technical skills in detail.
                </p>

                <div className="flex flex-wrap gap-4">
                    <Button className="bg-gray-900 text-white hover:bg-gray-800 border-none" asChild>
                        <Link href="/resume-fs.pdf" target="_blank" download>
                            <Download className="mr-2 h-4 w-4" />
                            Download Full-Stack Resume
                        </Link>
                    </Button>
                    <Button variant="outline" className="border border-gray-300 text-gray-900 hover:bg-gray-50" asChild>
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
