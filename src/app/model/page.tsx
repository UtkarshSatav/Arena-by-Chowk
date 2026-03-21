"use client";

import PageHero from "../components/PageHero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
import Image from "next/image";

export default function ModelPage() {
    return (
        <main className="bg-black min-h-screen">
            <Navbar />
            
            <PageHero 
                title="The Model"
                subtitle="The Future of Highway Infrastructure"
                image="/arenaa_model_aerial.png"
            />

            {/* Highway Model Section */}
            <section className="py-24 px-6 border-b border-white/5">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <FadeIn>
                        <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-[#FFB800] mb-8 text-center italic">The Highway Destination</h2>
                        <h3 className="text-4xl md:text-6xl font-black text-white uppercase mb-12 text-center leading-tight max-w-4xl">
                            Why the Highway is our <br /> <span className="text-[#FFB800]">Primary Arena.</span>
                        </h3>
                        <p className="text-xl text-white/40 leading-relaxed font-light text-center max-w-3xl mx-auto">
                            Modern India is a nation on the move. With rapid expressway expansion and a shift in luxury consumption, the highway has transformed from a transit corridor into a prime economic zone.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Model Features */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {[
                        { title: "Strategic Locations", desc: "Located at high-traffic nodes and tourism corridors." },
                        { title: "23% Annual ROI", desc: "Unmatched financial performance in the leisure sector." },
                        { title: "15% Revenue Share", desc: "Transparent and growth-oriented partner models." },
                        { title: "6-Month Delivery", desc: "Rapid rollout with pre-engineered design modules." }
                    ].map((feature, i) => (
                        <div key={i} className="flex flex-col border-l border-white/10 pl-8 group">
                            <div className="w-2 h-2 rounded-full bg-[#FFB800] mb-6 group-hover:scale-[2] transition-transform" />
                            <h4 className="text-lg font-bold text-white uppercase mb-4 tracking-tighter">{feature.title}</h4>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Ideal Locations */}
            <section className="py-24 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <FadeIn direction="right">
                        <div>
                            <h2 className="text-[#FFB800] font-black uppercase tracking-[0.3em] mb-4 text-sm italic">Growth Strategy</h2>
                            <h3 className="text-4xl md:text-5xl font-black text-white uppercase mb-8">Dominating High-Traffic <br /> <span className="text-white/40">Zones.</span></h3>
                            <ul className="space-y-8">
                                {[
                                    { label: "Highways & Expressways", icon: "road" },
                                    { label: "Tourism Corridors", icon: "map" },
                                    { label: "Pilgrimage Routes", icon: "mosque" },
                                    { label: "Urban Sprawl Hubs", icon: "location_city" }
                                ].map((loc, i) => (
                                    <li key={i} className="flex items-start gap-6 group">
                                        <span className="material-symbols-outlined text-[#FFB800] text-3xl group-hover:scale-110 transition-transform">
                                            {loc.icon}
                                        </span>
                                        <div>
                                            <h4 className="text-white font-bold uppercase tracking-wider mb-1">{loc.label}</h4>
                                            <p className="text-[9px] font-bold uppercase tracking-widest text-white/30">Ensuring consistent footfall and visibility.</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeIn>
                    <FadeIn direction="left" delay={0.2}>
                        <div className="relative aspect-square rounded-sm overflow-hidden border border-white/5 group">
                            <Image 
                                src="/layout_iso.jpg" 
                                alt="ARENAA Strategic Model"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent z-10" />
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Architecture & Design Section */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto text-center mb-24">
                    <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8 italic">Architecture</h2>
                    <h3 className="text-4xl md:text-7xl font-black text-white uppercase mb-4 tracking-tighter">Iconic. <span className="text-white/40">Integrated.</span></h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Open Social Spaces", img: "/outdoor_seating.jpg" },
                        { title: "Integrated Zones", img: "/layout_3d.jpg" },
                        { title: "Cultural Elements", img: "/govindam_dining.jpg" }
                    ].map((item, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="relative aspect-[4/5] overflow-hidden rounded-sm group">
                                <Image 
                                    src={item.img} 
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                                <div className="absolute bottom-8 left-8 z-20">
                                    <h4 className="text-2xl font-black text-white uppercase tracking-tighter group-hover:text-[#FFB800] transition-colors">{item.title}</h4>
                                    <div className="w-8 h-1 bg-[#FFB800] mt-4 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
