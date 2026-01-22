'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

interface NavLink {
    name: string;
    href: string;
    hasIcon?: boolean;
    dropdown?: NavLink[];
}

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks: NavLink[] = [
        {
            name: 'Home',
            href: '/',
            dropdown: [
                { name: 'Car Washing', href: '/car-washing' },
                { name: 'Booking System', href: '/booking-system' }
            ]
        },
        { name: 'Booking', href: '/booking' },
        {
            name: 'About us',
            href: '/about',
            dropdown: [
                { name: 'About us', href: '/about' },
                { name: 'Testimonials', href: '/testimonials' },
                { name: 'Team', href: '/team' },
                { name: 'FAQ', href: '/faq' },
                { name: '404 Page', href: '/404' },
                {
                    name: 'Gallery',
                    href: '/gallery',
                    hasIcon: true,
                    dropdown: [
                        { name: 'Gallery 2-columns', href: '/gallery-2-col' },
                        { name: 'Gallery 3-columns', href: '/gallery-3-col' },
                        { name: 'Gallery 4-columns', href: '/gallery-4-col' }
                    ]
                }
            ]
        },
        {
            name: 'Products',
            href: '/products',
            dropdown: [
                { name: 'Shop', href: '/shop' },
                { name: 'Cart', href: '/cart' },
                { name: 'Checkout', href: '/checkout' },
                { name: 'My account', href: '/account' }
            ]
        },
        {
            name: 'Blog',
            href: '/blog',
            dropdown: [
                {
                    name: 'Blog with Sidebar',
                    href: '/blog-sidebar',
                    hasIcon: true,
                    dropdown: [
                        { name: 'Classic Right Sidebar', href: '/blog-classic-sidebar' },
                        { name: 'Masonry with Right Sidebar', href: '/blog-masonry-sidebar' }
                    ]
                },
                {
                    name: 'Blog without Sidebar',
                    href: '/blog-no-sidebar',
                    hasIcon: true,
                    dropdown: [
                        { name: 'Classic Blog', href: '/blog-classic' },
                        { name: 'Masonry 2-Columns', href: '/blog-masonry-2' },
                        { name: 'Masonry 3-Columns', href: '/blog-masonry-3' }
                    ]
                }
            ]
        },
        { name: 'Contacts', href: '/contacts' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#1f1f1f]/60 border-b border-[#2d2d2d]/30 sm:border-none backdrop-blur-[2px]">
            {/* Container - 1180px fixed width centered */}
            <div className="max-w-[1180px] mx-auto relative h-[100px] flex items-center justify-between px-4 xl:px-0">

                {/* Logo - Positioned Absolute Left: 30px (or relative in flex for mobile) */}
                <div className="navbar-logo absolute left-[30px] top-[10px] z-[2]">
                    <Link href="/" className="block">
                        <Image
                            src="/aqualine-logo.png"
                            alt="Aqualine Autocare"
                            width={80}
                            height={80}
                            className="w-[80px] h-[80px]"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Navigation & Icons Container */}
                <div className="hidden lg:flex flex-1 justify-end items-center h-full pl-[200px]" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)' }}>

                    {/* Main Menu */}
                    <ul className="flex items-center m-0 p-0 list-none">
                        {navLinks.map((link, index) => (
                            <li key={link.name} className="mx-[15px] relative group h-full flex items-center">
                                <Link
                                    href={link.href}
                                    className={`text-white hover:text-[#e81c2e] font-barlow font-bold text-[16px] leading-[1.7em] transition-colors duration-300 flex items-center gap-1 ${index === 0 ? 'text-[#e81c2e]' : ''
                                        }`}
                                >
                                    {link.name}
                                    {link.dropdown && <ChevronDown className="w-[12px] h-[12px] ml-[2px] opacity-70 group-hover:rotate-180 transition-transform duration-300" />}
                                </Link>

                                {/* Dropdown Menu (Level 1) */}
                                {link.dropdown && (
                                    <div className="absolute top-[100%] left-0 ml-[-75px] mt-[15px] w-[250px] bg-white rounded-[8px] shadow-[0_0_15px_rgba(0,0,0,0.1)] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 py-2 z-50">
                                        <ul className="list-none p-0 m-0">
                                            {link.dropdown.map((subLink) => (
                                                <li key={subLink.name} className="relative group/subItem">
                                                    <Link
                                                        href={subLink.href}
                                                        className="flex justify-between items-center px-6 py-[10px] mx-[10px] text-[#19191b] hover:text-white hover:bg-[#e81c2e] rounded-[10px] font-barlow font-bold text-[16px] leading-[27.2px] transition-all duration-200 group/sub"
                                                    >
                                                        {subLink.name}
                                                        {subLink.hasIcon && (
                                                            <ChevronRight className="w-[10px] h-[10px] text-[rgba(25,25,27,0.2)] group-hover/sub:text-white transition-colors" />
                                                        )}
                                                    </Link>

                                                    {/* Dropdown Menu (Level 2) */}
                                                    {subLink.dropdown && (
                                                        <div className="absolute top-0 left-[100%] ml-[5px] w-[250px] bg-white rounded-[8px] shadow-[0_0_15px_rgba(0,0,0,0.1)] opacity-0 invisible translate-x-2 group-hover/subItem:opacity-100 group-hover/subItem:visible group-hover/subItem:translate-x-0 transition-all duration-300 py-2 z-50">
                                                            <ul className="list-none p-0 m-0">
                                                                {subLink.dropdown.map((subSubLink) => (
                                                                    <li key={subSubLink.name}>
                                                                        <Link
                                                                            href={subSubLink.href}
                                                                            className="flex justify-between items-center px-6 py-[10px] mx-[10px] text-[#19191b] hover:text-white hover:bg-[#e81c2e] rounded-[10px] font-barlow font-bold text-[16px] leading-[27.2px] transition-all duration-200"
                                                                        >
                                                                            {subSubLink.name}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Icons */}
                    <div className="flex items-center ml-[30px]">
                        {/* User Icon */}
                        <Link href="/account" className="text-white hover:text-[#e81c2e] mx-[10px] transition-colors duration-300">
                            <User className="w-[18px] h-[18px]" />
                        </Link>

                        {/* Cart Icon */}
                        <Link href="/cart" className="text-white hover:text-[#e81c2e] mx-[10px] transition-colors duration-300 flex items-center">
                            <ShoppingCart className="w-[18px] h-[18px]" />
                            <span className="ml-1 text-sm">0</span>
                        </Link>

                        {/* Search Icon */}
                        <button className="text-white hover:text-[#e81c2e] mx-[10px] transition-colors duration-300">
                            <Search className="w-[18px] h-[18px]" />
                        </button>
                    </div>
                </div>

                {/* Mobile Controls */}
                <div className="lg:hidden flex items-center justify-end w-full pl-[100px]">
                    <button
                        className="text-white hover:text-[#e81c2e] transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-8 h-8" />
                        ) : (
                            <Menu className="w-8 h-8" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="lg:hidden py-4 px-4 bg-[#1f1f1f] border-t border-gray-700 absolute w-full left-0 top-[100px] overflow-y-auto max-h-[calc(100vh-100px)]">
                    <ul className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <li key={link.name} className="flex flex-col">
                                <Link
                                    href={link.href}
                                    className="text-white hover:text-[#e81c2e] font-barlow font-normal text-[16px] transition-colors duration-200 flex justify-between items-center"
                                    onClick={() => !link.dropdown && setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                                {link.dropdown && (
                                    <ul className="pl-4 mt-2 space-y-2 border-l border-gray-700">
                                        {link.dropdown.map((subLink) => (
                                            <li key={subLink.name}>
                                                <Link
                                                    href={subLink.href}
                                                    className="text-gray-400 hover:text-[#e81c2e] font-barlow font-bold text-[14px] transition-colors duration-200 flex justify-between items-center"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {subLink.name}
                                                    {subLink.hasIcon && <ChevronRight className="w-3 h-3" />}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
