
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Replace names, slugs, and image paths with your actual catalog.
const products = [
    {
        id: 1,
        name: "Supermarket Racks",
        image: "/products/1.webp",
        slug: "supermarket-racks",
        bg: "#102A43",
        accent: "#F58220",
    },
    {
        id: 2,
        name: "Gondola Racks",
        image: "/products/2.webp",
        slug: "gondola-racks",
        bg: "#F58220",
        accent: "#102A43",
    },
    {
        id: 3,
        name: "Wall Display Racks",
        image: "/products/8.webp",
        slug: "wall-display-racks",
        bg: "#254A67",
        accent: "#F5A65B",
    },
    {
        id: 4,
        name: "Departmental Racks",
        image: "/products/4.webp",
        slug: "departmental-racks",
        bg: "#D96B17",
        accent: "#102A43",
    },
    {
        id: 5,
        name: "Heavy Duty Racks",
        image: "/products/5.webp",
        slug: "heavy-duty-racks",
        bg: "#163B56",
        accent: "#F58220",
    },
    {
        id: 6,
        name: "Storage Racks",
        image: "/products/6.webp",
        slug: "storage-racks",
        bg: "#E28A42",
        accent: "#102A43",
    },
    {
        id: 7,
        name: "Retail Shelving",
        image: "/products/7.webp",
        slug: "retail-shelving",
        bg: "#315C76",
        accent: "#F58220",
    },
    {
        id: 8,
        name: "Corner Display Racks",
        image: "/products/8.webp",
        slug: "corner-display-racks",
        bg: "#E47727",
        accent: "#102A43",
    },
    {
        id: 9,
        name: "End Cap Racks",
        image: "/products/9.webp",
        slug: "end-cap-racks",
        bg: "#1B425F",
        accent: "#F5A65B",
    },
    {
        id: 10,
        name: "Warehouse Racks",
        image: "/products/10.webp",
        slug: "warehouse-racks",
        bg: "#C9621D",
        accent: "#102A43",
    },
    {
        id: 11,
        name: "Metal Display Racks",
        image: "/products/6.webp",
        slug: "metal-display-racks",
        bg: "#234F69",
        accent: "#F58220",
    },
    {
        id: 12,
        name: "Customized Racks",
        image: "/products/1.webp",
        slug: "customized-racks",
        bg: "#E58B3C",
        accent: "#102A43",
    },
];

