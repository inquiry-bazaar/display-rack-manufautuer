
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export const products = [
    {
        name: "Supermarket Display Racks",
        slug: "supermarket-display-racks",
        image: "/products/supermarket-racks.webp",
        description: "Modern shelving for supermarkets.",
    },
    {
        name: "Gondola Display Racks",
        slug: "gondola-display-racks",
        image: "/products/gondola-racks.webp",
        description: "Versatile retail display solutions.",
    },
    {
        name: "Wall Mounted Racks",
        slug: "wall-mounted-racks",
        image: "/products/wall-mounted-racks.webp",
        description: "Space-saving wall display systems.",
    },
    {
        name: "Departmental Store Racks",
        slug: "departmental-store-racks",
        image: "/products/departmental-racks.webp",
        description: "Organized shelving for retail stores.",
    },
    {
        name: "Heavy Duty Storage Racks",
        slug: "heavy-duty-storage-racks",
        image: "/products/heavy-duty-racks.webp",
        description: "Durable industrial storage solutions.",
    },
    {
        name: "Customized Display Racks",
        slug: "customized-display-racks",
        image: "/products/customized-racks.webp",
        description: "Tailored to your store requirements.",
    },
];

export default function ProductMegaMenu({
    open,
    onMouseEnter,
    onMouseLeave,
    onNavigate,
}) {
    const menuRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const menu = menuRef.current;
        if (!menu) return;

        animationRef.current?.kill();

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reducedMotion) {
            gsap.set(menu, {
                autoAlpha: open ? 1 : 0,
                y: 0,
            });
            return;
        }

        if (open) {
            gsap.set(menu, {
                visibility: "visible",
                pointerEvents: "auto",
            });

            const tl = gsap.timeline();

            tl.fromTo(
                menu,
                {
                    opacity: 0,
                    y: -12,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.32,
                    ease: "power3.out",
                }
            ).fromTo(
                menu.querySelectorAll(".mega-item"),
                {
                    opacity: 0,
                    y: 12,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.35,
                    stagger: 0.045,
                    ease: "power2.out",
                },
                "-=0.18"
            );

            animationRef.current = tl;
        } else {
            animationRef.current = gsap.to(menu, {
                opacity: 0,
                y: -8,
                duration: 0.2,
                ease: "power2.in",
                onComplete: () => {
                    gsap.set(menu, {
                        visibility: "hidden",
                        pointerEvents: "none",
                    });
                },
            });
        }

        return () => animationRef.current?.kill();
    }, [open]);

    return (
        <div
            ref={menuRef}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            aria-hidden={!open}
            inert={!open}
            className="invisible absolute left-0 top-full z-40 hidden w-full border-t border-border bg-white opacity-0 shadow-[0_25px_60px_rgba(0,0,0,0.12)] lg:block"
            style={{ pointerEvents: "none" }}
        >
            <div className="mx-auto max-w-[1500px] px-8 py-8 lg:px-12">

                {/* Header */}
                <div className="mb-6 flex items-center justify-between border-b border-border pb-5">
                    <div>
                        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-secondary">
                            Our Product Range
                        </p>

                        <h3 className="font-heading text-2xl font-extrabold text-primary">
                            Explore Our Display Racks
                        </h3>
                    </div>

                    <Link
                        href="/areas"
                        onClick={onNavigate}
                        className="group flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-secondary"
                    >
                        View All Products
                        <ArrowUpRight
                            size={18}
                            className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-4 xl:grid-cols-3">
                    {products.map((product, index) => (
                        <Link
                            key={product.slug}
                            href={`/areas/${product.slug}`}
                            onClick={onNavigate}
                            className="mega-item group flex items-center gap-4 rounded-xl border border-border/80 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:bg-surface hover:shadow-md"
                        >
                            {/* Product image */}
                            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-surface">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    sizes="96px"
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Product details */}
                            <div className="min-w-0 flex-1">
                                <span className="mb-2 block text-[10px] font-bold tracking-widest text-secondary">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <h4 className="font-heading text-sm font-bold leading-snug text-primary transition-colors group-hover:text-secondary">
                                    {product.name}
                                </h4>

                                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
                                    {product.description}
                                </p>
                            </div>

                            <ArrowRight
                                size={17}
                                className="shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-secondary"
                            />
                        </Link>
                    ))}
                </div>

                {/* Bottom strip */}
                <div className="mt-7 flex items-center justify-between rounded-lg bg-primary px-6 py-4">
                    <div>
                        <p className="text-sm font-bold text-white">
                            Need a custom display rack?
                        </p>
                        <p className="mt-1 text-xs text-white/65">
                            Get a layout tailored to your retail space.
                        </p>
                    </div>

                    <Link
                        href="/contact-us"
                        onClick={onNavigate}
                        className="inline-flex items-center gap-2 rounded-md bg-secondary px-5 py-3 text-xs font-bold text-white transition-transform hover:-translate-y-0.5"
                    >
                        Request Free Layout
                        <ArrowUpRight size={16} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
