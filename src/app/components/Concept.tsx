"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Concept() {
    return (
        <section
            id="concept"
            className="py-48"
            style={{ background: "var(--bg-color)" }}
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-3 mb-5">
                        <span className="h-px w-8" style={{ background: "#FFB800" }} />
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: "#FFB800" }}>
                            The Concept
                        </span>
                        <span className="h-px w-8" style={{ background: "#FFB800" }} />
                    </div>
                    <h2
                        className="font-black uppercase text-white leading-tight"
                        style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "clamp(32px, 5vw, 60px)",
                        }}
                    >
                        Eat • Play •
                        <br />
                        <span className="gradient-text">Celebrate • Experience.</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-20 items-start">
                    {/* Left: Concept Info */}
                    <div className="lg:w-1/2">
                        <FadeIn delay={0.2} direction="right" fullWidth>
                            <h3 className="font-bold uppercase tracking-widest text-[#FFB800] mb-6 text-sm">The ARENAA Concept</h3>
                            <h4
                                className="font-black uppercase leading-[0.9] mb-8"
                                style={{
                                    fontFamily: "Montserrat, sans-serif",
                                    fontSize: "42px",
                                    color: "var(--text-main)",
                                }}
                            >
                                More Than a
                                <br />
                                <span className="text-[#FFB800]">Single Attraction.</span>
                            </h4>
                            <p className="text-sm leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.4)" }}>
                                The ARENAA concept is built around the idea that modern destinations must offer more than a single attraction. Visitors today seek multi-experience environments where they can dine, socialise, play games, celebrate events, and spend quality time with family and friends.
                            </p>

                            {/* Four Pillars */}
                            <div className="flex gap-6 mt-12 mb-10 pt-10 border-t border-white/5">
                                {["Eat", "Play", "Celebrate", "Experience"].map((pillar) => (
                                    <div key={pillar} className="flex-1 text-center">
                                        <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#FFB800]">{pillar}</h5>
                                    </div>
                                ))}
                            </div>

                            <ul className="space-y-3">
                                {[
                                    "Casual and themed dining",
                                    "Interactive gaming and entertainment",
                                    "Celebration spaces for events and gatherings",
                                    "Cultural dining experiences through Govindam"
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#FFB800] flex-shrink-0" />
                                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.5)" }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>
                    </div>

                    {/* Right: Image - STICKY */}
                    <div className="lg:w-1/2 lg:sticky lg:top-32 h-fit">
                        <FadeIn delay={0.4} direction="left" fullWidth>
                            <div className="relative group">
                                <div className="absolute inset-x-0 -bottom-20 h-1 bg-[#FFB800] blur-[120px] opacity-20" />
                                <div className="relative z-10 rounded-sm overflow-hidden border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
                                    <Image
                                        src="/pricing_render.jpg"
                                        alt="ARENAA Concept"
                                        width={800}
                                        height={600}
                                        className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
