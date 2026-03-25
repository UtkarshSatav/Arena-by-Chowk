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
                subtitle="A New Generation Highway Destination"
                image="/arenaa_model_aerial.png"
            />

            {/* Intro */}
            <section className="py-24 px-6 border-b border-white/5">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8">
                            ARENAA Highway Model
                        </h2>
                        <p className="text-xl text-white font-bold leading-relaxed mb-6">
                            The ARENAA Highway Model is designed to transform traditional highway stops into vibrant lifestyle destinations.
                        </p>
                        <p className="text-lg text-white/50 leading-relaxed mb-6">
                            As India's highway infrastructure rapidly expands and travel between cities increases, highways are becoming important social corridors where travelers look for safe, engaging, and comfortable places to stop.
                        </p>
                        <p className="text-lg text-white/50 leading-relaxed">
                            ARENAA reimagines highway stops by creating destinations that combine food, entertainment, and social spaces in one integrated environment.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Designed for Modern Travel */}
            <section className="py-24 px-6 border-b border-white/5 bg-white/[0.02]">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8">
                            Designed for Modern Travel
                        </h2>
                        <p className="text-lg text-white/50 leading-relaxed mb-10">
                            Traditional highway stops often offer limited facilities and short visitor stays. ARENAA changes this by offering a destination where travelers can relax, enjoy food, play games, and spend quality time with family and friends.
                        </p>
                        <p className="text-lg text-white/50 leading-relaxed mb-8">
                            Each ARENAA highway destination includes:
                        </p>
                        <ul className="space-y-4 mb-10">
                            {[
                                "Curated food courts and restaurants",
                                "Gaming and entertainment zones",
                                "Family-friendly social spaces",
                                "Celebration and event areas",
                                "Comfortable rest and relaxation environments",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4">
                                    <div className="w-1.5 h-1.5 bg-[#FFB800] flex-shrink-0" />
                                    <span className="text-sm font-bold uppercase tracking-widest text-white/60">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-white/50 leading-relaxed">
                            This integrated format encourages longer visitor stays and repeat visits, making ARENAA a powerful destination anchor along major travel routes.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Ideal Locations */}
            <section className="py-24 px-6 border-b border-white/5">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8">
                            Ideal Locations
                        </h2>
                        <p className="text-lg text-white/50 leading-relaxed mb-8">
                            The ARENAA Highway Model is ideally suited for:
                        </p>
                        <ul className="space-y-4 mb-10">
                            {[
                                "National and state highways",
                                "Tourism corridors",
                                "Pilgrimage routes",
                                "High-traffic intercity travel routes",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4">
                                    <div className="w-1.5 h-1.5 bg-[#FFB800] flex-shrink-0" />
                                    <span className="text-sm font-bold uppercase tracking-widest text-white/60">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-white/50 leading-relaxed">
                            These locations offer strong potential for sustained visitor flow and long-term destination growth.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Architecture & Design */}
            <section className="py-24 px-6 border-b border-white/5 bg-white/[0.02]">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8">
                            Architecture & Design
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-8 leading-tight">
                            Designed to Create <span className="text-[#FFB800]">Memorable Destinations.</span>
                        </h3>
                        <p className="text-lg text-white/50 leading-relaxed mb-6">
                            Every ARENAA destination is designed to deliver a unique and memorable visitor experience. Our architectural approach combines modern design, welcoming social spaces, and carefully planned layouts that encourage exploration and interaction.
                        </p>
                        <p className="text-lg text-white/50 leading-relaxed">
                            The goal is to create environments where visitors naturally move between dining, entertainment, and social spaces.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Key Design Principles */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-16 text-center">
                            Key Design Principles
                        </h2>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Open Social Spaces",
                                desc: "Large central gathering areas create vibrant community environments where visitors can relax and interact.",
                                img: "/outdoor_seating.jpg",
                            },
                            {
                                title: "Integrated Experience Zones",
                                desc: "Dining, gaming, and entertainment areas are seamlessly connected to create a dynamic flow of activity.",
                                img: "/layout_3d.jpg",
                            },
                            {
                                title: "Family-Friendly Layouts",
                                desc: "Spaces are designed to ensure comfort and accessibility for visitors of all age groups.",
                                img: "/layout_iso.jpg",
                            },
                            {
                                title: "Cultural Elements",
                                desc: "Through concepts like Govindam, ARENAA integrates cultural design elements that celebrate India's heritage and traditions.",
                                img: "/govindam_dining.jpg",
                            },
                        ].map((item, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="glass-card border-white/5 bg-white/[0.02] overflow-hidden group hover:border-[#FFB800]/20 transition-all">
                                    <div className="relative aspect-video overflow-hidden">
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                    </div>
                                    <div className="p-8">
                                        <h4 className="text-lg font-black text-white uppercase tracking-tight mb-3">{item.title}</h4>
                                        <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
