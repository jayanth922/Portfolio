"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    delay?: number;
}

export default function SectionWrapper({
    children,
    id,
    className,
    delay = 0,
}: SectionWrapperProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ 
                duration: 0.8, 
                delay, 
                ease: [0.22, 1, 0.36, 1],
                opacity: { duration: 0.6 }
            }}
            className={cn("min-h-screen flex flex-col justify-center py-16 md:py-24 px-8 md:px-12", className)}
        >
            {children}
        </motion.section>
    );
}
