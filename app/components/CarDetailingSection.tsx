'use client';

import React, { useState } from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { ChevronRight as ChevronIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const staticPerks = [
    {
        title: 'Natural Cleaners',
        description: 'Natural cleaners ensure your car is cleaned with eco-friendly, biodegradable products safe.',
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 00-3.86.517L6.05 15.21a2 2 0 00-1.022.547l-2.387 2.387a2 2 0 102.828 2.828l3.474-3.474a6 6 0 00.517-3.86l-.158-.318a6 6 0 01.517-3.86l.477-2.387a2 2 0 01.547-1.022l2.387-2.387a2 2 0 112.828 2.828l-3.474 3.474a6 6 0 00-.517 3.86l.158.318a6 6 0 01-.517 3.86l-.477 2.387z" />
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 00-3.86.517L6.05 15.21a2 2 0 00-1.022.547l-2.387 2.387a2 2 0 102.828 2.828l3.474-3.474a6 6 0 00.517-3.86l-.158-.318a6 6 0 01.517-3.86l.477-2.387a2 2 0 01.547-1.022l2.387-2.387a2 2 0 112.828 2.828l-3.474 3.474a6 6 0 00-.517 3.86l.158.318a6 6 0 01-.517 3.86l-.477 2.387z" />
            </svg>
        )
    }
];

const services = [
    {
        id: 'dry-cleaning',
        label: 'DRY CLEANING',
        title: 'Dry cleaning any dirt inside the car and trunk',
        beforeImage: '/images/aqualine/Before_01.jpg',
        afterImage: '/images/aqualine/After_01.jpg'
    },
    {
        id: 'exterior-detailing',
        label: 'EXTERIOR DETAILING',
        title: 'Professional exterior polishing and paint correction',
        beforeImage: '/images/aqualine/Before_02.jpg',
        afterImage: '/images/aqualine/After_02.jpg'
    },
    {
        id: 'interior-care',
        label: 'INTERIOR CARE',
        title: 'Deep cleaning and restoration of all interior components',
        beforeImage: '/images/aqualine/Before_03.jpg',
        afterImage: '/images/aqualine/After_03.jpg'
    },
    {
        id: 'engine-detailing',
        label: 'ENGINE DETAILING',
        title: 'Complete engine bay cleaning and component dressing',
        beforeImage: '/images/aqualine/Before_04.jpg',
        afterImage: '/images/aqualine/After_04.jpg'
    }
];

const CarDetailingSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
    const service = services[currentIndex];

    const nextService = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % services.length);
    };
    const prevService = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0
        })
    };
    const fadeVariants = {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0 }
    };

    return (
        <section className="bg-[#111111] py-24 text-white font-['Roboto'] overflow-hidden">
            <div className="container mx-auto px-4 max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column: Info & Nav */}
                    <div className="lg:col-span-2 pt-[73px]">
                        <div className="relative flex flex-col lg:h-[547px]">
                            <div className="relative overflow-hidden">
                                <AnimatePresence mode="wait" custom={direction}>
                                    <motion.div
                                        key={currentIndex}
                                        custom={direction}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.3 }
                                        }}
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="w-10 h-[1px] bg-[#e6242e]"></span>
                                            <span className="text-[#e6242e] font-['Teko'] font-bold text-xl tracking-widest uppercase whitespace-nowrap">
                                                {service.label}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl lg:text-3xl font-['Barlow_Semi_Condensed'] font-extrabold leading-[1.2] uppercase mb-10">
                                            {service.title}
                                        </h2>
                                        <button className="group relative bg-[#e81c2e] text-white font-barlow font-bold py-[18px] px-[35px] rounded-[40px] flex items-center gap-3 btn-hover-slide-white transition-all duration-300">
                                            Read More
                                            <div className="w-[24px] h-[24px] rounded-full border border-white/50 flex items-center justify-center group-hover:border-[#19191B]/30 transition-colors duration-400">
                                                <ChevronIcon className="w-3 h-3 group-hover:text-[#19191B] transition-colors duration-400" />
                                            </div>
                                        </button>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Nav Arrows - Pushed to bottom of min-h */}
                            <div className="flex gap-4 mt-auto">
                                <button
                                    onClick={prevService}
                                    className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-[#e6242e] hover:border-[#e6242e] transition-all group"
                                >
                                    <svg className="w-5 h-5 text-white group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextService}
                                    className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-[#e6242e] hover:border-[#e6242e] transition-all group"
                                >
                                    <svg className="w-5 h-5 text-white group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column: Slider */}
                    <div className="lg:col-span-8 relative">
                        <div className="w-full max-w-[825px] mx-auto relative pt-[73px] pb-[73px]">
                            {/* Background Outlined Text - BEFORE (Top Left) */}
                            <div
                                className="absolute left-[20px] top-0 select-none pointer-events-none opacity-50 z-10"
                                style={{
                                    fontFamily: "'Barlow Semi Condensed', sans-serif",
                                    fontSize: '80px',
                                    fontWeight: 700,
                                    lineHeight: '80px'
                                }}
                            >
                                <span className="text-outline uppercase">BEFORE</span>
                            </div>

                            <div className="relative z-20">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        variants={fadeVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                    >
                                        <BeforeAfterSlider
                                            key={service.id}
                                            beforeImage={service.beforeImage}
                                            afterImage={service.afterImage}
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Background Outlined Text - AFTER (Bottom Right) */}
                            <div
                                className="absolute right-[20px] bottom-0 select-none pointer-events-none opacity-50 z-10"
                                style={{
                                    fontFamily: "'Barlow Semi Condensed', sans-serif",
                                    fontSize: '80px',
                                    fontWeight: 700,
                                    lineHeight: '80px'
                                }}
                            >
                                <span className="text-outline uppercase">AFTER</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Perks (Static) */}
                    <div className="lg:col-span-2 flex flex-col pt-[73px]">
                        <div className="flex flex-col gap-10">
                            {staticPerks.map((perk, idx) => (
                                <div key={idx} className="flex gap-4 items-start">
                                    <div className="text-[#e41d25] flex-shrink-0 animate-pulse w-8 h-8">
                                        {perk.icon}
                                    </div>
                                    <div className="font-['Ubuntu'] overflow-hidden">
                                        <h3 className="text-lg font-bold mb-1 uppercase tracking-wide truncate">{perk.title}</h3>
                                        <p className="text-[rgba(255,255,255,0.7)] text-sm leading-relaxed font-normal line-clamp-3 overflow-hidden">
                                            {perk.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CarDetailingSection;
