"use client";

import PageHero from "../components/PageHero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
import Image from "next/image";
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

            {/* Developers & Landowners Section */}
            <section className="py-24 px-6 border-b border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <FadeIn direction="right">
                        <div>
                            <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8 italic">Developers & Landowners</h2>
                            <h3 className="text-4xl md:text-5xl font-black text-white uppercase mb-8 leading-tight">
                                Partner in Building <br /> <span className="text-[#FFB800]">Destination Experiences.</span>
                            </h3>
                            <p className="text-lg text-white/50 leading-relaxed mb-12">
                                ARENAA offers an opportunity for developers and landowners to transform high-potential locations into vibrant lifestyle destinations. Our integrated destination model helps maximise land value while creating long-term visitor engagement.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    { title: "Destination Concept Design", desc: "Expert concept and architectural support." },
                                    { title: "Brand & Operational Expertise", desc: "Leveraging the CHOWK and ARENAA reputation." },
                                    { title: "Food & Entertainment Programming", desc: "Full-stack management and hospitality services." },
                                    { title: "Marketing & Positioning", desc: "Digital and ground-level footfall strategies." }
                                ].map((service, i) => (
                                    <div key={i} className="flex flex-col gap-2">
                                        <div className="w-10 h-0.5 bg-[#FFB800]/50" />
                                        <h4 className="text-sm font-black text-white uppercase tracking-tighter">{service.title}</h4>
                                        <p className="text-[10px] uppercase font-bold text-white/30 tracking-widest">{service.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn direction="left" delay={0.2}>
                        <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10 group">
                            <Image 
                                src="/night_render.jpg" 
                                alt="Developer Partnership"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Investment & Franchise Section */}
            <section className="py-24 px-6 relative bg-white/[0.02] overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[#FFB800]/5 blur-[200px] pointer-events-none" />
                
                <div className="max-w-7xl mx-auto text-center mb-24">
                    <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8 italic italic">Investment & Franchise</h2>
                    <h3 className="text-4xl md:text-6xl font-black text-white uppercase mb-6 tracking-tighter">Join the ARENAA <span className="text-white/40">Growth Story.</span></h3>
                    <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
                        ARENAA is designed as a scalable destination platform with the potential to expand across multiple locations. We are actively exploring partnerships with investors and franchise partners who share our vision of building vibrant entertainment and dining destinations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {[
                        { title: "Destination Investment", desc: "Equity-based participation in landmark destination locations.", icon: "trending_up" },
                        { title: "Franchise Development", desc: "Scalable model designed for replication across highways and lifestyle hubs.", icon: "storefront" },
                        { title: "Strategic Collaborations", desc: "Hospitality and developer partnerships for new locations.", icon: "handshake" }
                    ].map((option, i) => (
                        <div key={i} className="glass-card p-12 border-white/5 bg-white/[0.02] hover:border-[#FFB800]/30 transition-all group">
                            <span className="material-symbols-outlined text-[#FFB800] text-4xl mb-8 group-hover:scale-110 transition-transform">{option.icon}</span>
                            <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">{option.title}</h4>
                            <p className="text-sm text-white/40 leading-relaxed uppercase font-bold tracking-widest">{option.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Reusing InvestSection for the Form */}
            <div id="partner-form">
                <InvestSection />
            </div>

            <Footer />
        </main>
    );
}
