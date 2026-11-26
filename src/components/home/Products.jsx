"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
    ArrowUpRight,
    ArrowRight,
    Layers3,
    Phone,
    CheckCircle2,
    MessageSquare,
} from "lucide-react";

import categories from "@/utils/data";
import InquiryPopup from "@/components/layout/InquiryPopup";

gsap.registerPlugin(ScrollTrigger);

// ================= CATEGORY CARD =================
function ProductCard({ category, index }) {
    return (
        <Link
            href={`/${category.slug}`}
            aria-label={`Explore ${category.name}`}
            className="product-reveal group flex h-full flex-col overflow-hidden rounded-[20px] border border-border bg-white transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-[0_20px_45px_rgba(16,42,67,0.10)]"
        >
            {/* Image Area */}

            <div className="relative aspect-[4/3.5] overflow-hidden bg-[#F3F5F7]">

                {/* Background Circle */}

                <div className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-transform duration-700 group-hover:scale-125" />

                {/* Card Number */}

                <span className="absolute left-4 top-4 z-10 font-heading text-xs font-extrabold tracking-wider text-primary/60">
                    / {String(index + 1).padStart(2, "0")}
                </span>

                {/* Large Decorative Number */}
                <span className="pointer-events-none absolute -right-2 bottom-0 font-heading text-[130px] font-black leading-none tracking-[-0.08em] text-primary/[0.1]">
                    {String(index + 1).padStart(2, "0")}
                </span>

                {/* Category Image */}

                <div className="absolute inset-0 p-3">
                    <div className="relative h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
                        <Image
                            src={category.png}
                            alt={category.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                            className="object-contain drop-shadow-[0_15px_15px_rgba(16,42,67,0.12)]"
                        />
                    </div>
                </div>

                {/* Top Right Arrow */}

                <div className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-primary transition-all duration-300 group-hover:rotate-45 group-hover:border-secondary group-hover:bg-secondary group-hover:text-white">
                    <ArrowUpRight size={20} />
                </div>

                {/* Animated Bottom Line */}

                <div className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-secondary transition-transform duration-500 group-hover:scale-x-100" />
            </div>

            {/* Card Content */}

            <div className="flex flex-1 flex-col p-4">

                <h3 className="font-heading text-lg font-extrabold leading-[1.35] tracking-[-0.025em] text-primary transition-colors duration-300 group-hover:text-secondary sm:text-xl">
                    {category.name}
                </h3>

                <div className="mt-auto pt-3">
                    <div className="flex items-center justify-between gap-3 border-t border-border pt-2">

                        <span className="text-xs font-bold text-primary">
                            Explore Collection
                        </span>

                        <ArrowRight
                            size={18}
                            className="text-secondary transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
}

// ================= CONTACT CTA =================

function ContactCard({ onOpen }) {
    const benefits = [
        "Customized Rack Solutions",
        "Expert Layout Consultation",
        "Professional Installation",
    ];

    return (
        <div className="product-reveal relative isolate flex h-full min-h-[340px] flex-col justify-center overflow-hidden rounded-[20px] bg-primary p-7 text-white sm:col-span-2 sm:p-9 lg:p-10">

            {/* Background Image */}
            <Image
                src="/why1.webp"
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="-z-30 object-cover object-right"
            />

            {/* Background Overlay */}

            <div className="absolute inset-0 -z-20 bg-primary/55" />

            {/* <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071A2C] via-[#102A43]/20 to-[#102A43]/5" /> */}

            {/* Decorative Elements */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full border-[40px] border-white/5" />

            <div className="pointer-events-none absolute -bottom-32 -right-20 h-[300px] w-[300px] rounded-full bg-secondary/20 blur-[100px]" />

            {/* Content */}

            <div className="relative max-w-[480px]">

                <div className="mb-5 flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/20">
                        <MessageSquare
                            size={19}
                            className="text-secondary"
                        />
                    </div>

                    <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white">
                        Let's Build Your Space
                    </span>
                </div>

                <h3 className="font-heading text-white text-[clamp(1rem,3vw,3rem)] font-extrabold leading-[1.08] tracking-[-0.045em]">
                    Can't Find the
                    <br />
                    Perfect{" "}
                    <span className="text-secondary">
                        Rack Solution?
                    </span>
                </h3>

                {/* <p className="mt-4 max-w-[420px] text-sm leading-7 text-white/70">
                    Share your requirements with our experts.
                    We'll help you find the right display and
                    storage solutions for your business.
                </p> */}

                {/* Benefits */}
                <div className="mt-5 space-y-2.5">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit}
                            className="flex items-center gap-2.5"
                        >
                            <CheckCircle2
                                size={16}
                                className="shrink-0 text-secondary"
                            />

                            <span className="text-xs font-medium text-white sm:text-sm">
                                {benefit}
                            </span>
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="mt-5 flex flex-wrap items-center gap-3">

                    <button
                        type="button"
                        onClick={onOpen}
                        className="group inline-flex items-center justify-center gap-3 rounded-lg bg-secondary px-5 py-3.5 text-xs font-extrabold text-white transition-all duration-300 hover:bg-white hover:text-primary sm:text-sm"
                    >
                        Get a Free Quote

                        <ArrowUpRight
                            size={18}
                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </button>

                    <Link
                        href="/contact-us"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/55 px-5 py-3.5 text-xs font-bold text-white transition-all duration-300 hover:border-white hover:bg-white/10 sm:text-sm"
                    >
                        <Phone size={16} />

                        Contact Us
                    </Link>
                </div>
            </div>

            {/* Orange Corner Accent */}

            <div className="absolute bottom-0 right-0 h-20 w-20 rounded-tl-full bg-secondary/90" />

            <ArrowUpRight
                size={28}
                className="absolute bottom-4 right-4 text-white"
            />
        </div>
    );
}

// ================= MAIN PRODUCTS SECTION =================
export default function Products() {
    const sectionRef = useRef(null);

    const [openPopup, setOpenPopup] = useState(false);

    useEffect(() => {
        const reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reduced) return;

        const ctx = gsap.context(() => {

            // Heading Animation

            gsap.fromTo(
                ".products-heading",
                {
                    opacity: 0,
                    y: 35,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    stagger: 0.12,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        once: true,
                    },
                }
            );

            // Card Reveal Animation

            const cards = gsap.utils.toArray(
                ".product-reveal",
                sectionRef.current
            );

            cards.forEach((card) => {
                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        y: 45,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        clearProps: "transform,opacity",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 92%",
                            once: true,
                        },
                    }
                );
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section
                ref={sectionRef}
                id="products"
                className="relative overflow-hidden border-y border-border bg-[#F7F9FB] py-10 sm:py-12 lg:py-16"
            >
                {/* Background Decoration */}

                <div className="pointer-events-none absolute -right-32 top-0 h-[450px] w-[450px] rounded-full bg-secondary/5 blur-[130px]" />

                <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

                    {/* Section Heading */}

                    <div className="mb-10 flex flex-col justify-between gap-7 md:flex-row md:items-end">

                        <div className="max-w-[800px]">

                            <div className="products-heading mb-3 flex items-center gap-3">

                                <span className="h-[2px] w-10 bg-secondary" />

                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                                    Our Product Collection
                                </span>
                            </div>

                            <h2 className="products-heading font-heading text-[clamp(2.5rem,4.5vw,5rem)] font-extrabold leading-[1.08] tracking-[-0.05em] text-primary">
                                Supermarket Racks Built
                                <br />
                                for{" "}
                                <span className="text-secondary">
                                    Every Space.
                                </span>
                            </h2>
                        </div>

                        <Link
                            href="/our-products"
                            className="products-heading group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-primary px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-secondary"
                        >
                            View All Products

                            <ArrowUpRight
                                size={19}
                                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>

                    {/* Categories Grid */}

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 xl:gap-7">

                        {categories.map((category, index) => (
                            <ProductCard
                                key={category.slug}
                                category={category}
                                index={index}
                            />
                        ))}

                        {/* Contact CTA - Occupies Two Columns */}

                        <ContactCard
                            onOpen={() => setOpenPopup(true)}
                        />
                    </div>
                </div>
            </section>

            {/* Inquiry Popup */}

            {openPopup && (
                <InquiryPopup
                    onClose={() => setOpenPopup(false)}
                />
            )}
        </>
    );
}