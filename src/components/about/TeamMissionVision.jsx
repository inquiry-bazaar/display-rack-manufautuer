
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { UsersRound, Target, Eye } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cards = [
    {
        id: "01",
        title: "Our Team",
        icon: UsersRound,
        image: "/why1.webp",
        description:
            "Our professional and passionate team is the key to our success in India. Consisting of engineers, quality experts and sales & marketing professionals, our team works together to satisfy industry requirements while ensuring customer satisfaction. We regularly conduct training sessions, seminars and workshops to stay updated with technological advancements and industry trends.",
    },
    {
        id: "02",
        title: "Our Mission",
        icon: Target,
        image: "/why2.webp",
        description:
            "At Arya Industry, our mission is to empower businesses with innovative, durable, and high-quality storage and display solutions that enhance efficiency and aesthetics. We strive to exceed customer expectations by delivering reliable products and exceptional service while fostering sustainability and continuous improvement in every aspect of our operations.",
    },
    {
        id: "03",
        title: "Our Vision",
        icon: Eye,
        image: "/why3.webp",
        description:
            "Our vision is to become a global leader in the storage and display industry, recognized for our commitment to quality, design innovation, and customer satisfaction. We aim to inspire progress across industries by providing cutting-edge solutions that blend functionality, durability, and style.",
    },
];

