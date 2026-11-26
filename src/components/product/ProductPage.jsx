
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InquiryPopup from "@/components/layout/InquiryPopup";
import {
    ArrowRight,
    ArrowUpRight,
    ChevronRight,
    ChevronLeft,
    Layers3,
    Eye,
    ShieldCheck,
    Settings2,
    LayoutGrid,
    PackageCheck,
    Phone,
    FileText,
    ZoomIn,
    X,
    CheckCircle2,
    Maximize2,
    Store,
    MessageCircle,
} from "lucide-react";

import categories from "@/utils/data";
import CTASection from "../home/CTASection";
import { FaWhatsapp } from "react-icons/fa";
import FormSection from "../layout/FormSection";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PHONE = "+918587901795";
const WHATSAPP = "918587901795";

const tabs = [
    "Overview",
    "Specifications",
    "Features",
    "Applications",
];

const defaultFeatures = [
    {
        icon: Layers3,
        title: "Space-Efficient Design",
    },
    {
        icon: Eye,
        title: "Better Product Visibility",
    },
    {
        icon: PackageCheck,
        title: "Organized Product Display",
    },
    {
        icon: ShieldCheck,
        title: "Durable Construction",
    },
    {
        icon: Settings2,
        title: "Customizable Solutions",
    },
    {
        icon: LayoutGrid,
        title: "Retail Display Solutions",
    },
];

