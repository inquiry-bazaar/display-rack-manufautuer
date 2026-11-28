
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaMapMarkerAlt,
  FaBuilding,
  FaCity,
  FaRoad,
  FaArchway,
  FaIndustry,
  FaTree,
} from "react-icons/fa";

const areas = [
  {
    id: 1,
    title: "Central Noida",
    description:
      "Sectors 15–18, 27, 29 and the Sector 18 market area",
    icon: FaBuilding,
  },
  {
    id: 2,
    title: "Residential Sectors",
    description:
      "Sectors 50, 51, 61, 62, 71–78 and their society shops",
    icon: FaCity,
  },
  {
    id: 3,
    title: "Noida Extension",
    description:
      "Greater Noida West, Gaur City and Techzone 4 societies",
    icon: FaBuilding,
  },
  {
    id: 4,
    title: "Noida Expressway",
    description:
      "Sectors 93–150 along the Noida–Greater Noida Expressway",
    icon: FaRoad,
  },
  {
    id: 5,
    title: "Greater Noida",
    description:
      "Pari Chowk, Alpha, Beta, Gamma and Knowledge Park",
    icon: FaArchway,
  },
  {
    id: 6,
    title: "Industrial Sectors",
    description:
      "Sectors 57–65 and 80–85 for factory stores and warehouses",
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
    y: 30,
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

export default function NoidaAreas() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#fafcff] py-5 sm:py-12">

      {/* BACKGROUND DECORATION */}

      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-[400px] w-[500px] rounded-full bg-[#fff0e6] opacity-50 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-64 -z-10 h-[450px] w-[500px] rounded-full bg-[#eaf2ff] opacity-70 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1700px] px-5 sm:px-8 lg:px-12">

        {/* SECTION HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center lg:mb-12"
        >

          {/* LOCATION BADGE */}

          <div className="mb-5 flex items-center justify-center gap-4">

            <span className="hidden h-[3px] w-16 rounded-full bg-[#ff6900] sm:block" />

            <span className="inline-flex items-center gap-3 rounded-full bg-[#fff0e5] px-6 py-3">
              <FaMapMarkerAlt className="text-[15px] md:text-[20px] text-[#f36b0b]" />

              <span className="text-xs font-extrabold tracking-wide text-[#102443] sm:text-sm">
                AREAS WE SERVE
              </span>
            </span>

            <span className="hidden h-[3px] w-16 rounded-full bg-[#ff6900] sm:block" />

          </div>

          {/* HEADING */}

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#102443] sm:text-4xl ">
            Supermarket Racks in{" "}
            <span className="text-[#f36b0b]">
              Noida, Greater Noida & Noida Extension
            </span>
          </h2>

        </motion.div>

        {/* LOCATION CARDS */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-3 xl:grid-cols-3 xl:gap-4"
        >

          {areas.map((area) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.id}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3 },
                }}
                className="group flex  items-center gap-5 rounded-[36px] border border-[#e9edf3] bg-white p-4 shadow-[0_10px_20px_rgba(16,36,67,0.08)] transition-all duration-300 hover:border-[#ffd0ad] hover:shadow-[0_15px_30px_rgba(16,36,67,0.12)] sm:gap-6 sm:p-4"
              >

                {/* ICON BOX */}

                <motion.div
                  whileHover={{
                    scale: 1.06,
                    rotate: 3,
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative flex h-[75px] w-[75px] shrink-0 items-center justify-center overflow-hidden rounded-[45px] bg-gradient-to-br from-[#fff4ec] to-[#ffede0] sm:h-[100px] sm:w-[100px]"
                >

                  {/* Decorative background */}

                  <div className="absolute -right-5 -top-5 h-15 w-15 rounded-full bg-white/50 blur-xl" />

                  <Icon
                    className="relative z-10 text-[72px] text-[#102b49] drop-shadow-[2px_3px_0px_#ff9a32] transition-transform duration-300 group-hover:scale-110 sm:text-[42px]"
                  />

                </motion.div>

                {/* CONTENT */}

                <div className="min-w-0 flex-1 py-2">

                  <h3 className="text-[13px] font-extrabold leading-tight tracking-tight text-[#102443] sm:text-[25px] ">
                    {area.title}
                  </h3>

                  {/* ORANGE LINE */}

                  <div className="my-2 h-[6px] w-[67px] rounded-full bg-[#ff6900] transition-all duration-300 group-hover:w-[90px]" />

                  {/* DESCRIPTION */}

                  <p className="text-[10px] leading-[1.55] text-[#243950] sm:text-sm">
                    {area.description}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </motion.div>

      </div>

     

    </section>
  );
}
