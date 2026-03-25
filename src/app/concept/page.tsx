"use client";

import PageHero from "../components/PageHero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";

export default function ConceptPage() {
    return (
        <main className="bg-black min-h-screen">
            <Navbar />

            <PageHero
                title="The Concept"
                subtitle="Eat • Play • Celebrate • Experience"
                image="/gaming_arcade.jpg"
            />

            {/* Intro */}
            <section className="py-24 px-6 border-b border-white/5">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8">
                            The Concept
                        </h2>
                        <p className="text-xl text-white font-bold leading-relaxed mb-6">
                            The ARENAA concept is built around the idea that modern destinations must offer more than a single attraction.
                        </p>
                        <p className="text-lg text-white/50 leading-relaxed mb-6">
                            Visitors today seek multi-experience environments where they can dine, socialize, play games, celebrate events, and spend quality time with family and friends.
                        </p>
                        <p className="text-lg text-white/50 leading-relaxed">
                            ARENAA integrates these experiences into one vibrant destination.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* A New Kind of Social Destination */}
            <section className="py-24 px-6 bg-white/[0.02]">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8">
                            A New Kind of Social Destination
                        </h2>
                        <p className="text-lg text-white/50 leading-relaxed mb-10">
                            Traditional highway stops or standalone restaurants often offer limited engagement. ARENAA reimagines these spaces by combining entertainment, dining, and cultural experiences in one environment.
                        </p>
                        <p className="text-lg text-white/50 leading-relaxed mb-10">
                            Visitors can enjoy:
                        </p>
                        <ul className="space-y-4 mb-10">
                            {[
                                "Casual and themed dining",
                                "Interactive gaming and entertainment",
                                "Celebration spaces for events and gatherings",
                                "Cultural dining experiences through Govindam",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4">
                                    <div className="w-1.5 h-1.5 bg-[#FFB800] flex-shrink-0" />
                                    <span className="text-sm font-bold uppercase tracking-widest text-white/60">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-white/50 leading-relaxed">
                            This combination creates a destination that encourages longer visits and repeat engagement.
                        </p>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </main>
    );
}
