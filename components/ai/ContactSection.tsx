"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

interface AIContactSectionProps {
    alternate?: boolean;
}

export default function AIContactSection({ alternate }: AIContactSectionProps) {
    return (
        <SectionWrapper id="contact" className="text-center" alternate={alternate}>
            <motion.div 
                className="max-w-2xl mx-auto space-y-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <motion.h2 
                    className="text-[32px] font-bold text-gray-900 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    Get In Touch
                </motion.h2>
                <motion.p 
                    className="text-[18px] leading-[28px] text-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                    Available for co-op from Jan 2026, full-time from May 2026. Happy to chat.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Link 
                            href="mailto:jayanth.kalyanam@sjsu.edu"
                            className="inline-flex items-center px-6 py-1 border border-gray-900 text-gray-900 rounded font-normal transition-all duration-300 hover:bg-gray-50"
                        >
                            <Mail className="mr-2 h-4 w-4" />
                            Say Hello
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </SectionWrapper>
    );
}
