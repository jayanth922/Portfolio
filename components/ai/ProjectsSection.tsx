"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "OpsPilot",
        description: "AI agents that monitor infrastructure, predict incidents, and auto-remediate issues.",
        github: "https://github.com/jayanth922",
        demo: "#", // TODO: Add demo link
    },
    {
        title: "PulseRank",
        description: "News recommendation system with bandit-based ranking and full MLOps pipeline.",
        github: "https://github.com/jayanth922",
        demo: "#", // TODO: Add demo link
    }
];

interface AIProjectsSectionProps {
    alternate?: boolean;
}

export default function AIProjectsSection({ alternate }: AIProjectsSectionProps) {
    return (
        <SectionWrapper id="projects" alternate={alternate}>
            <motion.h2 
                className="text-[32px] font-bold text-gray-900 mb-10 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
                Projects
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ 
                            duration: 0.6, 
                            delay: index * 0.12,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        <motion.div 
                            className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 h-full flex flex-col"
                            whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        >
                            {/* Image placeholder */}
                            <div className="aspect-video bg-gray-100 flex items-center justify-center">
                                <span className="text-5xl font-bold text-gray-300">{project.title.charAt(0)}</span>
                            </div>
                            
                            {/* Content */}
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                    {project.description}
                                </p>
                                
                                {/* Links */}
                                <div className="flex gap-3 mt-auto">
                                    {project.github && (
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm text-gray-700 hover:text-gray-900 transition-colors"
                                        >
                                            <Github className="h-4 w-4" />
                                            GitHub
                                        </Link>
                                    )}
                                    {project.demo && (
                                        <Link
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm text-gray-700 hover:text-gray-900 transition-colors"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            Demo
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
