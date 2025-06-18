'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from './Button';

const CopyButton = ({ text }: { text: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <button
            type="button"
            onClick={handleCopy}
            className="absolute top-4 right-2 flex items-center gap-2 px-4 text-neutral-400 rounded"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 17"
                fill="none"
            >
                <path
                    d="M13.334 5.83325H6.66732C5.93094 5.83325 5.33398 6.43021 5.33398 7.16659V13.8333C5.33398 14.5696 5.93094 15.1666 6.66732 15.1666H13.334C14.0704 15.1666 14.6673 14.5696 14.6673 13.8333V7.16659C14.6673 6.43021 14.0704 5.83325 13.334 5.83325Z"
                    stroke="currentColor"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M2.66732 11.1666C1.93398 11.1666 1.33398 10.5666 1.33398 9.83325V3.16659C1.33398 2.43325 1.93398 1.83325 2.66732 1.83325H9.33398C10.0673 1.83325 10.6673 2.43325 10.6673 3.16659"
                    stroke="currentColor"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
    );
};

const Footer: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Typescript');

    const tabs = [
        { name: 'Typescript', code: `npm install 'supermemory'` },
        { name: 'Python', code: `pip install 'supermemory'` },
    ];

    return (
        <section className="relative py-[12rem] px-4 md:px-8 w-full flex flex-col items-center overflow-hidden">
            <div className="flex flex-col w-full z-50 items-center mx-auto relative">
                <div className="mb-12 flex flex-col gap-4 items-center">
                    <div className="text-xs uppercase text-neutral-500 font-medium mb-4">
                        solution • solution • solution
                    </div>
                    <p className="text-[clamp(1rem,1.6vw,1.125rem)] leading-[1.5] text-white max-w-[35rem] text-center">
                        We’ve seen what it’s like to build memory infrastructure the hard way — so we built supermemory to make it disappear.
                    </p>
                </div>

                <div className="w-full bg-gradient-to-b from-teal-100 via-blue-500 to-transparent p-2 md:p-4 rounded-[2.5rem] md:rounded-none">
                    <div className="bg-[var(--background)] p-4 sm:p-6 md:p-[clamp(1.5rem,5vw,5rem)] rounded-4xl flex flex-col md:flex-row justify-between items-center gap-[clamp(2rem,4vw,4rem)] md:[clip-path:polygon(0%_0%,calc(100%-80px)_0%,100%_90px,100%_100%,0%_100%)]">
                        <div className="flex flex-col gap-12 max-w-full md:max-w-[50%]">
                            <div className="text-xs uppercase text-neutral-400">
                                product • product • product
                            </div>
                            <h2 className="tracking-tighter text-4xl md:text-5xl font-medium leading-[100%] text-white">
                                Add context to your
                                <br />
                                agentic apps with few
                                <br />
                                lines of code
                            </h2>
                            <p className="text-base leading-[1.5] text-white max-w-[30rem]">
                                Supermemory provides SDKs to make integration as simple as possible
                            </p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-14 w-full md:w-auto">
                            <div className="bg-black/50 p-1 flex rounded-2xl overflow-hidden w-full max-w-[22rem] md:max-w-none">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.name}
                                        type="button"
                                        onClick={() => setActiveTab(tab.name)}
                                        className={`flex-1 px-3 md:px-4 py-2 md:py-3 text-white text-sm md:text-base rounded-xl ${activeTab === tab.name
                                            ? 'bg-[#1C2026] border border-white/5'
                                            : 'hover:bg-neutral-500/5'
                                            }`}
                                    >
                                        {tab.name}
                                    </button>
                                ))}
                            </div>

                            <div className="relative w-full max-w-full sm:max-w-[44rem] px-2">
                                {tabs.map((tab) => (
                                    <div
                                        key={tab.name}
                                        className={activeTab === tab.name ? 'block' : 'hidden'}
                                    >
                                        <div className="relative border w-full border-neutral-600/50 p-1 rounded-[1.1rem] bg-neutral-900 shadow-[inset_0_4px_6px_#242629,inset_0_1px_2px_rgba(255,255,255,0.04),inset_0_3px_2px_rgba(209,213,219,0.1),0_3px_10px_rgba(0,0,0,0.25),0_1px_1px_rgba(255,255,255,0.06)]">
                                            <pre className="p-4 sm:p-6 md:p-8 text-[clamp(0.85rem,1.2vw,1rem)] leading-[1.5] bg-[var(--background)] rounded-xl flex items-start flex-col gap-2 overflow-x-auto">
                                                <code className={`text-wrap text-blue-400 text-2xl language-${tab.name}`}>
                                                    {tab.code}
                                                </code>
                                            </pre>
                                            <CopyButton text={tab.code} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Button
                                label="Start Building"
                                href="https://docs.supermemory.ai/"
                                target="_blank"
                                className="md:text-xl font-normal w-full sm:w-auto md:w-[19rem]"
                                className2="text-[1rem]"
                                suplabel="DOCS"
                                label2=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Image
                src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06561_hero-grid.svg"
                alt="hero grid"
                fill
                className="absolute top-0 left-0 w-full -z-0 h-full object-cover opacity-10"
                priority
            />
            <Image
                src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06560_features-grid.svg"
                alt="features grid"
                fill
                className="absolute bottom-0 left-0 w-full -z-10 h-full object-cover opacity-5"
                priority
            />
        </section>
    );
};

export default Footer;
