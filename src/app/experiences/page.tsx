"use client";

import PageHero from "../components/PageHero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
import Image from "next/image";

export default function ExperiencesPage() {
    return (
        <main className="bg-black min-h-screen">
            <Navbar />
            
            <PageHero 
                title="Experiences"
                subtitle="Eat • Play • Celebrate • Experience"
                image="/gaming_arcade.jpg"
            />

            {/* Immersive Netflix-style Intro */}
            <section className="py-24 px-6 text-center">
                <FadeIn>
                    <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8 italic">
                        Designed for Everyone
                    </h2>
                    <p className="max-w-4xl mx-auto text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter leading-tight">
                        ARENAA destinations are designed around a mix of experiences <br />
                        <span className="text-white/40">that cater to visitors of all age groups.</span>
                    </p>
                </FadeIn>
            </section>

            {/* Gaming & Entertainment Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FF00FF]/5 blur-[120px] pointer-events-none" />
                
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <FadeIn direction="right">
                            <h2 className="text-[#FF00FF] font-black uppercase tracking-[0.3em] mb-4 text-sm">Gaming & Entertainment</h2>
                            <h3 className="text-4xl md:text-6xl font-black text-white uppercase mb-8">Play Beyond <br /><span className="text-[#FF00FF] drop-shadow-[0_0_15px_rgba(255,0,255,0.5)]">the Ordinary.</span></h3>
                            <p className="text-lg text-white/60 mb-8 leading-relaxed">
                                The gaming and entertainment zones at ARENAA bring excitement and energy to the destination. Designed for both youth and families, these spaces feature interactive gaming experiences and entertainment activities that encourage friendly competition and social engagement.
                            </p>
                            <ul className="space-y-4">
                                {["Arcade games and skill-based entertainment", "Group gaming activities", "Family-friendly entertainment", "Social gaming experiences"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 group">
                                        <div className="w-1.5 h-1.5 bg-[#FF00FF] group-hover:scale-150 transition-transform" />
                                        <span className="text-xs uppercase font-black tracking-widest text-white/50 group-hover:text-white transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>
                    </div>
                    <div className="order-1 lg:order-2">
                        <FadeIn direction="left" delay={0.2}>
                            <div className="relative aspect-square md:aspect-video rounded-sm overflow-hidden border border-[#FF00FF]/20 group">
                                <Image 
                                    src="/gaming_future.png" 
                                    alt="Gaming Experience"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Food & Dining Section */}
            <section className="py-24 relative bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <FadeIn direction="right">
                        <div className="relative aspect-square md:aspect-video rounded-sm overflow-hidden border border-white/10 group">
                            <Image 
                                src="/foodcourt.png" 
                                alt="Food & Dining"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                        </div>
                    </FadeIn>
                    <FadeIn direction="left" delay={0.2}>
                        <h2 className="text-[#FFB800] font-black uppercase tracking-[0.3em] mb-4 text-sm">Food & Dining</h2>
                        <h3 className="text-4xl md:text-6xl font-black text-white uppercase mb-8">A Destination for <br /> <span className="text-[#FFB800]">Food Lovers.</span></h3>
                        <p className="text-lg text-white/60 mb-8 leading-relaxed">
                            Food is at the heart of the ARENAA experience. Our destinations feature curated food courts, themed restaurants, and casual dining spaces that bring together a variety of cuisines and culinary experiences in a lively atmosphere designed for gatherings and celebrations.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            {[
                                { label: "Curated Food Courts", icon: "fastfood" },
                                { label: "Themed Restaurants", icon: "restaurant" },
                                { label: "Social Dining Spaces", icon: "local_bar" },
                                { label: "Casual Dining", icon: "coffee" }
                            ].map((item, i) => (
                                <div key={i} className="group">
                                    <span className="material-symbols-outlined text-[#FFB800] mb-4 text-3xl group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </span>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Govindam – Cultural Dining Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FFB800]/5 blur-[120px] pointer-events-none" />
                
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <FadeIn direction="right">
                            <h2 className="text-[#FFB800] font-black uppercase tracking-[0.3em] mb-4 text-sm">Govindam – Cultural Dining</h2>
                            <h3 className="text-4xl md:text-6xl font-black text-white uppercase mb-8">Where Culture <br /> Meets <span className="text-[#FFB800]">Cuisine.</span></h3>
                            <p className="text-lg text-white/60 mb-8 leading-relaxed font-light">
                                Govindam by CHOWK is a theme-based cultural dining concept inspired by India's rich spiritual and culinary heritage. Focused on satvik vegetarian cuisine, Govindam offers a peaceful and culturally immersive dining experience that celebrates traditional Indian hospitality.
                            </p>
                            <p className="text-lg text-white/60 mb-8 leading-relaxed font-light">
                                The restaurant environment is designed with temple-inspired architecture, warm ambience, and authentic culinary traditions — especially suited for destinations connected to cultural tourism and pilgrimage routes.
                            </p>
                            <button className="border border-[#FFB800] text-[#FFB800] px-10 py-4 text-xs font-black uppercase tracking-widest hover:bg-[#FFB800] hover:text-black transition-all">
                                Explore Govindam →
                            </button>
                        </FadeIn>
                    </div>
                    <div className="order-1 lg:order-2">
                        <FadeIn direction="left" delay={0.2}>
                            <div className="relative aspect-square md:aspect-video rounded-sm overflow-hidden border border-[#FFB800]/20 group">
                                <Image 
                                    src="/logo_round.jpg" 
                                    alt="Govindam Cultural Experience"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
