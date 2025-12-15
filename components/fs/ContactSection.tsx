"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function FSContactSection() {
    return (
        <SectionWrapper id="contact" className="text-center">
            <motion.div 
                className="max-w-2xl mx-auto space-y-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <motion.h2 
                    className="text-[32px] font-bold text-gray-900 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Get In Touch
                </motion.h2>
                <motion.p 
                    className="text-[20px] leading-[30px] text-gray-600"
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
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Link 
                        href="mailto:jayanth.kalyanam@sjsu.edu"
                        className="inline-flex items-center px-6 py-1 border border-gray-900 text-gray-900 rounded font-normal transition-all duration-200 hover:bg-gray-50"
                    >
                        <Mail className="mr-2 h-4 w-4" />
                        Say Hello
                    </Link>
                </motion.div>
            </motion.div>
        </SectionWrapper>
    );
}
