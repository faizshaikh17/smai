'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';

const features = [
    {
        number: '01.',
        subtitle: 'Your data grows. Supermemory keeps up',
        title: (
            <>
                Enterprise-Grade <br /> Performance at Any Scale
            </>
        ),
        description:
            "Supermemory is built to handle billions of data points with low-latency retrieval — whether you're indexing documents, video, or structured product data.",
    },
    {
        number: '02.',
        subtitle: 'No heavy lifting. Just smart, connected infrastructure',
        title: (
            <>
                Seamless Integration <br /> Across Teams & Tools
            </>
        ),
        description:
            'Connect directly to your existing stack — from Notion to Google Drive to custom CRMs — with flexible APIs and SDKs that let every team tap into memory instantly.',
    },
    {
        number: '03.',
        subtitle: 'Own your data. Maintain compliance. Stay in control',
        title: (
            <>
                Secure by Design. <br /> Fully Controllable.
            </>
        ),
        description:
            'Deploy Supermemory in the cloud, on-prem, or directly on-device — with full control over where and how your data is stored.',
    },
];

const gridfeatures = [
    {
        title: 'Model-interoperable APIs',
        subtitle: 'Interoperability',
        description:
            'Supermemory works with any LLM provider. So you can keep switching, without lock-in. Switch between models. keep your memory.',
        img: 'https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06565_icon-features-grid_03.png',
    },
    {
        title: 'Sub-400ms latency at scale',
        subtitle: 'Performance',
        description: 'Supermemory is built for speed and scale. We re-imagined RAG to be faster and more efficient.',
        img: 'https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06563_icon-features-grid_02.png',
    },
    {
        title: 'Best in class performance',
        subtitle: 'EFFICIENCY',
        description:
            'Supermemory delivers stronger precision and recall at every benchmark. And it’s ridiculously easy to start.',
        img: 'https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06567_icon-features-grid_05.png',
        chart: 'https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06568_Frame%2020.svg',
    },
    {
        title: 'Works with AI SDK, Langchain, and more',
        subtitle: 'Tooling',
        description:
            'Supermemory works with any LLM provider. So you can keep switching, without lock-in.',
        img: 'https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06564_icon-features-grid_04.png',
    },
    {
        title: 'Deploy in a day, not months',
        subtitle: 'Language Agnostic',
        description:
            'SDKs available for Python and Javascript.',
        img: 'https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06562_icon-features-grid_01.png',
        logos: 'https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06566_Logos.svg',
    },
];

