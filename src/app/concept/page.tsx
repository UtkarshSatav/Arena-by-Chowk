"use client";

import PageHero from "../components/PageHero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
import Image from "next/image";

export default function ConceptPage() {
    return (
        <main className="bg-black min-h-screen">
            <Navbar />
            
            <PageHero 
                title="The Concept"
                subtitle="Eat • Play • Celebrate • Experience"
                image="/gaming_arcade.jpg"
            />

            {/* Problem Statement */}
            <section className="py-24 px-6 border-b border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8">
                            The Challenge
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-black text-white uppercase mb-12">
                            Traditional stops are <span className="text-white/20 italic">Boring.</span>
                        </h3>
                        <p className="text-xl text-white/60 leading-relaxed font-light">
                            For decades, Indian highway stops have been purely functional—quick meals, low engagement, and minimal comfort. We saw the gap between "stopping for a break" and "enjoying a journey."
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ARENAA Solution */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <FadeIn direction="right">
                        <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-white/10 group">
                            <Image 
                                src="/landscape.png" 
                                alt="The ARENAA Solution"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                    </FadeIn>
                    <FadeIn direction="left">
                        <div className="space-y-8">
                            <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800]">
                                Our Solution
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight">
                                A Multi-Experience Hub
                            </h3>
                            <p className="text-lg text-white/50 leading-relaxed">
                                ARENAA redefines the transit ecosystem by integrating premium dining, high-tech gaming, and cultural experiences into a single architectural masterpiece. 
                            </p>
                            <div className="pt-8 grid grid-cols-2 gap-8">
                                {[
                                    { label: "High ROI", val: "23%+" },
                                    { label: "Capex", val: "₹11 Cr" },
                                    { label: "Footfall", val: "High Frequency" },
                                    { label: "Brand", val: "CHOWK" }
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <p className="text-2xl font-black text-[#FFB800]">{stat.val}</p>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Experience Philosophy */}
            <section className="py-32 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8">
                            Philosophy
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-black text-white uppercase">
                            The Four Pillars
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { label: "Eat", desc: "Multi-cuisine excellence and legendary food courts." },
                            { label: "Play", desc: "Arcade gaming, VR, and high-energy fun." },
                            { label: "Celebrate", desc: "Private zones for family and group gatherings." },
                            { label: "Experience", desc: "Immersive culture, branding, and vibe." }
                        ].map((pillar, i) => (
                            <div key={i} className="flex flex-col items-center text-center relative py-12 px-4 overflow-hidden group">
                                {/* Large Background Text - contained within the item */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl md:text-8xl font-black text-white/[0.03] uppercase tracking-tighter select-none pointer-events-none group-hover:text-white/[0.05] transition-colors duration-500">
                                    {pillar.label}
                                </div>
                                <h4 className="relative z-10 text-xl font-bold text-[#FFB800] uppercase mb-4 tracking-wider">
                                    {pillar.label}
                                </h4>
                                <p className="relative z-10 text-white/40 text-[11px] font-bold tracking-[0.2em] leading-relaxed uppercase">
                                    {pillar.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* User Journey Flow */}
            <section className="py-24 bg-black overflow-hidden px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-20 text-center">
                        The User Journey
                    </h2>
                    
                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-[2.5rem] left-[10%] right-[10%] h-px bg-white/10 z-0" />
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12 relative z-10">
                            {[
                                { step: "1", label: "Arrive", desc: "Easy access, premium welcome" },
                                { step: "2", label: "Eat", desc: "Quality dining break" },
                                { step: "3", label: "Play", desc: "Recharge your energy" },
                                { step: "4", label: "Socialize", desc: "Connect with the community" },
                                { step: "5", label: "Celebrate", desc: "Make memories" },
                                { step: "6", label: "Stay", desc: "Enjoy the destination" }
                            ].map((item, i) => (
                                <FadeIn key={i} delay={i * 0.1}>
                                    <div className="flex flex-col items-center text-center group">
                                        <div className="w-20 h-20 rounded-full border border-white/10 bg-black flex items-center justify-center text-[#FFB800] font-black text-2xl mb-8 group-hover:border-[#FFB800] transition-colors duration-500">
                                            {item.step}
                                        </div>
                                        <h4 className="text-lg font-black text-white uppercase mb-2 tracking-tighter">{item.label}</h4>
                                        <p className="text-[9px] uppercase font-bold tracking-widest text-white/30 group-hover:text-white/60 transition-colors">
                                            {item.desc}
                                        </p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
