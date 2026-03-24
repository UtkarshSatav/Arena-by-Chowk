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
                            A New Kind of Social Destination
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-black text-white uppercase mb-12">
                            More Than a <span className="text-white/20 italic">Single Attraction.</span>
                        </h3>
                        <p className="text-xl text-white/60 leading-relaxed font-light">
                            Visitors today seek multi-experience environments where they can dine, socialise, play games, celebrate events, and spend quality time with family and friends. ARENAA integrates these experiences into one vibrant destination.
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
                                What Visitors Can Enjoy
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight">
                                One Destination, Many Experiences
                            </h3>
                            <p className="text-lg text-white/50 leading-relaxed">
                                Traditional highway stops or standalone restaurants often offer limited engagement. ARENAA reimagines these spaces by combining entertainment, dining, and cultural experiences in one environment.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {[
                                    "Casual and themed dining",
                                    "Interactive gaming and entertainment",
                                    "Celebration spaces for events and gatherings",
                                    "Cultural dining experiences through Govindam"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 group">
                                        <div className="w-1.5 h-1.5 bg-[#FFB800] group-hover:scale-150 transition-transform" />
                                        <span className="text-xs uppercase font-black tracking-widest text-white/50 group-hover:text-white transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
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
                            { label: "Eat", desc: "Curated food courts, themed restaurants, and casual dining for every occasion." },
                            { label: "Play", desc: "Arcade games, skill-based entertainment, and group gaming activities." },
                            { label: "Celebrate", desc: "Party and celebration spaces for events, gatherings, and special moments." },
                            { label: "Experience", desc: "Cultural dining, social spaces, and immersive environments for all ages." }
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
