"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SiteFooterProps {
    theme?: "light" | "dark";
}

export default function SiteFooter({ theme = "light" }: SiteFooterProps) {
    const isDark = theme === "dark";

    return (
        <footer className={cn(
            "py-8 text-center",
            isDark ? "text-gray-400" : "text-gray-500"
        )}>
            <div className="flex justify-center gap-6 mb-4">
                <Link href="https://github.com/jayanth922" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                </Link>
                <Link href="https://linkedin.com/in/jayanth7111/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="mailto:jayanth.kalyanam@sjsu.edu" className="hover:text-blue-500 transition-colors">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                </Link>
            </div>
            <p className="text-sm">
                © {new Date().getFullYear()} Jayanth Kalyanam. All rights reserved.
            </p>
        </footer>
    );
}
