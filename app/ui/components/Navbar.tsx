'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from './Button';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 600);

        const handleScroll = () => {
            setIsAtTop(window.scrollY <= 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            clearTimeout(timeout);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { label: 'Blog', href: 'https://supermemory.ai/blog', target: '_blank' },
        { label: 'Docs', href: 'https://docs.supermemory.ai/introduction', target: '_blank' },
        { label: 'Pricing', href: '/pricing' }
    ];

    return (
        <header
            role="banner"
            className={`sticky top-6 z-100 md:mx-8 mx-4 transition-transform duration-500 ease-linear ${isMounted ? 'translate-y-0' : '-translate-y-full opacity-0 pointer-events-none'
                }`}
        >
            <div
                className={`p-1 mx-auto border border-neutral-600/50 rounded-[1.1rem] bg-[#1C1F24] shadow-[inset_0_4px_6px_#242629,inset_0_1px_2px_rgba(255,255,255,0.04),inset_0_3px_2px_rgba(209,213,219,0.1),0_3px_10px_rgba(0,0,0,0.25),0_1px_1px_rgba(255,255,255,0.06)] transition-all duration-800 ease-[cubic-bezier(0.25,0.8,0.25,1)] will-change-[width] ${isAtTop ? 'w-full' : 'md:w-[70%]'
                    }`}
            >
                <div className="px-3 bg-[#21252A] rounded-xl flex items-center py-3 justify-between shadow-[0_2px_6px_rgba(0,0,0,0.2),0_-1px_2px_rgba(209,213,219,0.05),inset_0_1px_0_rgba(255,255,255,0.01),0_-2px_3px_rgba(0,0,0,0.12)]">
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <Link href="/" aria-label="home" className="flex items-end">
                            <Image
                                src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06541_logo.svg"
                                alt="Logo"
                                width={120}
                                height={40}
                                className="h-8 w-auto"
                                priority
                            />
                            {isAtTop && <Image
                                src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06595_logo-navbag-long.svg"
                                alt="Text Logo"
                                width={200}
                                height={40}
                                className="hidden md:block h-6 w-auto mx-3.5 transition-opacity duration-300"
                                priority
                            />}
                        </Link>

                        <div className="hidden ml-2 md:flex md:flex-row md:gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    target={link.target}
                                    className="text-[var(--white)] hover:underline font-medium text-base transition-colors duration-200"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <button
                        className="md:hidden flex items-center justify-center p-2 text-[var(--neutral-light)] hover:text-[var(--white)] focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="menu"
                        aria-expanded={isMenuOpen}
                    >
                        <div className="space-y-1.5">
                            <span
                                className={`block w-6 h-0.5 bg-current transition-transform duration-200 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''
                                    }`}
                            />
                            <span
                                className={`block w-6 h-0.5 bg-current transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : ''
                                    }`}
                            />
                            <span
                                className={`block w-6 h-0.5 bg-current transition-transform duration-200 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                    }`}
                            />
                        </div>
                    </button>

                    <div className="hidden md:flex md:items-center md:space-x-6">
                        <Button
                            label="Get supermemory"
                            href="https://console.supermemory.ai/"
                            target="_blank"
                            className="md:w-auto"
                            suplabel="TM"
                        />
                    </div>
                </div>
            </div>

            <div
                className={`absolute top-full left-0 w-full mt-2 p-1 mx-auto border border-neutral-600/50 rounded-[1.1rem] bg-[#1C1F24] shadow-[inset_0_4px_6px_#242629,inset_0_1px_2px_rgba(255,255,255,0.04),inset_0_3px_2px_rgba(209,213,219,0.1),0_3px_10px_rgba(0,0,0,0.25),0_1px_1px_rgba(255,255,255,0.06)] transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
            >
                <div className="bg-[#21252A] shadow-[0_2px_6px_rgba(0,0,0,0.2),0_-1px_2px_rgba(209,213,219,0.05),inset_0_1px_0_rgba(255,255,255,0.01),0_-2px_3px_rgba(0,0,0,0.12)] px-5 py-4 border border-neutral-700/50 rounded-xl z-50 space-y-4">
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                target={link.target}
                                className="text-[var(--white)] hover:underline font-medium text-base transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button
                            label="Get supermemory"
                            href="https://console.supermemory.ai/"
                            target="_blank"
                            className="w-full"
                            suplabel="TM"
                        />
                    </div>

                    <div className="flex justify-between w-full items-center pt-4 border-t border-neutral-700/50 text-[var(--white)] text-sm">
                        <Link href="https://github.com/supermemoryai" target="_blank" className="hover:underline">
                            GitHub • 9.9k stars
                        </Link>
                        <Link href="https://x.com/SupermemoryAI" target="_blank" className="hover:underline">
                            X • 6.9k followers
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
