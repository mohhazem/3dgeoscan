"use client";

import { projects } from "@/constants/projects";
import Link from "next/link";

// Project Card Component
function ProjectCard({ project }: { project: typeof projects[0] }) {
    // const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            href={`#project-${project.id}`}>
            {/* Image Container */}
            <div
                className="relative h-48 overflow-hidden cursor-pointer"
            >
                {/* Image (Default) */}
                <img
                    src={project.image}
                    alt={`${project.name} - Before`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500`}
                />
            </div>

            {/* Project Details */}
            <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{project.name}</h3>

                <div className="space-y-2">
                    {/* Location */}
                    <div className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span><strong className="text-gray-900">Location:</strong> <span className="text-gray-600">{project.location}</span></span>
                    </div>
                    {/* Client */}
                    {/* <div className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span><strong className="text-gray-900">Client:</strong> <span className="text-gray-600">{project.client}</span></span>
                    </div> */}
                    {/* Industry */}
                    <div className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span><strong className="text-gray-900">Industry:</strong> <span className="text-gray-600">{project.industry}</span></span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

// Main Section Component
export default function FeaturedProjects() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-sm font-bold text-orange-500 mb-4 block">Portfolio</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A selection of our diverse 3D scanning projects across various industries and applications
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} />
                    ))}
                </div>

            </div>
        </section>
    );
}