"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeroProps {
    title: string;
    subtitle: string;
    image: string;
}

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
    return (
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-6"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        {title}
                    </h1>
                    <div className="w-24 h-1 bg-[#FFB800] mx-auto mb-8" />
                    <p className="text-xl md:text-2xl text-white/80 font-medium tracking-wide">
                        {subtitle}
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="material-symbols-outlined text-[#FFB800] text-3xl">expand_more</span>
            </motion.div>
        </section>
    );
}
