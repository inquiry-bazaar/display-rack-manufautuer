
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  MapPin,
  Check,
  Star,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Store,
  Clock3,
} from "lucide-react";
import categories from "@/utils/data";

const benefits = [
  "Free site visit and layout in Delhi",
  "Steel thickness written on the quote",
  "Fitted by our own team, not contractors",
  "[X-year] warranty and GST invoice",
];

const ease = [0.22, 1, 0.36, 1];

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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
      ease,
    },
  },
};

const inputClass =
  "h-[50px] w-full rounded-lg border border-[#DCE2E9] bg-[#F8FAFC] px-4 text-[14px] text-[#172337] placeholder:text-[#9AA3AF] outline-none transition-all duration-200 hover:border-[#AEB9C8] focus:border-[#F58220] focus:bg-white focus:ring-[3px] focus:ring-[#F58220]/15";

export default function DelhiHero({ onSubmitLead }) {
  const reduceMotion = useReducedMotion();

  const [submitting, setSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({
    type: "",
    message: "",
  });

  const animationProps = reduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.15 },
      };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!onSubmitLead) {
      setFormStatus({
        type: "error",
        message: "Enquiry form is not connected yet.",
      });
      return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      setSubmitting(true);
      setFormStatus({ type: "", message: "" });

      await onSubmitLead(data);

      form.reset();

      setFormStatus({
        type: "success",
        message: "Thank you! Your enquiry has been submitted successfully.",
      });
    } catch (error) {
      console.error("Enquiry submission failed:", error);

      setFormStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#0F1B2D] text-white">

      {/* Background Image */}
      <motion.div
        initial={reduceMotion ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/4.webp')",
        }}
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 -z-10 bg-[#0F1B2D]/80" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071729]/65 via-[#0F1B2D]/45 to-[#0F1B2D]/65" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071729]/25 via-transparent to-transparent" />

      {/* Decorative Orange Accent */}
      <div className="absolute -right-40 -top-48 -z-10 h-[450px] w-[450px] rounded-full bg-[#F58220]/10 blur-[100px]" />

      {/* Main Container */}
      <div className="mx-auto max-w-[1440px] px-5 py-6 sm:px-8 sm:py-12">

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14 xl:gap-20">

          {/* ================= LEFT CONTENT ================= */}

          <motion.div
            variants={staggerContainer}
            {...animationProps}
            className="flex min-w-0 flex-col items-start"
          >

            {/* Location Badge */}
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-sm backdrop-blur-md">
                <MapPin
                  size={16}
                  className="text-[#F58220]"
                  fill="currentColor"
                />
                Serving all of Delhi
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="mt-7 max-w-[760px] text-[37px] font-extrabold leading-[1.1] tracking-[-1.7px] sm:text-[48px] lg:text-[56px] xl:text-[62px]"
            >
              Supermarket Rack Manufacturer in{" "}
              <span className="relative inline-block whitespace-nowrap text-[#F58220]">
                Delhi
                <span className="absolute -bottom-1 left-0 h-[4px] w-full rounded-full bg-[#F58220]" />
              </span>
            </motion.h1>

            {/* Main Highlight */}
            <motion.div
              variants={fadeUp}
              className="mt-7 max-w-[680px]"
            >
              <p className="text-[17px] font-semibold leading-[1.65] text-white sm:text-[19px]">
                Get a free rack layout for your Delhi shop within{" "}
                <span className="rounded bg-[#F58220] px-1.5 py-0.5 text-[#0F1B2D]">
                  24 hours
                </span>
                , then racks delivered and fitted in{" "}
                <span className="font-bold text-[#F58220]">
                  7 working days.
                </span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-[650px] text-[14px] leading-[1.9] text-[#C7D0DD] sm:text-[15px]"
            >
              Arya Insulation makes supermarket racks in its own
              factory and fits them across Delhi, from Rohini and
              Pitampura to Dwarka, Laxmi Nagar and Saket. You see
              the layout and the full price before you pay anything.
            </motion.p>

            {/* Benefits */}
            <motion.div
              variants={staggerContainer}
              className="mt-8 grid w-full grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {benefits.map((item, index) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  whileHover={
                    reduceMotion ? {} : { y: -3 }
                  }
                  className="group flex min-h-[58px] items-center gap-3 rounded-lg border border-white/15 bg-white/[0.055] px-3.5 py-3 backdrop-blur-sm transition-all duration-300 hover:border-[#F58220]/70 hover:bg-white/[0.10]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F58220] text-[#0F1B2D]">
                    <Check size={16} strokeWidth={3} />
                  </span>

                  <span className="text-[13px] font-medium leading-relaxed text-[#F4F6F9] sm:text-[13.5px]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Rating */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-white/15 pt-6"
            >
              <div className="flex items-center gap-1 text-[#F58220]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={19}
                    fill="currentColor"
                    strokeWidth={1}
                  />
                ))}
              </div>

              <div className="hidden h-6 w-px bg-white/30 sm:block" />

              <p className="text-[13px] font-medium text-[#E0E6EF]">
                <span className="font-bold text-white">
                  4.6
                </span>{" "}
                from 5 Google reviews
                <span className="mx-2 text-[#F58220]">•</span>
                <span className="font-bold text-white">
                  200+
                </span>{" "}
                Delhi stores fitted
              </p>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT FORM ================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: 45, y: 15 }
            }
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.85,
              delay: 0.15,
              ease,
            }}
            className="relative mx-auto w-full max-w-[520px] lg:ml-auto"
          >

            {/* Orange Top Accent */}
            <div className="absolute -right-2 -top-2 h-24 w-24 rounded-tr-2xl border-r-[5px] border-t-[5px] border-[#F58220]" />

            {/* Form Card */}
            <div className="relative rounded-2xl border border-white/70 bg-white p-5 text-[#172337] shadow-[0_25px_80px_rgba(0,0,0,0.3)] sm:p-7 lg:p-8">

              {/* Form Header */}
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-xl bg-[#FFF1E5] text-[#F58220]">
                  <Store size={27} strokeWidth={1.8} />
                </div>

                <div>
                  <h2 className="text-[21px] font-extrabold leading-tight tracking-tight sm:text-[24px]">
                    Get Your Free Rack Layout
                  </h2>

                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#697586]">
                    Takes 30 seconds. We call back within{" "}
                    <span className="font-bold text-[#F58220]">
                      2 hours.
                    </span>
                  </p>
                </div>
              </div>

              {/* Small Trust Strip */}
              <div className="mb-6 flex items-center gap-2 rounded-lg bg-[#F8FAFC] px-3 py-2.5 text-[12px] font-medium text-[#5D6979]">
                <Clock3 size={16} className="shrink-0 text-[#F58220]" />
                Free consultation for Delhi retail businesses
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-[17px]"
              >

                {/* Name */}
                <div>
                  <label
                    htmlFor="delhi-name"
                    className="mb-2 block text-[13px] font-bold text-[#263447]"
                  >
                    Your Name <span className="text-[#F58220]">*</span>
                  </label>

                  <input
                    id="delhi-name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="delhi-phone"
                    className="mb-2 block text-[13px] font-bold text-[#263447]"
                  >
                    Mobile / WhatsApp Number{" "}
                    <span className="text-[#F58220]">*</span>
                  </label>

                  <div className="flex h-[50px] overflow-hidden rounded-lg border border-[#DCE2E9] bg-[#F8FAFC] transition-all focus-within:border-[#F58220] focus-within:ring-[3px] focus-within:ring-[#F58220]/15">
                    <span className="flex shrink-0 items-center border-r border-[#DCE2E9] px-3 text-sm font-semibold text-[#536174]">
                      +91
                    </span>

                    <input
                      id="delhi-phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter 10-digit number"
                      autoComplete="tel-national"
                      inputMode="numeric"
                      pattern="[6-9][0-9]{9}"
                      maxLength={10}
                      required
                      className="min-w-0 flex-1 bg-transparent px-3 text-[14px] text-[#172337] outline-none placeholder:text-[#9AA3AF]"
                    />
                  </div>
                </div>

                {/* Area + Size */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="delhi-area"
                      className="mb-2 block text-[13px] font-bold text-[#263447]"
                    >
                      Area in Delhi{" "}
                      <span className="text-[#F58220]">*</span>
                    </label>

                    <input
                      id="delhi-area"
                      name="area"
                      type="text"
                      placeholder="e.g. Rohini"
                      autoComplete="address-level2"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="delhi-size"
                      className="mb-2 block text-[13px] font-bold text-[#263447]"
                    >
                      Shop Size
                      <span className="ml-1 font-normal text-[#8993A2]">
                        (sq ft)
                      </span>
                    </label>

                    <input
                      id="delhi-size"
                      name="shopSize"
                      type="number"
                      min="1"
                      placeholder="e.g. 500"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Store Type */}
                <div>
                  <label
                    htmlFor="delhi-store-type"
                    className="mb-2 block text-[13px] font-bold text-[#263447]"
                  >
                    Type of Store{" "}
                    <span className="text-[#F58220]">*</span>
                  </label>

                  <select
                    id="delhi-store-type"
                    name="storeType"
                    required
                    defaultValue=""
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled>
                      Select a store category
                    </option>
                    {categories.map((category) => (
                      <option key={category.slug} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Status Message */}
                {formStatus.message && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`rounded-lg px-3 py-3 text-[13px] font-medium ${
                      formStatus.type === "success"
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={
                    reduceMotion ? {} : { y: -2 }
                  }
                  whileTap={
                    reduceMotion ? {} : { scale: 0.98 }
                  }
                  className="group mt-1 flex min-h-[54px] w-full items-center justify-center gap-3 rounded-lg bg-[#F58220] px-4 text-[15px] font-extrabold text-[#0F1B2D] shadow-[0_8px_20px_rgba(245,130,32,0.20)] transition-all duration-300 hover:bg-[#FF963B] hover:shadow-[0_12px_25px_rgba(245,130,32,0.30)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting
                    ? "Submitting Your Enquiry..."
                    : "Get My Free Layout & Quote"}

                  {!submitting && (
                    <ArrowRight
                      size={20}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  )}
                </motion.button>

                {/* Privacy */}
                <div className="flex items-start justify-center gap-2 text-center text-[11.5px] leading-relaxed text-[#788393]">
                  <ShieldCheck
                    size={16}
                    className="mt-0.5 shrink-0 text-[#F58220]"
                  />
                  No advance for the site visit · We never share your number
                </div>
              </form>

              {/* WhatsApp */}
              <div className="mt-6 border-t border-[#EDF0F3] pt-5">
                <a
                  href="https://wa.me/918587901795"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2.5 text-[13px] font-bold text-[#263447] transition-colors hover:text-[#F58220]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8F8EE] text-[#16A34A] transition-transform group-hover:scale-110">
                    <MessageCircle size={19} />
                  </span>

                  Prefer WhatsApp? Chat with us

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