export default function TeamMissionVision() {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const gridRef = useRef(null);
    const cardsRef = useRef([]);

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            // Heading animation
            mm.add(
                "(prefers-reduced-motion: no-preference)",
                () => {
                    gsap.fromTo(
                        ".tmv-heading",
                        {
                            y: 40,
                            opacity: 0,
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                            stagger: 0.15,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: headingRef.current,
                                start: "top 85%",
                                once: true,
                            },
                        }
                    );
                }
            );

            // Desktop stacked-to-spread animation
            mm.add(
                "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
                () => {
                    const [left, center, right] = cardsRef.current;

                    const getCenterOffset = (card) => {
                        return center.offsetLeft - card.offsetLeft;
                    };

                    // Initial overlapping positions
                    gsap.set(left, {
                        x: () => getCenterOffset(left) - 45,
                        y: 35,
                        rotation: -10,
                        scale: 0.94,
                        zIndex: 2,
                        transformOrigin: "50% 85%",
                    });

                    gsap.set(center, {
                        x: 0,
                        y: -15,
                        rotation: 0,
                        scale: 0.98,
                        zIndex: 1,
                    });

                    gsap.set(right, {
                        x: () => getCenterOffset(right) + 45,
                        y: 35,
                        rotation: 10,
                        scale: 0.94,
                        zIndex: 3,
                        transformOrigin: "50% 85%",
                    });

                    // Scroll-controlled spread
                    const timeline = gsap.timeline({
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: "top 85%",
                            end: "top 25%",
                            scrub: 1.2,
                            invalidateOnRefresh: true,
                        },
                    });

                    timeline.to(
                        left,
                        {
                            x: 0,
                            y: 0,
                            rotation: 0,
                            scale: 1,
                            duration: 1,
                            ease: "power2.inOut",
                        },
                        0
                    );

                    timeline.to(
                        center,
                        {
                            x: 0,
                            y: 0,
                            rotation: 0,
                            scale: 1,
                            duration: 1,
                            ease: "power2.inOut",
                        },
                        0
                    );

                    timeline.to(
                        right,
                        {
                            x: 0,
                            y: 0,
                            rotation: 0,
                            scale: 1,
                            duration: 1,
                            ease: "power2.inOut",
                        },
                        0
                    );

                    // Content reveal while cards spread
                    timeline.fromTo(
                        ".tmv-card-content",
                        {
                            y: 30,
                            opacity: 0.5,
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.65,
                            stagger: 0.08,
                            ease: "power2.out",
                        },
                        0.25
                    );
                }
            );

            // Mobile and tablet animation
            mm.add(
                "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
                () => {
                    cardsRef.current.forEach((card) => {
                        gsap.fromTo(
                            card,
                            {
                                y: 65,
                                opacity: 0,
                                scale: 0.96,
                            },
                            {
                                y: 0,
                                opacity: 1,
                                scale: 1,
                                duration: 0.9,
                                ease: "power3.out",
                                scrollTrigger: {
                                    trigger: card,
                                    start: "top 88%",
                                    once: true,
                                },
                            }
                        );
                    });
                }
            );

            return () => mm.revert();
        },
        { scope: sectionRef }
    );

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden bg-[#F3F5F7] py-10 sm:py-12 lg:py-15"
        >
            {/* Background decorations */}
            <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />

            <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-[120px]" />

            <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

                {/* ================= HEADING ================= */}
                <div
                    ref={headingRef}
                    className="mb-14 grid gap-7 lg:mb-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20"
                >
                    <div>
                        {/* Eyebrow */}
                        <div className="tmv-heading mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2">
                            <span className="h-2 w-2 rounded-full bg-secondary" />

                            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                                What We Believe
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="tmv-heading max-w-[800px] font-heading text-[clamp(2.5rem,4.8vw,5rem)] font-semibold leading-[1.08] tracking-[-0.055em] text-primary">
                            Driven by purpose.
                            <br />

                            Built for a{" "}
                            <span className="text-secondary">
                                better future.
                            </span>
                        </h2>
                    </div>

                    <p className="tmv-heading max-w-[460px] text-[15px] leading-[1.85] text-muted sm:text-base lg:pb-2">
                        Our people, purpose, and vision define everything we do.
                        Together, we create innovative storage and display
                        solutions designed to transform businesses and build a
                        better tomorrow.
                    </p>
                </div>

                {/* ================= CARDS ================= */}

                <div
                    ref={gridRef}
                    className="relative grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:gap-8"
                >
                    {cards.map((card, index) => {
                        const Icon = card.icon;

                        return (
                            <article
                                key={card.id}
                                ref={(el) => {
                                    cardsRef.current[index] = el;
                                }}
                                className="group relative isolate flex min-h-[540px] flex-col justify-end overflow-hidden rounded-[24px] bg-primary p-6 shadow-[0_20px_50px_-15px_rgba(16,42,67,0.35)] will-change-transform sm:min-h-[560px] sm:p-8 lg:min-h-[550px] lg:p-7"
                            >
                                {/* Full Background Image */}
                                <div className="absolute inset-0 -z-30 overflow-hidden">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                                    />
                                </div>

                                {/* Dark Overlay */}
                                <div className="absolute inset-0 -z-20 bg-[#06182B]/5" />

                                {/* Bottom Gradient */}
                                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#06182B] via-[#06182B]/45 to-transparent" />

                                {/* Hover Gradient */}
                                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                                {/* Top Card Number */}
                                <div className="absolute left-6 top-6 sm:left-5 sm:top-5">
                                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 font-heading text-sm font-semibold text-white backdrop-blur-md">
                                        {card.id}
                                    </span>
                                </div>

                                {/* Top Right Icon */}
                                <div className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-500 group-hover:rotate-12 group-hover:border-secondary group-hover:bg-secondary sm:right-5 sm:top-5">
                                    <Icon size={25} strokeWidth={1.7} />
                                </div>

                                {/* Bottom Content */}
                                <div className="tmv-card-content relative z-10">

                                    {/* Orange Line */}
                                    <div className="mb-2 h-[3px] w-12 rounded-full bg-secondary transition-all duration-500 group-hover:w-24" />

                                    {/* Title */}
                                    <h3 className="font-heading text-[clamp(2rem,3vw,3.2rem)] font-semibold leading-[1.1] tracking-[-0.045em] text-white">
                                        {card.title}
                                        <span className="text-secondary">.</span>
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-2 text-[13px] leading-[1.85] text-white/85 sm:text-[14px]">
                                        {card.description}
                                    </p>

                                    {/* Bottom Decoration */}
                                    <div className="relative mt-2 h-px w-full overflow-hidden bg-white/20">
                                        <div className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-secondary transition-transform duration-700 group-hover:scale-x-100" />
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
