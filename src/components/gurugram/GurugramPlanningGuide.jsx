
"use client";

import { motion } from "framer-motion";
import {
  FaLayerGroup,
  FaLightbulb,
  FaBuilding,
  FaWarehouse,
} from "react-icons/fa";
import { GiElevator } from "react-icons/gi";

const planningPoints = [
  {
    icon: FaWarehouse,
    title: "Society work timings",
    description:
      "Many RWAs and maintenance offices limit work hours, gate entry and lift use. We sort out gate passes and work slots during the site visit, so fitting isn't held up.",
  },
  {
    icon: GiElevator,
    title: "Stores in commercial towers",
    description:
      "For upper-floor and mall units, we measure the service lift and doorways first. Racks come in knock-down packs sized to fit.",
  },
  {
    icon: FaLightbulb,
    title: "Bright lighting and glass fronts",
    description:
      "Glossy finishes show glare and fingerprints under strong store lighting. Matte black, white or grey keeps premium stores looking clean.",
  },
  {
    icon: FaLayerGroup,
    title: "Floors in new sectors",
    description:
      "New buildings often have slightly uneven floors. Our racks have adjustable levelling feet, so every bay stands straight and shelves stay level.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* Decorative Gurugram skyline */

function GurugramSkyline() {
  return (
    <svg
      viewBox="0 0 850 250"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="#91A8BD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Left building */}

        <path d="M65 205V145L102 132V205" />
        <path d="M72 150L102 140M72 162L102 153M72 175L102 166M72 188L102 179" />
        <path d="M82 145V205M93 140V205" />

        {/* Second tower */}

        <path d="M130 205V110L170 96V205" />
        <path d="M130 122L170 108M130 138L170 125M130 155L170 142M130 172L170 159M130 188L170 175" />
        <path d="M142 105V205M156 101V205" />
        <path d="M145 85L150 65L155 85" />

        {/* Third tower */}

        <path d="M215 205V75L265 57V205" />
        <path d="M215 92L265 75M215 110L265 93M215 129L265 111M215 148L265 130M215 168L265 148M215 187L265 168" />
        <path d="M230 69V205M249 63V205" />

        {/* Central tall building */}

        <path d="M320 205V40L375 23V205" />
        <path d="M320 60L375 44M320 79L375 63M320 99L375 82M320 119L375 102M320 139L375 122M320 159L375 141M320 179L375 161" />
        <path d="M337 35V205M355 29V205" />

        {/* Tall signature tower */}

        <path d="M430 205V18L475 0V205" />
        <path d="M430 40L475 24M430 58L475 42M430 77L475 61M430 97L475 79M430 117L475 98M430 137L475 117M430 157L475 137M430 178L475 157" />
        <path d="M446 12V205M460 6V205" />

        {/* Right buildings */}

        <path d="M510 205V105L555 91V205" />
        <path d="M510 121L555 107M510 139L555 125M510 158L555 143M510 178L555 161M510 194L555 180" />

        <path d="M590 205V130L635 115V205" />
        <path d="M590 145L635 130M590 162L635 148M590 179L635 165M590 194L635 182" />

        {/* Small buildings */}

        <path d="M680 205V155L710 145V205" />
        <path d="M680 168L710 158M680 181L710 171M680 193L710 183" />

        {/* Ground line */}

        <path d="M35 207H820" />
        <path d="M30 216C190 211 280 219 405 210C550 199 690 214 820 207" />
      </g>

      {/* Small trees */}

      {[105, 195, 300, 570, 660, 765].map((x, i) => (
        <g key={x} transform={`translate(${x}, 190)`}>
          <path
            d="M0 0V17"
            stroke="#9AAFC1"
            strokeWidth="2"
          />
          <circle
            cx="0"
            cy="-6"
            r={i % 2 === 0 ? 7 : 9}
            fill="#A9BAC9"
            opacity=".75"
          />
        </g>
      ))}
    </svg>
  );
}

export default function GurugramPlanningGuide() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

      <div className="mx-auto max-w-[1700px]">

        {/* HEADER */}

        <div className="mb-12 grid items-center gap-8 lg:grid-cols-2">

          {/* LEFT HEADER */}

          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-3 rounded-full bg-[#fff0e6] px-5 py-2.5"
            >
              <FaLayerGroup className="text-[10px] md:text-[20px] text-[#ff6900]" />

              <span className="text-xs font-extrabold text-[#10213e] sm:text-sm">
                PLANNING GUIDE
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[42px] font-extrabold leading-[1.08] tracking-tight text-[#10213e] sm:text-5xl "
            >
              Planning Racks for a

              <span className="block text-[#f56608]">
                Gurugram Store
              </span>
            </motion.h2>

            {/* Orange underline */}

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 260 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-4 h-[6px] max-w-[260px] rounded-full bg-[#ff6900]"
            />
          </div>

          {/* RIGHT CITY ILLUSTRATION */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative hidden h-[220px] items-center border-l-2 border-[#b6c5d3] pl-8 lg:flex"
          >
            <GurugramSkyline />
          </motion.div>

        </div>

        {/* PLANNING CARDS */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6"
        >

          {planningPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{
                  y: -7,
                  transition: { duration: 0.3 },
                }}
                className="group relative flex  flex-col overflow-hidden rounded-[30px] border border-[#e1e7ef] bg-white p-7 shadow-[0_8px_18px_rgba(16,33,62,0.07)] transition-shadow duration-300 hover:shadow-[0_18px_35px_rgba(16,33,62,0.12)] sm:p-5"
              >

                {/* Bottom orange corner */}


                {/* Icon */}

                <div className="relative z-10 flex h-[98px] w-[98px] max-w-full items-center justify-center rounded-[24px] bg-[#fff3eb] transition-all duration-500 group-hover:bg-[#ffeadc]">

                  <Icon className="text-[22px] md:text-[48px] text-[#ff7200] transition-transform duration-500 group-hover:scale-110" />

                </div>

                {/* Title */}

                <h3 className="relative z-10 mt-7 text-[25px] font-extrabold leading-[1.25] tracking-tight text-[#10213e] sm:text-[22px]">
                  {item.title}
                </h3>

                {/* Orange divider */}

                <div className="relative z-10 mt-2 h-[5px] w-[68px] rounded-full bg-[#ff7900] transition-all duration-500 group-hover:w-[105px]" />

                {/* Description */}

                <p className="relative z-10 mt-7 text-[17px] font-medium leading-[1.65] text-[#354967] sm:text-[16px]">
                  {item.description}
                </p>

              </motion.div>
            );
          })}

        </motion.div>

      </div>
    </section>
  );
}
