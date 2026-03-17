'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

type TrackedSection = {
    id: string;
    label: string;
    element: HTMLElement;
};

const PROJECT_PAGE_SECTIONS: Array<{ id: string; label: string }> = [
    { id: 'projects-architecture', label: 'Architecture' },
    { id: 'projects-heritage', label: 'Heritage' },
    { id: 'projects-industrial', label: 'Industrial' },
];

function formatSectionLabel(id: string) {
    return id.replace(/^projects-/, '').replace(/-/g, ' ');
}

export default function ScrollIndicator() {
    const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
    const [sections, setSections] = useState<TrackedSection[]>([]);
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();

    const isHomePage = pathname === '/';
    const isProjectsPage = pathname === '/projects';

    useEffect(() => {
        if (!isHomePage && !isProjectsPage) {
            setSections([]);
            setActiveSectionId(null);
            setIsVisible(false);
            return;
        }

        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0,
        };

        let trackedSections: TrackedSection[] = [];
        let heroObserver: IntersectionObserver | null = null;

        if (isHomePage) {
            const allSections = Array.from(document.querySelectorAll('section[id]:not(#hero)')) as HTMLElement[];
            trackedSections = allSections.map((section) => ({
                id: section.id,
                label: formatSectionLabel(section.id),
                element: section,
            }));

            const heroSection = document.querySelector('section#hero');

            if (heroSection) {
                heroObserver = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            setIsVisible(!entry.isIntersecting);
                        });
                    },
                    {
                        threshold: 0.1,
                    }
                );

                heroObserver.observe(heroSection);
            } else {
                setIsVisible(true);
            }
        }

        if (isProjectsPage) {
            const explicitSections = PROJECT_PAGE_SECTIONS.map((section) => {
                const element = document.getElementById(section.id);

                if (!element) {
                    return null;
                }

                return {
                    ...section,
                    element,
                };
            }).filter((section): section is TrackedSection => section !== null);

            trackedSections = explicitSections;

            setIsVisible(trackedSections.length > 0);
        }

        setSections(trackedSections);
        setActiveSectionId(trackedSections[0]?.id ?? null);

        if (trackedSections.length === 0) {
            return () => {
                heroObserver?.disconnect();
            };
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSectionId((entry.target as HTMLElement).id);
                }
            });
        }, observerOptions);

        trackedSections.forEach((section) => observer.observe(section.element));

        return () => {
            observer.disconnect();
            heroObserver?.disconnect();
        };
    }, [isHomePage, isProjectsPage]);

    const scrollToSection = (index: number) => {
        if (sections[index]) {
            sections[index].element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    if ((!isHomePage && !isProjectsPage) || sections.length === 0 || !isVisible) return null;

    return (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5" />

            {sections.map((section, index) => (
                <button
                    key={section.id}
                    onClick={() => scrollToSection(index)}
                    className="relative group cursor-pointer"
                    aria-label={`Go to ${section.label}`}
                >
                    <div
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            activeSectionId === section.id
                                ? 'bg-orange-500 scale-150 shadow-lg shadow-orange-500/50'
                                : 'bg-gray-400 hover:bg-orange-300 hover:scale-125'
                        }`}
                    />

                    <span className="absolute right-6 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none capitalize">
                        {section.label}
                    </span>
                </button>
            ))}
        </div>
    );
}