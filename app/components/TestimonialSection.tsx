'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Testimonial } from '../types';

// Note: Ensure globals.css contains the parallax and arrow classes

const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: 'Fredrick Yolonda',
        role: 'SEO Manager',
        avatar: 'https://aqualine.like-themes.com/wp-content/uploads/2018/02/client-07-110x110.jpg',
        quote: 'Donec placerat, orci vel consequat mattis, sapien lacus pretium mi, sed lacinia dolor nibh non mi. Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce.'
    },
    {
        id: 2,
        name: 'Patric Stone',
        role: 'Freelancer',
        avatar: 'https://aqualine.like-themes.com/wp-content/uploads/2018/02/client-02-110x110.jpg',
        quote: 'Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Morbi viverra volutpat ex, id pellentesque felis volutpat eu. Etiam mattis laoreet leo sed accumsan. Fusce.'
    },
    {
        id: 3,
        name: 'Hugo James',
        role: 'Manager',
        avatar: 'https://aqualine.like-themes.com/wp-content/uploads/2018/02/client-04-110x110.jpg',
        quote: 'Maecenas ultricies felis sit amet libero scelerisque, ut eleifend leo mattis. Aliquam porta facilisis metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
    {
        id: 4,
        name: 'Stefanie Rashford',
        role: 'Developer',
        avatar: 'https://aqualine.like-themes.com/wp-content/uploads/2018/02/client-01-110x110.jpg',
        quote: 'Morbi viverra volutpat ex, id pellentesque felis volutpat eu. Duis et tellus imperdiet, lacinia risus id, tincidunt ipsum. Integer euismod elit vel nibh commodo, at consequat nisl rhoncus. Etiam mattis laoreet leo sed accumsan. Aliquam tempor lorem.'
    },
    {
        id: 5,
        name: 'Cassie Carleton',
        role: 'Designer',
        avatar: 'https://aqualine.like-themes.com/wp-content/uploads/2018/02/client-06-110x110.jpg',
        quote: 'Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. Donec placerat, orci vel consequat mattis, sapien lacus pretium.'
    },
    {
        id: 6,
        name: 'Coby Sue',
        role: 'Company Owner',
        avatar: 'https://aqualine.like-themes.com/wp-content/uploads/2018/02/client-08-110x110.jpg',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis at turpis eu faucibus. In dignissim, enim eu ornare aliquet, metus ex tempor neque, sit amet efficitur turpis lorem et odio.'
    }
];

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.95
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        scale: 1
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.95
    })
};

export default function TestimonialSection() {
    const [[page, direction], setPage] = useState([0, 0]);

    const activeIndex = (page % TESTIMONIALS.length + TESTIMONIALS.length) % TESTIMONIALS.length;

    const paginate = useCallback((newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    }, [page]);

    const handleNext = useCallback(() => paginate(1), [paginate]);
    const handlePrev = useCallback(() => paginate(-1), [paginate]);

    // Auto-play interval set to 8 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 8000);
        return () => clearInterval(timer);
    }, [handleNext]);

    const currentTestimonial = TESTIMONIALS[activeIndex];

    return (
        <section className="relative w-full py-28 bg-[#111111] text-white overflow-hidden font-sans group testimonial-bg-parallax min-h-[750px] flex items-center">
            {/* Dark Overlay */}
            <div className="absolute inset-0 z-0 bg-black/60 pointer-events-none"></div>

            <div className="relative z-10 container mx-auto px-4">
                {/* Header Section */}
                <div className="mb-12 text-center">
                    <h6 className="text-[#E81C2E] text-xs md:text-sm font-bold uppercase tracking-[3px] font-heading mb-3">
                        Testimonials
                    </h6>
                    <h4 className="text-3xl md:text-[42px] font-bold text-white font-heading leading-tight">
                        What our clients say
                    </h4>
                </div>

                {/* Carousel Container */}
                <div className="relative max-w-5xl mx-auto h-[450px]">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.div
                            key={page}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 100, damping: 20, duration: 3 },
                                opacity: { duration: 1.5 },
                                scale: { duration: 3 }
                            }}
                            className="flex flex-col items-center text-center w-full max-w-3xl mx-auto"
                        >
                            {/* Description / Quote */}
                            <div className="mb-10 relative">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#E81C2E] select-none pointer-events-none opacity-20 z-0 testimonial-quote-mark">
                                    “
                                </div>

                                <p className="text-lg md:text-[19px] leading-8 text-[#b0b0b0] font-light relative z-10">
                                    {currentTestimonial.quote}
                                </p>
                            </div>

                            {/* Image */}
                            <div className="mb-5">
                                <Image
                                    src={currentTestimonial.avatar}
                                    alt={currentTestimonial.name}
                                    width={110}
                                    height={110}
                                    className="w-[110px] h-[110px] rounded-full object-cover border-4 border-[#ffffff10]"
                                />
                            </div>

                            {/* Name (Header) */}
                            <div className="text-xl font-bold font-heading text-white mb-1">
                                {currentTestimonial.name}
                            </div>

                            {/* Role (Subheader) */}
                            <div className="text-[#E81C2E] text-[13px] font-bold uppercase tracking-widest font-heading">
                                {currentTestimonial.role}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Mobile Navigation */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center gap-8 md:hidden text-white/40 z-20">
                        <button onClick={handlePrev}><ChevronLeft className="w-8 h-8" /></button>
                        <button onClick={handleNext}><ChevronRight className="w-8 h-8" /></button>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows - Positioned at the absolute edges of the section */}
            <button
                onClick={handlePrev}
                className="absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 z-50 ltx-arrow-left hidden md:flex pointer-events-auto"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" strokeWidth={2} />
            </button>

            <button
                onClick={handleNext}
                className="absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 z-50 ltx-arrow-right hidden md:flex pointer-events-auto"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" strokeWidth={2} />
            </button>
        </section>
    );
}
