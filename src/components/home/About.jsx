
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowUpRight,
    ArrowRight,
    CheckCircle2,
    Factory,
    Layers3,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Replace these example numbers with your verified company figures.
const stats = [
    { value: 10, suffix: "+", label: "Years of Experience" },
    { value: 500, suffix: "+", label: "Projects Delivered" },
    { value: 100, suffix: "%", label: "Quality Focus" },
];

function CountUp({ value, suffix = "", duration = 2 }) {
    const numberRef = useRef(null);
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const element = numberRef.current;
        if (!element) return;

        const reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reduced) {
            setDisplayValue(value);
            return;
        }

        const counter = { value: 0 };

        const trigger = ScrollTrigger.create({
            trigger: element,
            start: "top 90%",
            once: true,
            onEnter: () => {
                gsap.to(counter, {
                    value,
                    duration,
                    ease: "power2.out",
                    onUpdate: () => {
                        setDisplayValue(Math.round(counter.value));
                    },
                });
            },
        });

        return () => {
            trigger.kill();
            gsap.killTweensOf(counter);
        };
    }, [value, duration]);

    return (
        <span ref={numberRef}>
            {displayValue.toLocaleString("en-IN")}
            {suffix}
        </span>
    );
}

export default function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reduced) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".about-reveal",
                {
                    opacity: 0,
                    y: 40,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    stagger: 0.12,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                ".about-stat",
                {
                    opacity: 0,
                    y: 30,
                    scale: 0.95,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: ".about-stats",
                        start: "top 90%",
                        once: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="about"
            className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-16 border border-gray-300"
        >
            {/* Background decoration */}
            <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[120px]" />

            <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[130px]" />

            <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
                <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-20">
                    {/* ================= LEFT CONTENT ================= */}
                    <div className="relative z-10">
                        {/* Eyebrow */}
                        <div className="about-reveal mb-2 flex items-center gap-3">
                            <span className="h-[2px] w-10 bg-secondary" />

                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                                About Arya Insulation
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="about-reveal font-heading text-[clamp(2.5rem,4.2vw,4.8rem)] font-extrabold leading-[1] tracking-[-0.03em] text-primary">
                            Building Better
                            <br />
                            <span className="text-secondary">
                                Retail Spaces.
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="about-reveal mt-5 max-w-[600px] text-base leading-6 text-muted">
                            At Arya Insulation, we specialize in manufacturing
                            premium supermarket display racks, retail shelving,
                            and customized storage solutions that combine
                            strength, functionality, and modern design.
                        </p>

                        <p className="about-reveal mt-4 max-w-[600px] text-sm leading-6 text-muted sm:text-base">
                            From organized supermarket aisles to efficient
                            warehouse storage, our rack systems are designed
                            to help businesses utilize space effectively,
                            display products beautifully, and create better
                            customer experiences.
                        </p>

                        {/* ================= STATS ================= */}
                        <div className="about-stats mt-8 grid grid-cols-3 gap-3 border-y border-primary/10 py-4 sm:gap-6">
                            {stats.map((stat) => (
                                <div key={stat.label} className="about-stat">
                                    <div className="font-heading text-[clamp(1.7rem,3vw,3.2rem)] font-extrabold leading-none tracking-[-0.05em] text-primary">
                                        <CountUp
                                            value={stat.value}
                                            suffix={stat.suffix}
                                        />
                                    </div>

                                    <div className="mt-1 h-[3px] w-8 rounded-full bg-secondary" />

                                    <p className="mt-2 max-w-[140px] text-xs font-medium leading-5 text-muted sm:text-sm">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="about-reveal mt-5">
                            <Link
                                href="/about-us"
                                className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-lg bg-primary px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-secondary hover:shadow-xl"
                            >
                                More About Us

                                <ArrowUpRight
                                    size={19}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* ================= RIGHT VIDEO ================= */}
                    <div className="about-reveal relative w-full">
                        <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-primary sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-square">

                            {/* Background Video */}
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                poster="/about-poster.webp"
                                aria-label="Arya Insulation supermarket display rack showcase"
                                className="absolute inset-0 h-full w-full object-cover"
                            >
                                <source src="/about.mp4" type="video/mp4" />
                            </video>

                            {/* Subtle dark overlay */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102A43]/55 via-transparent to-transparent" />

                            {/* Top right accent */}
                            <div className="absolute right-5 top-5 z-10 flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-4 py-2 backdrop-blur-md">
                                <span className="h-2 w-2 animate-pulse rounded-full bg-secondary" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                                    Our Manufacturing
                                </span>
                            </div>

                            {/* Bottom text */}
                            <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-8">
                                <div className="mb-3 h-[3px] w-10 rounded-full bg-secondary" />

                                <h3 className="font-heading text-xl font-extrabold text-white sm:text-2xl">
                                    Crafted for Modern Retail
                                </h3>

                                <p className="mt-2 max-w-[350px] text-xs leading-6 text-white/85 sm:text-sm">
                                    Durable shelving systems designed for smarter
                                    spaces and better product presentation.
                                </p>
                            </div>

                            {/* Decorative inner border */}
                            <div className="pointer-events-none absolute inset-3 rounded-[17px] border border-white/15" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
