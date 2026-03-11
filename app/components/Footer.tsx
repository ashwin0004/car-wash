import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full font-sans">
            {/* Main Footer Area */}
            <div
                className="relative border-t-[6px] border-[#e50000] pt-20 pb-20"
                style={{
                    backgroundColor: 'rgb(25, 25, 27)',
                    backgroundImage: 'url("https://aqualine.like-themes.com/wp-content/uploads/2020/02/carbon_BG-20.png")',
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'auto'
                }}
            >
                <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">

                    {/* Logo */}
                    <Image
                        src="https://aqualine.like-themes.com/wp-content/uploads/2018/02/logo_2x-1.png"
                        alt="Aqualine Autocare"
                        width={120}
                        height={40}
                        className="w-[120px] h-auto mb-8"
                        referrerPolicy="no-referrer"
                    />

                    {/* Description */}
                    <p className="text-[#a0a0a0] text-center max-w-2xl mx-auto mb-20 text-[15px] leading-relaxed">
                        Eco-friendly car washes focus on using natural cleaners for a safe and<br className="hidden sm:block" /> sustainable cleaning process.
                    </p>

                    {/* 4 Columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 w-full">

                        {/* Column 1 */}
                        <div className="flex flex-col items-center text-center group cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-9 h-9 fill-[#e50000] mb-6 transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110">
                                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                            </svg>
                            <p className="text-white font-bold text-[15px] mb-2 tracking-wide">0 (550) 680-34-12</p>
                            <p className="text-[#e50000] text-[15px]">Round-the-clock</p>
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col items-center text-center group cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-9 h-9 fill-[#e50000] mb-6 transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110">
                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                            </svg>
                            <p className="text-white font-bold text-[15px] mb-2 tracking-wide">Car Washing Point</p>
                            <p className="text-[#a0a0a0] text-[15px] leading-relaxed">
                                1353 Locust St, Kansas City,<br />MO 64106
                            </p>
                        </div>

                        {/* Column 3 */}
                        <div className="flex flex-col items-center text-center group cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-10 h-10 fill-[#e50000] mb-5 transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110">
                                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                            </svg>
                            <p className="text-[#a0a0a0] text-[15px] mb-1 mt-1">info@aql-theme.com</p>
                            <p className="text-[#a0a0a0] text-[15px]">support@aql-theme.com</p>
                        </div>

                        {/* Column 4 */}
                        <div className="flex flex-col items-center text-center group cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-9 h-9 fill-[#e50000] mb-6 transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110">
                                <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                            </svg>
                            <p className="text-white font-bold text-[15px] mb-2 tracking-wide">
                                <span className="text-[#e50000] font-normal">Mo-Sa:</span> 07:00 - 22:00
                            </p>
                            <p className="text-white font-bold text-[15px] tracking-wide">
                                <span className="text-[#e50000] font-normal">Su:</span> 07:00 - 16:00
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#111111] py-6 text-center">
                <p className="text-[#a0a0a0] text-[14px]">
                    <span className="text-[#e50000] transition-colors hover:text-white cursor-pointer">Like-themes</span> © All Rights Reserved - 2025 - <span className="text-[#e50000] transition-colors hover:text-white cursor-pointer">Purchase</span>
                </p>
            </div>
        </footer>
    );
}
