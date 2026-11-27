
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight, Volume2, VolumeX, Play } from "lucide-react";

gsap.registerPlugin(useGSAP);

const leftIndustries = [
    {
        image: "/industries/1.webp",
        title: "Supermarkets",
    },
    {
        image: "/industries/2.webp",
        title: "Retail Stores",
    },
    {
        image: "/industries/3.webp",
        title: "Grocery Stores",
    },
    {
        image: "/industries/4.webp",
        title: "Hypermarkets",
    },
    {
        image: "/industries/5.webp",
        title: "Convenience Stores",
    },
];

const rightIndustries = [
    {
        image: "/industries/6.webp",
        title: "Pharmacies",
    },
    {
        image: "/industries/7.webp",
        title: "Electronics Stores",
    },
    {
        image: "/industries/8.webp",
        title: "Warehouses",
    },
    {
        image: "/industries/9.webp",
        title: "Hardware Stores",
    },
    {
        image: "/industries/10.webp",
        title: "Departmental Stores",
    },
];

function IndustryCard({ item, index }) {
    return (
        <div
            className="group relative h-[245px] w-full shrink-0 overflow-hidden rounded-[20px] bg-[#E8EEF3] xl:h-[280px]"
        >
            <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 1280px) 230px, 280px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A2C]/80 via-transparent to-transparent" />

            {/* Industry label */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center justify-between gap-2">
                    <span className="font-heading text-base font-bold text-white">
                        {item.title}
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-secondary group-hover:bg-secondary">
                        <ArrowUpRight size={15} />
                    </span>
                </div>
            </div>

            {/* Number */}
            <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/20 px-3 py-1 text-[10px] font-semibold tracking-widest text-white backdrop-blur-md">
                {String(index + 1).padStart(2, "0")}
            </span>
        </div>
    );
}

function MovingColumn({ items, direction, columnRef }) {
    return (
        <div
            className="industry-mask relative hidden h-[600px] overflow-hidden lg:block xl:h-[670px]"
            aria-hidden="true"
        >
            <div
                ref={columnRef}
                className="flex flex-col gap-5 will-change-transform"
            >
                {/* Duplicate cards for seamless infinite looping */}
                {[...items, ...items].map((item, index) => (
                    <IndustryCard
                        key={`${direction}-${index}`}
                        item={item}
                        index={index % items.length}
                    />
                ))}
            </div>
        </div>
    );
}

