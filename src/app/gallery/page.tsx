"use client";

import PageHero from "../components/PageHero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";

export default function GalleryPage() {
    return (
        <main className="bg-black min-h-screen">
            <Navbar />
            <PageHero 
                title="Gallery"
                subtitle="Visualizing the ARENAA Experience"
                image="/about_hero_cinematic.jpg"
            />
            <section className="py-32 px-6 text-center">
                <FadeIn>
                    <h2 className="text-sm font-bold uppercase tracking-[0.5em] text-[#FFB800] mb-8 italic">Showcase</h2>
                    <p className="text-3xl font-black text-white uppercase tracking-tighter mb-12">Immersive Media Gallery</p>
                    <div className="max-w-xl mx-auto border border-white/10 p-12 rounded-sm bg-white/[0.02]">
                        <p className="text-white/40 uppercase font-black tracking-widest text-xs">A collection of cinematic walkthroughs and photography is being curated.</p>
                    </div>
                </FadeIn>
            </section>
            <Footer />
        </main>
    );
}
