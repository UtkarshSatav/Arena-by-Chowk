"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden pt-20"
            style={{ background: "var(--bg-color)" }}
        >
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/WhatsApp Image 2026-03-18 at 22.14.34.jpeg"
                    alt="ARENAA Highway Leisure Destination"
                    fill
                    priority
                    className="object-cover"
                />
                
                {/* Gradient overlays - ADJUSTED to be darker on the left to pop text */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.2) 65%, transparent 100%)",
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 40%)",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 w-full">
                <div className="max-w-3xl">
                    <FadeIn delay={0.2} direction="down">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-10" style={{ background: "#FFB800" }} />
                            <span
                                className="text-[10px] font-bold tracking-[0.6em] uppercase"
                                style={{ color: "#FFB800" }}
                            >
                                Eat • Play • Celebrate
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4} direction="up">
                        <h1
                            className="font-black uppercase leading-[0.9] mb-8"
                            style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: "clamp(36px, 5vw, 72px)",
                            }}
                        >
                            <span className="text-white block">ARENAA</span>
                            <span className="text-[#FFB800] block text-[0.4em] tracking-[0.2em] mt-2">by CHOWK</span>
                            <span className="gradient-text mt-4 block">Next-Gen Leisure Destination.</span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.6} direction="up">
                        <p className="max-w-xl text-base lg:text-lg font-medium leading-relaxed mb-12 text-white/50">
                            Transforming highway stops into vibrant lifestyle hubs where families and travelers gather to celebrate.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.8} direction="up">
                        <div className="flex flex-wrap gap-6">
                            <a href="#about">
                                <button className="btn-primary rounded-sm flex items-center gap-3 px-10 py-5 text-xs font-black uppercase tracking-[0.2em]">
                                    <span>Discover ARENAA</span>
                                    <span className="material-symbols-outlined text-base">
                                        arrow_forward
                                    </span>
                                </button>
                            </a>
                            <a href="#experience">
                                <button className="btn-outline rounded-sm px-10 py-5 text-xs font-black uppercase tracking-[0.2em]">
                                    <span>Explore</span>
                                </button>
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-12 hidden md:flex flex-col items-center gap-4 z-10">
                <div
                    className="w-px h-16 relative overflow-hidden bg-white/10"
                >
                    <div
                        className="absolute top-0 left-0 w-full h-1/2 bg-[#FFB800] animate-scroll-indicator"
                    />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] origin-left rotate-90 translate-y-8 translate-x-1" style={{ color: "rgba(255,255,255,0.2)" }}>
                    Scroll
                </span>
            </div>
        </section>
    );
}
