
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
    ArrowUpRight,
    ArrowRight,
    ChevronRight,
    Layers3,
    LayoutGrid,
} from "lucide-react";

import categories from "@/utils/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function CategoryPage({ category }) {
    const sectionRef = useRef(null);
    const heroRef = useRef(null);

    const products = category.products || [];

    const relatedCategories = categories
        .filter((item) => item.slug !== category.slug)
        .slice(0, 4);

    useGSAP(
        () => {
            const reducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            if (reducedMotion) return;

            // ================= HERO ANIMATION =================

            const tl = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
            });

            tl.fromTo(
                ".category-hero-image",
                {
                    scale: 1.12,
                },
                {
                    scale: 1,
                    duration: 1.8,
                }
            ).fromTo(
                ".category-hero-content",
                {
                    y: 45,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    stagger: 0.15,
                },
                "-=1.3"
            );

            // ================= HERO PARALLAX =================

            gsap.to(".category-hero-image", {
                yPercent: 12,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.2,
                },
            });

            // ================= SECTION HEADINGS =================

            gsap.utils
                .toArray(".category-heading")
                .forEach((heading) => {
                    gsap.fromTo(
                        heading,
                        {
                            y: 35,
                            opacity: 0,
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: heading,
                                start: "top 88%",
                                once: true,
                            },
                        }
                    );
                });

            // ================= PRODUCT CARDS =================

            ScrollTrigger.batch(".category-product-card", {
                start: "top 92%",
                once: true,

                onEnter: (batch) => {
                    gsap.fromTo(
                        batch,
                        {
                            y: 60,
                            opacity: 0,
                            scale: 0.97,
                        },
                        {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            duration: 0.85,
                            stagger: 0.1,
                            ease: "power3.out",
                            overwrite: true,
                        }
                    );
                },
            });

            // ================= RELATED CATEGORIES =================

            ScrollTrigger.batch(".related-category-card", {
                start: "top 90%",
                once: true,

                onEnter: (batch) => {
                    gsap.fromTo(
                        batch,
                        {
                            y: 50,
                            opacity: 0,
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            stagger: 0.12,
                            ease: "power3.out",
                        }
                    );
                },
            });
        },
        {
            scope: sectionRef,
            dependencies: [category.slug],
            revertOnUpdate: true,
        }
    );

    return (
        <main ref={sectionRef} className="overflow-hidden bg-white">
            <section
                ref={heroRef}
                className="relative isolate flex min-h-[350px] items-center justify-center overflow-hidden bg-primary sm:min-h-[460px]"
            >
                {/* Background Image */}

                <div className="category-hero-image absolute inset-0 -z-30">
                    <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                </div>

                {/* Background Overlay */}

                <div className="absolute inset-0 -z-20 bg-primary/55" />

                <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#06182B]/55 via-transparent to-[#06182B]/5" />

                {/* Decorative Elements */}

                <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full border border-white/10" />

                <div className="pointer-events-none absolute -right-24 -bottom-32 h-96 w-96 rounded-full border border-white/10" />

                {/* Hero Content */}
                <div className="relative mx-auto max-w-[1150px] px-5 py-20 text-center sm:px-8 lg:px-12">

                    {/* Breadcrumb */}

                    <div className="category-hero-content mb-7 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-white/90 sm:text-sm">
                        <Link
                            href="/"
                            className="transition-colors hover:text-secondary"
                        >
                            Home
                        </Link>

                        <ChevronRight size={14} />

                        <span className="text-secondary">
                            {category.name}
                        </span>
                    </div>

                    {/* Eyebrow */}

                    <div className="category-hero-content mb-5 flex items-center justify-center gap-3">

                        <span className="h-px w-8 bg-secondary sm:w-12" />

                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/90 sm:text-xs">
                            Our Product Collection
                        </span>

                        <span className="h-px w-8 bg-secondary sm:w-12" />
                    </div>

                    {/* Category Name */}

                    <h1 className="category-hero-content font-heading text-[clamp(2rem,4.5vw,4.5rem)] font-extrabold leading-[1.12] tracking-[-0.015em] text-white">
                        {category.name}
                        <span className="text-secondary">.</span>
                    </h1>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-secondary" />
            </section>

            <section className="relative py-10 sm:py-12 lg:py-16">

                <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

                    {/* Section Heading */}

                    <div className="category-heading mb-10 flex flex-col justify-between gap-5 border-b border-border pb-7 sm:mb-12 lg:flex-row lg:items-end">

                        <div>
                            <div className="mb-4 flex items-center gap-2">

                                <span className="h-[2px] w-8 bg-secondary" />

                                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary">
                                    Explore Our Collection
                                </span>
                            </div>

                            <h2 className="font-heading text-3xl font-extrabold leading-[1.15] tracking-[-0.04em] text-primary sm:text-4xl lg:text-5xl">
                                Discover Our
                                <br className="hidden sm:block" />

                                <span className="text-secondary">
                                    {" "}Display Rack Solutions.
                                </span>
                            </h2>

                            <p className="mt-4 max-w-[650px] text-sm leading-relaxed text-muted sm:text-base">
                                Explore our range of storage and display
                                solutions designed to enhance product
                                presentation, maximize available space,
                                and improve your retail environment.
                            </p>
                        </div>

                        {/* Product Count */}

                        <div className="flex w-fit shrink-0 items-center gap-3 rounded-lg border border-border bg-surface px-5 py-3">

                            <LayoutGrid
                                size={18}
                                className="text-secondary"
                            />

                            <span className="text-sm font-semibold text-primary">
                                Showing {products.length} Products
                            </span>
                        </div>
                    </div>

                    {/* ================= PRODUCT GRID ================= */}

                    <div className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">

                        {products.map((product, index) => (
                            <Link
                                key={product.slug}
                                href={`/${product.slug}`}
                                className="category-product-card group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-[border-color,box-shadow] duration-500 hover:border-secondary/50 hover:shadow-[0_15px_40px_rgba(16,42,67,0.10)]"
                            >
                                {/* Product Image Area */}

                                <div className="relative isolate aspect-[4/3.6] overflow-hidden bg-[#F3F5F7]">

                                    {/* Background Circle */}

                                    <div className="absolute left-1/2 top-1/2 -z-10 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 transition-transform duration-700 group-hover:scale-125" />

                                    {/* Product Number */}

                                    <span className="absolute left-4 top-4 z-10 rounded-md border border-border bg-white px-3 py-1.5 text-[10px] font-bold tracking-widest text-primary">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    {/* Arrow Icon */}

                                    <div className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-primary transition-all duration-300 group-hover:rotate-12 group-hover:border-secondary group-hover:bg-secondary group-hover:text-white">
                                        <ArrowUpRight size={19} />
                                    </div>

                                    {/* Image */}

                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 479px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
                                        className="object-contain p-8 transition-transform duration-700 ease-out group-hover:scale-110 sm:p-10"
                                    />

                                    {/* Bottom Accent */}

                                    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-secondary transition-all duration-500 group-hover:w-full" />
                                </div>

                                {/* Product Information */}

                                <div className="flex flex-1 flex-col p-5 sm:p-6">

                                    <span className="mb-3 text-[9px] font-bold uppercase tracking-[0.18em] text-secondary">
                                        Display Rack Solutions
                                    </span>

                                    <h3 className="font-heading text-base font-extrabold leading-[1.5] text-primary transition-colors duration-300 group-hover:text-secondary sm:text-lg">
                                        {product.name}
                                    </h3>

                                    {/* Product Link */}

                                    <div className="mt-auto pt-5">

                                        <div className="flex items-center justify-between border-t border-border pt-4">

                                            <span className="text-xs font-bold text-primary transition-colors group-hover:text-secondary">
                                                Explore Product
                                            </span>

                                            <ArrowRight
                                                size={17}
                                                className="text-secondary transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Empty Products */}

                    {products.length === 0 && (
                        <div className="rounded-2xl border border-dashed border-border bg-surface px-6 py-16 text-center">

                            <Layers3
                                size={40}
                                className="mx-auto mb-4 text-secondary"
                            />

                            <h3 className="font-heading text-xl font-bold text-primary">
                                Products Coming Soon
                            </h3>

                            <p className="mt-2 text-sm text-muted">
                                Contact us for more information about
                                this product collection.
                            </p>

                            <Link
                                href="/contact-us"
                                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white"
                            >
                                Contact Us
                                <ArrowUpRight size={16} />
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* ==============================================
                RELATED CATEGORIES
            ============================================== */}
            {relatedCategories.length > 0 && (
                <section className="relative overflow-hidden border-t border-border bg-[#F3F5F7] py-16 sm:py-20 lg:py-24">

                    {/* Background Decoration */}

                    <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-secondary/5 blur-[100px]" />

                    <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

                        {/* Heading */}

                        <div className="category-heading mb-10 flex flex-col justify-between gap-6 lg:mb-12 lg:flex-row lg:items-end">

                            <div>
                                <div className="mb-4 flex items-center gap-2">

                                    <span className="h-[2px] w-8 bg-secondary" />

                                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary">
                                        More Solutions
                                    </span>
                                </div>

                                <h2 className="font-heading text-3xl font-extrabold tracking-[-0.04em] text-primary sm:text-4xl lg:text-5xl">
                                    Explore Related
                                    <span className="text-secondary">
                                        {" "}Categories.
                                    </span>
                                </h2>

                                <p className="mt-4 max-w-[600px] text-sm leading-relaxed text-muted sm:text-base">
                                    Discover more display and storage
                                    solutions for different retail spaces
                                    and business requirements.
                                </p>
                            </div>

                            <Link
                                href="/our-products"
                                className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg border border-primary bg-transparent px-6 py-3.5 text-sm font-bold text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
                            >
                                View All Categories

                                <ArrowUpRight
                                    size={18}
                                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </Link>
                        </div>

                        {/* Related Categories Grid */}

                        <div className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-6">

                            {relatedCategories.map((item, index) => (
                                <Link
                                    key={item.slug}
                                    href={`/${item.slug}`}
                                    className="related-category-card group relative isolate flex min-h-[330px] flex-col justify-end overflow-hidden rounded-2xl bg-primary p-5 sm:min-h-[360px] lg:min-h-[390px] lg:p-6"
                                >
                                    {/* Background Image */}

                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        sizes="(max-width: 479px) 100vw, (max-width: 1023px) 50vw, 25vw"
                                        className="-z-30 object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlays */}

                                    <div className="absolute inset-0 -z-20 bg-primary/15 transition-colors duration-500 group-hover:bg-primary/30" />

                                    <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#06182B] via-[#06182B]/65 to-transparent" />

                                    {/* Top Number */}

                                    <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xs font-bold text-white backdrop-blur-md">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    {/* Top Arrow */}

                                    <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary transition-all duration-300 group-hover:rotate-12 group-hover:bg-secondary group-hover:text-white">
                                        <ArrowUpRight size={21} />
                                    </div>

                                    {/* Category Content */}

                                    <div className="relative">

                                        <span className="mb-4 block h-[3px] w-10 bg-secondary transition-all duration-500 group-hover:w-16" />

                                        <span className="mb-3 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-white/70">
                                            <Layers3
                                                size={14}
                                                className="text-secondary"
                                            />

                                            {item.products.length} Products
                                        </span>

                                        <h3 className="font-heading text-xl font-extrabold leading-[1.35] tracking-tight text-white">
                                            {item.name}
                                        </h3>

                                        <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-4">

                                            <span className="text-xs font-semibold text-white/80">
                                                Explore Collection
                                            </span>

                                            <ArrowRight
                                                size={18}
                                                className="text-secondary transition-transform group-hover:translate-x-1"
                                            />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
