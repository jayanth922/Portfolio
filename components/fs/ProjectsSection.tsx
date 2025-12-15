"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Flagship",
        description: "Progressive delivery platform with React/TypeScript admin and Spring Boot/Go services. Features percentage rollouts, targeting rules, and SLO guardrails.",
        tags: ["React", "TypeScript", "Spring Boot", "Go", "gRPC", "GraphQL", "Redis", "Kafka", "Kubernetes", "AWS"],
        github: "https://github.com/jayanth922",
        demo: null
    },
    {
        title: "MeterStack",
        description: "Usage metering platform with Kafka event streams and PostgreSQL aggregations. Includes real-time entitlements service and billing engine.",
        tags: ["NestJS", "Kafka", "PostgreSQL", "Redis", "gRPC", "Kubernetes", "Terraform", "OpenTelemetry"],
        github: "https://github.com/jayanth922",
        demo: null
    }
];

interface FSProjectsSectionProps {
    alternate?: boolean;
}

export default function FSProjectsSection({ alternate }: FSProjectsSectionProps) {
    return (
        <SectionWrapper id="projects" alternate={alternate}>
            <motion.h2 
                className="text-[32px] font-bold text-gray-900 mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Projects
            </motion.h2>
            <motion.p 
                className="text-center text-[20px] leading-[30px] text-gray-600 mb-10 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                Some of my projects that highlight my experience across software engineering and distributed systems.
            </motion.p>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="h-full group"
                    >
                        {/* Card Container - clean style with subtle hover */}
                        <div className="h-full bg-white rounded border border-gray-300 shadow-sm relative overflow-hidden project-card flex flex-col transition-all duration-200 hover:shadow-md">
                            {/* Image Wrapper with 16:9 ratio using padding-bottom trick */}
                            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                {/* Image placeholder - absolutely positioned to fill container */}
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-100 to-gray-200">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-gray-400 text-4xl font-bold">{project.title.charAt(0)}</div>
                                    </div>
                                </div>
                                
                                {/* Hover Overlay - absolutely positioned, covers entire image area, opacity 0 by default */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 z-10 project-hover">
                                    {project.github && (
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white font-bold text-base mb-2 hover:text-gray-300 transition-colors"
                                        >
                                            🔗 GitHub
                                        </Link>
                                    )}
                                    {project.demo && (
                                        <Link
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white font-bold text-base hover:text-gray-300 transition-colors"
                                        >
                                            🚀 Demo
                                        </Link>
                                    )}
                                </div>
                        </div>
                            
                            {/* Card Body - flex column layout with flex-1 to fill remaining space */}
                            <div className="p-4 flex flex-col flex-1">
                                {/* Title - h5 with semibold - matches Raghav: 20px font, 600 weight, 8px margin-bottom */}
                                <h5 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontSize: '20px', lineHeight: '24px' }}>
                                    {project.title}
                                </h5>
                                
                                {/* Description - small muted text - matches Raghav: 14px font, 21px line-height, 16px margin-bottom */}
                                <p className="text-sm text-gray-600 mb-4" style={{ fontSize: '14px', lineHeight: '21px' }}>
                                    {project.description}
                                </p>
                                
                                {/* Tags Container - matches Raghav: 8px margin-bottom, 8px gap */}
                                <div className="mb-2 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 rounded text-xs font-bold bg-gray-50 text-gray-900 border border-gray-200"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                        </div>
                                
                                {/* Links Container - pushed to bottom with mt-auto, NO border-top */}
                                <div className="mt-auto flex gap-2">
                                    {project.github && (
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-gray-900 border border-gray-900 px-2 py-1 rounded hover:bg-gray-50 transition-colors"
                                        >
                                            GitHub
                                        </Link>
                                    )}
                                    {project.demo && (
                                        <Link
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-gray-900 border border-gray-900 px-2 py-1 rounded hover:bg-gray-50 transition-colors"
                                        >
                                            Demo
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
