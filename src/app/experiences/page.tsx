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

            {/* Intro */}
            <section className="py-24 px-6 border-b border-white/5">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <p className="text-xl text-white font-bold leading-relaxed mb-6">
                            ARENAA destinations are designed around a mix of experiences that cater to visitors of all age groups.
                        </p>
                        <p className="text-lg text-white/50 leading-relaxed mb-6">
                            Each destination combines dining, entertainment, and social spaces to create a vibrant environment where guests can relax, play, and connect.
                        </p>
                        <p className="text-lg text-white/50 leading-relaxed">
                            Visitors can enjoy food, gaming, celebration spaces, and cultural dining experiences within a single destination.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Gaming & Entertainment */}
            <section className="py-24 px-6 border-b border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <FadeIn direction="right">
                        <div className="relative aspect-video rounded-sm overflow-hidden border border-white/10 group">
                            <Image
                                src="/gaming_future.png"
                                alt="Gaming & Entertainment"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        </div>
                    </FadeIn>
                    <FadeIn direction="left" delay={0.2}>
                        <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-4">
                            Gaming & Entertainment
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-black text-white uppercase mb-8 leading-tight">
                            Play Beyond <br /><span className="text-[#FFB800]">the Ordinary.</span>
                        </h3>
                        <p className="text-lg text-white/50 leading-relaxed mb-6">
                            The gaming and entertainment zones at ARENAA bring excitement and energy to the destination. Designed for both youth and families, these spaces feature interactive gaming experiences and entertainment activities that encourage friendly competition and social engagement.
                        </p>
                        <p className="text-lg text-white/50 leading-relaxed mb-6">
                            Visitors can explore arcade games, skill-based entertainment, and group gaming activities that make every visit memorable.
                        </p>
                        <p className="text-lg text-white/50 leading-relaxed">
                            These zones are designed to create a lively atmosphere that complements the dining and social experiences within the destination.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Food & Dining */}
            <section className="py-24 px-6 border-b border-white/5 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <FadeIn direction="right">
                            <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-4">
                                Food & Dining
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-black text-white uppercase mb-8 leading-tight">
                                A Destination for <br /><span className="text-[#FFB800]">Food Lovers.</span>
                            </h3>
                            <p className="text-lg text-white/50 leading-relaxed mb-6">
                                Food is at the heart of the ARENAA experience. Our destinations feature curated food courts, themed restaurants, and casual dining spaces that bring together a variety of cuisines and culinary experiences.
                            </p>
                            <p className="text-lg text-white/50 leading-relaxed mb-6">
                                Visitors can explore different food concepts, enjoy social dining environments, and discover new flavors in a lively atmosphere designed for gatherings and celebrations.
                            </p>
                            <p className="text-lg text-white/50 leading-relaxed">
                                Whether it's a quick meal during a journey or a relaxed evening with friends and family, ARENAA offers dining experiences that cater to every occasion.
                            </p>
                        </FadeIn>
                    </div>
                    <div className="order-1 lg:order-2">
                        <FadeIn direction="left" delay={0.2}>
                            <div className="relative aspect-video rounded-sm overflow-hidden border border-white/10 group">
                                <Image
                                    src="/foodcourt.png"
                                    alt="Food & Dining"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Govindam – Cultural Dining */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <FadeIn direction="right">
                        <div className="relative aspect-video rounded-sm overflow-hidden border border-[#FFB800]/20 group">
                            <Image
                                src="/logo_round.jpg"
                                alt="Govindam Cultural Dining"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        </div>
                    </FadeIn>
                    <FadeIn direction="left" delay={0.2}>
                        <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-4">
                            Govindam – Cultural Dining
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-black text-white uppercase mb-8 leading-tight">
                            Where Culture <br /><span className="text-[#FFB800]">Meets Cuisine.</span>
                        </h3>
                        <p className="text-lg text-white/50 leading-relaxed mb-6">
                            Govindam by CHOWK is a theme-based cultural dining concept inspired by India's rich spiritual and culinary heritage. Focused on satvik vegetarian cuisine, Govindam offers a peaceful and culturally immersive dining experience that celebrates traditional Indian hospitality.
                        </p>
                        <p className="text-lg text-white/50 leading-relaxed mb-6">
                            The restaurant environment is designed with temple-inspired architecture, warm ambience, and authentic culinary traditions that create a calm and meaningful dining atmosphere.
                        </p>
                        <p className="text-lg text-white/50 leading-relaxed mb-6">
                            Govindam is especially suited for destinations connected to cultural tourism and pilgrimage routes, where visitors seek both nourishment and a deeper cultural experience.
                        </p>
                        <p className="text-lg text-white/50 leading-relaxed">
                            Within ARENAA destinations, Govindam adds a unique dimension by offering a dining experience that blends food, culture, and spirituality.
                        </p>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </main>
    );
}
