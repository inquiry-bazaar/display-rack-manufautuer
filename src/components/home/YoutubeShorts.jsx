"use client";

import { useEffect, useRef, useState } from "react";

import {
    ArrowLeft,
    ArrowRight,
    Play,
} from "lucide-react";

import { FaYoutube } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, A11y } from "swiper/modules";

import "swiper/css";

const shorts = [
    {
        id: "hQfd0uZE5AY",
        title: "Rack Showcase 01",
    },
    {
        id: "nzrPR66USZ4",
        title: "Rack Showcase 02",
    },
    {
        id: "rwtP2lnHRVw",
        title: "Rack Showcase 03",
    },
    {
        id: "Thu8pAkt4gg",
        title: "Rack Showcase 04",
    },
    {
        id: "uLoB7KTVS3A",
        title: "Rack Showcase 05",
    },
    {
        id: "DTc5RKwwxOI",
        title: "Rack Showcase 06",
    },
    {
        id: "arBo9VtUVQg",
        title: "Rack Showcase 07",
    },
];

export default function YoutubeShorts() {
    const sectionRef = useRef(null);
    const swiperRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [isSectionVisible, setIsSectionVisible] =
        useState(false);

    // ================= SECTION VISIBILITY =================

    useEffect(() => {
        const node = sectionRef.current;

        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsSectionVisible(entry.isIntersecting);
            },
            {
                threshold: 0.3,
            }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    // ================= SLIDER CONTROLS =================

    const previous = () => {
        swiperRef.current?.slidePrev();
    };

    const next = () => {
        swiperRef.current?.slideNext();
    };

    const goTo = (index) => {
        swiperRef.current?.slideToLoop(index);
    };

    const activeVideo = shorts[activeIndex];

    return (
        <section
            ref={sectionRef}
            id="youtube-shorts"
            className="relative overflow-hidden bg-gradient-to-b from-white via-[#F0F5FA] to-white py-10 sm:py-14 lg:py-16"
        >

            {/* ================= HEADING ================= */}

            <div className="relative z-10 mx-auto mb-8 flex max-w-[1500px] flex-col justify-between gap-6 px-5 sm:px-8 lg:mb-10 lg:flex-row lg:items-end lg:px-12">

                <div>

                    <div className="mb-2 flex items-center gap-3">

                        <span className="h-[2px] w-10 bg-secondary" />

                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                            Watch Our Work
                        </span>
                    </div>

                    <h2 className="font-heading text-[clamp(2.4rem,4.5vw,5rem)] font-extrabold leading-[1.08] tracking-[-0.05em] text-primary">
                        See Our Racks

                        <br />

                        <span className="text-secondary">
                            In Action.
                        </span>
                    </h2>
                </div>

                <div className="flex flex-wrap items-end justify-between gap-5 lg:justify-end">

                    {/* <p className="max-w-[320px] text-sm leading-7 text-muted lg:text-right">
                        Explore our display rack installations,
                        product showcases, and innovative retail
                        storage solutions.
                    </p> */}

                    {/* Navigation Buttons */}

                    <div className="flex shrink-0 items-center gap-3">

                        <button
                            type="button"
                            onClick={previous}
                            aria-label="Previous video"
                            className="group flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-white text-primary transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-white sm:h-14 sm:w-14"
                        >
                            <ArrowLeft
                                size={22}
                                className="transition-transform group-hover:-translate-x-0.5"
                            />
                        </button>

                        <button
                            type="button"
                            onClick={next}
                            aria-label="Next video"
                            className="group flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition-all duration-300 hover:bg-secondary sm:h-14 sm:w-14"
                        >
                            <ArrowRight
                                size={22}
                                className="transition-transform group-hover:translate-x-0.5"
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* ================= STRAIGHT VIDEO SLIDER ================= */}

            <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">

                <Swiper
                    modules={[Keyboard, A11y]}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onSlideChange={(swiper) => {
                        setActiveIndex(swiper.realIndex);
                    }}
                    slidesPerView={1.3}
                    spaceBetween={14}
                    centeredSlides={true}
                    loop={true}
                    speed={650}
                    grabCursor={true}
                    slideToClickedSlide={false}
                    watchSlidesProgress={true}
                    keyboard={{
                        enabled: true,
                        onlyInViewport: true,
                    }}
                    breakpoints={{
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                        },
                        640: {
                            slidesPerView: 2.5,
                            spaceBetween: 18,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 22,
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 24,
                        },
                    }}
                    className="youtube-straight-slider !py-5"
                >
                    {shorts.map((video, index) => {
                        const isActive = activeIndex === index;

                        const isPlaying =
                            isActive && isSectionVisible;

                        const videoUrl =
                            `https://www.youtube.com/embed/${video.id}` +
                            `?autoplay=1` +
                            `&mute=1` +
                            `&loop=1` +
                            `&playlist=${video.id}` +
                            `&playsinline=1` +
                            `&controls=1` +
                            `&rel=0`;

                        return (
                            <SwiperSlide key={video.id}>

                                <div
                                    className={`group relative aspect-[9/16] w-full overflow-hidden rounded-[20px] border-[3px] bg-primary transition-all duration-500 sm:rounded-[24px] ${isActive
                                            ? "border-secondary shadow-[0_15px_35px_rgba(245,130,32,0.18)]"
                                            : "border-white shadow-[0_10px_30px_rgba(16,42,67,0.12)]"
                                        }`}
                                >

                                    {/* ================= ACTIVE VIDEO ================= */}

                                    {isPlaying ? (

                                        <iframe
                                            src={videoUrl}
                                            title={video.title}
                                            className="absolute inset-0 h-full w-full border-0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                        />

                                    ) : (

                                        <>

                                            {/* Thumbnail */}

                                            <img
                                                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                                alt={video.title}
                                                loading="lazy"
                                                draggable={false}
                                                className="absolute inset-0 h-full w-full select-none object-cover transition-transform duration-700 group-hover:scale-105"
                                            />

                                            {/* Dark Overlay */}

                                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/25" />

                                            {/* Video Play Button */}

                                            <button
                                                type="button"
                                                onClick={() => goTo(index)}
                                                aria-label={`Play ${video.title}`}
                                                className="absolute inset-0 z-10 flex items-center justify-center"
                                            >

                                                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/50 bg-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-secondary group-hover:bg-secondary sm:h-[72px] sm:w-[72px]">

                                                    <Play
                                                        size={28}
                                                        fill="currentColor"
                                                        className="ml-1"
                                                    />
                                                </span>
                                            </button>

                                            {/* Bottom Content */}

                                            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-4 sm:p-5">

                                                <div className="mb-2 flex items-center gap-2">

                                                    <FaYoutube
                                                        size={19}
                                                        className="text-red-500"
                                                    />

                                                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/80">
                                                        YouTube Shorts
                                                    </span>
                                                </div>

                                                <h3 className="font-heading text-sm font-bold text-white sm:text-base">
                                                    {video.title}
                                                </h3>
                                            </div>
                                        </>
                                    )}

                                    {/* ================= TOP BADGE ================= */}

                                    <div className="pointer-events-none absolute left-3 top-3 z-20 rounded-full border border-white/25 bg-black/40 px-3 py-1.5 text-[10px] font-bold tracking-wider text-white backdrop-blur-md sm:left-4 sm:top-4">

                                        {String(index + 1).padStart(2, "0")}

                                        {" / "}

                                        {String(shorts.length).padStart(2, "0")}
                                    </div>

                                    {/* Playing Indicator */}

                                    {isPlaying && (
                                        <div className="pointer-events-none absolute right-3 top-3 z-20 flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-wider text-white">

                                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />

                                            Playing
                                        </div>
                                    )}
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>

            {/* ================= BOTTOM CONTROLS ================= */}

            <div className="relative z-10 mx-auto mt-4 flex max-w-[1500px] flex-wrap items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">

                {/* Video Counter */}

                <div className="flex items-center gap-3">

                    <span className="font-heading text-2xl font-extrabold text-primary">

                        {String(activeIndex + 1).padStart(2, "0")}
                    </span>

                    <span className="h-px w-7 bg-secondary" />

                    <span className="text-sm font-semibold text-muted">

                        {String(shorts.length).padStart(2, "0")}
                    </span>
                </div>

                {/* Pagination Dots */}

                <div className="flex items-center justify-center gap-2">

                    {shorts.map((video, index) => (
                        <button
                            key={video.id}
                            type="button"
                            onClick={() => goTo(index)}
                            aria-label={`Go to video ${index + 1}`}
                            aria-current={
                                activeIndex === index
                                    ? "true"
                                    : undefined
                            }
                            className={`h-2 rounded-full transition-all duration-500 ${activeIndex === index
                                    ? "w-8 bg-secondary"
                                    : "w-2 bg-primary/20 hover:bg-secondary/60"
                                }`}
                        />
                    ))}
                </div>

                {/* YouTube Link */}

                <a
                    href={`https://www.youtube.com/shorts/${activeVideo.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-secondary"
                >
                    <FaYoutube
                        size={24}
                        className="text-red-600"
                    />

                    <span className="hidden sm:inline">
                        Watch on YouTube
                    </span>
                </a>
            </div>
        </section>
    );
}