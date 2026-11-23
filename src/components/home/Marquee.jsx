
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
    Sparkles,
    ArrowUpRight,
    Dot,
} from "lucide-react";

const marqueeItems = [
    "Supermarket Display Racks",
    "Gondola Racks",
    "Wall Mounted Racks",
    "Retail Display Solutions",
    "Heavy Duty Storage Racks",
    "Customized Rack Systems",
    "Premium Quality",
    "Built to Last",
];

export default function Marquee() {
    const marqueeRef = useRef(null);
    const trackRef = useRef(null);
    const tweenRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reducedMotion) return;

        const ctx = gsap.context(() => {
            tweenRef.current = gsap.fromTo(
                track,
                {
                    xPercent: 0,
                },
                {
                    xPercent: -50,
                    duration: 35,
                    ease: "none",
                    repeat: -1,
                }
            );
        }, marqueeRef);

        return () => {
            tweenRef.current = null;
            ctx.revert();
        };
    }, []);

    const pauseMarquee = () => {
        tweenRef.current?.pause();
    };

    const resumeMarquee = () => {
        tweenRef.current?.resume();
    };

    return (
        <section
            ref={marqueeRef}
            aria-label="Our display rack solutions"
            className="relative w-full overflow-hidden border-y border-white/10 bg-primary py-2"
            onMouseEnter={pauseMarquee}
            onMouseLeave={resumeMarquee}
        >
            {/* Decorative top line */}
            <div className="absolute left-0 top-0 h-[1px] w-full bg-secondary/80" />

            {/* Marquee track */}
            <div
                ref={trackRef}
                className="flex w-max items-center will-change-transform"
            >
                {[0, 1].map((copy) => (
                    <div
                        key={copy}
                        aria-hidden={copy === 1}
                        className="flex shrink-0 items-center"
                    >
                        {marqueeItems.map((item, index) => (
                            <div
                                key={`${copy}-${index}`}
                                className="flex shrink-0 items-center"
                            >
                                {/* Text */}
                                <span className="whitespace-nowrap px-5 items-center font-heading text-xs font-extrabold uppercase tracking-[0.06em] text-white">
                                    ● &nbsp; {item}
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Decorative bottom line */}
            <div className="absolute bottom-0 left-0 h-px w-full bg-white/10" />
        </section>
    );
}
