"use client";

import PageHero from "../components/PageHero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";

export default function AboutPage() {
    return (
        <main className="bg-black min-h-screen">
            <Navbar />

            <PageHero
                title="About ARENAA"
                subtitle="A Next-Generation Food, Gaming & Entertainment Destination"
                image="/about_hero_cinematic.png"
            />

            {/* Brand Overview */}
            <section className="py-24 px-6 border-b border-white/5">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8">
                            About ARENAA
                        </h2>
                        <p className="text-xl text-white font-bold leading-relaxed mb-6">
                            ARENAA by CHOWK is a next-generation food, gaming, and entertainment destination designed for modern lifestyle hubs and highway corridors.
                        </p>
                        <p className="text-lg text-white/50 leading-relaxed mb-6">
                            Built as an integrated social space, ARENAA brings together curated dining experiences, high-energy gaming zones, and vibrant entertainment environments where families, travellers, youth, and communities come together to relax, play, and connect.
                        </p>
                        <p className="text-lg text-white/50 leading-relaxed">
                            Unlike traditional highway stops or standalone restaurants, ARENAA is designed as a complete lifestyle destination — a place where visitors can spend quality time enjoying food, entertainment, and shared experiences.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* A Destination to Eat, Play & Unwind */}
            <section className="py-24 px-6 border-b border-white/5 bg-white/[0.02]">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8">
                            A Destination to Eat, Play & Unwind
                        </h2>
                        <p className="text-lg text-white/50 leading-relaxed mb-10">
                            ARENAA combines multiple experience formats under one roof to create an engaging and dynamic environment:
                        </p>
                        <ul className="space-y-4 mb-10">
                            {[
                                "Curated food courts and themed restaurants",
                                "Interactive gaming zones and arcades",
                                "Party and celebration spaces",
                                "Family-friendly entertainment experiences",
                                "Social gathering spaces for groups and communities",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4">
                                    <div className="w-1.5 h-1.5 bg-[#FFB800] flex-shrink-0" />
                                    <span className="text-sm font-bold uppercase tracking-widest text-white/60">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-white/50 leading-relaxed">
                            Every ARENAA destination is thoughtfully designed to maximize visitor engagement, increase dwell time, and create memorable experiences for guests.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Designed for the New India */}
            <section className="py-24 px-6 border-b border-white/5">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8">
                            Designed for the New India
                        </h2>
                        <p className="text-lg text-white/50 leading-relaxed mb-6">
                            As travel, lifestyle, and entertainment preferences evolve, highways and emerging cities are becoming vibrant social corridors. ARENAA responds to this shift by offering a destination that blends food, entertainment, and community experiences in one integrated environment.
                        </p>
                        <p className="text-lg text-white/50 leading-relaxed">
                            Whether located along a highway or within premium lifestyle developments, ARENAA serves as a high-footfall entertainment anchor that transforms everyday stops into engaging destinations.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Part of the CHOWK Ecosystem */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8">
                            Part of the CHOWK Entertainment Ecosystem
                        </h2>
                        <p className="text-lg text-white/50 leading-relaxed mb-6">
                            ARENAA is a key vertical of CHOWK Entertainment, an integrated leisure and hospitality platform focused on building scalable destination experiences across India.
                        </p>
                        <p className="text-lg text-white/50 leading-relaxed">
                            Together with other concepts within the ecosystem, ARENAA contributes to a broader vision of creating vibrant destinations where people come together to eat, play, celebrate, and experience life.
                        </p>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </main>
    );
}
