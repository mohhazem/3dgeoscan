"use client";

import { useState, useRef } from "react";
import { projects } from "@/constants/projects";

export default function OurWork() {
    return (
        <section className="min-h-screen bg-white py-32 flex items-center">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-2xl font-bold text-orange-500 mb-4 block">Our Work</span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Scanned. Modeled. <span className="text-orange-500">Delivered.</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore how we've helped clients across industries capture reality with precision 3D
                        scanning technology.
                    </p>
                </div>
                {/* Card */}
                {projects.map((project, idx) => (
                    <div id={`project-${project.id}`} key={project.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
                        {/* Image Container */}
                        <div
                            className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden cursor-ew-resize select-none"
                        >
                            {/* Project Image*/}
                            <div className="absolute inset-0">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        {/* Project Details */}
                        <div className="mt-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.name}</h3>
                            

                            {/* Project Tags */}
                            <div className="flex flex-wrap gap-3 mb-6">
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-sm">
                                    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-gray-600"><strong className="text-black">Location:</strong> {project.location}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-sm">
                                    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span className="text-gray-600"><strong className="text-black">Client:</strong> {project.client}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-sm">
                                    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    <span className="text-gray-600"><strong className="text-black">Industry:</strong> {project.industry}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-sm">
                                    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                    <span className="text-gray-600"><strong className="text-black">Services:</strong> {project.services.join(', ')}</span>
                                </div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full text-sm">
                                    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-600"><strong className="text-black">Deliverables:</strong> {project.deliverables.join(', ')}</span>
                                </div>
                            </div>

                            {/* Challenge & Solution Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Challenge Card */}
                                <div className="bg-gray-50 rounded-xl p-4 border border-gray-300">
                                    <h4 className="font-bold text-gray-900 mb-3">Challenge</h4>
                                    <p className="text-gray-600 text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>

                                {/* Solution Card */}
                                <div className="bg-orange-50 rounded-xl p-4 border border-orange-500">
                                    <h4 className="font-bold text-orange-500 mb-3">Solution</h4>
                                    <p className="text-gray-600 text-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}