"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "motion/react";

export default function FSAboutSection() {
    return (
        <SectionWrapper id="about">
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
                        About Me
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
            <div className="max-w-3xl mx-auto">
                <div className="space-y-6 text-lg text-gray-300 text-center">
                    <p>
                        I'm a Master's student in Software Engineering at San Jose State University, specializing in Data Science.
                        My background includes a Bachelor's in Computer Science with an AI specialization from VIT, and I've
                        worked on real-world projects ranging from image processing pipelines to distributed systems.
                    </p>
                    <p>
                        I build full-stack applications using React, TypeScript, Node.js, and modern cloud technologies.
                        My experience includes working with microservices, implementing REST and GraphQL APIs, and deploying
                        scalable systems on AWS Kubernetes. I'm passionate about writing clean, maintainable code and
                        building systems that solve real problems.
                    </p>
                    <p>
                        Currently seeking full-time opportunities where I can contribute to building impactful software
                        solutions while continuing to grow as an engineer.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}
