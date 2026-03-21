"use client";

import PageHero from "../components/PageHero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";

export default function LocationsPage() {
    return (
        <main className="bg-black min-h-screen">
            <Navbar />
            <PageHero 
                title="Locations"
                subtitle="The ARENAA Network is Expanding"
                image="/hero_highway.jpg"
            />
            <section className="py-32 px-6 text-center">
                <FadeIn>
                    <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8 italic">Upcoming Destinations</h2>
                    <p className="text-3xl font-black text-white uppercase tracking-tighter mb-12">Arriving Soon at Major Expressways</p>
                    <div className="max-w-xl mx-auto border border-white/10 p-12 rounded-sm bg-white/[0.02]">
                        <p className="text-white/40 uppercase font-black tracking-widest text-xs">Stay tuned for our interactive location map.</p>
                    </div>
                </FadeIn>
            </section>
            <Footer />
        </main>
    );
}
