"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "motion/react";

const experiences = [
    {
        role: "AI & ML Developer Intern",
        company: "Sunlux Technovations",
        period: "Jan 2023 - Jun 2023",
        location: "Bengaluru, India",
        description: [
            "Built an end-to-end image classification pipeline covering segmentation, clutter rejection, centering, feature extraction, model training, and evaluation.",
            "Stabilized inputs using Canny edge-based segmentation, Doppler filtering for clutter suppression, and centroid-based centering; centering achieved approximately 90% success on the database.",
            "Engineered rotation and scale invariant Zernike moment features and evaluated alternatives including statistical descriptors and polar transform to select the most reliable representation.",
            "Implemented a Probabilistic Neural Network using Parzen window density estimation and a Bayes decision rule for classification.",
            "Zernike features achieved 100% accuracy in both evaluations. Statistical descriptors achieved 57% and 53%. The polar transform achieved 100% and 55%.",
            "Delivered a reproducible Python implementation using OpenCV, NumPy, SciPy, scikit-image, and mahotas with documented experiments and results.",
        ],
    },
];

export default function AIExperienceSection() {
    return (
        <SectionWrapper id="experience">
            <motion.h2 
                className="text-[32px] font-bold text-gray-900 mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
                Experience
            </motion.h2>
            <div className="relative border-l-2 border-gray-300 ml-4 space-y-12 max-w-4xl mx-auto">
                {experiences.map((exp, index) => (
                    <motion.div 
                        key={index} 
                        className="relative pl-8 md:pl-12 group"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ 
                            duration: 0.7, 
                            delay: index * 0.15,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        {/* Timeline Dot */}
                        <motion.div 
                            className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-white bg-gray-900 z-10"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                                delay: index * 0.15 + 0.2,
                                duration: 0.4,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        />

                        <motion.div 
                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                                delay: index * 0.15 + 0.1,
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <h3 className="text-xl font-bold text-gray-900">
                                {exp.role}
                            </h3>
                            <div className="flex items-center text-sm text-gray-500 mt-1 sm:mt-0">
                                <Calendar className="mr-1 h-4 w-4" />
                                {exp.period}
                            </div>
                        </motion.div>

                        <motion.div 
                            className="flex items-center text-gray-700 font-medium mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                                delay: index * 0.15 + 0.15,
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <Briefcase className="mr-2 h-4 w-4" />
                            {exp.company}
                            {exp.location && <span className="ml-2 text-sm text-gray-500">• {exp.location}</span>}
                        </motion.div>

                        <ul className="list-disc list-outside ml-4 space-y-2 text-gray-600">
                            {exp.description.map((item, i) => (
                                <motion.li 
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        delay: index * 0.15 + 0.2 + i * 0.08,
                                        duration: 0.4,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
