
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import {
    ArrowUpRight,
    ArrowRight,
    Play,
    Pause,
    Volume2,
    VolumeX,
    ChevronDown,
} from "lucide-react";

export default function Hero() {
    const heroRef = useRef(null);
    const videoRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    // ================= VIDEO + GSAP =================
    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            video.play().catch(() => {
                setIsPlaying(false);
            });
        }

        const ctx = gsap.context(() => {
            const reducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            if (reducedMotion) return;

            const tl = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
            });

            tl.fromTo(
                ".hero-eyebrow",
                { y: 25, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    clearProps: "all",
                }
            )
                .fromTo(
                    ".hero-heading-line",
                    { y: 65, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.9,
                        stagger: 0.12,
                        clearProps: "all",
                    },
                    "-=0.35"
                )
                .fromTo(
                    ".hero-description",
                    { y: 25, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.7,
                        clearProps: "all",
                    },
                    "-=0.4"
                )
                .fromTo(
                    ".hero-button",
                    { y: 25, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.65,
                        stagger: 0.12,
                        clearProps: "all",
                    },
                    "-=0.35"
                )
                .fromTo(
                    ".hero-bottom",
                    { y: 15, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        clearProps: "all",
                    },
                    "-=0.3"
                );
        }, heroRef);

        return () => {
            ctx.revert();
        };
    }, []);

    // ================= PLAY / PAUSE =================
    const togglePlay = async () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            try {
                await video.play();
                setIsPlaying(true);
            } catch {
                setIsPlaying(false);
            }
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    // ================= MUTE / UNMUTE =================
    const toggleMute = () => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = !video.muted;
        setIsMuted(video.muted);
    };

    return (
        <section
            ref={heroRef}
            className="relative isolate flex min-h-[650px] items-center justify-center overflow-hidden bg-primary text-white sm:min-h-[520px]"
        >
            {/* ================= BACKGROUND VIDEO ================= */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster="/poster.webp"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onVolumeChange={(e) =>
                        setIsMuted(e.currentTarget.muted)
                    }
                    className="h-full w-full object-cover"
                >
                    <source src="/hero.mp4" type="video/mp4" />
                </video>
            </div>

            {/* ================= DARK OVERLAYS ================= */}
            {/* <div className="pointer-events-none absolute inset-0 z-[1] bg-[#07182e]/55" /> */}

            <div className="poin
            ter-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#07182e]/50 via-transparent to-[#07182e]/10" />

            {/* Subtle orange glow */}
            <div className="pointer-events-none absolute -bottom-60 left-1/2 z-[1] h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-secondary/10 blur-[120px]" />

            {/* ================= CENTER CONTENT ================= */}
            <div className="relative z-20 mx-auto flex w-full max-w-[1500px] flex-col items-center justify-center px-5 py-10 text-center sm:px-8 lg:px-12">

                <div className="mx-auto flex w-full max-w-[1050px] flex-col items-center">

                    {/* Eyebrow */}
                    <div className="hero-eyebrow mb-4 flex items-center justify-center gap-3">
                        <span className="h-[2px] w-8 bg-secondary sm:w-12" />

                        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white sm:text-sm">
                            Arya Insulation
                        </span>

                        <span className="h-[2px] w-8 bg-secondary sm:w-12" />
                    </div>

                    {/* ================= HEADING ================= */}
                    <h1 className="font-heading text-[clamp(2.2rem,5vw,6rem)] font-extrabold leading-[1.12] tracking-[-0.025em] text-white">

                        <span className="hero-heading-line block">
                            Display Racks Built for
                        </span>

                        <span className="hero-heading-line block">
                            <span className="text-secondary">Better</span>{" "}
                            Retail Spaces.
                        </span>

                    </h1>

                    {/* ================= DESCRIPTION ================= */}
                    {/* <p className="hero-description mx-auto mt-6 max-w-[680px] text-sm leading-7 text-white/90 sm:text-base sm:leading-8 lg:text-lg">
                        Premium supermarket racks, retail shelving, and
                        customized display solutions designed to organize,
                        showcase, and elevate your business.
                    </p> */}

                    {/* ================= CTA BUTTONS ================= */}
                    <div className="relative z-30 mt-10 flex w-full flex-wrap items-center justify-center gap-4">

                        {/* Primary Button */}
                        <Link
                            href="/areas"
                            className="hero-button group inline-flex min-h-[56px] shrink-0 items-center justify-center gap-3 whitespace-nowrap rounded-lg bg-secondary px-7 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:brightness-95 hover:shadow-xl sm:px-9"
                        >
                            <span>
                                Explore Our Racks
                            </span>

                            <ArrowUpRight
                                size={19}
                                className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                            />
                        </Link>

                        {/* Secondary Button */}
                        <Link
                            href="/contact-us"
                            className="hero-button group inline-flex min-h-[56px] shrink-0 items-center justify-center gap-3 whitespace-nowrap rounded-lg border-2 border-white bg-white/15 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-primary sm:px-9"
                        >
                            <span>
                                Get Free Layout
                            </span>

                            <ArrowRight
                                size={19}
                                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
