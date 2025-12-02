"use client";

import LayoutShell from "@/components/LayoutShell";

export default function AIAboutPage() {
    return (
        <LayoutShell theme="dark">
            <div className="flex w-full flex-col p-8 md:p-12">
                <h2 className="text-3xl font-bold tracking-tight text-white">About Me</h2>
                <div className="mt-6 space-y-4 text-lg text-gray-300">
                    <p>
                        I am an AI Engineer fascinated by the potential of artificial intelligence to solve complex problems.
                        My research focuses on...
                    </p>
                    <p>
                        I have experience with Large Language Models, Computer Vision, and Reinforcement Learning.
                        I strive to build intelligent systems that are ethical and impactful.
                    </p>
                </div>
            </div>
        </LayoutShell>
    );
}
