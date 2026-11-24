
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowUpRight,
    ChevronRight,
    ShieldCheck,
    Layers3,
    UsersRound,
    Award,
    CheckCircle2,
} from "lucide-react";
import TeamMissionVision from "@/components/about/TeamMissionVision";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    {
        value: 10,
        suffix: "+",
        label: "Years of Experience",
        icon: Award,
    },
    {
        value: 500,
        suffix: "+",
        label: "Projects Delivered",
        icon: Layers3,
    },
    {
        value: 300,
        suffix: "+",
        label: "Happy Clients",
        icon: UsersRound,
    },
    {
        value: 100,
        suffix: "%",
        label: "Quality Commitment",
        icon: ShieldCheck,
    },
];

// Replace example numbers with verified company statistics.

export default function About() {
    const rootRef = useRef(null);

    const { ref: statsRef, inView: statsInView } = useInView({
        triggerOnce: true,
        threshold: 0.25,
    });

    useGSAP(
        () => {
            const reducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            if (reducedMotion) return;

            gsap.fromTo(
                ".about-hero-reveal",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.14,
                    ease: "power3.out",
                    delay: 0.2,
                }
            );

            gsap.to(".about-hero-bg", {
                scale: 1.13,
                ease: "none",
                scrollTrigger: {
                    trigger: ".about-hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });

            gsap.fromTo(
                ".about-image-wrap",
                { x: -65, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".about-intro",
                        start: "top 78%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                ".about-content-reveal",
                { y: 38, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.85,
                    stagger: 0.13,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".about-content",
                        start: "top 82%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                ".about-stat",
                { y: 35, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".about-stats",
                        start: "top 90%",
                        once: true,
                    },
                }
            );
        },
        { scope: rootRef }
    );

    return (
        <main ref={rootRef} className="overflow-hidden bg-white">
            {/* ================= HERO ================= */}
            <section className="about-hero relative flex min-h-[390px] items-center justify-center overflow-hidden bg-primary sm:min-h-[460px]">
                <div className="about-hero-bg absolute inset-0">
                    <Image
                        src="/2.webp"
                        alt="Modern retail display racks and supermarket shelving"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                </div>

                <div className="absolute inset-0 bg-[#06182B]/55" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#06182B]/40 via-transparent to-[#06182B]/40" />

                <div className="relative z-10 mx-auto max-w-5xl px-5 text-center">
                    {/* Breadcrumb */}
                    <div className="about-hero-reveal mb-7 flex items-center justify-center gap-2 text-sm text-white/95">
                        <Link href="/" className="transition hover:text-secondary">
                            Home
                        </Link>

                        <ChevronRight size={15} />

                        <span className="text-secondary">About Us</span>
                    </div>

                    {/* Eyebrow */}
                    <div className="about-hero-reveal mb-6 flex items-center justify-center gap-3">
                        <span className="h-px w-9 bg-secondary" />

                        <span className="text-[15px] font-bold uppercase tracking-[0.25em] text-white">
                            Get To Know Us
                        </span>

                        <span className="h-px w-9 bg-secondary" />
                    </div>

                    {/* Title */}
                    <h1 className="about-hero-reveal font-heading text-[clamp(3.3rem,7vw,7rem)] font-bold leading-[1.05] tracking-[-0.055em] text-white">
                        About <span className="text-secondary">Us.</span>
                    </h1>

                    <p className="about-hero-reveal mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/95 sm:text-base sm:leading-8">
                        Discover Arya Insulation, our approach to quality, and our
                        commitment to creating reliable retail display and storage
                        solutions.
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 h-[5px] w-full bg-secondary" />
            </section>

            {/* ================= WHO WE ARE ================= */}
            <section className="about-intro relative overflow-hidden bg-white py-10 sm:py-12 lg:py-15">
                {/* Background decoration */}
                <div className="pointer-events-none absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-[#F3F5F7] blur-[100px]" />

                <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
                    <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-24">
                        {/* LEFT IMAGE */}
                        <div className="about-image-wrap relative">
                            <div className="relative">
                                {/* Decorative orange background */}
                                <div className="absolute -bottom-4 -left-4 h-[75%] w-[75%] rounded-[26px] bg-secondary sm:-bottom-5 sm:-left-5" />

                                {/* Main Image */}
                                <div className="relative h-[420px] overflow-hidden rounded-[22px] sm:h-[530px] lg:h-[500px]">
                                    <Image
                                        src="/why3.webp"
                                        alt="Arya Insulation premium retail shelving solutions"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 48vw"
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent" />
                                </div>

                                {/* Floating Badge */}
                                <div className="absolute -bottom-6 right-3 flex items-center gap-4 rounded-2xl border-[3px] border-white bg-secondary px-5 py-4 text-white shadow-[0_20px_50px_-15px_rgba(16,42,67,0.35)] sm:right-[-20px] sm:px-7 sm:py-5">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/40">
                                        <ShieldCheck size={27} strokeWidth={1.7} />
                                    </div>

                                    <div>
                                        <p className="font-heading text-sm font-bold sm:text-base">
                                            Reliable & Durable
                                        </p>

                                        <p className="mt-1 text-xs text-white/85">
                                            Supermarket Rack Solutions
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="about-content pt-6 lg:pt-0">
                            {/* Eyebrow */}
                            <div className="about-content-reveal mb-2 flex items-center gap-3">
                                <span className="h-[2px] w-11 bg-secondary" />

                                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-secondary">
                                    Who We Are
                                </span>
                            </div>

                            {/* Heading */}
                            <h2 className="about-content-reveal max-w-[680px] font-heading text-[clamp(2.2rem,3.7vw,4.2rem)] font-bold leading-[1] tracking-[-0.045em] text-primary">
                                Your Trusted Partner for{" "}
                                <span className="text-secondary">
                                    Retail Display Solutions.
                                </span>
                            </h2>

                            {/* Description */}
                            <p className="about-content-reveal mt-5 text-[15px] leading-[1.9] text-muted">
                                At Arya Insulation, we focus on delivering practical,
                                durable, and visually appealing display rack solutions
                                for modern commercial spaces. Our goal is to help
                                businesses organize their products effectively while
                                creating a better shopping experience for customers.
                            </p>

                            <p className="about-content-reveal mt-2 text-[15px] leading-[1.9] text-muted">
                                From supermarkets and grocery stores to retail outlets,
                                departmental stores, and storage facilities, we offer
                                shelving solutions designed around functionality,
                                flexibility, and efficient space utilization.
                            </p>

                            {/* Highlights */}
                            {/* <div className="about-content-reveal mt-7 grid gap-4 sm:grid-cols-2">
                                {[
                                    "Strong & Durable Construction",
                                    "Space-Saving Rack Designs",
                                    "Custom Display Solutions",
                                    "Practical Store Layouts",
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <CheckCircle2
                                            size={19}
                                            className="shrink-0 text-secondary"
                                        />

                                        <span className="text-[13px] font-semibold text-primary">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div> */}

                            {/* Stats */}
                            <div ref={statsRef}
                                className="about-stats mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-3 xl:gap-4"
                            >
                                {stats.map((stat, index) => {
                                    const Icon = stat.icon;

                                    return (
                                        <div
                                            key={index}
                                            className="about-stat group flex min-h-[145px] flex-col items-center justify-center rounded-[16px] border border-[#E2E8F0] bg-[#F8FAFC] px-2 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:bg-white hover:shadow-[0_15px_35px_-15px_rgba(16,42,67,0.2)]"
                                        >
                                            <Icon
                                                size={25}
                                                strokeWidth={1.8}
                                                className="mb-3 text-secondary"
                                            />

                                            <div className="font-heading text-[clamp(1.55rem,2.2vw,2.3rem)] font-extrabold leading-none tracking-[-0.05em] text-primary">
                                                {statsInView ? (
                                                    <CountUp
                                                        end={stat.value}
                                                        duration={2.5}
                                                        separator=","
                                                        suffix={stat.suffix}
                                                    />
                                                ) : (
                                                    `0${stat.suffix}`
                                                )}
                                            </div>

                                            <p className="mt-3 max-w-[110px] text-[11px] font-semibold leading-[1.5] text-primary/80">
                                                {stat.label}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Button */}
                            <div className="about-content-reveal mt-5">
                                <Link
                                    href="/contact-us"
                                    className="group inline-flex items-center gap-4 rounded-full bg-secondary px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-primary hover:shadow-[0_15px_35px_-12px_rgba(16,42,67,0.4)]"
                                >
                                    Get In Touch

                                    <ArrowUpRight
                                        size={19}
                                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TeamMissionVision />

            <WhyChooseUs />

            <CTASection />
        </main>
    );
}
