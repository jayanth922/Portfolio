"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Flagship",
        description: "Progressive Delivery Platform",
        content: "Built a progressive delivery platform with React/TypeScript admin interface and Spring Boot/Go services exposing REST, GraphQL, and gRPC APIs. Implemented percentage rollouts, targeting rules, RBAC, and audit logging with PostgreSQL, Redis caching, and Kafka for events. Added SLO guardrails using OpenTelemetry metrics with Prometheus/Grafana to auto-pause flags on latency spikes. Deployed on AWS Kubernetes using Docker, Helm, Terraform, and GitHub Actions.",
        tags: ["React", "TypeScript", "Spring Boot", "Go", "gRPC", "GraphQL", "Redis", "Kafka", "Kubernetes", "AWS"],
        color: "blue",
        github: "https://github.com/jayanth922"
    },
    {
        title: "MeterStack",
        description: "Usage Metering & Billing Platform",
        content: "Delivered a usage metering platform with authenticated ingestion API, Kafka for ordered event streams, hourly aggregations into PostgreSQL, and Redis hot counters for fast reads. Implemented entitlements service answering allow/deny decisions in real-time over REST and gRPC, plus a billing engine generating invoices from plan definitions with CSV and PDF exports. Deployed to AWS Kubernetes with Docker, Helm, Terraform, CI/CD via GitHub Actions, and instrumented end-to-end tracing with OpenTelemetry and Prometheus/Grafana dashboards.",
        tags: ["NestJS", "Kafka", "PostgreSQL", "Redis", "gRPC", "Kubernetes", "Terraform", "OpenTelemetry"],
        color: "purple",
        github: "https://github.com/jayanth922"
    },
    {
        title: "SearchStack",
        description: "Full-text search and analytics platform",
        content: "Built a search and analytics platform using Elasticsearch for full-text search across large document collections. FastAPI backend handles document ingestion, search queries, and aggregations with async request processing. MongoDB stores document metadata and user configurations, while Elasticsearch indexes content for fast search. React frontend with real-time search suggestions, faceted filtering, and analytics dashboards showing search trends and popular queries. Implemented OAuth2 authentication with JWT tokens, rate limiting per user tier, and search result caching. Deployed on Azure Container Instances with Azure Cosmos DB for MongoDB API and managed Elasticsearch service.",
        tags: ["FastAPI", "Elasticsearch", "MongoDB", "React", "OAuth2", "Azure", "Python"],
        color: "green",
        github: "https://github.com/jayanth922"
    },
    {
        title: "EventStream",
        description: "Serverless real-time event streaming platform",
        content: "Developed a serverless event streaming platform for processing and routing real-time events. AWS Lambda functions handle event ingestion, transformation, and routing with Python. DynamoDB stores event metadata and routing rules, while SQS queues buffer events for processing. WebSocket API Gateway enables real-time event delivery to connected clients. React frontend with real-time event visualization, filtering, and replay capabilities. Implemented event schema validation, dead-letter queues for failed events, and CloudWatch metrics for monitoring. Uses serverless framework for deployment and infrastructure-as-code with AWS SAM templates.",
        tags: ["Python", "AWS Lambda", "DynamoDB", "SQS", "WebSockets", "React", "Serverless"],
        color: "blue",
        github: "https://github.com/jayanth922"
    },
    {
        title: "DataVault",
        description: "Secure document management with versioning",
        content: "Built a secure document management system with version control and collaboration features. FastAPI backend with role-based access control, document versioning, and audit logging. MongoDB stores documents with GridFS for large file storage, MySQL handles user management and permissions. WebSocket connections enable real-time collaboration indicators and live document updates. React frontend with drag-and-drop uploads, version history visualization, and document preview. Implemented file encryption at rest, secure file sharing with expiring links, and comprehensive audit trails. Deployed on Azure App Service with Azure Database for MySQL and MongoDB Atlas.",
        tags: ["FastAPI", "MongoDB", "MySQL", "WebSockets", "React", "Azure", "Python"],
        color: "purple",
        github: "https://github.com/jayanth922"
    }
];

const colorMap = {
    blue: "rgba(59,130,246,0.3)",
    purple: "rgba(168,85,247,0.3)",
    green: "rgba(34,197,94,0.3)"
};

export default function FSProjectsSection() {
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
                        Featured Projects
                    </span>
                </motion.h2>
                <motion.div 
                    className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: 96 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                />
            </motion.div>
            <div className="grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
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
                            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="group"
                        >
                            <div className="relative h-full">
                                {/* Animated background gradient */}
                                <div className={`absolute -inset-1 bg-gradient-to-r ${getGradientClasses(project.color)} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                                
                                {/* Main card */}
                                <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl p-6 transition-all duration-500 group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                                    {/* Corner accent */}
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${accent.corner} to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                    
                                    {/* Number badge */}
                                    <motion.div 
                                        className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-lg"
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
                                            {project.tags.slice(0, 4).map((tag, tagIndex) => (
                                                <motion.span
                                                    key={tag}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.15 + tagIndex * 0.05, duration: 0.3 }}
                                                    whileHover={{ scale: 1.1, y: -2 }}
                                                    className={`px-3 py-1 rounded-lg text-xs font-medium ${accent.tag} transition-all duration-300 cursor-default`}
                                                >
                                                    {tag}
                                                </motion.span>
                                            ))}
                                            {project.tags.length > 4 && (
                                                <span className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 text-gray-400 border border-white/10">
                                                    +{project.tags.length - 4}
                                                </span>
                                            )}
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
