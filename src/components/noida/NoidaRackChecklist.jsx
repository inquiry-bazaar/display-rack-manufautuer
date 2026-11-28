
"use client";

import { motion } from "framer-motion";
import {
  FaStore,
  FaCalendarAlt,
  FaChevronRight,
  FaMapMarkedAlt,
  FaSwatchbook,
  FaTools,
  FaDolly,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    days: "30",
    title: "Site visit and layout",
    description:
      "Plan racks before electrical work, so sockets and lights fall where racks won’t block them.",
    icon: FaMapMarkedAlt,
  },
  {
    id: 2,
    days: "25",
    title: "Approve and choose colours",
    description:
      "Confirm the package, colours and add-ons. Production starts here.",
    icon: FaSwatchbook,
  },
  {
    id: 3,
    days: "10",
    title: "Delivery and fitting",
    description:
      "Our fitters install and level every rack once painting and flooring are done.",
    icon: FaTools,
  },
  {
    id: 4,
    days: "7",
    title: "Stock loading",
    description:
      "Load stock and fix price strips, with a week in hand for changes.",
    icon: FaDolly,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
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

export default function NoidaRackChecklist() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white px-4 py-6 sm:px-7 sm:py-12">

      {/* Background decorations */}

      <div className="pointer-events-none absolute -left-32 -top-32 -z-10 h-[350px] w-[450px] rounded-full bg-[#fff5ee] blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-32 -z-10 h-[400px] w-[450px] rounded-full bg-[#fff3eb] blur-[110px]" />

      <div className="mx-auto max-w-[1700px]">

        {/* SECTION HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center lg:mb-16"
        >

          {/* LABEL */}

          <div className="relative inline-flex items-center gap-3 rounded-full bg-[#fff0e5] px-6 py-3">

            <FaStore className="text-[28px] text-[#f36b0b]" />

            <span className="text-xs font-extrabold text-[#102b49] sm:text-sm">
              Opening a New Shop?
            </span>

            {/* Decorative lines */}

            <div className="absolute -right-7 -top-4 rotate-12">
              <span className="block h-5 w-[5px] rounded-full bg-[#ff6900]" />
              <span className="absolute -right-3 top-3 h-5 w-[5px] rotate-45 rounded-full bg-[#ff6900]" />
              <span className="absolute -right-5 top-7 h-5 w-[5px] rotate-[65deg] rounded-full bg-[#ff6900]" />
            </div>
          </div>

          {/* HEADING */}

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#102b49] sm:text-4xl ">
            Your 30-Day Rack Checklist for a{" "}
            <span className="text-[#f36b0b]">
              New Noida Shop
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[1200px] text-sm leading-relaxed text-[#53647b] sm:text-lg">
            Most delays come from planning racks too late. Work backwards from your opening date like this.
          </p>
        </motion.div>

        {/* TIMELINE CARDS */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10"
        >

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                variants={cardVariants}
                className="group relative min-w-0 pt-[155px] lg:pt-[165px]"
              >

                {/* CIRCULAR ILLUSTRATION */}

                <motion.div
                  whileHover={{
                    scale: 1.07,
                    rotate: 3,
                  }}
                  transition={{ duration: 0.35 }}
                  className="absolute left-1/2 top-0 z-10 flex h-[170px] w-[170px] md:h-[100px] md:w-[100px] -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-[#ff6900] bg-[#fff3e9] shadow-[inset_0_0_0_5px_white]"
                >

                  <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#fff5ed] to-[#ffe9d9]">

                    <Icon
                      className={`text-[55px] ${
                        index === 1 || index === 3
                          ? "text-[#102b49]"
                          : "text-[#102b49]"
                      }`}
                      strokeWidth={1.3}
                    />

                  </div>
                </motion.div>

                {/* TIMELINE DATE PILL */}

                <div className="absolute left-1/2 top-[155px] z-20 w-[92%] -translate-x-1/2 lg:top-[115px] lg:w-[75%]">

                  <div className="relative flex h-[57px] items-center overflow-hidden rounded-full bg-gradient-to-r from-[#ff6900] via-[#f36b0b] to-[#071f3b] shadow-[0_7px_18px_rgba(243,107,11,0.15)]">

                    {/* CALENDAR ICON */}

                    <div className="flex h-[57px] w-[65px] shrink-0 items-center justify-center rounded-full bg-[#ff6900] text-white">
                      <FaCalendarAlt className="text-[29px]" />
                    </div>

                    {/* DAYS */}

                    <div className="flex flex-1 items-center justify-center gap-2 pr-2 text-white">
                      <span className="text-[13px] md:text-base font-extrabold leading-none tracking-tight">
                        {step.days}
                      </span>

                      <span className="whitespace-nowrap text-[14px]  font-extrabold sm:text-[15px]">
                        Days Before
                      </span>
                    </div>

                  </div>
                </div>

                {/* CONNECTING ARROW */}

                {index !== steps.length - 1 && (
                  <div className="absolute -right-[37px] top-[120px] z-30 hidden h-12 w-12 items-center justify-center rounded-full border-[3px] border-[#ff6900] bg-white text-[#ff6900] lg:flex">
                    <FaChevronRight className="text-xl" />
                  </div>
                )}

                {/* CARD CONTENT */}

                <motion.div
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                  className="relative flex h-full  flex-col rounded-[42px] bg-gradient-to-br from-[#fffaf6] to-[#fff3eb] px-7 pb-8 pt-12 shadow-[0_8px_25px_rgba(16,36,67,0.025)] transition-shadow duration-300 group-hover:shadow-[0_15px_35px_rgba(16,36,67,0.07)] sm:px-8"
                >

                  {/* TITLE */}

                  <h3 className="text-[13px] font-extrabold leading-[1.12] tracking-tight text-[#102b49] sm:text-[19px]">
                    {step.title}
                  </h3>

                  {/* ORANGE UNDERLINE */}

                  <div className="my-2 h-[5px] w-[95px] rounded-full bg-[#ff6900]" />

                  {/* DESCRIPTION */}

                  <p className="text-[17px] leading-[1.6] text-[#344b63] sm:text-[15px]">
                    {step.description}
                  </p>

                </motion.div>
              </motion.div>
            );
          })}

        </motion.div>
      </div>
    </section>
  );
}
