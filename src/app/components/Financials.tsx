"use client";

const capexData = [
    { label: "Civil & Interior", value: "₹6 Cr", percent: 55, color: "#FFB800" },
    { label: "Game Equipment", value: "₹2 Cr", percent: 18, color: "#FFC933" },
    { label: "Kitchen & Furniture", value: "₹1.5 Cr", percent: 14, color: "#D97706" },
    { label: "Landscaping", value: "₹1.5 Cr", percent: 14, color: "#92400E" },
];

const revenueStreams = [
    { label: "Food Court", monthly: "₹95.9 Lakhs", icon: "restaurant", color: "#FFB800", percent: 67 },
    { label: "Game Zone", monthly: "₹46.5 Lakhs", icon: "sports_esports", color: "#00F0FF", percent: 33 },
];

const comparisons = [
    { metric: "Annual ROI", arenaa: "~23%", realEstate: "3–5%", malls: "6–8%", highlight: true },
    { metric: "Revenue Share", arenaa: "15% Gross", realEstate: "−", malls: "6–8% Gross", highlight: false },
    { metric: "Payback Period", arenaa: "~4.3 Years", realEstate: "15–20 Years", malls: "8–12 Years", highlight: false },
    { metric: "Monthly Revenue", arenaa: "₹1.42 Cr", realEstate: "Low", malls: "Variable", highlight: false },
    { metric: "Developer Share", arenaa: "₹2.56 Cr/yr", realEstate: "Low", malls: "Low", highlight: true },
    { metric: "Asset Type", arenaa: "Destination Hub", realEstate: "Passive Yield", malls: "Anchor Dependent", highlight: false },
];

export default function Financials() {
    return (
        <section
            id="financials"
            className="py-28"
            style={{ background: "#070707" }}
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-3 mb-5">
                        <span className="h-px w-8" style={{ background: "#FFB800" }} />
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: "#FFB800" }}>
                            Financial Snapshot
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
                        Structured Returns.
                        <br />
                        <span className="gradient-text">Data-Backed Projections.</span>
                    </h2>
                </div>

                {/* Top KPI cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
                    {[
                        { label: "Total Capex", value: "₹11 Cr", sub: "Total investment required", icon: "account_balance" },
                        { label: "Monthly Revenue", value: "₹1.42 Cr", sub: "Pessimistic projection", icon: "trending_up" },
                        { label: "Annual Dev Share", value: "₹2.56 Cr", sub: "15% of gross revenue", icon: "payments" },
                        { label: "Annual ROI", value: "~23%", sub: "Annuity-style returns", icon: "donut_large" },
                    ].map((k, i) => (
                        <div
                            key={i}
                            className="glass-card feature-card p-7 text-center rounded-sm"
                            style={{ borderColor: "rgba(255,184,0,0.15)" }}
                        >
                            <span
                                className="material-symbols-outlined text-3xl mb-4 block"
                                style={{ color: "#FFB800" }}
                            >
                                {k.icon}
                            </span>
                            <p
                                className="stat-number text-2xl md:text-3xl mb-1"
                                style={{ color: "#FFB800" }}
                            >
                                {k.value}
                            </p>
                            <p className="text-[10px] font-bold uppercase tracking-widest mb-1 text-white">
                                {k.label}
                            </p>
                            <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.35)" }}>
                                {k.sub}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Capex + Revenue split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    {/* Capex breakdown */}
                    <div
                        className="glass-card rounded-sm p-8"
                        style={{ borderColor: "rgba(255,184,0,0.12)" }}
                    >
                        <h3
                            className="font-bold uppercase tracking-wider text-white mb-2"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                            CapEx Allocation
                        </h3>
                        <p className="text-[11px] mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>
                            Total: ₹11 Crore across 4 key components
                        </p>
                        <div className="space-y-6">
                            {capexData.map((c, i) => (
                                <div key={i}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm font-medium text-white">{c.label}</span>
                                        <span className="text-sm font-bold" style={{ color: c.color }}>
                                            {c.value}
                                        </span>
                                    </div>
                                    <div className="progress-bar">
                                        <div
                                            className="progress-fill"
                                            style={{
                                                width: `${c.percent}%`,
                                                background: `linear-gradient(90deg, ${c.color}, ${c.color}99)`,
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Revenue donut chart */}
                    <div
                        className="glass-card rounded-sm p-8"
                        style={{ borderColor: "rgba(255,184,0,0.12)" }}
                    >
                        <h3
                            className="font-bold uppercase tracking-wider text-white mb-2"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                            Monthly Revenue Projection
                        </h3>
                        <p className="text-[11px] mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>
                            Pessimistic case — ₹1.42 Crore/month total
                        </p>

                        {/* SVG Donut */}
                        <div className="flex items-center justify-center gap-12">
                            <div className="relative w-48 h-48 shrink-0">
                                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                                    <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="3.5" />
                                    {/* Food court: 67% */}
                                    <circle
                                        cx="18" cy="18" r="15.9155" fill="transparent"
                                        stroke="#FFB800" strokeWidth="3.5"
                                        strokeDasharray="67 33"
                                        strokeDashoffset="0"
                                        strokeLinecap="butt"
                                    />
                                    {/* Game zone: 33% */}
                                    <circle
                                        cx="18" cy="18" r="15.9155" fill="transparent"
                                        stroke="#00F0FF" strokeWidth="3.5"
                                        strokeDasharray="33 67"
                                        strokeDashoffset="-67"
                                        strokeLinecap="butt"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="stat-number text-xl text-white">₹1.42</span>
                                    <span className="text-[9px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
                                        Crore/Mo
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {revenueStreams.map((r, i) => (
                                    <div key={i}>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="w-3 h-3 rounded-full" style={{ background: r.color }} />
                                            <span className="text-xs font-bold text-white uppercase tracking-wider">
                                                {r.label}
                                            </span>
                                        </div>
                                        <p className="stat-number text-2xl" style={{ color: r.color }}>
                                            {r.monthly}
                                        </p>
                                        <p className="text-[9px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
                                            per month
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comparison table */}
                <div className="glass-card rounded-sm overflow-hidden" style={{ borderColor: "rgba(255,184,0,0.1)" }}>
                    <div className="px-8 py-6 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                        <h3
                            className="font-bold uppercase tracking-wider text-white"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                            ARENAA vs. Alternative Investments
                        </h3>
                        <p className="text-[11px] mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                            How ARENAA stacks up against traditional developer investment options
                        </p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                                    <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: "rgba(255,255,255,0.4)" }}>
                                        Metric
                                    </th>
                                    <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: "#FFB800" }}>
                                        ARENAA Hub
                                    </th>
                                    <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: "rgba(255,255,255,0.35)" }}>
                                        Traditional Real Estate
                                    </th>
                                    <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: "rgba(255,255,255,0.35)" }}>
                                        Retail Mall Units
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisons.map((row, i) => (
                                    <tr
                                        key={i}
                                        style={{
                                            borderBottom: "1px solid rgba(255,255,255,0.04)",
                                            background: row.highlight ? "rgba(255,184,0,0.03)" : "transparent",
                                        }}
                                        className="hover:bg-white/[0.01] transition-colors"
                                    >
                                        <td className="px-6 py-5 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                                            {row.metric}
                                        </td>
                                        <td className="px-6 py-5 text-sm font-bold" style={{ color: row.highlight ? "#FFB800" : "#fff" }}>
                                            {row.arenaa}
                                        </td>
                                        <td className="px-6 py-5 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
                                            {row.realEstate}
                                        </td>
                                        <td className="px-6 py-5 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
                                            {row.malls}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
