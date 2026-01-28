'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImage, afterImage }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = React.useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = (x / rect.width) * 100;
        setSliderPosition(percent);
    }, []);

    const onMouseMove = React.useCallback((e: MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    }, [isDragging, handleMove]);

    const onTouchMove = React.useCallback((e: TouchEvent) => {
        if (!isDragging) return;
        if (e.touches.length > 0) {
            handleMove(e.touches[0].clientX);
        }
    }, [isDragging, handleMove]);

    const onMouseUp = React.useCallback(() => setIsDragging(false), []);
    const onTouchEnd = React.useCallback(() => setIsDragging(false), []);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
            window.addEventListener('touchmove', onTouchMove);
            window.addEventListener('touchend', onTouchEnd);
        } else {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
        }
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
        };
    }, [isDragging, onMouseMove, onTouchMove, onMouseUp, onTouchEnd]);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden cursor-ew-resize select-none shadow-2xl border border-white/5"
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
        >
            {/* After Image (Background) */}
            <div className="absolute inset-0">
                <Image
                    src={afterImage}
                    alt="After"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Before Image (Foreground with clip-path) */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <Image
                    src={beforeImage}
                    alt="Before"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Slider Line and Handle */}
            <div
                className="absolute top-0 bottom-0 w-[2px] bg-white/50 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
            >
                {/* Slider Handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl pointer-events-auto cursor-ew-resize">
                    <div className="flex gap-0.5 text-[#111] font-bold">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" />
                        </svg>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default BeforeAfterSlider;
