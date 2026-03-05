"use client";

import { useState } from "react";

export default function InvestSection() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        interest: "land-owner",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section
            id="invest"
            className="py-28 relative overflow-hidden"
            style={{ background: "#070707" }}
        >
            {/* Background glow */}
            <div
                className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(255,184,0,0.06) 0%, transparent 60%)",
                    filter: "blur(80px)",
                    transform: "translate(30%, -30%)",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left: Info */}
                    <div className="lg:w-1/2">
                        <div className="flex items-center gap-3 mb-5">
                            <span className="h-px w-10" style={{ background: "#FFB800" }} />
                            <span className="text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: "#FFB800" }}>
                                Partner With ARENAA
                            </span>
                        </div>
                        <h2
                            className="font-black uppercase leading-[0.9] mb-6"
                            style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: "clamp(32px, 5vw, 56px)",
                            }}
                        >
                            <span className="text-white">Own The</span>
                            <br />
                            <span className="gradient-text">Highway.</span>
                            <br />
                            <span className="text-white text-[0.85em]">Secure The Returns.</span>
                        </h2>
                        <p
                            className="text-sm leading-relaxed mb-10"
                            style={{ color: "rgba(255,255,255,0.5)" }}
                        >
                            Whether you&apos;re a landowner, developer, or institutional investor — ARENAA offers a
                            structured annuity-style leisure asset with high visibility, strong footfall guarantee,
                            and proven revenue model. Let&apos;s build India&apos;s highways together.
                        </p>

                        {/* Partner types */}
                        <div className="space-y-4 mb-10">
                            {[
                                {
                                    type: "Land Owner",
                                    desc: "Offer your highway land — ARENAA handles operations & returns 15% gross revenue",
                                    icon: "landscape",
                                },
                                {
                                    type: "Developer / Builder",
                                    desc: "Co-develop an ARENAA facility with guaranteed revenue share model",
                                    icon: "apartment",
                                },
                                {
                                    type: "Institutional Investor",
                                    desc: "Invest in a structured highway leisure infrastructure asset",
                                    icon: "account_balance",
                                },
                            ].map((p, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-4 p-5 rounded-sm"
                                    style={{
                                        background: "rgba(255,255,255,0.025)",
                                        border: "1px solid rgba(255,255,255,0.06)",
                                    }}
                                >
                                    <div
                                        className="w-10 h-10 shrink-0 rounded-sm flex items-center justify-center"
                                        style={{ background: "rgba(255,184,0,0.1)" }}
                                    >
                                        <span className="material-symbols-outlined text-base" style={{ color: "#FFB800" }}>
                                            {p.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-white mb-1 uppercase tracking-wider">
                                            {p.type}
                                        </p>
                                        <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                                            {p.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Contact details */}
                        <div className="space-y-3">
                            {[
                                { icon: "mail", text: "invest@arenaa-chowk.com" },
                                { icon: "phone", text: "+91 9876 543 210" },
                                { icon: "location_on", text: "Chowk Entertainment Pvt. Ltd., Mumbai" },
                            ].map((c, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-lg" style={{ color: "#FFB800" }}>
                                        {c.icon}
                                    </span>
                                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                                        {c.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:w-1/2 w-full">
                        <div
                            className="glass-card rounded-sm p-10"
                            style={{ borderColor: "rgba(255,184,0,0.15)" }}
                        >
                            {!submitted ? (
                                <>
                                    <h3
                                        className="font-bold uppercase tracking-wider text-white mb-2 text-lg"
                                        style={{ fontFamily: "Montserrat, sans-serif" }}
                                    >
                                        Express Interest
                                    </h3>
                                    <p className="text-[11px] mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>
                                        Share your details and the ARENAA team will reach out within 48 hours.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div>
                                            <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                                                Full Name *
                                            </label>
                                            <input
                                                name="name"
                                                type="text"
                                                required
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="Your full name"
                                                className="w-full px-4 py-3.5 text-sm text-white placeholder-white/20 outline-none transition-all focus:border-amber-500"
                                                style={{
                                                    background: "rgba(255,255,255,0.04)",
                                                    border: "1px solid rgba(255,255,255,0.1)",
                                                    borderRadius: "2px",
                                                }}
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                                                    Phone *
                                                </label>
                                                <input
                                                    name="phone"
                                                    type="tel"
                                                    required
                                                    value={form.phone}
                                                    onChange={handleChange}
                                                    placeholder="+91 XXXXX XXXXX"
                                                    className="w-full px-4 py-3.5 text-sm text-white placeholder-white/20 outline-none"
                                                    style={{
                                                        background: "rgba(255,255,255,0.04)",
                                                        border: "1px solid rgba(255,255,255,0.1)",
                                                        borderRadius: "2px",
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                                                    Email *
                                                </label>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    required
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    placeholder="your@email.com"
                                                    className="w-full px-4 py-3.5 text-sm text-white placeholder-white/20 outline-none"
                                                    style={{
                                                        background: "rgba(255,255,255,0.04)",
                                                        border: "1px solid rgba(255,255,255,0.1)",
                                                        borderRadius: "2px",
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                                                I am a...
                                            </label>
                                            <select
                                                name="interest"
                                                value={form.interest}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3.5 text-sm text-white outline-none"
                                                style={{
                                                    background: "rgba(15,15,15,0.95)",
                                                    border: "1px solid rgba(255,255,255,0.1)",
                                                    borderRadius: "2px",
                                                }}
                                            >
                                                <option value="land-owner">Land Owner / Lessor</option>
                                                <option value="developer">Developer / Builder</option>
                                                <option value="investor">Institutional Investor</option>
                                                <option value="other">Other / General Enquiry</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                                                Message
                                            </label>
                                            <textarea
                                                name="message"
                                                value={form.message}
                                                onChange={handleChange}
                                                placeholder="Tell us about your land / project..."
                                                rows={4}
                                                className="w-full px-4 py-3.5 text-sm text-white placeholder-white/20 outline-none resize-none"
                                                style={{
                                                    background: "rgba(255,255,255,0.04)",
                                                    border: "1px solid rgba(255,255,255,0.1)",
                                                    borderRadius: "2px",
                                                }}
                                            />
                                        </div>

                                        <button type="submit" className="btn-primary w-full rounded-sm py-4 flex items-center justify-center gap-2">
                                            <span>Submit Enquiry</span>
                                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                        </button>

                                        <p className="text-[10px] text-center" style={{ color: "rgba(255,255,255,0.3)" }}>
                                            Your information is confidential and will not be shared with third parties.
                                        </p>
                                    </form>
                                </>
                            ) : (
                                <div className="text-center py-10">
                                    <div
                                        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                                        style={{ background: "rgba(255,184,0,0.1)", border: "2px solid #FFB800" }}
                                    >
                                        <span className="material-symbols-outlined text-4xl" style={{ color: "#FFB800" }}>
                                            check_circle
                                        </span>
                                    </div>
                                    <h3
                                        className="font-bold uppercase text-white text-xl mb-3"
                                        style={{ fontFamily: "Montserrat, sans-serif" }}
                                    >
                                        Enquiry Received!
                                    </h3>
                                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                                        Thank you, <strong className="text-white">{form.name}</strong>. The ARENAA
                                        investment team will contact you at {form.email} within 48 hours.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
