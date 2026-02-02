import Link from 'next/link';

export default function TopBanner() {
    return (
        <div className="w-full bg-[#3d3d3d] border-b border-[#2d2d2d] h-[54px] fixed top-0 left-0 z-[100]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex items-center justify-between h-full">
                    {/* Logo Section */}
                    <Link
                        href="/"
                        className="flex items-center gap-1 hover:opacity-80 transition-opacity w-[40px] overflow-visible"
                    >
                        <div className="flex items-center">
                            <svg
                                className="w-4 h-4 text-[#82b541]"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                            >
                                <path d="M8 0L0 4.5v7L8 16l8-4.5v-7L8 0zm0 2.2l5.5 3.1v5.4L8 13.8l-5.5-3.1V5.3L8 2.2z" />
                            </svg>
                            <span className="ml-1 text-white text-sm font-medium">envato</span>
                            <span className="text-white/60 text-sm font-light">market</span>
                        </div>
                    </Link>

                    {/* Buy Now Button Section */}
                    <div id="js-preview__actions" className="w-[133.7px] flex justify-end items-center h-full">
                        <Link
                            href="#"
                            className="bg-[#82b541] hover:bg-[#73a037] text-white text-xs font-medium px-4 py-1.5 rounded transition-colors duration-200"
                        >
                            Buy now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
