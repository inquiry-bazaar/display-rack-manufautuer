"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
    ArrowUpRight,
    ArrowRight,
    ArrowLeft,
    ChevronRight,
    CalendarDays,
    Clock3,
    Link2,
    Check,
    Share2,
    BookOpen,
    MessageSquare,
} from "lucide-react";

import {
    FaFacebookF,
    FaWhatsapp,
    FaLinkedinIn,
} from "react-icons/fa";

import InquiryPopup from "@/components/layout/InquiryPopup";

gsap.registerPlugin(ScrollTrigger);

function formatDate(date) {
    return new Date(date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Kolkata",
    });
}

export default function SingleBlog({
    blog,
    relatedBlogs = [],
}) {
    const rootRef = useRef(null);
    const articleRef = useRef(null);
    const progressRef = useRef(null);

    const [openPopup, setOpenPopup] = useState(false);
    const [copied, setCopied] = useState(false);
    const [pageUrl, setPageUrl] = useState("");
    const [shareError, setShareError] = useState("");

    useEffect(() => {
        setPageUrl(window.location.href);
    }, [blog.slug]);

    useEffect(() => {
        if (!copied) return;

        const timer = setTimeout(() => {
            setCopied(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [copied]);

    // ================= GSAP ANIMATION =================

    useEffect(() => {
        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reducedMotion) return;

        const ctx = gsap.context(() => {

            // Hero Content

            gsap.fromTo(
                ".blog-hero-reveal",
                {
                    y: 40,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    stagger: 0.12,
                    ease: "power3.out",
                }
            );

            // Featured Image

            gsap.fromTo(
                ".blog-featured-image",
                {
                    y: 40,
                    opacity: 0,
                    scale: 0.98,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",
                    delay: 0.3,
                }
            );

            // Scroll Reveal

            gsap.utils
                .toArray(".blog-scroll-reveal")
                .forEach((element) => {
                    gsap.fromTo(
                        element,
                        {
                            y: 40,
                            opacity: 0,
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.85,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: element,
                                start: "top 90%",
                                once: true,
                            },
                        }
                    );
                });

            // Reading Progress Bar

            gsap.fromTo(
                progressRef.current,
                {
                    scaleX: 0,
                },
                {
                    scaleX: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: articleRef.current,
                        start: "top 80%",
                        end: "bottom 80%",
                        scrub: true,
                    },
                }
            );
        }, rootRef);

        return () => ctx.revert();
    }, [blog.slug]);

    // ================= COPY ARTICLE LINK =================

    const copyLink = async () => {
        try {
            setShareError("");

            await navigator.clipboard.writeText(
                window.location.href
            );

            setCopied(true);
        } catch (error) {
            setShareError(
                "Unable to copy the link. Please copy it from your browser."
            );
        }
    };

    const shareLinks = [
        {
            name: "Facebook",
            icon: FaFacebookF,
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
        },
        {
            name: "WhatsApp",
            icon: FaWhatsapp,
            href: `https://wa.me/?text=${encodeURIComponent(
                `${blog.title}\n${pageUrl}`
            )}`,
        },
        {
            name: "LinkedIn",
            icon: FaLinkedinIn,
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
        },
    ];

    return (
        <main ref={rootRef} className="bg-white">

            {/* ================= READING PROGRESS ================= */}

            <div className="pointer-events-none fixed left-0 top-0 z-[100] h-[3px] w-full">
                <div
                    ref={progressRef}
                    className="h-full w-full origin-left scale-x-0 bg-secondary"
                />
            </div>

            {/* ================= BLOG HERO ================= */}

            <section className="relative isolate overflow-hidden bg-primary pb-24 pt-16 text-white sm:pb-32 sm:pt-20 lg:pb-44 lg:pt-24">

                {/* Background Effects */}

                <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[500px] w-[500px] rounded-full border-[70px] border-white/[0.025]" />

                <div className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[120px]" />

                <div className="mx-auto max-w-[1200px] px-5 text-center sm:px-8 lg:px-12">

                    {/* Breadcrumb */}

                    <div className="blog-hero-reveal mb-8 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-white/70">

                        <Link
                            href="/"
                            className="hover:text-secondary"
                        >
                            Home
                        </Link>

                        <ChevronRight size={14} />

                        <Link
                            href="/our-articles"
                            className="hover:text-secondary"
                        >
                            Our Articles
                        </Link>

                        <ChevronRight size={14} />

                        <span className="text-secondary">
                            Article Details
                        </span>
                    </div>

                    {/* Eyebrow */}

                    <div className="blog-hero-reveal mb-5 flex items-center justify-center gap-3">

                        <span className="h-px w-8 bg-secondary" />

                        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-secondary">
                            Knowledge & Insights
                        </span>

                        <span className="h-px w-8 bg-secondary" />
                    </div>

                    {/* Blog Title */}

                    <h1 className="blog-hero-reveal mx-auto max-w-[1050px] font-heading text-[clamp(2.2rem,5vw,4.8rem)] font-extrabold leading-[1.12] tracking-[-0.045em]">
                        {blog.title}
                        <span className="text-secondary">.</span>
                    </h1>

                    {/* Blog Meta */}

                    <div className="blog-hero-reveal mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-white/80 sm:text-sm">

                        <div className="flex items-center gap-2">
                            <CalendarDays
                                size={17}
                                className="text-secondary"
                            />

                            {formatDate(
                                blog.publishDate || blog.createdAt
                            )}
                        </div>

                        <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />

                        <div className="flex items-center gap-2">
                            <Clock3
                                size={17}
                                className="text-secondary"
                            />

                            {blog.readingTime} Min Read
                        </div>

                        <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />

                        <div className="flex items-center gap-2">
                            <BookOpen
                                size={17}
                                className="text-secondary"
                            />

                            Arya Insulation
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FEATURED IMAGE ================= */}

            <div className="relative z-10 mx-auto -mt-14 max-w-[1500px] px-5 sm:-mt-20 sm:px-8 lg:-mt-28 lg:px-12">

                <div className="blog-featured-image relative aspect-[16/10] overflow-hidden rounded-[20px] border-[5px] border-white bg-surface shadow-[0_20px_60px_rgba(16,42,67,0.12)] sm:aspect-[16/8] sm:rounded-[26px] lg:aspect-[16/6.5]">

                    <Image
                        src={blog.image || "/4.webp"}
                        alt={blog.title}
                        fill
                        priority
                        sizes="(max-width: 1500px) 100vw, 1400px"
                        className="object-cover"
                    />
                </div>
            </div>

            {/* ================= ARTICLE BODY ================= */}

            <section className="py-12 sm:py-16 lg:py-20">

                <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

                    <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_370px] xl:gap-20">

                        {/* ================= LEFT ARTICLE ================= */}

                        <article
                            ref={articleRef}
                            className="min-w-0"
                        >
                            {/* Article Description */}

                            {blog.metaDescription && (
                                <div className="mb-9 border-l-[4px] border-secondary bg-[#F7F9FB] px-5 py-6 sm:px-7">

                                    <p className="font-heading text-lg font-semibold leading-relaxed text-primary sm:text-xl">
                                        {blog.metaDescription}
                                    </p>
                                </div>
                            )}

                            {/* Dynamic HTML Content */}

                            <div
                                className="blog-content"
                                dangerouslySetInnerHTML={{
                                    __html: blog.content,
                                }}
                            />

                            {/* ================= SHARE ARTICLE ================= */}

                            <div className="mt-12 flex flex-col justify-between gap-5 border-y border-border py-6 sm:flex-row sm:items-center">

                                <div className="flex items-center gap-3">

                                    <Share2
                                        size={20}
                                        className="text-secondary"
                                    />

                                    <span className="font-heading text-sm font-extrabold text-primary">
                                        Share This Article
                                    </span>
                                </div>

                                <div className="flex flex-wrap items-center gap-2.5">

                                    {pageUrl &&
                                        shareLinks.map((item) => {
                                            const Icon = item.icon;

                                            return (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`Share on ${item.name}`}
                                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:bg-secondary hover:text-white"
                                                >
                                                    <Icon size={15} />
                                                </a>
                                            );
                                        })}

                                    <button
                                        type="button"
                                        onClick={copyLink}
                                        aria-label="Copy article link"
                                        className={`flex h-10 items-center justify-center gap-2 rounded-full border px-4 text-xs font-bold transition-colors ${copied
                                            ? "border-green-200 bg-green-50 text-green-600"
                                            : "border-border text-primary hover:border-secondary hover:text-secondary"
                                            }`}
                                    >
                                        {copied ? (
                                            <Check size={16} />
                                        ) : (
                                            <Link2 size={16} />
                                        )}

                                        {copied
                                            ? "Copied!"
                                            : "Copy Link"}
                                    </button>
                                </div>
                            </div>

                            {shareError && (
                                <p
                                    role="alert"
                                    className="mt-3 text-sm text-red-600"
                                >
                                    {shareError}
                                </p>
                            )}

                            {/* Back to Articles */}

                            <Link
                                href="/our-articles"
                                className="group mt-8 inline-flex items-center gap-3 text-sm font-extrabold text-primary transition-colors hover:text-secondary"
                            >
                                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all group-hover:border-secondary group-hover:bg-secondary group-hover:text-white">
                                    <ArrowLeft size={18} />
                                </span>

                                Back to All Articles
                            </Link>
                        </article>

                        {/* ================= RIGHT SIDEBAR ================= */}

                        <aside className="space-y-6 lg:sticky lg:top-[130px]">

                            {/* Recent Articles */}

                            {relatedBlogs.length > 0 && (
                                <div className="blog-scroll-reveal rounded-[20px] border border-border bg-[#F7F9FB] p-5 sm:p-6">

                                    <div className="mb-6 flex items-center gap-3">

                                        <span className="h-6 w-[3px] rounded-full bg-secondary" />

                                        <h3 className="font-heading text-xl font-extrabold text-primary">
                                            Recent Articles
                                        </h3>
                                    </div>

                                    <div className="divide-y divide-border">

                                        {relatedBlogs.map((item) => (
                                            <Link
                                                key={item.slug}
                                                href={`/our-articles/${item.slug}`}
                                                className="group flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                                            >
                                                <div className="relative h-[80px] w-[90px] shrink-0 overflow-hidden rounded-lg bg-gray-200">

                                                    <Image
                                                        src={item.image || "/4.webp"}
                                                        alt={item.title}
                                                        fill
                                                        sizes="90px"
                                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                </div>

                                                <div className="min-w-0">

                                                    <p className="mb-2 text-[10px] font-semibold text-muted">
                                                        {formatDate(
                                                            item.publishDate ||
                                                            item.createdAt
                                                        )}
                                                    </p>

                                                    <h4 className="line-clamp-2 font-heading text-sm font-extrabold leading-snug text-primary transition-colors group-hover:text-secondary">
                                                        {item.title}
                                                    </h4>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>

                                    <Link
                                        href="/our-articles"
                                        className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-5 text-xs font-extrabold text-primary hover:text-secondary"
                                    >
                                        View All Articles

                                        <ArrowRight
                                            size={17}
                                            className="text-secondary"
                                        />
                                    </Link>
                                </div>
                            )}

                            {/* Contact CTA */}

                            <div className="blog-scroll-reveal relative isolate overflow-hidden rounded-[20px] bg-primary p-6 text-white sm:p-8">

                                <Image
                                    src="/4.webp"
                                    alt=""
                                    fill
                                    sizes="400px"
                                    className="-z-30 object-cover"
                                />

                                <div className="absolute inset-0 -z-20 bg-primary/90" />

                                <div className="absolute -bottom-20 -right-20 -z-10 h-52 w-52 rounded-full bg-secondary/20 blur-[60px]" />

                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10">

                                    <MessageSquare
                                        size={23}
                                        className="text-secondary"
                                    />
                                </div>

                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                                    Let's Work Together
                                </span>

                                <h3 className="mt-3 font-heading text-[30px] font-extrabold leading-[1.15] tracking-[-0.035em]">
                                    Need a Custom
                                    <span className="text-secondary">
                                        {" "}Rack Solution?
                                    </span>
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-white/70">
                                    Connect with our experts to find
                                    the ideal display and storage
                                    solution for your business.
                                </p>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenPopup(true)
                                    }
                                    className="group mt-6 flex w-full items-center justify-between gap-3 rounded-lg bg-secondary px-5 py-4 text-sm font-extrabold text-white transition-colors hover:bg-white hover:text-primary"
                                >
                                    Request a Free Quote

                                    <ArrowUpRight
                                        size={19}
                                        className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                                    />
                                </button>

                                <Link
                                    href="/contact-us"
                                    className="mt-4 block text-center text-xs font-semibold text-white/80 hover:text-secondary"
                                >
                                    Contact Our Team
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* ================= RELATED ARTICLES ================= */}

            {relatedBlogs.length > 0 && (
                <section className="border-t border-border bg-[#F7F9FB] py-16 sm:py-20 lg:py-24">

                    <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

                        <div className="blog-scroll-reveal mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">

                            <div>
                                <div className="mb-3 flex items-center gap-3">

                                    <span className="h-[2px] w-9 bg-secondary" />

                                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                                        Keep Exploring
                                    </span>
                                </div>

                                <h2 className="font-heading text-[clamp(2rem,4vw,4rem)] font-extrabold leading-[1.1] tracking-[-0.045em] text-primary">
                                    Explore More
                                    <span className="text-secondary">
                                        {" "}Articles.
                                    </span>
                                </h2>
                            </div>

                            <Link
                                href="/our-articles"
                                className="group inline-flex w-fit items-center gap-3 rounded-lg bg-primary px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-secondary"
                            >
                                View All Articles

                                <ArrowUpRight size={18} />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

                            {relatedBlogs.map((item) => (
                                <article
                                    key={item.slug}
                                    className="blog-scroll-reveal group flex h-full flex-col overflow-hidden rounded-[20px] border border-border bg-white transition-shadow hover:shadow-xl"
                                >
                                    <Link
                                        href={`/our-articles/${item.slug}`}
                                        className="relative block aspect-[16/10] overflow-hidden bg-surface"
                                    >
                                        <Image
                                            src={item.image || "/4.webp"}
                                            alt={item.title}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary transition-colors group-hover:bg-secondary group-hover:text-white">
                                            <ArrowUpRight size={21} />
                                        </span>
                                    </Link>

                                    <div className="flex flex-1 flex-col p-6">

                                        <div className="mb-3 flex items-center gap-2 text-xs text-muted">

                                            <CalendarDays
                                                size={15}
                                                className="text-secondary"
                                            />

                                            {formatDate(
                                                item.publishDate ||
                                                item.createdAt
                                            )}
                                        </div>

                                        <Link
                                            href={`/our-articles/${item.slug}`}
                                        >
                                            <h3 className="line-clamp-2 font-heading text-xl font-extrabold leading-snug text-primary transition-colors group-hover:text-secondary">
                                                {item.title}
                                            </h3>
                                        </Link>

                                        {item.metaDescription && (
                                            <p className="mt-3 line-clamp-2 text-sm leading-7 text-muted">
                                                {item.metaDescription}
                                            </p>
                                        )}

                                        <div className="mt-auto pt-5">

                                            <Link
                                                href={`/our-articles/${item.slug}`}
                                                className="flex items-center justify-between border-t border-border pt-4 text-sm font-bold text-primary hover:text-secondary"
                                            >
                                                Read Article

                                                <ArrowRight
                                                    size={18}
                                                    className="text-secondary transition-transform group-hover:translate-x-1"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ================= INQUIRY POPUP ================= */}

            {openPopup && (
                <InquiryPopup
                    onClose={() => setOpenPopup(false)}
                />
            )}
        </main>
    );
}