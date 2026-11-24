"use client";
import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Articles() {
    const rootRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const reducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            if (reducedMotion) return;

            gsap.fromTo(
                ".contact-hero-content > *",
                { y: 45, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.13,
                    ease: "power3.out",
                    delay: 0.15,
                }
            );

            gsap.to(".contact-hero-image", {
                scale: 1.12,
                ease: "none",
                scrollTrigger: {
                    trigger: ".contact-hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            gsap.utils.toArray(".contact-reveal").forEach((element) => {
                gsap.fromTo(
                    element,
                    { y: 55, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.9,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 88%",
                            once: true,
                        },
                    }
                );
            });
        }, rootRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={rootRef} className="overflow-hidden bg-white">
            <section className="contact-hero relative flex min-h-[390px] items-center justify-center overflow-hidden bg-primary sm:min-h-[460px]">
                <div className="contact-hero-image absolute inset-0">
                    <Image
                        src="/4.webp"
                        alt="Premium supermarket and retail display rack installation"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                </div>

                <div className="absolute inset-0 bg-[#06182B]/55" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#06182B]/40 via-transparent to-[#06182B]/40" />

                {/* Decorative lines */}
                <div className="pointer-events-none absolute inset-0 opacity-15">
                    <div className="absolute left-[15%] top-0 h-full w-px bg-white/30" />
                    <div className="absolute right-[15%] top-0 h-full w-px bg-white/30" />
                </div>

                <div className="contact-hero-content relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 text-center">
                    <div className="mb-7 flex items-center gap-2 text-[12px] font-medium tracking-[0.08em] text-white/95">
                        <Link href="/" className="transition hover:text-secondary">
                            Home
                        </Link>
                        <ChevronRight size={14} />
                        <span className="text-secondary">Our Articles</span>
                    </div>

                    <div className="mb-2 flex items-center gap-3">
                        <span className="h-px w-9 bg-secondary" />
                        <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-white/95">
                            Insights & Inspiration
                        </span>
                        <span className="h-px w-9 bg-secondary" />
                    </div>

                    <h1 className="font-heading text-[clamp(3.2rem,7vw,7rem)] font-semibold leading-[1.05] tracking-[-0.055em] text-white">
                        Ideas that shape
                        <span className="text-secondary"> better spaces.</span>
                    </h1>
                </div>

                <div className="absolute bottom-0 left-0 h-[5px] w-full bg-secondary" />
            </section>

            <section className='py-20'>

            </section>

        </main>
    )
}
