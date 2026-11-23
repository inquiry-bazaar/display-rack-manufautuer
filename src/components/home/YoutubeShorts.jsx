
"use client";

import { useEffect, useRef, useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    Play,
    Volume2,
    VolumeX,
} from "lucide-react";
import { FaYoutube } from "react-icons/fa";

const shorts = [
    { id: "hQfd0uZE5AY", title: "Rack Showcase 01", color: "#D96B0B" },
    { id: "nzrPR66USZ4", title: "Rack Showcase 02", color: "#5526B7" },
    { id: "rwtP2lnHRVw", title: "Rack Showcase 03", color: "#D71937" },
    { id: "Thu8pAkt4gg", title: "Rack Showcase 04", color: "#DDA11B" },
    { id: "uLoB7KTVS3A", title: "Rack Showcase 05", color: "#C21854" },
    { id: "DTc5RKwwxOI", title: "Rack Showcase 06", color: "#174B72" },
    { id: "arBo9VtUVQg", title: "Rack Showcase 07", color: "#E17821" },
];

const wrap = (n, length) => ((n % length) + length) % length;

function getOffset(index, active, length) {
    let offset = index - active;

    if (offset > length / 2) offset -= length;
    if (offset < -length / 2) offset += length;

    return offset;
}

export default function YoutubeShorts() {
    const [activeIndex, setActiveIndex] = useState(3);
    const [isSectionVisible, setIsSectionVisible] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [scale, setScale] = useState(1);

    const sectionRef = useRef(null);
    const carouselRef = useRef(null);
    const dragRef = useRef(null);
    const draggedRef = useRef(false);

    // Responsive carousel scaling
    useEffect(() => {
        const updateScale = () => {
            const width = window.innerWidth;

            if (width < 400) setScale(0.68);
            else if (width < 640) setScale(0.78);
            else if (width < 900) setScale(0.88);
            else setScale(1);
        };

        updateScale();

        window.addEventListener("resize", updateScale);

        return () => window.removeEventListener("resize", updateScale);
    }, []);

    // Detect section visibility
    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsSectionVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    const goTo = (index) => {
        setActiveIndex(wrap(index, shorts.length));
        setIsMuted(true);
    };

    const next = () => goTo(activeIndex + 1);
    const previous = () => goTo(activeIndex - 1);

    // Drag / swipe
    const handlePointerDown = (event) => {
        if (event.target.closest("iframe")) return;

        dragRef.current = {
            x: event.clientX,
            y: event.clientY,
        };

        draggedRef.current = false;
    };

    const handlePointerUp = (event) => {
        if (!dragRef.current) return;

        const dx = event.clientX - dragRef.current.x;
        const dy = event.clientY - dragRef.current.y;

        dragRef.current = null;

        if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
            draggedRef.current = true;

            if (dx < 0) next();
            else previous();
        }
    };

    const handleCardClick = (index) => {
        if (draggedRef.current) {
            draggedRef.current = false;
            return;
        }

        if (index !== activeIndex) {
            goTo(index);
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (!carouselRef.current?.contains(document.activeElement)) {
                return;
            }

            if (event.key === "ArrowRight") {
                event.preventDefault();
                setActiveIndex((current) => wrap(current + 1, shorts.length));
                setIsMuted(true);
            }

            if (event.key === "ArrowLeft") {
                event.preventDefault();
                setActiveIndex((current) => wrap(current - 1, shorts.length));
                setIsMuted(true);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const activeVideo = shorts[activeIndex];

    return (
        <section
            ref={sectionRef}
            id="youtube-shorts"
            className="relative overflow-hidden bg-gradient-to-b from-white via-[#F0F5FA] to-white py-10 lg:py-16"
        >
            {/* Heading */}
            <div className="relative z-10 mx-auto mb-8 flex max-w-[1500px] flex-col justify-between gap-6 px-5 sm:px-8 lg:flex-row lg:items-end lg:px-12">
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
                        <span className="text-secondary">In Action.</span>
                    </h2>

                    {/* <p className="mt-5 max-w-[620px] text-sm leading-7 text-muted sm:text-base">
                        Explore our video collection and take a closer
                        look at our display racks, shelving systems,
                        and retail installations.
                    </p> */}
                </div>

                <p className="max-w-[350px] text-sm leading-7 text-muted lg:text-right">
                    Swipe the carousel or select a video to bring
                    it forward and watch.
                </p>
            </div>

            {/* CURVED 3D VIDEO CAROUSEL */}
            <div
                ref={carouselRef}
                role="region"
                aria-roledescription="carousel"
                aria-label="YouTube Shorts carousel"
                tabIndex={0}
                className="relative h-[460px] select-none overflow-hidden outline-none sm:h-[570px] lg:h-[680px]"
                style={{ touchAction: "pan-y" }}
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
                onPointerCancel={() => {
                    dragRef.current = null;
                }}
            >
                {/* Arc pivot */}
                <div
                    className="absolute left-1/2 top-0"
                    style={{
                        transform: `scale(${scale})`,
                        transformOrigin: "50% 0",
                    }}
                >
                    {shorts.map((video, index) => {
                        const offset = getOffset(
                            index,
                            activeIndex,
                            shorts.length
                        );

                        const distance = Math.abs(offset);
                        const isActive = offset === 0;

                        const angle = offset * 5.16;

                        const videoUrl =
                            `https://www.youtube.com/embed/${video.id}` +
                            `?autoplay=1` +
                            `&mute=${isMuted ? 1 : 0}` +
                            `&loop=1` +
                            `&playlist=${video.id}` +
                            `&playsinline=1` +
                            `&controls=1` +
                            `&rel=0`;

                        return (
                            <div
                                key={video.id}
                                className="absolute"
                                aria-hidden={false}
                                style={{
                                    zIndex: 30 - distance,
                                    width: 290,
                                    height: 515,
                                    left: -145,
                                    top: 44,
                                    transformOrigin: "50% 3400px",
                                    transform: isActive
                                        ? "translateY(-8px)"
                                        : `rotate(${angle}deg)`,
                                    transition:
                                        "transform 750ms cubic-bezier(0.22,1,0.36,1)",
                                }}
                            >
                                <div
                                    className="h-full w-full"
                                    style={{ perspective: "900px" }}
                                >
                                    <div
                                        onClick={() => handleCardClick(index)}
                                        className={`group relative h-full w-full overflow-hidden rounded-[26px] border-[3px] border-white shadow-[0_30px_46px_-26px_rgba(16,42,67,0.55)] ${isActive ? "cursor-default" : "cursor-pointer"
                                            }`}
                                        style={{
                                            backgroundColor: video.color,
                                            transformStyle: "preserve-3d",
                                        }}
                                    >
                                        {/* Active YouTube player */}
                                        {isActive && isSectionVisible ? (
                                            <iframe
                                                key={`${video.id}-${isMuted}`}
                                                src={videoUrl}
                                                title={video.title}
                                                className="absolute inset-0 h-full w-full"
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
                                                    className="absolute inset-0 h-full w-full object-cover"
                                                />

                                                {/* Dark overlay */}
                                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />

                                                {/* Play icon */}
                                                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                                    <div
                                                        className={`flex h-16 w-16 items-center justify-center rounded-full border border-white/50 bg-white/20 text-white backdrop-blur-md transition-transform duration-300 ${isActive ? "" : "group-hover:scale-110"
                                                            }`}
                                                    >
                                                        <Play size={26} fill="currentColor" />
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {/* Top badge */}
                                        <div className="pointer-events-none absolute left-4 top-4 z-20 rounded-full border border-white/25 bg-black/40 px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                                            {String(index + 1).padStart(2, "0")} /{" "}
                                            {String(shorts.length).padStart(2, "0")}
                                        </div>

                                        {/* Overlay for inactive cards */}
                                        {!isActive && (
                                            <button
                                                type="button"
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    handleCardClick(index);
                                                }}
                                                aria-label={`Play ${video.title}`}
                                                className="absolute inset-0 z-30 cursor-pointer"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* CONTROLS */}
            <div className="relative z-10 mx-auto mt-2 flex max-w-[1500px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={previous}
                        aria-label="Previous video"
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-white text-primary transition hover:border-secondary hover:bg-secondary hover:text-white"
                    >
                        <ArrowLeft size={20} />
                    </button>

                    <button
                        type="button"
                        onClick={next}
                        aria-label="Next video"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition hover:bg-secondary"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>

                <div className="text-center">
                    <p className="font-heading text-sm font-bold text-primary">
                        {String(activeIndex + 1).padStart(2, "0")}
                        <span className="mx-2 text-muted">/</span>
                        {String(shorts.length).padStart(2, "0")}
                    </p>

                    <p className="mt-1 hidden text-xs text-muted sm:block">
                        {activeVideo.title}
                    </p>
                </div>

                <a
                    href={`https://www.youtube.com/shorts/${activeVideo.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-secondary"
                >
                    <FaYoutube size={21} className="text-secondary" />

                    <span className="hidden sm:inline">
                        Watch on YouTube
                    </span>
                </a>
            </div>
        </section>
    );
}
