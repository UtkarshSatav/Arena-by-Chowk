"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer
            id="contact"
            className="pt-24 pb-12 relative overflow-hidden"
            style={{ background: "#000" }}
        >
            {/* Top CTA Strip */}
            <div className="max-w-7xl mx-auto px-6 mb-24">
                <div className="glass-card flex flex-col md:flex-row items-center justify-between p-12 lg:p-16 border-[#FFB800]/20 bg-white/[0.02]">
                    <div className="mb-10 lg:mb-0">
                        <h2
                            className="text-4xl lg:text-5xl font-black uppercase text-white mb-6"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                            Partner With <span className="text-[#FFB800]">ARENAA.</span>
                        </h2>
                        <p className="text-white/40 text-sm tracking-widest uppercase font-bold">
                            Join ARENAA as a Strategic Partner Today
                        </p>
                    </div>
                    <Link href="/partner">
                        <button className="btn-primary rounded-sm px-12 py-6 text-xs font-black tracking-widest uppercase hover:scale-105 transition-transform group">
                            Partner With Us
                        </button>
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand */}
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="relative w-32 h-20 overflow-hidden rounded-sm border border-white/10 transition-transform">
                                <Image
                                    src="/logo_round.jpg"
                                    alt="ARENAA Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed mb-8">
                            Next-generation lifestyle destination where food, entertainment, and social experiences come together in one vibrant space.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 mb-8 underline decoration-[#FFB800]/50 underline-offset-8">
                            Explore
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { label: "Home", href: "/" },
                                { label: "About ARENAA", href: "/about" },
                                { label: "The Concept", href: "/concept" },
                                { label: "Experiences", href: "/experiences" },
                                { label: "Model", href: "/model" },
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className="text-xs uppercase font-bold tracking-widest text-white/50 hover:text-[#FFB800] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Business */}
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 mb-8 underline decoration-[#FFB800]/50 underline-offset-8">
                            Strategic
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { label: "Partner Program", href: "/partner" },
                                { label: "Highway Model", href: "/model" },
                                { label: "Architecture", href: "/model" },
                                { label: "Investment", href: "/partner" },
                                { label: "Contact", href: "/contact" },
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className="text-xs uppercase font-bold tracking-widest text-white/50 hover:text-[#FFB800] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 mb-8 underline decoration-[#FFB800]/50 underline-offset-8">
                            Connect
                        </h4>
                        <ul className="space-y-6">
                            <li>
                                <p className="text-[10px] uppercase font-bold text-white/30 mb-2">Email</p>
                                <a href="mailto:info@chowk.co.in" className="text-sm font-bold text-white hover:text-[#FFB800] transition-colors">info@chowk.co.in</a>
                            </li>
                            <li>
                                <p className="text-[10px] uppercase font-bold text-white/30 mb-2">Office</p>
                                <p className="text-xs font-bold text-white/60 leading-relaxed uppercase">
                                    ARENAA by CHOWK<br />
                                    Chowk Entertainment Pvt. Ltd.<br />
                                    WZ-24/1 FF Left Side Mukharjee Park<br />
                                    New Delhi – 110018
                                </p>
                            </li>
                            <li>
                                <p className="text-[10px] uppercase font-bold text-white/30 mb-3">Follow Us</p>
                                <div className="flex items-center gap-4">
                                    <a href="https://www.facebook.com/profile.php?id=61586878500352" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-[#FFB800] transition-colors">FB</a>
                                    <a href="https://www.linkedin.com/showcase/arenaabychowk/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-[#FFB800] transition-colors">LI</a>
                                    <a href="https://www.instagram.com/arenaabychowk/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-[#FFB800] transition-colors">IG</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">
                        © 2026 ARENAA by CHOWK. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex items-center gap-8">
                        <a href="https://www.facebook.com/profile.php?id=61586878500352" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center border border-white/5 text-white/30 hover:text-[#FFB800] hover:border-[#FFB800]/50 transition-all">
                            <span className="text-[10px] font-black">FB</span>
                        </a>
                        <a href="https://www.linkedin.com/showcase/arenaabychowk/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center border border-white/5 text-white/30 hover:text-[#FFB800] hover:border-[#FFB800]/50 transition-all">
                            <span className="text-[10px] font-black">LI</span>
                        </a>
                        <a href="https://www.instagram.com/arenaabychowk/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center border border-white/5 text-white/30 hover:text-[#FFB800] hover:border-[#FFB800]/50 transition-all">
                            <span className="text-[10px] font-black">IG</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
