
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight, Star } from "lucide-react";


const testimonials = [
  {
    id: 1,
    title: "Google Review from Delhi",
    name: "[First name] · [Store], [Locality], Delhi",
    designation: "Delhi Customer Review",
    review:
      "[A real Google review from a Delhi customer, with permission.]",
    image: "/industries/1.webp",
  },
  {
    id: 2,
    title: "Google Review from Delhi",
    name: "[First name] · [Store], [Locality], Delhi",
    designation: "Delhi Customer Review",
    review:
      "[A real Google review from a Delhi customer, with permission.]",
    image: "/industries/6.webp",
  },
  {
    id: 3,
    title: "Google Review from Delhi",
    name: "[First name] · [Store], [Locality], Delhi",
    designation: "Delhi Customer Review",
    review:
      "[A real Google review from a Delhi customer, with permission.]",
    image: "/industries/10.webp",
  },
  {
    id: 4,
    title: "Google Review from Delhi",
    name: "[First name] · [Store], [Locality], Delhi",
    designation: "Delhi Customer Review",
    review:
      "[A real Google review from a Delhi customer, with permission.]",
    image: "/industries/8.webp",
  },
];


function getOffset(index, active, total) {
    let offset = index - active;

    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    return offset;
}

export default function DelhiTestimonials() {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);
    const touchStart = useRef(null);

    useEffect(() => {
        const media = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

        const update = () => setReducedMotion(media.matches);
        update();

        media.addEventListener("change", update);

        return () => media.removeEventListener("change", update);
    }, []);

    useEffect(() => {
        if (paused || reducedMotion) return;

        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % testimonials.length);
        }, 3500);

        return () => clearInterval(timer);
    }, [paused, reducedMotion]);

    const next = () =>
        setActive((prev) => (prev + 1) % testimonials.length);

    const previous = () =>
        setActive(
            (prev) =>
                (prev - 1 + testimonials.length) % testimonials.length
        );

    return (
        <section
            id="testimonials"
            className="relative isolate overflow-hidden bg-[#102A43] py-10 text-white sm:py-12 lg:py-15"
        >
            {/* Background decoration */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.12]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                }}
            />

            <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#F58220]/15 blur-[110px]" />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F58220]/10 to-transparent" />

            <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
                {/* Top heading layout */}
                <div className="grid items-start gap-8 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
                    <div>
                        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2">
                            <span className="h-2 w-2 rounded-full bg-secondary" />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
                                Client Testimonials
                            </span>
                        </div>

                        <h2 className="max-w-[680px] font-heading text-[clamp(2.8rem,5vw,5rem)] font-extrabold leading-[1] tracking-[-0.025em]">
                            Stories That
                            <br />
                            <span className="text-secondary">
                                Build Trust.
                            </span>
                        </h2>
                    </div>

                    <div className="lg:pt-4">
                        <p className="max-w-[530px] text-base leading-[1.8] text-white/75 lg:text-lg">
                            Every retail space has a story. Discover how
                            thoughtful display rack solutions help businesses
                            create organized, functional, and beautiful stores.
                        </p>

                        <Link
                            href="/contact-us"
                            className="group mt-7 inline-flex items-center gap-3"
                        >
                            <span className="rounded-full bg-white px-6 py-3 text-sm font-bold text-primary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                                Start Your Project
                            </span>

                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                                <ArrowUpRight size={19} />
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Animated card stage */}
                <div
                    className="relative mt-8 h-[470px] sm:mt-12 sm:h-[540px] lg:mt-8 lg:h-[560px]"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    onFocusCapture={() => setPaused(true)}
                    onBlurCapture={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget)) {
                            setPaused(false);
                        }
                    }}
                    onTouchStart={(event) => {
                        touchStart.current = event.touches[0].clientX;
                    }}
                    onTouchEnd={(event) => {
                        if (touchStart.current === null) return;

                        const distance =
                            event.changedTouches[0].clientX -
                            touchStart.current;

                        if (Math.abs(distance) > 50) {
                            if (distance < 0) next();
                            else previous();
                        }

                        touchStart.current = null;
                    }}
                >
                    {testimonials.map((item, index) => {
                        const offset = getOffset(
                            index,
                            active,
                            testimonials.length
                        );

                        const isCenter = offset === 0;
                        const isVisible = Math.abs(offset) <= 1;
                        // The center card is larger and higher.
                        // Side cards are smaller, lower and partially faded.
                        const translateX = offset === 0 ? "0%" : `${offset * 100}%`;
                        const translateY = isCenter ? "-50%" : "-25%";
                        const scale = isCenter ? 1 : 0.58;

                        return (
                            <div
                                key={item.id}
                                aria-hidden={!isCenter}
                                className="absolute left-1/2 top-1/2 h-[390px] w-[min(76vw,530px)] sm:h-[440px] sm:w-[min(65vw,570px)] lg:h-[465px] lg:w-[min(42vw,570px)]"
                                style={{
                                    transform: `translate(-50%, ${translateY}) translateX(${translateX}) scale(${scale})`,
                                    opacity: isVisible ? isCenter ? 1 : 0.55 : 0,
                                    zIndex: isCenter ? 10 : isVisible ? 5 : 0,
                                    filter: isCenter ? "brightness(1)" : "brightness(0.75)",
                                    pointerEvents: isCenter ? "auto" : isVisible ? "auto" : "none",
                                    transition: reducedMotion
                                        ? "none"
                                        : "transform 950ms cubic-bezier(0.22,1,0.36,1), opacity 800ms ease, filter 800ms ease",
                                }}
                                onClick={() => {
                                    if (offset === -1) previous();
                                    if (offset === 1) next();
                                }}
                            >
                                <div
                                    className={`relative h-full overflow-hidden rounded-[22px] bg-[#24405A] ${isCenter
                                        ? "shadow-[0_35px_80px_-30px_rgba(0,0,0,0.55)]"
                                        : "cursor-pointer"
                                        }`}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.designation}
                                        fill
                                        sizes="(max-width: 768px) 76vw, 570px"
                                        className="object-cover"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#071A2C]/65 via-transparent to-black/10" />

                                    {/* Active review overlay */}
                                    <div
                                        className={`absolute bottom-4 left-4 right-4 rounded-[17px] bg-[#F58220] p-5 shadow-xl transition-all duration-500 sm:bottom-5 sm:left-5 sm:right-5 sm:p-7 ${isCenter
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-6 opacity-0"
                                            }`}
                                    >
                                        <div className="mb-3 flex items-center justify-between gap-3">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-white/85">
                                                {item.designation}
                                            </span>

                                            <div className="flex gap-0.5 text-white">
                                                {Array.from({ length: 5 }).map(
                                                    (_, i) => (
                                                        <Star
                                                            key={i}
                                                            size={12}
                                                            fill="currentColor"
                                                        />
                                                    )
                                                )}
                                            </div>
                                        </div>

                                        <h3 className="font-heading text-xl font-bold leading-tight tracking-[-0.035em] text-white sm:text-[26px]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 line-clamp-4 text-xs leading-[1.7] text-white/90 sm:text-sm">
                                            “{item.review}”
                                        </p>

                                        <div className="mt-4 border-t border-white/30 pt-3">
                                            <p className="text-xs font-bold text-white sm:text-sm">
                                                {item.name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Navigation */}
                <div className="relative z-20 mt-1 flex items-center justify-center gap-6">
                    <button
                        type="button"
                        onClick={previous}
                        aria-label="Previous testimonial"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-secondary hover:bg-secondary"
                    >
                        <ArrowLeft size={19} />
                    </button>

                    <div className="flex items-center gap-2">
                        {testimonials.map((item, index) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setActive(index)}
                                aria-label={`Show testimonial ${index + 1}`}
                                aria-current={
                                    active === index ? "true" : undefined
                                }
                                className={`h-2 rounded-full transition-all duration-500 ${active === index
                                    ? "w-9 bg-secondary"
                                    : "w-2 bg-white/35"
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={next}
                        aria-label="Next testimonial"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-secondary hover:bg-secondary"
                    >
                        <ArrowRight size={19} />
                    </button>
                </div>

                {/* <p className="mt-5 text-center text-xs font-semibold tracking-[0.15em] text-white/55">
                    {String(active + 1).padStart(2, "0")}
                    <span className="mx-3">/</span>
                    {String(testimonials.length).padStart(2, "0")}
                </p> */}
            </div>
        </section>
    );
}
