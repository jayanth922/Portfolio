"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const blogs = [
    {
        title: "The Future of Web Development",
        snippet: "Exploring the latest trends in frontend frameworks and server-side rendering.",
        date: "Oct 15, 2023",
        category: "Web Dev",
        link: "#"
    },
    {
        title: "Building Scalable Microservices",
        snippet: "Best practices for designing and deploying microservices architectures.",
        date: "Nov 10, 2023",
        category: "Architecture",
        link: "#"
    },
    {
        title: "Mastering TypeScript",
        snippet: "Advanced techniques for writing type-safe and maintainable code.",
        date: "Dec 05, 2023",
        category: "TypeScript",
        link: "#"
    }
];

export default function FSBlogSection() {
    return (
        <SectionWrapper id="blogs">
            <motion.h2 
                className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-12 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Latest Articles
            </motion.h2>
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
                                <CardHeader>
                                    <div className="flex justify-between items-center mb-2">
                                        <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-none group-hover:bg-purple-500/30 transition-colors">
                                            {blog.category}
                                        </Badge>
                                        <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">{blog.date}</span>
                                    </div>
                                    <CardTitle className="text-lg text-white group-hover:text-purple-400 transition-colors duration-300">
                                        {blog.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">{blog.snippet}</p>
                                    <Link 
                                        href={blog.link} 
                                        className="flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors group/link"
                                    >
                                        Read Article 
                                        <motion.span
                                            className="ml-1"
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
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
