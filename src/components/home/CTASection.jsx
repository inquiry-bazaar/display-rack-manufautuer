
"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowUpRight,
    ShieldCheck,
    Layers3,
    Settings2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const defaultFeatures = [
    {
        icon: ShieldCheck,
        title: "Durable",
        subtitle: "& Reliable",
    },
    {
        icon: Layers3,
        title: "Space",
        subtitle: "Efficient",
    },
    {
        icon: Settings2,
        title: "Custom",
        subtitle: "Solutions",
    },
];

export default function CTASection({
    eyebrow = "YOUR SPACE. OUR EXPERTISE.",
    title = "Ready to Upgrade Your",
    highlight = "Retail Space?",
    description = "Discover durable, functional, and beautifully designed display rack solutions for your business.",
    buttonText = "Explore Our Solutions",
    buttonHref = "/our-products",
    image = "/cta.webp",
    features = defaultFeatures,
    className = "",
}) {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            if (
                window.matchMedia("(prefers-reduced-motion: reduce)")
                    .matches
            ) {
                return;
            }

            gsap.fromTo(
                ".cta-animate",
                {
                    y: 45,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.95,
                    stagger: 0.12,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 82%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                imageRef.current,
                {
                    scale: 1.06,
                },
                {
                    scale: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.2,
                    },
                }
            );
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`relative w-full overflow-hidden bg-white ${className}`}
        >
            <div className="relative isolate min-h-[650px] overflow-hidden sm:min-h-[620px] lg:min-h-[590px] xl:min-h-[640px]">
                {/* BACKGROUND IMAGE */}
                <div
                    ref={imageRef}
                    className="absolute inset-0 -z-20"
                >
                    <Image
                        src={image}
                        alt="Premium retail display rack solutions"
                        fill
                        sizes="100vw"
                        className="object-cover object-[65%_center] lg:object-center"
                    />
                </div>

                {/* MOBILE GRADIENT FOR READABILITY */}
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-white/95 to-white/25 lg:hidden" />

                {/* CONTENT */}
                <div className="relative mx-auto flex min-h-[650px] max-w-[1500px] items-center px-5 py-16 sm:min-h-[620px] sm:px-8 lg:min-h-[590px] lg:px-12 xl:min-h-[640px]">
                    <div className="w-full max-w-[610px] lg:w-[49%]">
                        {/* EYEBROW */}
                        <div className="cta-animate mb-6 flex items-center gap-4">
                            <span className="h-[3px] w-12 rounded-full bg-secondary" />

                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
                                {eyebrow}
                            </span>
                        </div>

                        {/* HEADING */}
                        <h2 className="cta-animate font-heading text-[clamp(2.35rem,4vw,4.7rem)] font-extrabold leading-[1.09] tracking-[-0.045em] text-primary">
                            {title}
                            <span className="mt-1 block text-secondary">
                                {highlight}
                            </span>
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="cta-animate mt-6 max-w-[520px] text-[15px] leading-[1.85] text-[#52606D] sm:text-[17px]">
                            {description}
                        </p>

                        {/* FEATURES */}
                        <div className="cta-animate mt-8 grid max-w-[510px] grid-cols-3 sm:mt-10">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;

                                return (
                                    <div
                                        key={`${feature.title}-${index}`}
                                        className={`flex flex-col items-center px-2 text-center sm:px-4 ${index !== 0
                                            ? "border-l border-primary/20"
                                            : ""
                                            }`}
                                    >
                                        <Icon
                                            size={29}
                                            strokeWidth={1.7}
                                            className="mb-3 text-secondary sm:h-9 sm:w-9"
                                        />

                                        <p className="text-[12px] font-bold leading-[1.4] text-primary sm:text-sm">
                                            {feature.title}
                                            <span className="block">
                                                {feature.subtitle}
                                            </span>
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA BUTTON */}
                        <div className="cta-animate mt-9 sm:mt-11">
                            <Link
                                href={buttonHref}
                                className="group inline-flex min-h-[56px] items-center justify-center gap-5 rounded-full bg-secondary px-7 py-4 text-sm font-bold text-white shadow-[0_12px_30px_-12px_rgba(245,130,32,0.55)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:shadow-[0_18px_35px_-14px_rgba(16,42,67,0.45)] sm:px-9 sm:text-base"
                            >
                                {buttonText}

                                <ArrowUpRight
                                    size={21}
                                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
