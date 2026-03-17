'use client';

import Link from 'next/link';

export default function Services() {
    const services = [
        {
            title: "3D Scanning",
            description:
                "High-precision laser scanning technology to capture detailed spatial data of structures, terrain, and infrastructure. Create accurate 3D models for documentation, analysis, and planning.",
            dark: false,
            image: "/images/3dscan-2.jpg",
            link: "/services#3d-scanning",
            // icon: (
            //     <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            //         width="237.000000pt" height="124.000000pt" viewBox="0 0 237.000000 124.000000"
            //         preserveAspectRatio="xMidYMid meet">
            //         <g transform="translate(0.000000,124.000000) scale(0.100000,-0.100000)"
            //             fill="white" stroke="none">
            //             <path d="M620 915 c0 -3 2 -5 5 -5 3 0 5 2 5 5 0 3 -2 5 -5 5 -3 0 -5 -2 -5 -5z" />
            //             <path d="M527 833 c-66 -93 -93 -203 -76 -320 18 -127 102 -263 135 -219 13 19 10 55 -6 66 -4 3 -20 30 -36 60 -57 108 -40 275 39 381 13 19 18 35 13 53 -9 38 -30 32 -69 -21z" />
            //             <path d="M1379 788 c-92 -48 -101 -69 -97 -230 3 -141 9 -155 69 -167 29 -6 35 -12 40 -41 3 -19 25 -66 48 -103 33 -54 41 -75 36 -97 -8 -38 2 -42 61 -22 78 27 78 27 -10 166 -31 50 -56 98 -56 108 0 16 50 38 88 38 18 0 15 22 -14 103 -14 39 -41 117 -60 171 -18 54 -35 101 -37 103 -3 2 -33 -11 -68 -29z m119 -249 c3 -28 -16 -43 -43 -33 -15 6 -21 45 -8 58 16 16 48 1 51 -25z m-68 -13 c0 -16 -18 -31 -27 -22 -8 8 5 36 17 36 5 0 10 -6 10 -14z" />
            //             <path d="M617 758 c-61 -84 -60 -280 2 -367 22 -31 24 -31 42 -15 21 19 25 49 8 60 -64 39 -59 222 8 296 15 17 15 20 -2 38 -24 27 -30 26 -58 -12z" />
            //             <path d="M948 719 c-18 -10 -27 -89 -10 -89 4 0 4 -41 -1 -90 -12 -116 -8 -120 87 -119 125 0 204 13 221 35 19 26 21 212 2 238 -23 32 -255 51 -299 25z m291 -98 c16 -29 13 -77 -5 -95 -12 -13 -39 -16 -127 -16 l-112 0 2 62 c1 35 2 63 3 63 0 0 51 2 114 4 106 2 115 1 125 -18z" />
            //             <path d="M1030 570 l0 -49 90 2 90 2 0 48 0 47 -90 0 -90 0 0 -50z" />
            //             <path d="M713 688 c-42 -54 -41 -166 2 -223 23 -29 65 12 48 47 -24 47 -25 70 -7 110 24 53 -11 107 -43 66z" />
            //             <path d="M805 600 c-7 -22 2 -60 14 -60 4 0 16 9 26 20 17 19 17 21 0 40 -10 11 -22 20 -26 20 -4 0 -11 -9 -14 -20z" />
            //         </g>
            //     </svg>
            // ),
        },
        {
            title: "Underground Utilities Mapping",
            description:
                "Advanced detection and mapping of underground utilities including pipes, cables, and infrastructure. Prevent costly damages and ensure safe excavation with precise subsurface mapping.",
            dark: false,
            image: "/images/undergroundutil-2.jpg",
            link: "/services#underground-utilities",
            // icon: (
            //     <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            //         width="266.000000pt" height="149.000000pt" viewBox="0 0 266.000000 149.000000"
            //         preserveAspectRatio="xMidYMid meet">
            //         <g transform="translate(0.000000,149.000000) scale(0.100000,-0.100000)"
            //             fill="#ffffff" stroke="none">
            //             <path d="M1032 1400 c-18 -17 -22 -32 -22 -77 0 -47 -4 -60 -30 -89 -36 -42
            //             -38 -54 -44 -289 -3 -112 -12 -221 -21 -265 -8 -41 -15 -110 -15 -152 0 -90
            //             -11 -125 -40 -130 -11 -2 -22 -7 -23 -13 -1 -7 199 -11 581 -13 465 -2 583 0
            //             580 10 -3 8 -27 14 -62 16 -50 3 -57 5 -49 20 8 18 8 131 -1 167 -9 36 -48 45
            //             -199 45 -138 0 -143 1 -152 22 -7 16 -20 24 -42 26 -32 3 -33 4 -74 135 -45
            //             141 -45 143 -34 170 6 14 2 17 -19 17 -18 0 -26 -5 -26 -17 0 -10 20 -83 44
            //             -163 24 -80 47 -162 51 -182 l6 -38 189 0 c195 0 220 -3 220 -26 0 -11 -6 -11
            //             -27 -3 -14 5 -39 7 -54 4 -30 -7 -79 -57 -79 -81 0 -10 -13 -14 -50 -14 -45 0
            //             -51 3 -65 29 -19 37 -61 71 -89 71 -33 0 -85 -37 -102 -73 -14 -30 -14 -37 0
            //             -70 l15 -37 -63 0 c-57 0 -64 2 -74 25 -6 13 -23 27 -38 31 -26 7 -26 9 -20
            //             60 20 178 22 158 -20 247 -33 72 -38 91 -39 157 0 85 -8 79 98 67 45 -6 57 -4
            //             57 6 0 9 -22 18 -64 25 -58 9 -116 35 -116 51 0 3 4 12 9 20 7 11 14 9 37 -8
            //             37 -27 190 -59 206 -43 17 17 8 22 -84 38 -47 9 -89 19 -95 23 -15 10 -93 117
            //             -93 127 0 5 10 14 22 19 14 7 28 29 39 65 24 72 24 73 -10 93 -40 23 -92 22
            //             -119 -3z m96 -22 c10 -10 6 -15 -20 -24 -43 -14 -48 -34 -9 -34 17 0 31 -3 31
            //             -6 0 -18 -23 -44 -40 -44 -10 0 -22 -4 -25 -10 -3 -5 -10 -10 -16 -10 -13 0
            //             -11 114 3 128 16 16 61 15 76 0z m-43 -195 c39 -40 43 -54 20 -73 -13 -10 -19
            //             -10 -35 5 -17 16 -20 16 -26 2 -3 -10 6 -26 26 -44 36 -32 46 -70 42 -148 l-4
            //             -55 -55 2 c-81 4 -81 -18 -1 -29 l63 -8 36 -75 c28 -58 33 -76 22 -78 -34 -8
            //             -60 11 -100 73 -29 44 -47 63 -58 59 -11 -5 -3 -22 35 -79 l49 -73 2 -104 c1
            //             -59 -4 -116 -11 -133 l-12 -30 -14 26 c-7 15 -25 30 -39 33 -22 6 -25 12 -25
            //             49 0 42 21 154 36 191 6 16 4 18 -12 13 -10 -3 -30 -9 -43 -13 l-23 -7 6 109
            //             c4 60 8 170 9 244 2 86 7 143 15 158 19 33 55 28 97 -15z m-104 -574 c-7 -89
            //             -16 -124 -34 -127 -15 -3 -17 6 -17 81 0 86 5 97 40 92 11 -2 14 -13 11 -46z
            //             m201 -14 c-10 -157 -52 -165 -52 -10 0 58 5 67 35 63 18 -3 20 -9 17 -53z
            //             m350 -75 c24 -25 29 -36 24 -58 -21 -88 -146 -79 -146 11 0 33 18 58 50 70 29
            //             11 42 7 72 -23z m291 19 c24 -11 47 -47 47 -73 0 -29 -41 -66 -73 -66 -79 0
            //             -106 111 -34 140 30 12 32 12 60 -1z m-826 -110 c55 -16 48 -29 -16 -29 -34 0
            //             -61 4 -61 9 0 25 14 42 29 35 9 -3 30 -10 48 -15z m695 4 c30 -27 21 -33 -57
            //             -33 -72 0 -75 1 -63 20 21 32 90 40 120 13z m-472 -19 c12 -12 5 -14 -50 -14
            //             l-65 1 24 19 c25 22 64 19 91 -6z"/>
            //             <path d="M1635 1068 c-10 -26 2 -55 17 -40 8 8 8 18 1 34 -10 21 -12 21 -18 6z" />
            //             <path d="M1530 1022 c0 -5 6 -16 13 -27 10 -13 16 -15 21 -6 4 6 2 18 -4 26
            //                 -13 16 -30 20 -30 7z"/>
            //             <path d="M1721 1016 c-9 -10 -9 -16 -1 -21 12 -7 40 11 40 26 0 14 -26 10 -39
            //                 -5z"/>
            //             <path d="M1623 1002 c-28 -4 -63 -47 -63 -77 0 -56 70 -96 121 -69 29 15 39
            //                 33 39 70 0 52 -42 85 -97 76z m55 -44 c7 -7 12 -21 12 -33 0 -29 -19 -45 -52
            //                 -45 -36 0 -56 36 -39 69 13 23 59 29 79 9z"/>
            //             <path d="M1495 930 c-3 -6 1 -13 10 -16 19 -8 30 0 20 15 -8 14 -22 14 -30 1z" />
            //             <path d="M1756 931 c-3 -5 0 -14 8 -20 10 -8 16 -8 25 3 9 11 8 15 -5 20 -20
            //                 8 -22 8 -28 -3z"/>
            //             <path d="M1533 835 c-10 -27 6 -30 30 -7 l21 22 -22 0 c-12 0 -25 -7 -29 -15z" />
            //             <path d="M1720 835 c0 -14 25 -27 34 -18 11 11 6 21 -14 26 -12 3 -20 0 -20
            //                 -8z"/>
            //             <path d="M1634 806 c-4 -10 -2 -22 4 -28 8 -8 13 -7 18 6 4 10 2 22 -4 28 -8
            //                 8 -13 7 -18 -6z"/>
            //             <path d="M1695 321 c-29 -13 -68 -58 -56 -65 5 -4 26 5 47 19 49 33 97 33 146
            //                 -1 39 -27 53 -28 43 -3 -18 43 -127 73 -180 50z"/>
            //             <path d="M1256 311 c-9 -14 34 -41 65 -41 29 0 78 34 66 46 -4 4 -18 2 -31 -6
            //                 -23 -12 -40 -11 -77 5 -10 3 -20 2 -23 -4z"/>
            //             <path d="M1205 270 c-10 -17 22 -47 70 -65 52 -20 109 -8 145 30 34 36 20 39
            //                 -38 9 -45 -23 -54 -25 -86 -14 -19 6 -46 20 -60 31 -16 13 -27 16 -31 9z"/>
            //             <path d="M1718 244 c-16 -8 -28 -19 -28 -25 0 -7 10 -8 28 -4 32 9 49 9 80 0
            //                 33 -11 28 12 -8 30 -35 18 -38 18 -72 -1z"/>
            //         </g>
            //     </svg>
            // ),
        },
        {
            title: "Digital Twin & Facility Management",
            description:
                "Create dynamic virtual replicas of physical assets and environments. Enable real-time monitoring, simulation, and predictive maintenance for enhanced decision-making and asset management.",
            dark: false,
            image: "/images/digitwin-2.jpg",
            link: "/services#digital-twin",
            // icon: (
            //     <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            //         <path d="M47.4008 40.2948H8.16467V21.7985H47.4008V40.2948ZM13.0631 37.4524C16.665 37.5778 22.2598 37.8077 21.8276 33.4187C21.7075 32.3111 20.8431 31.5378 20.7951 30.9735C20.747 30.4092 22.6921 28.988 21.4915 26.5427C20.2909 24.0974 15.7525 24.7453 13.0631 24.6408V37.4524ZM27.2304 24.6408H23.9647V36.7418C24.7091 37.7032 26.0537 37.4733 27.2304 37.4524V24.6408ZM43.0305 24.6408C39.3807 23.9929 38.7804 25.9993 36.7633 27.9639C34.5542 26.1665 34.3621 23.9302 30.4961 24.6408V36.7418C30.4961 37.3479 32.8974 37.9331 33.5217 36.9926L33.7858 30.7227L36.7633 33.5651L39.7649 30.7227C40.1971 32.5828 38.4442 37.6823 41.6858 37.3897C42.1421 37.3897 43.0305 36.9508 43.0305 36.6582V24.6408Z" fill="#ffffff" />
            //         <path d="M43.3189 0L44.1354 3.30217H41.398V18.2455L40.5816 18.9561H18.8984L18.058 18.2455V3.30217H14.7922L15.6087 0H43.3189ZM24.5174 6.62523H21.7799V9.0078H24.5174V6.62523ZM31.0487 6.62523H28.3352V9.0078H31.0487V6.62523ZM37.0517 6.62523H34.3143V9.0078H37.0517V6.62523ZM24.5174 12.31H21.7799V14.6926H24.5174V12.31ZM31.0487 12.31H28.3352V14.6926H31.0487V12.31ZM37.0517 12.31H34.3143V14.6926H37.0517V12.31Z" fill="#ffffff" />
            //         <path d="M15.2479 15.6329V18.956H4.34635V42.4265L5.16284 43.1371H42.502V47.4006H0.00012207V15.6329H15.2479Z" fill="#ffffff" />
            //         <path d="M15.2485 8.02539V12.7697H1.08118C2.7407 10.949 4.69865 9.35051 6.8922 8.02539H15.2485Z" fill="#ffffff" />
            //         <path d="M15.2483 34.6099V32.2273C16.713 32.2273 18.562 31.7675 19.5945 32.9588C19.2103 34.8397 16.9772 34.6935 15.2483 34.6099Z" fill="#ffffff" />
            //         <path d="M19.0663 27.4833H15.2483V29.3852H19.0663V27.4833Z" fill="#ffffff" />
            //     </svg>
            // ),
        },
        {
            title: "Geophysical Studies",
            description:
                "Comprehensive subsurface investigation using advanced geophysical methods. Analyze soil conditions, identify geological features, and assess site characteristics for construction and environmental projects.",
            image: "/images/geophysic-2.jpg",
            link: "/services#geophysical-studies",
            // icon: (
            //     <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            //         width="23" height="23" viewBox="0 0 142.000000 137.000000"
            //         preserveAspectRatio="xMidYMid meet">
            //         <g transform="translate(0.000000,137.000000) scale(0.100000,-0.100000)"
            //         fill="white" stroke="none">
            //         <path d="M542 1240 c-198 -53 -350 -199 -418 -400 -28 -83 -26 -262 5 -350 63
            //         -180 196 -311 383 -377 93 -34 249 -38 342 -9 145 43 261 128 337 244 213 326
            //         64 752 -308 883 -87 31 -246 35 -341 9z m146 -92 c3 -66 2 -68 -37 -107 -48
            //         -48 -74 -123 -91 -263 -24 -206 34 -469 110 -493 14 -4 18 -20 19 -80 l2 -75
            //         -30 0 c-21 0 -38 10 -60 35 -26 30 -31 44 -31 85 0 42 -5 55 -38 93 -35 40
            //         -40 53 -52 135 -18 130 -8 382 20 486 38 141 116 261 164 254 19 -3 21 -11 24
            //         -70z m108 61 c79 -15 146 -44 221 -96 219 -153 291 -435 174 -677 -81 -168
            //         -280 -305 -443 -306 l-38 0 0 74 0 73 48 7 c119 16 240 107 295 224 29 62 32
            //         75 32 167 0 87 -4 107 -27 157 -53 114 -178 210 -294 226 l-49 7 -3 78 c-3 87
            //         -8 83 84 66z m-230 -44 c-29 -37 -56 -95 -77 -163 -8 -24 -59 26 -59 57 0 14
            //         -7 36 -15 48 -11 16 -12 23 -2 31 32 25 139 69 174 71 7 1 -2 -19 -21 -44z
            //         m123 -223 c2 -49 -2 -68 -18 -88 -50 -63 -53 -253 -7 -348 22 -45 26 -65 24
            //         -125 -3 -80 -15 -90 -46 -38 -97 161 -88 561 16 680 16 18 16 18 23 0 3 -10 7
            //         -46 8 -81z m161 70 c65 -28 141 -101 181 -174 32 -60 34 -68 34 -163 0 -83 -4
            //         -108 -23 -149 -50 -109 -137 -182 -254 -213 -37 -10 -69 -15 -72 -13 -2 3 -6
            //         41 -7 85 l-2 80 49 17 c93 33 154 129 139 218 -10 60 -56 124 -107 149 -24 11
            //         -52 21 -61 21 -15 0 -17 12 -17 86 l0 87 48 -6 c26 -3 67 -14 92 -25z m-390
            //         -142 c-5 -29 -11 -80 -11 -114 -1 -33 -4 -51 -6 -38 -2 12 -16 30 -30 40 -52
            //         36 -60 48 -55 81 4 26 14 37 55 61 28 16 53 28 54 26 2 -1 -1 -27 -7 -56z
            //         m-11 -257 c1 -79 17 -198 28 -216 3 -5 0 -8 -8 -5 -8 2 -31 36 -52 74 -35 65
            //         -40 70 -71 70 -54 0 -86 27 -86 73 0 37 2 39 38 45 20 3 58 6 83 6 32 0 49 5
            //         53 15 10 28 14 15 15 -62z"/>
            //         </g>
            //     </svg>
            // ),
        },
    ]

    return (
        <section id="services" className="min-h-screen md:h-screen md:snap-start flex items-center bg-white py-10 md:pt-20 md:pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <span className="text-sm md:text-lg font-bold text-orange-500 mb-8">Services</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">Comprehensive 3D Geospatial Solutions</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, idx) => (
                        <Link
                            key={idx}
                            href={service.link}
                            className={`group relative rounded-2xl p-6 md:p-8 bg-[#E9E9E9] text-black overflow-hidden transition-all hover:shadow-2xl block`}
                        >
                            <div
                                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0">
                                <img src={service.image}
                                    className="h-full w-full object-cover" alt="Background" />
                                <div className="absolute inset-0 bg-black/50"></div>
                            </div>
                            <svg className="absolute top-0 right-8 opacity-0 -translate-y-10 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-30" width="127" height="129" viewBox="0 0 127 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M63.5 -42.5L127 -5.8606V91.8606L63.5 128.5L0 91.8606V67.3543L63.1157 103.85L105.844 79.6475V55.2212L42.328 18.5657L63.5 6.35256L105.844 30.7789V6.35256L63.5 -18.0736L21.172 6.35256V30.7789L84.8002 67.3543L63.5 79.6475L0 43.008V-5.8606L63.5 -42.5Z" fill="#cacacaff" />
                            </svg>
                            <div className="relative z-10">
                                {/* Icon commented out */}
                                {/* {service.icon && (
                                    <div className={`w-12 h-12 rounded-full bg-[#2C2C31] flex items-center justify-center mb-4 transition-all duration-500 opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100`}>
                                        {service.icon}
                                    </div>
                                )} */}
                                <h3 className="text-white text-xl md:text-2xl font-bold mb-3 translate-y-28 md:translate-y-20 transition-all duration-500 group-hover:translate-y-0 group-hover:text-black">{service.title}</h3>
                                <p className="text-sm md:text-base text-white/90 transition-all duration-500 opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-gray-600">{service.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}