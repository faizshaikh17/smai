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
                                label2={
                                    <div className="flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            className="lucide lucide-command h-4.5 w-4.5 text-white">
                                            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
                                        </svg>

                                        <svg width="2em" height="2em" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            className="mt-1.5 h-4.5 w-4.5 fill-white" viewBox="0 0 16 16">
                                            <path d="M4.26465 11.0684C4.08008 11.0684 3.88184 10.9863 3.73828 10.8428L0.744141 7.90332C0.600586 7.75977 0.518555 7.55469 0.518555 7.35645C0.518555 7.1582 0.600586 6.95312 0.744141 6.81641L3.73828 3.87695C3.88184 3.7334 4.08008 3.64453 4.26465 3.64453C4.69531 3.64453 4.97559 3.94531 4.97559 4.35547C4.97559 4.57422 4.89355 4.73145 4.75684 4.86816L3.59473 5.98926L2.74707 6.68652L3.9707 6.625H10.335C10.8408 6.625 11.0391 6.42676 11.0391 5.9209V2.89941C11.0391 2.38672 10.8408 2.18848 10.335 2.18848H7.5459C7.11523 2.18848 6.80078 1.86035 6.80078 1.45703C6.80078 1.05371 7.11523 0.725586 7.5459 0.725586H10.3828C11.8594 0.725586 12.4814 1.34766 12.4814 2.82422V5.98926C12.4814 7.44531 11.8594 8.08789 10.3828 8.08789H3.9707L2.74707 8.0332L3.59473 8.72363L4.75684 9.85156C4.89355 9.98145 4.97559 10.1455 4.97559 10.3643C4.97559 10.7744 4.69531 11.0684 4.26465 11.0684Z"></path>
                                        </svg>
                                    </div>

                                }
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
