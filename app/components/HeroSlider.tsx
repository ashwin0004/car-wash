'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ChevronRight as ChevronIcon } from 'lucide-react';

const slidesData = [
    {
        id: 0,
        imageUrl: 'https://aqualine.like-themes.com/wp-content/uploads/2018/02/SLIDE_05.jpg',
        subtitle: 'MODERN EQUIPMENT',
        title: 'Contactless Car Wash',
        description: 'A clean car is essential for maintaining its resale value and ensuring a presentable appearance.'
    },
    {
        id: 1,
        imageUrl: 'https://aqualine.like-themes.com/wp-content/uploads/2018/02/SLIDE_01.jpg',
        subtitle: 'PREMIUM QUALITY',
        title: 'Automatic Washing',
        description: 'We use the most advanced technology to give your car a sparkling clean look every time.'
    },
    {
        id: 2,
        imageUrl: 'https://aqualine.like-themes.com/wp-content/uploads/2018/02/SLIDE_02.jpg',
        subtitle: 'EXPERT CARE',
        title: 'Professional Detailing',
        description: 'Our experts provide deep cleaning and protection for your vehicle inside and out.'
    },
    {
        id: 3,
        imageUrl: 'https://aqualine.like-themes.com/wp-content/uploads/2018/02/SLIDE_03.jpg',
        subtitle: 'ECO FRIENDLY',
        title: 'Organic Car Care',
        description: 'We use 100% biodegradable products that are safe for your vehicle and the environment.'
    },
    {
        id: 4,
        imageUrl: 'https://aqualine.like-themes.com/wp-content/uploads/2018/02/SLIDE_04.jpg',
        subtitle: 'FAST & RELIABLE',
        title: 'Express Cleaning',
        description: 'High-quality wash and dry in under 15 minutes, perfect for busy schedules.'
    },
];

export default function HeroSlider() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
        setTimeout(() => setIsTransitioning(false), 1000);
    }, [isTransitioning]);

    const prevSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveSlideIndex((prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length);
        setTimeout(() => setIsTransitioning(false), 1000);
    }, [isTransitioning]);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);

        const interval = setInterval(() => {
            nextSlide();
        }, 10000); // 10 seconds for a slower, premium feel

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [nextSlide]);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black">
            {/* Slides Background */}
            <div className="absolute top-0 left-0 w-full h-full">
                {slidesData.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-[1000ms] ease-in-out ${index === activeSlideIndex ? 'opacity-100 visible z-10' : 'opacity-0 invisible z-0'
                            }`}
                        style={{
                            backgroundImage: `url(${slide.imageUrl})`,
                            transform: index === activeSlideIndex && isLoaded ? 'scale(1.15)' : 'scale(1.0)',
                            transition: 'opacity 1000ms ease-in-out, transform 15000ms linear'
                        }}
                    >
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-10 top-1/2 -translate-y-1/2 z-30 w-[50px] h-[50px] rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-10 top-1/2 -translate-y-1/2 z-30 w-[50px] h-[50px] rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Hero Content */}
            <div className="relative z-20 h-full flex items-center justify-center text-center">
                <div className="max-w-[1180px] px-4 w-full">
                    {slidesData.map((slide, index) => (
                        <div key={slide.id} className={`${index === activeSlideIndex ? 'block' : 'hidden'}`}>
                            {/* Subtitle */}
                            <p className="text-[#e81c2e] font-barlow font-bold text-[14px] md:text-[16px] tracking-[0.3em] mb-4 opacity-0 animate-fade-in-up">
                                {slide.subtitle}
                            </p>

                            {/* Title */}
                            <h1 className="text-white font-barlow font-bold text-[50px] md:text-[90px] leading-[1.1] mb-6 opacity-0 animate-fade-in-up delay-200">
                                {slide.title}
                            </h1>

                            {/* Description */}
                            <p className="text-white/80 text-[16px] md:text-[18px] max-w-[600px] mx-auto mb-10 opacity-0 animate-fade-in-up delay-400">
                                {slide.description}
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up delay-600">
                                <button className="group bg-[#e81c2e] text-white font-barlow font-bold py-[18px] px-[35px] rounded-[40px] flex items-center gap-3 btn-hover-slide-white transition-all duration-300">
                                    Read More
                                    <div className="w-[24px] h-[24px] rounded-full border border-white/50 flex items-center justify-center group-hover:border-black/30 transition-colors duration-400">
                                        <ChevronIcon className="w-3 h-3 group-hover:text-[#19191b] transition-colors duration-400" />
                                    </div>
                                </button>

                                <button className="group bg-[#ccb686] text-[#19191b] font-barlow font-bold py-[18px] px-[35px] rounded-[40px] flex items-center gap-3 btn-hover-slide-white transition-all duration-300">
                                    Order Now
                                    <div className="w-[24px] h-[24px] rounded-full border-black/30 flex items-center justify-center transition-colors duration-400">
                                        <ChevronIcon className="w-3 h-3" />
                                    </div>
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {/* Slide Indicators (Optional but nice) */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {slidesData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveSlideIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeSlideIndex ? 'bg-[#e81c2e] w-8' : 'bg-white/30'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
