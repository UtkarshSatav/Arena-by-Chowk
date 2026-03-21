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
                        The Spotlight
                    </h2>
                    <p className="max-w-4xl mx-auto text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter leading-tight">
                        We don't just provide services. <br />
                        <span className="text-white/40">We curate moments that stay with you long after the journey ends.</span>
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
                            <h3 className="text-4xl md:text-6xl font-black text-white uppercase mb-8">Unleash the <br /><span className="text-[#FF00FF] drop-shadow-[0_0_15px_rgba(255,0,255,0.5)]">Future.</span></h3>
                            <p className="text-lg text-white/60 mb-8 leading-relaxed">
                                From state-of-the-art VR experiences and interactive 4D cinema to high-energy arcade zones. ARENAA brings international gaming standards to the highway.
                            </p>
                            <ul className="space-y-4">
                                {["Immersive VR Zones", "Interactive Gaming Pods", "Family Arcade Hubs", "eSports Lounges"].map((item, i) => (
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
                        <h3 className="text-4xl md:text-6xl font-black text-white uppercase mb-8">A Symphony <br /> of <span className="text-[#FFB800]">Flavors.</span></h3>
                        <p className="text-lg text-white/60 mb-8 leading-relaxed">
                            A curated selection of the finest global cuisines and legendary local favorites. Our food court is designed as a social landscape where every meal is an event.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            {[
                                { label: "Premium Food Court", icon: "fastfood" },
                                { label: "Themed Dining", icon: "restaurant" },
                                { label: "Social Lounges", icon: "local_bar" },
                                { label: "Artisan Cafes", icon: "coffee" }
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
                            <h2 className="text-[#FFB800] font-black uppercase tracking-[0.3em] mb-4 text-sm">Govindam</h2>
                            <h3 className="text-4xl md:text-6xl font-black text-white uppercase mb-8">The Spirit <br /> of <span className="text-[#FFB800]">Sattvic.</span></h3>
                            <p className="text-lg text-white/60 mb-8 leading-relaxed font-light italic">
                                Inspired by the sacred temples of India, Govindam offers a transcendental dining experience where culture, spiritual vibration, and pure Satvik cuisine blend into one.
                            </p>
                            <button className="border border-[#FFB800] text-[#FFB800] px-10 py-4 text-xs font-black uppercase tracking-widest hover:bg-[#FFB800] hover:text-black transition-all">
                                Explore The Heritage →
                            </button>
                        </FadeIn>
                    </div>
                    <div className="order-1 lg:order-2">
                        <FadeIn direction="left" delay={0.2}>
                            <div className="relative aspect-square md:aspect-video rounded-sm overflow-hidden border border-[#FFB800]/20 group">
                                <Image 
                                    src="/govindam_dish.jpg" 
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
