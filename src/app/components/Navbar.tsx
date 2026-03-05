"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#concept", label: "Concept" },
    { href: "#experience", label: "Experience" },
    { href: "#financials", label: "Financials" },
    { href: "#invest", label: "Invest" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
                        ? "bg-black/90 backdrop-blur-xl border-b border-white/5 shadow-2xl"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <a href="#home" className="flex flex-col items-start leading-none group">
                        <span
                            className="text-2xl font-black tracking-tighter text-white uppercase transition-colors"
                            style={{ fontFamily: "Montserrat, sans-serif", letterSpacing: "-0.03em" }}
                        >
                            ARENAA
                        </span>
                        <span
                            className="text-[9px] tracking-[0.4em] font-bold uppercase"
                            style={{ color: "#FFB800" }}
                        >
                            by CHOWK
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="nav-link">
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* CTA + Status */}
                    <div className="flex items-center gap-5">
                        <div className="hidden md:flex flex-col items-end">
                            <span className="text-[8px] font-bold tracking-widest uppercase" style={{ color: "#FFB800" }}>
                                Live Opportunity
                            </span>
                            <span className="flex items-center gap-1 text-[9px]" style={{ color: "#00F0FF" }}>
                                <span
                                    className="w-1.5 h-1.5 rounded-full"
                                    style={{ background: "#00F0FF", animation: "pulse 2s infinite" }}
                                />
                                ACCEPTING PARTNERS
                            </span>
                        </div>
                        <a href="#invest">
                            <button className="btn-primary rounded-sm text-xs px-6 py-2.5">
                                Enquire Now
                            </button>
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden flex flex-col gap-1.5 p-1"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Menu"
                        >
                            <span
                                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""
                                    }`}
                            />
                            <span
                                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
                                    }`}
                            />
                            <span
                                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""
                                    }`}
                            />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden transition-all duration-500 overflow-hidden ${mobileOpen ? "max-h-96 border-t border-white/5" : "max-h-0"
                        }`}
                    style={{ background: "rgba(0,0,0,0.97)", backdropFilter: "blur(20px)" }}
                >
                    <div className="px-6 py-6 flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="nav-link"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a href="#invest" onClick={() => setMobileOpen(false)}>
                            <button className="btn-primary w-full rounded-sm">Enquire Now</button>
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
}
