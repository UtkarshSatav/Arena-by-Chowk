"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const experiences = [
    {
        image: "/gaming_arcade.jpg",
        tag: "Play",
        title: "Gaming & Entertainment",
        sub: "Play Beyond the Ordinary",
        desc: "The gaming and entertainment zones at ARENAA bring excitement and energy to the destination. Designed for both youth and families, these spaces feature interactive gaming experiences and entertainment activities that encourage friendly competition and social engagement.",
        highlights: [
            { icon: "sports_esports", text: "Arcade Games" },
            { icon: "videogame_asset", text: "Skill-Based Entertainment" },
            { icon: "family_restroom", text: "Family-Friendly" },
            { icon: "groups", text: "Group Gaming" },
        ],
        accent: "#00F0FF",
        side: "left",
    },
    {
        image: "/foodcourt.png",
        tag: "Eat",
        title: "Food & Dining",
        sub: "A Destination for Food Lovers",
        desc: "Food is at the heart of the ARENAA experience. Our destinations feature curated food courts, themed restaurants, and casual dining spaces that bring together a variety of cuisines in a lively atmosphere designed for gatherings and celebrations.",
        highlights: [
            { icon: "restaurant", text: "Curated Food Courts" },
            { icon: "local_dining", text: "Themed Restaurants" },
            { icon: "coffee", text: "Casual Dining" },
            { icon: "people", text: "Social Dining Spaces" },
        ],
        accent: "#FFB800",
        side: "right",
    },
    {
        image: "/govindam_dish.jpg",
        tag: "Experience",
        title: "Govindam – Cultural Dining",
        sub: "Where Culture Meets Cuisine",
        desc: "Govindam by CHOWK is a theme-based cultural dining concept inspired by India's rich spiritual and culinary heritage. Focused on satvik vegetarian cuisine, Govindam offers a peaceful and culturally immersive dining experience that celebrates traditional Indian hospitality.",
        highlights: [
            { icon: "temple_hindu", text: "Satvik Cuisine" },
            { icon: "spa", text: "Cultural Ambience" },
            { icon: "explore", text: "Heritage Dining" },
            { icon: "family_restroom", text: "All Ages Welcome" },
        ],
        accent: "#4ADE80",
        side: "left",
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="py-28"
            style={{ background: "var(--surface-dark)" }}
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-3 mb-5">
                        <span className="h-px w-8" style={{ background: "#FFB800" }} />
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: "#FFB800" }}>
                            Experiences
                        </span>
                        <span className="h-px w-8" style={{ background: "#FFB800" }} />
                    </div>
                    <h2
                        className="font-black uppercase text-white leading-none"
                        style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "clamp(40px, 6vw, 80px)",
                        }}
                    >
                        Eat • Play
                        <br />
                        <span className="gradient-text italic">Celebrate.</span>
                    </h2>
                </div>

                {/* Experience blocks */}
                <div className="space-y-32">
                    {experiences.map((exp, i) => (
                        <FadeIn key={i} delay={0.2} direction="up" fullWidth>
                            <div
                                className={`flex flex-col ${exp.side === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
                                    } items-center gap-12 lg:gap-20`}
                            >
                                {/* Image */}
                                <div className="w-full lg:w-1/2 relative">
                                    <div
                                        className="relative overflow-hidden rounded-sm group img-hud-outer"
                                        style={{
                                            border: `1px solid ${exp.accent}25`,
                                            boxShadow: `0 20px 80px -20px ${exp.accent}15`,
                                        }}
                                    >
                                        <Image
                                            src={exp.image}
                                            alt={exp.title}
                                            width={800}
                                            height={500}
                                            className="w-full h-80 lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Overlay tag */}
                                        <div className="absolute top-5 left-5">
                                            <span
                                                className="text-[9px] font-bold tracking-[0.3em] uppercase px-3 py-1.5"
                                                style={{
                                                    background: exp.accent,
                                                    color: "var(--text-inverse)",
                                                }}
                                            >
                                                {exp.tag}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="w-full lg:w-1/2">
                                    <p
                                        className="text-[10px] font-bold tracking-[0.4em] uppercase mb-4"
                                        style={{ color: exp.accent }}
                                    >
                                        {exp.sub}
                                    </p>
                                    <h3
                                        className="font-black uppercase mb-6 leading-tight"
                                        style={{
                                            fontFamily: "Montserrat, sans-serif",
                                            fontSize: "clamp(32px, 4vw, 48px)",
                                            color: "var(--text-main)",
                                        }}
                                    >
                                        {exp.title}
                                    </h3>
                                    <p
                                        className="text-base leading-relaxed mb-10"
                                        style={{ color: "rgba(var(--glass-rgb),0.65)" }}
                                    >
                                        {exp.desc}
                                    </p>

                                    {/* Highlights grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        {exp.highlights.map((h, j) => (
                                            <div
                                                key={j}
                                                className="flex items-center gap-3 p-4 rounded-sm"
                                                style={{ background: "rgba(var(--glass-rgb),0.03)", border: "1px solid rgba(var(--glass-rgb),0.06)" }}
                                            >
                                                <span
                                                    className="material-symbols-outlined text-xl"
                                                    style={{ color: exp.accent }}
                                                >
                                                    {h.icon}
                                                </span>
                                                <span className="text-xs font-bold tracking-wide uppercase" style={{ color: "rgba(var(--glass-rgb),0.7)" }}>
                                                    {h.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
