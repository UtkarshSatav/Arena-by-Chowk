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
                title="Our Story"
                subtitle="Redefining the Highway Experience for New India"
                image="/about_hero_cinematic.png"
            />

            {/* Brand Overview */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <FadeIn direction="right">
                        <div>
                            <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8">
                                Brand Overview
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-black text-white uppercase mb-8 leading-tight">
                                More than a Stop. <br />
                                <span className="text-white/40">A Destination.</span>
                            </h3>
                            <p className="text-lg text-white/60 leading-relaxed mb-8">
                                ARENAA by CHOWK is India's first integrated highway leisure destination, a revolutionary concept that transforms traditional transit stops into high-energy hubs of lifestyle, entertainment, and culinary excellence.
                            </p>
                            <p className="text-lg text-white/60 leading-relaxed">
                                Our vision is to create a seamless ecosystem where travelers and locals alike can Eat, Play, Celebrate, and Experience the best of modern India under one roof.
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
                        The Ecosystem
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-black text-white uppercase">
                        A World of Possibilities
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border-y border-white/10">
                    {[
                        { title: "Food Courts", desc: "Global flavors meets local legends", icon: "restaurant" },
                        { title: "Gaming Zones", desc: "High-tech immersive entertainment", icon: "sports_esports" },
                        { title: "Social Hubs", desc: "Designed for connection and community", icon: "groups" },
                        { title: "Culture", desc: "Spiritual and traditional dining", icon: "temple_hindu" }
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
                            As travel and lifestyle behaviors shift across the subcontinent, ARENAA stands as the bridge between functional necessity and premium desire. We provide an oasis of international standards on the Indian highway.
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
