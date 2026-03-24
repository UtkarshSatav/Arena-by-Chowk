"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/concept", label: "The Concept" },
    { href: "/experiences", label: "Experiences" },
    { href: "/model", label: "Model" },
    { href: "/partner", label: "Partner" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
                scrolled ? "py-4 bg-black/80 backdrop-blur-xl border-b border-white/10" : "py-8 bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Brand Logo */}
                <Link href="/" className="group flex items-center">
                    <div className="relative w-28 h-16 md:w-20 md:h-12 overflow-hidden rounded-sm border border-white/20 transition-transform duration-300 group-hover:scale-110">
                        <Image
                            src="/logo_gold.jpg"
                            alt="ARENAA Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-[10px] uppercase font-bold tracking-[0.25em] transition-colors ${
                                pathname === link.href ? "text-[#FFB800]" : "text-white/50 hover:text-[#FFB800]"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/partner">
                        <button className="btn-primary rounded-sm px-6 py-2.5 text-[10px] font-black tracking-widest uppercase">
                            Partner →
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span className="material-symbols-outlined text-3xl">
                        {mobileMenuOpen ? "close" : "menu"}
                    </span>
                </button>
            </div>

            <div
                className={`lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-500 overflow-hidden ${
                    mobileMenuOpen ? "max-h-[500px] py-10 opacity-100" : "max-h-0 py-0 opacity-0"
                }`}
            >
                <div className="flex flex-col items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-xs uppercase font-bold tracking-[0.4em] transition-colors ${
                                pathname === link.href ? "text-[#FFB800]" : "text-white"
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/partner" onClick={() => setMobileMenuOpen(false)}>
                        <button className="btn-primary rounded-sm px-10 py-4 text-xs font-black tracking-[0.2em] uppercase">
                            Partner With Us
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
