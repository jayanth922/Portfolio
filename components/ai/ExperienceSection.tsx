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
                        Experience
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
            <div className="relative border-l-2 border-white/20 ml-3 md:ml-6 space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div 
                        key={index} 
                        className="relative pl-8 md:pl-12 group"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                    >
                        {/* Animated Timeline Dot */}
                        <motion.div 
                            className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-black bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                        />
                        
                        {/* Animated connecting line */}
                        <motion.div
                            className="absolute -left-[2px] top-4 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
                        />

                        <motion.div 
                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                                {exp.role}
                            </h3>
                            <div className="flex items-center text-sm text-gray-400 mt-1 sm:mt-0">
                                <Calendar className="mr-1 h-4 w-4" />
                                {exp.period}
                            </div>
                        </motion.div>

                        <motion.div 
                            className="flex items-center text-blue-400 font-medium mb-4"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Briefcase className="mr-2 h-4 w-4" />
                            {exp.company}
                            {exp.location && <span className="ml-2 text-sm text-gray-400">• {exp.location}</span>}
                        </motion.div>

                        <ul className="list-disc list-outside ml-4 space-y-2 text-gray-300">
                            {exp.description.map((item, i) => (
                                <motion.li 
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 + i * 0.1 + 0.4 }}
                                    className="group/item"
                                >
                                    <span className="group-hover/item:text-white transition-colors duration-300">
                                        {item}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
