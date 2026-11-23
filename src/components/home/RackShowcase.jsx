
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
    Check,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const racks = [
    {
        id: 1,
        name: "Supermarket Display Racks",
        category: "Retail Display",
        image: "/products/6.webp",
        href: "/areas/supermarket-display-racks",
        description:
            "Smart, durable shelving solutions designed to organize products and create an exceptional shopping experience.",
        features: [
            "High-quality steel construction",
            "Multiple adjustable shelves",
            "Modern retail-ready design",
            "Custom sizes and configurations",
        ],
        // Adjust these positions to match your rack image.
        hotspots: [
            { x: 50, y: 22 },
            { x: 50, y: 43 },
            { x: 50, y: 64 },
            { x: 50, y: 85 },
        ],
    },
    {
        id: 2,
        name: "Gondola Display Racks",
        category: "Double-Sided Display",
        image: "/products/8.webp",
        href: "/areas/gondola-display-racks",
        description:
            "Versatile gondola shelving systems that maximize floor space and improve product visibility.",
        features: [
            "Single and double-sided options",
            "Adjustable shelf heights",
            "Durable powder-coated finish",
            "Modular configurations",
        ],
        hotspots: [
            { x: 50, y: 23 },
            { x: 48, y: 42 },
            { x: 52, y: 62 },
            { x: 50, y: 82 },
        ],
    },
    {
        id: 3,
        name: "Wall Mounted Racks",
        category: "Wall Display",
        image: "/products/4.webp",
        href: "/areas/wall-mounted-racks",
        description:
            "Space-saving wall shelving systems designed for efficient merchandising and a clean store layout.",
        features: [
            "Space-efficient installation",
            "Strong metal framework",
            "Flexible shelf arrangements",
            "Clean, professional appearance",
        ],
        hotspots: [
            { x: 48, y: 20 },
            { x: 50, y: 40 },
            { x: 50, y: 62 },
            { x: 50, y: 83 },
        ],
    },
];

const wrap = (index) => (index + racks.length) % racks.length;

