'use client';

import { useState, useEffect } from 'react';

const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Results', href: '#results' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Features', href: '#features' },
    { label: 'Get Started', href: '#get-started' },
];

export default function Navbar({ openPopup }: { openPopup: () => void }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setMobileOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const handleNavClick = () => {
        setMobileOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[9998] transition-all duration-300 ${
                scrolled
                    ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a href="#" className="flex flex-col items-start flex-shrink-0">
                        <img
                            src="/QA%20logo.png"
                            alt="Quantum Algo"
                            className="h-8 sm:h-10 md:h-12 w-auto"
                        />
                        <span className="text-gray-400 text-[7px] sm:text-[8px] md:text-[10px] font-semibold tracking-wide mt-0.5">
                            by MarketScore
                        </span>
                    </a>

                    {/* Desktop Nav Links */}
                    <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-gray-300 hover:text-white text-sm font-semibold px-3 xl:px-4 py-2 rounded-lg hover:bg-white/5 transition-all"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:block">
                        <button
                            type="button"
                            onClick={openPopup}
                            className="bg-[#A60D60] hover:bg-[#A60D60]/90 text-white font-bold py-2.5 px-8 rounded-full text-sm uppercase tracking-wide transition-all hover:shadow-[0_0_20px_rgba(166,13,96,0.4)] cursor-pointer"
                        >
                            Apply Now
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                                mobileOpen ? 'rotate-45 translate-y-2' : ''
                            }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                                mobileOpen ? 'opacity-0' : ''
                            }`}
                        />
                        <span
                            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                                mobileOpen ? '-rotate-45 -translate-y-2' : ''
                            }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden transition-all duration-300 overflow-hidden ${
                    mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="bg-[#0a0a0a]/98 backdrop-blur-md border-t border-white/5 px-4 py-6 space-y-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={handleNavClick}
                            className="block text-gray-300 hover:text-white text-base font-semibold px-4 py-3 rounded-lg hover:bg-white/5 transition-all"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="pt-4 px-4">
                        <button
                            type="button"
                            onClick={() => {
                                setMobileOpen(false);
                                openPopup();
                            }}
                            className="w-full bg-[#A60D60] hover:bg-[#A60D60]/90 text-white font-bold py-3 px-8 rounded-full text-base uppercase tracking-wide transition-all cursor-pointer"
                        >
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
