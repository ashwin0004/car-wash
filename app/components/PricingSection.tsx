"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Check, X, Clock, ChevronRight } from 'lucide-react';

// --- Types ---

type VehicleType = 'sedan' | 'pickup' | 'suv' | 'minibus';

interface VehicleDefinition {
  id: VehicleType;
  label: string;
  priceMultiplier: number;
}

interface ServiceFeature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  id: string;
  title: string;
  basePrice: number;
  currency: string;
  features: ServiceFeature[];
  durationMinutes: number;
  isFeatured?: boolean;
}

// --- Constants ---

const VEHICLES: VehicleDefinition[] = [
  { id: 'sedan', label: 'Small Sedan', priceMultiplier: 1.0 },
  { id: 'pickup', label: 'Pickup', priceMultiplier: 1.2 },
  { id: 'suv', label: 'SUV', priceMultiplier: 1.15 },
  { id: 'minibus', label: 'Minibus', priceMultiplier: 1.3 },
];

const VehicleIcons: Record<string, React.ReactNode> = {
  sedan: (
    <Image
      src="https://aqualine.like-themes.com/wp-content/uploads/2020/02/car_01.png"
      alt="Small Sedan"
      width={128}
      height={64}
      className="w-32 h-auto object-contain"
    />
  ),
  pickup: (
    <Image
      src="https://aqualine.like-themes.com/wp-content/uploads/2020/02/car_03.png"
      alt="Pickup"
      width={128}
      height={64}
      className="w-32 h-auto object-contain"
    />
  ),
  suv: (
    <Image
      src="https://aqualine.like-themes.com/wp-content/uploads/2020/02/car_02.png"
      alt="SUV"
      width={128}
      height={64}
      className="w-32 h-auto object-contain"
    />
  ),
  minibus: (
    <Image
      src="https://aqualine.like-themes.com/wp-content/uploads/2020/02/car_04.png"
      alt="Minibus"
      width={128}
      height={64}
      className="w-32 h-auto object-contain"
    />
  )
};

const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'express',
    title: 'Express Washing',
    basePrice: 12.99,
    currency: '$',
    durationMinutes: 15,
    features: [
      { name: 'Exterior washing', included: true },
      { name: 'Vacuum cleaning', included: false },
      { name: 'Interior wet cleaning', included: false },
      { name: 'Window wiping', included: false },
    ],
  },
  {
    id: 'premium',
    title: 'Premium Service',
    basePrice: 36.66,
    currency: '$',
    durationMinutes: 45,
    features: [
      { name: 'Exterior washing', included: true },
      { name: 'Vacuum cleaning', included: true },
      { name: 'Interior wet cleaning', included: true },
      { name: 'Window wiping', included: false },
    ],
  },
  {
    id: 'basic',
    title: 'Basic Cleaning',
    basePrice: 30.99,
    currency: '$',
    durationMinutes: 25,
    features: [
      { name: 'Exterior washing', included: true },
      { name: 'Vacuum cleaning', included: true },
      { name: 'Interior wet cleaning', included: false },
      { name: 'Window wiping', included: false },
    ],
  },
  {
    id: 'complex',
    title: 'Full Complex',
    basePrice: 59.99,
    currency: '$',
    durationMinutes: 120,
    isFeatured: true,
    features: [
      { name: 'Exterior washing', included: true },
      { name: 'Vacuum cleaning', included: true },
      { name: 'Interior wet cleaning', included: true },
      { name: 'Window wiping', included: true },
    ],
  },
];

// --- Sub-components ---

