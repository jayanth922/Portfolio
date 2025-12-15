"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "motion/react";

export default function FSAboutSection() {
    return (
        <SectionWrapper id="about">
            <motion.h2 
                className="text-[32px] font-bold text-gray-900 mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                About Me
            </motion.h2>
            <div className="max-w-4xl mx-auto">
                <div className="space-y-6 text-[20px] leading-[30px] text-gray-600 text-center">
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
