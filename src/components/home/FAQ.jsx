
"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowUpRight,
    Plus,
    Minus,
    MessageCircle,
    ArrowRight,
} from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const faqs = [
    {
        question: "What types of display racks do you manufacture?",
        answer:
            "We offer a wide range of display rack solutions, including supermarket gondola racks, wall-mounted shelving, grocery store racks, retail display racks, departmental store shelving, and storage racks designed for different commercial requirements.",
    },
    {
        question: "Can you customize racks according to my store layout?",
        answer:
            "Yes. We can provide customized display rack solutions based on your available floor space, product categories, preferred dimensions, shelving configurations, and store design requirements.",
    },
    {
        question: "Are your supermarket display racks durable?",
        answer:
            "Our display racks are designed with strong metal frameworks and practical shelving configurations for everyday retail use. The appropriate rack design and load capacity depend on the products you plan to display.",
    },
    {
        question: "Do you provide rack installation services?",
        answer:
            "Installation requirements can be discussed during your project consultation. Our team can help you determine the appropriate rack configuration and available installation arrangements for your location.",
    },
    {
        question: "Can I order racks for a small retail shop?",
        answer:
            "Absolutely. Whether you're setting up a compact grocery shop, a convenience store, or a large supermarket, we can discuss rack configurations that suit your store size and merchandising needs.",
    },
    {
        question: "How do I choose the right racks for my store?",
        answer:
            "The right shelving depends on your store dimensions, product weight, available floor space, customer movement, and display preferences. Share your requirements with our team to explore suitable rack options.",
    },
    {
        question: "How can I get a quotation for display racks?",
        answer:
            "You can contact us with your store dimensions, preferred rack types, approximate quantities, and delivery location. Our team can review your requirements and discuss the next steps for a quotation.",
    },
];

function FAQItem({ item, index, isOpen, onToggle }) {
    const contentRef = useRef(null);

    return (
        <div
            data-faq-item
            className={`group border-b transition-colors duration-300 ${isOpen
                ? "border-secondary/50"
                : "border-[#E2E8F0]"
                }`}
        >
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                className="flex w-full items-center gap-4 py-6 text-left sm:gap-6 sm:py-7"
            >
                {/* Question number */}
                <span
                    className={`shrink-0 font-heading text-xs font-bold transition-colors duration-300 sm:text-sm ${isOpen ? "text-secondary" : "text-primary/35"
                        }`}
                >
                    {String(index + 1).padStart(2, "0")}
                </span>

                {/* Question */}
                <h3
                    className={`flex-1 font-heading text-[17px] font-bold leading-[1.45] tracking-[-0.025em] transition-colors duration-300 sm:text-[20px] lg:text-[22px] ${isOpen
                        ? "text-secondary"
                        : "text-primary group-hover:text-secondary"
                        }`}
                >
                    {item.question}
                </h3>

                {/* Plus / Minus icon */}
                <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-11 sm:w-11 ${isOpen
                        ? "rotate-180 border-secondary bg-secondary text-white"
                        : "border-primary/15 bg-white text-primary group-hover:border-secondary group-hover:bg-secondary group-hover:text-white"
                        }`}
                >
                    {isOpen ? (
                        <Minus size={19} strokeWidth={1.8} />
                    ) : (
                        <Plus size={19} strokeWidth={1.8} />
                    )}
                </span>
            </button>

            {/* Animated answer */}
            <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                ref={contentRef}
                className="grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                }}
            >
                <div className="min-h-0 overflow-hidden">
                    <p className="max-w-[650px] pb-7 pl-8 text-sm leading-[1.9] text-muted sm:pl-11 sm:text-base">
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function FAQ() {
    const sectionRef = useRef(null);
    const [openIndex, setOpenIndex] = useState(0);

    useGSAP(
        () => {
            const root = sectionRef.current;
            if (!root) return;

            const reducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            if (reducedMotion) return;

            // Heading reveal
            gsap.from("[data-faq-heading]", {
                y: 55,
                autoAlpha: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: root,
                    start: "top 80%",
                    once: true,
                },
            });

            // Accordion items reveal
            gsap.from("[data-faq-item]", {
                y: 35,
                autoAlpha: 0,
                duration: 0.75,
                stagger: 0.09,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "[data-faq-list]",
                    start: "top 85%",
                    once: true,
                },
            });

            // Bottom CTA reveal
            gsap.from("[data-faq-cta]", {
                y: 35,
                autoAlpha: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: "[data-faq-cta]",
                    start: "top 90%",
                    once: true,
                },
            });
        },
        { scope: sectionRef }
    );

    return (
        <section
            ref={sectionRef}
            id="faq"
            className="relative overflow-hiddn bg-white py-10 sm:py-12 lg:py-15"
        >
            {/* Subtle background accents */}
            {/* <div className="pointer-events-none absolute -left-40 top-1/3 h-[450px] w-[450px] rounded-full bg-secondary/5 blur-[120px]" /> */}

            {/* <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" /> */}

            <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
                <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
                    {/* LEFT SIDE */}
                    <div data-faq-heading className="lg:sticky lg:top-32">
                        {/* Eyebrow */}
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-[2px] w-10 bg-secondary" />

                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                                Frequently Asked Questions
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="max-w-[600px] font-heading text-[clamp(2.7rem,5vw,5.5rem)] font-extrabold leading-[1.07] tracking-[-0.055em] text-primary">
                            Questions?
                            <br />
                            <span className="text-secondary">
                                We've Got
                            </span>
                            <br />
                            Answers.
                        </h2>

                        <p className="mt-7 max-w-[450px] text-base leading-6 text-muted">
                            Find answers to common questions about our
                            supermarket display racks, custom shelving
                            solutions, manufacturing, and project requirements.
                        </p>

                        {/* Contact CTA */}
                        <div className="mt-5">
                            <Link
                                href="/contact-us"
                                className="group inline-flex items-center gap-4 rounded-full bg-primary py-3 pl-6 pr-3 text-sm font-bold text-white transition-all duration-300 hover:bg-secondary"
                            >
                                Ask Us Anything

                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary transition-transform duration-300 group-hover:rotate-45">
                                    <ArrowUpRight size={19} />
                                </span>
                            </Link>
                        </div>

                        {/* Decorative info */}
                        <div className="mt-5 hidden items-center gap-4 border-t border-[#E2E8F0] pt-5 sm:flex">
                            <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#F3F5F7] text-secondary">
                                <MessageCircle size={22} strokeWidth={1.8} />
                            </div>

                            <div>
                                <p className="font-heading text-sm font-bold text-primary">
                                    Still have a question?
                                </p>
                                <p className="mt-1 text-xs text-muted">
                                    Our team is here to help you find the right solution.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Accordion */}
                    <div data-faq-list className="border-t border-[#E2E8F0]">
                        {faqs.map((item, index) => (
                            <FAQItem
                                key={index}
                                item={item}
                                index={index}
                                isOpen={openIndex === index}
                                onToggle={() =>
                                    setOpenIndex((prev) =>
                                        prev === index ? -1 : index
                                    )
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