const VehicleSelector: React.FC<{
  selectedVehicle: VehicleType;
  onSelect: (vehicle: VehicleType) => void;
}> = ({ selectedVehicle, onSelect }) => {
  return (
    <div className="flex sm:flex-wrap justify-start sm:justify-center gap-4 sm:gap-6 lg:gap-12 mb-8 min-w-max sm:min-w-0">
      {VEHICLES.map((vehicle) => {
        const isSelected = selectedVehicle === vehicle.id;
        return (
          <button
            key={vehicle.id}
            onClick={() => onSelect(vehicle.id)}
            className={`
              group relative flex flex-col items-center justify-center 
              w-32 sm:w-40 md:w-48 py-6 sm:py-8 transition-all duration-300 rounded-2xl cursor-pointer flex-shrink-0
              ${isSelected 
                ? 'bg-white shadow-xl scale-105 sm:scale-110 z-10 sm:hover:-translate-y-2 hover:shadow-2xl' 
                : 'bg-transparent border border-transparent hover:bg-white hover:shadow-lg'
              }
            `}
          >
            <div className={`
              mb-4 sm:mb-6 transition-all duration-500 ease-out transform w-24 sm:w-32
              ${isSelected 
                ? 'scale-105 sm:scale-110 -translate-y-1 sm:-translate-y-2' 
                : 'group-hover:scale-110 sm:group-hover:-translate-y-2'
              }
            `}>
               {VehicleIcons[vehicle.id]}
            </div>
            
            <span className={`
              text-sm sm:text-base md:text-lg font-['Barlow'] font-extrabold uppercase tracking-widest transition-colors duration-300 text-center px-2
              ${isSelected ? 'text-[#1a1a1a]' : 'text-gray-500 group-hover:text-[#1a1a1a]'}
            `}>
              {vehicle.label}
            </span>
            
          </button>
        );
      })}
    </div>
  );
};

