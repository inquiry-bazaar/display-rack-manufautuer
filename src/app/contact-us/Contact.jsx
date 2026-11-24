
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  ChevronRight,
  MapPin,
} from "lucide-react";
import CTASection from "@/components/home/CTASection";
import FormSection from "@/components/layout/FormSection";

gsap.registerPlugin(ScrollTrigger);

const MAP_URL = "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d112073.81938414769!2d76.995915!3d28.620564!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM3JzE2LjIiTiA3NsKwNTknNDQuOCJF!5e0!3m2!1sen!2sus!4v1795436313387!5m2!1sen!2sus";

export default function Contact() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) return;

      gsap.fromTo(
        ".contact-hero-content > *",
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.13,
          ease: "power3.out",
          delay: 0.15,
        }
      );

      gsap.to(".contact-hero-image", {
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: ".contact-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils.toArray(".contact-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 55, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className="overflow-hidden bg-white">
      {/* ================= HERO BANNER ================= */}
      <section className="contact-hero relative flex min-h-[390px] items-center justify-center overflow-hidden bg-primary sm:min-h-[460px]">
        <div className="contact-hero-image absolute inset-0">
          <Image
            src="/1.webp"
            alt="Premium supermarket and retail display rack installation"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-[#06182B]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06182B]/40 via-transparent to-[#06182B]/40" />

        {/* Decorative lines */}
        <div className="pointer-events-none absolute inset-0 opacity-15">
          <div className="absolute left-[15%] top-0 h-full w-px bg-white/30" />
          <div className="absolute right-[15%] top-0 h-full w-px bg-white/30" />
        </div>

        <div className="contact-hero-content relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 text-center">
          <div className="mb-7 flex items-center gap-2 text-[12px] font-medium tracking-[0.08em] text-white/95">
            <Link href="/" className="transition hover:text-secondary">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-secondary">Contact Us</span>
          </div>

          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-9 bg-secondary" />
            <span className="text-[15px] font-bold uppercase tracking-[0.3em] text-white/95">
              Let's Connect
            </span>
            <span className="h-px w-9 bg-secondary" />
          </div>

          <h1 className="font-heading text-[clamp(3.2rem,7vw,7rem)] font-semibold leading-[1.05] tracking-[-0.055em] text-white">
            Get In <span className="text-secondary">Touch.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/95 sm:text-base sm:leading-8">
            Have a project in mind? Let's create smarter, stronger, and more
            efficient retail spaces together.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 h-[5px] w-full bg-secondary" />
      </section>

      {/* ================= INTRO ================= */}
      <section className="relative bg-white py-10">
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <div className="contact-reveal grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-16">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="h-px w-9 bg-secondary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.23em] text-secondary">
                  Contact Arya Insulation
                </span>
              </div>

              <h2 className="max-w-2xl font-heading text-[clamp(2.2rem,4vw,4.4rem)] font-semibold leading-[1] tracking-[-0.045em] text-primary">
                Let's Build Something{" "}
                <span className="text-secondary">Exceptional.</span>
              </h2>
            </div>

            <p className="max-w-lg text-[15px] leading-6 text-muted lg:pb-2">
              Whether you're setting up a new supermarket, upgrading your
              retail store, or looking for custom storage racks, our team is
              here to help you find the right solution for your business.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM + INFO ================= */}
      <FormSection />

      {/* ================= GOOGLE MAP ================= */}
      <section className="bg-[#F3F5F7] border border-orange-300 pb-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
          <div className="contact-reveal mb-8 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="h-px w-9 bg-secondary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.23em] text-secondary">
                  Find Our Location
                </span>
              </div>

              <h2 className="font-heading text-[clamp(2.3rem,4vw,4.5rem)] font-bold leading-[1.12] tracking-[-0.045em] text-primary">
                Come <span className="text-secondary">Visit Us.</span>
              </h2>

              {/* <p className="mt-4 max-w-lg text-sm leading-7 text-muted">
                Explore our location on the map and get directions to connect
                with our team.
              </p> */}
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=28.620564%2C76.995915"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-primary/15 bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-all hover:border-secondary hover:bg-secondary hover:text-white"
            >
              Get Directions
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div className="contact-reveal overflow-hidden rounded-[20px] border border-[#E2E8F0] bg-white p-2 shadow-[0_20px_70px_-45px_rgba(16,42,67,0.35)] sm:rounded-[28px] sm:p-3">
            <div className="relative h-[350px] overflow-hidden rounded-[14px] bg-[#E2E8F0] sm:h-[450px] sm:rounded-[20px] lg:h-[530px]">
              <iframe
                src={MAP_URL}
                title="Arya Insulation Location - Google Maps"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>

          <div className="contact-reveal mt-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-secondary">
                <MapPin size={19} />
              </div>

              <div>
                <p className="text-sm font-semibold text-primary">
                  Arya Insulation
                </p>
                <p className="text-xs text-muted">Delhi NCR, India</p>
              </div>
            </div>

            <span className="text-xs text-muted">
              Map powered by Google Maps
            </span>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <CTASection />
    </main>
  );
}
