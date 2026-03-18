"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    fullWidth?: boolean;
    className?: string;
}

export default function FadeIn({
    children,
    delay = 0,
    direction = "up",
    fullWidth = false,
    className = "",
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const getVariants = () => {
        switch (direction) {
            case "up":
                return { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
            case "down":
                return { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } };
            case "left":
                return { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } };
            case "right":
                return { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } };
            case "none":
                return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
            default:
                return { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
        }
    };

    const variants = getVariants();

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{ width: fullWidth ? "100%" : "auto" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
