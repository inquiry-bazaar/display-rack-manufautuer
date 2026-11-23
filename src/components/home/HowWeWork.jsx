
"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const steps = [
    {
        number: "01",
        label: "Consultation",
        title: "Understanding Your",
        highlight: "Requirements.",
        description:
            "Every great retail space begins with a clear understanding of your business. We discuss your products, store dimensions, storage needs, and display goals.",
    },
    {
        number: "02",
        label: "Design & Planning",
        title: "Designed Around",
        highlight: "Your Space.",
        description:
            "Our team develops practical shelving layouts and customized rack configurations that make the best use of your available retail space.",
    },
    {
        number: "03",
        label: "Manufacturing",
        title: "Built With",
        highlight: "Precision.",
        description:
            "Using quality materials, strong steel frameworks, and professional finishing processes, we manufacture racks designed for reliable everyday use.",
    },
    {
        number: "04",
        label: "Delivery & Installation",
        title: "Ready for",
        highlight: "Your Business.",
        description:
            "We coordinate delivery and installation to help transform your store into an organized, functional, and professional retail environment.",
    },
];

export default function HowWeWork() {
    const sectionRef = useRef(null);
    const videoRef = useRef(null);
    const contentRef = useRef(null);
    const activeRef = useRef(0);
    const durationRef = useRef(0);
    const [activeStep, setActiveStep] = useState(0);

    useGSAP(
        () => {
            const section = sectionRef.current;
            const video = videoRef.current;
            const content = contentRef.current;

            if (!section || !video || !content) return;

            const reducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            const handleMetadata = () => {
                durationRef.current = Number.isFinite(video.duration)
                    ? video.duration
                    : 0;
            };

            video.pause();
            video.currentTime = 0;

            video.addEventListener("loadedmetadata", handleMetadata);

            if (video.readyState >= 1) {
                handleMetadata();
            }

            if (reducedMotion) {
                return () => {
                    video.removeEventListener(
                        "loadedmetadata",
                        handleMetadata
                    );
                };
            }

            const progressBars = gsap.utils.toArray(
                "[data-work-progress]",
                section
            );

            const updateStep = (index) => {
                if (activeRef.current === index) return;

                activeRef.current = index;
                setActiveStep(index);
            };

            const trigger = ScrollTrigger.create({
                trigger: section,
                start: "top top",

                // 4 stages, each receiving 800px of scroll
                end: "+=3200",

                pin: true,
                pinSpacing: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,

                onUpdate: (self) => {
                    const progress = self.progress;

                    // Change step at 25%, 50%, and 75%
                    const index = Math.min(
                        Math.floor(progress * steps.length),
                        steps.length - 1
                    );

                    updateStep(index);

                    // Synchronize video frames with scroll position
                    const duration = durationRef.current;

                    if (duration > 0 && video.readyState >= 1) {
                        const targetTime = Math.min(
                            progress * duration,
                            Math.max(0, duration - 0.05)
                        );

                        if (
                            Math.abs(video.currentTime - targetTime) > 0.04
                        ) {
                            video.currentTime = targetTime;
                        }
                    }

                    // Fill each progress bar according to its 25% segment
                    progressBars.forEach((bar, i) => {
                        const segmentProgress = gsap.utils.clamp(
                            0,
                            1,
                            progress * steps.length - i
                        );

                        gsap.set(bar, {
                            scaleX: segmentProgress,
                            transformOrigin: "left center",
                        });
                    });
                },
            });

            return () => {
                trigger.kill();
                video.removeEventListener(
                    "loadedmetadata",
                    handleMetadata
                );
            };
        },
        { scope: sectionRef }
    );

    const step = steps[activeStep];

    return (
        <section
            ref={sectionRef}
            id="how-we-work"
            className="relative h-screen min-h-[650px] overflow-hidden bg-primary text-white"
        >
            {/* Full-screen background video */}
            <div className="absolute inset-0">
                <video
                    ref={videoRef}
                    src="/how-we.mp4"
                    muted
                    playsInline
                    preload="auto"
                    poster="/how-we-work-poster.webp"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Dark overlay for text readability */}
                {/* <div className="absolute inset-0 bg-[#071A2C]/55" /> */}

                {/* Left-side gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#071A2C]/40 via-[#071A2C]/20 to-transparent" />

                {/* Subtle bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2C]/30 via-transparent to-[#071A2C]/10" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col justify-center px-5 pb-28 pt-28 sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">
                <div className="max-w-[950px]">
                    {/* Eyebrow */}
                    <div className="mb-7 flex items-center gap-3">
                        <span className="h-[2px] w-10 bg-secondary" />

                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/90">
                            How We Work
                        </span>
                    </div>

                    {/* Animated content */}
                    <div ref={contentRef} className="min-h-[320px]">
                        <div
                            key={activeStep}
                            className="work-content-enter"
                        >
                            <div className="mb-6 flex items-center gap-4">
                                <span className="font-heading text-lg font-semibold text-secondary">
                                    {step.number}
                                </span>

                                <span className="h-px w-9 bg-white/90" />

                                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
                                    {step.label}
                                </span>
                            </div>

                            <h2 className="font-heading text-[clamp(2.8rem,6vw,6rem)] font-extrabold leading-[1] tracking-[-0.025em]">
                                {step.title}
                                <br />
                                <span className="text-secondary">
                                    {step.highlight}
                                </span>
                            </h2>

                            <p className="mt-5 max-w-[560px] text-sm leading-6 text-white/75 sm:text-base lg:text-lg">
                                {step.description}
                            </p>
                        </div>
                    </div>

                    <Link
                        href="/contact-us"
                        className="group mt-5 inline-flex w-fit items-center gap-4 rounded-full bg-secondary px-6 py-4 text-sm font-bold text-white transition-colors duration-300 hover:bg-white hover:text-primary"
                    >
                        Discuss Your Project
                        <ArrowUpRight
                            size={18}
                            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </div>

            {/* Bottom progress navigation */}
            <div className="absolute bottom-5 left-0 right-0 z-20">
                <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
                    <div className="mb-5 flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                            Our Process
                        </span>

                        <span className="font-heading text-sm font-semibold text-white">
                            0{activeStep + 1}
                            <span className="mx-2 text-white/40">/</span>
                            04
                        </span>
                    </div>

                    <div className="grid grid-cols-4 gap-2 sm:gap-4">
                        {steps.map((item, index) => (
                            <div key={item.number}>
                                <div className="relative h-[3px] overflow-hidden rounded-full bg-white/25">
                                    <div
                                        data-work-progress
                                        className="absolute inset-0 origin-left scale-x-0 bg-secondary"
                                    />
                                </div>

                                <div className="mt-3 hidden items-center justify-between sm:flex">
                                    <span
                                        className={`text-xs font-medium transition-colors duration-300 ${activeStep === index
                                            ? "text-white"
                                            : "text-white/45"
                                            }`}
                                    >
                                        {item.label}
                                    </span>

                                    <span className="text-[10px] text-white/40">
                                        {item.number}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        .work-content-enter {
          animation: workContentReveal 0.65s
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes workContentReveal {
          from {
            opacity: 0;
            transform: translateY(35px);
            filter: blur(6px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .work-content-enter {
            animation: none;
          }
        }
      `}</style>
        </section>
    );
}
