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
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        // Check initial theme
        setIsLight(document.documentElement.classList.contains("light"));

        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        if (isLight) {
            document.documentElement.classList.remove("light");
            setIsLight(false);
        } else {
            document.documentElement.classList.add("light");
            setIsLight(true);
        }
    };

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

                        <button
                            onClick={toggleTheme}
                            className="flex items-center justify-center w-9 h-9 rounded-full transition-colors border"
                            style={{
                                borderColor: "rgba(var(--glass-rgb), 0.15)",
                                background: "rgba(var(--glass-rgb), 0.03)",
                                color: "var(--text-main)"
                            }}
                            title="Toggle Light/Dark Mode"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                {isLight ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                )}
                            </svg>
                        </button>

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
                    style={{ background: "rgba(var(--inverse-glass-rgb),0.97)", backdropFilter: "blur(20px)" }}
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
