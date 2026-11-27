
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Weight,
  Layers3,
  Truck,
  Puzzle,
  Check,
  ShieldCheck,
  Store,
} from "lucide-react";

const problems = [
  {
    icon: Weight,
    problem: "Shelves bend under oil tins and atta bags.",
    solution:
      "Shelves rated 60–80 kg, or 150 kg heavy duty, with the sheet thickness written on your quote.",
  },
  {
    icon: Layers3,
    problem: "Paint peels and rust shows after one monsoon.",
    solution:
      "7-tank pre-treatment before a 60–80 micron powder coat, backed by a 15-year warranty.",
  },
  {
    icon: Truck,
    problem: "Delivery slips and the opening gets delayed.",
    solution:
      "Our own factory and fitters, and the installation date written on your order.",
  },
  {
    icon: Puzzle,
    problem: "Extra shelves don't match the old racks.",
    solution:
      "We keep the same profiles for years, so new shelves and racks fit what you already have.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  const animationProps = reduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: {
          once: true,
          amount: 0.15,
        },
      };

  return (
    <section className="relative overflow-hidden bg-[#F7F8FA] py-6 sm:py-12">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#F58220]/[0.06] blur-[100px]" />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* Section Heading */}
 

        {/* Main Layout */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 xl:gap-16">

          {/* LEFT CONTENT */}
          <div className="min-w-0">

            {/* Eyebrow */}
            <motion.div
              {...animationProps}
              variants={fadeUp}
            >
              <span className="inline-flex border-l-[3px] border-[#F58220] bg-[#FFF1E5] px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-[#102A43]">
                Why Store Owners Switch To Us
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              {...animationProps}
              variants={fadeUp}
              className="mt-5 max-w-[750px] text-[32px] font-extrabold leading-[1.15] tracking-tight text-[#102A43] sm:text-[40px] lg:text-[43px] xl:text-[48px]"
            >
              Tired of Racks That{" "}
              <span className="text-[#F58220]">
                Sag, Rust or Arrive Late?
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              {...animationProps}
              variants={fadeUp}
              className="mt-4 max-w-[680px] text-[14px] leading-7 text-[#667487] sm:text-[15px]"
            >
              These are the four complaints we hear most from
              Delhi shop owners about their old racks, and what
              we do differently.
            </motion.p>

            {/* Problem / Solution Cards */}
            <motion.div
              variants={containerVariants}
              {...animationProps}
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {problems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={
                      reduceMotion
                        ? {}
                        : {
                            y: -5,
                            transition: { duration: 0.25 },
                          }
                    }
                    className="group overflow-hidden rounded-xl border border-[#E2E7ED] bg-white p-3.5 shadow-[0_3px_12px_rgba(15,27,45,0.035)] transition-all duration-300 hover:border-[#F58220]/50 hover:shadow-[0_12px_30px_rgba(15,27,45,0.08)] sm:p-4"
                  >

                    {/* Problem */}
                    <div className="flex min-h-[104px] items-center gap-4">

                      {/* Icon */}
                      <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-xl bg-[#FFF3E8] text-[#102A43] transition-colors duration-300 group-hover:bg-[#F58220] group-hover:text-white sm:h-[84px] sm:w-[84px]">
                        <Icon
                          size={34}
                          strokeWidth={1.8}
                        />
                      </div>

                      {/* Problem Text */}
                      <div className="min-w-0">
                        <span className="text-[11px] font-extrabold uppercase tracking-wide text-[#F58220]">
                          The Problem
                        </span>

                        <h3 className="mt-1 text-[15px] font-bold leading-[1.4] text-[#102A43] sm:text-[16px]">
                          {item.problem}
                        </h3>
                      </div>
                    </div>

                    {/* Solution */}
                    <div className="mt-3 flex items-start gap-3 rounded-lg bg-[#FFF8F1] px-3 py-3.5 sm:px-3.5">

                      <div className="flex shrink-0 items-center gap-2 border-r border-[#F58220]/40 pr-3 sm:pr-4">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F58220] text-white">
                          <Check size={17} strokeWidth={3} />
                        </span>
                      </div>

                      <div className="min-w-0">
                        <span className="text-[11px] font-extrabold uppercase tracking-wide text-[#F58220]">
                          Our Fix
                        </span>

                        <p className="mt-1 text-[12.5px] leading-[1.65] text-[#344256] sm:text-[13px]">
                          {item.solution}
                        </p>
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </motion.div>

          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: 45 }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[600px] lg:ml-auto"
          >

            {/* Orange Decorative Circle */}
            <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full bg-[#F58220]" />

            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#E7ECF0] sm:h-[700px]">

              <Image
                src="/why3.webp"
                alt="Supermarket racks installed in a modern retail store"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Image Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B2D]/40 via-transparent to-transparent" />

              {/* Image Badge */}
              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 20 }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                }}
                className="absolute bottom-5 left-4 right-4 flex items-center gap-3 rounded-xl border border-white/70 bg-white/95 p-3 shadow-[0_12px_35px_rgba(0,0,0,0.15)] backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-4"
              >

                <div className="flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-xl bg-[#FFF1E5] text-[#F58220]">
                  <ShieldCheck size={34} strokeWidth={1.8} />
                </div>

                <div className="min-w-0">
                  <h3 className="text-[14px] font-extrabold text-[#102A43] sm:text-[17px]">
                    Built for Delhi Stores
                  </h3>

                  <p className="mt-1 text-[11px] leading-relaxed text-[#667487] sm:text-[13px]">
                    Stronger{" "}
                    <span className="text-[#F58220]">•</span>{" "}
                    Longer Lasting{" "}
                    <span className="text-[#F58220]">•</span>{" "}
                    On Time
                  </p>
                </div>
              </motion.div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
