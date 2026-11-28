
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
    question: "What is the price of supermarket racks in Noida?",
    answer:
      "Our Society Kirana Starter package costs ₹[X] fitted, and a Mini Supermarket package ₹[X]. Single wall racks start at ₹[X].",
  },
  {
    question: "Do you deliver to Greater Noida and Noida Extension?",
    answer:
      "Yes. We deliver and fit across Noida, Greater Noida, Greater Noida West and the Expressway sectors [at no extra charge].",
  },
  {
    question: "My shop isn't handed over yet. Can I order now?",
    answer:
      "Yes. Order to lock the price and we'll hold the finished racks for up to [X] days, then fit them once you get possession.",
  },
  {
    question: "Can I change what's in a package?",
    answer:
      "Yes. Add or remove racks, change sizes or colours, and we'll re-price it before you approve.",
  },
  {
    question: "Do you make racks for mobile accessory shops?",
    answer:
      "Yes. Our Mobile Shop Pack uses MS pegboard and slotted wall panels with hooks, plus counter racks for small items.",
  },
  {
    question: "How long before opening should I order racks?",
    answer:
      "Ideally about 30 days ahead, before electrical work starts. We can do faster fits when needed: [X] days from approval.",
  },
  {
    question: "What is your contact number in Noida?",
    answer:
      "Call or WhatsApp +91 [number], [Mon–Sat, 9:30 am – 7 pm].",
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

export default function NodiaFAQ() {
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
