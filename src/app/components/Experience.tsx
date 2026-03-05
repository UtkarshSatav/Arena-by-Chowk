"use client";

import Image from "next/image";

const experiences = [
    {
        image: "/gaming.png",
        tag: "Entertainment",
        title: "Game Zone",
        sub: "The High-Margin Anchor",
        desc: "Arcade + VR + skill-based games. Ticket-based & digital payments. Low working capital, high margin model designed to maximise dwell time and per-visit revenue.",
        highlights: [
            { icon: "vrpano", text: "VR Experiences" },
            { icon: "videogame_asset", text: "60+ Arcade Units" },
            { icon: "sports_esports", text: "Skill-Based Games" },
            { icon: "payments", text: "NFC/Digital Payments" },
        ],
        revenue: "₹46.5L",
        revenueLabel: "Monthly Est.",
        accent: "#00F0FF",
        side: "left",
    },
    {
        image: "/foodcourt.png",
        tag: "Dining",
        title: "Food Court",
        sub: "The High-Volume Engine",
        desc: "A centralized kitchen with semi-circular high-efficiency service counter offering multi-cuisine fast-turnover dishes at value pricing. Alcohol-free, family-friendly, hygienic.",
        highlights: [
            { icon: "restaurant", text: "Multi-Cuisine Menu" },
            { icon: "local_fire_department", text: "Centralized Kitchen" },
            { icon: "people", text: "350+ Capacity" },
            { icon: "attach_money", text: "Value Pricing" },
        ],
        revenue: "₹95.9L",
        revenueLabel: "Monthly Est.",
        accent: "#FFB800",
        side: "right",
    },
    {
        image: "/landscape.png",
        tag: "Leisure",
        title: "Open Leisure Spaces",
        sub: "The Differentiator",
        desc: "Landscaped outdoor zones providing a unique rest and recreation environment that converts a functional highway stop into a memorable destination experience for families.",
        highlights: [
            { icon: "park", text: "Landscaped Gardens" },
            { icon: "family_restroom", text: "Family Zones" },
            { icon: "outdoor_grill", text: "Outdoor Seating" },
            { icon: "star", text: "Premium Experience" },
        ],
        revenue: "1–1.5 Ac",
        revenueLabel: "Land Requirement",
        accent: "#4ADE80",
        side: "left",
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="py-28"
            style={{ background: "#111111" }}
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-3 mb-5">
                        <span className="h-px w-8" style={{ background: "#FFB800" }} />
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: "#FFB800" }}>
                            The ARENAA Experience
                        </span>
                        <span className="h-px w-8" style={{ background: "#FFB800" }} />
                    </div>
                    <h2
                        className="font-black uppercase text-white"
                        style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "clamp(32px, 5vw, 56px)",
                            lineHeight: "0.95",
                        }}
                    >
                        Three Experiences.
                        <br />
                        <span className="gradient-text">One Destination.</span>
                    </h2>
                </div>

                {/* Experience blocks */}
                <div className="space-y-24">
                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            className={`flex flex-col ${exp.side === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
                                } items-center gap-12 lg:gap-20`}
                        >
                            {/* Image */}
                            <div className="w-full lg:w-1/2 relative">
                                <div
                                    className="relative overflow-hidden rounded-sm"
                                    style={{
                                        border: `1px solid ${exp.accent}25`,
                                        boxShadow: `0 0 60px ${exp.accent}15`,
                                    }}
                                >
                                    <Image
                                        src={exp.image}
                                        alt={exp.title}
                                        width={800}
                                        height={500}
                                        className="w-full h-72 lg:h-96 object-cover img-hover"
                                    />
                                    {/* Overlay tag */}
                                    <div className="absolute top-5 left-5">
                                        <span
                                            className="text-[9px] font-bold tracking-[0.3em] uppercase px-3 py-1.5"
                                            style={{
                                                background: exp.accent,
                                                color: exp.accent === "#FFB800" ? "#000" : "#000",
                                            }}
                                        >
                                            {exp.tag}
                                        </span>
                                    </div>
                                    {/* Revenue badge */}
                                    <div
                                        className="absolute bottom-5 right-5 hud-border px-5 py-3"
                                        style={{
                                            background: "rgba(0,0,0,0.7)",
                                            backdropFilter: "blur(10px)",
                                            borderColor: `${exp.accent}50`,
                                        }}
                                    >
                                        <p
                                            className="stat-number text-xl"
                                            style={{ color: exp.accent }}
                                        >
                                            {exp.revenue}
                                        </p>
                                        <p
                                            className="text-[9px] uppercase tracking-widest"
                                            style={{ color: "rgba(255,255,255,0.4)" }}
                                        >
                                            {exp.revenueLabel}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="w-full lg:w-1/2">
                                <p
                                    className="text-[9px] font-bold tracking-[0.4em] uppercase mb-3"
                                    style={{ color: exp.accent }}
                                >
                                    {exp.sub}
                                </p>
                                <h3
                                    className="font-black uppercase mb-5"
                                    style={{
                                        fontFamily: "Montserrat, sans-serif",
                                        fontSize: "clamp(28px, 3.5vw, 44px)",
                                        color: "#fff",
                                        lineHeight: "1",
                                    }}
                                >
                                    {exp.title}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed mb-10"
                                    style={{ color: "rgba(255,255,255,0.5)" }}
                                >
                                    {exp.desc}
                                </p>

                                {/* Highlights grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    {exp.highlights.map((h, j) => (
                                        <div
                                            key={j}
                                            className="flex items-center gap-3 p-4 rounded-sm"
                                            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                                        >
                                            <span
                                                className="material-symbols-outlined text-xl"
                                                style={{ color: exp.accent }}
                                            >
                                                {h.icon}
                                            </span>
                                            <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
                                                {h.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
