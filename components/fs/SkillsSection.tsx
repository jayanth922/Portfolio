"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "motion/react";

const skills = [
    {
        category: "Languages",
        items: ["Python", "Java", "Go", "TypeScript", "JavaScript", "SQL", "C++"],
    },
    {
        category: "Frontend",
        items: ["React.js", "TypeScript", "Next.js", "Vite.js", "Cypress"],
    },
    {
        category: "Backend",
        items: ["Node.js", "NestJS", "Spring", "FastAPI", "GraphQL", "gRPC"],
    },
    {
        category: "Databases",
        items: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Kafka", "Elasticsearch"],
    },
    {
        category: "Cloud & DevOps",
        items: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Helm"],
    },
    {
        category: "Observability",
        items: ["Prometheus", "Grafana", "OpenTelemetry", "ELK Stack"],
    },
];

const certifications = [
    "AWS Certified Cloud Practitioner",
    "Microsoft Certified Azure Fundamentals",
    "Oracle Cloud Infrastructure - Foundations Associate",
    "Confluent Certified Data Streaming Engineer",
    "MongoDB Certified Python Developer",
    "GitHub Foundations",
];

interface FSSkillsSectionProps {
    alternate?: boolean;
}

export default function FSSkillsSection({ alternate }: FSSkillsSectionProps) {
    return (
        <SectionWrapper id="skills" alternate={alternate}>
            <motion.h2 
                className="text-[32px] font-bold text-gray-900 mb-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Technical Skills
            </motion.h2>

            {/* Skills Grid - Clean 2-column layout */}
            <div className="max-w-3xl mx-auto mb-16">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                        >
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                                {skill.category}
                            </h3>
                            <ul className="space-y-1.5">
                                {skill.items.map((item) => (
                                    <li key={item} className="text-sm text-gray-600">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Certifications - Simple list */}
            <motion.div 
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                    >
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 text-center">
                    Certifications
                </h3>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                    {certifications.map((cert, index) => (
                        <span key={cert} className="text-sm text-gray-600">
                            {cert}{index < certifications.length - 1 && <span className="ml-6 text-gray-300">•</span>}
                        </span>
                            ))}
                        </div>
            </motion.div>
        </SectionWrapper>
    );
}
