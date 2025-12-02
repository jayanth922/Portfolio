"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const blogs = [
    {
        title: "Foundation Models: Large Transformers Pre-trained on Massive Diverse Corpora",
        snippet: "Exploring transformer architectures and their applications in modern AI systems.",
        date: "2024",
        category: "AI/ML",
        link: "https://medium.com/@jayanth.kalyanam/in-recent-years-foundation-models-large-transformers-pre-trained-on-massive-diverse-corpora-2027d530b068"
    },
    {
        title: "Predicting Customer Churn with SEMMA Methodology",
        snippet: "Applying structured data science methodology to predict customer churn.",
        date: "2024",
        category: "Data Science",
        link: "https://medium.com/@jayanth.kalyanam/a-hands-on-guide-to-data-science-with-semma-methodology-predicting-customer-churn-f2677ce28fdd"
    },
    {
        title: "Predicting Airbnb Prices in NYC",
        snippet: "Machine learning model for price prediction using feature engineering and regression.",
        date: "2024",
        category: "Data Science",
        link: "https://medium.com/@jayanth.kalyanam/predicting-airbnb-prices-in-nyc-a-hands-on-data-science-project-28843256dc36"
    },
    {
        title: "Predicting Wine Quality Using Machine Learning",
        snippet: "Comparative analysis of ML algorithms for quality prediction.",
        date: "2024",
        category: "Machine Learning",
        link: "https://medium.com/@jayanth.kalyanam/predicting-wine-quality-using-machine-learning-a-hands-on-guide-681476bbe2ca"
    },
    {
        title: "Predicting Water Quality: A CRISP-DM Approach",
        snippet: "End-to-end data science project following industry-standard methodology.",
        date: "2024",
        category: "Data Science",
        link: "https://medium.com/@jayanth.kalyanam/predicting-water-quality-a-data-science-journey-using-crisp-dm-b164c05c2260"
    }
];

export default function AIBlogSection() {
    return (
        <SectionWrapper id="blogs">
            <motion.div className="mb-16 text-center">
                <motion.h2 
                    className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 relative inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-2xl opacity-30" />
                    <span className="relative bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Latest Articles
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
            <div className="grid gap-6 md:grid-cols-3">
                {blogs.map((blog, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                        <Card className="group cursor-pointer bg-white/5 border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 overflow-hidden">
                            <motion.div
                                whileHover={{ scale: 1.02, y: -4 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <CardHeader className="pb-3">
                                    <div className="flex justify-between items-center mb-3">
                                        <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-none text-xs font-medium">
                                            {blog.category}
                                        </Badge>
                                        <span className="text-xs text-gray-500">{blog.date}</span>
                                    </div>
                                    <CardTitle className="text-base font-semibold text-white leading-snug group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                                        {blog.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <p className="text-sm text-gray-400 mb-4 leading-relaxed line-clamp-2">{blog.snippet}</p>
                                    <Link 
                                        href={blog.link} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors group/link"
                                    >
                                        Read on Medium
                                        <motion.span
                                            className="ml-1.5"
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <ArrowRight className="h-3.5 w-3.5" />
                                        </motion.span>
                                    </Link>
                                </CardContent>
                            </motion.div>
                            {/* Shine effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        </Card>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
