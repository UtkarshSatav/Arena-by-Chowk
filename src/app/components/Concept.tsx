"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const pillars = [
    {
        icon: "restaurant",
        color: "#FFB800",
        label: "Food Court",
        desc: "Multi-cuisine centralized kitchen with semi-circular high-efficiency service counter. North Indian, South Indian & Continental.",
        stat: "350+",
        statLabel: "Seating Capacity",
    },
    {
        icon: "sports_esports",
        color: "#00F0FF",
        label: "Game Zone",
        desc: "Arcade + VR + skill-based games. Ticket-based & digital payments. The high-margin anchor revenue driver.",
        stat: "₹46.5L",
        statLabel: "Monthly Revenue Est.",
    },
    {
        icon: "shopping_cart",
        color: "#FFB800",
        label: "Impulse Food Carts",
        desc: "Strategically placed impulse food carts within the gaming area to maximize per-visit spending.",
        stat: "20,000",
        statLabel: "Built-Up Sq. Ft.",
    },
    {
        icon: "park",
        color: "#00F0FF",
        label: "Open Leisure Spaces",
        desc: "Landscaped outdoor zones for families to relax. A key differentiator that transforms a stop into a destination.",
        stat: "1–1.5",
        statLabel: "Acres Land",
    },
];

export default function Concept() {
    return (
        <section
            id="concept"
            className="py-28"
            style={{ background: "var(--bg-color)" }}
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="max-w-3xl mb-20">
                    <div className="flex items-center gap-3 mb-5">
                        <span className="h-px w-10" style={{ background: "#FFB800" }} />
                        <span
                            className="text-[10px] font-bold tracking-[0.4em] uppercase"
                            style={{ color: "#FFB800" }}
                        >
                            Business Concept
                        </span>
                    </div>
                    <h2
                        className="font-black uppercase leading-[0.9] mb-6"
                        style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "clamp(36px, 5vw, 60px)",
                        }}
                    >
                        <span className="text-white">Not A Pitstop.</span>
                        <br />
                        <span className="gradient-text">A Destination.</span>
                    </h2>
                    <p className="text-base leading-relaxed" style={{ color: "rgba(var(--glass-rgb),0.5)" }}>
                        ARENAA by CHOWK is an integrated highway leisure and lifestyle destination.
                        Unlike traditional dhabas or standalone restaurants, ARENAA is positioned as a
                        destination-driven stop — where travelers choose to come, not just pass through.
                    </p>
                </div>

                {/* 4 Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {pillars.map((p, i) => (
                        <FadeIn key={i} delay={0.1 * i} direction="up" fullWidth>
                            <div
                                className="glass-card feature-card p-8 rounded-sm h-full"
                                style={{ borderColor: "rgba(var(--glass-rgb),0.07)" }}
                            >
                                {/* Icon + mod label */}
                                <div className="flex justify-between items-start mb-8">
                                    <span
                                        className="material-symbols-outlined text-4xl"
                                        style={{ color: p.color, fontVariationSettings: "'FILL' 0" }}
                                    >
                                        {p.icon}
                                    </span>
                                    <span
                                        className="text-[9px] font-bold font-mono border px-2 py-1 uppercase tracking-wider"
                                        style={{ color: p.color, borderColor: `${p.color}40` }}
                                    >
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                <h3
                                    className="text-base font-bold uppercase tracking-wider mb-3"
                                    style={{ color: "var(--text-main)" }}
                                >
                                    {p.label}
                                </h3>
                                <p
                                    className="text-xs leading-relaxed mb-8"
                                    style={{ color: "rgba(var(--glass-rgb),0.45)" }}
                                >
                                    {p.desc}
                                </p>

                                {/* Stat */}
                                <div
                                    className="pt-5 border-t"
                                    style={{ borderColor: "rgba(var(--glass-rgb),0.06)" }}
                                >
                                    <p className="stat-number text-2xl" style={{ color: p.color }}>
                                        {p.stat}
                                    </p>
                                    <p
                                        className="text-[9px] uppercase tracking-widest mt-1"
                                        style={{ color: "rgba(var(--glass-rgb),0.35)" }}
                                    >
                                        {p.statLabel}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Positioning strip */}
                <FadeIn delay={0.2} direction="up" fullWidth>
                    <div
                        className="rounded-sm p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10"
                        style={{ background: "rgba(255,184,0,0.04)", border: "1px solid rgba(255,184,0,0.15)" }}
                    >
                        <div className="max-w-xl">
                            <p className="text-[10px] font-bold tracking-[0.4em] uppercase mb-4" style={{ color: "#FFB800" }}>
                                Market Gap ARENAA Fills
                            </p>
                            <h3
                                className="font-black uppercase text-2xl md:text-3xl text-white mb-4"
                                style={{ fontFamily: "Montserrat, sans-serif" }}
                            >
                                India&apos;s Highways Lack Structured
                                <br />
                                <span style={{ color: "#FFB800" }}>
                                    Entertainment + Dining Hubs
                                </span>
                            </h3>
                            <p className="text-sm leading-relaxed" style={{ color: "rgba(var(--glass-rgb),0.5)" }}>
                                Highway dining is shifting from a &quot;travel necessity&quot; to a{" "}
                                <span style={{ color: "#FFB800" }}>&quot;weekend destination experience.&quot;</span>{" "}
                                Up to 40% of weekend footfall in major hubs is now destination-driven.
                                ARENAA is designed to capture that shift.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 shrink-0">
                            {[
                                { icon: "family_restroom", text: "Family-Safe Environment" },
                                { icon: "beach_access", text: "Alcohol-Free Format" },
                                { icon: "verified", text: "Hygienic & Branded" },
                                { icon: "route", text: "Highway-Native Design" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <span
                                        className="material-symbols-outlined text-xl"
                                        style={{ color: "#FFB800" }}
                                    >
                                        {item.icon}
                                    </span>
                                    <span className="text-sm font-medium" style={{ color: "rgba(var(--glass-rgb),0.7)" }}>
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
