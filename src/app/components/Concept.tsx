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
                        Not A Pitstop.
                        <br />
                        <span className="gradient-text">A Destination.</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-20 items-start">
                    {/* Left: Highway Model Info */}
                    <div className="lg:w-1/2">
                        <FadeIn delay={0.2} direction="right" fullWidth>
                            <h3 className="font-bold uppercase tracking-widest text-[#FFB800] mb-6 text-sm">ARENAA Highway Model</h3>
                            <h4
                                className="font-black uppercase leading-[0.9] mb-8"
                                style={{
                                    fontFamily: "Montserrat, sans-serif",
                                    fontSize: "42px",
                                    color: "var(--text-main)",
                                }}
                            >
                                Transforming Stops Into
                                <br />
                                <span className="text-[#FFB800]">Vibrant Destinations.</span>
                            </h4>
                            <p className="text-sm leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.4)" }}>
                                The ARENAA Highway Model is designed to transform traditional highway stops into vibrant lifestyle destinations. As India’s highway infrastructure rapidly expands, travelers look for safe, engaging, and comfortable places to stop.
                            </p>
                            
                            {/* Architecture & Design Detail */}
                            <div className="flex gap-10 mt-12 mb-10 pt-10 border-t border-white/5">
                                <div className="flex-1">
                                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#FFB800] mb-3">Strategic Architecture</h5>
                                    <p className="text-[11px] text-white/40 leading-relaxed uppercase font-bold tracking-[0.1em]">
                                        Semi-circular flow, multi-entrance access, high visibility branding.
                                    </p>
                                </div>
                                <div className="flex-1">
                                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#FFB800] mb-3">Iconic Design</h5>
                                    <p className="text-[11px] text-white/40 leading-relaxed uppercase font-bold tracking-[0.1em]">
                                        Designed to be visually iconic and operationally efficient for lifestyle anchors.
                                    </p>
                                </div>
                            </div>

                            {/* Key Stats Grid */}
                            <div className="grid grid-cols-2 gap-px mb-12 border border-white/10 overflow-hidden rounded-sm" style={{ background: "rgba(var(--glass-rgb),0.1)" }}>
                                {[
                                    { label: "Land Area", value: "~50,000 sq. ft" },
                                    { label: "Built-up area", value: "~20,000 sq. ft" },
                                    { label: "Revenue Share", value: "12% - 15%" },
                                    { label: "Annual ROI", value: "~23% Est." },
                                ].map((stat, i) => (
                                    <div key={i} className="p-8 bg-black flex flex-col gap-2 border-r border-b border-white/5">
                                        <p className="text-[9px] font-bold uppercase tracking-widest text-white/20">{stat.label}</p>
                                        <p className="text-2xl font-black text-white">{stat.value}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Capex Details */}
                            <div className="glass-card feature-card p-10 border border-[#FFB800]/20 rounded-sm bg-black/60 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB800]/5 rounded-full blur-3xl group-hover:bg-[#FFB800]/10 transition-colors" />
                                <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6 text-[#FFB800]">Capex Requirement</h5>
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm font-black text-white uppercase tracking-wider">Greenfield Development</span>
                                            <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold">End-to-end execution</span>
                                        </div>
                                        <span className="stat-number text-2xl text-[#FFB800]">₹12 Cr</span>
                                    </div>
                                    <div className="w-full h-px bg-white/5" />
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm font-black text-white uppercase tracking-wider text-opacity-60">Ready Structure Model</span>
                                            <span className="text-[10px] text-white/20 uppercase tracking-widest font-bold">Fit-out & operations only</span>
                                        </div>
                                        <span className="stat-number text-2xl text-white text-opacity-60">₹8 Cr</span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                    
                    {/* Right: Pricing Render Image - STICKY */}
                    <div className="lg:w-1/2 lg:sticky lg:top-32 h-fit">
                        <FadeIn delay={0.4} direction="left" fullWidth>
                            <div className="relative group">
                                <div className="absolute inset-x-0 -bottom-20 h-1 bg-[#FFB800] blur-[120px] opacity-20" />
                                <div className="relative z-10 rounded-sm overflow-hidden border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
                                    <Image
                                        src="/pricing_render.jpg" 
                                        alt="ARENAA Pricing Render"
                                        width={800}
                                        height={600}
                                        className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    {/* HUD Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                                </div>
                                
                                {/* Overlay element */}
                                <div className="absolute -top-6 -right-6 z-20 glass-card p-6 border border-[#FFB800]/40 bg-black/90 shadow-2xl skew-x-1">
                                    <div className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFB800] animate-pulse" />
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#FFB800] mb-1">Status</p>
                                            <p className="text-sm font-black text-white tracking-wider uppercase">Investment Ready</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
