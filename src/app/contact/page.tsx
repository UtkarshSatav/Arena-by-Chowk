"use client";

import { useState } from "react";
import PageHero from "../components/PageHero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        type: "Visitor",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            
            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", phone: "", type: "Visitor", message: "" });
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <main className="bg-black min-h-screen">
            <Navbar />
            
            <PageHero 
                title="Contact"
                subtitle="Reach Out to the ARENAA Team"
                image="/about_hero_cinematic.png"
            />

            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Contact Info */}
                    <FadeIn direction="right">
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-[#FFB800] font-black uppercase tracking-[0.3em] mb-8 text-sm italic">Get in Touch</h2>
                                <h3 className="text-4xl lg:text-5xl font-black text-white uppercase mb-8 leading-tight">
                                    We Would Love to <br /> <span className="text-white/40 italic">Hear From You.</span>
                                </h3>
                                <p className="text-lg text-white/50 leading-relaxed">
                                    Whether you are a visitor, developer, partner, or investor interested in the ARENAA concept, our team is happy to connect.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">Email</p>
                                    <a href="mailto:info@chowk.co.in" className="text-sm font-bold text-white hover:text-[#FFB800] transition-colors">info@chowk.co.in</a>
                                </div>
                                <div className="col-span-1 md:col-span-2">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">Registered Office</p>
                                    <p className="text-sm font-bold text-white/60 leading-relaxed uppercase">
                                        ARENAA by CHOWK<br />
                                        Chowk Entertainment Pvt. Ltd.<br />
                                        WZ-24/1 FF Left Side Mukharjee Park<br />
                                        New Delhi – 110018
                                    </p>
                                </div>
                                <div className="col-span-1 md:col-span-2">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-4">Follow Us</p>
                                    <div className="flex items-center gap-6">
                                        <a href="https://www.facebook.com/profile.php?id=61586878500352" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#FFB800] transition-colors text-xs font-bold uppercase tracking-widest">Facebook</a>
                                        <a href="https://www.linkedin.com/showcase/arenaabychowk/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#FFB800] transition-colors text-xs font-bold uppercase tracking-widest">LinkedIn</a>
                                        <a href="https://www.instagram.com/arenaabychowk/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#FFB800] transition-colors text-xs font-bold uppercase tracking-widest">Instagram</a>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="relative aspect-video rounded-sm overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                                <div className="absolute inset-0 bg-white/5 animate-pulse" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white/20 text-5xl">map</span>
                                </div>
                                {/* In a real app, embed Google Map here */}
                            </div>
                        </div>
                    </FadeIn>

                    {/* Inquiry Form */}
                    <FadeIn direction="left" delay={0.2}>
                        <div className="glass-card p-10 lg:p-12 border-white/5 bg-white/[0.02]">
                            <h4 className="text-2xl font-black text-white uppercase mb-8 tracking-tighter">Inquiry Form</h4>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/40">Full Name</label>
                                        <input 
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-[#FFB800]/50 focus:outline-none transition-colors"
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/40">Inquiry Type</label>
                                        <select 
                                            className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-[#FFB800]/50 focus:outline-none transition-colors appearance-none"
                                            value={formData.type}
                                            onChange={(e) => setFormData({...formData, type: e.target.value})}
                                        >
                                            <option value="Visitor">Visitor</option>
                                            <option value="Investor">Investor</option>
                                            <option value="Developer">Developer</option>
                                            <option value="Franchise Partner">Franchise Partner</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/40">Email</label>
                                        <input 
                                            required type="email"
                                            className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-[#FFB800]/50 focus:outline-none transition-colors"
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/40">Phone Number</label>
                                        <input 
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-[#FFB800]/50 focus:outline-none transition-colors"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/40">Message</label>
                                    <textarea 
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:border-[#FFB800]/50 focus:outline-none transition-colors resize-none"
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    />
                                </div>

                                <button 
                                    disabled={status === "loading"}
                                    className="btn-primary w-full rounded-sm py-4 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-3 disabled:opacity-50"
                                >
                                    {status === "loading" ? "Processing..." : "Send Inquiry →"}
                                </button>

                                {status === "success" && <p className="text-green-500 text-center text-[10px] font-bold uppercase tracking-widest">Sent successfully!</p>}
                                {status === "error" && <p className="text-red-500 text-center text-[10px] font-bold uppercase tracking-widest">Error sending inquiry.</p>}
                            </form>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </main>
    );
}
