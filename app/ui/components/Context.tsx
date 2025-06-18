'use client';

import Image from 'next/image';

const Context: React.FC = () => {
  return (
    <section className="relative py-2 overflow-hidden">
      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
        }
        .marquee-grid {
          display: inline-flex;
          animation: marquee 5s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-30%);
          }
        }
        .marquee-grid:hover {
          animation-play-state: paused;
        }
        /* Ensure grid responsiveness within marquee */
        .marquee-grid > div {
          flex: 0 0 auto;
        }
      `}</style>

      {/* Foreground Content */}
      <div className="relative z-20  container mx-auto">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Gradient Symbol */}
          <Image
            src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b0658a_gradient-ish-symbol.svg"
            alt="Gradient Symbol"
            width={200}
            height={200}
            className="w-32 h-32 mb-8"
            loading="lazy"
          />

          {/* Headline */}
          <h1 className="text-4xl mt-2 sm:text-5xl md:text-[5.1rem] font-medium text-white leading-[100%] mb-4">
            <p>Context</p>
            <p>is everything</p>
          </h1>

          {/* Subtext */}
          <div className="max-w-2xl mb-12">
            <p className="text-base sm:text-base max-w-[15rem] text-gray-300">
              Without it, even the smartest AI is just an expensive chatbot
            </p>
          </div>
          <Image
            src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06596_HorizontalBorder.png"
            alt="Horizontal Border"
            width={2706}
            height={100}
            className="w-full md:scale-60 h-auto mb-8"
            loading="lazy"
          />
          {/* Pain Points Grid */}
          <div className="w-full">
            <div className="marquee-container w-full">
              <div className="marquee-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Grid Item 1: Vector Database */}
                <div className="p-1 mx-auto border border-neutral-600/50 rounded-[1.1rem] bg-[#1C1F24] shadow-[inset_0_4px_6px_#242629,inset_0_1px_2px_rgba(255,255,255,0.04),inset_0_3px_2px_rgba(209,213,219,0.1),0_3px_10px_rgba(0,0,0,0.25),0_1px_1px_rgba(255,255,255,0.06)]">
                  <div className="px-3 bg-[#21252A] h-full rounded-xl flex items-center py-3 flex-col gap-2 shadow-[0_2px_6px_rgba(0,0,0,0.2),0_-1px_2px_rgba(209,213,219,0.05),inset_0_1px_0_rgba(255,255,255,0.01),0_-2px_3px_rgba(0,0,0,0.12)]">
                    <div className="text-lg font-mono text-white mb-4">$ init vector_database</div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.5 7.76705L0.724432 6.99148L6.82955 0.90625L7.60511 1.68182L1.5 7.76705ZM6.82955 7.76705L0.724432 1.68182L1.5 0.90625L7.60511 6.99148L6.82955 7.76705Z"
                            fill="#FB2C36"
                          />
                        </svg>
                        <span className="text-xs uppercase text-neutral-500">Way too expensive. Time to switch.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.5 7.76705L0.724432 6.99148L6.82955 0.90625L7.60511 1.68182L1.5 7.76705ZM6.82955 7.76705L0.724432 1.68182L1.5 0.90625L7.60511 6.99148L6.82955 7.76705Z"
                            fill="#FB2C36"
                          />
                        </svg>
                        <span className="text-xs uppercase text-neutral-500">Painfully slow. Let’s try another.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.5 7.76705L0.724432 6.99148L6.82955 0.90625L7.60511 1.68182L1.5 7.76705ZM6.82955 7.76705L0.724432 1.68182L1.5 0.90625L7.60511 6.99148L6.82955 7.76705Z"
                            fill="#FB2C36"
                          />
                        </svg>
                        <span className="text-xs uppercase text-neutral-500">Won’t scale. Back to square one.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.5 7.76705L0.724432 6.99148L6.82955 0.90625L7.60511 1.68182L1.5 7.76705ZM6.82955 7.76705L0.724432 1.68182L1.5 0.90625L7.60511 6.99148L6.82955 7.76705Z"
                            fill="#FB2C36"
                          />
                        </svg>
                        <span className="text-xs uppercase text-neutral-500">Maintenance nightmare. Need alternatives.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Grid Item 2: Embedding Model */}
                <div className="p-1 mx-auto border border-neutral-600/50 rounded-[1.1rem] bg-[#1C1F24] shadow-[inset_0_4px_6px_#242629,inset_0_1px_2px_rgba(255,255,255,0.04),inset_0_3px_2px_rgba(209,213,219,0.1),0_3px_10px_rgba(0,0,0,0.25),0_1px_1px_rgba(255,255,255,0.06)]">
                  <div className="px-3 bg-[#21252A] h-full rounded-xl flex items-center py-3 flex-col gap-2 shadow-[0_2px_6px_rgba(0,0,0,0.2),0_-1px_2px_rgba(209,213,219,0.05),inset_0_1px_0_rgba(255,255,255,0.01),0_-2px_3px_rgba(0,0,0,0.12)]">
                    <div className="text-lg font-mono text-white mb-4">$ choose embedding_model</div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M0 12.5L7 0.5L14 12.5H0ZM7 11.1563C7.265 11.1563 7.49041 11.0625 7.67625 10.875C7.86554 10.684 7.96018 10.4549 7.96018 10.1875C7.96018 9.92014 7.86554 9.69271 7.67625 9.50521C7.49041 9.31424 7.265 9.21875 7 9.21875C6.73501 9.21875 6.50787 9.31424 6.31858 9.50521C6.13274 9.69271 6.03982 9.92014 6.03982 10.1875C6.03982 10.4549 6.13274 10.684 6.31858 10.875C6.50787 11.0625 6.73501 11.1563 7 11.1563ZM6.37021 8.04167H7.62979L7.72271 4.5H6.27729L6.37021 8.04167Z"
                            fill="#FFB900"
                          />
                        </svg>
                        <span className="text-xs uppercase text-neutral-500">Which model fits your use case?</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M0 12.5L7 0.5L14 12.5H0ZM7 11.1563C7.265 11.1563 7.49041 11.0625 7.67625 10.875C7.86554 10.684 7.96018 10.4549 7.96018 10.1875C7.96018 9.92014 7.86554 9.69271 7.67625 9.50521C7.49041 9.31424 7.265 9.21875 7 9.21875C6.73501 9.21875 6.50787 9.31424 6.31858 9.50521C6.13274 9.69271 6.03982 9.92014 6.03982 10.1875C6.03982 10.4549 6.13274 10.684 6.31858 10.875C6.50787 11.0625 6.73501 11.1563 7 11.1563ZM6.37021 8.04167H7.62979L7.72271 4.5H6.27729L6.37021 8.04167Z"
                            fill="#FFB900"
                          />
                        </svg>
                        <span className="text-xs uppercase text-neutral-500">Confusing performance tradeoffs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M0 12.5L7 0.5L14 12.5H0ZM7 11.1563C7.265 11.1563 7.49041 11.0625 7.67625 10.875C7.86554 10.684 7.96018 10.4549 7.96018 10.1875C7.96018 9.92014 7.86554 9.69271 7.67625 9.50521C7.49041 9.31424 7.265 9.21875 7 9.21875C6.73501 9.21875 6.50787 9.31424 6.31858 9.50521C6.13274 9.69271 6.03982 9.92014 6.03982 10.1875C6.03982 10.4549 6.13274 10.684 6.31858 10.875C6.50787 11.0625 6.73501 11.1563 7 11.1563ZM6.37021 8.04167H7.62979L7.72271 4.5H6.27729L6.37021 8.04167Z"
                            fill="#FFB900"
                          />
                        </svg>
                        <span className="text-xs uppercase text-neutral-500">Can’t keep up with new releases</span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Grid Item 3: Format Parsing */}
                <div className="p-1 mx-auto border border-neutral-600/50 rounded-[1.1rem] bg-[#1C1F24] shadow-[inset_0_4px_6px_#242629,inset_0_1px_2px_rgba(255,255,255,0.04),inset_0_3px_2px_rgba(209,213,219,0.1),0_3px_10px_rgba(0,0,0,0.25),0_1px_1px_rgba(255,255,255,0.06)]">
                  <div className="px-3 bg-[#21252A] h-full rounded-xl flex items-center py-3 flex-col gap-2 shadow-[0_2px_6px_rgba(0,0,0,0.2),0_-1px_2px_rgba(209,213,219,0.05),inset_0_1px_0_rgba(255,255,255,0.01),0_-2px_3px_rgba(0,0,0,0.12)]">
                    <div className="text-lg font-mono text-white mb-4">$ handle format_parsing</div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.5 7.76705L0.724432 6.99148L6.82955 0.90625L7.60511 1.68182L1.5 7.76705ZM6.82955 7.76705L0.724432 1.68182L1.5 0.90625L7.60511 6.99148L6.82955 7.76705Z"
                            fill="#FB2C36"
                          />
                        </svg>
                        <span className="text-xs uppercase text-neutral-500">Markdown: Tables break everything</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.5 7.76705L0.724432 6.99148L6.82955 0.90625L7.60511 1.68182L1.5 7.76705ZM6.82955 7.76705L0.724432 1.68182L1.5 0.90625L7.60511 6.99148L6.82955 7.76705Z"
                            fill="#FB2C36"
                          />
                        </svg>
                        <span className="text-xs uppercase text-neutral-500">HTML: Scripts and styles interfere</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.5 7.76705L0.724432 6.99148L6.82955 0.90625L7.60511 1.68182L1.5 7.76705ZM6.82955 7.76705L0.724432 1.68182L1.5 0.90625L7.60511 6.99148L6.82955 7.76705Z"
                            fill="#FB2C36"
                          />
                        </svg>
                        <span className="text-xs uppercase text-neutral-500">PDF: Layout ruins extraction</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.5 7.76705L0.724432 6.99148L6.82955 0.90625L7.60511 1.68182L1.5 7.76705ZM6.82955 7.76705L0.724432 1.68182L1.5 0.90625L7.60511 6.99148L6.82955 7.76705Z"
                            fill="#FB2C36"
                          />
                        </svg>
                        <span className="text-xs uppercase text-neutral-500">Word docs: Unpredictable formatting</span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Grid Item 4: Scaling Costs */}
                <div className="p-1 mx-auto border border-neutral-600/50 rounded-[1.1rem] bg-[#1C1F24] shadow-[inset_0_4px_6px_#242629,inset_0_1px_2px_rgba(255,255,255,0.04),inset_0_3px_2px_rgba(209,213,219,0.1),0_3px_10px_rgba(0,0,0,0.25),0_1px_1px_rgba(255,255,255,0.06)]">
                  <div className="px-3 bg-[#21252A] h-full rounded-xl flex items-center py-3 flex-col gap-2 shadow-[0_2px_6px_rgba(0,0,0,0.2),0_-1px_2px_rgba(209,213,219,0.05),inset_0_1px_0_rgba(255,255,255,0.01),0_-2px_3px_rgba(0,0,0,0.12)]">
                    <div className="text-lg font-mono text-white mb-4">$ calculate scaling_costs</div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M0 12.5L7 0.5L14 12.5H0ZM7 11.1563C7.265 11.1563 7.49041 11.0625 7.67625 10.875C7.86554 10.684 7.96018 10.4549 7.96018 10.1875C7.96018 9.92014 7.86554 9.69271 7.67625 9.50521C7.49041 9.31424 7.265 9.21875 7 9.21875C6.73501 9.21875 6.50787 9.31424 6.31858 9.50521C6.13274 9.69271 6.03982 9.92014 6.03982 10.1875C6.03982 10.4549 6.13274 10.684 6.31858 10.875C6.50787 11.0625 6.73501 11.1563 7 11.1563ZM6.37021 8.04167H7.62979L7.72271 4.5H6.27729L6.37021 8.04167Z"
                            fill="#FFB900"
                          />
                        </svg>
                        <span className="text-xs uppercase text-neutral-500">Costs explode at production scale</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M0 12.5L7 0.5L14 12.5H0ZM7 11.1563C7.265 11.1563 7.49041 11.0625 7.67625 10.875C7.86554 10.684 7.96018 10.4549 7.96018 10.1875C7.96018 9.92014 7.86554 9.69271 7.67625 9.50521C7.49041 9.31424 7.265 9.21875 7 9.21875C6.73501 9.21875 6.50787 9.31424 6.31858 9.50521C6.13274 9.69271 6.03982 9.92014 6.03982 10.1875C6.03982 10.4549 6.13274 10.684 6.31858 10.875C6.50787 11.0625 6.73501 11.1563 7 11.1563ZM6.37021 8.04167H7.62979L7.72271 4.5H6.27729L6.37021 8.04167Z"
                            fill="#FFB900"
                          />
                        </svg>
                        <span className="text-xs uppercase text-neutral-500">Performance degrades as data grows</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M0 12.5L7 0.5L14 12.5H0ZM7 11.1563C7.265 11.1563 7.49041 11.0625 7.67625 10.875C7.86554 10.684 7.96018 10.4549 7.96018 10.1875C7.96018 9.92014 7.86554 9.69271 7.67625 9.50521C7.49041 9.31424 7.265 9.21875 7 9.21875C6.73501 9.21875 6.50787 9.31424 6.31858 9.50521C6.13274 9.69271 6.03982 9.92014 6.03982 10.1875C6.03982 10.4549 6.13274 10.684 6.31858 10.875C6.50787 11.0625 6.73501 11.1563 7 11.1563ZM6.37021 8.04167H7.62979L7.72271 4.5H6.27729L6.37021 8.04167Z"
                            fill="#FFB900"
                          />
                        </svg>
                        <span className="text-xs uppercase text-neutral-500">Engineering hours pile up fast</span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Grid Item 5: Connection Sync */}
                <div className="p-1 mx-auto border border-neutral-600/50 rounded-[1.1rem] bg-[#1C1F24] shadow-[inset_0_4px_6px_#242629,inset_0_1px_2px_rgba(255,255,255,0.04),inset_0_3px_2px_rgba(209,213,219,0.1),0_3px_10px_rgba(0,0,0,0.25),0_1px_1px_rgba(255,255,255,0.06)]">
                  <div className="px-3 bg-[#21252A] h-full rounded-xl flex items-center py-3 flex-col gap-2 shadow-[0_2px_6px_rgba(0,0,0,0.2),0_-1px_2px_rgba(209,213,219,0.05),inset_0_1px_0_rgba(255,255,255,0.01),0_-2px_3px_rgba(0,0,0,0.12)]">
                    <div className="text-lg font-mono text-white mb-4">$ setup connection_sync</div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.5 7.76705L0.724432 6.99148L6.82955 0.90625L7.60511 1.68182L1.5 7.76705ZM6.82955 7.76705L0.724432 1.68182L1.5 0.90625L7.60511 6.99148L6.82955 7.76705Z"
                            fill="#FB2C36"
                          />
                        </svg>
                        <span className="text-xs uppercase text-neutral-500">Sync failures between data sources</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.5 7.76705L0.724432 6.99148L6.82955 0.90625L7.60511 1.68182L1.5 7.76705ZM6.82955 7.76705L0.724432 1.68182L1.5 0.90625L7.60511 6.99148L6.82955 7.76705Z"
                            fill="#FB2C36"
                          />
                        </svg>
                        <span className="text-xs uppercase text-neutral-500">API rate limits during large syncs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.5 7.76705L0.724432 6.99148L6.82955 0.90625L7.60511 1.68182L1.5 7.76705ZM6.82955 7.76705L0.724432 1.68182L1.5 0.90625L7.60511 6.99148L6.82955 7.76705Z"
                            fill="#FB2C36"
                          />
                        </svg>
                        <span className="text-xs uppercase text-neutral-500">Images: Need vision models now?</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.5 7.76705L0.724432 6.99148L6.82955 0.90625L7.60511 1.68182L1.5 7.76705ZM6.82955 7.76705L0.724432 1.68182L1.5 0.90625L7.60511 6.99148L6.82955 7.76705Z"
                            fill="#FB2C36"
                          />
                        </svg>
                        <span className="text-xs uppercase text-neutral-500">Audio/Video: Transcription costs soar</span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Grid Item 6: Multimodal Support */}
                <div className="p-1 mx-auto border border-neutral-600/50 rounded-[1.1rem] bg-[#1C1F24] shadow-[inset_0_4px_6px_#242629,inset_0_1px_2px_rgba(255,255,255,0.04),inset_0_3px_2px_rgba(209,213,219,0.1),0_3px_10px_rgba(0,0,0,0.25),0_1px_1px_rgba(255,255,255,0.06)]">
                  <div className="px-3 bg-[#21252A] h-full rounded-xl flex items-center flex-col py-3 gap-2 shadow-[0_2px_6px_rgba(0,0,0,0.2),0_-1px_2px_rgba(209,213,219,0.05),inset_0_1px_0_rgba(255,255,255,0.01),0_-2px_3px_rgba(0,0,0,0.12)]">
                    <div className="text-lg font-mono text-white mb-4">$ init multimodal_support</div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.5 7.76705L0.724432 6.99148L6.82955 0.90625L7.60511 1.68182L1.5 7.76705ZM6.82955 7.76705L0.724432 1.68182L1.5 0.90625L7.60511 6.99148L6.82955 7.76705Z"
                            fill="#FB2C36"
                          />
                        </svg>
                        <span className="text-xs uppercase text-neutral-500">Websites: JS & rate limits are messy</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.5 7.76705L0.724432 6.99148L6.82955 0.90625L7.60511 1.68182L1.5 7.76705ZM6.82955 7.76705L0.724432 1.68182L1.5 0.90625L7.60511 6.99148L6.82955 7.76705Z"
                            fill="#FB2C36"
                          />
                        </svg>
                        <span className="text-xs uppercase text-neutral-500">PDFs: OCR fails, extraction inconsistent</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.5 7.76705L0.724432 6.99148L6.82955 0.90625L7.60511 1.68182L1.5 7.76705ZM6.82955 7.76705L0.724432 1.68182L1.5 0.90625L7.60511 6.99148L6.82955 7.76705Z"
                            fill="#FB2C36"
                          />
                        </svg>
                        <span className="text-xs uppercase text-neutral-500">Authentication tokens expire constantly</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Grid */}
      <Image
        src="https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826235ef861ed9464b06561_hero-grid.svg"
        alt="Grid Asset"
        width={1600}
        height={900}
        className="absolute left-0 top-0 -z-0 w-full h-full object-cover opacity-20"
        loading="lazy"
      />
    </section>
  );
};

export default Context;