function MobileIndustrySlider({ items, direction }) {
    return (
        <div className="industry-mobile-mask overflow-hidden lg:hidden">
            <div
                className={`flex w-max gap-3 py-2 ${direction === "left"
                    ? "industry-slide-left"
                    : "industry-slide-right"
                    }`}
            >
                {[...items, ...items, ...items].map((item, index) => (
                    <div
                        key={`${direction}-${index}`}
                        className="group relative h-[115px] w-[155px] shrink-0 overflow-hidden rounded-xl bg-[#E8EEF3] sm:h-[145px] sm:w-[200px]"
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="200px"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#071A2C]/90 via-transparent to-transparent" />

                        <div className="absolute bottom-0 left-0 right-0 p-3">
                            <span className="text-xs font-bold text-white sm:text-sm">
                                {item.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Industries() {
    const sectionRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const videoRef = useRef(null);

    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);

    useGSAP(
        () => {
            const root = sectionRef.current;
            if (!root) return;

            const reducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            // Heading animation
            if (!reducedMotion) {
                gsap.from("[data-industry-reveal]", {
                    y: 45,
                    autoAlpha: 0,
                    duration: 0.9,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: undefined,
                });
            }

            if (reducedMotion) return;

            const animations = [];

            const createInfiniteScroll = (element, direction, duration) => {
                if (!element) return;

                const children = Array.from(element.children);
                const half = children.length / 2;

                if (!half) return;

                const firstCard = children[0];
                const duplicateCard = children[half];

                if (!firstCard || !duplicateCard) return;

                // Exact distance between original and duplicate sets
                const distance =
                    duplicateCard.offsetTop - firstCard.offsetTop;

                if (!distance) return;

                const tween = gsap.fromTo(
                    element,
                    {
                        y: direction === "up" ? 0 : -distance,
                    },
                    {
                        y: direction === "up" ? -distance : 0,
                        duration,
                        ease: "none",
                        repeat: -1,
                        overwrite: "auto",
                    }
                );

                animations.push(tween);

                // Pause on hover
                const container = element.parentElement;

                const pause = () => tween.pause();
                const resume = () => tween.resume();

                container.addEventListener("mouseenter", pause);
                container.addEventListener("mouseleave", resume);

                return () => {
                    container.removeEventListener("mouseenter", pause);
                    container.removeEventListener("mouseleave", resume);
                };
            };

            let cleanupLeft;
            let cleanupRight;

            const setup = () => {
                animations.forEach((animation) => animation.kill());
                animations.length = 0;

                cleanupLeft?.();
                cleanupRight?.();

                cleanupLeft = createInfiniteScroll(
                    leftRef.current,
                    "up",
                    45
                );

                cleanupRight = createInfiniteScroll(
                    rightRef.current,
                    "down",
                    50
                );
            };

            // Wait for layout to settle before measuring distances
            const raf = requestAnimationFrame(setup);

            const resizeObserver = new ResizeObserver(() => {
                setup();
            });

            if (leftRef.current) {
                resizeObserver.observe(leftRef.current);
            }

            if (rightRef.current) {
                resizeObserver.observe(rightRef.current);
            }

            return () => {
                cancelAnimationFrame(raf);
                resizeObserver.disconnect();

                cleanupLeft?.();
                cleanupRight?.();

                animations.forEach((animation) => animation.kill());
            };
        },
        { scope: sectionRef }
    );

    const toggleSound = () => {
        const video = videoRef.current;
        if (!video) return;

        const nextMuted = !video.muted;
        video.muted = nextMuted;
        setIsMuted(nextMuted);
    };

    const togglePlayback = async () => {
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

    return (
        <section ref={sectionRef} id="industries" className="relative overflow-hidden bg-white py-0">

            <div className="pointer-events-none absolute -left-32 top-1/3 h-[350px] w-[350px] rounded-full bg-secondary/5 blur-[100px]" />
            <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />

            <div className="relative mx-auto max-w-[1800px] px-5">
                {/* Three-column layout */}
                <div className="grid items-center gap-5 lg:grid-cols-[minmax(0,230px)_minmax(0,1fr)_minmax(0,230px)] xl:grid-cols-[minmax(0,270px)_minmax(0,1fr)_minmax(0,270px)] xl:gap-7">
                    {/* LEFT: Auto scroll upward */}
                    <MovingColumn
                        items={leftIndustries}
                        direction="up"
                        columnRef={leftRef}
                    />

                    <div className="min-w-0">

                        {/* TOP MOBILE SLIDER */}
                        <div className="mb-3 lg:hidden">
                            <MobileIndustrySlider
                                items={leftIndustries}
                                direction="left"
                            />
                        </div>

                        {/* SECTION HEADING */}
                        <div
                            data-industry-reveal
                            className="py-5 text-center"
                        >
                            <div className="mb-2 flex items-center justify-center gap-3">
                                <span className="h-px w-9 bg-secondary" />

                                <span className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
                                    Industries We Serve
                                </span>

                                <span className="h-px w-9 bg-secondary" />
                            </div>

                            <h2 className="font-heading text-[clamp(2.3rem,5vw,5rem)] font-extrabold leading-[1] tracking-[-0.055em] text-primary">
                                Spaces We{" "}
                                <span className="text-secondary">Transform.</span>
                            </h2>
                        </div>

                        {/* CENTER VIDEO */}
                        <div data-industry-reveal className="relative min-w-0">

                            <span className="pointer-events-none absolute -left-3 -top-3 h-6 w-6 border-l border-t border-secondary" />
                            <span className="pointer-events-none absolute -right-3 -top-3 h-6 w-6 border-r border-t border-secondary" />
                            <span className="pointer-events-none absolute -bottom-3 -left-3 h-6 w-6 border-b border-l border-secondary" />
                            <span className="pointer-events-none absolute -bottom-3 -right-3 h-6 w-6 border-b border-r border-secondary" />

                            <div className="rounded-[24px] border border-secondary/35 bg-white p-2.5 shadow-[0_30px_80px_-45px_rgba(16,42,67,0.35)] sm:p-3.5">

                                <div className="relative aspect-video overflow-hidden rounded-[16px] bg-primary">

                                    <video
                                        ref={videoRef}
                                        src="/hero.mp4"
                                        poster="/videos/industries-poster.webp"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                        onPlay={() => setIsPlaying(true)}
                                        onPause={() => setIsPlaying(false)}
                                        className="h-full w-full object-cover"
                                    />

                                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent" />

                                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between sm:bottom-6 sm:left-6 sm:right-6">

                                        <div className="flex items-center gap-2">
                                            <span className="h-2 w-2 animate-pulse rounded-full bg-secondary" />

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white sm:text-xs">
                                                Discover Our Work
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <button
                                                type="button"
                                                onClick={togglePlayback}
                                                aria-label={isPlaying ? "Pause video" : "Play video"}
                                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/45 text-white backdrop-blur-md transition hover:bg-secondary sm:h-10 sm:w-10"
                                            >
                                                {isPlaying ? (
                                                    <span className="flex gap-[3px]">
                                                        <span className="h-3.5 w-[3px] rounded-sm bg-white" />
                                                        <span className="h-3.5 w-[3px] rounded-sm bg-white" />
                                                    </span>
                                                ) : (
                                                    <Play size={16} fill="currentColor" />
                                                )}
                                            </button>

                                            <button
                                                type="button"
                                                onClick={toggleSound}
                                                aria-label={isMuted ? "Unmute video" : "Mute video"}
                                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/45 text-white backdrop-blur-md transition hover:bg-secondary sm:h-10 sm:w-10"
                                            >
                                                {isMuted ? (
                                                    <VolumeX size={17} />
                                                ) : (
                                                    <Volume2 size={17} />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM MOBILE SLIDER */}
                        <div className="mt-3 lg:hidden">
                            <MobileIndustrySlider
                                items={rightIndustries}
                                direction="right"
                            />
                        </div>

                    </div>


                    {/* RIGHT: Auto scroll downward */}
                    <MovingColumn
                        items={rightIndustries}
                        direction="down"
                        columnRef={rightRef}
                    />
                </div>
            </div>

            <style jsx>{`
        .industry-mask {
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          );
        }
      `}</style>
        </section>
    );
}
