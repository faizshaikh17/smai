'use client';

import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

const Hero: React.FC = () => {
    return (
        <section className="relative py-12 w-full text-white flex flex-col items-center md:items-start md:flex-row md:h-screen md:max-h-[40rem] md:pt-[45px] pt-[80px] overflow-hidden">
            <div className="relative z-20 w-full">
                <div className="relative md:p-1 w-full flex flex-col gap-4 items-start">
                    <Image
                        src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06589_Main%20graphics.svg"
                        alt="Main graphics"
                        width={800}
                        height={600}
                        className="w-full z-10"
                        loading="lazy"
                    />

                    <div className=" z-50 w-full">
                        <p className="text-3xl md:absolute md:top-41 md:m-0 mt-4 max-w-5xl sm:text-4xl md:text-[5rem] font-semibold leading-[100%] tracking-tight text-white">
                            The universal memory API for the AI era
                        </p>
                    </div>

                    <div className="lg:mt-16 mt-8 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-8 w-full max-w-4xl">
                        <div className="w-full md:w-auto flex justify-center md:justify-start">
                            <Button
                                label="Get supermemory"
                                href="https://console.supermemory.ai/"
                                target="_blank"
                                className="text-lg md:w-[18rem] w-full"
                                suplabel="TM"
                            />
                        </div>
                        <div className="text-sm sm:text-base space-y-2 font-medium text-gray-300 md:text-left">
                            <p className='text-base'> Context engine for your app. Personalise LLMs for your users.</p>
                            <div className='flex items-center flex-wrap gap-1'>
                                <p className='text-base'>Built for developers who ship.</p>
                                <Link
                                    href="https://docs.supermemory.ai/introduction"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline"
                                >
                                    Start building with DOCS
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Image
                src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06561_hero-grid.svg"
                alt="Grid asset"
                width={1600}
                height={900}
                className="absolute left-0 top-0 -z-0 w-full object-cover opacity-20"
                loading="lazy"
            />
        </section>
    );
};

export default Hero;
