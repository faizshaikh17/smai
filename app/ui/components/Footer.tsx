'use client'

import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

export default function Footer() {
    return (
        <footer className="relative bg-black text-white px-6 py-12 overflow-hidden">
            <Image
                src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06593_footer-gradient-top.svg"
                alt=""
                width={1920}
                height={200}
                className="absolute top-0 left-0 w-full"
            />
            <Image
                src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06592_footer-gradient-bottom.svg"
                alt=""
                width={1920}
                height={200}
                className="absolute bottom-0 left-0 w-full"
            />

            <div className="relative z-10 flex flex-col items-center gap-12">
                <Image
                    src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06591_footer-logo.svg"
                    alt="Supermemory"
                    width={200}
                    height={50}
                    className="h-[15rem] w-[90%]"
                />

                <div className="flex flex-wrap justify-center gap-6 md:gap-10 w-full max-w-4xl">
                    <Button
                        label="Get supermemory"
                        href="https://console.supermemory.ai/"
                        target="_blank"
                        className="text-lg md:w-[22rem] w-full"
                        suplabel="TM"
                    />
                    <Button
                        label="Start Building"
                        href="https://docs.supermemory.ai/"
                        target="_blank"
                        className="text-lg md:w-[22rem] w-full"
                        suplabel="DOCS"
                    />
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between w-full border-t border-neutral-700 pt-8 gap-8 text-xs uppercase">
                    <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
                        <div>© 2025 supermemory.ai</div>
                        <Link
                            href="http://tonik.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            made by tonik
                        </Link>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
                        <Link
                            href="https://github.com/supermemoryai/supermemory"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:underline"
                        >
                            <GithubIcon className="w-5 h-5" />
                            9.5K
                        </Link>
                        <Link href="/terms-of-service" target="_blank" className="hover:underline">
                            Terms
                        </Link>
                        <Link href="/privacy-policy" target="_blank" className="hover:underline">
                            Privacy Policy
                        </Link>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-end items-center gap-4">
                        <Link
                            href="https://docs.supermemory.ai/changelog/overview"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            Updates
                        </Link>
                        <Link
                            href="mailto:dhravya@supermemory.com"
                            className="hover:underline"
                        >
                            Contact us
                        </Link>
                        <Link
                            href="https://supermemory.chat/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            Web app
                        </Link>
                        <Link
                            href="https://docs.supermemory.ai/introduction"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            Docs
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}




function GithubIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 21"
            fill="currentColor"
            className={className}
        >
            <path d="M9.99711 0.916996C7.62311 0.917996 5.32711 1.749 3.51911 3.261C1.71811 4.761 0.515107 6.858 0.129107 9.17C-0.250893 11.475 0.216107 13.841 1.44311 15.829C2.68311 17.834 4.59211 19.334 6.83311 20.065C7.33111 20.156 7.51811 19.852 7.51811 19.593C7.51811 19.335 7.50811 18.585 7.50411 17.765C4.72311 18.359 4.13411 16.605 4.13411 16.605C3.68111 15.465 3.02511 15.166 3.02511 15.166C2.11811 14.558 3.09311 14.569 3.09311 14.569C4.09811 14.639 4.62611 15.583 4.62611 15.583C5.51711 17.085 6.96611 16.65 7.53611 16.396C7.62611 15.76 7.88611 15.327 8.17211 15.082C5.95011 14.834 3.61511 13.992 3.61511 10.227C3.60211 9.247 3.97211 8.301 4.64511 7.589C4.54211 7.342 4.19911 6.343 4.74211 4.986C4.74211 4.986 5.58211 4.722 7.49211 5.993C9.13311 5.552 10.8601 5.552 12.5011 5.993C14.4101 4.723 15.2481 4.986 15.2481 4.986C15.7931 6.34 15.4501 7.339 15.3471 7.589C16.0221 8.301 16.3931 9.248 16.3791 10.229C16.3791 14.003 14.0391 14.834 11.8131 15.077C12.1711 15.383 12.4911 15.98 12.4911 16.897C12.4911 18.212 12.4791 19.27 12.4791 19.594C12.4791 19.855 12.6591 20.161 13.1661 20.065C15.4081 19.335 17.3181 17.833 18.5581 15.828C19.7851 13.839 20.2511 11.474 19.8711 9.168C19.4851 6.856 18.2811 4.759 16.4791 3.259C14.6601 1.744 12.3671 0.914996 10.0001 0.916996H9.99711Z" />
        </svg>
    )
}
