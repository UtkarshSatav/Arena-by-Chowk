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
                title="ARENAA Highway Model"
                subtitle="Transforming Highway Stops Into Vibrant Lifestyle Destinations"
                image="/arenaa_model_aerial.png"
            />

            {/* Highway Model Section */}
            <section className="py-24 px-6 border-b border-white/5">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <FadeIn>
                        <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-[#FFB800] mb-8 text-center italic">A New Generation Highway Destination</h2>
                        <h3 className="text-4xl md:text-6xl font-black text-white uppercase mb-12 text-center leading-tight max-w-4xl">
                            Transforming Highway Stops Into <br /> <span className="text-[#FFB800]">Vibrant Destinations.</span>
                        </h3>
                        <p className="text-xl text-white/40 leading-relaxed font-light text-center max-w-3xl mx-auto">
                            As India's highway infrastructure rapidly expands and travel between cities increases, highways are becoming important social corridors where travellers look for safe, engaging, and comfortable places to stop. ARENAA reimagines these spaces entirely.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Model Features */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {[
                        { title: "Curated Food Courts", desc: "Restaurants and food courts designed for travellers and families." },
                        { title: "Gaming & Entertainment", desc: "Interactive gaming zones and entertainment activities for all ages." },
                        { title: "Celebration Spaces", desc: "Family-friendly social spaces and event areas for gatherings." },
                        { title: "Rest & Relaxation", desc: "Comfortable environments designed for longer, more enjoyable stays." }
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
                            <h2 className="text-[#FFB800] font-black uppercase tracking-[0.3em] mb-4 text-sm italic">Ideal Locations</h2>
                            <h3 className="text-4xl md:text-5xl font-black text-white uppercase mb-8">Suited for <br /> <span className="text-white/40">High-Traffic Routes.</span></h3>
                            <ul className="space-y-8">
                                {[
                                    { label: "National & State Highways", icon: "road" },
                                    { label: "Tourism Corridors", icon: "map" },
                                    { label: "Pilgrimage Routes", icon: "mosque" },
                                    { label: "High-Traffic Intercity Routes", icon: "location_city" }
                                ].map((loc, i) => (
                                    <li key={i} className="flex items-start gap-6 group">
                                        <span className="material-symbols-outlined text-[#FFB800] text-3xl group-hover:scale-110 transition-transform">
                                            {loc.icon}
                                        </span>
                                        <div>
                                            <h4 className="text-white font-bold uppercase tracking-wider mb-1">{loc.label}</h4>
                                            <p className="text-[9px] font-bold uppercase tracking-widest text-white/30">Strong potential for sustained visitor flow and long-term growth.</p>
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
                    <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8 italic">Architecture & Design</h2>
                    <h3 className="text-4xl md:text-7xl font-black text-white uppercase mb-4 tracking-tighter">Designed to Create <span className="text-white/40">Memorable Destinations.</span></h3>
                    <p className="text-xl text-white/40 max-w-3xl mx-auto mt-8 leading-relaxed">
                        Our architectural approach combines modern design, welcoming social spaces, and carefully planned layouts that encourage exploration and interaction between dining, entertainment, and social spaces.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Open Social Spaces", img: "/outdoor_seating.jpg" },
                        { title: "Integrated Experience Zones", img: "/layout_3d.jpg" },
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
