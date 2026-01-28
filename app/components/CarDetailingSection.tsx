'use client';

import React, { useState } from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { ChevronRight as ChevronIcon } from 'lucide-react';

const services = [
    {
        id: 'dry-cleaning',
        label: 'DRY CLEANING',
        title: 'Dry cleaning any dirt inside the car and trunk',
        beforeImage: '/images/aqualine/Before_01.jpg',
        afterImage: '/images/aqualine/After_01.jpg',
        perks: [
            {
                title: 'Natural Cleaners',
                description: 'Natural cleaners ensure your car is cleaned with eco-friendly, biodegradable products safe.',
                icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.022.547l-2.387 2.387a2 2 0 102.828 2.828l3.474-3.474a6 6 0 00.517-3.86l-.158-.318a6 6 0 01.517-3.86l.477-2.387a2 2 0 01.547-1.022l2.387-2.387a2 2 0 112.828 2.828l-3.474 3.474a6 6 0 00-.517 3.86l.158.318a6 6 0 01-.517 3.86l-.477 2.387z" />
                    </svg>
                )
            },
            {
                title: 'Heightened care',
                description: 'Heightened care services focus on every detail, ensuring your car gets a spotless and thorough wash.',
                icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                )
            },
            {
                title: 'Aromatization',
                description: 'Aromatization adds a pleasant, lasting fragrance to your car\'s interior.',
                icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.022.547l-2.387 2.387a2 2 0 102.828 2.828l3.474-3.474a6 6 0 00.517-3.86l-.158-.318a6 6 0 01.517-3.86l.477-2.387a2 2 0 01.547-1.022l2.387-2.387a2 2 0 112.828 2.828l-3.474 3.474a6 6 0 00-.517 3.86l.158.318a6 6 0 01-.517 3.86l-.477 2.387z" />
                    </svg>
                )
            }
        ]
    },
    {
        id: 'exterior-detailing',
        label: 'EXTERIOR DETAILING',
        title: 'Professional exterior polishing and paint correction',
        beforeImage: '/images/aqualine/Before_02.jpg',
        afterImage: '/images/aqualine/After_02.jpg',
        perks: [
            {
                title: 'Paint Protection',
                description: 'Advanced ceramic coating for long-lasting paint protection and gloss.',
                icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                )
            },
            {
                title: 'Polishing',
                description: 'Expert polishing to remove swirls and restore mirror-like finish.',
                icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                )
            },
            {
                title: 'Gloss enhancement',
                description: 'Premium waxes and sealants for that deep, wet-look shine.',
                icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                )
            }
        ]
    },
    {
        id: 'interior-care',
        label: 'INTERIOR CARE',
        title: 'Deep cleaning and restoration of all interior components',
        beforeImage: '/images/aqualine/Before_03.jpg',
        afterImage: '/images/aqualine/After_03.jpg',
        perks: [
            {
                title: 'Steam Cleaning',
                description: 'High-temperature steam to sanitize and remove deep-seated stains.',
                icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                )
            },
            {
                title: 'Leather Conditioning',
                description: 'Premium oils to keep your leather soft, supple, and crack-free.',
                icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )
            },
            {
                title: 'Odor Removal',
                description: 'Advanced ozone treatment to permanently eliminate unpleasant smells.',
                icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                )
            }
        ]
    },
    {
        id: 'engine-detailing',
        label: 'ENGINE DETAILING',
        title: 'Complete engine bay cleaning and component dressing',
        beforeImage: '/images/aqualine/Before_04.jpg',
        afterImage: '/images/aqualine/After_04.jpg',
        perks: [
            {
                title: 'Safe Degreasing',
                description: 'Professional grade degreasers that are safe for all electronic components.',
                icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.022.547l-2.387 2.387a2 2 0 102.828 2.828l3.474-3.474a6 6 0 00.517-3.86l-.158-.318a6 6 0 01.517-3.86l.477-2.387a2 2 0 01.547-1.022l2.387-2.387a2 2 0 112.828 2.828l-3.474 3.474a6 6 0 00-.517 3.86l.158.318a6 6 0 01-.517 3.86l-.477 2.387z" />
                    </svg>
                )
            },
            {
                title: 'Hose Dressing',
                description: 'Specialized dressings to prevent rubber hoses from cracking and drying out.',
                icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                )
            },
            {
                title: 'Detailing Brushes',
                description: 'Meticulous cleaning of every nook and cranny with soft detailing brushes.',
                icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                )
            }
        ]
    }
];

const CarDetailingSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const service = services[currentIndex];

    const nextService = () => setCurrentIndex((prev) => (prev + 1) % services.length);
    const prevService = () => setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);

    return (
        <section className="bg-[#111111] py-24 text-white font-['Roboto'] overflow-hidden">
            <div className="container mx-auto px-4 max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

                    {/* Left Column: Info & Nav */}
                    <div className="lg:col-span-3">
                        <div className="relative h-full flex flex-col">
                            <div>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-10 h-[1px] bg-[#e6242e]"></span>
                                    <span className="text-[#e6242e] font-['Teko'] font-bold text-xl tracking-widest uppercase">
                                        {service.label}
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-['Teko'] font-bold leading-[1] uppercase mb-10">
                                    {service.title}
                                </h2>
                                <button className="group relative bg-[#e81c2e] text-white font-barlow font-bold py-[18px] px-[35px] rounded-[40px] flex items-center gap-3 btn-hover-slide-white transition-all duration-300">
                                    Read More
                                    <div className="w-[24px] h-[24px] rounded-full border border-white/50 flex items-center justify-center group-hover:border-[#19191B]/30 transition-colors duration-400">
                                        <ChevronIcon className="w-3 h-3 group-hover:text-[#19191B] transition-colors duration-400" />
                                    </div>
                                </button>
                            </div>

                            {/* Nav Arrows - Aligned to bottom */}
                            <div className="flex gap-4 mt-auto lg:mb-2">
                                <button
                                    onClick={prevService}
                                    className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#e6242e] hover:border-[#e6242e] transition-all group"
                                >
                                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextService}
                                    className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#e6242e] hover:border-[#e6242e] transition-all group"
                                >
                                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column: Slider */}
                    <div className="lg:col-span-6 relative group">
                        {/* Background Outlined Text - BEFORE (Top Left) */}
                        <div className="absolute -top-12 left-0 select-none pointer-events-none opacity-20">
                            <span className="text-8xl md:text-9xl font-['Teko'] font-bold text-outline uppercase tracking-wider">BEFORE</span>
                        </div>

                        <div className="relative px-2">
                            <BeforeAfterSlider
                                key={service.id}
                                beforeImage={service.beforeImage}
                                afterImage={service.afterImage}
                            />
                        </div>

                        {/* Background Outlined Text - AFTER (Bottom Right) */}
                        <div className="absolute -bottom-12 right-0 select-none pointer-events-none opacity-20 z-10">
                            <span className="text-8xl md:text-9xl font-['Teko'] font-bold text-outline uppercase tracking-wider">AFTER</span>
                        </div>
                    </div>

                    {/* Right Column: Perks */}
                    <div className="lg:col-span-3 flex flex-col gap-12">
                        {service.perks.map((perk, idx) => (
                            <div key={idx} className="flex gap-6 items-start">
                                <div className="text-[#e41d25] flex-shrink-0 animate-pulse">
                                    {perk.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-['Teko'] font-bold mb-2 uppercase tracking-wide">{perk.title}</h3>
                                    <p className="text-gray-400 text-base leading-relaxed font-light">
                                        {perk.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CarDetailingSection;
