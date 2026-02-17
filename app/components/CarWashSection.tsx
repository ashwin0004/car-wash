import React from 'react';
import Image from 'next/image';
import { MapPin, ChevronDown } from 'lucide-react';

// Define types for location data
interface Location {
    id: number;
    title: string;
    address: string;
    zip: string;
}

const locations: Location[] = [
    {
        id: 1,
        title: "Car Washing Point",
        address: "1353 Locust St, Kansas City, MO",
        zip: "64106"
    },
    {
        id: 2,
        title: "Car Washing Point",
        address: "774 Eagles Nest Drive, Chico, CA",
        zip: "95926"
    },
    {
        id: 3,
        title: "Service Point",
        address: "754 Adams Avenue, Waldorf, MD",
        zip: "20601"
    },
    {
        id: 4,
        title: "Service Point",
        address: "1923 Edington Drive, Norcross, GA",
        zip: "30071"
    },
    {
        id: 5,
        title: "Auto Care Point",
        address: "4595 Parkview Drive, Sacramento,",
        zip: "CA 83209"
    }
];

export const CarWashSection: React.FC = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center py-20 lg:py-0 overflow-hidden bg-white">
            <div className="w-full max-w-[1500px] mx-auto px-4 lg:px-12 h-fit">
                {/* 
        lg:items-stretch ensures all columns (Image, List, Form) have equal height.
        This aligns the bottom of the form (black box) with the bottom of the locations list content if content dictates height.
      */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-0">

                    {/* Column 1: Image */}
                    <div className="w-full lg:w-[32%] relative z-10 flex justify-center lg:justify-start pt-8">
                        <Image
                            src="https://aqualine.like-themes.com/wp-content/uploads/2018/02/wash-machine.png"
                            alt="Pressure Washer"
                            width={600}
                            height={800}
                            className="w-full max-w-[500px] lg:max-w-full h-auto object-contain self-start"
                            priority
                        />
                    </div>

                    {/* Column 2: Content/Locations */}
                    <div className="w-full lg:w-[38%] pt-4 lg:pt-12 px-4 relative flex flex-col">
                        {/* Subtle World Map Background Watermark */}
                        <div
                            className="absolute inset-0 opacity-5 pointer-events-none bg-no-repeat bg-center bg-contain"
                            style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1200px-World_map_-_low_resolution.svg.png')" }}
                        ></div>

                        <div className="relative z-10">
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-3">
                                <span className="h-[2px] w-8 bg-[#E81C2E]"></span>
                                <h6 className="font-subheader text-[#E81C2E] font-bold text-[14px] uppercase tracking-[6px] leading-[1.3]">
                                    Locations
                                </h6>
                            </div>

                            {/* Title */}
                            <h4 className="font-subheader text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#19191B] leading-[1.15] tracking-normal mb-12 lg:whitespace-nowrap">
                                Car Washing and Care Points
                            </h4>

                            {/* Locations Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8">
                                {locations.map((loc) => (
                                    <div key={loc.id} className="flex gap-3 items-start group hover:cursor-pointer">
                                        <div className="mt-1 flex-shrink-0">
                                            <MapPin className="w-5 h-5 text-theme-red fill-current transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:-translate-y-1" />
                                        </div>
                                        <div>
                                            <h4 className="font-heading font-bold text-gray-900 text-lg mb-2 transition-colors duration-300 group-hover:text-theme-red">
                                                {loc.title}
                                            </h4>
                                            <p className="text-gray-500 text-sm leading-relaxed font-sans transition-colors duration-300 group-hover:text-black">
                                                {loc.address}
                                            </p>
                                            <p className="text-gray-500 text-sm leading-relaxed font-sans transition-colors duration-300 group-hover:text-black">
                                                {loc.zip}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Form */}
                    <div className="w-full lg:w-[30%] lg:pt-12 lg:pl-10 lg:ml-3 flex">
                        {/* 
            Form Container:
            - bg-carbon-fiber + bg-repeat for pattern
            - h-full to fill height determined by siblings
            - p-8 lg:p-12 for internal spacing
            - flex flex-col to organize internal content
          */}
                        <div className="bg-[#1a1a1a] bg-carbon-fiber bg-repeat rounded-lg p-8 lg:p-12 shadow-xl w-full relative overflow-hidden flex flex-col h-full">

                            <h3 className="text-white text-[26px] font-heading font-bold mb-10 text-center leading-tight tracking-wide">
                                Apply for a <span className="text-theme-red">car wash</span>
                            </h3>

                            <form className="space-y-6 w-full">
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full bg-white rounded-full px-8 py-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-theme-red transition-all text-[15px] font-sans"
                                />

                                <input
                                    type="tel"
                                    placeholder="Phone number"
                                    className="w-full bg-white rounded-full px-8 py-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-theme-red transition-all text-[15px] font-sans"
                                />

                                <div className="relative">
                                    <select
                                        className="w-full bg-white rounded-full px-8 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-theme-red transition-all text-[15px] appearance-none cursor-pointer font-sans"
                                        defaultValue="07:00"
                                    >
                                        <option value="07:00">07:00</option>
                                        <option value="08:00">08:00</option>
                                        <option value="09:00">09:00</option>
                                        <option value="10:00">10:00</option>
                                        <option value="11:00">11:00</option>
                                    </select>
                                    <ChevronDown className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-900 w-4 h-4 pointer-events-none" />
                                </div>

                                <button
                                    type="button"
                                    className="w-full bg-[#E31E24] hover:bg-red-700 text-white font-bold font-heading tracking-wider py-4 rounded-full transition-colors duration-300 text-[16px] shadow-lg"
                                >
                                    Send Request
                                </button>
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
