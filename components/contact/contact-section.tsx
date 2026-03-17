"use client";

import { CONTACT_INFO, SOCIALS } from "@/constants/contact";
import Link from "next/link";
import { useState } from "react";

export default function ContactSection() {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    
    const services = [
        "3D Scanning",
        "Underground Utilities",
        "Digital Twin",
        "Geophysical Studies",
        "Other"
    ];
    
    const toggleService = (service: string) => {
        setSelectedServices(prev => 
            prev.includes(service) 
                ? prev.filter(s => s !== service)
                : [...prev, service]
        );
    };
    
    return (
        <section className="flex items-center bg-white py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <h4 className="text-brand-orange font-semibold tracking-wide uppercase text-sm mb-2">Contact Us</h4>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in touch with us</h1>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Got a question, an idea, or a problem that refuses to behave?
                        We deliver unmatched precision with the largest fleet of laser scanning equipment.
                    </p>
                </div>
                <div
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-150 border border-gray-100">

                    <div
                        className="border-8 border-white rounded-3xl md:w-1/3 bg-[#1a1a1a] text-white p-10 flex flex-col justify-between relative overflow-hidden">
                        <div className="animate-scan bg-linear-to-b from-transparent via-brand-orange to-transparent shadow-[0_0_15px_#E65525] absolute left-0 w-full h-1 z-10"/>
                        <div className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{ backgroundImage: "radial-gradient(#E65525 1px, transparent 1px)", backgroundSize: "30px 30px" }}>
                        </div>

                        <div className="relative z-20">
                            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                We're here to assist you with your 3D scanning needs. Reach out for inquiries, partnerships, or
                                technical support.


                            </p>

                            {/* <!-- Contact Details --> */}
                            <div className="space-y-6 mb-6">
                                {CONTACT_INFO.map((contact, index) => (
                                    <Link
                                        key={index}
                                        href={contact.href}
                                        target={"_blank"}
                                        className="flex items-center space-x-4 group cursor-pointer">
                                        <div
                                            className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition">
                                            {contact.icon === "mail" && (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            )}
                                            {contact.icon === "phone" && (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            )}
                                            {contact.icon === "location" && (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            )}
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm">{contact.label}</p>
                                            <p className="font-medium">{contact.text}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* <!-- Social Links --> */}
                            <div>
                                <p className="text-gray-400 text-sm mb-4">Follow us on</p>
                                <div className="flex gap-3">
                                    {SOCIALS.map((social, index) => (
                                        <Link
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition"
                                            aria-label={social.label}
                                        >
                                            {social.icon === "facebook" && (
                                                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                                </svg>
                                            )}
                                            {social.icon === "whatsapp" && (
                                                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                                </svg>
                                            )}
                                            {social.icon === "youtube" && (
                                                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
                                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#2C2C31" />
                                                </svg>
                                            )}
                                            {social.icon === "instagram" && (
                                                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                                                    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                                                    <circle cx="17.5" cy="6.5" r="1.5" />
                                                </svg>
                                            )}
                                            {social.icon === "linkedin" && (
                                                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                                                    <rect x="2" y="9" width="4" height="12" />
                                                    <circle cx="4" cy="4" r="2" />
                                                </svg>
                                            )}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-orange opacity-20 rounded-full blur-2xl" />
                        <div className="absolute bottom-0 right-0 w-48 opacity-25">
                            <img src="images/oss-nobg.png" alt="" />
                        </div>
                    </div>

                    <div className="md:w-2/3 p-8 md:p-12">
                        <form className="space-y-6 text-gray-900">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input type="text" placeholder="John"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition duration-200 placeholder:text-gray-400" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input type="text" placeholder="Doe"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition duration-200 placeholder:text-gray-400" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input type="email" placeholder="name@company.com"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition duration-200 placeholder:text-gray-400" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input type="tel" placeholder="+20..."
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition duration-200 placeholder:text-gray-400" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Service Interest 
                                    {selectedServices.length > 0 && (
                                        <span className="text-brand-orange ml-2">({selectedServices.length} selected)</span>
                                    )}
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {services.map((service) => (
                                        <button
                                            key={service}
                                            type="button"
                                            onClick={() => toggleService(service)}
                                            className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200 cursor-pointer ${
                                                selectedServices.includes(service)
                                                    ? 'bg-brand-orange text-white shadow-md hover:shadow-lg hover:bg-[#c9461d] transform hover:scale-105'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                                            }`}
                                        >
                                            {service}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Project Files (Optional)</label>
                                <div
                                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 hover:border-brand-orange transition cursor-pointer relative group">
                                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                                    <div className="flex flex-col items-center">
                                        <svg className="w-8 h-8 text-gray-400 group-hover:text-brand-orange mb-2 transition"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
                                            </path>
                                        </svg>
                                        <span className="text-sm text-gray-500 group-hover:text-gray-700">Drop files or click to
                                            upload</span>
                                    </div>
                                </div>
                            </div> */}

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                                <textarea rows={4} placeholder="Tell us about the project scale and requirements..."
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition duration-200 placeholder:text-gray-400"></textarea>
                            </div>

                            <button
                                className="w-full bg-brand-orange hover:bg-[#c9461d] text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-200 cursor-pointer">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}
