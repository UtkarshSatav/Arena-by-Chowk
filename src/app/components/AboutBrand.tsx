"use client";

export default function AboutBrand() {
    return (
        <section
            className="py-28"
            style={{ background: "#0E0E0E" }}
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 mb-5">
                        <span className="h-px w-8" style={{ background: "#FFB800" }} />
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: "#FFB800" }}>
                            Brand & Promoter Strength
                        </span>
                        <span className="h-px w-8" style={{ background: "#FFB800" }} />
                    </div>
                    <h2
                        className="font-black uppercase text-white"
                        style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "clamp(28px, 4vw, 48px)",
                        }}
                    >
                        Organized. Scalable.
                        <br />
                        <span className="gradient-text">Revenue-Optimized.</span>
                    </h2>
                </div>

                {/* Chowk Entertainment info */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    <div
                        className="glass-card rounded-sm p-10"
                        style={{ borderColor: "rgba(255,184,0,0.15)" }}
                    >
                        <div
                            className="text-3xl font-black uppercase mb-1"
                            style={{ fontFamily: "Montserrat, sans-serif", color: "#FFB800" }}
                        >
                            ARENAA
                        </div>
                        <div
                            className="text-[11px] tracking-[0.4em] font-bold uppercase mb-6"
                            style={{ color: "rgba(255,184,0,0.6)" }}
                        >
                            by CHOWK
                        </div>
                        <p
                            className="text-sm leading-relaxed mb-8"
                            style={{ color: "rgba(255,255,255,0.55)" }}
                        >
                            Developed by <strong className="text-white">Chowk Entertainment Pvt. Ltd.</strong>, ARENAA is backed
                            by a leadership team with deep expertise across real estate, cinema, aviation, and retail.
                            The team brings multi-sector experience in building and scaling high-footfall destination formats.
                        </p>
                        <div className="space-y-3">
                            {[
                                "Strategic growth professionals",
                                "Multi-sector exposure: Real Estate, Cinema, Aviation, Retail",
                                "Experience in high-footfall destination formats",
                                "Scalable, replicable operational playbook",
                            ].map((point, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <span
                                        className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                                        style={{ background: "#FFB800" }}
                                    />
                                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                                        {point}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        {[
                            { icon: "restaurant", label: "Food Court", desc: "Multi-cuisine. Centralized kitchen." },
                            { icon: "sports_esports", label: "Game Zone", desc: "High-margin anchor. Digital payments." },
                            { icon: "storefront", label: "Food Carts", desc: "Impulse retail. High conversion." },
                            { icon: "park", label: "Leisure", desc: "Landscaped. Family-friendly." },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="glass-card feature-card rounded-sm p-6 flex flex-col items-center text-center"
                                style={{ borderColor: "rgba(255,255,255,0.06)" }}
                            >
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                                    style={{ background: "rgba(255,184,0,0.1)" }}
                                >
                                    <span className="material-symbols-outlined text-xl" style={{ color: "#FFB800" }}>
                                        {item.icon}
                                    </span>
                                </div>
                                <p className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                                    {item.label}
                                </p>
                                <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final summary */}
                <div
                    className="rounded-sm py-12 px-8 md:px-16 text-center"
                    style={{ background: `linear-gradient(135deg, rgba(255,184,0,0.06) 0%, rgba(0,0,0,0) 100%)`, border: "1px solid rgba(255,184,0,0.15)" }}
                >
                    <p className="text-[10px] font-bold tracking-[0.4em] uppercase mb-4" style={{ color: "#FFB800" }}>
                        Final Summary
                    </p>
                    <h3
                        className="font-black uppercase text-white text-2xl md:text-3xl mb-8"
                        style={{ fontFamily: "Montserrat, sans-serif", lineHeight: "1.15" }}
                    >
                        ARENAA Is Not Just A Game Zone.
                        <br />
                        Not Just A Food Court.
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {[
                            "🏗 Highway Leisure Asset",
                            "🍽 Food + Gaming Hybrid",
                            "💰 15% Gross Revenue Share",
                            "📍 Destination-Driven",
                            "👨‍👩‍👧‍👦 Family-Friendly",
                            "📈 ~23% Annual ROI",
                        ].map((tag, i) => (
                            <span
                                key={i}
                                className="text-xs font-bold px-4 py-2 uppercase tracking-wider"
                                style={{
                                    background: "rgba(255,184,0,0.08)",
                                    border: "1px solid rgba(255,184,0,0.2)",
                                    color: "#FFB800",
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <a href="#invest">
                        <button className="btn-primary rounded-sm px-10 py-4">
                            Partner With ARENAA →
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}
