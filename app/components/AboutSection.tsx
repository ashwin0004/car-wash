'use client';

import Image from 'next/image';
import { ChevronRight as ChevronIcon, Car, FlaskConical, Wand2, Disc } from 'lucide-react';


const services = [
    {
        title: 'Contactless Washing',
        description: 'The quality of a car wash is often determined by the equipment.',
        icon: Car,
    },
    {
        title: 'Safety Materials',
        description: 'Car washes often include tire cleaning, ensuring proper attention.',
        icon: FlaskConical,
    },
    {
        title: 'Modern Equipment',
        description: 'High-pressure water jets are effective at removing road grime.',
        icon: Wand2,
    },
    {
        title: 'Extensive Cleaning',
        description: 'Car wash stations often provide detailing services like waxing.',
        icon: Disc,
    },
];



export default function AboutSection() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-15">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">


                    {/* Left Content Side */}
                    <div className="w-full lg:w-1/2">
                        <div className="mb-10">
                            {/* Subtitle with Red Line */}
                            <div className="flex items-center gap-5 mb-4">
                                <div className="w-[60px] h-[1px] bg-[#e81c2e]"></div>
                                <span className="text-[#e81c2e] font-barlow font-bold text-[14px] tracking-[0.4em] uppercase">
                                    Modern Equipment
                                </span>
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-[#19191B] font-barlow font-bold text-[40px] md:text-[48px] leading-[1.15] mb-6">
                                Professional washing and <br className="hidden md:block" />
                                cleaning of your car
                            </h2>

                            {/* Description */}
                            <p className="text-[rgba(25,25,27,0.75)] font-ubuntu text-[16px] leading-[1.7] mb-8 max-w-[500px]">
                                Automated car wash stations save time, allowing for a quick and efficient vehicle cleaning process. Many car wash stations offer seasonal discounts or promotional offers, making it easier to keep your car clean.
                            </p>

                            {/* Call for book */}
                            <div className="mb-10">
                                <h6 className="text-[#19191B] font-barlow font-extrabold text-[24px]">
                                    Call for book: <span className="text-[#e81c2e] ml-2 font-black">8-800-10-500</span>
                                </h6>
                            </div>

                            {/* CTA Button */}
                            <button className="group relative bg-[#e81c2e] text-white font-barlow font-bold py-[18px] px-[35px] rounded-[40px] flex items-center gap-3 btn-hover-slide-white transition-all duration-300">
                                Read More
                                <div className="w-[24px] h-[24px] rounded-full border border-white/50 flex items-center justify-center group-hover:border-[#19191B]/30 transition-colors duration-400">
                                    <ChevronIcon className="w-3 h-3 group-hover:text-[#19191B] transition-colors duration-400" />
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Right Image Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[5/4]">
                            <Image
                                src="https://aqualine.like-themes.com/wp-content/uploads/elementor/thumbs/washer-r2ydai08tperd5xg3rq7ojaqhawt7ngbsjbcklpinw.jpg"
                                alt="Professional car washing"
                                fill
                                className="object-cover object-left"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Services Grid (Now part of AboutSection) */}
                <div className="mt-24 flex flex-col md:flex-row items-stretch justify-between">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className={`flex-1 flex flex-col items-start px-10 relative ${index !== services.length - 1 ? 'md:after:content-[""] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:w-[1px] md:after:h-[184px] md:after:bg-black/10' : ''
                                }`}
                        >
                            <div className="mb-8">
                                <service.icon className="w-20 h-20 text-[#e81c2e]" strokeWidth={1} />
                            </div>

                            <h3 className="font-barlow font-bold text-[24px] text-[#19191b] mb-4 leading-none">
                                {service.title}
                            </h3>
                            <p className="font-ubuntu text-[14px] text-black/80 leading-[2] max-w-[280px]">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}
