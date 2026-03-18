"use client";

const tickerItems = [
    "🍽 Multi-Cuisine Food Court",
    "🎮 Interactive Gaming",
    "🕌 Govindam Cultural Dining",
    "🌿 Social Gathering Spaces",
    "🚗 Next-Gen Highway Destination",
    "👨‍👩‍👧‍👦 Family-Friendly Entertainment",
    "🏗 Integrated Social Hubs",
    "✨ Memorable Experiences",
];

export default function Ticker() {
    const doubled = [...tickerItems, ...tickerItems];

    return (
        <div
            className="relative overflow-hidden py-5 border-y"
            style={{
                background: "#FFB800",
                borderColor: "rgba(var(--inverse-glass-rgb),0.1)",
            }}
        >
            <div className="ticker-track">
                {doubled.map((item, i) => (
                    <span
                        key={i}
                        className="inline-flex items-center gap-3 px-10 text-[11px] font-black tracking-[0.2em] uppercase whitespace-nowrap"
                        style={{ color: "#000" }}
                    >
                        {item}
                        <span className="w-1.5 h-1.5 rounded-full bg-black/30" />
                    </span>
                ))}
            </div>
        </div>
    );
}
