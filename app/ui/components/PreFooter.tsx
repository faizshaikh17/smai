'use client';

import Image from 'next/image';
import NumberSvg from '@/app/Data/NumberSvg';

const PreFooter: React.FC = () => (
    <section className="relative py-12 md:py-16">
        <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center gap-12 text-center">
                <h1 className="text-3xl md:text-4xl text-white font-semibold max-w-xl">
                    Trusted by Open Source, enterprise, and more than
                </h1>
                <div className="w-[55%] max-w-xs md:max-w-3xl">
                    <NumberSvg />
                </div>
                <h1 className="text-3xl md:text-4xl text-white font-semibold">of you</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 items-center lg:grid-cols-5 gap-8 md:gap-6 mt-8 w-full max-w-6xl">
                    <div className="flex flex-col items-center gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            viewBox="0 0 64 63"
                            fill="none"
                            className="w-16 h-16 text-white"
                        >
                            <g clipPath="url(#product-hunt-clip)">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M32 56C18.469 56 7.5 45.031 7.5 31.5C7.5 17.969 18.469 7 32 7C45.531 7 56.5 17.969 56.5 31.5C56.5 45.031 45.531 56 32 56ZM0.5 31.5C0.5 14.103 14.603 0 32 0C49.3971 0 63.5 14.103 63.5 31.5C63.5 48.8971 49.3971 63 32 63C14.603 63 0.5 48.8971 0.5 31.5ZM21.5 45.5V17.5H35.5C41.2992 17.5 46 22.201 46 28C46 33.7992 41.2992 38.5 35.5 38.5H28.5V45.5H21.5ZM39 28C39 29.933 37.433 31.5 35.5 31.5H28.5V24.5H35.5C37.433 24.5 39 26.067 39 28Z"
                                    fill="currentColor"
                                />
                            </g>
                            <defs>
                                <clipPath id="product-hunt-clip">
                                    <rect width="63" height="63" transform="translate(0.5)" fill="currentColor" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="text-xs text-white font-bold uppercase">
                            #1 Product of the Day at <br /> Product Hunt
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            viewBox="0 0 64 64"
                            fill="none"
                            className="w-16 h-16"
                        >
                            <rect width="64" height="64" fill="#1C2026" />
                            <path
                                d="M32.0656 0.524658C14.2951 0.524658 0 14.9509 0 32.787C0 47.082 9.18033 59.1476 21.9016 63.4099C23.4754 63.7378 24.0656 62.6886 24.0656 61.8361C24.0656 61.1148 24 58.4919 24 55.8689C15.082 57.7706 13.2459 52.0001 13.2459 52.0001C11.8033 48.2624 9.70492 47.2788 9.70492 47.2788C6.81967 45.3115 9.90164 45.3115 9.90164 45.3115C13.1148 45.5083 14.8197 48.6558 14.8197 48.6558C17.7049 53.5738 22.2951 52.1968 24.1311 51.3443C24.3934 49.246 25.2459 47.8033 26.1639 47.0165C19.082 46.2952 11.6066 43.4755 11.6066 31.082C11.6066 27.5411 12.8525 24.6558 14.8852 22.4263C14.5574 21.6394 13.4426 18.2951 15.2131 13.9017C15.2131 13.9017 17.9016 13.0492 24 17.246C26.5574 16.5247 29.3115 16.1968 32 16.1968C34.6885 16.1968 37.4426 16.5902 40 17.246C46.0984 13.0492 48.7869 13.9017 48.7869 13.9017C50.5574 18.3607 49.4426 21.6394 49.1148 22.4263C51.2131 24.6558 52.3934 27.5411 52.3934 31.082C52.3934 43.4755 44.918 46.2296 37.7705 47.0165C38.9508 48.0001 39.9344 49.9673 39.9344 52.9837C39.9344 57.3115 39.8689 60.787 39.8689 61.8361C39.8689 62.6886 40.459 63.7378 42.0328 63.4099C54.8197 59.1476 64 47.082 64 32.787C64.0656 14.9509 49.7049 0.524658 32.0656 0.524658Z"
                                fill="white"
                            />
                        </svg>
                        <p className="text-xs text-white font-bold uppercase">
                            Starred by over 9,000 <br /> users on GitHub
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <Image
                            src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06543_Flow%20logo.png"
                            alt="Flow logo"
                            width={64}
                            height={64}
                            className="w-16 h-16"
                        />
                        <p className="text-xs text-white font-bold uppercase">
                            Flow uses <br /> Supermemory to build <br /> the cursor for writing
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <Image
                            src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06544_medtech%20vendors%20logo.png"
                            alt="Medtech Vendors logo"
                            width={120}
                            height={32}
                            className="w-30 h-8"
                        />
                        <p className="text-xs text-white font-bold uppercase">
                            Medtech Vendors uses <br /> Supermemory to search <br /> through 500k vendors
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <Image
                            src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06542_mixus-logo-primary-horizontal-black%201.png"
                            alt="Mixus logo"
                            width={122}
                            height={38}
                            className="w-[122px] h-[38px]"
                        />
                        <p className="text-xs text-white font-bold uppercase">
                            Mixus uses <br /> Supermemory to power <br /> co-intelligence Agentic <br /> platform
                        </p>
                    </div>
                </div>
            </div>

            <Image
                src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06561_hero-grid.svg"
                alt="Background grid"
                className="absolute left-0 top-0 w-full opacity-20 -z-0"
                width={1200}
                height={600}
            />
        </div>
    </section>
);

export default PreFooter;
