
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import {
    ArrowRight,
    ChevronRight,
    LayoutGrid,
} from "lucide-react";

import categories from "@/utils/data";

export const products = categories;

export default function ProductMegaMenu({
    open,
    onMouseEnter,
    onMouseLeave,
    onNavigate,
}) {
    const menuRef = useRef(null);
    const productGridRef = useRef(null);
    const categoryListRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [menuHeight, setMenuHeight] = useState(480);

    const activeCategory = categories[activeIndex];

    // ================= RESPONSIVE MENU HEIGHT =================

    useEffect(() => {
        if (!open) return;

        const updateHeight = () => {
            if (!menuRef.current) return;

            const top =
                menuRef.current.getBoundingClientRect().top;

            const availableHeight =
                window.innerHeight - top - 24;

            setMenuHeight(
                Math.max(0, Math.min(480, availableHeight))
            );
        };

        updateHeight();

        window.addEventListener("resize", updateHeight);

        return () => {
            window.removeEventListener("resize", updateHeight);
        };
    }, [open]);

    // ================= MENU ANIMATION =================

    useEffect(() => {
        const menu = menuRef.current;

        if (!menu) return;

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        gsap.killTweensOf(menu);

        if (reducedMotion) {
            gsap.set(menu, {
                autoAlpha: open ? 1 : 0,
                pointerEvents: open ? "auto" : "none",
                y: 0,
            });

            return;
        }

        if (open) {
            gsap.set(menu, {
                pointerEvents: "auto",
            });

            gsap.fromTo(
                menu,
                {
                    autoAlpha: 0,
                    y: -8,
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power3.out",
                    overwrite: true,
                }
            );
        } else {
            gsap.set(menu, {
                pointerEvents: "none",
            });

            gsap.to(menu, {
                autoAlpha: 0,
                y: -8,
                duration: 0.2,
                ease: "power2.inOut",
                overwrite: true,
            });
        }

        return () => gsap.killTweensOf(menu);
    }, [open]);

    // ================= PRODUCT SWITCH ANIMATION =================

    useEffect(() => {
        const grid = productGridRef.current;

        if (!open || !grid) return;

        // Reset scroll when changing category
        grid.scrollTop = 0;

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reducedMotion) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".mega-product",
                {
                    opacity: 0,
                    y: 8,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.28,
                    stagger: 0.02,
                    ease: "power2.out",
                    overwrite: true,
                }
            );
        }, grid);

        return () => ctx.revert();
    }, [activeIndex, open]);

    if (!activeCategory) return null;

    return (
        <div
            ref={menuRef}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            aria-hidden={!open}
            inert={!open}
            data-lenis-prevent
            className="invisible absolute inset-x-0 top-full z-40 mx-auto hidden w-[calc(100%-48px)] max-w-[1280px] rounded-b-2xl border border-border bg-white opacity-0 shadow-[0_20px_60px_rgba(16,42,67,0.18)] lg:block"
            style={{
                pointerEvents: "none",
                height: menuHeight,
            }}
        >
            {/* ================= MAIN CONTAINER ================= */}
            <div className="grid h-full min-h-0 grid-cols-[300px_minmax(0,1fr)] gap-4 overflow-hidden p-4 xl:grid-cols-[330px_minmax(0,1fr)] xl:gap-5 xl:p-5">

                {/* ================= LEFT CATEGORIES ================= */}

                <aside className="flex h-full min-h-0 min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-surface p-2.5">

                    {/* Fixed Sidebar Header */}

                    <div className="mb-2 flex shrink-0 items-center justify-between border-b border-border px-2 py-3">

                        <div className="flex items-center gap-2">

                            <LayoutGrid
                                size={17}
                                className="text-secondary"
                            />

                            <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-primary">
                                Categories
                            </h4>
                        </div>

                        <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold text-primary">
                            {categories.length}
                        </span>
                    </div>

                    {/* Scrollable Category List */}

                    <div
                        ref={categoryListRef}
                        data-lenis-prevent
                        className="mega-scrollbar min-h-0 flex-1 space-y-1.5 overflow-y-auto overscroll-contain pr-1"
                    >
                        {categories.map((category, index) => {
                            const isActive =
                                activeIndex === index;

                            return (
                                <Link
                                    key={category.slug}
                                    href={`/${category.slug}`}
                                    onMouseEnter={() =>
                                        setActiveIndex(index)
                                    }
                                    onFocus={() =>
                                        setActiveIndex(index)
                                    }
                                    onClick={onNavigate}
                                    className={`group relative flex min-h-[65px] items-center gap-2.5 rounded-lg border p-2 transition-colors duration-200 ${isActive
                                        ? "border-primary bg-primary text-white"
                                        : "border-transparent bg-white text-primary hover:border-secondary/30"
                                        }`}
                                >
                                    {/* Active Indicator */}

                                    {isActive && (
                                        <span className="absolute left-0 top-1/2 h-7 w-[3px] -translate-y-1/2 rounded-r-full bg-secondary" />
                                    )}

                                    {/* Category Image */}

                                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-md bg-white">
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            fill
                                            sizes="44px"
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Category Name */}

                                    <div className="min-w-0 flex-1">
                                        <h5 className="text-[11px] font-bold leading-[1.5] xl:text-xs">
                                            {category.name}
                                        </h5>

                                        <span
                                            className={`mt-1 block text-[10px] ${isActive
                                                ? "text-white/60"
                                                : "text-muted"
                                                }`}
                                        >
                                            {category.products.length} Products
                                        </span>
                                    </div>

                                    <ChevronRight
                                        size={15}
                                        className={`shrink-0 ${isActive
                                            ? "text-secondary"
                                            : "text-muted"
                                            }`}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </aside>

                {/* ================= RIGHT PRODUCTS ================= */}

                <div className="flex h-full min-h-0 min-w-0 flex-col overflow-hidden">

                    {/* Scrollable Product Container */}

                    <div
                        ref={productGridRef}
                        data-lenis-prevent
                        className="mega-scrollbar min-h-0 flex-1 overflow-y-auto overscroll-contain pr-2"
                    >
                        {/* Product Grid */}

                        <div className="grid grid-cols-2 content-start gap-3">

                            {activeCategory.products.map(
                                (product, index) => (
                                    <Link
                                        key={product.slug}
                                        href={`/${product.slug}`}
                                        onClick={onNavigate}
                                        className="mega-product group relative flex min-h-[100px] items-center gap-3 rounded-xl border border-border bg-white p-2.5 transition-[background-color,border-color,box-shadow] duration-300 hover:border-secondary/50 hover:bg-surface hover:shadow-sm"
                                    >
                                        {/* Product Image */}

                                        <div className="relative h-[65px] w-[65px] shrink-0 overflow-hidden rounded-lg bg-surface xl:h-[75px] xl:w-[75px]">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                sizes="75px"
                                                className="object-contain p-1 transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* Product Details */}

                                        <div className="min-w-0 flex-1">

                                            <span className="mb-1 block text-[9px] font-bold tracking-widest text-secondary">
                                                {String(
                                                    index + 1
                                                ).padStart(2, "0")}
                                            </span>

                                            <h5 className="font-heading text-[11px] font-bold leading-[1.5] text-primary transition-colors group-hover:text-secondary xl:text-xs">
                                                {product.name}
                                            </h5>

                                            <span className="mt-1.5 inline-flex items-center gap-1.5 text-[10px] font-semibold text-muted transition-colors group-hover:text-secondary">
                                                View Product

                                                <ArrowRight
                                                    size={12}
                                                    className="transition-transform group-hover:translate-x-1"
                                                />
                                            </span>
                                        </div>
                                    </Link>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= CUSTOM SCROLLBAR ================= */}
            <style jsx global>{`
                .mega-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: #f58220 #f3f5f7;
                    overscroll-behavior: contain;
                    touch-action: pan-y;
                }

                .mega-scrollbar::-webkit-scrollbar {
                    width: 5px;
                }

                .mega-scrollbar::-webkit-scrollbar-track {
                    background: #f3f5f7;
                    border-radius: 10px;
                }

                .mega-scrollbar::-webkit-scrollbar-thumb {
                    background: #f58220;
                    border-radius: 10px;
                }

                .mega-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #102a43;
                }
            `}</style>
        </div>
    );
}
