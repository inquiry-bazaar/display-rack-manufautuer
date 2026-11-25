
"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowUpRight,
    ArrowRight,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";

const footerLinks = [
    {
        title: "Explore",
        links: [
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about-us" },
            { label: "Our Products", href: "/our-products" },
            { label: "Our Projects", href: "/#projects" },
            { label: "Industries", href: "/#industries" },
            { label: "Contact Us", href: "/contact-us" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Our Articles", href: "/our-articles" },
            { label: "FAQs", href: "/#faq" },
            { label: "Why Choose Us", href: "/#why-choose-us" },
            { label: "How We Work", href: "/#how-we-work" },
            { label: "Testimonials", href: "/#testimonials" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "Our Story", href: "/about-us" },
            { label: "Our Projects", href: "/#projects" },
            { label: "Rack Solutions", href: "/our-products" },
            { label: "Get a Quote", href: "/contact-us" },
            { label: "Contact", href: "/contact-us" },
        ],
    },
    {
        title: "Quick Links",
        links: [
            { label: "Supermarket Racks", href: "/areas" },
            { label: "Gondola Shelving", href: "/areas" },
            { label: "Retail Display Racks", href: "/areas" },
            { label: "Storage Racks", href: "/areas" },
            { label: "Custom Solutions", href: "/contact-us" },
        ],
    },
];

const socialLinks = [
    {
        name: "Instagram",
        href: "https://www.instagram.com/",
        icon: FaInstagram,
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/",
        icon: FaFacebook,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/",
        icon: FaLinkedin,
    },
];

export default function Footer() {
    const pathname = usePathname();
    const [email, setEmail] = useState("");
    if (pathname.startsWith("/admin")) {
        return null; // Don't render the navbar on admin or dashboard pages
    }
    const handleNewsletter = (e) => {
        e.preventDefault();

        if (!email.trim()) return;

        // Replace this with your newsletter API integration.
        window.location.href = `/contact-us?email=${encodeURIComponent(
            email
        )}`;
    };

    return (
        <footer className="relative bg-white px-4 py-4">
            {/* Main rounded footer */}
            <div className="relative mx-auto max-w-[1800px] overflow-hidden rounded-[24px] bg-[#F7F8F2] px-5 pb-8 pt-12 sm:rounded-[32px] sm:px-8 sm:pt-14 lg:rounded-[36px] lg:px-12 lg:pt-10 xl:px-16">
                {/* Background accents */}
                <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-[120px]" />

                <div className="pointer-events-none absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />

                {/* Top navigation */}
                <div className="relative grid gap-12 lg:grid-cols-[1.4fr_2.6fr] lg:gap-16 xl:gap-24">
                    {/* LEFT: Newsletter */}
                    <div className="max-w-[380px]">
                        <p className="max-w-[300px] font-heading text-[19px] font-semibold leading-[1.45] tracking-[-0.035em] text-primary sm:text-[22px]">
                            Smarter racks. Better spaces.
                            <br />
                            Built for your business.
                        </p>

                        <p className="mt-4 max-w-[330px] text-sm leading-[1.8] text-muted">
                            Premium display rack solutions designed to make
                            every retail space more organized, functional,
                            and beautiful.
                        </p>

                        {/* Newsletter */}
                        <form
                            onSubmit={handleNewsletter}
                            className="mt-7 flex h-[56px] max-w-[340px] items-center rounded-[12px] border border-primary/20 bg-white p-1.5 transition-colors focus-within:border-secondary"
                        >
                            <label htmlFor="footer-email" className="sr-only">
                                Your email address
                            </label>

                            <input
                                id="footer-email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email address"
                                className="h-full min-w-0 flex-1 bg-transparent px-3 text-sm text-primary outline-none placeholder:text-muted/70"
                            />

                            <button
                                type="submit"
                                aria-label="Submit email"
                                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[9px] bg-secondary text-white transition-all duration-300 hover:bg-primary"
                            >
                                <ArrowUpRight size={19} />
                            </button>
                        </form>

                        <p className="mt-3 text-xs text-muted">
                            Have a project in mind? Let's connect.
                        </p>
                    </div>

                    {/* RIGHT: Four link columns */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-8">
                        {footerLinks.map((column) => (
                            <div key={column.title}>
                                <h3 className="mb-6 font-heading text-[15px] font-bold tracking-[-0.02em] text-primary">
                                    {column.title}
                                </h3>

                                <ul className="space-y-3.5">
                                    {column.links.map((link) => (
                                        <li key={`${column.title}-${link.label}`}>
                                            <Link
                                                href={link.href}
                                                className="group inline-flex items-center gap-1 text-[13px] leading-[1.5] text-muted transition-colors duration-300 hover:text-secondary"
                                            >
                                                <span>{link.label}</span>

                                                <ArrowUpRight
                                                    size={12}
                                                    className="translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                                                />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="relative mt-14 border-t border-primary/15 pt-6 sm:mt-16 lg:mt-10">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        {/* Social links */}
                        <div className="flex flex-wrap items-center gap-5 sm:gap-7">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 text-xs font-medium text-muted transition-colors hover:text-secondary"
                                >
                                    <social.icon
                                        size={15}
                                        className="transition-transform group-hover:-translate-y-0.5"
                                    />

                                    {social.name}
                                </a>
                            ))}
                        </div>

                        {/* Copyright */}
                        <p className="text-xs leading-relaxed text-muted">
                            © {new Date().getFullYear()}{" "}
                            <span className="font-semibold text-primary">
                                Arya Insulation
                            </span>
                            . All rights reserved.
                        </p>
                    </div>
                </div>

                {/* Huge brand wordmark */}
                <div className="relative mt-9 border-t border-primary/10 pt-7 sm:mt-5 sm:pt-5">
                    <Link
                        href="/"
                        aria-label="Arya Insulation - Back to homepage"
                        className="group block w-full"
                    >
                        <div className="flex items-center justify-center gap-[1.5vw]">
                            {/* Logo mark */}
                            <div className="relative flex aspect-square w-[12%] shrink-0 items-center justify-center overflow-hidden rounded-[12px] bg-secondary sm:rounded-[20px] lg:rounded-[28px]">
                                {/* Abstract rack-inspired symbol */}
                                <svg
                                    viewBox="0 0 100 100"
                                    fill="none"
                                    className="h-[65%] w-[65%] text-white"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M18 20H82V32H18V20Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M18 44H82V56H18V44Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M18 68H82V80H18V68Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M18 17V84M82 17V84"
                                        stroke="currentColor"
                                        strokeWidth="7"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>

                            {/* Large text */}
                            <div className="min-w-0 flex-1">
                                <span className="block whitespace-nowrap font-heading text-[clamp(1.55rem,6.4vw,7.7rem)] font-extrabold leading-[1] tracking-[0.2em] text-primary transition-colors duration-500 group-hover:text-secondary">
                                    ARYA INSULATION
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
