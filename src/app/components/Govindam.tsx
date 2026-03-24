"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Govindam() {
    return (
        <section
            id="govindam"
            className="py-48 relative"
            style={{ background: "#0D0D0D" }} // Deep dark background for spiritual feel
        >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFB800] rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFB800] rounded-full blur-[150px] opacity-[0.03] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    {/* Left: Imagery - STICKY */}
                    <div className="lg:sticky lg:top-32 h-fit order-first lg:order-none">
                        <FadeIn delay={0.2} direction="right" fullWidth>
                            <div className="relative">
                                <div className="relative rounded-sm overflow-hidden border border-[#FFB800]/20 shadow-2xl skew-y-1">
                                    <Image
                                        src="/govindam_dining.jpg"
                                        alt="Govindam Cultural Dining"
                                        width={800}
                                        height={600}
                                        className="w-full h-[500px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                </div>
                                
                                {/* Floating dish image - removed */}
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right: Content */}
                    <div className="lg:pl-10">
                        <FadeIn delay={0.4} direction="left" fullWidth>
                            <div className="inline-flex items-center gap-3 mb-6">
                                <span className="h-px w-8" style={{ background: "#FFB800" }} />
                                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#FFB800]">
                                    Govindam • Cultural Dining
                                </span>
                            </div>
                            
                            <h2
                                className="font-black uppercase text-white leading-[0.9] mb-8"
                                style={{
                                    fontFamily: "Montserrat, sans-serif",
                                    fontSize: "clamp(32px, 5vw, 64px)",
                                }}
                            >
                                Where Culture
                                <br />
                                Meets <span className="text-[#FFB800]">Cuisine.</span>
                            </h2>

                            <div className="space-y-8 text-lg font-light leading-relaxed mb-12 text-white/70">
                                <p className="font-bold text-white uppercase tracking-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                    Govindam by CHOWK is a theme-based cultural dining concept inspired by India’s rich spiritual and culinary heritage.
                                </p>
                                <p className="text-base text-white/40 leading-relaxed">
                                    Focused on satvik vegetarian cuisine, Govindam offers a peaceful and culturally immersive dining experience. Every detail, from the temple-inspired architecture to the traditional hospitality, is designed to nourish both the body and soul.
                                </p>
                            </div>

                            {/* Features grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { text: "Temple-Inspired", icon: "auto_awesome", desc: "Spiritual architecture & themes." },
                                    { text: "Satvik Cuisine", icon: "eco", desc: "Pure vegetarian, high-energy food." },
                                    { text: "Peaceful Ambience", icon: "self_improvement", desc: "A break from highway noise." },
                                    { text: "Traditional Hospitality", icon: "volunteer_activism", desc: "The spirit of Atithi Devo Bhava." },
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col gap-3 p-6 glass-card border-white/5 bg-white/[0.02] rounded-sm">
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center border border-[#FFB800]/20 bg-[#FFB800]/5">
                                            <span className="material-symbols-outlined text-[18px] text-[#FFB800]">
                                                {item.icon}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-[11px] font-bold uppercase tracking-widest text-white/70">
                                                {item.text}
                                            </h4>
                                            <p className="text-[9px] text-white/30 uppercase mt-1 font-bold tracking-widest">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
