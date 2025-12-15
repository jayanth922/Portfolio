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
            "Designed and implemented a modular image processing pipeline in Python covering segmentation, clutter rejection, centering, feature extraction, classification, and results reporting.",
            "Implemented Canny edge segmentation, Doppler-based clutter suppression, and centroid-based centering; engineered rotation- and scale-invariant Zernike-moment features with statistical descriptors.",
            "Integrated Probabilistic Neural Network with Parzen and Bayes decision logic, achieving 100% accuracy with Zernike features. Delivered maintainable Python codebase using OpenCV, NumPy, SciPy, scikit-image, and mahotas.",
        ],
    },
];

export default function FSExperienceSection() {
    return (
        <SectionWrapper id="experience">
            <motion.h2 
                className="text-[32px] font-bold text-gray-900 mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
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
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-white bg-gray-900 z-10" />

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-bold text-gray-900">
                                {exp.role}
                            </h3>
                            <div className="flex items-center text-sm text-gray-500 mt-1 sm:mt-0">
                                <Calendar className="mr-1 h-4 w-4" />
                                {exp.period}
                            </div>
                        </div>

                        <div className="flex items-center text-gray-700 font-medium mb-4">
                            <Briefcase className="mr-2 h-4 w-4" />
                            {exp.company}
                            {exp.location && <span className="ml-2 text-sm text-gray-500">• {exp.location}</span>}
                        </div>

                        <ul className="list-disc list-outside ml-4 space-y-2 text-gray-600">
                            {exp.description.map((item, i) => (
                                <li key={i}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
