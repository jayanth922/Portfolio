"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
    {
        quote: "Their research on LLM optimization was groundbreaking for our product.",
        author: "Dr. Emily Zhang",
        role: "AI Research Lead"
    },
    {
        quote: "Built a robust computer vision pipeline that exceeded our accuracy requirements.",
        author: "James Wilson",
        role: "Director of Engineering"
    },
    {
        quote: "A rare combination of theoretical knowledge and practical engineering skills.",
        author: "Robert Brown",
        role: "Chief Data Scientist"
    },
];

export default function AITestimonialsSection() {
    return (
        <SectionWrapper id="testimonials">
            <motion.h2 
                className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-12 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                What Others Say
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-3">
                {testimonials.map((t, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, duration: 0.6 }}
                    >
                        <Card className="group bg-white/5 border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/20">
                            <CardContent className="pt-6 relative">
                                <motion.div
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <Quote className="absolute top-4 left-4 h-8 w-8 text-purple-400 opacity-30 group-hover:opacity-50 transition-opacity" />
                                </motion.div>
                                <p className="text-gray-300 italic mb-6 relative z-10 pl-4 group-hover:text-gray-200 transition-colors">
                                    "{t.quote}"
                                </p>
                                <div className="flex items-center gap-3">
                                    <motion.div 
                                        className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300 font-bold border border-purple-500/30 group-hover:bg-purple-500/30 group-hover:border-purple-500/50 transition-all"
                                        whileHover={{ scale: 1.1, rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {t.author[0]}
                                    </motion.div>
                                    <div>
                                        <div className="font-semibold text-white group-hover:text-purple-300 transition-colors">{t.author}</div>
                                        <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">{t.role}</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