const PricingCard: React.FC<{
  plan: PricingPlan;
  priceMultiplier: number;
}> = ({ plan, priceMultiplier }) => {
  const calculatedPrice = (plan.basePrice * priceMultiplier).toFixed(2);
  const [dollars, cents] = calculatedPrice.split('.');

  const isFeatured = plan.isFeatured;

  return (
    <div 
      className={`
        relative overflow-hidden rounded-lg transition-all duration-300 ease-out
        flex flex-col h-full group/card 
        hover:-translate-y-3 hover:shadow-2xl
        ${isFeatured 
            ? 'bg-[#1a1a1a] text-white shadow-xl scale-[1.02] hover:scale-[1.05] ring-1 ring-white/10' 
            : 'bg-white text-[#1a1a1a] shadow-lg border border-gray-100 hover:scale-[1.03]'
        }
      `}
    >
        {/* Background image overlay for featured card */}
        {isFeatured && (
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 -z-10">
                  <Image
                    src="https://aqualine.like-themes.com/wp-content/uploads/2018/02/plan_BG.jpg"
                    alt=""
                    fill
                    className="object-cover opacity-25 transition-transform duration-700 group-hover/card:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a]/90"></div>
            </div>
        )}

      <div className="relative z-10 p-8 flex flex-col items-center flex-grow">
        <h3 className={`text-lg font-bold font-['Barlow'] uppercase tracking-wider mb-6 text-[#e41d25]`}>
          {plan.title}
        </h3>

        <div className="flex items-start mb-8 font-['Barlow']">
            <span className={`text-3xl font-bold mt-2 mr-1 ${isFeatured ? 'text-white' : 'text-gray-400'}`}>{plan.currency}</span>
            <span className={`text-7xl font-extrabold leading-none ${isFeatured ? 'text-white' : 'text-[#1a1a1a]'}`}>{dollars}</span>
            <span className={`text-3xl font-bold mt-2 ${isFeatured ? 'text-white' : 'text-gray-400'}`}>.{cents}</span>
        </div>

        <ul className={`w-full mb-8 ${isFeatured ? 'divide-y divide-white/10' : 'divide-y divide-gray-100'}`}>
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center justify-between py-3 text-sm font-medium">
              <span className={isFeatured ? (feature.included ? 'text-gray-100' : 'text-gray-500') : (feature.included ? 'text-gray-700' : 'text-gray-400')}>
                {feature.name}
              </span>
              <span className="flex-shrink-0 ml-3">
                {feature.included ? (
                  <Check className="w-5 h-5 text-[#e41d25]" strokeWidth={3} />
                ) : (
                  <X className="w-4 h-4 text-gray-300" strokeWidth={3} />
                )}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col items-center w-full">
            <div className={`flex items-center justify-center gap-2 mb-8 text-sm font-bold uppercase tracking-widest text-gray-400`}>
                <Clock className={`w-4 h-4 text-[#e41d25]`} />
                <span>{plan.durationMinutes} min</span>
            </div>

            <button 
                className={`
                    group/btn relative w-full py-4 px-6 rounded-full overflow-hidden
                    font-['Barlow'] font-bold uppercase text-sm tracking-widest
                    bg-[#e41d25] text-white shadow-md
                `}
            >
                {/* Sliding Background Effect: Left to Right */}
                <span className={`
                    absolute inset-0 w-full h-full 
                    ${isFeatured ? 'bg-white' : 'bg-[#1a1a1a]'} 
                    -translate-x-full group-hover/btn:translate-x-0 
                    transition-transform duration-500 ease-out origin-left
                `}></span>

                {/* Button Content */}
                <span className={`
                    relative z-10 flex items-center justify-center gap-2 transition-colors duration-300
                    ${isFeatured ? 'group-hover/btn:text-[#e41d25]' : 'text-white'}
                `}>
                    Order Now
                    <div className={`
                        rounded-full p-0.5 transition-transform duration-300 group-hover/btn:translate-x-1
                        ${isFeatured 
                            ? 'bg-white/20 group-hover/btn:bg-[#e41d25]/10' 
                            : 'bg-white/20'
                        }
                    `}>
                       <ChevronRight className="w-3 h-3" />
                    </div>
                </span>
            </button>
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---

export const PricingSection: React.FC = () => {
  const [selectedVehicleId, setSelectedVehicleId] = useState<VehicleType>('sedan');

  // Find the index of the selected vehicle to calculate the slide position
  const selectedIndex = VEHICLES.findIndex(v => v.id === selectedVehicleId);

  return (
    <section className="relative py-20 bg-[#f9f9f9] min-h-screen flex flex-col justify-center overflow-hidden font-sans">
      
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="block text-[#e41d25] font-['Barlow'] font-bold tracking-[0.2em] text-xs uppercase mb-3">
            Washing Price
          </span>
          <h2 className="text-4xl md:text-5xl font-['Barlow'] font-extrabold text-[#1a1a1a] mb-6">
            Choose Your Plan
          </h2>
          {/* Updated Paragraph with requested styles */}
          <p className="max-w-[1000px] mx-auto text-[rgba(0,0,0,0.75)] leading-[27.2px] text-sm md:text-base font-['Ubuntu'] mb-[10px]">
            Car washes using natural cleaners help maintain your vehicle&apos;s finish while being environmentally responsible. 
            Heightened care ensures even the smallest details, like air vents and cup holders, are cleaned perfectly.
          </p>
        </div>

        {/* Vehicle Selection Tabs */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible">
          <VehicleSelector 
            selectedVehicle={selectedVehicleId} 
            onSelect={setSelectedVehicleId} 
          />
        </div>

        {/* Carousel Container */}
        <div className="w-full overflow-hidden py-12">
            {/* 
              Slider Track 
              - Width is 100% * number of vehicles. 
              - Transforms horizontally based on selected index.
            */}
            <div 
                className="flex transition-transform duration-700 cubic-bezier(0.25, 1, 0.5, 1) will-change-transform"
                style={{ 
                    width: `${VEHICLES.length * 100}%`,
                    transform: `translate3d(-${(selectedIndex * 100) / VEHICLES.length}%, 0, 0)` 
                }}
            >
                {/* Render a slide for each vehicle */}
                {VEHICLES.map((vehicle) => (
                    <div 
                        key={vehicle.id} 
                        className="w-full flex-shrink-0 px-1" 
                        style={{ width: `${100 / VEHICLES.length}%` }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                            {PRICING_PLANS.map((plan) => (
                                <PricingCard 
                                    key={`${vehicle.id}-${plan.id}`}
                                    plan={plan} 
                                    priceMultiplier={vehicle.priceMultiplier} 
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};