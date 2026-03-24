"use client";

import FadeIn from "./FadeIn";
import Image from "next/image";

export default function AboutBrand() {
    return (
        <section
            id="about"
            className="py-48 relative"
            style={{ background: "var(--surface-color)" }}
        >
            {/* HUD/Grid accents */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFB800]/20 to-transparent" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-3 mb-5">
                        <span className="h-px w-8" style={{ background: "#FFB800" }} />
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: "#FFB800" }}>
                            About ARENAA
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
                        A Lifestyle Destination.
                        <br />
                        <span className="gradient-text italic font-medium">To Eat, Play & Celebrate.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    {/* Left: Content */}
                    <div className="space-y-12">
                        <FadeIn delay={0.2} direction="right" fullWidth>
                            <p className="text-xl leading-relaxed mb-10 font-bold text-white uppercase tracking-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                ARENAA by CHOWK is a next-generation lifestyle destination where food, entertainment, and social experiences come together in one vibrant space.
                            </p>
                            <div className="space-y-8 text-base font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                                <p>
                                    Designed for modern travel corridors and lifestyle hubs, ARENAA offers a dynamic environment where families, travellers, and communities can gather to enjoy great food, engaging entertainment, and memorable experiences.
                                </p>
                                <p>
                                    From gaming zones and social dining spaces to themed restaurants and celebration venues, ARENAA transforms everyday stops into destinations worth visiting.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4} direction="up" fullWidth>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { label: "Community Driven", icon: "groups", desc: "Built for local and transit communities." },
                                    { label: "Modern Travel Hub", icon: "route", desc: "Strategically located at key corridors." },
                                    { label: "Family Environments", icon: "family_restroom", desc: "Safe spaces for all age groups." },
                                    { label: "Integrated Design", icon: "grid_view", desc: "Seamless flow between zones." },
                                ].map((item, i) => (
                                    <div key={i} className="glass-card feature-card p-8 flex flex-col gap-4 rounded-sm border border-white/5 bg-white/[0.02]">
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FFB800]/10 border border-[#FFB800]/20">
                                            <span className="material-symbols-outlined text-[18px] text-[#FFB800]">
                                                {item.icon}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-xs font-black uppercase tracking-widest text-[#FFB800]">
                                                {item.label}
                                            </span>
                                            <p className="text-[10px] text-white/30 uppercase mt-2 font-bold tracking-widest leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right: Visual - STICKY */}
                    <div className="lg:sticky lg:top-32 h-fit">
                        <FadeIn delay={0.6} direction="left" fullWidth>
                            <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] group">
                                <Image
                                    src="/WhatsApp Image 2026-03-18 at 22.14.34.jpeg" 
                                    alt="ARENAA Lifestyle Destination Night"
                                    width={800}
                                    height={1000}
                                    className="w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-12 left-12 right-12">
                                    <p className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#FFB800] mb-4">Core Vision</p>
                                    <h3 
                                        className="text-3xl font-black text-white uppercase leading-none" 
                                        style={{ fontFamily: "Montserrat, sans-serif" }}
                                    >
                                        Designed for the
                                        <br />
                                        <span className="gradient-text italic">Modern Traveler</span>
                                    </h3>
                                </div>
                                
                                {/* Frame effect */}
                                <div className="absolute inset-4 border border-white/5 pointer-events-none" />
                            </div>
                            
                            {/* Glow behind sticky image */}
                            <div className="absolute -inset-10 bg-[#FFB800]/5 rounded-full blur-[100px] pointer-events-none -z-10" />
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