const HomeFeatures = () => {
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(({ isIntersecting, target }) => {
                    const index = itemRefs.current.findIndex((el) => el === target);
                    if (index !== -1) {
                        setVisibleIndexes((prev) => {
                            if (isIntersecting && !prev.includes(index)) {
                                return [...prev, index];
                            } else if (!isIntersecting && prev.includes(index)) {
                                return prev.filter((i) => i !== index);
                            }
                            return prev;
                        });
                    }
                });
            },
            { threshold: 0.6 }
        );

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section className="relative bg-[#efefef] px-4 md:px-8 py-[10rem] overflow-hidden">
                <div className="relative z-10">
                    <div className="text-xs uppercase font-medium text-neutral-600 px-2 tracking-widest">
                        Features • Features • Features
                    </div>
                    <h2 className="mt-12 text-3xl md:text-5xl max-w-xl tracking-tighter font-medium px-2">
                        Build the memory layer your product deserves
                    </h2>
                    <div className="mt-20 flex flex-col gap-6">
                        {features.map((feature, i) => (
                            <div
                                key={feature.number}
                                ref={(el) => {
                                    itemRefs.current[i] = el;
                                }}
                                className={clsx(
                                    'transition-colors duration-700 ease-in-out md:[clip-path:polygon(0%_0%,calc(100%-110px)_0%,100%_110px,100%_100%,0%_100%)]',
                                    visibleIndexes.includes(i)
                                        ? 'bg-gradient-to-r pr-[0.06rem] py-[0.06rem] from-blue-400 via-blue-500 to bg-blue-700'
                                        : 'bg-[#babbbd]/50 p-[0.06rem]'
                                )}
                            >
                                <div className={clsx(
                                    "flex flex-col md:flex-row border gap-8 px-4 md:px-8 py-16 md:py-22 md:[clip-path:polygon(0%_0%,calc(100%-110px)_0%,100%_110px,100%_100%,0%_100%)]",
                                    visibleIndexes.includes(i)
                                        ? 'bg-white border-none'
                                        : 'border-[#babbbd] bg-[#efefef]'
                                )}>
                                    <div className="flex flex-wrap items-center gap-8 flex-1">
                                        <div className={clsx("text-3xl font-medium ",
                                            visibleIndexes.includes(i)
                                                ? 'text-black/80'
                                                : 'text-[#BABBBD]'
                                        )}>
                                            {feature.number}
                                        </div>
                                        <Image
                                            src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b0655e_logo-border.svg"
                                            alt=""
                                            width={64}
                                            height={64}
                                            loading="lazy"
                                            className="size-24 shrink-0"
                                        />
                                        <div className="flex flex-col gap-4">
                                            <div className="text-xs uppercase text-black/80">
                                                {feature.subtitle}
                                            </div>
                                            <h4 className={clsx(
                                                "text-3xl tracking-tighter font-semibold",
                                                visibleIndexes.includes(i)
                                                    ? 'text-black/80'
                                                    : 'text-[#BABBBD]'
                                            )}>
                                                {feature.title}
                                            </h4>
                                        </div>
                                        <p className="text-base max-w-[27.3rem] text-black/80">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Image
                    src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06560_features-grid.svg"
                    alt="features grid"
                    width={1600}
                    height={900}
                    loading="lazy"
                    className="absolute left-0 top-0 w-full opacity-50 -z-0"
                />
            </section>

            <section className="relative border-t border-[#babbbd]/50 bg-[#efefef] px-4 md:px-8 py-[10rem] overflow-hidden">
                <div className="relative flex flex-col md:flex-row justify-between gap-12 md:gap-20">
                    <div>
                        <div className="text-xs uppercase font-medium text-neutral-600 px-2 tracking-widest">
                            Features • Features • Features
                        </div>
                        <h2 className="mt-12 text-4xl md:text-5xl font-semibold tracking-tight text-black px-2">
                            It just clicks <br /> with your stack
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 z-10 sm:grid-cols-2 gap-8">
                        {gridfeatures.map((feature, index) => (
                            <div
                                key={index}
                                className={clsx(
                                    'border border-neutral-200 max-w-[28rem] md:[clip-path:polygon(0%_0%,calc(100%-80px)_0%,100%_100px,100%_100%,0%_100%)] p-12 bg-white flex flex-col items-center text-center md:items-start md:text-left',
                                    index === 2 ? 'sm:col-span-2 md:flex-row md:items-center md:gap-8 max-w-[58rem]' : 'w-full'
                                )}
                            >
                                <div className="flex flex-col gap-4 items-center md:items-start flex-1">
                                    <Image
                                        src={feature.img}
                                        alt={feature.subtitle}
                                        width={72}
                                        height={72}
                                        className="mb-4"
                                    />
                                    <div className="uppercase text-xs text-neutral-500 mb-2">
                                        {feature.subtitle}
                                    </div>
                                    <h4 className="text-3xl max-w-[20rem] font-semibold text-black mb-4">
                                        {feature.title}
                                    </h4>
                                    <p className="text-base max-w-[24rem] text-neutral-600 mb-2">
                                        {feature.description}
                                    </p>
                                    {feature.title.includes('Deploy') && (
                                        <Link
                                            href="https://docs.supermemory.ai/sdks/typescript"
                                            target="_blank"
                                            className="text-blue-600 underline text-sm mt-2"
                                        >
                                            Learn more
                                        </Link>
                                    )}
                                </div>
                                {feature.chart && (
                                    <div className="flex flex-col items-center justify-center flex-1 mt-8 md:mt-0">
                                        <div className="uppercase max-w-[17rem] text-center text-xs text-neutral-500 mb-2">
                                            Comparison of evaluation metrics:{' '}
                                            <span className="text-blue-500">supermemory</span> vs major memory provider
                                        </div>
                                        <Image
                                            src={feature.chart}
                                            alt="chart"
                                            width={600}
                                            height={200}
                                            className="h-[13rem]"
                                        />
                                    </div>
                                )}
                                {feature.logos && (
                                    <div className="mt-4">
                                        <Image
                                            src={feature.logos}
                                            alt="Supported Logos"
                                            width={120}
                                            height={30}
                                            className="mt-2"
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <Image
                    src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06569_big-symbol.svg"
                    alt="features-symbol"
                    width={1200}
                    height={800}
                    className="absolute size-[60rem] right-1/6 -bottom-20 -translate-x-1/2 -z-0"
                />
                <Image
                    src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06560_features-grid.svg"
                    alt="grid-asset"
                    width={1600}
                    height={900}
                    className="absolute left-0 top-0 w-full opacity-40 -z-0"
                />
            </section>
        </>
    );
};

export default HomeFeatures;
