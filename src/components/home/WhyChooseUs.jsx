
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShieldCheck,
  Factory,
  Maximize2,
  ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const benefits = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Built for Lasting Strength",
    description:
      "Our display racks are manufactured with durable materials and strong frameworks to support everyday retail operations.",
  },
  {
    number: "02",
    icon: Factory,
    title: "Custom Rack Solutions",
    description:
      "From shelf sizes to configurations, we manufacture display racks designed around your store layout and business requirements.",
  },
  {
    number: "03",
    icon: Maximize2,
    title: "Smarter Space Utilization",
    description:
      "Organize merchandise beautifully and make better use of available retail space with practical shelving solutions.",
  },
];

const photos = [
  {
    src: "/why3.webp",
    alt: "Supermarket display racks",
  },
  {
    src: "/why1.webp",
    alt: "Modern retail shelving installation",
  },
  {
    src: "/why2.webp",
    alt: "Durable storage and display racks",
  },
];

function ImageCard({ image, className = "" }) {
  return (
    <div
      data-why-image
      className={`group relative h-[320px] overflow-hidden rounded-[20px] bg-[#E8EEF3] sm:h-[370px] lg:h-[300px] ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="why-photo object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Six-column image reveal */}
      <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            data-why-strip
            className="h-full bg-white"
          />
        ))}
      </div>
    </div>
  );
}

function FeatureCard({ benefit, className = "" }) {
  const Icon = benefit.icon;

  return (
    <div
      data-why-feature
      className={`group relative flex h-[320px] flex-col justify-between overflow-hidden rounded-[20px] bg-[#F3F5F7] p-7 sm:h-[370px] sm:p-8 lg:h-[300px] lg:p-9 ${className}`}
    >
      <div className="flex items-start justify-between">
        <div
          data-feature-icon
          className="flex h-14 w-14 items-center justify-center rounded-[14px] bg-secondary/10 text-secondary"
        >
          <Icon size={27} strokeWidth={1.8} />
        </div>

        <span className="text-sm font-semibold text-primary/30">
          {benefit.number}
        </span>
      </div>

      <div className="relative z-10">
        <h3
          data-feature-title
          className="max-w-[330px] font-heading text-[clamp(1.6rem,2.2vw,2.15rem)] font-bold leading-[1.13] tracking-[-0.045em] text-primary"
        >
          {benefit.title}
        </h3>

        <p
          data-feature-description
          className="mt-5 max-w-[350px] text-sm leading-[1.85] text-muted"
        >
          {benefit.description}
        </p>
      </div>

      {/* Hover accent */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-secondary transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const root = sectionRef.current;
      if (!root) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) return;

      // Heading entrance
      gsap.from("[data-why-heading]", {
        y: 45,
        autoAlpha: 0,
        duration: 0.95,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root,
          start: "top 82%",
          once: true,
        },
      });


      // Pin the Why Choose Us section while the middle column moves
      // Pin the grid 20px from the top
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const grid = root.querySelector("[data-why-grid]");
        const middle = root.querySelector("[data-why-middle]");

        if (!grid || !middle) return;

        const NAVBAR_HEIGHT = 100; // Change to your actual sticky navbar height
        const TOP_GAP = 20;

        gsap.fromTo(
          middle,
          { y: 125 },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: grid,

              // Pin below navbar + 20px
              start: () => `top top+=${NAVBAR_HEIGHT + TOP_GAP}`,

              end: "+=450",

              pin: grid,
              pinSpacing: true,
              scrub: 1,

              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      // Reveal photographs using vertical strips
      gsap.utils.toArray("[data-why-image]").forEach((image) => {
        const strips = image.querySelectorAll("[data-why-strip]");
        const photo = image.querySelector(".why-photo");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: image,
            start: "top 87%",
            once: true,
          },
        });

        tl.to(strips, {
          scaleY: 0,
          transformOrigin: "bottom center",
          duration: 0.9,
          stagger: 0.085,
          ease: "power3.inOut",
        }).from(
          photo,
          {
            scale: 1.13,
            duration: 1.35,
            ease: "power2.out",
          },
          0
        );
      });

      // Animate each feature card's content
      gsap.utils.toArray("[data-why-feature]").forEach((card) => {
        const icon = card.querySelector("[data-feature-icon]");
        const title = card.querySelector("[data-feature-title]");
        const description = card.querySelector(
          "[data-feature-description]"
        );

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
        });

        tl.from(card, {
          autoAlpha: 0,
          y: 45,
          duration: 0.8,
          ease: "power3.out",
        })
          .from(
            icon,
            {
              scale: 0.55,
              rotate: -20,
              autoAlpha: 0,
              duration: 0.65,
              ease: "back.out(1.8)",
            },
            "-=0.45"
          )
          .from(
            [title, description],
            {
              y: 25,
              autoAlpha: 0,
              stagger: 0.12,
              duration: 0.65,
              ease: "power3.out",
            },
            "-=0.35"
          );
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="why-choose-us"
      className="relative bg-white py-10 sm:py-12 lg:py-15 border border-gray-200"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mb-10 grid items-end gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
          <div data-why-heading>
            <div className="mb-2 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-secondary" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                Why Choose Arya Insulation
              </span>
            </div>

            <h2 className="max-w-[850px] font-heading text-[clamp(2.6rem,5vw,5.5rem)] font-extrabold leading-[1.07] tracking-[-0.055em] text-primary">
              The Right Racks.
              <br />
              <span className="text-secondary">
                The Right Choice.
              </span>
            </h2>
          </div>

          <div data-why-heading className="lg:pb-2">
            <p className="max-w-[440px] text-base leading-6 text-muted lg:ml-auto lg:text-lg">
              We create reliable display rack solutions that
              combine strength, functionality, and modern
              design to help businesses build better retail
              spaces.
            </p>
          </div>
        </div>

        {/* Staggered three-column grid */}
        <div data-why-grid
          className="relative grid grid-cols-1 items-start gap-5 bg-white sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-5 lg:gap-6">
            <ImageCard image={photos[0]} />
            <FeatureCard benefit={benefits[1]} />
          </div>

          {/* MIDDLE COLUMN */}
          <div
            data-why-middle
            className="relative z-10 flex flex-col gap-5 will-change-transform lg:gap-6"
          >
            <FeatureCard benefit={benefits[0]} />
            <ImageCard image={photos[2]} />
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1 lg:gap-6">
            <ImageCard image={photos[1]} />
            <FeatureCard benefit={benefits[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}
