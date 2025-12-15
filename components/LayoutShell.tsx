"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import StarBackground from "@/components/StarBackground";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface LayoutShellProps {
    theme: "light" | "dark";
    children: React.ReactNode;
}

export default function LayoutShell({ theme, children }: LayoutShellProps) {
    const isDark = theme === "dark";

    React.useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <div
            className={cn(
                "min-h-screen w-full transition-colors duration-500",
                isDark ? "bg-black text-white" : "bg-white text-gray-900"
            )}
        >
            {/* Background Effects */}
            {isDark && <StarBackground />}

            {/* Navigation */}
            <Sidebar theme={theme} />

            {/* Main Content Area */}
            <main className="min-h-screen w-full md:pl-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative flex w-full flex-col"
                >
                    {children}
                </motion.div>
            </main>
        </div>
    );
}
