"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

import {
    ChevronRight,
    ChevronLeft,
    ArrowUpRight,
    ArrowRight,
    CalendarDays,
    Search,
    BookOpen,
    X,
    AlertCircle,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const LIMIT = 9;

function formatDate(date) {
    return new Date(date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Kolkata",
    });
}

// ================= ARTICLE CARD =================
function BlogCard({ blog, index }) {
    return (
        <article className="article-card group flex h-full flex-col overflow-hidden rounded-[20px] border border-border bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(16,42,67,0.10)]">

            {/* Blog Image */}

            <Link
                href={`/our-articles/${blog.slug}`}
                className="relative block aspect-[16/10] overflow-hidden bg-surface"
            >
                <Image
                    src={blog.image || "/4.webp"}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />

                <span className="absolute left-4 top-4 rounded-md bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-primary">
                    Article / {String(index + 1).padStart(2, "0")}
                </span>

                <span className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary transition-all duration-300 group-hover:rotate-45 group-hover:bg-secondary group-hover:text-white">
                    <ArrowUpRight size={23} />
                </span>
            </Link>

            {/* Blog Content */}

            <div className="flex flex-1 flex-col p-5">

                <div className="mb-2 flex items-center gap-2 text-xs font-medium text-muted">
                    <CalendarDays
                        size={16}
                        className="text-secondary"
                    />

                    {formatDate(blog.publishDate || blog.createdAt)}
                </div>

                <Link href={`/our-articles/${blog.slug}`}>
                    <h2 className="line-clamp-2 font-heading text-xl font-extrabold leading-[1.4] tracking-[-0.025em] text-primary transition-colors duration-300 group-hover:text-secondary sm:text-[23px]">
                        {blog.title}
                    </h2>
                </Link>

                <div className="mt-auto pt-4">
                    <Link
                        href={`/our-articles/${blog.slug}`}
                        className="flex items-center justify-between gap-3 border-t border-border pt-2 text-sm font-bold text-primary transition-colors hover:text-secondary"
                    >
                        Read Full Article

                        <ArrowRight
                            size={19}
                            className="text-secondary transition-transform group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </div>
        </article>
    );
}

// ================= LOADING SKELETON =================

function BlogSkeleton() {
    return (
        <div
            aria-hidden="true"
            className="animate-pulse overflow-hidden rounded-[20px] border border-border bg-white"
        >
            <div className="aspect-[16/10] bg-gray-200" />

            <div className="space-y-4 p-6">
                <div className="h-3 w-32 rounded bg-gray-200" />
                <div className="h-6 w-full rounded bg-gray-200" />
                <div className="h-6 w-3/4 rounded bg-gray-200" />
                <div className="h-3 w-full rounded bg-gray-100" />
                <div className="h-3 w-4/5 rounded bg-gray-100" />
                <div className="border-t border-border pt-5">
                    <div className="h-4 w-28 rounded bg-gray-200" />
                </div>
            </div>
        </div>
    );
}

// ================= MAIN ARTICLES PAGE =================

