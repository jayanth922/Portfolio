"use client";

import LayoutShell from "@/components/LayoutShell";

export default function FSAboutPage() {
    return (
        <LayoutShell theme="light">
            <div className="flex w-full flex-col p-8 md:p-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">About Me</h2>
                <div className="mt-6 space-y-4 text-lg text-gray-600">
                    <p>
                        I am a passionate Full Stack Engineer with a deep understanding of modern web technologies.
                        My journey began with...
                    </p>
                    <p>
                        I specialize in building scalable applications using Next.js, React, and Node.js.
                        I believe in clean code, robust architecture, and user-centric design.
                    </p>
                    {/* Add more content, skills grid, etc. */}
                </div>
            </div>
        </LayoutShell>
    );
}
