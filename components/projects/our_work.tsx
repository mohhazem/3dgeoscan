"use client";

import { projects } from "@/constants/projects";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const CATEGORY_ORDER = ["Architecture", "Heritage", "Industrial"] as const;

type Project = (typeof projects)[number];

function ProjectCard({ project }: { project: Project }) {
    const { t, pick } = useLanguage();

    return (
        <div id={`project-${project.id}`} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8 scroll-mt-28">
            <div className="relative w-full h-75 md:h-100 rounded-xl overflow-hidden select-none">
                <div className="absolute inset-0">
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {project.videoUrl && (
                    <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-4 left-4 z-10 flex items-center gap-2 bg-black/60 hover:bg-orange-500 backdrop-blur-sm text-white px-4 py-2.5 rounded-full transition-all duration-300 group"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-7 h-7 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center shrink-0">
                            <svg
                                className="w-3.5 h-3.5 text-white translate-x-0.5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium">{t.projectsPage.watchVideo}</span>
                    </a>
                )}
            </div>

            <div className="mt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{pick(project.name, project.nameAr)}</h3>

                <div className="flex flex-wrap gap-3 mb-6">
                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-sm">
                        <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-gray-600"><strong className="text-black">{t.projectsPage.location}</strong> {pick(project.location, project.locationAr)}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-sm">
                        <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="text-gray-600"><strong className="text-black">{t.projectsPage.industry}</strong> {pick(project.industry, project.industryAr)}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-sm">
                        <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <span className="text-gray-600"><strong className="text-black">{t.projectsPage.services}</strong> {pick(project.services, project.servicesAr).join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-sm">
                        <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600"><strong className="text-black">{t.projectsPage.deliverables}</strong> {pick(project.deliverables, project.deliverablesAr).join(', ')}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-300">
                        <h4 className="font-bold text-gray-900 mb-3">{t.projectsPage.challenge}</h4>
                        <p className="text-gray-600 text-sm">
                            {pick(project.challange, project.challangeAr)}
                        </p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-500">
                        <h4 className="font-bold text-orange-500 mb-3">{t.projectsPage.solution}</h4>
                        <p className="text-gray-600 text-sm">
                            {pick(project.solution, project.solutionAr)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const CATEGORY_SECTION_IDS: Record<(typeof CATEGORY_ORDER)[number], string> = {
    Architecture: "projects-architecture",
    Heritage: "projects-heritage",
    Industrial: "projects-industrial",
};

export default function OurWork() {
    const { t } = useLanguage();
    const projectsByCategory = projects.reduce<Record<(typeof CATEGORY_ORDER)[number], Project[]>>(
        (grouped, project) => {
            const category = project.category as (typeof CATEGORY_ORDER)[number];

            if (CATEGORY_ORDER.includes(category)) {
                grouped[category].push(project);
            }

            return grouped;
        },
        {
            Architecture: [],
            Heritage: [],
            Industrial: [],
        }
    );

    return (
        <div className="bg-white py-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="text-2xl font-bold text-orange-500 mb-4 block">{t.projectsPage.label}</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        {t.projectsPage.heading} <span className="text-orange-500">{t.projectsPage.headingHighlight}</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t.projectsPage.description}
                    </p>
                </div>
                <div className="space-y-20">
                    {CATEGORY_ORDER.map((category) => {
                        const categoryProjects = projectsByCategory[category];
                        const label = t.projectsPage.categories[category];
                        const sectionId = CATEGORY_SECTION_IDS[category];

                        return (
                            <section key={category} id={sectionId} className="scroll-mt-28">
                                <div className="mb-8 border-b border-gray-200 pb-6">
                                    <span className="text-sm font-bold tracking-[0.24em] uppercase text-orange-500 block mb-3">
                                        {label}
                                    </span>
                                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                                        {label} {t.projectsPage.categoryProjectsSuffix}
                                    </h3>
                                </div>

                                <div>
                                    {categoryProjects.map((project) => (
                                        <ProjectCard key={project.id} project={project} />
                                    ))}
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}