export default function Articles() {
    const rootRef = useRef(null);
    const gridRef = useRef(null);
    const articlesRef = useRef(null);

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [retry, setRetry] = useState(0);

    const [pagination, setPagination] = useState({
        page: 1,
        limit: LIMIT,
        total: 0,
        totalPages: 0,
    });

    // ================= SEARCH DEBOUNCE =================

    useEffect(() => {
        const timer = setTimeout(() => {
            setPage(1);
            setDebouncedSearch(search.trim());
        }, 400);

        return () => clearTimeout(timer);
    }, [search]);

    // ================= FETCH BLOGS =================

    useEffect(() => {
        const controller = new AbortController();

        const fetchBlogs = async () => {
            setLoading(true);
            setError("");

            try {
                const params = new URLSearchParams({
                    page: String(page),
                    limit: String(LIMIT),
                    search: debouncedSearch,
                });

                const response = await fetch(
                    `/api/blogs?${params.toString()}`,
                    {
                        signal: controller.signal,
                        cache: "no-store",
                    }
                );

                const data = await response.json();

                if (!response.ok || !data.success) {
                    throw new Error(
                        data.message || "Failed to load articles."
                    );
                }

                setBlogs(data.blogs || []);
                setPagination(data.pagination);
            } catch (err) {
                if (err.name === "AbortError") return;

                setError(
                    err.message || "Something went wrong."
                );
                setBlogs([]);
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchBlogs();

        return () => controller.abort();
    }, [page, debouncedSearch, retry]);

    // ================= HERO ANIMATION =================

    useEffect(() => {
        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reducedMotion) return;

        const ctx = gsap.context(() => {
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

            gsap.fromTo(
                ".articles-heading",
                { y: 35, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.85,
                    stagger: 0.12,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: articlesRef.current,
                        start: "top 85%",
                        once: true,
                    },
                }
            );
        }, rootRef);

        return () => ctx.revert();
    }, []);

    // ================= BLOG CARD ANIMATION =================

    useEffect(() => {
        if (loading || !blogs.length) return;

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reducedMotion) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".article-card",
                {
                    y: 40,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.75,
                    stagger: 0.08,
                    ease: "power3.out",
                    clearProps: "transform,opacity",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 92%",
                        once: true,
                    },
                }
            );
        }, gridRef);

        ScrollTrigger.refresh();

        return () => ctx.revert();
    }, [blogs, loading]);

    // ================= PAGINATION =================

    const handlePageChange = (newPage) => {
        if (
            newPage < 1 ||
            newPage > pagination.totalPages ||
            newPage === page
        ) {
            return;
        }

        setPage(newPage);

        articlesRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const visiblePages = Array.from(
        {
            length: Math.min(5, pagination.totalPages),
        },
        (_, index) => {
            const start = Math.max(
                1,
                Math.min(page - 2, pagination.totalPages - 4)
            );

            return start + index;
        }
    );

    return (
        <main ref={rootRef} className="overflow-hidden bg-white">
            {/* ================= HERO ================= */}
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

                <div className="pointer-events-none absolute inset-0 opacity-15">
                    <div className="absolute left-[15%] top-0 h-full w-px bg-white/30" />
                    <div className="absolute right-[15%] top-0 h-full w-px bg-white/30" />
                </div>

                <div className="contact-hero-content relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 text-center">

                    <div className="mb-7 flex items-center gap-2 text-[12px] font-medium tracking-[0.08em] text-white/95">
                        <Link
                            href="/"
                            className="transition hover:text-secondary"
                        >
                            Home
                        </Link>

                        <ChevronRight size={14} />

                        <span className="text-secondary">
                            Our Articles
                        </span>
                    </div>

                    <div className="mb-2 flex items-center gap-3">
                        <span className="h-px w-9 bg-secondary" />

                        <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-white/95 sm:text-[15px]">
                            Insights & Inspiration
                        </span>

                        <span className="h-px w-9 bg-secondary" />
                    </div>

                    <h1 className="font-heading text-[clamp(3.2rem,7vw,7rem)] font-semibold leading-[1.05] tracking-[-0.055em] text-white">
                        Ideas that shape
                        <span className="text-secondary">
                            {" "}better spaces.
                        </span>
                    </h1>
                </div>

                <div className="absolute bottom-0 left-0 h-[5px] w-full bg-secondary" />
            </section>

            {/* ================= ARTICLES SECTION ================= */}
            <section
                ref={articlesRef}
                className="scroll-mt-32 bg-[#F7F9FB] py-10 sm:py-12 lg:py-15"
            >
                <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
                    {/* Section Heading */}
                    <div className="mb-10 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

                        <div className="max-w-[750px]">

                            <div className="articles-heading mb-2 flex items-center gap-3">
                                <span className="h-[2px] w-9 bg-secondary" />

                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                                    Knowledge & Insights
                                </span>
                            </div>

                            <h2 className="articles-heading font-heading text-[clamp(2.2rem,4.5vw,4.5rem)] font-extrabold leading-[1.08] tracking-[-0.045em] text-primary">
                                Explore Our Latest
                                <span className="text-secondary">
                                    {" "}Articles.
                                </span>
                            </h2>
                        </div>

                        {/* Search Input */}
                        <div className="articles-heading relative w-full lg:max-w-[340px]">

                            <Search
                                size={20}
                                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                            />

                            <input
                                type="search"
                                aria-label="Search articles"
                                placeholder="Search articles..."
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                className="h-[54px] w-full rounded-xl border border-border bg-white pl-12 pr-12 text-sm text-primary outline-none transition-all focus:border-secondary focus:ring-2 focus:ring-secondary/10 [&::-webkit-search-cancel-button]:hidden"
                            />

                            {search && (
                                <button
                                    type="button"
                                    aria-label="Clear search"
                                    onClick={() => setSearch("")}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-secondary"
                                >
                                    <X size={18} />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Loading */}
                    {loading ? (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                            {Array.from({ length: LIMIT }).map(
                                (_, index) => (
                                    <BlogSkeleton key={index} />
                                )
                            )}
                        </div>
                    ) : error ? (
                        /* Error State */
                        <div className="rounded-2xl border border-border bg-white px-6 py-20 text-center">

                            <AlertCircle
                                size={45}
                                className="mx-auto mb-4 text-secondary"
                            />

                            <h3 className="font-heading text-xl font-bold text-primary">
                                Unable to Load Articles
                            </h3>

                            <p className="mt-3 text-sm text-muted">
                                {error}
                            </p>

                            <button
                                type="button"
                                onClick={() =>
                                    setRetry((prev) => prev + 1)
                                }
                                className="mt-6 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-secondary"
                            >
                                Try Again
                            </button>
                        </div>
                    ) : blogs.length === 0 ? (
                        /* Empty State */
                        <div className="rounded-2xl border border-border bg-white px-6 py-20 text-center">

                            <BookOpen
                                size={48}
                                strokeWidth={1.5}
                                className="mx-auto mb-5 text-secondary"
                            />

                            <h3 className="font-heading text-2xl font-bold text-primary">
                                No Articles Found
                            </h3>

                            <p className="mt-3 text-sm text-muted">
                                {debouncedSearch
                                    ? "Try searching with a different keyword."
                                    : "New articles will be available soon."}
                            </p>

                            {debouncedSearch && (
                                <button
                                    type="button"
                                    onClick={() => setSearch("")}
                                    className="mt-6 rounded-lg bg-secondary px-6 py-3 text-sm font-bold text-white hover:bg-primary"
                                >
                                    Clear Search
                                </button>
                            )}
                        </div>
                    ) : (
                        /* Blogs Grid */
                        <div
                            ref={gridRef}
                            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
                        >
                            {blogs.map((blog, index) => (
                                <BlogCard
                                    key={blog._id || blog.slug}
                                    blog={blog}
                                    index={(page - 1) * LIMIT + index}
                                />
                            ))}
                        </div>
                    )}

                    {/* ================= PAGINATION ================= */}
                    {!loading && !error &&
                        pagination.totalPages > 1 && (

                            <nav
                                aria-label="Article pagination"
                                className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:mt-16"
                            >
                                <button
                                    type="button"
                                    aria-label="Previous page"
                                    disabled={page === 1}
                                    onClick={() =>
                                        handlePageChange(page - 1)
                                    }
                                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-white text-primary transition-colors hover:border-secondary hover:text-secondary disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                    <ChevronLeft size={20} />
                                </button>

                                {visiblePages.map((number) => (
                                    <button
                                        key={number}
                                        type="button"
                                        aria-current={
                                            page === number
                                                ? "page"
                                                : undefined
                                        }
                                        onClick={() =>
                                            handlePageChange(number)
                                        }
                                        className={`flex h-11 w-11 items-center justify-center rounded-lg border text-sm font-bold transition-all duration-300 ${page === number
                                            ? "border-secondary bg-secondary text-white"
                                            : "border-border bg-white text-primary hover:border-secondary hover:text-secondary"
                                            }`}
                                    >
                                        {number}
                                    </button>
                                ))}

                                <button
                                    type="button"
                                    aria-label="Next page"
                                    disabled={
                                        page === pagination.totalPages
                                    }
                                    onClick={() =>
                                        handlePageChange(page + 1)
                                    }
                                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-white text-primary transition-colors hover:border-secondary hover:text-secondary disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </nav>
                        )}
                </div>
            </section>
        </main>
    );
}