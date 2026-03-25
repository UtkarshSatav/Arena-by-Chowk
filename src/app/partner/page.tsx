"use client";

import PageHero from "../components/PageHero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
import InvestSection from "../components/InvestSection";

export default function PartnerPage() {
    return (
        <main className="bg-black min-h-screen">
            <Navbar />

            <PageHero
                title="Partner With Us"
                subtitle="Join the ARENAA Growth Story"
                image="/about_hero_cinematic.png"
            />

            {/* Developers & Landowners */}
            <section className="py-24 px-6 border-b border-white/5">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8">
                            Developers & Landowners
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-8 leading-tight">
                            Partner in Building <span className="text-[#FFB800]">Destination Experiences.</span>
                        </h3>
                        <p className="text-lg text-white/50 leading-relaxed mb-6">
                            ARENAA offers an opportunity for developers and landowners to transform high-potential locations into vibrant lifestyle destinations.
                        </p>
                        <p className="text-lg text-white/50 leading-relaxed">
                            Our integrated destination model helps maximize land value while creating long-term visitor engagement.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Ideal Land Parcels */}
            <section className="py-24 px-6 border-b border-white/5 bg-white/[0.02]">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8">
                            Ideal Land Parcels
                        </h2>
                        <p className="text-lg text-white/50 leading-relaxed mb-8">
                            ARENAA developments are suitable for locations that benefit from strong accessibility and visitor movement. Typical requirements include:
                        </p>
                        <ul className="space-y-4 mb-16">
                            {[
                                "Highway frontage locations",
                                "Tourism corridors",
                                "Urban lifestyle hubs",
                                "Mixed-use commercial developments",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4">
                                    <div className="w-1.5 h-1.5 bg-[#FFB800] flex-shrink-0" />
                                    <span className="text-sm font-bold uppercase tracking-widest text-white/60">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8">
                            What We Bring
                        </h2>
                        <p className="text-lg text-white/50 leading-relaxed mb-8">
                            Our team provides expertise across the entire development process:
                        </p>
                        <ul className="space-y-4 mb-10">
                            {[
                                "Destination concept design",
                                "Brand and operational expertise",
                                "Food and entertainment programming",
                                "Marketing and destination positioning",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4">
                                    <div className="w-1.5 h-1.5 bg-[#FFB800] flex-shrink-0" />
                                    <span className="text-sm font-bold uppercase tracking-widest text-white/60">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-white/50 leading-relaxed">
                            Together with our partners, we create destinations that deliver both visitor engagement and commercial value.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Investment & Franchise */}
            <section className="py-24 px-6 border-b border-white/5">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8">
                            Investment & Franchise
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-8 leading-tight">
                            Join the ARENAA <span className="text-[#FFB800]">Growth Story.</span>
                        </h3>
                        <p className="text-lg text-white/50 leading-relaxed mb-6">
                            ARENAA is designed as a scalable destination platform with the potential to expand across multiple locations.
                        </p>
                        <p className="text-lg text-white/50 leading-relaxed">
                            We are actively exploring partnerships with investors and franchise partners who share our vision of building vibrant entertainment and dining destinations.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Why ARENAA */}
            <section className="py-24 px-6 border-b border-white/5 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-16 text-center">
                            Why ARENAA
                        </h2>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        {[
                            {
                                title: "Scalable Model",
                                desc: "Designed for replication across highways, tourism corridors, and lifestyle hubs.",
                                icon: "storefront",
                            },
                            {
                                title: "Multiple Revenue Streams",
                                desc: "Dining, entertainment, gaming, and events create diversified revenue opportunities.",
                                icon: "trending_up",
                            },
                            {
                                title: "Growing Market",
                                desc: "India's entertainment, leisure, and travel sectors are experiencing strong growth driven by rising incomes and expanding infrastructure.",
                                icon: "public",
                            },
                        ].map((item, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="glass-card p-10 border-white/5 bg-white/[0.02] hover:border-[#FFB800]/20 transition-all group h-full">
                                    <span className="material-symbols-outlined text-[#FFB800] text-4xl mb-6 block group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </span>
                                    <h4 className="text-lg font-black text-white uppercase tracking-tight mb-4">{item.title}</h4>
                                    <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    {/* Partnership Opportunities */}
                    <FadeIn>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8">
                                Partnership Opportunities
                            </h2>
                            <ul className="space-y-4 mb-10">
                                {[
                                    "Destination investment partnerships",
                                    "Franchise development opportunities",
                                    "Strategic hospitality collaborations",
                                    "Developer partnerships for new locations",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 bg-[#FFB800] flex-shrink-0" />
                                        <span className="text-sm font-bold uppercase tracking-widest text-white/60">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-lg text-white/50 leading-relaxed">
                                Our goal is to build a network of ARENAA destinations that bring together food, entertainment, and culture across India's travel and lifestyle landscape.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Contact Form */}
            <div id="partner-form">
                <InvestSection />
            </div>

            <Footer />
        </main>
    );
}
