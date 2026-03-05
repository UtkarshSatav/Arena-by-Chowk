"use client";

const tickerItems = [
    "🍽 Multi-Cuisine Food Court",
    "🎮 Indoor Game Zone",
    "🎯 VR & Arcade",
    "🌿 Landscaped Open Spaces",
    "💰 15% Gross Revenue Share",
    "📈 23% Annual ROI",
    "⏳ 4.3 Year Payback",
    "👨‍👩‍👧‍👦 Family-Friendly Format",
    "🏗 ₹11 Crore Total Capex",
    "🚗 Highway Destination",
];

export default function Ticker() {
    const doubled = [...tickerItems, ...tickerItems];

    return (
        <div
            className="relative overflow-hidden py-4 border-y"
            style={{
                background: "#FFB800",
                borderColor: "rgba(0,0,0,0.1)",
            }}
        >
            <div className="ticker-track">
                {doubled.map((item, i) => (
                    <span
                        key={i}
                        className="inline-flex items-center gap-3 px-8 text-sm font-bold tracking-widest uppercase whitespace-nowrap"
                        style={{ color: "#000" }}
                    >
                        {item}
                        <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
                    </span>
                ))}
            </div>
        </div>
    );
}
