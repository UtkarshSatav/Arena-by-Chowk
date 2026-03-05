"use client";

export default function Footer() {
    return (
        <footer
            style={{ background: "var(--text-inverse)", borderTop: "1px solid rgba(var(--glass-rgb),0.05)" }}
        >
            {/* Top CTA strip */}
            <div style={{ background: "#FFB800" }}>
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p
                        className="font-black uppercase text-lg"
                        style={{ fontFamily: "Montserrat, sans-serif", color: "var(--text-inverse)" }}
                    >
                        Ready to invest in India&apos;s Highway Future?
                    </p>
                    <a href="#invest">
                        <button
                            className="font-bold uppercase text-sm px-8 py-3 transition-all"
                            style={{
                                background: "var(--text-inverse)",
                                color: "#FFB800",
                                border: "2px solid transparent",
                            }}
                        >
                            Get In Touch →
                        </button>
                    </a>
                </div>
            </div>

            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <a href="#home" className="flex flex-col items-start leading-none mb-6">
                            <span
                                className="text-3xl font-black tracking-tighter text-white uppercase"
                                style={{ fontFamily: "Montserrat, sans-serif" }}
                            >
                                ARENAA
                            </span>
                            <span
                                className="text-[10px] tracking-[0.4em] font-bold uppercase"
                                style={{ color: "#FFB800" }}
                            >
                                by CHOWK
                            </span>
                        </a>
                        <p className="text-xs leading-relaxed max-w-xs" style={{ color: "rgba(var(--glass-rgb),0.4)" }}>
                            India&apos;s premier integrated highway leisure destination. Food + Gaming + Leisure.
                            A structured annuity-style revenue asset for developers.
                        </p>
                        <div className="flex items-center gap-2 mt-4">
                            <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ background: "#00F0FF", animation: "pulse 2s infinite" }}
                            />
                            <span className="text-[9px] uppercase tracking-widest" style={{ color: "rgba(var(--glass-rgb),0.3)" }}>
                                Accepting Partners 2024
                            </span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4
                            className="text-[10px] font-bold uppercase tracking-[0.35em] mb-6"
                            style={{ color: "#FFB800" }}
                        >
                            Explore
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { label: "Home", href: "#home" },
                                { label: "Business Concept", href: "#concept" },
                                { label: "Experience", href: "#experience" },
                                { label: "Why ARENAA", href: "#why" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-xs transition-colors"
                                        style={{ color: "rgba(var(--glass-rgb),0.45)" }}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Invest */}
                    <div>
                        <h4
                            className="text-[10px] font-bold uppercase tracking-[0.35em] mb-6"
                            style={{ color: "#FFB800" }}
                        >
                            Invest
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { label: "Financial Summary", href: "#financials" },
                                { label: "Revenue Model", href: "#financials" },
                                { label: "Partner With Us", href: "#invest" },
                                { label: "Request Prospectus", href: "#invest" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-xs transition-colors"
                                        style={{ color: "rgba(var(--glass-rgb),0.45)" }}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4
                            className="text-[10px] font-bold uppercase tracking-[0.35em] mb-6"
                            style={{ color: "#FFB800" }}
                        >
                            Contact
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { icon: "mail", text: "invest@arenaa-chowk.com" },
                                { icon: "phone", text: "+91 9876 543 210" },
                                { icon: "location_on", text: "Mumbai, Maharashtra, India" },
                                { icon: "business", text: "Chowk Entertainment Pvt. Ltd." },
                            ].map((c, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span
                                        className="material-symbols-outlined text-base mt-0.5"
                                        style={{ color: "#FFB800" }}
                                    >
                                        {c.icon}
                                    </span>
                                    <span className="text-[11px]" style={{ color: "rgba(var(--glass-rgb),0.45)" }}>
                                        {c.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div
                    className="border-t mb-8"
                    style={{ borderColor: "rgba(var(--glass-rgb),0.05)" }}
                />

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p
                        className="text-[10px] uppercase tracking-widest"
                        style={{ color: "rgba(var(--glass-rgb),0.25)" }}
                    >
                        © 2024 ARENAA by Chowk Entertainment Pvt. Ltd. All Rights Reserved.
                    </p>
                    <div className="flex gap-6">
                        {[
                            { icon: "language", label: "Website" },
                            { icon: "alternate_email", label: "Email" },
                            { icon: "call", label: "Call" },
                        ].map((s, i) => (
                            <a
                                key={i}
                                href="#"
                                aria-label={s.label}
                                className="transition-colors"
                                style={{ color: "rgba(var(--glass-rgb),0.25)" }}
                            >
                                <span className="material-symbols-outlined text-xl">{s.icon}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
