
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CalendarDays,
  RefreshCw,
  Shield,
  FileText,
  Check,
} from "lucide-react";

const promises = [
  {
    id: "01",
    icon: CalendarDays,
    title: "Installation date in writing",
    description: (
      <>
        If we're late,{" "}
        <span className="promise-highlight">₹1,000 off</span>{" "}
        for every day of delay.
      </>
    ),
    detail: "Your confirmed installation date is documented with your order.",
  },
  {
    id: "02",
    icon: RefreshCw,
    title: "Free re-levelling visit",
    description: (
      <>
        We come back within{" "}
        <span className="promise-highlight">30 days</span>{" "}
        to tighten and re-level racks once they're fully loaded.
      </>
    ),
    detail: "Our team checks rack alignment after your products are loaded.",
  },
  {
    id: "03",
    icon: Shield,
    title: "5-year warranty",
    description: (
      <>
        On the steel structure and against peeling of the powder coat.
      </>
    ),
    detail: "Warranty coverage is documented with your purchase.",
  },
  {
    id: "04",
    icon: FileText,
    title: "GST invoice",
    description: (
      <>
        On every order, so you can claim input tax credit where eligible.
      </>
    ),
    detail: "A GST invoice is provided for every eligible order.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function DelhiPromise() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative w-full overflow-hidden bg-white px-5 py-6 sm:px-8 sm:py-8  ">

      <div className="mx-auto max-w-[1550px]">

        {/* HEADER */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="mb-14 text-center lg:mb-16"
        >
          <motion.div variants={reveal}>
            <span className="inline-flex items-center gap-3 rounded-full border-2 border-[#ffc49e] bg-[#fff0e6] px-5 py-2 text-base font-extrabold text-[#102443] sm:text-xl">
              <ShieldCheck
                size={25}
                className="fill-[#f36b0b] text-[#f36b0b]"
              />
              Our Delhi Promise
            </span>
          </motion.div>

          <motion.h2
            variants={reveal}
            className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#102443] sm:text-4xl"
          >
            What You Get with Every{" "}
            <span className="text-[#f36b0b]">Delhi Order</span>
          </motion.h2>

          <motion.p
            variants={reveal}
            className="mt-4 text-base text-[#46546c] sm:text-xl "
          >
            Written into your order, so there are no surprises on fitting day.
          </motion.p>
        </motion.div>

        {/* MAIN CONTENT */}

        <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-[0.95fr_1.25fr] md:gap-8">

          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[650px] pb-8 pr-5 sm:pb-6 sm:pr-7 lg:pb-4"
          >

            {/* DECORATIVE BACKGROUND */}

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute -left-3 -top-5 h-44 w-44 rounded-[40px] bg-[#fff0e5] sm:h-56 sm:w-56"
            />

            <div className="absolute -bottom-2 -right-1 h-48 w-48 rounded-full bg-[#eaf7e7] blur-3xl opacity-70" />

            {/* MAIN IMAGE */}

            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 aspect-[1.13/1] overflow-hidden rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] sm:rounded-[38px]"
            >
              <Image
                src="/why1.webp"
                alt="Modern supermarket with professionally installed grocery display racks"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </motion.div>

            {/* FLOATING PROMISE CARD */}

            <motion.div
              initial={{ opacity: 0, y: 35, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.45,
                ease: "easeOut",
              }}
              whileHover={{ y: -7 }}
              className="absolute -bottom-1 right-0 z-20 flex items-center gap-4 rounded-[28px] border border-white bg-white/95 px-5 py-5 shadow-[0_15px_40px_rgba(0,0,0,0.14)] backdrop-blur-md sm:bottom-0 sm:right-0 sm:gap-5 sm:px-4 sm:py-3"
            >
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-2xl bg-[#f36b0b] text-white sm:h-[46px] sm:w-[46px]">
                <ShieldCheck size={28} strokeWidth={2.6} />
              </div>

              <div>
                <h3 className="text-xl font-extrabold leading-tight tracking-tight text-[#102443] ">
                  Our Delhi
                </h3>

                <p className="text-xl font-extrabold leading-tight text-[#f36b0b] ">
                  Promise
                </p>

                <div className="mt-2 h-2 w-32 -rotate-3 rounded-full bg-[#ffeadb]" />
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT PROMISE LIST */}

          <div className="relative">

            {/* VERTICAL TIMELINE */}

            <div className="absolute bottom-3 left-[18px] top-3 w-[5px] rounded-full bg-[#e7e8ec] sm:left-[20px]" />

            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "38%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.3 }}
              className="absolute left-[18px] top-3 z-10 w-[5px] rounded-full bg-[#f36b0b] sm:left-[20px]"
            />

            {/* PROMISE ITEMS */}

            <motion.div
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.17 },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              {promises.map((item, index) => {
                const Icon = item.icon;
                const isActive = active === index;

                return (
                  <motion.div
                    key={item.id}
                    variants={reveal}
                    onClick={() =>
                      setActive(isActive ? null : index)
                    }
                    className={`group relative flex cursor-pointer gap-5 border-b border-[#e1e4e9] py-6 pl-12 transition-all duration-300 sm:gap-8 sm:pl-[76px] ${
                      index === 3 ? "border-b-0" : ""
                    }`}
                  >

                    {/* ICON BOX */}

                    <motion.div
                      animate={{
                        scale: isActive ? 1.07 : 1,
                        backgroundColor: isActive ? "#fff0e5" : "#fff0e5",
                      }}
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-[21px] bg-[#fff0e5] text-[#f36b0b] sm:h-[48px] sm:w-[48px]"
                    >
                      <Icon
                        size={35}
                        strokeWidth={2}
                        className="max-sm:h-10 max-sm:w-10"
                      />
                    </motion.div>

                    {/* TEXT */}

                    <div className="flex-1 pt-1">
                      <h3 className="text-xl font-extrabold leading-tight tracking-tight text-[#102443] sm:text-[17px]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-base leading-relaxed text-[#344258] sm:text-[15px]">
                        {item.description}
                      </p>

                      {/* OPTIONAL INTERACTIVE DETAIL */}

                      <motion.div
                        initial={false}
                        animate={{
                          height: isActive ? "auto" : 0,
                          opacity: isActive ? 1 : 0,
                          marginTop: isActive ? 12 : 0,
                        }}
                        className="overflow-hidden"
                      >
                        <p className="rounded-xl bg-[#fff7f1] px-4 py-3 text-sm leading-relaxed text-[#8a4b20]">
                          <Check
                            size={16}
                            className="mr-2 inline text-[#f36b0b]"
                          />
                          {item.detail}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
