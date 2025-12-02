"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "motion/react";
import { Github } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "OpsPilot",
        description: "MCP-based DevOps copilot with multi-agent workflows",
        content: "DevOps copilot orchestrating multi-agent workflows for monitoring, incident forecasting, and automated remediation. Policy-driven architecture with role-based approvals and MCP connectors to observability platforms.",
        tags: ["Python", "OpenTelemetry", "Kafka", "MCP", "AutoGen"],
        color: "blue",
        github: "https://github.com/jayanth922"
    },
    {
        title: "PulseRank",
        description: "Full-stack ML pipeline for news ranking",
        content: "End-to-end ML pipeline from data ingestion to production serving. Click-through prediction model with contextual bandit policy, MLOps infrastructure, and real-time inference service with canary deployments.",
        tags: ["Python", "PyTorch", "Apache Airflow", "MLflow", "FastAPI", "Kubernetes"],
        color: "purple",
        github: "https://github.com/jayanth922"
    }
];

const colorMap = {
    blue: "rgba(59,130,246,0.3)",
    purple: "rgba(168,85,247,0.3)",
    green: "rgba(34,197,94,0.3)"
};

export default function AIProjectsSection() {
    return (
        <SectionWrapper id="projects">
            <motion.div className="mb-16">
                <motion.h2 
                    className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 relative inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-2xl opacity-30" />
                    <span className="relative bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Projects
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
            <div className="grid gap-8 md:gap-10 md:grid-cols-2">
                {projects.map((project, index) => {
                    const getGradientClasses = (color: string) => {
                        if (color === "blue") return "from-blue-600/20 via-blue-500/10 to-transparent";
                        if (color === "purple") return "from-purple-600/20 via-purple-500/10 to-transparent";
                        return "from-green-600/20 via-green-500/10 to-transparent";
                    };
                    
                    const getAccentClasses = (color: string) => {
                        if (color === "blue") {
                            return {
                                corner: "from-blue-500/10",
                                title: "group-hover:from-blue-400 group-hover:to-blue-300",
                                github: "bg-blue-500/10 hover:text-blue-400 hover:bg-blue-500/20",
                                tag: "bg-blue-500/10 text-blue-300 border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40",
                                border: "group-hover:border-blue-500/30"
                            };
                        }
                        if (color === "purple") {
                            return {
                                corner: "from-purple-500/10",
                                title: "group-hover:from-purple-400 group-hover:to-purple-300",
                                github: "bg-purple-500/10 hover:text-purple-400 hover:bg-purple-500/20",
                                tag: "bg-purple-500/10 text-purple-300 border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/40",
                                border: "group-hover:border-purple-500/30"
                            };
                        }
                        return {
                            corner: "from-green-500/10",
                            title: "group-hover:from-green-400 group-hover:to-green-300",
                            github: "bg-green-500/10 hover:text-green-400 hover:bg-green-500/20",
                            tag: "bg-green-500/10 text-green-300 border-green-500/20 hover:bg-green-500/20 hover:border-green-500/40",
                            border: "group-hover:border-green-500/30"
                        };
                    };
                    
                    const accent = getAccentClasses(project.color);
                    
                    return (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="group"
                        >
                            <div className="relative h-full">
                                {/* Animated background gradient */}
                                <div className={`absolute -inset-1 bg-gradient-to-r ${getGradientClasses(project.color)} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                                
                                {/* Main card */}
                                <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl p-6 transition-all duration-500 group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-purple-500/10">
                                    {/* Corner accent */}
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${accent.corner} to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                    
                                    {/* Number badge */}
                                    <motion.div 
                                        className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-lg"
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {index + 1}
                                    </motion.div>
                                    
                                    {/* Header */}
                                    <div className="relative z-10 mb-4">
                                        <div className="flex items-start justify-between gap-4 mb-2">
                                            <div className="flex-1">
                                                <h3 className={`text-2xl font-bold mb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent ${accent.title} transition-all duration-500`}>
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm text-gray-400 font-medium">{project.description}</p>
                                            </div>
                                            {project.github && (
                                                <motion.div
                                                    whileHover={{ scale: 1.2, rotate: 15 }}
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    <Link
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`p-2 rounded-lg ${accent.github} text-gray-400 transition-all duration-300`}
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <Github className="h-5 w-5" />
                                                    </Link>
                                                </motion.div>
                                            )}
                                        </div>
                        </div>
                                    
                                    {/* Content */}
                                    <div className="relative z-10 space-y-4">
                                        <p className="text-sm text-gray-300 leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors">
                                            {project.content}
                                        </p>
                                        
                                        {/* Tags with staggered animation */}
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {project.tags.map((tag, tagIndex) => (
                                                <motion.span
                                                    key={tag}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.2 + tagIndex * 0.05, duration: 0.3 }}
                                                    whileHover={{ scale: 1.1, y: -2 }}
                                                    className={`px-3 py-1 rounded-lg text-xs font-medium ${accent.tag} transition-all duration-300 cursor-default`}
                                                >
                                                    {tag}
                                                </motion.span>
                                            ))}
                                        </div>
                        </div>
                                    
                                    {/* Hover effect overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                        initial={false}
                                    />
                                    
                                    {/* Animated border on hover */}
                                    <div className={`absolute inset-0 rounded-2xl border-2 border-transparent ${accent.border} transition-all duration-500 pointer-events-none`} />
                                </div>
                        </div>
                        </motion.div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}
