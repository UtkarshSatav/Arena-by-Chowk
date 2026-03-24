"use client";

import PageHero from "../components/PageHero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
import Image from "next/image";

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
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <FadeIn direction="right">
                        <div>
                            <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8">
                                About ARENAA
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-black text-white uppercase mb-8 leading-tight">
                                A Next-Generation <br />
                                <span className="text-white/40">Lifestyle Destination.</span>
                            </h3>
                            <p className="text-lg text-white/60 leading-relaxed mb-8">
                                ARENAA by CHOWK is a next-generation food, gaming, and entertainment destination designed for modern lifestyle hubs and highway corridors.
                            </p>
                            <p className="text-lg text-white/60 leading-relaxed">
                                Built as an integrated social space, ARENAA brings together curated dining experiences, high-energy gaming zones, and vibrant entertainment environments where families, travellers, youth, and communities come together to relax, play, and connect.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn direction="left" delay={0.2}>
                        <div className="relative aspect-square rounded-sm overflow-hidden border border-white/10 group">
                            <Image 
                                src="/outdoor_seating.jpg"
                                alt="ARENAA Lifestyle"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* What We Offer */}
            <section className="py-24 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6 text-center mb-20">
                    <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8">
                        A Destination to Eat, Play & Unwind
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white uppercase">
                        Everything Under One Roof
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border-y border-white/10">
                    {[
                        { title: "Food Courts & Dining", desc: "Curated food courts and themed restaurants", icon: "restaurant" },
                        { title: "Gaming Zones", desc: "Interactive gaming and entertainment activities", icon: "sports_esports" },
                        { title: "Celebration Spaces", desc: "Party and event spaces for every occasion", icon: "groups" },
                        { title: "Cultural Dining", desc: "Govindam – satvik vegetarian heritage dining", icon: "temple_hindu" }
                    ].map((item, i) => (
                        <div key={i} className="p-12 bg-black hover:bg-[#FFB800]/5 transition-colors group">
                            <span className="material-symbols-outlined text-[#FFB800] text-4xl mb-8 group-hover:scale-110 transition-transform inline-block">
                                {item.icon}
                            </span>
                            <h4 className="text-xl font-bold text-white uppercase mb-4 tracking-wider">
                                {item.title}
                            </h4>
                            <p className="text-white/40 group-hover:text-white/60 transition-colors uppercase text-[10px] font-bold tracking-widest leading-loose">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Designed for New India */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <h2 className="text-5xl md:text-7xl font-black text-white uppercase mb-12 tracking-tighter">
                            Designed for <span className="text-transparent border-text">New India</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-white/40 leading-relaxed font-medium">
                            As travel, lifestyle, and entertainment preferences evolve, highways and emerging cities are becoming vibrant social corridors. ARENAA responds to this shift by offering a destination that blends food, entertainment, and community experiences in one integrated environment.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Part of CHOWK Ecosystem */}
            <section className="py-24 px-6 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8">
                            The CHOWK Entertainment Ecosystem
                        </h2>
                        <p className="text-xl text-white/50 leading-relaxed">
                            ARENAA is a key vertical of CHOWK Entertainment, an integrated leisure and hospitality platform focused on building scalable destination experiences across India. Together with other concepts within the ecosystem, ARENAA contributes to a broader vision of creating vibrant destinations where people come together to eat, play, celebrate, and experience life.
                        </p>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </main>
    );
}

const borderTextStyles = `
.border-text {
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
    color: transparent;
}
`;