export default function ProductPage({
    product,
    category: providedCategory,
    relatedProducts: providedRelatedProducts,
}) {
    const pageRef = useRef(null);
    const heroRef = useRef(null);
    const imageRef = useRef(null);
    const tabContentRef = useRef(null);

    const [openPopup, setOpenPopup] = useState(false);
    const [activeImage, setActiveImage] = useState(0);
    const [activeTab, setActiveTab] = useState("Overview");
    const [zoomOpen, setZoomOpen] = useState(false);

    // ================= FIND PRODUCT CATEGORY =================

    const category =
        providedCategory ||
        categories.find((item) =>
            item.products?.some(
                (p) => p.slug === product.slug
            )
        );

    // ================= RELATED PRODUCTS =================

    const relatedProducts = (
        providedRelatedProducts ||
        category?.products ||
        []
    )
        .filter((item) => item.slug !== product.slug)
        .slice(0, 4);

    // ================= PRODUCT GALLERY =================

    const gallery = Array.from(
        new Set(
            [
                product.image,
                ...(Array.isArray(product.images)
                    ? product.images.map((item) =>
                        typeof item === "string"
                            ? item
                            : item.url || item.src
                    )
                    : []),
            ].filter(Boolean)
        )
    );

    const currentImage =
        gallery[activeImage] || product.image;

    const bannerImage =
        product.bannerImage ||
        category?.image ||
        product.image;

    // ================= PRODUCT CONTENT =================

    const description =
        product.description ||
        `${product.name} is a retail display solution for organized merchandise presentation and efficient use of available store space. Contact our team to discuss dimensions, configuration, materials and customization options for your requirements.`;

    const overview =
        product.overview ||
        `${product.name} is part of our ${category?.name || "retail display rack"
        } collection. Explore shelving configurations suited to your store layout, merchandise requirements and available floor space. Our team can help you select a suitable display solution for your business.`;

    const features =
        Array.isArray(product.features) &&
            product.features.length > 0
            ? product.features
            : defaultFeatures.map((item) => item.title);

    const specifications = {
        "Product Name": product.name,
        Category: category?.name || "Display Racks",
        ...(product.specifications || {}),
    };

    const applications =
        Array.isArray(product.applications) &&
            product.applications.length > 0
            ? product.applications
            : [
                category?.name || "Retail Stores",
                "Merchandise Display",
                "Commercial Retail Spaces",
                "Product Organization",
            ];

    const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
        `Hello Arya Insulation, I am interested in ${product.name}. Please share more details and pricing.`
    )}`;

    const inquiryUrl = `/contact-us?product=${encodeURIComponent(
        product.name
    )}`;

    // ================= GALLERY NAVIGATION =================

    const nextImage = () => {
        if (gallery.length <= 1) return;

        setActiveImage(
            (prev) => (prev + 1) % gallery.length
        );
    };

    const previousImage = () => {
        if (gallery.length <= 1) return;

        setActiveImage(
            (prev) =>
                (prev - 1 + gallery.length) %
                gallery.length
        );
    };

    // ================= RESET ON PRODUCT CHANGE =================

    useEffect(() => {
        setActiveImage(0);
        setActiveTab("Overview");
        setZoomOpen(false);
    }, [product.slug]);

    // ================= PAGE ANIMATIONS =================

    useGSAP(
        () => {
            const reducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            if (reducedMotion) return;

            const tl = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
            });

            tl.from(".product-banner-image", {
                scale: 1.1,
                duration: 1.5,
            })
                .from(
                    ".product-hero-content",
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.12,
                    },
                    "-=1.2"
                )
                .from(
                    ".product-gallery-reveal",
                    {
                        x: -35,
                        opacity: 0,
                        duration: 0.85,
                    },
                    "-=0.5"
                )
                .from(
                    ".product-info-reveal",
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.65,
                        stagger: 0.09,
                    },
                    "-=0.65"
                );

            gsap.utils
                .toArray(".product-section-reveal")
                .forEach((element) => {
                    gsap.from(element, {
                        y: 40,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 90%",
                            once: true,
                        },
                    });
                });

            gsap.from(".related-product-card", {
                y: 50,
                opacity: 0,
                stagger: 0.12,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".related-product-grid",
                    start: "top 90%",
                    once: true,
                },
            });
        },
        {
            scope: pageRef,
            dependencies: [product.slug],
            revertOnUpdate: true,
        }
    );

    // ================= IMAGE CHANGE ANIMATION =================

    useGSAP(
        () => {
            if (!imageRef.current) return;

            if (
                window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches
            )
                return;

            gsap.fromTo(
                imageRef.current,
                {
                    opacity: 0.4,
                    scale: 0.97,
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.4,
                    ease: "power2.out",
                }
            );
        },
        {
            dependencies: [activeImage, product.slug],
            revertOnUpdate: true,
        }
    );

    // ================= TAB CHANGE ANIMATION =================

    useGSAP(
        () => {
            if (!tabContentRef.current) return;

            if (
                window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches
            )
                return;

            gsap.fromTo(
                tabContentRef.current,
                {
                    y: 12,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.35,
                    ease: "power2.out",
                }
            );
        },
        {
            dependencies: [activeTab, product.slug],
            revertOnUpdate: true,
        }
    );

    // ================= IMAGE ZOOM KEYBOARD =================

    useEffect(() => {
        if (!zoomOpen) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setZoomOpen(false);
            }

            if (
                event.key === "ArrowRight" &&
                gallery.length > 1
            ) {
                setActiveImage(
                    (prev) => (prev + 1) % gallery.length
                );
            }

            if (
                event.key === "ArrowLeft" &&
                gallery.length > 1
            ) {
                setActiveImage(
                    (prev) =>
                        (prev - 1 + gallery.length) %
                        gallery.length
                );
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () =>
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
    }, [zoomOpen, gallery.length]);

    return (
        <main ref={pageRef} className="overflow-hidden bg-white">
            {/* ==============================================
                PRODUCT HERO BANNER
            ============================================== */}
            <section
                ref={heroRef}
                className="relative isolate min-h-[260px] overflow-hidden bg-primary sm:min-h-[280px] lg:min-h-[310px]"
            >
                {/* Background Image */}

                <div className="product-banner-image absolute inset-0 -z-30">
                    <Image
                        src={bannerImage}
                        alt={category?.name || product.name}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                </div>

                {/* Dark Background Overlay */}

                <div className="absolute inset-0 -z-20 bg-primary/85" />

                {/* Right Side Image */}

                <div
                    className="absolute inset-y-0 right-0 -z-10 hidden w-[42%] overflow-hidden lg:block"
                    style={{
                        clipPath:
                            "polygon(22% 0, 100% 0, 100% 100%, 0 100%)",
                    }}
                >
                    <Image
                        src={bannerImage}
                        alt={product.name}
                        fill
                        sizes="45vw"
                        className="object-cover"
                    />
                </div>

                {/* Orange Diagonal Strip */}

                <div
                    className="absolute inset-y-0 right-[34%] hidden w-[130px] bg-secondary lg:block"
                    style={{
                        clipPath:
                            "polygon(78% 0, 100% 0, 22% 100%, 0 100%)",
                    }}
                />

                {/* Banner Content */}

                <div className="relative mx-auto flex min-h-[260px] max-w-[1500px] flex-col justify-center px-5 py-10 sm:min-h-[280px] sm:px-8 lg:min-h-[310px] lg:px-12">
                    {/* Breadcrumb */}
                    <div className="product-hero-content mb-6 flex max-w-[950px] flex-wrap items-center gap-2 text-[11px] font-medium text-white/95 sm:text-xs">
                        <Link
                            href="/"
                            className="transition-colors hover:text-secondary"
                        >
                            Home
                        </Link>

                        {category && (
                            <>
                                <ChevronRight size={13} />

                                <Link
                                    href={`/${category.slug}`}
                                    className="transition-colors hover:text-secondary"
                                >
                                    {category.name}
                                </Link>
                            </>
                        )}

                        <ChevronRight size={13} />

                        <span className="text-white">
                            {product.name}
                        </span>
                    </div>

                    {/* Eyebrow */}
                    <div className="product-hero-content mb-4 flex items-center gap-3">

                        <span className="h-[3px] w-10 bg-secondary sm:w-14" />

                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white sm:text-xs">
                            Product Details
                        </span>
                    </div>

                    {/* Product Title */}
                    <h1 className="product-hero-content max-w-[850px] font-heading text-[clamp(1.9rem,3.5vw,3.7rem)] font-extrabold leading-[1.15] tracking-[-0.04em] text-white lg:max-w-[62%]">
                        {product.name}
                        <span className="text-secondary">
                            .
                        </span>
                    </h1>
                </div>
            </section>

            {/* ==============================================
                PRODUCT MAIN SECTION
            ============================================== */}
            <section className="py-10">

                <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
                    <div className="grid items-start gap-10 lg:grid-cols-[1.08fr_1fr] lg:gap-12 xl:gap-16">
                        <div className="product-gallery-reveal min-w-0">

                            <div
                                className={`grid gap-3 sm:gap-4 ${gallery.length > 1
                                    ? "sm:grid-cols-[85px_minmax(0,1fr)] xl:grid-cols-[100px_minmax(0,1fr)]"
                                    : "grid-cols-1"
                                    }`}
                            >

                                {/* Vertical Thumbnails */}
                                {gallery.length > 1 && (
                                    <div
                                        data-lenis-prevent
                                        className="order-2 flex gap-3 overflow-x-auto sm:order-1 sm:max-h-[540px] sm:flex-col sm:overflow-x-hidden sm:overflow-y-auto sm:pr-1 [scrollbar-width:thin]"
                                    >
                                        {gallery.map(
                                            (src, index) => (
                                                <button
                                                    type="button"
                                                    key={src}
                                                    onClick={() =>
                                                        setActiveImage(
                                                            index
                                                        )
                                                    }
                                                    aria-label={`View product image ${index + 1
                                                        }`}
                                                    aria-pressed={
                                                        activeImage ===
                                                        index
                                                    }
                                                    className={`relative aspect-square w-[76px] shrink-0 overflow-hidden rounded-xl border-2 bg-surface transition-all duration-300 sm:w-full ${activeImage ===
                                                        index
                                                        ? "border-secondary"
                                                        : "border-transparent hover:border-secondary/50"
                                                        }`}
                                                >
                                                    <Image
                                                        src={src}
                                                        alt={`${product.name} - ${index + 1
                                                            }`}
                                                        fill
                                                        sizes="100px"
                                                        className="object-contain p-2"
                                                    />
                                                </button>
                                            )
                                        )}
                                    </div>
                                )}

                                {/* Main Product Image */}
                                <div className="group relative order-1 isolate aspect-square min-w-0 overflow-hidden rounded-2xl border border-border bg-[#F0F2F4] sm:order-2 sm:aspect-[1.1/1]">

                                    {/* Background Effects */}

                                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#FFFFFF_0%,#F0F2F4_65%,#E2E6EA_100%)]" />

                                    <div
                                        ref={imageRef}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={currentImage}
                                            alt={product.name}
                                            fill
                                            priority
                                            sizes="(max-width: 1023px) 100vw, 50vw"
                                            className="object-contain"
                                        />
                                    </div>

                                    {/* Gallery Navigation */}

                                    {gallery.length > 1 && (
                                        <>
                                            <button
                                                type="button"
                                                onClick={previousImage}
                                                aria-label="Previous image"
                                                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-md transition-all hover:bg-secondary hover:text-white sm:left-1 sm:h-9 sm:w-9"
                                            >
                                                <ChevronLeft size={20} />
                                            </button>

                                            <button
                                                type="button"
                                                onClick={nextImage}
                                                aria-label="Next image"
                                                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-md transition-all hover:bg-secondary hover:text-white sm:right-1 sm:h-9 sm:w-9"
                                            >
                                                <ChevronRight size={20} />
                                            </button>

                                            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-white/90 px-3 py-2 backdrop-blur-md">
                                                {gallery.map(
                                                    (_, index) => (
                                                        <button
                                                            type="button"
                                                            key={index}
                                                            onClick={() =>
                                                                setActiveImage(
                                                                    index
                                                                )
                                                            }
                                                            aria-label={`Go to image ${index + 1
                                                                }`}
                                                            className={`h-2 rounded-full transition-all duration-300 ${activeImage ===
                                                                index
                                                                ? "w-6 bg-secondary"
                                                                : "w-2 bg-primary/25"
                                                                }`}
                                                        />
                                                    )
                                                )}
                                            </div>
                                        </>
                                    )}

                                    {/* Zoom Button */}

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setZoomOpen(true)
                                        }
                                        aria-label="Enlarge product image"
                                        className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary shadow-md transition-all duration-300 hover:bg-secondary hover:text-white"
                                    >
                                        <ZoomIn size={22} />
                                    </button>

                                    {/* <div className="absolute left-4 top-4 rounded-md bg-white/90 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-primary backdrop-blur-md">
                                        Product Gallery
                                    </div> */}
                                </div>
                            </div>

                            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted">

                                <ZoomIn size={15} />

                                Click the zoom icon to enlarge the product image.
                            </p>
                        </div>

                        <div className="min-w-0 lg:py-2">

                            {/* Category Badge */}

                            {category && (
                                <Link
                                    href={`/${category.slug}`}
                                    className="product-info-reveal mb-5 inline-flex max-w-full items-center gap-2 rounded-lg bg-secondary/10 px-3 py-2 text-[10px] font-extrabold uppercase leading-relaxed tracking-wider text-secondary transition-colors hover:bg-secondary hover:text-white sm:text-xs"
                                >
                                    {category.name}

                                    <ArrowUpRight
                                        size={14}
                                        className="shrink-0"
                                    />
                                </Link>
                            )}

                            {/* Product Heading */}

                            <h2 className="product-info-reveal font-heading text-[clamp(1.9rem,3vw,3.2rem)] font-extrabold leading-[1.15] tracking-[-0.045em] text-primary">
                                {product.name}
                                <span className="text-secondary">
                                    .
                                </span>
                            </h2>

                            {/* Description */}

                            <p className="product-info-reveal mt-5 text-sm leading-[1.85] text-foreground/80 sm:text-base">
                                {description}
                            </p>

                            {/* Product Highlights */}

                            <div className="product-info-reveal mt-6 grid grid-cols-1 gap-x-5 gap-y-4 border-y border-border py-6 min-[480px]:grid-cols-2">

                                {defaultFeatures.map(
                                    (feature, index) => {
                                        const Icon = feature.icon;

                                        return (
                                            <div
                                                key={index}
                                                className="flex items-center gap-3"
                                            >
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/8 text-secondary sm:h-11 sm:w-11">
                                                    <Icon
                                                        size={23}
                                                        strokeWidth={1.8}
                                                    />
                                                </div>

                                                <span className="text-xs font-bold leading-relaxed text-primary sm:text-sm">
                                                    {feature.title}
                                                </span>
                                            </div>
                                        );
                                    }
                                )}
                            </div>

                            {/* Primary CTA Buttons */}

                            <div className="product-info-reveal mt-7 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2">
                                <button onClick={() => setOpenPopup(true)}
                                    className="group flex min-h-[56px] items-center justify-center gap-3 rounded-lg bg-secondary px-4 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(245,130,32,0.25)]"
                                >
                                    <FileText size={21} />

                                    Request a Quote

                                    <ArrowRight
                                        size={18}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </button>

                                <a
                                    href={`tel:${PHONE}`}
                                    className="group flex min-h-[56px] items-center justify-center gap-3 rounded-lg border-[1.5px] border-primary px-4 py-4 text-sm font-extrabold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
                                >
                                    <Phone size={19} />

                                    Talk to Our Expert
                                </a>
                            </div>

                            {/* WhatsApp Inquiry */}

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="product-info-reveal mt-4 flex items-center justify-center gap-2 rounded-lg border border-[#25D366]/25 bg-[#25D366]/5 px-5 py-3.5 text-sm font-bold text-[#168C45] transition-colors hover:bg-[#25D366]/10"
                            >
                                <FaWhatsapp size={19} />

                                Send Inquiry on WhatsApp

                                <ArrowUpRight size={15} />
                            </a>
                        </div>
                    </div>

                    {/* ======================================
                        PRODUCT DETAILS TABS
                    ====================================== */}
                    <div className="product-section-reveal mt-12">
                        {/* Tab Navigation */}
                        <div
                            role="tablist"
                            aria-label="Product details"
                            data-lenis-prevent
                            className="flex gap-1 overflow-x-auto rounded-xl border border-border bg-surface p-1.5 [scrollbar-width:none]"
                        >
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    type="button"
                                    role="tab"
                                    id={`tab-${tab.toLowerCase()}`}
                                    aria-selected={
                                        activeTab === tab
                                    }
                                    aria-controls="product-tab-panel"
                                    onClick={() =>
                                        setActiveTab(tab)
                                    }
                                    className={`shrink-0 whitespace-nowrap rounded-lg px-5 py-3.5 text-xs font-extrabold transition-all duration-300 sm:px-8 sm:text-sm lg:min-w-[170px] ${activeTab === tab
                                        ? "bg-secondary text-white shadow-sm"
                                        : "text-primary hover:bg-white"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div
                            ref={tabContentRef}
                            id="product-tab-panel"
                            role="tabpanel"
                            aria-labelledby={`tab-${activeTab.toLowerCase()}`}
                            className="mt-7 min-h-[280px] rounded-2xl border border-border bg-white p-5 sm:p-8 lg:p-9"
                        >

                            {/* ================= OVERVIEW ================= */}

                            {activeTab === "Overview" && (
                                <div className="grid items-start gap-8 lg:grid-cols-[1fr_0.9fr]">
                                    {/* Overview Text */}
                                    <div>
                                        <h3 className="font-heading text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">
                                            Product Overview
                                        </h3>

                                        <span className="mb-6 mt-4 block h-[3px] w-12 bg-secondary" />

                                        <p className="text-sm leading-[1.9] text-muted sm:text-base">
                                            {overview}
                                        </p>
                                    </div>

                                    {/* Application Image */}
                                    <div>
                                        <div className="relative min-h-[250px] overflow-hidden rounded-xl bg-surface">

                                            <Image
                                                src={
                                                    product.applicationImage ||
                                                    category?.image ||
                                                    product.image
                                                }
                                                alt={`${product.name} application`}
                                                fill
                                                unoptimized
                                                sizes="(max-width: 1023px) 100vw, 30vw"
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Key Details */}
                                        <div className="rounded-xl mt-2 bg-surface p-5 sm:p-6">

                                            <h3 className="font-heading text-xl font-extrabold text-primary">
                                                Key Details
                                            </h3>

                                            <span className="mb-5 mt-3 block h-[3px] w-10 bg-secondary" />

                                            <div className="divide-y divide-border">

                                                {Object.entries(
                                                    specifications
                                                )
                                                    .slice(0, 5)
                                                    .map(
                                                        ([key, value]) => (
                                                            <div
                                                                key={key}
                                                                className="grid grid-cols-[1fr_1.2fr] gap-3 py-3"
                                                            >
                                                                <span className="flex items-start gap-2 text-xs font-bold text-primary">

                                                                    <CheckCircle2
                                                                        size={15}
                                                                        className="mt-0.5 shrink-0 text-secondary"
                                                                    />

                                                                    {key}
                                                                </span>

                                                                <span className="break-words text-xs leading-relaxed text-foreground">
                                                                    {String(value)}
                                                                </span>
                                                            </div>
                                                        )
                                                    )}
                                            </div>

                                            {!product.specifications && (
                                                <p className="mt-4 text-xs leading-relaxed text-muted">
                                                    Contact our team for technical specifications and available sizes.
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* ================= SPECIFICATIONS ================= */}

                            {activeTab === "Specifications" && (
                                <div>

                                    <h3 className="font-heading text-2xl font-extrabold text-primary sm:text-3xl">
                                        Technical Specifications
                                    </h3>

                                    <span className="mb-7 mt-4 block h-[3px] w-12 bg-secondary" />

                                    <div className="overflow-hidden rounded-xl border border-border">

                                        {Object.entries(
                                            specifications
                                        ).map(
                                            ([key, value], index) => (
                                                <div
                                                    key={key}
                                                    className={`grid grid-cols-[1fr_1.5fr] gap-4 border-b border-border px-4 py-4 last:border-b-0 sm:px-6 ${index % 2 === 0
                                                        ? "bg-surface"
                                                        : "bg-white"
                                                        }`}
                                                >
                                                    <span className="text-xs font-bold text-primary sm:text-sm">
                                                        {key}
                                                    </span>

                                                    <span className="break-words text-xs leading-relaxed text-muted sm:text-sm">
                                                        {String(value)}
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </div>

                                    <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-lg border border-secondary/20 bg-secondary/5 p-5 sm:flex-row sm:items-center">

                                        <p className="text-sm leading-relaxed text-muted">
                                            Need specific dimensions, load capacity or material details? Contact our team for technical information.
                                        </p>

                                        <Link
                                            href={inquiryUrl}
                                            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-secondary"
                                        >
                                            Request Specifications

                                            <ArrowUpRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            )}

                            {/* ================= FEATURES ================= */}

                            {activeTab === "Features" && (
                                <div>

                                    <h3 className="font-heading text-2xl font-extrabold text-primary sm:text-3xl">
                                        Features & Benefits
                                    </h3>

                                    <span className="mb-7 mt-4 block h-[3px] w-12 bg-secondary" />

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                                        {features.map(
                                            (feature, index) => {
                                                const Icon =
                                                    defaultFeatures[
                                                        index %
                                                        defaultFeatures.length
                                                    ].icon;

                                                const title =
                                                    typeof feature ===
                                                        "string"
                                                        ? feature
                                                        : feature.title;

                                                return (
                                                    <div
                                                        key={index}
                                                        className="group flex items-start gap-4 rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:border-secondary/40 hover:bg-white hover:shadow-sm"
                                                    >
                                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">

                                                            <Icon
                                                                size={24}
                                                                strokeWidth={1.8}
                                                            />
                                                        </div>

                                                        <div>
                                                            <h4 className="font-heading text-sm font-extrabold text-primary">
                                                                {title}
                                                            </h4>

                                                            {typeof feature ===
                                                                "object" &&
                                                                feature.description && (
                                                                    <p className="mt-2 text-xs leading-relaxed text-muted">
                                                                        {
                                                                            feature.description
                                                                        }
                                                                    </p>
                                                                )}
                                                        </div>
                                                    </div>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* ================= APPLICATIONS ================= */}

                            {activeTab === "Applications" && (
                                <div className="grid items-center gap-8 lg:grid-cols-2">

                                    <div>

                                        <h3 className="font-heading text-2xl font-extrabold text-primary sm:text-3xl">
                                            Product Applications
                                        </h3>

                                        <span className="mb-6 mt-4 block h-[3px] w-12 bg-secondary" />

                                        <p className="mb-6 text-sm leading-relaxed text-muted">
                                            Explore possible applications for this display rack across retail and commercial environments.
                                        </p>

                                        <div className="grid gap-3 sm:grid-cols-2">

                                            {applications.map(
                                                (item, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4"
                                                    >
                                                        <Store
                                                            size={21}
                                                            className="shrink-0 text-secondary"
                                                        />

                                                        <span className="text-xs font-bold leading-relaxed text-primary sm:text-sm">
                                                            {item}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    <div className="relative min-h-[280px] overflow-hidden rounded-xl bg-surface">

                                        <Image
                                            src={
                                                product.applicationImage ||
                                                category?.image ||
                                                product.image
                                            }
                                            alt={`${product.name} applications`}
                                            fill
                                            sizes="(max-width: 1023px) 100vw, 50vw"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ==============================================
                RELATED PRODUCTS SECTION
            ============================================== */}
            {relatedProducts.length > 0 && (
                <section className="border-t border-border bg-surface py-8 sm:py-10 lg:py-15">

                    <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

                        {/* Section Heading */}

                        <div className="product-section-reveal mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

                            <div>
                                <div className="mb-4 flex items-center gap-3">

                                    <span className="h-[2px] w-9 bg-secondary" />

                                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary">
                                        Explore More
                                    </span>
                                </div>

                                <h2 className="font-heading text-3xl font-extrabold tracking-[-0.04em] text-primary sm:text-4xl lg:text-5xl">
                                    Related
                                    <span className="text-secondary">
                                        {" "}Products.
                                    </span>
                                </h2>

                                {/* <p className="mt-4 max-w-[600px] text-sm leading-relaxed text-muted sm:text-base">
                                    Discover more display rack solutions from this product collection.
                                </p> */}
                            </div>

                            <Link
                                href={
                                    category
                                        ? `/${category.slug}`
                                        : "/our-products"
                                }
                                className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-lg border border-primary px-6 py-3.5 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-white"
                            >
                                View All Products

                                <ArrowUpRight
                                    size={18}
                                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </Link>
                        </div>

                        {/* Related Product Grid */}

                        <div className="related-product-grid grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-6">

                            {relatedProducts.map(
                                (item, index) => (
                                    <Link
                                        key={item.slug}
                                        href={`/${item.slug}`}
                                        className="related-product-card group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-[border-color,box-shadow] duration-500 hover:border-secondary/50 hover:shadow-lg"
                                    >

                                        {/* Product Image */}

                                        <div className="relative isolate aspect-square overflow-hidden bg-[#EDEFF2]">

                                            <div className="absolute left-1/2 top-1/2 -z-10 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 transition-transform duration-700 group-hover:scale-125" />

                                            <span className="absolute left-4 top-4 z-10 rounded-md bg-white px-3 py-1.5 text-[10px] font-bold tracking-wider text-primary">
                                                {String(
                                                    index + 1
                                                ).padStart(2, "0")}
                                            </span>

                                            <div className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary transition-all duration-300 group-hover:rotate-12 group-hover:bg-secondary group-hover:text-white">

                                                <ArrowUpRight size={19} />
                                            </div>

                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                sizes="(max-width: 479px) 100vw, (max-width: 1023px) 50vw, 25vw"
                                                className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                                            />

                                            <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-secondary transition-all duration-500 group-hover:w-full" />
                                        </div>

                                        {/* Product Details */}

                                        <div className="flex flex-1 flex-col p-5 sm:p-6">

                                            <span className="mb-3 text-[10px] font-bold uppercase tracking-wider text-secondary">
                                                Display Rack Solutions
                                            </span>

                                            <h3 className="font-heading text-base font-extrabold leading-relaxed text-primary transition-colors group-hover:text-secondary">
                                                {item.name}
                                            </h3>

                                            <div className="mt-auto pt-5">

                                                <div className="flex items-center justify-between border-t border-border pt-4">

                                                    <span className="text-xs font-bold text-primary">
                                                        Explore Product
                                                    </span>

                                                    <ArrowRight
                                                        size={18}
                                                        className="text-secondary transition-transform group-hover:translate-x-1"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* ==============================================
                IMAGE ZOOM MODAL
            ============================================== */}
            {zoomOpen && (
                <ImageZoomModal
                    image={currentImage}
                    name={product.name}
                    activeImage={activeImage}
                    totalImages={gallery.length}
                    onClose={() => setZoomOpen(false)}
                    onNext={nextImage}
                    onPrevious={previousImage}
                />
            )}

            <div className="pt-5">
                <FormSection />
            </div>

            {openPopup && (
                <InquiryPopup
                    options={{ product: product.name }}
                    onClose={() => setOpenPopup(false)}
                />
            )}
        </main>
    );
}

// ================= IMAGE ZOOM MODAL =================

function ImageZoomModal({
    image,
    name,
    activeImage,
    totalImages,
    onClose,
    onNext,
    onPrevious,
}) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (!dialog) return;

        dialog.showModal();

        const previousOverflow =
            document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
            dialog.close();

            document.body.style.overflow =
                previousOverflow;
        };
    }, []);

    return (
        <dialog
            ref={dialogRef}
            data-lenis-prevent
            aria-label={`${name} enlarged image`}
            onCancel={(event) => {
                event.preventDefault();
                onClose();
            }}
            onClick={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
            className="fixed inset-0 m-auto h-[90dvh] max-h-none w-[94vw] max-w-[1100px] overflow-hidden rounded-2xl bg-white p-0 shadow-2xl backdrop:bg-[#06182B]/90 backdrop:backdrop-blur-sm"
        >
            <div className="flex h-full flex-col">

                {/* Modal Header */}

                <div className="flex shrink-0 items-center justify-between gap-4 border-b border-border px-5 py-4">

                    <div className="min-w-0">

                        <h3 className="truncate font-heading text-sm font-extrabold text-primary sm:text-lg">
                            {name}
                        </h3>

                        <p className="mt-1 text-xs text-muted">
                            Image {activeImage + 1} of {totalImages}
                        </p>
                    </div>

                    <button
                        type="button"
                        autoFocus
                        onClick={onClose}
                        aria-label="Close image preview"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-secondary"
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* Enlarged Image */}

                <div className="relative min-h-0 flex-1 bg-surface">

                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="95vw"
                        className="object-contain p-5 sm:p-10"
                    />

                    {totalImages > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={onPrevious}
                                aria-label="Previous image"
                                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-md transition-colors hover:bg-secondary hover:text-white"
                            >
                                <ChevronLeft size={25} />
                            </button>

                            <button
                                type="button"
                                onClick={onNext}
                                aria-label="Next image"
                                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-md transition-colors hover:bg-secondary hover:text-white"
                            >
                                <ChevronRight size={25} />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </dialog>
    );
}
