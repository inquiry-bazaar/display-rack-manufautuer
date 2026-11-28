
"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaArrowRight,
  FaRulerCombined,
  FaTruck,
  FaLayerGroup,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";

const projects = [
  {
    category: "SOCIETY STORE",
    title: "Green Valley Daily Mart",
    location: "Sector 45, Gurugram",
    image: "/why1.webp",
    size: "350 sq ft",
    details: [
      { icon: FaRulerCombined, text: "350 sq ft" },
      { icon: FaTruck, text: "Fitted in 7 days" },
    ],
  },
  {
    category: "DARK STORE",
    title: "QuickCommerce Fulfilment",
    location: "Udyog Vihar, Gurugram",
    image: "/why2.webp",
    size: "5,000 sq ft",
    details: [
      { icon: FaRulerCombined, text: "5,000 sq ft" },
      { icon: FaLayerGroup, text: "40+ heavy-duty bays" },
      { icon: FaCalendarAlt, text: "Fitted in 10 days" },
    ],
  },
  {
    category: "PREMIUM STORE",
    title: "The Gourmet Basket",
    location: "Golf Course Road, Gurugram",
     image: "/why3.webp",
    size: "1,200 sq ft",
    details: [
      { icon: FaRulerCombined, text: "1,200 sq ft" },
      { icon: FaStar, text: "Matte black racks, LED shelves" },
      { icon: FaCalendarAlt, text: "Fitted in 8 days" },
    ],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function GurugramProjects() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">

      <div className="mx-auto max-w-[1650px]">

        {/* HEADER */}

        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-2 flex items-center gap-2"
            >
              <span className="h-[2px] w-5 bg-[#ff6900]" />
              <span className="text-sm font-extrabold tracking-wide text-[#f56608] sm:text-base">
                GURUGRAM PROJECTS
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[36px] font-extrabold leading-tight tracking-tight text-[#10213e] sm:text-5xl "
            >
              Stores We’ve Fitted in Gurugram
            </motion.h2>
          </div>

          {/* VIEW ALL BUTTON */}

          <motion.a
            href="/projects"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex shrink-0 items-center justify-center gap-5 self-start rounded-full border-[1.5px] border-[#10213e] px-5 py-4 text-base font-bold text-[#10213e] transition-all duration-300 hover:bg-[#10213e] hover:text-white sm:self-center"
          >
            View All Projects
            <FaArrowRight />
          </motion.a>

        </div>

        {/* PROJECT CARDS */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >

          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={cardAnimation}
              whileHover={{
                y: -7,
                transition: { duration: 0.3 },
              }}
              className="group overflow-hidden rounded-[23px] bg-white shadow-[0_8px_22px_rgba(16,33,62,0.13)] transition-shadow duration-300 hover:shadow-[0_18px_38px_rgba(16,33,62,0.16)]"
            >

              {/* PROJECT IMAGE */}

              <div className="relative h-[250px] overflow-hidden sm:h-[300px] xl:h-[380px]">

                <img
                  src={project.image}
                  alt={`${project.title} supermarket rack installation in Gurugram`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

              </div>

              {/* CARD CONTENT */}

              <div className="p-6 sm:p-5">

                {/* CATEGORY */}

                <p className="mb-2 text-[12px] font-extrabold text-[#f56608]">
                  {project.category}
                </p>

                {/* TITLE */}

                <h3 className="text-[25px] font-extrabold leading-tight tracking-tight text-[#10213e] sm:text-[22px]">
                  {project.title}
                </h3>

                {/* LOCATION */}

                <div className="mt-3 flex items-center gap-3 text-[#405675]">
                  <FaMapMarkerAlt className="shrink-0 text-[23px] text-[#ff6900]" />
                  <span className="text-xs font-semibold sm:text-sm">
                    {project.location}
                  </span>
                </div>

                {/* DIVIDER */}

              

                {/* PROJECT DETAILS */}


              </div>

            </motion.article>
          ))}

        </motion.div>

      </div>

    </section>
  );
}
