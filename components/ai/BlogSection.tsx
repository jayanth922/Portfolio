"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const blogs = [
    {
        title: "Letting LLMs Build Their Own Prompts: ID-SPAM Explained",
        snippet: "Exploring ID-SPAM, an input-dependent soft prompting technique that enhances LLM efficiency and adaptability.",
        date: "2024",
        category: "AI/ML",
        link: "https://medium.com/@jayanth.kalyanam/letting-llms-build-their-own-prompts-id-spam-explained-3e5777501ab9"
    },
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
            <motion.h2 
                className="text-[32px] font-bold text-gray-900 mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
                Blog Highlights
            </motion.h2>
            <motion.p 
                className="text-center text-[20px] leading-[30px] text-gray-600 mb-10 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
                Articles I've written on Medium.
            </motion.p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                {blogs.map((blog, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ 
                            delay: index * 0.08, 
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        <motion.div
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Card className="group cursor-pointer bg-white border border-gray-300 shadow-sm transition-all duration-300 hover:shadow-lg">
                            <CardHeader className="pb-3">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-xs font-medium text-gray-700">
                                        {blog.category}
                                    </span>
                                    <span className="text-xs text-gray-500">{blog.date}</span>
                            </div>
                                <CardTitle className="text-base font-semibold text-gray-900 leading-snug line-clamp-2">
                                    {blog.title}
                                </CardTitle>
                        </CardHeader>
                            <CardContent className="pt-0">
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2">{blog.snippet}</p>
                                <Link 
                                    href={blog.link} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
                                >
                                    Read on Medium
                                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                            </Link>
                        </CardContent>
                    </Card>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
