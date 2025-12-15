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
                // Desktop: Left vertical bar - Dark background like Raghav
                "md:left-0 md:top-0 md:h-screen md:w-20 md:flex-col md:border-r md:border-white/8 md:bg-[rgb(15,23,42)]",
                // Mobile: Bottom horizontal bar - Dark background
                "bottom-0 left-0 h-16 w-full border-t border-white/8 bg-[rgb(15,23,42)] text-white"
            )}
        >
            <div className="flex w-full flex-row justify-around md:h-full md:flex-col md:justify-start md:pt-8 md:gap-8">
                {/* Logo/Home Link - Only show on desktop, at top */}
                <Link
                    href="/"
                    className="hidden md:flex items-center justify-center p-4 mb-4 transition-all duration-200 rounded-lg hover:bg-white/10 text-white"
                    title="Back to Home"
                >
                    {isAIPage ? (
                        <Sparkles className="h-8 w-8 text-white" />
                    ) : (
                        <Code2 className="h-8 w-8 text-white" />
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
                                    "group relative flex flex-col items-center justify-center p-3 transition-all duration-300 rounded-lg",
                                    isActive
                                        ? "text-white bg-white/10"
                                        : "text-white/50 hover:text-white hover:bg-white/5"
                                )}
                            >
                                {/* Active indicator bar */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-white rounded-r hidden md:block"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <item.icon
                                    className={cn(
                                        "h-6 w-6 md:h-7 md:w-7 transition-all duration-300",
                                        isActive && "scale-110"
                                    )}
                                />
                                {/* Tooltip on hover - desktop only */}
                                <span 
                                    aria-hidden="true"
                                    className="absolute left-full ml-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap hidden md:block"
                                >
                                    {item.label}
                                </span>
                                <span className="sr-only">{item.label}</span>
                        </Link>
                        </motion.div>
                    );
                })}
            </div>
        </nav>
    );
}
