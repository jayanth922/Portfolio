"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(selectors: string[], offset: number = 100) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: `-${offset}px 0px -${offset}px 0px`,
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        selectors.forEach((selector) => {
            const element = document.querySelector(selector);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [selectors, offset]);

    return activeId;
}
