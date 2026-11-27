
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
    ArrowUpRight,
    ArrowLeft,
    ArrowRight,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

gsap.registerPlugin(ScrollTrigger);
import categories from "@/utils/data";

export default function Categories() {
    const sectionRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        if (!swiper || swiper.destroyed) return;

        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;

        swiper.navigation.destroy();
        swiper.navigation.init();
        swiper.navigation.update();
    }, [swiper]);

    useEffect(() => {
        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reducedMotion) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".category-heading",
                {
                    y: 45,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: "power3.out",
                    stagger: 0.12,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                ".category-slider",
                {
                    y: 55,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        once: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef}
            className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-16"
        >
            <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

                {/* ================= SECTION HEADING ================= */}
                <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">

                    <div className="max-w-[700px]">
                        {/* Eyebrow */}
                        <div className="category-heading mb-2 flex items-center gap-3">
                            <span className="h-[2px] w-10 bg-secondary" />

                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                                Explore Our Collection
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="category-heading font-heading text-4xl font-extrabold leading-[1.1] tracking-[-0.04em] text-primary sm:text-5xl lg:text-6xl">
                            Our Product{" "}
                            <span className="text-secondary">
                                Categories.
                            </span>
                        </h2>

                        {/* Description */}
                        {/* <p className="category-heading mt-5 max-w-[550px] text-sm leading-7 text-muted sm:text-base">
                            Discover our range of supermarket racks, retail
                            shelving, and storage solutions designed for
                            modern commercial spaces.
                        </p> */}
                    </div>

                    {/* Slider navigation */}
                    <div className="sm:flex hidden items-center gap-3">
                        <button
                            ref={prevRef}
                            type="button"
                            aria-label="Previous categories"
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
                        >
                            <ArrowLeft size={19} />
                        </button>

                        <button
                            ref={nextRef}
                            type="button"
                            aria-label="Next categories"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition-all duration-300 hover:bg-secondary"
                        >
                            <ArrowRight size={19} />
                        </button>
                    </div>
                </div>

                {/* ================= CATEGORY SLIDER ================= */}
                <div className="category-slider">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        onSwiper={setSwiper}
                        loop={categories.length > 4}
                        speed={850}
                        spaceBetween={16}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.4,
                                spaceBetween: 12,
                            },
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 14,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 18,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 22,
                            },
                        }}
                        className="!overflow-visible"
                    >
                        {categories.map((category, index) => (
                            <SwiperSlide key={index}>
                                <Link
                                    href={category.slug}
                                    className="group block"
                                >
                                    {/* Image area */}
                                    <div className="relative flex h-[280px] items-center justify-center overflow-hidden rounded-2xl border border-border/70 bg-surface/50 transition-all duration-500 group-hover:border-secondary/40 group-hover:bg-white group-hover:shadow-xl sm:h-[320px] lg:h-[360px]">

                                        {/* Number */}
                                        <span className="absolute left-4 top-4 z-10 text-xs font-bold tracking-widest text-muted/50">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        {/* Decorative circle */}
                                        <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/5 transition-all duration-500 group-hover:scale-110 group-hover:bg-secondary/10" />

                                        {/* PNG rack image */}
                                        <div className="relative h-[90%] w-[90%] transition-transform duration-700 ease-out group-hover:-translate-y-3 group-hover:scale-105">
                                            <Image
                                                src={category.png}
                                                alt={category.name}
                                                fill
                                                sizes="(max-width: 480px) 75vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                                className="object-contain drop-shadow-[0_18px_18px_rgba(0,0,0,0.10)]"
                                            />
                                        </div>

                                        {/* Hover arrow */}
                                        <div className="absolute bottom-2 right-3 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-secondary text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                            <ArrowUpRight size={19} />
                                        </div>
                                    </div>

                                    {/* Category name - reveals below image */}
                                    <div className="overflow-hidden pt-3 text-center">
                                        <h3 className="translate-y-2 font-heading text-base font-bold text-primary opacity-70 transition-all duration-500 group-hover:translate-y-0 group-hover:text-secondary group-hover:opacity-100 sm:text-lg">
                                            {category.name}
                                        </h3>

                                        <div className="mx-auto mt-1 h-[2px] w-0 bg-secondary transition-all duration-500 group-hover:w-12" />
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
