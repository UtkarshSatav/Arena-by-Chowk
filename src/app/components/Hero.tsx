"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const stats = [
    { label: "Total Capex", value: "₹11 Cr", sub: "Total Investment" },
    { label: "Annual ROI", value: "23%", sub: "Target Returns" },
    { label: "Revenue Share", value: "15%", sub: "To Developer" },
    { label: "Payback Period", value: "4.3 Yrs", sub: "Capital Return" },
];

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{ background: "#070707" }}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.png"
                    alt="ARENAA Highway Leisure Destination"
                    fill
                    priority
                    className="object-cover"
                    style={{ opacity: 0.45 }}
                />
                {/* Gradient overlays */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to right, rgba(7,7,7,0.98) 0%, rgba(7,7,7,0.75) 55%, rgba(7,7,7,0.3) 100%)",
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to top, rgba(7,7,7,1) 0%, transparent 40%)",
                    }}
                />
                {/* Mesh overlay */}
                <div className="absolute inset-0 hero-mesh" />
                {/* Ambient glows */}
                <div
                    className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(255,184,0,0.08) 0%, transparent 70%)",
                        filter: "blur(60px)",
                    }}
                />
                <div
                    className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(0,240,255,0.05) 0%, transparent 70%)",
                        filter: "blur(60px)",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
                {/* Pre-title badge */}
                <div className="flex items-center gap-3 mb-8">
                    <span className="h-px w-10" style={{ background: "#FFB800" }} />
                    <span
                        className="text-xs font-bold tracking-[0.5em] uppercase"
                        style={{ color: "#FFB800" }}
                    >
                        India&apos;s First Highway Leisure Destination
                    </span>
                </div>

                {/* Main heading */}
                <h1
                    className="font-black uppercase leading-[0.88] mb-8 max-w-4xl"
                    style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "clamp(40px, 6vw, 80px)",
                    }}
                >
                    <span className="text-white">Where Every</span>
                    <br />
                    <span className="text-white">Highway</span>
                    <br />
                    <span
                        className="gradient-text inline-block pr-2"
                        style={{ fontStyle: "italic", paddingRight: "0.15em" }}
                    >
                        Stop Becomes
                    </span>
                    <br />
                    <span className="text-white text-[0.85em]">A Destination.</span>
                </h1>

                {/* Tagline */}
                <p
                    className="text-lg font-light mb-10 max-w-xl"
                    style={{ color: "rgba(255,255,255,0.6)", lineHeight: "1.7" }}
                >
                    ARENAA by CHOWK — an integrated Food Court, Game Zone &amp; Leisure Hub
                    built on India&apos;s high-traffic highways. Structured. Scalable. Revenue-Optimized.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 mb-20">
                    <a href="#invest">
                        <button className="btn-primary rounded-sm flex items-center gap-2">
                            <span>Invest With Us</span>
                            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                                trending_up
                            </span>
                        </button>
                    </a>
                    <a href="#concept">
                        <button className="btn-outline rounded-sm flex items-center gap-2">
                            <span>Explore Concept</span>
                            <span className="material-symbols-outlined text-lg">
                                arrow_forward
                            </span>
                        </button>
                    </a>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, i) => (
                        <div key={i} className="hud-border p-5" style={{ background: "rgba(0,0,0,0.5)" }}>
                            <p
                                className="text-[9px] font-bold tracking-[0.25em] uppercase mb-2"
                                style={{ color: "rgba(255,255,255,0.4)" }}
                            >
                                {stat.label}
                            </p>
                            <p
                                className="stat-number text-2xl mb-0.5"
                                style={{ color: "#FFB800" }}
                            >
                                {stat.value}
                            </p>
                            <p className="text-[9px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
                                {stat.sub}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom coordinates */}
            <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-end gap-2 z-10">
                <div className="w-40 h-px relative" style={{ background: "rgba(255,255,255,0.15)" }}>
                    <div
                        className="absolute right-0 -top-1 w-2 h-2"
                        style={{ background: "#FFB800" }}
                    />
                </div>
                <p
                    className="text-[9px] font-mono tracking-widest uppercase"
                    style={{ color: "#FFB800" }}
                >
                    BY CHOWK ENTERTAINMENT PVT. LTD.
                </p>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
                <div
                    className="w-px h-12 relative overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                >
                    <div
                        className="w-full h-1/2 absolute top-0"
                        style={{
                            background: "#FFB800",
                            animation: "scrollDot 1.5s ease-in-out infinite",
                        }}
                    />
                </div>
                <style jsx>{`
          @keyframes scrollDot {
            0% { top: -50%; }
            100% { top: 150%; }
          }
        `}</style>
            </div>
        </section>
    );
}
