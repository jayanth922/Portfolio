"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "motion/react";
import { 
    SiPython, SiPostgresql, SiRedis, SiElasticsearch,
    SiPytorch, SiTensorflow, SiScikitlearn, SiFastapi,
    SiDocker, SiKubernetes, SiApachekafka,
    SiApachespark
} from "react-icons/si";
import { FaJava, FaDatabase, FaAws, FaCloud } from "react-icons/fa";
import { BiLogoGoLang } from "react-icons/bi";
import { BsDatabase } from "react-icons/bs";

const skills = [
    {
        category: "Languages",
        items: [
            { name: "Python", icon: SiPython },
            { name: "SQL", icon: BsDatabase },
            { name: "Java", icon: FaJava },
            { name: "Go", icon: BiLogoGoLang },
        ],
    },
    {
        category: "ML Frameworks",
        items: [
            { name: "PyTorch", icon: SiPytorch },
            { name: "TensorFlow", icon: SiTensorflow },
            { name: "scikit-learn", icon: SiScikitlearn },
            { name: "FastAPI", icon: SiFastapi },
        ],
    },
    {
        category: "MLOps",
        items: [
            { name: "Docker", icon: SiDocker },
            { name: "Kubernetes", icon: SiKubernetes },
            { name: "AWS", icon: FaAws },
            { name: "Airflow", icon: FaCloud },
        ],
    },
    {
        category: "Databases",
        items: [
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Redis", icon: SiRedis },
            { name: "Elasticsearch", icon: SiElasticsearch },
            { name: "FAISS", icon: FaDatabase },
        ],
    },
    {
        category: "Advanced ML",
        items: [
            { name: "RAG", icon: FaDatabase },
            { name: "Fine-Tuning", icon: SiPytorch },
            { name: "vLLM", icon: SiPython },
        ],
    },
    {
        category: "Data Engineering",
        items: [
            { name: "Spark", icon: SiApachespark },
            { name: "Kafka", icon: SiApachekafka },
        ],
    },
];

const certifications = [
    "AWS ML Engineer",
    "Databricks GenAI",
    "AWS AI Practitioner",
    "Oracle GenAI Pro",
];

interface AISkillsSectionProps {
    alternate?: boolean;
}

export default function AISkillsSection({ alternate }: AISkillsSectionProps) {
    return (
        <SectionWrapper id="skills" alternate={alternate}>
            <motion.h2 
                className="text-[32px] font-bold text-gray-900 mb-10 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
                Technical Skills
            </motion.h2>

            {/* Skills Grid - Card layout like Raghav */}
            <div className="max-w-4xl mx-auto mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ 
                                delay: index * 0.08, 
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            whileHover={{ y: -2 }}
                            className="bg-white border border-gray-200 rounded-lg p-5 transition-shadow duration-300 hover:shadow-md"
                        >
                            <h3 className="text-base font-semibold text-blue-600 mb-4">
                                {skill.category}
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {skill.items.map((item, itemIndex) => (
                                    <motion.div 
                                        key={item.name} 
                                        className="flex items-center gap-2"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            delay: index * 0.08 + itemIndex * 0.05,
                                            duration: 0.4,
                                            ease: [0.22, 1, 0.36, 1]
                                        }}
                                    >
                                        <item.icon className="h-5 w-5 text-gray-600" />
                                        <span className="text-sm text-gray-700">{item.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Certifications - Simple badges */}
            <motion.div 
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
                <h3 className="text-base font-semibold text-gray-900 mb-4 text-center">
                    Certifications
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {certifications.map((cert, index) => (
                        <motion.span 
                            key={cert}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                                delay: 0.3 + index * 0.08,
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1.5 bg-gray-100 text-sm text-gray-700 rounded-full transition-all duration-200 hover:bg-gray-200"
                        >
                            {cert}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </SectionWrapper>
    );
}
