
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaLayerGroup, FaRulerVertical, FaStore } from "react-icons/fa";
import { FaTrowelBricks } from "react-icons/fa6";



const planningSteps = [
  {
    id: 1,
    title: "Bare-shell shops",
    description:
      "Many new society shops are handed over as bare shells. Fix the rack layout first, then place sockets, lights and the counter around it.",
    icon: FaStore,
  },
  {
    id: 2,
    title: "Fresh walls in new buildings",
    description:
      "Our racks are free-standing and need only light anti-tip brackets, so new plaster and tiles take minimal drilling.",
    icon: FaTrowelBricks,
  },
  {
    id: 3,
    title: "Low basement ceilings",
    description:
      "Basement shops in society complexes often have beams and ducts overhead. We measure clear height at the site visit and size racks to suit.",
    icon: FaRulerVertical,
  },
  {
    id: 4,
    title: "Possession delays",
    description:
      "If your shop handover slips, order anyway to lock the price. We hold the finished racks and fit them once you get the keys.",
    icon: FaCalendarAlt,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function NoidaPlanningGuide() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white px-5 py-14 sm:px-8  lg:px-12 lg:py-16">

      {/* BACKGROUND DECORATION */}

      <div className="pointer-events-none absolute -right-20 -top-32 -z-10 h-[430px] w-[500px] rounded-full bg-[#fff0e5] opacity-80 blur-[90px]" />

      <div className="pointer-events-none absolute -bottom-40 right-0 -z-10 h-[400px] w-[500px] rounded-full bg-[#fff0e5] opacity-60 blur-[100px]" />

      <div className="mx-auto max-w-[1700px]">

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.03fr] lg:gap-8">

          {/* =================================
              LEFT CONTENT
          ================================= */}

          <div className="relative z-10">

            {/* SECTION LABEL */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-3 inline-flex items-center gap-3 rounded-full bg-[#fff0e5] px-5 py-3"
            >
              <FaLayerGroup className="text-[27px] text-[#f36b0b]" />

              <span className="text-sm font-extrabold tracking-wide text-[#102443]">
                PLANNING GUIDE
              </span>
            </motion.div>

            {/* HEADING */}

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[#102443] sm:text-4xl "
            >
              Planning Racks for a{" "}
              <span className="text-[#f36b0b]">
                Noida Shop
              </span>
            </motion.h2>

            {/* ORANGE LINE */}

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 82 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-3 h-[5px] rounded-full bg-[#ff6900]"
            />

            {/* TIMELINE */}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="relative mt-10 space-y-0 pl-9 sm:pl-11"
            >

              {/* VERTICAL LINE */}

              <div className="absolute bottom-[60px] left-[8px] top-[42px] w-[2px] bg-gradient-to-b from-[#ff6900] via-[#ffad72] to-[#ffd7bf]" />

              {planningSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.id}
                    variants={itemVariants}
                    className="relative flex gap-5 pb-5 sm:gap-7 sm:pb-6"
                  >

                    {/* TIMELINE DOT */}

                    <div className="absolute -left-[39px] top-[28px] z-10 flex h-[19px] w-[19px] items-center justify-center rounded-full border-[4px] border-[#ff6900] bg-white sm:-left-[43px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ff6900]" />
                    </div>

                    {/* ICON BOX */}

                    <motion.div
                      whileHover={{
                        scale: 1.06,
                        rotate: 3,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex h-[105px] w-[105px] shrink-0 items-center justify-center rounded-[27px] bg-gradient-to-br from-[#fff3e9] to-[#ffeadc] sm:h-[70px] sm:w-[70px]"
                    >
                      <Icon className="text-[25px] text-[37px] text-[#102b49] drop-shadow-[2px_2px_0px_#ff8b25] " />
                    </motion.div>

                    {/* TEXT CONTENT */}

                    <div className="min-w-0 flex-1 pt-0.5">

                      <h3 className="text-[21px] font-extrabold leading-tight tracking-tight text-[#102443] sm:text-2xl">
                        {step.title}
                      </h3>

                      <p className="mt-2 max-w-[600px] text-[10px] leading-[1.55] text-[#354960] sm:text-[15px] ">
                        {step.description}
                      </p>

                      {/* DIVIDER */}

                      {index !== planningSteps.length - 1 && (
                        <div className="mt-5 h-px w-full bg-[#e0e5eb]" />
                      )}

                    </div>
                  </motion.div>
                );
              })}

            </motion.div>
          </div>

          {/* =================================
              RIGHT IMAGE
          ================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto h-[420px] w-full max-w-[760px] sm:h-[570px] lg:sticky lg:top-20 lg:mt-5 "
          >

            {/* PEACH BACKGROUND SHAPE */}

            <div className="absolute -right-4 -top-14 h-[110%] w-[90%] rounded-tl-[160px] bg-[#fff0e5] opacity-90" />

            {/* ORANGE OUTLINE */}

            <div
              className="absolute inset-0"
              style={{
                clipPath:
                  "polygon(24% 5%, 100% 0%, 100% 88%, 69% 100%, 3% 84%, 0% 78%, 4% 64%, 12% 27%)",
                background: "#ff6900",
              }}
            />

            {/* IMAGE */}

            <div
              className="absolute inset-[2px]"
              style={{
                clipPath:
                  "polygon(24% 5%, 100% 0%, 100% 88%, 69% 100%, 3% 84%, 0% 78%, 4% 64%, 12% 27%)",
              }}
            >
              <Image
                src="/why3.webp"
                alt="Modern supermarket with professionally installed retail racks"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-1000 hover:scale-105"
              />
            </div>

            {/* BOTTOM ORANGE ACCENT */}

            <div className="absolute -bottom-1 right-0 h-5 w-[23%] rotate-[-18deg] rounded-full bg-[#ff6900]" />

          </motion.div>

        </div>
      </div>
    </section>
  );
}
