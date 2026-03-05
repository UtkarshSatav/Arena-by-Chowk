"use client";

import FadeIn from "./FadeIn";

const advantages = [
    {
        icon: "trending_up",
        title: "Multi-Revenue Model",
        desc: "Food + Gaming + Impulse Retail. Three revenue channels from a single asset, reducing dependency on any one stream.",
        accent: "#FFB800",
    },
    {
        icon: "percent",
        title: "Higher Revenue Share",
        desc: "15% gross revenue share vs. the traditional 6–8% offered by highway brands. Significantly better for developers.",
        accent: "#FFB800",
    },
    {
        icon: "construction",
        title: "Controlled Capex",
        desc: "Lower capex compared to branded formats like Haldiram's or Amrik Sukhdev, with higher ROI through gaming margins.",
        accent: "#FFB800",
    },
    {
        icon: "lock",
        title: "Long Lock-In Security",
        desc: "Developer asset ownership with long-term operational agreements. Annuity-style income from a structured leisure asset.",
        accent: "#FFB800",
    },
    {
        icon: "place",
        title: "Destination Positioning",
        desc: "Captures weekend destination traffic (up to 40% of footfall) — not just transit travelers passing through.",
        accent: "#FFB800",
    },
    {
        icon: "family_restroom",
        title: "Family-Centric Format",
        desc: "Alcohol-free, hygienic, safe for all ages. Designed to appeal to India's largest consumer segment — the Indian family.",
        accent: "#FFB800",
    },
];

const tiers = [
    { name: "Tier 3: Dhabas", desc: "Traditional unorganized roadside stops", level: 1 },
    { name: "Tier 2: Haldiram's", desc: "Branded dining, no entertainment", level: 2 },
    { name: "Tier 1: Amrik Sukhdev", desc: "Premium dining, single revenue stream", level: 3 },
    { name: "ARENAA by CHOWK", desc: "Food + Gaming + Leisure. Multi-revenue destination", level: 4, highlight: true },
];

export default function WhyArenaa() {
    return (
        <section
            id="why"
            className="py-28"
            style={{ background: "var(--surface-dark)" }}
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="max-w-3xl mb-20">
                    <div className="flex items-center gap-3 mb-5">
                        <span className="h-px w-10" style={{ background: "#FFB800" }} />
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: "#FFB800" }}>
                            Strategic Advantage
                        </span>
                    </div>
                    <h2
                        className="font-black uppercase leading-[0.9] mb-6"
                        style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "clamp(32px, 5vw, 56px)",
                        }}
                    >
                        <span className="text-white">Why ARENAA</span>
                        <br />
                        <span className="gradient-text">Wins.</span>
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(var(--glass-rgb),0.5)" }}>
                        ARENAA fills a clear structural gap in India&apos;s highway ecosystem with a
                        model that is replicable, scalable, and designed to out-earn alternatives
                        across every key metric.
                    </p>
                </div>

                {/* Advantages grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {advantages.map((adv, i) => (
                        <FadeIn key={i} delay={0.1 * i} direction="up" fullWidth>
                            <div
                                className="glass-card feature-card p-8 rounded-sm group h-full"
                                style={{ borderColor: "rgba(var(--glass-rgb),0.06)" }}
                            >
                                <div
                                    className="w-12 h-12 rounded-sm flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                                    style={{ background: "rgba(255,184,0,0.1)" }}
                                >
                                    <span
                                        className="material-symbols-outlined text-xl"
                                        style={{ color: "#FFB800" }}
                                    >
                                        {adv.icon}
                                    </span>
                                </div>
                                <h3
                                    className="font-bold uppercase tracking-wider mb-3 text-sm text-white"
                                >
                                    {adv.title}
                                </h3>
                                <p className="text-xs leading-relaxed" style={{ color: "rgba(var(--glass-rgb),0.45)" }}>
                                    {adv.desc}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Competitive tier ladder */}
                <FadeIn delay={0.2} direction="up" fullWidth>
                    <div
                        className="rounded-sm p-10 md:p-14"
                        style={{ background: "rgba(255,184,0,0.03)", border: "1px solid rgba(255,184,0,0.12)" }}
                    >
                        <div className="flex flex-col lg:flex-row gap-12 items-start">
                            <div className="lg:w-1/3">
                                <h3
                                    className="font-black uppercase text-white mb-4 text-2xl"
                                    style={{ fontFamily: "Montserrat, sans-serif" }}
                                >
                                    Competitive Landscape
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: "rgba(var(--glass-rgb),0.45)" }}>
                                    ARENAA sits at the very top of the highway dining & leisure ecosystem,
                                    combining multi-revenue streams that no traditional format offers.
                                </p>
                            </div>

                            <div className="lg:w-2/3 w-full space-y-4">
                                {tiers.map((tier, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-5 p-5 rounded-sm transition-all duration-300"
                                        style={{
                                            background: tier.highlight
                                                ? "rgba(255,184,0,0.08)"
                                                : "rgba(var(--glass-rgb),0.02)",
                                            border: `1px solid ${tier.highlight ? "rgba(255,184,0,0.3)" : "rgba(var(--glass-rgb),0.05)"}`,
                                        }}
                                    >
                                        {/* Level bar */}
                                        <div className="flex gap-1 shrink-0">
                                            {[1, 2, 3, 4].map((level) => (
                                                <div
                                                    key={level}
                                                    className="w-2 h-6 rounded-sm"
                                                    style={{
                                                        background:
                                                            level <= tier.level
                                                                ? tier.highlight
                                                                    ? "#FFB800"
                                                                    : "rgba(var(--glass-rgb),0.3)"
                                                                : "rgba(var(--glass-rgb),0.06)",
                                                    }}
                                                />
                                            ))}
                                        </div>
                                        <div>
                                            <p
                                                className="font-bold text-sm uppercase tracking-wide"
                                                style={{ color: tier.highlight ? "#FFB800" : "rgba(var(--glass-rgb),0.7)" }}
                                            >
                                                {tier.name}
                                            </p>
                                            <p className="text-xs" style={{ color: "rgba(var(--glass-rgb),0.35)" }}>
                                                {tier.desc}
                                            </p>
                                        </div>
                                        {tier.highlight && (
                                            <div className="ml-auto shrink-0">
                                                <span
                                                    className="text-[9px] font-bold tracking-widest uppercase px-3 py-1.5"
                                                    style={{ background: "#FFB800", color: "var(--text-inverse)" }}
                                                >
                                                    ARENAA
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
