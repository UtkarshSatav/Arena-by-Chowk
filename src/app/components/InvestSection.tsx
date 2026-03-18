"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";

const partnerTypes = [
    {
        title: "Land Owner",
        icon: "landscape",
        description: "Owns property on high-traffic highway corridors or urban lifestyle hubs.",
        benefit: "High-yield long-term revenue share & site premiumization.",
    },
    {
        title: "Developer / Builder",
        icon: "apartment",
        description: "Executing large-scale infrastructure projects or commercial complexes.",
        benefit: "Integration of ARENAA as a signature lifestyle anchor component.",
    },
    {
        title: "Institutional Investor",
        icon: "account_balance",
        description: "Looking for stable, high-ROI assets in the leisure infrastructure sector.",
        benefit: "Scalable investment model with expert operational management.",
    },
];

export default function InvestSection() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");
        setTimeout(() => setFormStatus("success"), 1500);
    };

    return (
        <section
            id="partner"
            className="py-28 relative overflow-hidden"
            style={{ background: "var(--bg-color)" }}
        >
            <div className="absolute inset-0 z-0">
                <Image
                    src="/render_ext.jpg"
                    alt="ARENAA Exterior Night"
                    fill
                    className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/95" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-3 mb-5">
                        <span className="h-px w-8" style={{ background: "#FFB800" }} />
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: "#FFB800" }}>
                            Partner With Us
                        </span>
                        <span className="h-px w-8" style={{ background: "#FFB800" }} />
                    </div>
                    <h2
                        className="font-black uppercase text-white leading-tight"
                        style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "clamp(32px, 5vw, 60px)",
                        }}
                    >
                        Own The Highway.
                        <br />
                        <span className="gradient-text">Secure The Returns.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Left: Partner Types */}
                    <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {partnerTypes.map((type, i) => (
                            <FadeIn key={i} delay={0.2 * i} direction="up" fullWidth>
                                <div className="glass-card feature-card p-10 h-full border-white/5 bg-white/[0.02] flex flex-col gap-6 group hover:border-[#FFB800]/30 transition-all duration-500">
                                    <div className="w-14 h-14 rounded-sm flex items-center justify-center border border-white/10 group-hover:border-[#FFB800]/50 transition-all">
                                        <span className="material-symbols-outlined text-2xl text-[#FFB800]">
                                            {type.icon}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-black text-white uppercase" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                        {type.title}
                                    </h3>
                                    <p className="text-sm text-white/50 leading-relaxed">
                                        {type.description}
                                    </p>
                                    <div className="mt-auto pt-6 border-t border-white/5">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#FFB800] mb-2">Benefit</p>
                                        <p className="text-xs font-bold text-white/70">{type.benefit}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    {/* Right: Contact Form (Full Width) */}
                    <FadeIn delay={0.6} direction="up" fullWidth className="lg:col-span-12">
                        <div className="glass-card p-10 lg:p-16 border-[#FFB800]/20 bg-black/40 relative">
                            <div className="max-w-3xl mx-auto">
                                <h3 className="text-3xl font-black text-white uppercase mb-8 text-center" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                    Strategic Inquiry
                                </h3>
                                
                                {formStatus === "success" ? (
                                    <div className="py-20 text-center animate-in fade-in zoom-in duration-500">
                                        <div className="w-20 h-20 bg-[#FFB800]/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#FFB800]/50">
                                            <span className="material-symbols-outlined text-[#FFB800] text-4xl">check</span>
                                        </div>
                                        <h4 className="text-2xl font-black text-white uppercase mb-4">Request Received</h4>
                                        <p className="text-white/50">Our partnership team will get in touch shortly.</p>
                                        <button 
                                            onClick={() => setFormStatus("idle")}
                                            className="mt-10 text-[10px] font-bold uppercase tracking-widest text-[#FFB800] hover:underline"
                                        >
                                            Submit Another Inquiry
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full bg-white/5 border border-white/10 p-5 text-white focus:outline-none focus:border-[#FFB800] transition-colors rounded-sm"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                className="w-full bg-white/5 border border-white/10 p-5 text-white focus:outline-none focus:border-[#FFB800] transition-colors rounded-sm"
                                                placeholder="email@example.com"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Phone Number</label>
                                            <input
                                                type="tel"
                                                required
                                                className="w-full bg-white/5 border border-white/10 p-5 text-white focus:outline-none focus:border-[#FFB800] transition-colors rounded-sm"
                                                placeholder="+91"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Partner Type</label>
                                            <select className="w-full bg-white/5 border border-white/10 p-5 text-white focus:outline-none focus:border-[#FFB800] transition-colors rounded-sm appearance-none">
                                                <option className="bg-black">Land Owner</option>
                                                <option className="bg-black">Developer / Builder</option>
                                                <option className="bg-black">Institutional Investor</option>
                                            </select>
                                        </div>
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Message / Location Interest</label>
                                            <textarea
                                                rows={4}
                                                className="w-full bg-white/5 border border-white/10 p-5 text-white focus:outline-none focus:border-[#FFB800] transition-colors rounded-sm resize-none"
                                                placeholder="Tell us about your property or investment interest..."
                                            />
                                        </div>
                                        <div className="md:col-span-2 text-center pt-6">
                                            <button
                                                type="submit"
                                                disabled={formStatus === "submitting"}
                                                className="btn-primary rounded-sm px-16 py-6 text-xs font-black tracking-widest uppercase disabled:opacity-50"
                                            >
                                                {formStatus === "submitting" ? "Processing..." : "Submit Inquiry →"}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
