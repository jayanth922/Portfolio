"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "motion/react";

const paragraphs = [
    "I'm doing my Masters in Software Engineering at San Jose State, focusing on Data Science. Did my undergrad at VIT in CS with an AI specialization — that's where I started messing around with neural networks and realized I actually enjoyed building ML systems.",
    "These days I mostly work on LLM fine-tuning, RAG pipelines, and getting models into production. PyTorch and Hugging Face are my go-to, and I've picked up Airflow and MLflow along the way.",
    "Looking for co-op roles starting January 2026, full-time from May 2026."
];

export default function AIAboutSection() {
    return (
        <SectionWrapper id="about">
            <motion.h2 
                className="text-[32px] font-bold text-gray-900 mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
                About Me
            </motion.h2>
            <div className="max-w-4xl mx-auto">
                <div className="space-y-6 text-[18px] leading-[28px] text-gray-600 text-center">
                    {paragraphs.map((text, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ 
                                duration: 0.6, 
                                delay: index * 0.15,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            {text}
                        </motion.p>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
