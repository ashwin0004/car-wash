'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';

// Note: Ensure styles.css (globals.css) contains the animation and parallax classes

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

export default function TestimonialSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState<'left' | 'right'>('right');

    // Animation duration in ms - must match CSS animation duration
    const ANIMATION_DURATION = 1500;

    const handleNext = useCallback(() => {
        if (isAnimating) return;
        setDirection('right'); // Incoming slide comes from right
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), ANIMATION_DURATION);
        setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, [isAnimating]);

    const handlePrev = useCallback(() => {
        if (isAnimating) return;
        setDirection('left'); // Incoming slide comes from left
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), ANIMATION_DURATION);
        setActiveIndex((current) => (current === 0 ? TESTIMONIALS.length - 1 : current - 1));
    }, [isAnimating]);

    // Auto-play interval set to 8 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 8000);
        return () => clearInterval(timer);
    }, [activeIndex, handleNext]);

    const currentTestimonial = TESTIMONIALS[activeIndex];

    // Choose animation class based on direction
    const animationClass = direction === 'right' ? 'animate-slideInRight' : 'animate-slideInLeft';

    return (
        <section className="relative w-full py-28 bg-[#111111] text-white overflow-hidden font-sans group">
            {/* Background Image with Fixed Parallax - styles in styles.css */}
            <div className="absolute inset-0 z-0 testimonial-bg-parallax pointer-events-none" />

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
                <div className="relative max-w-5xl mx-auto">

                    {/* Navigation Arrows */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white/40 hover:text-[#E81C2E] transition-colors duration-300 hidden md:flex"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-10 h-10" strokeWidth={1.5} />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white/40 hover:text-[#E81C2E] transition-colors duration-300 hidden md:flex"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-10 h-10" strokeWidth={1.5} />
                    </button>

                    {/* Slide Content */}
                    {/* 
             Using a fixed height (h-[450px]) prevents the section from jumping/resizing
             which stabilizes the fixed background.
          */}
                    <div className="px-4 md:px-20 h-[450px] flex items-center justify-center overflow-hidden">
                        <div
                            key={currentTestimonial.id}
                            className={`flex flex-col items-center text-center w-full max-w-3xl ${animationClass}`}
                        >
                            {/* Description / Quote */}
                            <div className="mb-10 relative">
                                {/* Decorative Red "Comma" (Quote Mark) - styles in styles.css */}
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
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="flex justify-center gap-8 mt-8 md:hidden text-white/40">
                        <button onClick={handlePrev}><ChevronLeft className="w-8 h-8" /></button>
                        <button onClick={handleNext}><ChevronRight className="w-8 h-8" /></button>
                    </div>

                </div>
            </div>
        </section>
    );
}