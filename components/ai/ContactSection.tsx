"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function AIContactSection() {
    return (
        <SectionWrapper id="contact" className="min-h-[60vh] text-center">
            <motion.div 
                className="max-w-2xl mx-auto space-y-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <motion.div className="mb-8">
                    <motion.h2 
                        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 relative inline-block"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-2xl opacity-30" />
                        <span className="relative bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Get In Touch
                        </span>
                    </motion.h2>
                    <motion.div 
                        className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    />
                </motion.div>
                <motion.p 
                    className="text-xl text-gray-300 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button 
                        size="lg" 
                        className="group relative h-14 px-8 text-lg bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] border-none overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.7)]" 
                        asChild
                    >
                        <Link href="mailto:jayanth.kalyanam@sjsu.edu">
                            <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                            Say Hello
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>
                    </Button>
                </motion.div>
            </motion.div>
        </SectionWrapper>
    );
}
