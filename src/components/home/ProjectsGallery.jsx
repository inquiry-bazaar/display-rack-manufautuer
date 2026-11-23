
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, MoveUpRight } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Replace project details and images with actual completed projects.
const projects = [
    {
        id: "01",
        location: "Delhi, India",
        category: "Supermarket Rack Installation",
        title: "Modern Supermarket Setup",
        description:
            "A thoughtfully planned supermarket shelving layout featuring double-sided gondola racks, wall-mounted displays, and organized customer aisles.",
        image: "/2.webp",
        type: "Gondola & Wall Racks",
        year: "2026",
    },
    {
        id: "02",
        location: "Noida, India",
        category: "Retail Display Solutions",
        title: "Premium Retail Store",
        description:
            "A modern retail display arrangement designed to improve product visibility, store organization, and everyday merchandising.",
        image: "/4.webp",
        type: "Retail Display Racks",
        year: "2026",
    },
    {
        id: "03",
        location: "Gurugram, India",
        category: "Grocery Store Shelving",
        title: "Organized Grocery Space",
        description:
            "A practical grocery store shelving solution with adjustable metal shelves and efficient product display arrangements.",
        image: "/1.webp",
        type: "Grocery Display Racks",
        year: "2026",
    },
    {
        id: "04",
        location: "Faridabad, India",
        category: "Commercial Storage & Display",
        title: "Smart Storage Solutions",
        description:
            "A strong, functional storage and display system built to support commercial operations while making effective use of available space.",
        image: "/3.webp",
        type: "Storage & Display Racks",
        year: "2026",
    },
];

