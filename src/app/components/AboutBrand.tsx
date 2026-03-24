"use client";

import FadeIn from "./FadeIn";
import Image from "next/image";

export default function AboutBrand() {
    return (
        <section
            id="about"
            className="py-32 relative"
            style={{ background: "var(--surface-color)" }}
        >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFB800]/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-3 mb-5">
                        <span className="h-px w-8" style={{ background: "#FFB800" }} />
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: "#FFB800" }}>
                            About ARENAA
                        </span>
                        <span className="h-px w-8" style={{ background: "#FFB800" }} />
                    </div>
                    <h2
                        className="font-black uppercase text-white leading-tight"
                        style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(32px, 5vw, 60px)" }}
                    >
                        A Lifestyle Destination.
                        <br />
                        <span className="gradient-text italic font-medium">To Eat, Play & Celebrate.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    {/* Left: Content */}
                    <div className="space-y-10">
                        <FadeIn delay={0.2} direction="right" fullWidth>
                            <p className="text-xl leading-relaxed font-bold text-white uppercase tracking-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                ARENAA by CHOWK is a next-generation lifestyle destination where food, entertainment, and social experiences come together in one vibrant space.
                            </p>
                            <div className="space-y-6 mt-8 text-base font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                                <p>
                                    Designed for modern travel corridors and lifestyle hubs, ARENAA offers a dynamic environment where families, travellers, and communities can gather to enjoy great food, engaging entertainment, and memorable experiences.
                                </p>
                                <p>
                                    From gaming zones and social dining spaces to themed restaurants and celebration venues, ARENAA transforms everyday stops into destinations worth visiting.
                                </p>
                            </div>
                        </FadeIn>

                        {/* What Makes ARENAA Unique */}
                        <FadeIn delay={0.4} direction="up" fullWidth>
                            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#FFB800] mb-8">What Makes ARENAA Unique</p>
                            <div className="space-y-6">
                                {[
                                    { label: "Integrated Experiences", desc: "Food, gaming, entertainment, and social spaces designed together." },
                                    { label: "Designed for Modern Travel", desc: "Strategically located across highways and growing cities." },
                                    { label: "A Destination for Everyone", desc: "Families, friends, travellers, and communities." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5 items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFB800] mt-2 shrink-0" />
                                        <div>
                                            <span className="text-sm font-black uppercase tracking-widest text-white block mb-1">{item.label}</span>
                                            <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right: Visual */}
                    <div className="lg:sticky lg:top-32 h-fit">
                        <FadeIn delay={0.6} direction="left" fullWidth>
                            <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] group">
                                <Image
                                    src="/WhatsApp Image 2026-03-18 at 22.14.34.jpeg"
                                    alt="ARENAA Lifestyle Destination"
                                    width={800}
                                    height={1000}
                                    className="w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                <div className="absolute inset-4 border border-white/5 pointer-events-none" />
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Explore ARENAA */}
                <FadeIn delay={0.3} direction="up" fullWidth>
                    <div className="mt-24 pt-16 border-t border-white/5">
                        <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#FFB800] mb-10 text-center">Explore ARENAA</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {["Eat", "Play", "Celebrate", "Experience"].map((item, i) => (
                                <div key={i} className="glass-card p-8 text-center border-white/5 bg-white/[0.02] hover:border-[#FFB800]/30 transition-all group">
                                    <span className="text-2xl font-black uppercase text-white group-hover:text-[#FFB800] transition-colors tracking-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
