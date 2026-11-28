
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaTag,
  FaTruck,
  FaShieldAlt,
  FaCalendarAlt,
  FaStore,
  FaArrowRight,
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const features = [
  {
    icon: FaTag,
    title: "Fixed-Price",
    subtitle: "Packages",
  },
  {
    icon: FaTruck,
    title: "On-Time",
    subtitle: "Installation",
  },
  {
    icon: FaShieldAlt,
    title: "Warranty",
    subtitle: "with GST Invoice",
  },
];

const shopTypes = [
  "Society kirana / grocery",
  "Mini supermarket",
  "Full supermarket",
  "Pharmacy / medical store",
  "Mobile accessories shop",
  "Other retail shop",
];

export default function NoidaHero() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    sector: "",
    openingDate: "",
    shopType: "Society kirana / grocery",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello Arya Insulation,

I want a supermarket rack package.

Name: ${form.name}
Mobile: ${form.mobile}
Sector / Society: ${form.sector}
Planned Opening: ${form.openingDate}
Type of Shop: ${form.shopType}

Please share the package price.`;

    const whatsappNumber = "91XXXXXXXXXX";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#071d30] ">

      {/* ======================================
          BACKGROUND SUPERMARKET IMAGE
      ====================================== */}

      <div
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage: "url('/why2.webp')",
        }}
      />

      {/* Dark overlay for image */}

      <div className="absolute inset-0 -z-20 bg-black/15" />

      {/* ======================================
          NAVY CURVED BACKGROUND
      ====================================== */}

      <div
        className="absolute inset-y-0 left-0 z-0 hidden w-[52%] bg-gradient-to-br from-[#0b263c] via-[#071c2d] to-[#102e40] lg:block"
        style={{
          clipPath:
            "polygon(0 0, 77% 0, 85% 5%, 91% 10%, 94% 16%, 94% 23%, 91% 32%, 87% 43%, 81% 58%, 75% 73%, 68% 87%, 62% 100%, 0 100%)",
        }}
      />



      {/* Mobile background */}

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#071d30]/95 via-[#071d30]/90 to-[#071d30]/95 lg:hidden" />

      {/* ======================================
          MAIN CONTENT
      ====================================== */}

      <div className="relative z-10 mx-auto grid min-h-[850px] max-w-[1800px] items-center gap-12 px-5 py-6 sm:px-8 lg:min-h-[680px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 lg:px-16 lg:py-10">

        {/* ======================================
            LEFT CONTENT
        ====================================== */}

        <motion.div
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-[760px] text-white"
        >

          {/* LOCATION BADGE */}

          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#ff8a00] px-4 py-2">

            <FaMapMarkerAlt className="text-[9px] md:text-[17px] text-[#ff8700]" />

            <span className="text-xs font-bold tracking-wide sm:text-sm">
              Noida · Greater Noida · Noida Extension
            </span>

          </div>

          {/* HEADING */}

          <h1 className="text-[43px] font-extrabold leading-[1.08] tracking-tight sm:text-6xl  ">

            Supermarket Rack
            <br />

            Manufacturer in
            <br />

            <span className="relative inline-block text-[#ff7000]">
              Noida

              <span className="absolute -bottom-3 left-1 h-[7px] w-[95%] -rotate-2 rounded-full bg-[#ff6900]" />
            </span>

          </h1>

          {/* DESCRIPTION */}

          <p className="mt-9 max-w-[570px] text-lg leading-[1.55] text-[#e1e8ef] sm:text-base ">
            Fixed-price rack packages for new shops,
            fitted before your opening day.
          </p>

          {/* FEATURES */}

          <div className="mt-9 grid grid-cols-4 divide-x divide-white/30">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.35 + index * 0.15,
                  }}
                  className="flex flex-col items-center px-2 text-center sm:px-0"
                >

                  <Icon className="mb-3 text-[18px] text-[#ff7900] sm:text-[28px]" />

                  <h3 className="text-sm font-extrabold leading-tight sm:text-base">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-xs font-bold leading-tight text-white sm:text-sm">
                    {feature.subtitle}
                  </p>

                </motion.div>
              );
            })}

          </div>

          {/* CTA */}

          <motion.a
            href="#package-enquiry"
            whileHover={{ scale: 1.035, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex  items-center justify-center gap-3 rounded-[22px] bg-[#ff6900] px-7 py-4 text-lg font-extrabold text-white shadow-[0_12px_30px_rgba(255,105,0,0.22)] transition-colors hover:bg-[#ff7d13] sm:px-8 sm:text-base"
          >

            <FaCalendarAlt className="text-[10px] md:text-[20px]" />

            Book a Free Site Visit

            <FaArrowRight className="ml-1 text-xl" />

          </motion.a>

        </motion.div>

        {/* ======================================
            RIGHT ENQUIRY FORM
        ====================================== */}

        <motion.div
          id="package-enquiry"
          initial={{ opacity: 0, x: 55, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-20 mx-auto w-full max-w-[550px] rounded-[27px] bg-gradient-to-br from-white to-[#f4f4f7] p-6 text-[#101f32] shadow-[0_25px_70px_rgba(0,0,0,0.28)] sm:p-8 lg:ml-auto lg:mr-0 lg:p-8"
        >

          {/* FORM HEADING */}

          <div className="mb-6 flex items-center gap-5">

            <FaStore className="shrink-0 text-[17px] text-[#ff6900] sm:text-[55px]" />

            <div>
              <h2 className="text-[25px] font-extrabold leading-[1.12] tracking-tight sm:text-[21px]">
                Get a Rack Package
                <br />
                for My Shop
              </h2>

              <div className="mt-2 h-[5px] w-[65px] rounded-full bg-[#ff6900]" />
            </div>

          </div>

          {/* FORM */}

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* NAME */}

            <div>
              <label className="mb-2 block text-[9px] sm:text-sm font-bold ">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder=""
                required
                className="py-2 w-full rounded-[14px] border-[1.5px] border-[#d4d7dc] bg-white px-4 text-base outline-none transition-all focus:border-[#ff6900] focus:ring-2 focus:ring-[#ff6900]/10"
              />
            </div>

            {/* MOBILE */}

            <div>
              <label className="mb-2 block ttext-[9px] sm:text-sm font-bold ">
                Mobile / WhatsApp number
              </label>

              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder=""
                pattern="[0-9+\-\s]{10,15}"
                required
                className="py-2 w-full rounded-[14px] border-[1.5px] border-[#d4d7dc] bg-white px-4 text-base outline-none transition-all focus:border-[#ff6900] focus:ring-2 focus:ring-[#ff6900]/10"
              />
            </div>

            {/* SECTOR AND DATE */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              <div>
                <label className="mb-2 block  font-bold text-[9px] sm:text-sm ">
                  Sector / Society
                </label>

                <input
                  type="text"
                  name="sector"
                  value={form.sector}
                  onChange={handleChange}
                  required
                  className="py-2 w-full min-w-0 rounded-[14px] border-[1.5px] border-[#d4d7dc] bg-white px-3 text-base outline-none transition-all focus:border-[#ff6900] focus:ring-2 focus:ring-[#ff6900]/10"
                />
              </div>

              <div>
                <label className="mb-2 block  font-bold text-[9px] sm:text-sm">
                  Planned opening
                </label>

                <input
                  type="date"
                  name="openingDate"
                  value={form.openingDate}
                  onChange={handleChange}
                  required
                  className="py-2 w-full min-w-0 rounded-[14px] border-[1.5px] border-[#d4d7dc] bg-white px-3 text-sm outline-none transition-all focus:border-[#ff6900] focus:ring-2 focus:ring-[#ff6900]/10"
                />
              </div>

            </div>

            {/* SHOP TYPE */}

            <div>
              <label className="mb-2 block text-[15px] font-bold text-[9px] sm:text-sm">
                Type of shop
              </label>

              <select
                name="shopType"
                value={form.shopType}
                onChange={handleChange}
                className="py-3 w-full appearance-auto rounded-[14px] border-[1.5px] border-[#d4d7dc] bg-white px-4 text-base outline-none transition-all focus:border-[#ff6900] focus:ring-2 focus:ring-[#ff6900]/10"
              >
                {shopTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* SUBMIT BUTTON */}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-3 flex py-2 w-full items-center justify-center gap-3 rounded-[18px] bg-[#ff6900] px-5 text-lg font-extrabold text-white shadow-[0_8px_20px_rgba(255,105,0,0.15)] transition-colors hover:bg-[#ff7b12] sm:text-xl"
            >
              Get My Package Price

              <FaArrowRight className="text-xl" />

            </motion.button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}
