"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Clock, Check, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

// --- Types ---
interface ServiceFeature {
  id: string;
  text: string;
}

interface ServiceItem {
  id: string;
  title: string;
  duration: string;
  description: string;
  image: string;
  features: ServiceFeature[];
}

// --- Data ---
const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Exterior Washing',
    duration: '30 min',
    description: 'Automatic car washes combine convenience and efficiency, offering quick cleaning solutions for busy drivers. We ensure your vehicle looks brand new with our premium exterior finish.',
    image: 'https://aqualine.like-themes.com/wp-content/uploads/2018/02/serv_04.jpg',
    features: [
      { id: 'f1', text: 'Seats washing' },
      { id: 'f2', text: 'Vacuum cleaning' },
      { id: 'f3', text: 'Interior wet cleaning' },
      { id: 'f4', text: 'Window wiping' },
    ]
  },
  {
    id: '2',
    title: 'Interior Detailing',
    duration: '60 min',
    description: 'Our interior detailing service goes deep into every crevice, removing dust, stains, and odors to restore that new car smell and feel.',
    image: 'https://aqualine.like-themes.com/wp-content/uploads/2018/02/serv_03.jpg',
    features: [
      { id: 'f1', text: 'Dashboard polishing' },
      { id: 'f2', text: 'Leather conditioning' },
      { id: 'f3', text: 'Carpet shampooing' },
      { id: 'f4', text: 'Odor elimination' },
    ]
  },
  {
    id: '3',
    title: 'Engine Steam Wash',
    duration: '45 min',
    description: 'Safely remove grease and grime from your engine bay using high-pressure steam, improving heat dissipation and visual appeal.',
    image: 'https://aqualine.like-themes.com/wp-content/uploads/2018/02/serv_02.jpg',
    features: [
      { id: 'f1', text: 'Grease removal' },
      { id: 'f2', text: 'Safe steam cleaning' },
      { id: 'f3', text: 'Plastic dressing' },
      { id: 'f4', text: 'Leak inspection' },
    ]
  },
  {
    id: '4',
    title: 'Ceramic Coating',
    duration: '120 min',
    description: 'Long-lasting protection for your paintwork. Our ceramic coating provides a hydrophobic layer that repels water and dirt.',
    image: 'https://aqualine.like-themes.com/wp-content/uploads/2018/02/serv_01.jpg',
    features: [
      { id: 'f1', text: 'Paint correction' },
      { id: 'f2', text: '3-year protection' },
      { id: 'f3', text: 'Hydrophobic finish' },
      { id: 'f4', text: 'Gloss enhancement' },
    ]
  },
  {
    id: '5',
    title: 'Full Service Package',
    duration: '180 min',
    description: 'The ultimate treatment for your vehicle. Combines exterior washing, interior detailing, and engine cleaning for a complete restoration.',
    image: 'https://aqualine.like-themes.com/wp-content/uploads/2018/02/serv_05.jpg',
    features: [
      { id: 'f1', text: 'All-in-one service' },
      { id: 'f2', text: 'Premium wax' },
      { id: 'f3', text: 'Full interior detail' },
      { id: 'f4', text: 'Tire dressing' },
    ]
  }
];

// --- Internal Components ---

const ClockIcon = ({ className }: { className?: string }) => <Clock className={className} size={18} />;
const CheckIcon = ({ className }: { className?: string }) => <Check className={className} size={16} strokeWidth={3} />;
const NextIcon = ({ className }: { className?: string }) => <ChevronRight className={className} />;
const PrevIcon = ({ className }: { className?: string }) => <ChevronLeft className={className} />;
const ArrowRightIcon = ({ className }: { className?: string }) => <ArrowRight className={className} size={18} />;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button 
      className={`
        bg-[#e6242d] text-white font-bold 
        py-4 px-10 rounded-full 
        inline-flex items-center gap-2 
        transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg
        uppercase text-sm tracking-wider
        ${className}
      `}
      {...props}
    >
      {children}
      <div className="border-2 border-white rounded-full p-0.5 ml-1">
        <ArrowRightIcon className="w-3 h-3" />
      </div>
    </button>
  );
};

