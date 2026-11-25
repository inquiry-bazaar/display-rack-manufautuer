"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
    ArrowUpRight,
    ArrowRight,
    ChevronRight,
    ChevronLeft,
    ChevronDown,
    Search,
    SlidersHorizontal,
    LayoutGrid,
    Layers3,
    PackageSearch,
    X,
    Phone,
    MessageSquare,
    CheckCircle2,
} from "lucide-react";

import categories from "@/utils/data";
import InquiryPopup from "@/components/layout/InquiryPopup";

gsap.registerPlugin(ScrollTrigger);

const PRODUCTS_PER_PAGE = 12;

// ================= ALL PRODUCTS DATA =================

const allProducts = categories.flatMap((category) =>
    (category.products || []).map((product) => ({
        ...product,
        categoryName: category.name,
        categorySlug: category.slug,
    }))
);

// ================= PRODUCT CARD =================

function ProductCard({ product }) {
    return (
        <Link
            href={`/${product.slug}`}
            className="product-card group flex h-full flex-col overflow-hidden rounded-[18px] border border-border bg-white transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-[0_20px_45px_rgba(16,42,67,0.10)]"
        >
            {/* Product Image */}

            <div className="relative aspect-[4/3.5] overflow-hidden bg-[#F3F5F7]">

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-transform duration-700 group-hover:scale-125" />

                <div className="absolute inset-0 p-5 sm:p-6">

                    <div className="relative h-full w-full transition-transform duration-700 ease-out group-hover:scale-110">

                        <Image
                            src={
                                product.image ||
                                product.png ||
                                "/4.webp"
                            }
                            alt={product.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                            className="object-contain drop-shadow-[0_15px_15px_rgba(16,42,67,0.12)]"
                        />
                    </div>
                </div>

                {/* Arrow */}

                <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-primary transition-all duration-300 group-hover:rotate-45 group-hover:border-secondary group-hover:bg-secondary group-hover:text-white">

                    <ArrowUpRight size={20} />
                </span>

                {/* Hover Line */}

                <div className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-secondary transition-transform duration-500 group-hover:scale-x-100" />
            </div>

            {/* Product Details */}

            <div className="flex flex-1 flex-col p-5">

                <div className="mb-3 flex items-start gap-2">

                    <Layers3
                        size={14}
                        className="mt-0.5 shrink-0 text-secondary"
                    />

                    <span className="line-clamp-1 text-[10px] font-bold uppercase tracking-[0.06em] text-muted">
                        {product.categoryName}
                    </span>
                </div>

                <h3 className="font-heading text-[18px] font-extrabold leading-[1.4] tracking-[-0.025em] text-primary transition-colors duration-300 group-hover:text-secondary">
                    {product.name}
                </h3>

                <div className="mt-auto pt-5">

                    <div className="flex items-center justify-between gap-3 border-t border-border pt-4">

                        <span className="text-xs font-extrabold text-primary">
                            View Product
                        </span>

                        <ArrowRight
                            size={18}
                            className="text-secondary transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
}

// ================= CATEGORY SIDEBAR =================

function CategorySidebar({
    activeCategory,
    onCategoryChange,
    onOpenInquiry,
}) {
    return (
        <div className="space-y-6">

            {/* Categories */}

            <div className="overflow-hidden rounded-[18px] border border-border bg-white">

                <div className="flex items-center gap-3 border-b border-border px-5 py-5">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">

                        <LayoutGrid size={20} />
                    </div>

                    <div>
                        <h2 className="font-heading text-lg font-extrabold text-primary">
                            Categories
                        </h2>

                        <p className="mt-0.5 text-xs text-muted">
                            Explore our collections
                        </p>
                    </div>
                </div>

                <div className="space-y-1 p-3">

                    {/* All Products */}

                    <button
                        type="button"
                        onClick={() => onCategoryChange("all")}
                        aria-pressed={activeCategory === "all"}
                        className={`group flex w-full items-center justify-between gap-3 rounded-lg px-4 py-3.5 text-left transition-all duration-300 ${activeCategory === "all"
                            ? "bg-primary text-white"
                            : "text-primary hover:bg-surface"
                            }`}
                    >
                        <div className="flex items-center gap-3">

                            <LayoutGrid
                                size={17}
                                className={
                                    activeCategory === "all"
                                        ? "text-secondary"
                                        : "text-muted"
                                }
                            />

                            <span className="text-sm font-bold">
                                All Products
                            </span>
                        </div>

                        <span
                            className={`rounded-md px-2 py-1 text-[10px] font-bold ${activeCategory === "all"
                                ? "bg-white/15 text-white"
                                : "bg-surface text-muted"
                                }`}
                        >
                            {allProducts.length}
                        </span>
                    </button>

                    {/* Dynamic Categories */}

                    {categories.map((category) => {
                        const isActive =
                            activeCategory === category.slug;

                        return (
                            <button
                                key={category.slug}
                                type="button"
                                aria-pressed={isActive}
                                onClick={() =>
                                    onCategoryChange(category.slug)
                                }
                                className={`group relative flex w-full items-center justify-between gap-3 overflow-hidden rounded-lg px-4 py-3.5 text-left transition-all duration-300 ${isActive
                                    ? "bg-secondary/10 text-secondary"
                                    : "text-primary hover:bg-surface"
                                    }`}
                            >
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 top-0 w-[3px] bg-secondary" />
                                )}

                                <span className="text-[13px] font-semibold leading-[1.5]">
                                    {category.name}
                                </span>

                                <span
                                    className={`shrink-0 rounded-md px-2 py-1 text-[10px] font-bold ${isActive
                                        ? "bg-secondary text-white"
                                        : "bg-surface text-muted"
                                        }`}
                                >
                                    {category.products?.length || 0}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Contact CTA */}

            <div className="relative isolate overflow-hidden rounded-[18px] bg-primary p-6 text-white">

                <Image
                    src="/4.webp"
                    alt=""
                    fill
                    sizes="320px"
                    className="-z-30 object-cover"
                />

                <div className="absolute inset-0 -z-20 bg-primary/90" />

                <div className="pointer-events-none absolute -bottom-20 -right-20 -z-10 h-52 w-52 rounded-full bg-secondary/20 blur-[60px]" />

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10">

                    <MessageSquare
                        size={23}
                        className="text-secondary"
                    />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-secondary">
                    Customized Solutions
                </span>

                <h3 className="mt-3 font-heading text-[28px] font-extrabold leading-[1.15] tracking-[-0.04em]">
                    Need Something{" "}
                    <span className="text-secondary">
                        Different?
                    </span>
                </h3>

                <p className="mt-4 text-xs leading-6 text-white/70">
                    Get customized display rack solutions
                    designed around your business requirements.
                </p>

                <div className="mt-5 space-y-3">

                    {[
                        "Customized Rack Designs",
                        "Expert Consultation",
                        "Professional Installation",
                    ].map((item) => (
                        <div
                            key={item}
                            className="flex items-center gap-2"
                        >
                            <CheckCircle2
                                size={15}
                                className="shrink-0 text-secondary"
                            />

                            <span className="text-xs text-white/85">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={onOpenInquiry}
                    className="group mt-6 flex w-full items-center justify-between gap-3 rounded-lg bg-secondary px-4 py-4 text-xs font-extrabold text-white transition-colors hover:bg-white hover:text-primary"
                >
                    Request a Free Quote

                    <ArrowUpRight
                        size={18}
                        className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                </button>

                <Link
                    href="/contact-us"
                    className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-white/80 hover:text-secondary"
                >
                    <Phone size={14} />

                    Contact Our Team
                </Link>
            </div>
        </div>
    );
}

// ================= MAIN ALL PRODUCTS PAGE =================

export default function AllProducts() {
    const rootRef = useRef(null);
    const gridRef = useRef(null);
    const productsRef = useRef(null);
    const mobileDialogRef = useRef(null);

    const [activeCategory, setActiveCategory] = useState("all");
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("default");
    const [currentPage, setCurrentPage] = useState(1);

    const [mobileFilterOpen, setMobileFilterOpen] =
        useState(false);

    const [openPopup, setOpenPopup] = useState(false);

    // ================= FILTER PRODUCTS =================

    const filteredProducts = useMemo(() => {
        let result = [...allProducts];

        // Category Filter

        if (activeCategory !== "all") {
            result = result.filter(
                (product) =>
                    product.categorySlug === activeCategory
            );
        }

        // Search Filter

        const query = search.trim().toLowerCase();

        if (query) {
            result = result.filter(
                (product) =>
                    product.name.toLowerCase().includes(query) ||
                    product.categoryName
                        .toLowerCase()
                        .includes(query)
            );
        }

        // Sorting

        if (sort === "name-asc") {
            result.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
        }

        if (sort === "name-desc") {
            result.sort((a, b) =>
                b.name.localeCompare(a.name)
            );
        }

        return result;
    }, [activeCategory, search, sort]);

    // ================= PAGINATION =================

    const totalProducts = filteredProducts.length;

    const totalPages = Math.ceil(
        totalProducts / PRODUCTS_PER_PAGE
    );

    const page = Math.min(
        currentPage,
        Math.max(1, totalPages)
    );

    const startIndex = (page - 1) * PRODUCTS_PER_PAGE;

    const endIndex = startIndex + PRODUCTS_PER_PAGE;

    const visibleProducts = filteredProducts.slice(
        startIndex,
        endIndex
    );

    const visiblePages = useMemo(() => {
        const maxVisible = 5;

        const start = Math.max(
            1,
            Math.min(
                page - 2,
                totalPages - maxVisible + 1
            )
        );

        return Array.from(
            {
                length: Math.min(maxVisible, totalPages),
            },
            (_, index) => start + index
        );
    }, [page, totalPages]);

    // ================= ACTIVE CATEGORY NAME =================

    const selectedCategory = categories.find(
        (category) => category.slug === activeCategory
    );

    const heading =
        selectedCategory?.name || "All Products";

    // ================= SCROLL TO PRODUCTS =================

    const scrollToProducts = () => {
        productsRef.current?.scrollIntoView({
            behavior: window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches
                ? "instant"
                : "smooth",
            block: "start",
        });
    };

    // ================= CATEGORY CHANGE =================

    const handleCategoryChange = (slug) => {
        setActiveCategory(slug);
        setCurrentPage(1);
        setMobileFilterOpen(false);
    };

    // ================= PAGE CHANGE =================

    const handlePageChange = (newPage) => {
        if (
            newPage < 1 ||
            newPage > totalPages ||
            newPage === page
        ) {
            return;
        }

        setCurrentPage(newPage);
        scrollToProducts();
    };

    // ================= RESET FILTERS =================

    const resetFilters = () => {
        setActiveCategory("all");
        setSearch("");
        setSort("default");
        setCurrentPage(1);
    };

    // ================= MOBILE FILTER DIALOG =================

    useEffect(() => {
        if (!mobileFilterOpen) return;

        const dialog = mobileDialogRef.current;

        if (!dialog) return;

        const previousOverflow =
            document.body.style.overflow;

        dialog.showModal();

        document.body.style.overflow = "hidden";

        return () => {
            if (dialog.open) {
                dialog.close();
            }

            document.body.style.overflow =
                previousOverflow;
        };
    }, [mobileFilterOpen]);

    // ================= HERO ANIMATION =================

    useEffect(() => {
        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reducedMotion) return;

        const ctx = gsap.context(() => {

            gsap.fromTo(
                ".products-hero-reveal",
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

            gsap.to(".products-hero-image", {
                scale: 1.12,
                ease: "none",
                scrollTrigger: {
                    trigger: ".products-hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            gsap.fromTo(
                ".products-sidebar",
                {
                    x: -30,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.85,
                    ease: "power3.out",
                    clearProps: "transform,opacity",
                    scrollTrigger: {
                        trigger: productsRef.current,
                        start: "top 90%",
                        once: true,
                    },
                }
            );

        }, rootRef);

        return () => ctx.revert();
    }, []);

    // ================= PRODUCT GRID ANIMATION =================

    useEffect(() => {
        if (!gridRef.current) return;

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reducedMotion) return;

        const ctx = gsap.context(() => {

            gsap.fromTo(
                ".product-card",
                {
                    y: 25,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.55,
                    stagger: 0.045,
                    ease: "power3.out",
                    clearProps: "transform,opacity",
                }
            );

        }, gridRef);

        ScrollTrigger.refresh();

        return () => ctx.revert();
    }, [activeCategory, search, sort, page]);

    return (
        <main ref={rootRef} className="bg-white">

            {/* ================= HERO SECTION ================= */}

            <section className="products-hero relative flex min-h-[350px] items-center justify-center overflow-hidden bg-primary sm:min-h-[420px]">

                <div className="products-hero-image absolute inset-0">

                    <Image
                        src="/4.webp"
                        alt="Premium supermarket display rack solutions"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                </div>

                <div className="absolute inset-0 bg-[#06182B]/65" />

                <div className="absolute inset-0 bg-gradient-to-r from-[#06182B]/40 via-transparent to-[#06182B]/40" />

                {/* Decorative Lines */}

                <div className="pointer-events-none absolute inset-0">

                    <div className="absolute left-[15%] top-0 h-full w-px bg-white/10" />

                    <div className="absolute right-[15%] top-0 h-full w-px bg-white/10" />
                </div>

                <div className="relative z-10 mx-auto max-w-[1100px] px-5 py-16 text-center">

                    {/* Breadcrumb */}

                    <div className="products-hero-reveal mb-6 flex items-center justify-center gap-2 text-xs font-medium text-white/90">

                        <Link
                            href="/"
                            className="hover:text-secondary"
                        >
                            Home
                        </Link>

                        <ChevronRight size={14} />

                        <span className="text-secondary">
                            All Products
                        </span>
                    </div>

                    {/* Eyebrow */}

                    <div className="products-hero-reveal mb-4 flex items-center justify-center gap-3">

                        <span className="h-px w-8 bg-secondary" />

                        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white sm:text-sm">
                            Explore Our Collection
                        </span>

                        <span className="h-px w-8 bg-secondary" />
                    </div>

                    {/* Heading */}

                    <h1 className="products-hero-reveal font-heading text-[clamp(2.8rem,6vw,6rem)] font-extrabold leading-[1.08] tracking-[-0.05em] text-white">
                        Display Racks for
                        <br className="hidden sm:block" />

                        <span className="text-secondary">
                            {" "}Every Space.
                        </span>
                    </h1>

                    <p className="products-hero-reveal mx-auto mt-5 text-sm leading-7 text-white/75 sm:text-base">
                        Discover our complete collection of premium
                        retail display racks, supermarket shelving,
                        and customized storage solutions.
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 h-[5px] w-full bg-secondary" />
            </section>

            {/* ================= PRODUCTS SECTION ================= */}

            <section
                ref={productsRef}
                className="scroll-mt-32 bg-[#F7F9FB] py-10 sm:py-14 lg:py-16"
            >
                <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">

                    <div className="grid items-start gap-7 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[310px_minmax(0,1fr)] xl:gap-9">

                        {/* ================= DESKTOP SIDEBAR ================= */}

                        <aside className="products-sidebar hidden lg:block">

                            <CategorySidebar
                                activeCategory={activeCategory}
                                onCategoryChange={
                                    handleCategoryChange
                                }
                                onOpenInquiry={() =>
                                    setOpenPopup(true)
                                }
                            />
                        </aside>

                        {/* ================= RIGHT PRODUCTS AREA ================= */}

                        <div className="min-w-0">

                            {/* Products Heading */}

                            <div className="mb-6">

                                <div className="mb-3 flex items-center gap-3">

                                    <span className="h-[2px] w-8 bg-secondary" />

                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary sm:text-xs">
                                        Our Product Range
                                    </span>
                                </div>

                                <h2 className="font-heading text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold leading-[1.15] tracking-[-0.04em] text-primary">
                                    {heading}
                                    <span className="text-secondary">
                                        .
                                    </span>
                                </h2>
                            </div>

                            {/* ================= FILTER TOOLBAR ================= */}

                            <div className="mb-6 rounded-xl border border-border bg-white p-3 sm:p-4">

                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

                                    {/* Mobile Filter Button */}

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setMobileFilterOpen(true)
                                        }
                                        className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-bold text-white lg:hidden"
                                    >
                                        <SlidersHorizontal size={18} />

                                        Categories
                                    </button>

                                    {/* Search */}

                                    <div className="relative min-w-0 flex-1">

                                        <Search
                                            size={19}
                                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                                        />

                                        <input
                                            type="search"
                                            aria-label="Search products"
                                            placeholder="Search products..."
                                            value={search}
                                            onChange={(e) => {
                                                setSearch(e.target.value);
                                                setCurrentPage(1);
                                            }}
                                            className="h-12 w-full rounded-lg border border-border bg-surface pl-11 pr-10 text-sm text-primary outline-none transition-all focus:border-secondary focus:bg-white focus:ring-2 focus:ring-secondary/10 [&::-webkit-search-cancel-button]:hidden"
                                        />

                                        {search && (
                                            <button
                                                type="button"
                                                aria-label="Clear search"
                                                onClick={() => {
                                                    setSearch("");
                                                    setCurrentPage(1);
                                                }}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-secondary"
                                            >
                                                <X size={18} />
                                            </button>
                                        )}
                                    </div>

                                    {/* Sorting */}

                                    <div className="relative shrink-0">

                                        <select
                                            aria-label="Sort products"
                                            value={sort}
                                            onChange={(e) => {
                                                setSort(e.target.value);
                                                setCurrentPage(1);
                                            }}
                                            className="h-12 w-full appearance-none rounded-lg border border-border bg-surface pl-4 pr-10 text-xs font-semibold text-primary outline-none focus:border-secondary sm:w-[170px]"
                                        >
                                            <option value="default">
                                                Default Sorting
                                            </option>

                                            <option value="name-asc">
                                                Name: A to Z
                                            </option>

                                            <option value="name-desc">
                                                Name: Z to A
                                            </option>
                                        </select>

                                        <ChevronDown
                                            size={16}
                                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted"
                                        />
                                    </div>
                                </div>

                                {/* Active Filters */}

                                {(activeCategory !== "all" ||
                                    search ||
                                    sort !== "default") && (

                                        <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border pt-4">

                                            <span className="mr-1 text-xs font-semibold text-muted">
                                                Active Filters:
                                            </span>

                                            {selectedCategory && (
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleCategoryChange("all")
                                                    }
                                                    className="inline-flex items-center gap-2 rounded-md bg-secondary/10 px-3 py-2 text-[11px] font-bold text-secondary"
                                                >
                                                    {selectedCategory.name}

                                                    <X
                                                        size={13}
                                                        className="shrink-0"
                                                    />
                                                </button>
                                            )}

                                            {search && (
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setSearch("");
                                                        setCurrentPage(1);
                                                    }}
                                                    className="inline-flex max-w-full items-center gap-2 rounded-md bg-surface px-3 py-2 text-[11px] font-bold text-primary"
                                                >
                                                    <span className="truncate">
                                                        {search}
                                                    </span>

                                                    <X
                                                        size={13}
                                                        className="shrink-0"
                                                    />
                                                </button>
                                            )}

                                            <button
                                                type="button"
                                                onClick={resetFilters}
                                                className="ml-auto text-xs font-bold text-secondary underline underline-offset-4"
                                            >
                                                Clear All
                                            </button>
                                        </div>
                                    )}
                            </div>

                            {/* ================= PRODUCT COUNT ================= */}

                            <div
                                aria-live="polite"
                                className="mb-6 flex flex-wrap items-center justify-between gap-3"
                            >
                                <p className="text-xs text-muted sm:text-sm">

                                    Showing{" "}

                                    <span className="font-bold text-primary">
                                        {totalProducts > 0
                                            ? startIndex + 1
                                            : 0}
                                        –
                                        {Math.min(
                                            endIndex,
                                            totalProducts
                                        )}
                                    </span>

                                    {" "}of{" "}

                                    <span className="font-bold text-primary">
                                        {totalProducts}
                                    </span>

                                    {" "}products
                                </p>

                                <div className="flex items-center gap-2 text-xs font-semibold text-muted">

                                    <LayoutGrid
                                        size={17}
                                        className="text-secondary"
                                    />

                                    Product Collection
                                </div>
                            </div>

                            {/* ================= PRODUCTS GRID ================= */}

                            {visibleProducts.length > 0 ? (

                                <div
                                    ref={gridRef}
                                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6"
                                >
                                    {visibleProducts.map((product) => (
                                        <ProductCard
                                            key={product.slug}
                                            product={product}
                                        />
                                    ))}
                                </div>

                            ) : (

                                /* Empty State */

                                <div className="flex min-h-[400px] flex-col items-center justify-center rounded-[20px] border border-border bg-white px-6 py-12 text-center">

                                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary/10 text-secondary">

                                        <PackageSearch
                                            size={40}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <h3 className="font-heading text-2xl font-extrabold text-primary">
                                        No Products Found
                                    </h3>

                                    <p className="mt-3 max-w-[350px] text-sm leading-7 text-muted">
                                        We couldn't find products matching
                                        your selected filters. Try another
                                        category or search keyword.
                                    </p>

                                    <button
                                        type="button"
                                        onClick={resetFilters}
                                        className="mt-6 rounded-lg bg-secondary px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary"
                                    >
                                        Reset Filters
                                    </button>
                                </div>
                            )}

                            {/* ================= PAGINATION ================= */}

                            {totalPages > 1 && (

                                <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-border pt-7 sm:flex-row sm:mt-12">

                                    <p className="text-xs font-medium text-muted sm:text-sm">

                                        Page{" "}

                                        <span className="font-bold text-primary">
                                            {page}
                                        </span>

                                        {" "}of {totalPages}
                                    </p>

                                    <nav
                                        aria-label="Product pagination"
                                        className="flex flex-wrap items-center justify-center gap-2"
                                    >
                                        {/* Previous */}

                                        <button
                                            type="button"
                                            aria-label="Previous page"
                                            disabled={page === 1}
                                            onClick={() =>
                                                handlePageChange(page - 1)
                                            }
                                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-primary transition-all hover:border-secondary hover:text-secondary disabled:cursor-not-allowed disabled:opacity-40 sm:h-11 sm:w-11"
                                        >
                                            <ChevronLeft size={20} />
                                        </button>

                                        {/* First Page */}

                                        {visiblePages[0] > 1 && (
                                            <>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handlePageChange(1)
                                                    }
                                                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-xs font-bold text-primary hover:border-secondary hover:text-secondary sm:h-11 sm:w-11"
                                                >
                                                    1
                                                </button>

                                                {visiblePages[0] > 2 && (
                                                    <span className="px-1 text-muted">
                                                        ...
                                                    </span>
                                                )}
                                            </>
                                        )}

                                        {/* Page Numbers */}

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
                                                className={`flex h-10 w-10 items-center justify-center rounded-lg border text-xs font-extrabold transition-all duration-300 sm:h-11 sm:w-11 sm:text-sm ${page === number
                                                    ? "border-secondary bg-secondary text-white shadow-[0_5px_15px_rgba(245,130,32,0.2)]"
                                                    : "border-border bg-white text-primary hover:border-secondary hover:text-secondary"
                                                    }`}
                                            >
                                                {number}
                                            </button>
                                        ))}

                                        {/* Last Page */}

                                        {visiblePages[
                                            visiblePages.length - 1
                                        ] < totalPages && (
                                                <>
                                                    {visiblePages[
                                                        visiblePages.length - 1
                                                    ] < totalPages - 1 && (
                                                            <span className="px-1 text-muted">
                                                                ...
                                                            </span>
                                                        )}

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handlePageChange(
                                                                totalPages
                                                            )
                                                        }
                                                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-xs font-bold text-primary hover:border-secondary hover:text-secondary sm:h-11 sm:w-11"
                                                    >
                                                        {totalPages}
                                                    </button>
                                                </>
                                            )}

                                        {/* Next */}

                                        <button
                                            type="button"
                                            aria-label="Next page"
                                            disabled={page === totalPages}
                                            onClick={() =>
                                                handlePageChange(page + 1)
                                            }
                                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-primary transition-all hover:border-secondary hover:text-secondary disabled:cursor-not-allowed disabled:opacity-40 sm:h-11 sm:w-11"
                                        >
                                            <ChevronRight size={20} />
                                        </button>
                                    </nav>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= MOBILE FILTER DRAWER ================= */}

            {mobileFilterOpen && (
                <dialog
                    ref={mobileDialogRef}
                    aria-labelledby="mobile-filter-title"
                    onCancel={(e) => {
                        e.preventDefault();
                        setMobileFilterOpen(false);
                    }}
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setMobileFilterOpen(false);
                        }
                    }}
                    className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-black/50 backdrop:backdrop-blur-sm"
                >
                    <div
                        data-lenis-prevent
                        className="relative flex h-full w-[min(88%,380px)] flex-col bg-white shadow-2xl"
                    >
                        {/* Drawer Header */}

                        <div className="flex shrink-0 items-center justify-between gap-3 bg-primary px-5 py-5 text-white">

                            <div className="flex items-center gap-3">

                                <SlidersHorizontal
                                    size={21}
                                    className="text-secondary"
                                />

                                <h2
                                    id="mobile-filter-title"
                                    className="font-heading text-lg font-extrabold"
                                >
                                    Filter Products
                                </h2>
                            </div>

                            <button
                                type="button"
                                aria-label="Close filters"
                                onClick={() =>
                                    setMobileFilterOpen(false)
                                }
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-secondary"
                            >
                                <X size={21} />
                            </button>
                        </div>

                        {/* Scrollable Categories */}

                        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-surface p-4">

                            <CategorySidebar
                                activeCategory={activeCategory}
                                onCategoryChange={
                                    handleCategoryChange
                                }
                                onOpenInquiry={() => {
                                    setMobileFilterOpen(false);
                                    setOpenPopup(true);
                                }}
                            />
                        </div>

                        {/* Bottom Button */}

                        <div className="shrink-0 border-t border-border bg-white p-4">

                            <button
                                type="button"
                                onClick={() =>
                                    setMobileFilterOpen(false)
                                }
                                className="flex w-full items-center justify-center gap-3 rounded-lg bg-secondary px-5 py-4 text-sm font-extrabold text-white"
                            >
                                Show {totalProducts} Products

                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </dialog>
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