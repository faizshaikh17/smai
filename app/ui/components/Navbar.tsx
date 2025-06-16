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

    return (
        <header
            role="banner"
            className={`sticky top-6 z-50 transition-transform duration-500 ease-linear ${isMounted ? 'translate-y-0' : '-translate-y-full opacity-0 pointer-events-none'
                }`}
        >
            <div
                className={`p-1 mx-auto border border-neutral-600/50 rounded-[1.1rem] bg-[#1C1F24] shadow-[inset_0_4px_6px_#242629,inset_0_1px_2px_rgba(255,255,255,0.04),inset_0_3px_2px_rgba(209,213,219,0.1),0_3px_10px_rgba(0,0,0,0.25),0_1px_1px_rgba(255,255,255,0.06)] transition-all duration-800 ease-[cubic-bezier(0.25,0.8,0.25,1)] will-change-[width] ${isAtTop ? 'w-full' : 'w-[70%]'}`}>

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
                                className='hidden md:block h-6 w-auto mx-3.5 transition-opacity duration-300 '
                                priority
                            />}
                        </Link>

                        <div className="hidden ml-2 md:flex md:flex-row md:gap-8">
                            <Link
                                href="https://supermemory.ai/blog"
                                target="_blank"
                                className="text-[var(--white)] hover:underline font-medium text-base transition-colors duration-200"
                            >
                                Blog
                            </Link>
                            <Link
                                href="https://docs.supermemory.ai/introduction"
                                target="_blank"
                                className="text-[var(--white)] hover:underline font-medium text-base transition-colors duration-200"
                            >
                                Docs
                            </Link>
                            <Link
                                href="/pricing"
                                className="text-[var(--white)] hover:underline font-medium text-base transition-colors duration-200"
                            >
                                Pricing
                            </Link>
                        </div>
                    </div>

                    <button
                        className="md:hidden flex items-center justify-center p-2 text-[var(--neutral-light)] hover:text-[var(--white)] focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="menu"
                        aria-expanded={isMenuOpen}
                    >
                        <div className="space-y-1.5 ">
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

                    <nav
                        className={`${isMenuOpen ? 'flex' : 'hidden'
                            } w-full md:flex md:w-auto md:items-center md:space-x-6 mt-4 md:mt-0 flex-col md:flex-row`}
                        role="navigation"
                    >
                        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 w-full md:w-auto">
                            <div className="flex justify-center md:justify-start space-x-4">
                                <Link
                                    href="https://github.com/supermemoryai/supermemory"
                                    target="_blank"
                                    className="flex items-center text-[var(--neutral-light)] hover:text-[var(--white)] transition-colors duration-200"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 20 21"
                                        className="mr-1 fill-current"
                                        aria-hidden="true"
                                    >
                                        <path d="M9.99711 0.916996C7.62311 0.917996 5.32711 1.749 3.51911 3.261C1.71811 4.761 0.515107 6.858 0.129107 9.17C-0.250893 11.475 0.216107 13.841 1.44311 15.829C2.68311 17.834 4.59211 19.334 6.83311 20.065C7.33111 20.156 7.51811 19.852 7.51811 19.593C7.51811 19.335 7.50811 18.585 7.50411 17.765C4.72311 18.359 4.13411 16.605 4.13411 16.605C3.68111 15.465 3.02511 15.166 3.02511 15.166C2.11811 14.558 3.09311 14.569 3.09311 14.569C4.09811 14.639 4.62611 15.583 4.62611 15.583C5.51711 17.085 6.96611 16.65 7.53611 16.396C7.62611 15.76 7.88611 15.327 8.17211 15.082C5.95011 14.834 3.61511 13.992 3.61511 10.227C3.60211 9.247 3.97211 8.301 4.64511 7.589C4.54211 7.342 4.19911 6.343 4.74211 4.986C4.74211 4.986 5.58211 4.722 7.49211 5.993C9.13311 5.552 10.8601 5.552 12.5011 5.993C14.4101 4.723 15.2481 4.986 15.2481 4.986C15.7931 6.642 15.4501 7.339 15.3461 7.589C16.4411 8.301 16.8111 9.248 16.7971 10.229C16.7971 14.003 14.4571 14.834 12.2311 15.077C12.5891 15.383 12.9091 15.98 12.9091 16.897C12.9091 18.212 12.8971 19.27 12.8971 19.594C12.8971 19.855 13.0771 20.161 13.5841 20.065C15.8261 19.335 17.7361 17.833 18.9761 15.828C20.2031 13.839 20.6691 11.474 20.2891 9.168C19.9031 6.856 18.6991 4.759 16.8971 3.259C15.0781 1.744 12.7851 0.914996 10.4181 0.916996H9.99711Z" />
                                    </svg>
                                    <span className="font-medium text-[var(--white)] text-xs">9.5K</span>
                                </Link>

                                <Link
                                    href="https://x.com/supermemoryai?lang=en"
                                    target="_blank"
                                    className="flex items-center text-[var(--neutral-light)] hover:text-[var(--white)] transition-colors duration-200"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 16 15"
                                        className="mr-1 fill-current"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M6.019 8.2L0.304 14.723H2.836L7.21 9.717L11.064 14.724L16 14.697L9.742 6.421L15.082 0.304001L12.592 0.276001L8.557 4.873L5.106 0.283001L0 0.278001L6.019 8.2ZM13.011 13.222L11.733 13.217L2.957 1.727H4.33L13.011 13.222Z"
                                        />
                                    </svg>
                                    <span className="font-medium text-[var(--white)] text-xs">4.1k</span>
                                </Link>
                            </div>

                            <Button label="Get supermemory"
                                href="https://console.supermemory.ai/"
                                target="_blank"
                                className="md:w-auto"
                                suplabel='TM'
                            />
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
