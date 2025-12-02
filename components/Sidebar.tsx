"use client";

import { Home, User, FolderGit2, Code2, Briefcase, BookOpen, Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

import { useScrollSpy } from "@/lib/use-scroll-spy";

interface SidebarProps {
    theme: "light" | "dark";
}

export default function Sidebar({ theme }: SidebarProps) {
    const pathname = usePathname();
    const isAIPage = pathname.startsWith("/ai");
    
    // Define sections based on page
    const aiSections = ["#home", "#about", "#skills", "#experience", "#projects", "#blogs", "#contact"];
    const fsSections = ["#home", "#about", "#skills", "#experience", "#projects", "#contact"];
    const activeSection = useScrollSpy(isAIPage ? aiSections : fsSections);

    const baseNavItems = [
        { icon: Home, label: "Home", href: "#home" },
        { icon: User, label: "About", href: "#about" },
        { icon: Code2, label: "Skills", href: "#skills" },
        { icon: Briefcase, label: "Experience", href: "#experience" },
        { icon: FolderGit2, label: "Projects", href: "#projects" },
    ];

    const conditionalNavItems = isAIPage 
        ? [{ icon: BookOpen, label: "Blogs", href: "#blogs" }]
        : [];

    const navItems = [...baseNavItems, ...conditionalNavItems, { icon: Mail, label: "Contact", href: "#contact" }];

    const isDark = theme === "dark";

    return (
        <nav
            className={cn(
                "fixed z-50 flex items-center justify-center transition-all duration-300",
                // Desktop: Left vertical bar - Transparent background
                "md:left-0 md:top-0 md:h-screen md:w-20 md:flex-col md:border-r-0 md:bg-transparent",
                // Mobile: Bottom horizontal bar - Solid background
                "bottom-0 left-0 h-16 w-full border-t md:border-t-0",
                isDark
                    ? "bg-black/90 border-white/10 text-white backdrop-blur-md md:backdrop-blur-none"
                    : "bg-white/90 border-gray-200 text-gray-800 backdrop-blur-md md:backdrop-blur-none"
            )}
        >
            <div className="flex w-full flex-row justify-around md:h-full md:flex-col md:justify-start md:pt-8 md:gap-8">
                {/* Logo/Home Link - Only show on desktop, at top */}
                <Link
                    href="/"
                    className={cn(
                        "hidden md:flex items-center justify-center p-4 mb-4 transition-all duration-200 rounded-lg hover:bg-white/10",
                        isDark ? "hover:bg-white/10" : "hover:bg-gray-100"
                    )}
                    title="Back to Home"
                >
                    {isAIPage ? (
                        <Sparkles className={cn("h-8 w-8", isDark ? "text-blue-400" : "text-blue-600")} />
                    ) : (
                        <Code2 className={cn("h-8 w-8", isDark ? "text-blue-400" : "text-blue-600")} />
                    )}
                </Link>

                {/* Navigation Items */}
                {navItems.map((item, index) => {
                    const isActive = activeSection ? `#${activeSection}` === item.href : item.href === "#home"; // Default to home if no section active
                    return (
                        <motion.div
                            key={item.href}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                        >
                            <Link
                                href={item.href}
                                className={cn(
                                    "group relative flex flex-col items-center justify-center p-3 transition-all duration-300 rounded-lg", // Increased padding
                                    isActive
                                        ? isDark
                                            ? "text-blue-400 bg-white/5"
                                            : "text-blue-600 bg-gray-100"
                                        : isDark
                                        ? "hover:text-blue-400 hover:bg-white/5 text-gray-400"
                                        : "hover:text-blue-600 hover:bg-gray-100 text-gray-500", // Default color
                                    "focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
                                )}
                            >
                                <item.icon
                                    className={cn(
                                        "h-6 w-6 md:h-7 md:w-7 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3", // Increased size with rotation
                                        isActive && "scale-110"
                                    )}
                                />
                                <span className="sr-only">{item.label}</span>

                                {/* Active Indicator Dot */}
                                {isActive && (
                                    <motion.span
                                        className={cn(
                                            "absolute -bottom-1 h-1.5 w-1.5 rounded-full md:-right-1 md:bottom-auto md:top-1/2 md:-translate-y-1/2",
                                            isDark ? "bg-blue-400" : "bg-blue-600"
                                        )}
                                        layoutId="activeIndicator"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                
                                {/* Hover effect background */}
                                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </nav>
    );
}
