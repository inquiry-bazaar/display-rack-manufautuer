
"use client";

import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaClipboardCheck,
  FaRulerCombined,
  FaLaptop,
  FaFileInvoice,
  FaStore,
  FaBoxes,
  FaCheckCircle,
  FaChevronRight,
  FaMapMarkerAlt,
} from "react-icons/fa";

const steps = [
  {
    day: "Day 1",
    title: "You call or WhatsApp",
    description:
      "Share your area, shop size and what you sell. We book a site visit.",
    type: "whatsapp",
  },
  {
    day: "Day 2",
    title: "Free site visit",
    description:
      "We measure the shop, check doors and stairs, and note your stock.",
    type: "visit",
  },
  {
    day: "Day 3",
    title: "Layout and fixed quote",
    description:
      "A drawing of every rack and aisle, with sizes, thickness and the final price.",
    type: "layout",
  },
  {
    day: "Day 4",
    title: "Delivered and fitted",
    description:
      "Our fitters install, level and fix price strips. You start stocking the same day.",
    type: "delivery",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 40,
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

// Illustration component using React Icons
function StepIllustration({ type }) {
  return (
    <div className="relative flex h-[185px] w-full items-center justify-center">

      {/* Peach background shape */}

      <div className="absolute h-32 w-52 rounded-[45%] bg-[#fff1e7] blur-[1px]" />

      {type === "whatsapp" && (
        <>
          <FaWhatsapp className="absolute right-[19%] top-4 text-3xl text-[#ff7900]" />

          <motion.div
            whileHover={{ rotate: 5, y: -5 }}
            className="relative z-10 flex h-[145px] w-[82px] rotate-[6deg] flex-col items-center rounded-[17px] border-[5px] border-[#344e62] bg-[#f8fafc] p-1 shadow-xl"
          >
            <div className="mb-3 mt-1 h-1 w-8 rounded-full bg-[#344e62]" />

            <div className="flex flex-1 items-center justify-center">
              <FaWhatsapp className="text-[65px] text-[#20c968]" />
            </div>

            <div className="mb-1 h-1 w-5 rounded-full bg-[#9ba9b4]" />
          </motion.div>

          <span className="absolute bottom-4 left-[17%] text-3xl text-[#ff7900]">
            ✦
          </span>
        </>
      )}

      {type === "visit" && (
        <>
          <motion.div
            whileHover={{ y: -5, rotate: -2 }}
            className="relative z-10 flex h-[140px] w-[105px] flex-col items-center rounded-xl border-[5px] border-[#344e62] bg-white p-3 shadow-lg"
          >
            <div className="absolute -top-3 h-6 w-10 rounded-md border-[4px] border-[#526f83] bg-[#8da5b7]" />

            <FaClipboardCheck className="mb-2 mt-2 text-3xl text-[#ff7900]" />

            {[1, 2, 3].map((item) => (
              <div key={item} className="mb-3 flex w-full items-center gap-2">
                <FaCheckCircle className="text-lg text-[#ff7900]" />
                <div className="h-[3px] flex-1 rounded-full bg-[#9aaab7]" />
              </div>
            ))}
          </motion.div>

          <motion.div
            animate={{ rotate: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-4 right-[13%] flex h-[66px] w-[66px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff9e24] to-[#e95c00] shadow-lg"
          >
            <FaRulerCombined className="text-3xl text-white" />
          </motion.div>
        </>
      )}

      {type === "layout" && (
        <>
          <motion.div
            whileHover={{ y: -5 }}
            className="relative z-10 flex h-[112px] w-[170px] items-center justify-center rounded-xl border-[7px] border-[#344e62] bg-[#f8fafc] shadow-lg"
          >
            <div className="absolute inset-1 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="flex h-7 w-9 items-center justify-center rounded-sm border border-[#60798b] bg-[#e5edf2]"
                  >
                    <FaStore className="text-sm text-[#344e62]" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, rotate: 5 }}
            className="absolute bottom-3 right-[12%] z-20 flex h-[83px] w-[62px] rotate-6 flex-col items-center justify-center rounded-lg border border-[#dce3e9] bg-white shadow-lg"
          >
            <span className="text-3xl font-extrabold text-[#f36b0b]">
              ₹
            </span>
            <div className="mt-1 h-1 w-8 rounded bg-slate-300" />
            <div className="mt-1 h-1 w-6 rounded bg-slate-300" />
          </motion.div>
        </>
      )}

      {type === "delivery" && (
        <>
          <motion.div
            whileHover={{ y: -5 }}
            className="relative z-10 flex h-[130px] w-[190px] items-center justify-center"
          >
            <div className="absolute inset-0 flex flex-col justify-between py-2">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="h-3 w-full rounded-sm bg-[#f58220] shadow-sm"
                />
              ))}
            </div>

            <div className="absolute left-1 top-0 h-full w-3 rounded-sm bg-[#173b55]" />
            <div className="absolute right-1 top-0 h-full w-3 rounded-sm bg-[#173b55]" />

            <div className="absolute inset-x-3 top-0 h-3 rounded-sm bg-[#173b55]" />
            <div className="absolute inset-x-3 bottom-0 h-3 rounded-sm bg-[#173b55]" />
          </motion.div>

          <FaBoxes className="absolute bottom-4 right-[7%] text-5xl text-[#c99158]" />

          <span className="absolute right-[20%] top-2 text-3xl text-[#ff7900]">
            ✦
          </span>
        </>
      )}
    </div>
  );
}

export default function HowItWorksDelhi() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white px-4 py-6 sm:px-7  sm:py-12">

      {/* Background decorations */}

      <div className="pointer-events-none absolute -left-40 -top-48 -z-10 h-[400px] w-[600px] rounded-full bg-[#fff3eb] opacity-70 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 -z-10 h-[400px] w-[600px] rounded-full bg-[#fff2e9] opacity-70 blur-3xl" />

      <div className="mx-auto max-w-[1800px]">

        {/* HEADER */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="mb-5 text-center sm:mb-8"
        >
          <motion.div variants={cardAnimation}>
            <span className="inline-flex items-center gap-3 rounded-full bg-[#fff0e6] px-6 py-3 text-base font-extrabold text-[#102b49] sm:text-sm">
              <FaMapMarkerAlt className="text-xl text-[#f36b0b]" />
              How It Works in Delhi
            </span>
          </motion.div>

          <motion.h2
            variants={cardAnimation}
            className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#102b49] sm:text-4xl "
          >
            From Enquiry to{" "}
            <span className="text-[#f36b0b]">
              Opening Day
            </span>
          </motion.h2>

          <motion.p
            variants={cardAnimation}
            className="mt-5 text-base leading-relaxed text-[#53647b] sm:text-base"
          >
            A simple, transparent process to get your supermarket racks
            installed and ready for business.
          </motion.p>
        </motion.div>

        {/* PROCESS CARDS */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.day}
              variants={cardAnimation}
              className="group relative min-w-0"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative flex h-full min-h-[400px] flex-col overflow-hidden rounded-[30px] border border-[#e9e9e9] bg-white p-5 shadow-[0_9px_22px_rgba(0,0,0,0.07)] transition-shadow duration-300 hover:shadow-[0_18px_35px_rgba(0,0,0,0.12)] sm:p-5"
              >

                {/* DAY LABEL */}

                <div className="relative mb-1 flex h-11 w-[90px] items-center">
                  <div className="absolute inset-0 rounded-l-xl bg-[#082544]" />

                  <div className="absolute right-0 top-0 h-full w-5 translate-x-1 -skew-x-[23deg] rounded-r-sm bg-[#ff6900]" />

                  <span className="relative z-10 px-5 text-[15px] font-extrabold text-white">
                    {step.day}
                  </span>
                </div>

                {/* ILLUSTRATION */}

                <StepIllustration type={step.type} />

                {/* CONTENT */}

                <div className="mt-3">
                  <h3 className="text-[12px] font-extrabold leading-tight tracking-tight text-[#102b49] sm:text-[20px]">
                    {step.title}
                  </h3>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: 0.3 + index * 0.1,
                    }}
                    className="my-4 h-[5px] rounded-full bg-[#ff6900]"
                  />

                  <p className="text-[16px]  text-[#465970] sm:text-[15px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>

              {/* CONNECTING ARROW */}

              {index !== steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.15,
                  }}
                  className="absolute -right-[34px] top-[43%] z-20 hidden h-12 w-12 items-center justify-center rounded-full border-[3px] border-[#ff6900] bg-white text-[#ff6900] shadow-sm lg:flex"
                >
                  <FaChevronRight size={23} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