export default function RackShowcase() {
    const sectionRef = useRef(null);
    const dragStartRef = useRef(null);
    const ignoreClickRef = useRef(false);

    const [activeIndex, setActiveIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [activeFeature, setActiveFeature] = useState(null);

    const activeRack = racks[activeIndex];

    const changeRack = (index) => {
        setActiveIndex(wrap(index));
        setActiveFeature(null);
    };

    const nextRack = () => changeRack(activeIndex + 1);
    const prevRack = () => changeRack(activeIndex - 1);

    const openRack = (index) => {
        setActiveIndex(index);
        setActiveFeature(null);
        setIsOpen(true);
    };

    const closeRack = () => {
        setIsOpen(false);
        setActiveFeature(null);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (
                window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ) {
                return;
            }

            gsap.fromTo(
                ".rack-reveal",
                { opacity: 0, y: 35 },
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
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handlePointerDown = (event) => {
        if (isOpen) return;
        dragStartRef.current = {
            x: event.clientX,
            id: event.pointerId,
        };
    };

    const handlePointerUp = (event) => {
        if (isOpen || !dragStartRef.current) return;

        const difference = event.clientX - dragStartRef.current.x;

        if (Math.abs(difference) > 55) {
            ignoreClickRef.current = true;

            if (difference < 0) nextRack();
            else prevRack();
        }

        dragStartRef.current = null;
    };

    const handleRackClick = (index) => {
        if (ignoreClickRef.current) {
            ignoreClickRef.current = false;
            return;
        }

        openRack(index);
    };

    const handleKeyDown = (event) => {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            prevRack();
        }

        if (event.key === "ArrowRight") {
            event.preventDefault();
            nextRack();
        }

        if (event.key === "Escape" && isOpen) {
            closeRack();
        }
    };

    return (
        <section
            ref={sectionRef}
            id="rack-showcase"
            className="relative overflow-hidden bg-white"
        >
            <div className="grid min-h-[760px] lg:grid-cols-[minmax(0,1fr)_390px] border border-gray-200 xl:grid-cols-[minmax(0,1fr)_440px]">

                {/* LEFT SIDE */}
                <div className="relative flex min-w-0 flex-col overflow-hidden px-5 pb-10 pt-14 sm:px-8 lg:px-10 lg:pt-20 xl:px-12">

                    {/* Header - hidden in detail mode */}
                    <div
                        className={`rack-reveal overflow-hidden transition-all duration-500 ${isOpen
                            ? "max-h-0 opacity-0"
                            : "max-h-[350px] opacity-100"
                            }`}
                    >
                        <div className="mb-2 flex items-center gap-3">
                            <span className="h-[2px] w-10 bg-secondary" />

                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                                Explore Our Collection
                            </span>
                        </div>

                        <h2 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-[-0.045em] text-primary sm:text-5xl lg:text-6xl">
                            Discover Our{" "}
                            <span className="text-secondary">
                                Rack Solutions.
                            </span>
                        </h2>

                        {/* <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
                            Explore premium display and storage systems
                            designed to make retail spaces more organized,
                            functional, and visually appealing.
                        </p> */}
                    </div>

                    {/* MAIN IMAGE AREA */}
                    <div
                        role="region"
                        aria-roledescription="carousel"
                        aria-label="Rack collection"
                        tabIndex={0}
                        onKeyDown={handleKeyDown}
                        onPointerDown={handlePointerDown}
                        onPointerUp={handlePointerUp}
                        onPointerCancel={() => {
                            dragStartRef.current = null;
                        }}
                        className={`relative flex-1 select-none outline-none transition-all duration-500 ${isOpen
                            ? "mt-0 min-h-[530px] sm:min-h-[620px]"
                            : "mt-8 min-h-[390px] cursor-grab active:cursor-grabbing sm:min-h-[500px] lg:mt-2 lg:min-h-[550px]"
                            }`}
                        style={{
                            perspective: "1600px",
                            touchAction: "pan-y",
                        }}
                    >
                        {/* DETAIL VIEW TOP BAR */}
                        <div
                            className={`absolute inset-x-0 top-2 z-40 flex items-start justify-between gap-4 transition-all duration-500 ${isOpen
                                ? "translate-y-0 opacity-100"
                                : "pointer-events-none -translate-y-4 opacity-0"
                                }`}
                        >
                            <button
                                type="button"
                                onClick={closeRack}
                                tabIndex={isOpen ? 0 : -1}
                                className="flex shrink-0 items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-primary transition hover:border-secondary hover:text-secondary sm:px-5"
                            >
                                <ArrowLeft size={16} />
                                All Racks
                            </button>

                            <div className="text-right">
                                <h3 className="font-heading text-base font-bold text-primary sm:text-xl">
                                    {activeRack.name}
                                </h3>

                                <p className="mt-1 text-xs font-semibold tracking-[0.15em] text-muted">
                                    {String(activeIndex + 1).padStart(2, "0")}
                                    {" / "}
                                    {String(racks.length).padStart(2, "0")}
                                </p>
                            </div>
                        </div>

                        {/* Background glow */}
                        <div className="pointer-events-none absolute bottom-8 left-1/2 h-[250px] w-[70%] -translate-x-1/2 rounded-full bg-secondary/5 blur-[70px]" />

                        {/* THREE RACKS / SINGLE RACK */}
                        {racks.map((rack, index) => {
                            let offset = index - activeIndex;

                            if (offset > racks.length / 2) {
                                offset -= racks.length;
                            }

                            if (offset < -racks.length / 2) {
                                offset += racks.length;
                            }

                            const isActive = index === activeIndex;
                            const hidden = isOpen && !isActive;


                            const transform = isOpen
                                ? isActive
                                    ? "translateX(-50%) translateZ(0px) scale(1)"
                                    : `translateX(calc(-50% + ${offset * 110}%)) translateZ(-200px) scale(0.75)`
                                : `
        translateX(calc(-50% + ${offset * 105}%))
        translateZ(${-Math.abs(offset) * 65}px)
        rotateY(${-offset * 5}deg)
        scale(${isActive ? 1 : 0.78})
    `;


                            return (
                                <div
                                    key={rack.id}

                                    className={`absolute bottom-8 left-1/2 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen
                                        ? "h-[78%] w-[75%] sm:w-[65%] lg:w-[58%]"
                                        : "h-[85%] w-[48%] sm:w-[38%] lg:w-[32%]"
                                        }`}

                                    style={{
                                        transform,
                                        transformOrigin: "center bottom",
                                        transformStyle: "preserve-3d",
                                        opacity: hidden ? 0 : 1,
                                        pointerEvents: hidden ? "none" : "auto",
                                        zIndex: isActive ? 30 : 20,
                                    }}
                                >
                                    <div className="pointer-events-none absolute -bottom-2 left-1/2 h-6 w-[70%] -translate-x-1/2 rounded-[50%] bg-primary/15 blur-lg" />

                                    <button
                                        type="button"
                                        onClick={() => handleRackClick(index)}
                                        disabled={isOpen}
                                        aria-label={`Open details for ${rack.name}`}
                                        className={`group relative block h-full w-full ${isOpen ? "cursor-default" : "cursor-pointer"
                                            }`}
                                    >
                                        <Image
                                            src={rack.image}
                                            alt={rack.name}
                                            fill
                                            draggable={false}
                                            sizes="(max-width: 640px) 75vw, (max-width: 1024px) 50vw, 35vw"
                                            className={`object-contain object-bottom drop-shadow-[0_20px_24px_rgba(16,42,67,0.14)] transition-transform duration-500 ${isOpen
                                                ? ""
                                                : "group-hover:-translate-y-2"
                                                }`}
                                        />
                                    </button>

                                    {/* NUMBERED FEATURE MARKERS */}
                                    {isOpen &&
                                        isActive &&
                                        rack.hotspots.map((point, featureIndex) => (
                                            <button
                                                key={featureIndex}
                                                type="button"
                                                aria-label={`Show feature ${featureIndex + 1}: ${rack.features[featureIndex]}`}
                                                onClick={() => setActiveFeature(featureIndex)}
                                                className={`absolute z-40 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-xs font-bold shadow-lg transition-all duration-300 hover:scale-110 sm:h-9 sm:w-9 ${activeFeature === featureIndex
                                                    ? "border-secondary bg-secondary text-white"
                                                    : "border-primary/10 bg-white text-primary hover:bg-secondary hover:text-white"
                                                    }`}
                                                style={{
                                                    left: `${point.x}%`,
                                                    top: `${point.y}%`,
                                                }}
                                            >
                                                {featureIndex + 1}
                                            </button>
                                        ))}
                                </div>
                            );
                        })}

                        {/* DETAIL VIEW ARROWS */}
                        {isOpen && (
                            <>
                                <button
                                    type="button"
                                    onClick={prevRack}
                                    aria-label="Previous rack"
                                    className="absolute left-0 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-primary/15 bg-white/95 text-primary shadow-sm transition hover:border-secondary hover:text-secondary"
                                >
                                    <ChevronLeft size={21} />
                                </button>

                                <button
                                    type="button"
                                    onClick={nextRack}
                                    aria-label="Next rack"
                                    className="absolute right-0 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-primary/15 bg-white/95 text-primary shadow-sm transition hover:border-secondary hover:text-secondary"
                                >
                                    <ChevronRight size={21} />
                                </button>
                            </>
                        )}
                    </div>

                    <div
                        className={`rack-reveal relative z-40 mx-auto flex w-full max-w-[650px] items-center justify-between gap-4 overflow-hidden transition-all duration-500 ${isOpen
                            ? "pointer-events-none max-h-0 opacity-0"
                            : "max-h-[160px] opacity-100"
                            }`}
                    >
                        <button
                            type="button"
                            onClick={prevRack}
                            tabIndex={isOpen ? -1 : 0}
                            aria-label="Previous rack"
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-white text-primary transition hover:border-secondary hover:bg-secondary hover:text-white"
                        >
                            <ArrowLeft size={19} />
                        </button>

                        <div className="min-w-0 flex-1 text-center">
                            <h3 className="font-heading text-base font-bold text-primary sm:text-xl">
                                {activeRack.name}
                            </h3>

                            <div className="mt-3 flex justify-center gap-2">
                                {racks.map((rack, index) => (
                                    <button
                                        key={rack.id}
                                        type="button"
                                        onClick={() => changeRack(index)}
                                        tabIndex={isOpen ? -1 : 0}
                                        aria-label={`Select ${rack.name}`}
                                        aria-current={index === activeIndex ? "true" : undefined}
                                        className={`h-2.5 rounded-full transition-all duration-300 ${index === activeIndex
                                            ? "w-8 bg-secondary"
                                            : "w-2.5 bg-primary/20 hover:bg-secondary/60"
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">
                                Click a rack to explore
                            </p> */}
                        </div>

                        <button
                            type="button"
                            onClick={nextRack}
                            tabIndex={isOpen ? -1 : 0}
                            aria-label="Next rack"
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white transition hover:bg-secondary"
                        >
                            <ArrowRight size={19} />
                        </button>
                    </div>
                </div>

                {/* RIGHT DETAILS PANEL */}
                <aside className="relative border-t border-primary/10 bg-[#F8FAFC] px-6 py-12 sm:px-9 lg:border-l lg:border-t-0 lg:px-8 lg:py-20 xl:px-10">
                    <div className="lg:sticky lg:top-28">

                        <div className="mb-7 flex items-center gap-3">
                            <span className="h-[2px] w-8 bg-secondary" />

                            <span className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
                                {isOpen ? "Rack Details" : "Our Collection"}
                            </span>
                        </div>

                        {!isOpen ? (
                            /* DEFAULT: COLLECTION LIST */
                            <div>
                                <h3 className="font-heading text-2xl font-extrabold text-primary">
                                    Explore Our Racks
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-muted">
                                    Select any rack to explore its design,
                                    features, and applications.
                                </p>

                                <div className="mt-8 divide-y divide-primary/10 border-t border-primary/10">
                                    {racks.map((rack, index) => (
                                        <button
                                            key={rack.id}
                                            type="button"
                                            onClick={() => openRack(index)}
                                            className="group flex w-full items-center gap-4 py-4 text-left transition-all"
                                        >
                                            <div className="relative h-[82px] w-[82px] shrink-0 overflow-hidden rounded-lg bg-white">
                                                <Image
                                                    src={rack.image}
                                                    alt={rack.name}
                                                    fill
                                                    sizes="82px"
                                                    className="object-contain p-2"
                                                />
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted">
                                                    {rack.category}
                                                </p>

                                                <h4 className="mt-1 font-heading text-sm font-bold leading-5 text-primary transition-colors group-hover:text-secondary">
                                                    {rack.name}
                                                </h4>

                                                <p className="mt-1 text-xs text-muted">
                                                    View rack details
                                                </p>
                                            </div>

                                            <ArrowUpRight
                                                size={19}
                                                className="shrink-0 text-primary/40 transition-colors group-hover:text-secondary"
                                            />
                                        </button>
                                    ))}
                                </div>

                                <div className="mt-9 border-t border-primary/10 pt-6">
                                    <p className="text-xs leading-6 text-muted">
                                        Premium display and storage solutions
                                        by{" "}
                                        <span className="font-bold text-primary">
                                            Arya Insulation
                                        </span>
                                        .
                                    </p>
                                </div>
                            </div>
                        ) : (
                            /* OPEN: SELECTED RACK DETAILS ONLY */
                            <div key={activeRack.id}>
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
                                    {activeRack.category}
                                </p>

                                <h3 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-[-0.035em] text-primary">
                                    {activeRack.name}
                                </h3>

                                <p className="mt-5 text-sm leading-7 text-muted">
                                    {activeRack.description}
                                </p>

                                <div className="mt-9">
                                    <h4 className="mb-4 text-sm font-bold text-primary">
                                        Rack Features
                                    </h4>

                                    <div className="divide-y divide-primary/10 border-y border-primary/10">
                                        {activeRack.features.map((feature, index) => (
                                            <button
                                                key={index}
                                                type="button"
                                                onClick={() => setActiveFeature(index)}
                                                className={`flex w-full items-center gap-4 rounded-md px-2 py-4 text-left transition-colors ${activeFeature === index
                                                    ? "bg-secondary/10"
                                                    : "hover:bg-white"
                                                    }`}
                                            >
                                                <span
                                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${activeFeature === index
                                                        ? "bg-secondary text-white"
                                                        : "bg-white text-primary"
                                                        }`}
                                                >
                                                    {index + 1}
                                                </span>

                                                <span
                                                    className={`flex-1 text-sm font-medium leading-6 ${activeFeature === index
                                                        ? "text-primary"
                                                        : "text-primary/75"
                                                        }`}
                                                >
                                                    {feature}
                                                </span>

                                                <Check
                                                    size={16}
                                                    className={
                                                        activeFeature === index
                                                            ? "text-secondary"
                                                            : "text-primary/25"
                                                    }
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-9">
                                    <Link
                                        href={activeRack.href}
                                        className="group flex items-center justify-between rounded-lg bg-primary px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-secondary"
                                    >
                                        View Product Details
                                        <ArrowUpRight
                                            size={19}
                                            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                        />
                                    </Link>
                                </div>

                                <button
                                    type="button"
                                    onClick={closeRack}
                                    className="mt-5 flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-secondary"
                                >
                                    <ArrowLeft size={17} />
                                    Back to All Racks
                                </button>
                            </div>
                        )}
                    </div>
                </aside>
            </div>
        </section>
    );
}