function ProductCard({ product, index }) {
    const cardRef = useRef(null);
    const imageRef = useRef(null);
    const titleRef = useRef(null);
    const shineRef = useRef(null);

    const handleMouseMove = (event) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;

        const rotateY = (x - 0.5) * 18;
        const rotateX = (0.5 - y) * 18;

        gsap.to(card, {
            rotateX,
            rotateY,
            scale: 1.035,
            duration: 0.45,
            ease: "power2.out",
            overwrite: "auto",
        });

        gsap.to(imageRef.current, {
            x: (x - 0.5) * 20,
            y: (y - 0.5) * 16 - 12,
            scale: 1.08,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto",
        });

        gsap.to(titleRef.current, {
            x: (x - 0.5) * -12,
            y: (y - 0.5) * -10,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto",
        });

        if (shineRef.current) {
            shineRef.current.style.background = `
        radial-gradient(
          circle at ${x * 100}% ${y * 100}%,
          rgba(255,255,255,0.24),
          transparent 55%
        )
      `;
        }
    };

    const handleMouseLeave = () => {
        gsap.to(cardRef.current, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.7,
            ease: "elastic.out(1,0.55)",
            overwrite: "auto",
        });

        gsap.to([imageRef.current, titleRef.current], {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: "power3.out",
            overwrite: "auto",
        });

        if (shineRef.current) {
            shineRef.current.style.background = "transparent";
        }
    };

    return (
        <div
            className="product-reveal"
            style={{ perspective: "1100px" }}
        >
            <Link
                href={`/areas/${product.slug}`}
                aria-label={`View ${product.name}`}
                className="block"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onBlur={handleMouseLeave}
            >
                <div
                    ref={cardRef}
                    className="group relative aspect-[3/4] w-full overflow-hidden rounded-[24px] shadow-[0_25px_45px_-25px_rgba(16,42,67,0.45)] ring-[3px] ring-white transition-shadow duration-500 hover:shadow-[0_35px_65px_-25px_rgba(16,42,67,0.5)]"
                    style={{
                        backgroundColor: product.bg,
                        transformStyle: "preserve-3d",
                    }}
                >
                    {/* Background lighting */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_65%_at_30%_0%,rgba(255,255,255,0.2),transparent_75%)]" />

                    {/* Large background number */}
                    <span
                        className="pointer-events-none absolute right-4 top-3 font-heading text-[90px] font-black leading-none opacity-15 sm:text-[110px]"
                        style={{ color: "#FFFFFF" }}
                    >
                        {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Product name behind PNG */}
                    <div
                        ref={titleRef}
                        className="pointer-events-none absolute inset-x-3 top-5 z-0 text-center"
                        style={{
                            transform: "translateZ(15px)",
                        }}
                    >
                        <h3
                            className="font-heading text-[clamp(1.6rem,2.3vw,2.8rem)] font-black uppercase leading-[0.98] tracking-[-0.015em]"
                            style={{ color: "#FFFFFF" }}
                        >
                            {product.name}
                        </h3>
                    </div>

                    {/* Decorative ring */}
                    <div
                        className="pointer-events-none absolute left-1/2 top-[53%] h-[65%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15"
                        style={{
                            transform: "translate(-50%, -50%) translateZ(5px)",
                        }}
                    />

                    {/* Product PNG */}
                    <div
                        ref={imageRef}
                        className="pointer-events-none absolute bottom-4 left-[8%] z-10 h-[79%] w-[84%]"
                        style={{
                            transform: "translateZ(65px)",
                        }}
                    >
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                            className="object-contain object-bottom drop-shadow-[0_22px_18px_rgba(0,0,0,0.3)]"
                        />
                    </div>

                    {/* Bottom gradient */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-black/35 to-transparent" />

                    {/* Bottom product name */}
                    <div
                        className="absolute bottom-4 left-5 right-5 z-20 flex items-end justify-between gap-3"
                        style={{
                            transform: "translateZ(35px)",
                        }}
                    >
                        <p className="max-w-[75%] font-heading text-base font-bold leading-5 text-white sm:text-lg">
                            {product.name}
                        </p>

                        <span
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-white"
                            style={{
                                "--hover-accent": product.bg,
                            }}
                        >
                            <ArrowUpRight
                                size={21}
                                className="group-hover:text-primary"
                            />
                        </span>
                    </div>

                    {/* Interactive shine */}
                    <div
                        ref={shineRef}
                        className="pointer-events-none absolute inset-0 z-30"
                    />
                </div>
            </Link>
        </div>
    );
}

export default function Products() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reduced) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".products-heading",
                {
                    opacity: 0,
                    y: 40,
                },
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

            ScrollTrigger.batch(".product-reveal", {
                start: "top 92%",
                once: true,
                onEnter: (elements) => {
                    gsap.fromTo(
                        elements,
                        {
                            opacity: 0,
                            y: 55,
                        },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.85,
                            stagger: 0.08,
                            ease: "power3.out",
                            clearProps: "transform,opacity",
                        }
                    );
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="products"
            className="relative overflow-hidden bg-[#F7F9FB] py-10 sm:py-12 lg:py-16 border border-gray-300"
        >
            {/* Background decoration */}
            <div className="pointer-events-none absolute -right-32 top-0 h-[450px] w-[450px] rounded-full bg-secondary/5 blur-[130px]" />

            <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

                {/* Section heading */}
                <div className="mb-10 flex flex-col justify-between gap-7 md:flex-row md:items-end">
                    <div className="max-w-[750px]">

                        <div className="products-heading mb-2 flex items-center gap-3">
                            <span className="h-[2px] w-10 bg-secondary" />

                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                                Our Product Collection
                            </span>
                        </div>

                        <h2 className="products-heading font-heading text-[clamp(2.5rem,4.5vw,5rem)] font-extrabold leading-[1.08] tracking-[-0.05em] text-primary">
                            Display Racks Built
                            <br />
                            for{" "}
                            <span className="text-secondary">
                                Every Space.
                            </span>
                        </h2>

                        {/* <p className="products-heading mt-5 max-w-[600px] text-sm leading-7 text-muted sm:text-base">
                            Discover our range of premium display racks,
                            retail shelving, and storage systems designed
                            for performance, durability, and style.
                        </p> */}
                    </div>

                    <Link
                        href="/areas"
                        className="group inline-flex w-fit items-center gap-3 rounded-lg bg-primary px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-secondary"
                    >
                        View All Products

                        <ArrowUpRight
                            size={19}
                            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </Link>
                </div>

                {/* 12 PRODUCT CARDS */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-7">
                    {products.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
