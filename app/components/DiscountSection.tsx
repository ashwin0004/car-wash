'use client';

import React from 'react';
import Image from 'next/image';
import { BsArrowRight } from "react-icons/bs";
import { motion } from 'framer-motion';

export default function DiscountSection() {
    return (
        <section className="bg-[var(--brand-red)] py-2 lg:py-0 relative z-20 overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-8 w-full">

                    {/* Left Text */}
                    <div className="z-10 lg:text-left">
                        <h2 className="font-['Barlow_Semi_Condensed',_serif] font-bold text-[36px] leading-[54px] text-[#19191b] mb-2 tracking-normal max-w-[497px]">
                            Hurry to join the <span className="text-white">discount program</span>
                        </h2>
                    </div>

                    {/* Center Image - Cards */}
                    <div className="relative flex flex-row justify-center gap-0 flex-shrink-0 lg:mb-[-180px] z-10 transform translate-y-4 lg:translate-y-0 cursor-pointer rotate-[-10deg] origin-center">
                        <motion.div
                            whileHover={{ y: -20 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="relative z-20"
                        >
                            <Image
                                src="https://aqualine.like-themes.com/wp-content/uploads/2018/02/card_01.png"
                                alt="Discount Program Cards 1"
                                width={448}
                                height={395}
                                className="inline-block"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    verticalAlign: 'middle',
                                    boxSizing: 'border-box',
                                    width: '448px'
                                }}
                            />
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -25 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="hidden lg:block -ml-64"
                        >
                            <Image
                                src="https://aqualine.like-themes.com/wp-content/uploads/2018/02/card_01.png"
                                alt="Discount Program Cards 2"
                                width={448}
                                height={395}
                                className="inline-block"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    verticalAlign: 'middle',
                                    boxSizing: 'border-box',
                                    width: '448px'
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* Right Button */}
                    <div className="z-10">
                        <button className="btn-hover-slide-white group flex items-center justify-between w-[240px] bg-[#1a1a1a] text-white px-8 py-4 rounded-full font-barlow font-bold uppercase tracking-wider text-sm transition-all duration-300">
                            Join now
                            <span className="w-6 h-6 border border-current rounded-full flex items-center justify-center text-xs group-hover:bg-[#1a1a1a] group-hover:text-white group-hover:border-transparent transition-colors">
                                <BsArrowRight className="w-3 h-3" />
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
