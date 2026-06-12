'use client';

export default function AsSeenIn() {
    return (
        <section className="bg-[#0a0a0a] pt-8 md:pt-10 pb-0">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Mobile: Stack vertically, Desktop: Horizontal */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 lg:gap-20">
                    {/* As Seen In Text */}
                    <h3 className="text-white font-black text-xl md:text-3xl mb-2 md:mb-0">As Seen In</h3>

                    {/* Logos Grid - Mobile: 2 columns, Desktop: Row */}
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-12">
                        {/* Digital Journal */}
                        <img
                            src="/digital-journal.png"
                            alt="Digital Journal"
                            className="h-6 sm:h-8 md:h-10 w-auto invert brightness-200 opacity-80 hover:opacity-100 transition-all"
                        />

                        {/* MarketWatch */}
                        <img
                            src="/marketwatch.png"
                            alt="MarketWatch"
                            className="h-5 sm:h-6 md:h-7 w-auto invert brightness-200 opacity-80 hover:opacity-100 transition-all"
                        />

                        {/* FOX 28 */}
                        <img
                            src="/fox28.png"
                            alt="FOX 28"
                            className="h-5 sm:h-6 md:h-7 w-auto invert brightness-200 opacity-80 hover:opacity-100 transition-all"
                        />

                        {/* FOX 43 */}
                        <img
                            src="/fox43.png"
                            alt="FOX 43"
                            className="h-5 sm:h-6 md:h-7 w-auto invert brightness-200 opacity-80 hover:opacity-100 transition-all"
                        />

                        {/* BENZINGA */}
                        <div className="text-white font-black text-sm md:text-lg tracking-tight">
                            BENZINGA
                        </div>
                    </div>
                </div>

                {/* Horizontal Divider */}
                <div className="mt-8 mb-6 border-t border-white/20"></div>

            </div>
        </section>
    );
}
