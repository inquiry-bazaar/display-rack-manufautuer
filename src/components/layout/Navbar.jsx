
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

import {
  Menu,
  X,
  Phone,
  Mail,
  Clock3,
  MapPin,
  ArrowUpRight,
  MessageCircle,
  ChevronRight,
  Ruler,
  Warehouse, ChevronDown
} from "lucide-react";

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import ProductMegaMenu, {
  products,
} from "./ProductMegaMenu";
import InquiryPopup from "./InquiryPopup";

const PHONE = "+918587901795"; // Add actual phone number
const EMAIL = "aryaindustry36@gmail.com"; // Add actual email
const WHATSAPP = "https://wa.me/918587901795"; // Add number with country code, e.g. 919876543210

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Our Products", href: "/our-products" },
  { name: "Our Articles", href: "/our-articles" },
  { name: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const timelineRef = useRef(null);
  const [productsOpen, setProductsOpen] = useState(false);
  const closeTimerRef = useRef(null);
  const [openPopup, setOpenPopup] = useState(false);

  if (pathname.startsWith("/admin")) {
    return null; // Don't render the navbar on admin or dashboard pages
  }

  const openProducts = () => {
    clearTimeout(closeTimerRef.current);
    setProductsOpen(true);
  };

  const closeProducts = () => {
    clearTimeout(closeTimerRef.current);

    closeTimerRef.current = setTimeout(() => {
      setProductsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => clearTimeout(closeTimerRef.current);
  }, []);

  useEffect(() => {
    setProductsOpen(false);
  }, [pathname]);

  const whatsappUrl = WHATSAPP ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    "Hello Arya Insulation, I am interested in display racks."
  )}` : "/contact-us";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Initial navbar animation
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".nav-top-content", {
        y: -15,
        opacity: 0,
        duration: 0.65,
      })
        .from(
          ".nav-logo",
          {
            x: -25,
            opacity: 0,
            duration: 0.75,
          },
          "-=0.35"
        )
        .from(
          ".nav-link",
          {
            y: -12,
            opacity: 0,
            stagger: 0.07,
            duration: 0.55,
          },
          "-=0.45"
        )
        .from(
          ".nav-action",
          {
            x: 20,
            opacity: 0,
            stagger: 0.12,
            duration: 0.6,
          },
          "-=0.4"
        );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  // Mobile menu animation
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    timelineRef.current?.kill();

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      gsap.set(menu, {
        height: menuOpen ? "auto" : 0,
        autoAlpha: menuOpen ? 1 : 0,
      });
      return;
    }

    const tl = gsap.timeline();

    timelineRef.current = tl;

    if (menuOpen) {
      tl.set(menu, {
        visibility: "visible",
      })
        .to(menu, {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
        })
        .fromTo(
          menu.querySelectorAll(".mobile-nav-item"),
          {
            y: 15,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.055,
            duration: 0.35,
            ease: "power2.out",
          },
          "-=0.2"
        );
    } else {
      tl.to(menu, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      }).set(menu, {
        visibility: "hidden",
      });
    }

    return () => tl.kill();
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const isActive = (href) => {
    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${scrolled ? "shadow-lg shadow-black/10" : ""
        }`}
    >
      {/* ================= TOP BAR ================= */}
      <div className="relative overflow-hidden bg-primary text-white">
        <div className="nav-top-content mx-auto flex min-h-9 max-w-[1500px] items-center justify-between gap-5 px-5 py-2 sm:px-8 lg:px-12">

          {/* Left contact information */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-medium text-white/75 sm:text-xs">

            {/* Phone */}
            <a
              href={PHONE ? `tel:${PHONE}` : "/contact-us"}
              className="group flex items-center gap-2 transition-colors hover:text-secondary"
            >
              <FaPhoneAlt
                size={11}
                className="text-secondary transition-transform group-hover:rotate-12"
              />
              <span>
                Call / WhatsApp: {PHONE || "+91 [number]"}
              </span>
            </a>

            {/* Email */}
            <a
              href={EMAIL ? `mailto:${EMAIL}` : "/contact-us"}
              className="group hidden items-center gap-2 transition-colors hover:text-secondary sm:flex"
            >
              <FaEnvelope
                size={12}
                className="text-secondary"
              />
              <span>{EMAIL || "[email]"}</span>
            </a>

            {/* Working hours */}
            <div className="hidden items-center gap-2 md:flex">
              <Clock3 size={13} className="text-secondary" />
              <span>Mon–Sat, 9:30 am – 7 pm</span>
            </div>
          </div>

          {/* Right location information */}
          <div className="hidden items-center gap-2 text-xs font-medium text-white/75 lg:flex">
            <MapPin
              size={14}
              className="shrink-0 text-secondary"
            />
            <span className="hover:underline">
              Free layout & installation across Delhi NCR
            </span>
          </div>
        </div>

        {/* Orange bottom highlight */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-white/10" />
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="relative border-b border-border bg-white">
        <div className="mx-auto flex h-[76px] max-w-[1500px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">

          {/* Logo */}
          <Link
            href="/"
            className="nav-logo group flex shrink-0 items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
            {/* Logo icon */}
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-primary text-secondary shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg">
              <Warehouse size={23} strokeWidth={1.9} />

              <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-secondary transition-all duration-500 group-hover:w-full" />
            </div>

            {/* Logo text */}
            <div className="flex flex-col">
              <span className="font-heading text-[19px] font-extrabold leading-tight tracking-[-0.045em] text-primary sm:text-[21px]">
                Arya Insulation
              </span>

              <span className="mt-0.5 text-[10px] font-medium tracking-[0.01em] text-muted sm:text-[11px]">
                Supermarket & Display Racks
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-4 lg:flex xl:gap-7">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const isProduct = link.name === "Our Products";

              if (isProduct) {
                return (
                  <div
                    key={link.name}
                    className="nav-link relative flex h-[76px] items-center"
                    onMouseEnter={openProducts}
                    onMouseLeave={closeProducts}
                  >
                    <button
                      type="button"
                      onClick={() => setProductsOpen((prev) => !prev)}
                      onFocus={openProducts}
                      aria-expanded={productsOpen}
                      aria-controls="products-mega-menu"
                      className={`group flex items-center gap-1.5 text-[13px] font-semibold transition-colors xl:text-sm ${productsOpen || active
                        ? "text-secondary"
                        : "text-primary hover:text-secondary"
                        }`}
                    >
                      Our Products

                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-300 ${productsOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    <span
                      className={`absolute bottom-4 left-0 h-[2px] bg-secondary transition-all duration-300 ${productsOpen ? "w-full" : "w-0"
                        }`}
                    />
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link group relative py-3 text-[13px] font-semibold transition-colors xl:text-sm ${active
                    ? "text-secondary"
                    : "text-primary hover:text-secondary"
                    }`}
                >
                  {link.name}

                  <span
                    className={`absolute bottom-1 left-0 h-[2px] bg-secondary transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop actions */}
          <div className="hidden shrink-0 items-center gap-3 xl:flex">

            {/* WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className=" group inline-flex h-[44px] min-w-[125px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-primary/30 bg-white px-4 text-[13px] font-bold text-primary transition-all duration-300 hover:border-secondary hover:bg-secondary/5 hover:shadow-md"
            >
              <FaWhatsapp
                size={18}
                className="shrink-0 text-[#25D366] transition-transform duration-300 group-hover:scale-110"
              />

              <span className="whitespace-nowrap">
                WhatsApp
              </span>
            </a>

            {/* Free Layout Button */}
            <button
              onClick={() => setOpenPopup(true)}
              className=" group inline-flex h-[44px] min-w-[165px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-secondary px-5 text-[13px] font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:brightness-95 hover:shadow-lg"
            >
              <span className="whitespace-nowrap">
                Get Free Layout
              </span>

              <ArrowUpRight
                size={17}
                className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>

          {/* Mobile action buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={whatsappUrl}
              target={WHATSAPP ? "_blank" : undefined}
              rel={WHATSAPP ? "noopener noreferrer" : undefined}
              aria-label="Contact on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-[#25D366] transition-colors hover:bg-surface"
            >
              <FaWhatsapp size={21} />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white transition-colors hover:bg-secondary"
            >
              {menuOpen ? (
                <X size={23} />
              ) : (
                <Menu size={23} />
              )}
            </button>
          </div>
        </div>

        <div id="products-mega-menu">
          <ProductMegaMenu
            open={productsOpen}
            onMouseEnter={openProducts}
            onMouseLeave={closeProducts}
            onNavigate={() => {
              clearTimeout(closeTimerRef.current);
              setProductsOpen(false);
            }}
          />
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          id="mobile-navigation"
          ref={menuRef}
          className="invisible absolute left-0 top-full w-full overflow-hidden border-t border-border bg-white opacity-0 shadow-xl lg:hidden"
          style={{ height: 0 }}
          inert={!menuOpen}
        >
          <div className="max-h-[calc(100dvh-8rem)] overflow-y-auto px-5 py-5 sm:px-8">

            {/* Mobile navigation links */}
            <nav className="flex flex-col">
              {navLinks.map((link, index) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`mobile-nav-item group flex items-center justify-between border-b border-border/70 py-4 text-[15px] font-semibold transition-colors ${active
                      ? "text-secondary"
                      : "text-primary hover:text-secondary"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-muted/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {link.name}
                    </div>

                    <ChevronRight
                      size={17}
                      className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-secondary"
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Mobile CTA */}
            <div className="mobile-nav-item mt-6 grid grid-cols-2 gap-3">
              <a
                href={whatsappUrl}
                target={WHATSAPP ? "_blank" : undefined}
                rel={WHATSAPP ? "noopener noreferrer" : undefined}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg border border-primary/30 px-3 py-3.5 text-sm font-bold text-primary"
              >
                <FaWhatsapp
                  size={18}
                  className="text-[#25D366]"
                />
                WhatsApp
              </a>

              <Link
                href="/contact-us"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-secondary px-3 py-3.5 text-sm font-bold text-white"
              >
                Free Layout
                <ArrowUpRight size={16} />
              </Link>
            </div>

            {/* Mobile contact information */}
            <div className="mobile-nav-item mt-6 rounded-xl bg-surface p-4">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                Get in Touch
              </p>

              <div className="space-y-3 text-xs text-muted">
                <div className="flex items-center gap-3">
                  <Phone size={15} className="text-secondary" />
                  <span>{PHONE || "+91 [number]"}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={15} className="text-secondary" />
                  <span>{EMAIL || "[email]"}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock3 size={15} className="text-secondary" />
                  <span>Mon–Sat, 9:30 am – 7 pm</span>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={15}
                    className="shrink-0 text-secondary"
                  />
                  <span>
                    Free layout & installation across Delhi NCR
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openPopup && (
        <InquiryPopup
          onClose={() => setOpenPopup(false)}
        />
      )}
    </header>
  );
}