// --- Main Section Component ---

const ServicesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  // Auto-advance logic
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  return (
    <section className="relative w-full py-20 lg:py-32 bg-[#111111] overflow-hidden">
      {/* Background Texture - using inline style for reproducible gradient */}
      <div
        className="absolute inset-0 opacity-100 z-0"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #151515 0px, #151515 2px, #111111 2px, #111111 10px)', backgroundSize: '10px 10px' }}
      ></div>

      <div className="relative z-10 container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16 space-y-4">
          <span className="text-[#e6242d] uppercase tracking-[0.2em] text-xs font-bold">
            What We Do
          </span>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
            Premium Washing Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Car washes using natural cleaners help maintain your vehicle&apos;s finish while being environmentally responsible.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* The Viewport (Overflow Hidden) */}
          <div className="overflow-hidden bg-white rounded-sm shadow-2xl">
            {/* The Track (Slides) */}
            <div 
              className="flex transition-transform duration-700 ease-in-out will-change-transform"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {services.map((service) => (
                <div key={service.id} className="w-full flex-shrink-0 flex flex-col md:flex-row min-h-[500px]">
                  
                  {/* Left: Image Area (65% width on md+, full width on mobile) */}
                  <div className="relative w-full md:w-[65%] h-[300px] md:h-auto overflow-hidden group">
                    <div className="w-full h-full relative">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transform transition-transform duration-[2000ms] group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 66vw"
                      />
                      {/* Red Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent mix-blend-multiply pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Right: Content Area (35% width on md+) */}
                  <div className="w-full md:w-[35%] p-6 pt-8 pb-20 md:p-8 lg:p-14 flex flex-col justify-center bg-white relative">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111111] mb-3 text-left">
                      {service.title}
                    </h3>
                    
                    <div className="flex items-center text-[#e6242d] font-semibold mb-6">
                      <ClockIcon className="mr-2" />
                      <span className="uppercase tracking-wide text-sm">{service.duration}</span>
                    </div>

                    <p className="text-gray-600 mb-8 leading-relaxed text-sm lg:text-base text-left">
                      {service.description}
                    </p>

                    {/* Feature List */}
                    <ul className="space-y-3 mb-10">
                      {service.features.map((feature) => (
                        <li key={`${service.id}-${feature.id}`} className="flex items-center text-gray-700 text-sm font-semibold">
                          <span className="mr-3 text-green-500">
                            <CheckIcon />
                          </span>
                          {feature.text}
                        </li>
                      ))}
                    </ul>

                    <div className="text-left">
                      <Button className="group bg-[#e81c2e] text-white font-barlow font-bold py-[18px] px-[35px] rounded-[40px] flex items-center gap-3 btn-hover-slide-white transition-all duration-300 w-full sm:w-auto justify-center">
                        Get Plan
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Static Navigation Controls - Positioned over the image area on md+, bottom center on mobile */}
          <div className="absolute bottom-4 left-1/2 md:bottom-12 md:left-[32.5%] -translate-x-1/2 flex items-center gap-4 z-20">
            <span className="text-white font-bold text-lg drop-shadow-md">
              {currentIndex + 1}/{services.length}
            </span>
            
            <div className="flex gap-2">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border-2 border-white/50 text-white flex items-center justify-center hover:bg-[#e6242d] hover:border-[#e6242d] transition-all duration-300 backdrop-blur-sm bg-black/10 md:bg-black/30 md:backdrop-blur-md"
                aria-label="Previous Service"
              >
                <PrevIcon className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full border-2 border-white/50 text-white flex items-center justify-center hover:bg-[#e6242d] hover:border-[#e6242d] transition-all duration-300 backdrop-blur-sm bg-black/10 md:bg-black/30 md:backdrop-blur-md"
                aria-label="Next Service"
              >
                <NextIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;