function ProjectCard({ project, index, total }) {
    return (
        <article
            data-project-card
            className="sticky top-[100px] w-full pb-8 sm:top-[110px] lg:top-[120px]"
            style={{
                zIndex: index + 1,
            }}
        >
            <div className="overflow-hidden rounded-[20px] border border-[#E2E8F0] bg-[#F7F8F4] shadow-[0_18px_55px_-30px_rgba(16,42,67,0.3)] sm:rounded-[26px]">
                {/* Main image */}
                <div
                    data-project-image
                    className="group relative h-[280px] overflow-hidden bg-[#E7EDF2] sm:h-[400px]"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 1400px"
                        className="project-photo object-cover"
                        priority={index === 0}
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-[#06192B]/55 via-transparent to-[#06192B]/15" />

                    {/* Top labels */}
                    <div className="absolute left-0 right-0 top-0 flex items-start justify-between gap-4 p-5 sm:p-8 lg:p-10">
                        <div>
                            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm sm:text-xs">
                                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                                {project.category}
                            </span>

                            <h3 className="font-heading text-[clamp(1.8rem,3.3vw,3.7rem)] font-bold leading-[1.1] tracking-[-0.045em] text-white">
                                {project.location}
                            </h3>
                        </div>

                        <span className="rounded-full border border-white/30 bg-black/20 px-4 py-2 font-heading text-xs font-bold text-white backdrop-blur-sm">
                            {project.id} / {String(total).padStart(2, "0")}
                        </span>
                    </div>

                    {/* Bottom image link */}
                    <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8">
                        <Link
                            href="/contact-us"
                            aria-label={`Enquire about ${project.title}`}
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/15 text-white backdrop-blur-md transition-all duration-300 hover:rotate-45 hover:border-secondary hover:bg-secondary sm:h-14 sm:w-14"
                        >
                            <MoveUpRight size={22} />
                        </Link>
                    </div>
                </div>

                {/* Project information below image */}
                <div className="grid gap-6 px-5 py-6 sm:px-8 lg:grid-cols-[1.2fr_0.75fr_auto] lg:items-center lg:gap-10 lg:px-10">
                    <div>
                        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary sm:text-xs">
                            {project.category}
                        </p>

                        <h4 className="font-heading text-xl font-bold tracking-[-0.04em] text-primary sm:text-2xl lg:text-3xl">
                            {project.title}
                        </h4>

                        <p className="mt-2 max-w-[530px] text-xs leading-[1.75] text-muted sm:text-sm">
                            {project.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-5 border-t border-primary/10 pt-5 lg:border-l lg:border-t-0 lg:py-2 lg:pl-8">
                        <div>
                            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted">
                                Rack Solution
                            </p>
                            <p className="font-heading text-xs font-bold text-primary sm:text-sm">
                                {project.type}
                            </p>
                        </div>

                        <div>
                            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted">
                                Completion
                            </p>
                            <p className="font-heading text-xs font-bold text-primary sm:text-sm">
                                {project.year}
                            </p>
                        </div>
                    </div>

                    <Link
                        href="/contact-us"
                        className="group inline-flex w-fit items-center gap-3 rounded-full bg-primary py-3 pl-5 pr-3 text-xs font-bold text-white transition-colors duration-300 hover:bg-secondary sm:text-sm"
                    >
                        Explore Project
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary transition-transform duration-300 group-hover:rotate-45">
                            <ArrowUpRight size={18} />
                        </span>
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default function ProjectsGallery() {
    const sectionRef = useRef(null);

    useGSAP(
        () => {
            const root = sectionRef.current;
            if (!root) return;

            const reducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            if (reducedMotion) return;

            // Heading animation
            gsap.from("[data-project-heading]", {
                y: 45,
                autoAlpha: 0,
                duration: 0.95,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: root,
                    start: "top 82%",
                    once: true,
                },
            });

            const cards = gsap.utils.toArray("[data-project-card]");

            cards.forEach((card, index) => {
                const image = card.querySelector(".project-photo");

                // Image reveals with a gentle cinematic zoom
                gsap.fromTo(
                    image,
                    {
                        scale: 1.12,
                    },
                    {
                        scale: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: card,
                            start: "top bottom",
                            end: "top 120px",
                            scrub: 1,
                        },
                    }
                );

                // The previous card scales down as the next card
                // scrolls upward and overlaps it.
                if (index < cards.length - 1) {
                    const nextCard = cards[index + 1];

                    gsap.to(card.firstElementChild, {
                        scale: 0.955,
                        filter: "brightness(0.78)",
                        transformOrigin: "center top",
                        ease: "none",
                        scrollTrigger: {
                            trigger: nextCard,
                            start: "top bottom",
                            end: "top 120px",
                            scrub: 1,
                        },
                    });
                }
            });

            // Final section entrance
            gsap.from("[data-project-bottom]", {
                y: 40,
                autoAlpha: 0,
                duration: 0.85,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "[data-project-bottom]",
                    start: "top 90%",
                    once: true,
                },
            });
        },
        { scope: sectionRef }
    );

    return (
        <section ref={sectionRef} id="projects"
            className="relative bg-white py-10 sm:py-12 lg:py-15 border border-gray-200"
        >
            <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
                {/* Section heading */}
                <div className="mb-12 grid items-end gap-7 lg:mb-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
                    <div data-project-heading>
                        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/15 px-4 py-2">
                            <span className="h-2 w-2 rounded-full bg-secondary" />

                            <span className="text-[11px] font-bold uppercase tracking-[0.17em] text-primary">
                                Featured Projects
                            </span>
                        </div>

                        <h2 className="font-heading text-[clamp(2.8rem,5vw,5.6rem)] font-extrabold leading-[1.06] tracking-[-0.055em] text-primary">
                            Retail Spaces
                            <br />
                            <span className="text-secondary">
                                We've Transformed.
                            </span>
                        </h2>
                    </div>

                    <div data-project-heading className="lg:pb-2">
                        <p className="max-w-[460px] text-sm leading-[1.85] text-muted sm:text-base lg:ml-auto">
                            Explore retail environments enhanced with
                            practical shelving, strong display racks, and
                            thoughtfully planned store layouts.
                        </p>

                        <Link
                            href="/contact-us"
                            className="group mt-6 inline-flex items-center gap-3 font-heading text-sm font-bold text-primary transition-colors hover:text-secondary lg:ml-auto"
                        >
                            Discuss Your Project
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white transition-all group-hover:rotate-45 group-hover:bg-secondary">
                                <ArrowUpRight size={17} />
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Sticky stacked gallery */}
                <div data-project-stack className="relative">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            total={projects.length}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
