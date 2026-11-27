
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaMapMarkerAlt,
  FaArrowRight,
  FaStore,
  FaExpandAlt,
  FaCalendarAlt,
} from "react-icons/fa";

import {
  MdLayers,
} from "react-icons/md";

const projects = [
  {
    id: 1,
    name: "Gupta Mart",
    category: "Grocery Store Setup",
    location: "Rohini, Delhi",
    area: "500 sq ft",
    racks: "8 wall racks",
    gondolas: "2 gondolas",
    days: "3 days",
    image: "/industries/1.webp",
    bg: "bg-[#efffe6]",
    link: "/projects/gupta-mart",
  },
  {
    id: 2,
    name: "Sharma Supermarket",
    category: "Retail Rack Installation",
    location: "Dwarka, Delhi",
    area: "800 sq ft",
    racks: "12 wall racks",
    gondolas: "3 gondolas",
    days: "4 days",
     image: "/industries/2.webp",
    bg: "bg-[#fff0e5]",
    link: "/projects/sharma-supermarket",
  },
  {
    id: 3,
    name: "Verma Store",
    category: "Convenience Store Setup",
    location: "Pitampura, Delhi",
    area: "600 sq ft",
    racks: "10 wall racks",
    gondolas: "2 gondolas",
    days: "3 days",
     image: "/industries/3.webp",
    bg: "bg-[#eaf7ff]",
    link: "/projects/verma-store",
  },
  {
    id: 4,
    name: "Kumar Fresh Mart",
    category: "Supermarket Fit-out",
    location: "Janakpuri, Delhi",
    area: "1,200 sq ft",
    racks: "18 wall racks",
    gondolas: "4 gondolas",
    days: "5 days",
     image: "/industries/4.webp",
    bg: "bg-[#f5efff]",
    link: "/projects/kumar-fresh-mart",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
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
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function DelhiProjects() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-6 sm:px-7 sm:py-12">

      <div className="mx-auto max-w-[1800px]">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex flex-col justify-between gap-6 lg:mb-12 lg:flex-row lg:items-center"
        >

          <div>
            {/* LABEL */}

            <div className="mb-3 flex items-center gap-2">
              <FaMapMarkerAlt className="text-xl text-[#f36b0b]" />

              <span className="rounded-full bg-[#fff0e5] px-5 py-2 text-xs font-extrabold text-[#102443]">
                DELHI PROJECTS
              </span>
            </div>

            {/* HEADING */}

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#102443] sm:text-4xl ">
              Recent Supermarket Rack{" "}
              <span className="text-[#f36b0b]">
                Projects in Delhi
              </span>
            </h2>

            <p className="mt-3 text-base font-medium text-[#53647b] sm:text-base">
              Stores we’ve fitted across Delhi, with what we supplied and how long it took.
            </p>
          </div>

          {/* VIEW ALL */}

          <Link
            href="/projects"
            className="group flex w-fit shrink-0 items-center gap-5 rounded-full border-[1.5px] border-[#ff6900] px-8 py-4 text-base font-extrabold text-[#102443] transition-all duration-300 hover:bg-[#ff6900] hover:text-white"
          >
            View All Projects

            <FaArrowRight className="text-xl text-[#f36b0b] transition-transform duration-300 group-hover:translate-x-2 group-hover:text-white" />
          </Link>

        </motion.div>

        {/* PROJECT CARDS */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >

          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardAnimation}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className={`group flex min-w-0 flex-col rounded-[28px] p-4 sm:p-5 ${project.bg}`}
            >

              {/* PROJECT IMAGE */}

              <div className="relative h-[220px] w-full overflow-hidden rounded-[22px] bg-white sm:h-[235px]">

                <Image
                  src={project.image}
                  alt={`${project.name} supermarket rack installation in Delhi`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* CATEGORY BADGE */}

                <div className="absolute left-3 top-3 z-10 flex max-w-[95%] items-center gap-3 rounded-full bg-white/95 px-4 py-2.5 shadow-sm backdrop-blur-sm">
                  <FaStore className="shrink-0 text-lg text-[#f36b0b]" />

                  <span className="truncate text-xs font-extrabold text-[#102443] sm:text-sm">
                    {project.category}
                  </span>
                </div>

              </div>

              {/* PROJECT NAME */}

              <div className="px-1 py-4">

                <h3 className="text-[24px] font-extrabold leading-tight tracking-tight text-[#102443] sm:text-base">
                  {project.name}
                </h3>

                {/* LOCATION */}

                <div className="mt-2 flex items-center gap-3 text-[#102443]">
                  <FaMapMarkerAlt className="shrink-0 text-xl text-[#f36b0b]" />

                  <span className="text-base font-semibold sm:text-lg">
                    {project.location}
                  </span>
                </div>

              </div>

              {/* PROJECT STATS */}

            

              {/* PROJECT BUTTON */}

              <Link
                href={project.link}
                className="group/btn mt-auto mt-7 flex  items-center justify-center gap-5 rounded-full bg-[#ff6900] px-7 py-4 md:px-3 md:py-4 text-sm font-extrabold text-white transition-all duration-300 hover:bg-[#e95b00] hover:shadow-lg hover:shadow-orange-500/25"
              >
                View Project

                <FaArrowRight className="text-xl transition-transform duration-300 group-hover/btn:translate-x-2" />
              </Link>

            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}
