'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

const CodeBlock = ({ code, language }: { code: string; language: string }) => (
    <div className="p-1 mx-auto border border-neutral-600/50 rounded-[1.1rem] bg-neutral-900 shadow-[inset_0_4px_6px_#242629,inset_0_1px_2px_rgba(255,255,255,0.04),inset_0_3px_2px_rgba(209,213,219,0.1),0_3px_10px_rgba(0,0,0,0.25),0_1px_1px_rgba(255,255,255,0.06)]">
        <pre className="p-4 sm:p-6 md:p-8 text-[clamp(0.85rem,1.2vw,1rem)] leading-[1.5] max-w-[44rem] bg-[var(--background)] rounded-xl flex items-center flex-col gap-2 shadow-[0_2px_6px_rgba(0,0,0,0.2),0_-1px_2px_rgba(209,213,219,0.05),inset_0_1px_0_rgba(255,255,255,0.01),0_-2px_3px_rgba(0,0,0,0.12)]">
            <code className={`text-wrap language-${language}`}>{code}</code>
        </pre>
    </div>
);

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
            className="flex absolute text-neutral-400 top-2 right-2 items-center gap-2 px-4 rounded"
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

const SolutionsSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Connect apps');

    const tabs = [
        {
            name: 'Add memories',
            code: `const response = await fetch('https://api.supermemory.ai/v3/memories', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer sm_xxx'
  },
  body: JSON.stringify({
    content: 'You can add text',
    metadata: {
      user_id: '123'
    }
  }),
})

const data = await response.json()`,
        },
        {
            name: 'Search memories',
            code: `const response = await fetch('https://api.supermemory.ai/v3/memories', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer sm_xxx',
  },
  body: JSON.stringify({
    q: "What's my name?"
  })
})

const data = await response.json()`,
        },
        {
            name: 'Connect apps',
            code: `const response = await fetch('https://api.supermemory.ai/v3/connections/onedrive', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer sm_xxx',
  }
});

const data = await response.json();`,
        },
    ];

    return (
        <section className="relative py-[12rem] w-full flex flex-col items-center overflow-hidden">
            <div className="flex flex-col w-full z-50 items-center mx-auto relative">
                <div className="mb-12 flex flex-col gap-4 items-center">
                    <div className="text-xs uppercase text-neutral-500 font-medium mb-4">
                        solution • solution • solution
                    </div>
                    <p className="text-[clamp(1rem,1.6vw,1.125rem)] leading-[1.5] text-white max-w-[35rem] text-center">
                        We’ve seen what it’s like to build memory infrastructure the hard way — so we built supermemory to make it disappear.
                    </p>
                </div>

                <div className="bg-gradient-to-b w-full md:p-4 p-2 rounded-[2.5rem] md:rounded-none from-teal-100 via-blue-500 to-transparent">
                    <div className="bg-[var(--background)] p-4 sm:p-6 md:p-[clamp(1.5rem,5vw,5rem)] rounded-4xl flex flex-col md:flex-row justify-between items-center gap-[clamp(2rem,4vw,4rem)] md:[clip-path:polygon(0%_0%,calc(100%-80px)_0%,100%_90px,100%_100%,0%_100%)]">
                        <div className="flex flex-col gap-8">
                            <div className="text-xs uppercase text-neutral-400 font-medium mb-4">
                                product • product • product
                            </div>
                            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] text-white">
                                Edit one line.
                                <br />
                                Get longer threads,
                                <br />
                                cost savings
                                <br />
                                memory.
                            </h2>
                            <p className="text-[clamp(1rem,1.6vw,1.125rem)] leading-[1.5] text-white max-w-[30rem]">
                                Just add{' '}
                                <Link
                                    href="http://api.supermemory.ai/v3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent"
                                >
                                    api.supermemory.ai/v3
                                </Link>{' '}
                                to your OpenAI base URL — and get automatic long-term context across conversations.
                            </p>
                        </div>
                        <div className="rounded flex flex-col justify-center items-center gap-14 w-full md:w-auto">
                            <div className="relative w-full max-w-[44rem]">
                                <CodeBlock
                                    code={`import OpenAI from "openai"

const client = new OpenAI({  
  baseUrl: "https://api.supermemory.ai/v3/https://api.openai.com/v1/"
})`}
                                    language="javascript"
                                />
                                <CopyButton
                                    text={`import OpenAI from "openai"

const client = new OpenAI({
  baseUrl: "https://api.supermemory.ai/v3/https://api.openai.com/v1/"
})`}
                                />
                            </div>
                            <Button
                                label="Start Building"
                                href="https://docs.supermemory.ai/"
                                target="_blank"
                                className="md:text-xl font-normal md:w-[19rem]"
                                className2="text-[1rem]"
                                suplabel="DOCS"
                                label2=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            <section className="relative pt-[12rem] w-full flex flex-col items-center overflow-hidden">
                <div className="mx-auto px-4 flex flex-col w-full gap-12 items-center relative z-10">
                    <div className="mb-12 flex flex-col items-center">
                        <div className="text-xs uppercase text-gray-400 mb-4">
                            FEATURES • FEATURES • FEATURES
                        </div>
                        <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-[1.2] text-white text-center md:text-left max-w-[50rem]">
                            Unlock the Full Potential of Your Data
                        </h2>
                    </div>

                    <div className="flex w-full max-w-5xl flex-col">
                        <div className="flex bg-white flex-col rounded-xl py-2">
                            <div className="flex py-2 px-4 sm:px-6 flex-wrap border-b border-neutral-600/30">
                                <div className="bg-neutral-300 p-1 relative flex rounded-2xl overflow-hidden">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.name}
                                            type="button"
                                            onClick={() => setActiveTab(tab.name)}
                                            className={`md:px-4 md:py-3 text-sm md:text-base rounded-xl ${activeTab === tab.name
                                                ? 'bg-neutral-700 text-white'
                                                : 'text-gray-800 hover:bg-neutral-200'
                                                }`}
                                        >
                                            {tab.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {tabs.map((tab) => (
                                <div
                                    key={tab.name}
                                    className={activeTab === tab.name ? 'block' : 'hidden'}
                                >
                                    <div className="relative">
                                        <pre className="p-4 sm:p-6 text-[clamp(0.85rem,1.2vw,1rem)] leading-[1.5] max-w-[44rem] flex items-center flex-col gap-2">
                                            <code className="text-wrap text-neutral-600 language-javascript">
                                                {tab.code}
                                            </code>
                                        </pre>
                                        <CopyButton text={tab.code} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

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
                className="absolute bottom-0 left-0 w-full -z-0 h-full object-cover opacity-10"
                priority
            />
        </section>
    );
};

export default SolutionsSection;
