
"use client";

import { motion } from "framer-motion";
import {
  FaBuilding,
  FaRoad,
  FaMapMarkerAlt,
  FaStore,
  FaIndustry,
} from "react-icons/fa";

const areas = [
  {
    title: "DLF & MG Road",
    description: "DLF Phase 1–5, MG Road, Sikanderpur, Sector 28",
    icon: FaBuilding,
  },
  {
    title: "Golf Course Road & Extension",
    description: "Sectors 42, 53–56, 58–65",
    icon: FaRoad,
  },
  {
    title: "Sohna Road",
    description: "Sectors 47–49, 67–72, Badshahpur, Sohna",
    icon: FaMapMarkerAlt,
  },
  {
    title: "Dwarka Expressway & New Gurgaon",
    description: "Sectors 82–95, 99–113",
    icon: FaRoad,
  },
  {
    title: "Old Gurgaon",
    description: "Sadar Bazaar, Sectors 4–15, Palam Vihar",
    icon: FaStore,
  },
  {
    title: "Manesar & Udyog Vihar",
    description: "Dark stores, warehouses and factory outlets",
    icon: FaIndustry,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
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

export default function GurugramAreas() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-12">

      <div className="relative z-10 mx-auto max-w-[1700px]">

        {/* HEADER */}

        <div className="mb-12 grid items-center gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">

          {/* LEFT HEADING */}

          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 inline-flex items-center gap-3 rounded-full bg-[#fff0e6] px-5 py-2.5"
            >
              <FaMapMarkerAlt className="text-[15px] md:text-[18px] text-[#ff6900]" />

              <span className="text-xs font-extrabold tracking-wide text-[#102443] sm:text-sm">
                AREAS WE SERVE
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[37px] font-extrabold leading-[1.12] tracking-tight text-[#10213e] sm:text-4xl "
            >
              Supermarket Racks Across

              <span className="mt-1 block text-[#f56608]">
                Gurugram’s Sectors
              </span>
            </motion.h2>

            {/* ORANGE SWOOSH */}

            <motion.svg
              initial={{ opacity: 0, pathLength: 0 }}
              whileInView={{ opacity: 1, pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              viewBox="0 0 210 28"
              className="mt-3 w-[205px]"
              fill="none"
            >
              <motion.path
                d="M3 10 C60 2 135 3 198 23"
                stroke="#ff6900"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <motion.path
                d="M95 26 C120 14 155 14 198 22"
                stroke="#ff6900"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </motion.svg>
          </div>

          {/* RIGHT DESCRIPTION */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border-l-[2px] border-[#142a49] pl-6 sm:pl-5 "
          >
            <p className="max-w-[600px] text-base font-medium leading-[1.6] text-[#354967] sm:text-[17px]">
              We supply and install supermarket racks across key Gurugram
              locations — from premium markets to industrial hubs.
            </p>
          </motion.div>

        </div>

        {/* AREA CARDS */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 gap-5  md:grid-cols-3 md:gap-5"
        >

          {areas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.title}
                variants={cardVariants}
                whileHover={{
                  y: -7,
                  transition: { duration: 0.3 },
                }}
                className="group relative flex  items-center overflow-hidden rounded-[30px] border border-[#dce3ec] bg-white p-5 shadow-[0_5px_15px_rgba(20,40,70,0.025)] transition-shadow duration-300 hover:shadow-[0_15px_35px_rgba(20,40,70,0.10)]  sm:p-5"
              >

                {/* BOTTOM RIGHT ORANGE ACCENT */}

                <div
                  className="absolute -bottom-[2px] -right-[2px] h-[75px] w-[95px] rounded-tl-[100%] bg-gradient-to-br from-[#ffe8d5] to-[#ffcc9e] transition-all duration-500 group-hover:h-[100px] group-hover:w-[120px]"
                />

                {/* ICON BOX */}

                <div className="relative z-10 flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-[24px] bg-[#fff3eb] transition-all duration-300 group-hover:bg-[#ffeadc] sm:h-[72px] sm:w-[72px]">

                  <Icon
                    className="text-[25px] text-[#f66b08] transition-transform duration-500 group-hover:scale-110 sm:text-[35px]"
                  />

                </div>

                {/* VERTICAL DIVIDER */}

                <div className="relative z-10 mx-4 h-[110px] w-[2px] shrink-0 bg-[#b8b8b8] sm:mx-5" />

                {/* CONTENT */}

                <div className="relative z-10 min-w-0 flex-1">

                  <h3 className="text-[18px] font-extrabold leading-[1.25] tracking-tight text-[#10213e] sm:text-[22px]">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-[16px] font-medium leading-[1.5] text-[#344967] sm:text-[15px]">
                    {area.description}
                  </p>

                  {/* SMALL ORANGE HOVER LINE */}

                  <div className="mt-3 h-[3px] w-0 rounded-full bg-[#ff6900] transition-all duration-500 group-hover:w-12" />

                </div>

              </motion.div>
            );
          })}

        </motion.div>

      </div>

    </section>
  );
}
