'use client';

import ScrollAnimate from './ScrollAnimate';

export default function GetStarted({ openPopup }: { openPopup: () => void }) {
    return (
        <section className="py-16 md:py-24" style={{ background: 'linear-gradient(135deg, #B4348C 0%, #0a0a0a 60%, #0a0a0a 100%)' }}>
            <div className="max-w-4xl mx-auto px-4 md:px-6">
                {/* Section Header */}
                <ScrollAnimate>
                    <div className="text-center mb-12">
                        <h2
                            className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4"
                            style={{ fontFamily: '"Clash Display", sans-serif', fontStyle: 'italic', fontWeight: 900 }}
                        >
                            <em>Get Started With Quantum Algo</em>
                        </h2>
                        <p className="text-[#A60D60] font-bold text-xl">
                            Here's What Happens After You Apply:
                        </p>
                    </div>
                </ScrollAnimate>

                {/* Steps */}
                <div className="space-y-6 max-w-2xl mx-auto">
                    <ScrollAnimate delay={100}>
                        <div className="flex items-start gap-4 bg-[#1a1a1a] border border-white/10 rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-[#A60D60] rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white font-black text-xl">1</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">Application Review</h3>
                                <p className="text-gray-400 font-semibold">Your application is reviewed to ensure you're the right fit</p>
                            </div>
                        </div>
                    </ScrollAnimate>

                    <ScrollAnimate delay={150}>
                        <div className="flex items-start gap-4 bg-[#1a1a1a] border border-white/10 rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-[#A60D60] rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white font-black text-xl">2</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">Onboarding Access</h3>
                                <p className="text-gray-400 font-semibold">If approved, you receive onboarding access</p>
                            </div>
                        </div>
                    </ScrollAnimate>

                    <ScrollAnimate delay={200}>
                        <div className="flex items-start gap-4 bg-[#1a1a1a] border border-white/10 rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-[#A60D60] rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white font-black text-xl">3</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">Portfolio Setup</h3>
                                <p className="text-gray-400 font-semibold">Our team sets up your portfolio + strategy suite</p>
                            </div>
                        </div>
                    </ScrollAnimate>

                    <ScrollAnimate delay={250}>
                        <div className="flex items-start gap-4 bg-[#1a1a1a] border border-white/10 rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-[#A60D60] rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white font-black text-xl">4</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">Start Trading</h3>
                                <p className="text-gray-400 font-semibold">You start trading with automated AI execution</p>
                            </div>
                        </div>
                    </ScrollAnimate>

                    <ScrollAnimate delay={300}>
                        <div className="flex items-start gap-4 bg-[#1a1a1a] border border-white/10 rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 bg-[#A60D60] rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white font-black text-xl">5</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">Withdraw & Scale</h3>
                                <p className="text-gray-400 font-semibold">Withdraw, scale, or expand based on performance</p>
                            </div>
                        </div>
                    </ScrollAnimate>
                </div>

                {/* Bottom Note */}
                <ScrollAnimate delay={350}>
                    <div className="text-center mt-10">
                        <p className="text-gray-300 font-bold text-lg">
                            Most approved traders are fully operational in under 48 hours.
                        </p>
                    </div>
                </ScrollAnimate>

                {/* CTA */}
                <ScrollAnimate delay={400}>
                    <div className="text-center mt-8">
                        <button
                            onClick={openPopup}
                            className="inline-block bg-[#A60D60] hover:bg-[#A60D60]/90 text-white font-black py-4 px-16 rounded-full text-lg uppercase tracking-wide transition-all hover:shadow-[0_0_30px_rgba(166,13,96,0.4)] cursor-pointer"
                        >
                            Apply Now
                        </button>
                        <p className="text-sky-400 font-bold text-sm mt-4">
                            HURRY! Only 4 onboarding slots left until December 2026.
                        </p>
                    </div>
                </ScrollAnimate>
            </div>
        </section>
    );
}
