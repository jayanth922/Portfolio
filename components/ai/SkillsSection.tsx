"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Database, Network, LineChart, Code } from "lucide-react";
import { motion } from "motion/react";

const skills = [
    {
        category: "Frameworks",
        icon: Brain,
        items: ["PyTorch", "Transformers (Hugging Face)", "scikit-learn", "TensorFlow", "FastAPI"],
    },
    {
        category: "MLOps & Infrastructure",
        icon: Cpu,
        items: ["MLflow", "Apache Airflow", "Docker", "Kubernetes", "AWS", "Microsoft Azure"],
    },
    {
        category: "Databases & Search",
        icon: Database,
        items: ["PostgreSQL", "Redis", "Elasticsearch", "MySQL", "pgvector", "FAISS"],
    },
    {
        category: "Advanced ML",
        icon: Network,
        items: ["RAG", "Fine-Tuning (LoRA/QLoRA)", "vLLM", "Apache Spark", "Apache Kafka"],
    },
    {
        category: "Languages",
        icon: Code,
        items: ["Python", "SQL", "Java", "C++", "Go", "R"],
    },
];

const certifications = [
    { name: "AWS Certified Machine Learning Engineer - Associate", category: "ML Engineering" },
    { name: "Databricks Certified Generative AI Engineer", category: "GenAI" },
    { name: "AWS Certified AI Practitioner", category: "AI" },
    { name: "Oracle Cloud Infrastructure - Generative AI Professional", category: "GenAI" },
    { name: "Oracle Cloud Infrastructure - Data Science Professional", category: "ML Engineering" },
    { name: "Oracle Cloud Infrastructure - AI Foundations Associate", category: "AI" },
    { name: "Oracle AI Vector Search - Professional", category: "GenAI" },
];

export default function AISkillsSection() {
    return (
        <SectionWrapper id="skills">
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
                        Expertise & Certifications
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

            {/* Certifications Subsection */}
            <motion.div 
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h3 className="text-xl font-semibold text-gray-300 mb-6 text-center">Certifications</h3>
                
                {/* Grouped by Category */}
                <div className="space-y-6">
                    {["ML Engineering", "GenAI", "AI"].map((category) => {
                        const categoryCerts = certifications.filter(cert => cert.category === category);
                        if (categoryCerts.length === 0) return null;
                        
                        return (
                            <div key={category} className="space-y-3">
                                <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider">{category}</h4>
                                <div className="flex flex-wrap gap-3">
                                    {categoryCerts.map((cert, index) => (
                                        <motion.div
                                            key={cert.name}
                                            className="group flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-default"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05, duration: 0.4 }}
                                            whileHover={{ y: -2 }}
                                        >
                                            <motion.div 
                                                className={`h-2 w-2 rounded-full ${
                                                    category === "ML Engineering" ? "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" :
                                                    category === "GenAI" ? "bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" :
                                                    "bg-green-400 shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                                                }`}
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                                            />
                                            <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{cert.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.category}
                        className="group flex flex-col space-y-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-blue-500/30 hover:scale-105"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, duration: 0.6 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <motion.div 
                                className="p-2 rounded-lg bg-blue-500/20 text-blue-400"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <skill.icon className="h-6 w-6" />
                            </motion.div>
                            <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">{skill.category}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skill.items.map((item, itemIndex) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 + itemIndex * 0.05, duration: 0.3 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Badge variant="secondary" className="bg-white/10 text-gray-200 hover:bg-white/20 hover:text-white border-none transition-all duration-300 cursor-default">
                                        {item}
                                    </Badge>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
