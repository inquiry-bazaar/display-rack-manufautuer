
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Store,
  Wrench,
  Layers3,
  ShieldCheck,
  Star,
  MessageCircle,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

const WHATSAPP_NUMBER = "91XXXXXXXXXX";

const benefits = [
  {
    icon: Store,
    title: "Free site visit",
    subtitle: "& store layout",
  },
  {
    icon: Wrench,
    title: "Day or night",
    subtitle: "fitting (as per site)",
  },
  {
    icon: Layers3,
    title: "Matte black,",
    subtitle: "white or wood finish",
  },
  {
    icon: ShieldCheck,
    title: "Warranty &",
    subtitle: "GST invoice",
  },
];

const initialForm = {
  name: "",
  phone: "",
  area: "",
  size: "",
  storeType: "",
};

export default function GurugramHero() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello Arya Insulation Private Limited,

I want a supermarket rack quotation for my Gurugram store.

Name: ${form.name}
Mobile: ${form.phone}
Sector / Area: ${form.area}
Store Size: ${form.size || "Not specified"}
Store Type: ${form.storeType}

Please arrange a free site visit and share the rack layout and quotation.`;

    if (WHATSAPP_NUMBER === "91XXXXXXXXXX") {
      alert("Please configure your actual WhatsApp number in GurugramHero.jsx.");
      return;
    }

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      className="relative isolate min-h-[780px] overflow-hidden bg-[#071D2D] text-white lg:min-h-[850px]"
    >
      {/* BACKGROUND IMAGE */}

      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/1.webp')",
        }}
      />

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061B2B] via-[#071D2B]/95 via-40% to-[#071D2B]/20" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071D2B]/40 via-transparent to-black/10" />

      {/* ORANGE LIGHT EFFECT */}

      <div className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-[#F58220]/10 blur-[130px]" />

      <div className="relative mx-auto grid min-h-[780px] max-w-[1800px] grid-cols-1 items-center gap-12 px-5 py-12 sm:px-8 lg:min-h-[850px] lg:grid-cols-[1.2fr_0.9fr] lg:gap-10 lg:px-12 lg:py-14">

        {/* LEFT CONTENT */}

        <div className="relative z-10 max-w-[850px]">

          {/* LOCATION BADGE */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-md sm:px-5 sm:py-3"
          >
            <MapPin
              size={22}
              className="shrink-0 fill-[#FF8700] text-[#FF8700]"
            />

            <span className="text-sm font-bold text-white sm:text-sm">
              Serving Gurugram (Gurgaon), Sohna & Manesar
            </span>
          </motion.div>

          {/* MAIN HEADING */}

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-[780px] text-[23px] font-extrabold leading-[1.04] tracking-[-2px] sm:text-5xl "
          >
            Supermarket Rack
            <br />

            Manufacturer in
            <br />

            <span className="relative inline-block text-[#FF8700]">
              Gurugram (Gurgaon)

              {/* ORANGE UNDERLINE */}

              <svg
                viewBox="0 0 350 20"
                className="absolute -bottom-5 left-0 w-[75%]"
                fill="none"
              >
                <path
                  d="M5 12C95 1 190 2 340 12"
                  stroke="#FF8700"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          {/* DESCRIPTION */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-9 max-w-[670px] text-base leading-[1.65] text-white/85 sm:text-xl "
          >
            Premium-finish racks for society stores, supermarkets
            and quick-commerce dark stores, made in our own
            factory and fitted by our own team.
          </motion.p>

          {/* BENEFITS */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 grid grid-cols-2 gap-y-7 sm:grid-cols-4 sm:gap-0"
          >
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`flex flex-col items-center px-2 text-center sm:px-3 lg:px-4 ${
                    index !== 0
                      ? "sm:border-l sm:border-white/25"
                      : ""
                  }`}
                >
                  <div className="mb-3 flex h-[76px] w-[76px] items-center justify-center rounded-[19px] border border-white/20 bg-white/[0.07] backdrop-blur-sm">
                    <Icon
                      size={49}
                      strokeWidth={2.3}
                      className="text-[#FF8700]"
                    />
                  </div>

                  <p className="text-sm font-bold leading-[1.4] text-white sm:text-base ">
                    {item.title}
                    <br />
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </motion.div>

          {/* TRUST BAR */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-9 flex flex-col items-center justify-center gap-4 rounded-[20px] border border-white/70 bg-white/[0.08] px-4 py-4 backdrop-blur-md sm:flex-row sm:gap-7 lg:mt-12"
          >
            <div className="flex items-center gap-3">
              <Star
                size={33}
                fill="#FF8700"
                className="shrink-0 text-[#FF8700]"
              />

              <span className="text-sm font-bold sm:text-base">
                4.4+ from Google reviews
              </span>
            </div>

            <div className="hidden h-12 w-px bg-white/40 sm:block" />

            <div className="flex items-center gap-3">
              <Store
                size={33}
                className="shrink-0 text-[#FF8700]"
              />

              <span className="text-sm font-bold sm:text-base">
                Many Gurugram stores fitted
              </span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT ENQUIRY FORM */}

        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-20 mx-auto w-full max-w-[620px] overflow-hidden rounded-[27px] border-2 border-white/90 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.3)] lg:ml-auto"
        >

          {/* FORM HEADER */}

          <div className="relative overflow-hidden bg-[#08243A] px-6 py-6 sm:px-8 sm:py-7">

            {/* Orange corner */}

            <div className="absolute -right-12 -top-20 h-44 w-44 rounded-full border-[28px] border-[#FF7900]" />

            <div className="relative z-10 flex items-center gap-4">
              <Store
                size={57}
                strokeWidth={2.2}
                className="shrink-0 text-[#FF7900]"
              />

              <div>
                <h2 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-[34px]">
                  Plan My Gurugram Store
                </h2>

                <p className="mt-2 text-sm text-white/90 sm:text-lg">
                  Get a free layout and fixed quote within 12 hours.
                </p>
              </div>
            </div>
          </div>

          {/* FORM BODY */}

          <form
            onSubmit={handleSubmit}
            className="space-y-4 px-6 py-6 sm:space-y-5 sm:px-8 sm:py-7"
          >

            {/* NAME */}

            <div>
              <label
                htmlFor="hero-name"
                className="mb-2 block text-sm font-bold text-[#10213E]"
              >
                Name <span className="text-red-500">*</span>
              </label>

              <input
                id="hero-name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
                className="h-[47px] w-full rounded-[13px] border border-[#CBD5E1] bg-white px-4 text-sm text-[#10213E] outline-none transition-all placeholder:text-gray-500 focus:border-[#FF7900] focus:ring-2 focus:ring-[#FF7900]/15"
              />
            </div>

            {/* MOBILE */}

            <div>
              <label
                htmlFor="hero-phone"
                className="mb-2 block text-sm font-bold text-[#10213E]"
              >
                Mobile / WhatsApp number{" "}
                <span className="text-red-500">*</span>
              </label>

              <input
                id="hero-phone"
                name="phone"
                type="tel"
                placeholder="Enter number"
                value={form.phone}
                onChange={handleChange}
                required
                pattern="[0-9+\-\s]{10,15}"
                autoComplete="tel"
                className="h-[47px] w-full rounded-[13px] border border-[#CBD5E1] bg-white px-4 text-sm text-[#10213E] outline-none transition-all placeholder:text-gray-500 focus:border-[#FF7900] focus:ring-2 focus:ring-[#FF7900]/15"
              />
            </div>

            {/* AREA + SIZE */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="hero-area"
                  className="mb-2 block text-sm font-bold text-[#10213E]"
                >
                  Sector / area{" "}
                  <span className="text-red-500">*</span>
                </label>

                <input
                  id="hero-area"
                  name="area"
                  type="text"
                  placeholder="e.g. Sector 47"
                  value={form.area}
                  onChange={handleChange}
                  required
                  className="h-[47px] w-full rounded-[13px] border border-[#CBD5E1] bg-white px-4 text-sm text-[#10213E] outline-none transition-all placeholder:text-gray-500 focus:border-[#FF7900] focus:ring-2 focus:ring-[#FF7900]/15"
                />
              </div>

              <div>
                <label
                  htmlFor="hero-size"
                  className="mb-2 block text-sm font-bold text-[#10213E]"
                >
                  Store size (sq ft)
                </label>

                <input
                  id="hero-size"
                  name="size"
                  type="number"
                  min="1"
                  placeholder="e.g. 500"
                  value={form.size}
                  onChange={handleChange}
                  className="h-[47px] w-full rounded-[13px] border border-[#CBD5E1] bg-white px-4 text-sm text-[#10213E] outline-none transition-all placeholder:text-gray-500 focus:border-[#FF7900] focus:ring-2 focus:ring-[#FF7900]/15"
                />
              </div>

            </div>

            {/* STORE TYPE */}

            <div>
              <label
                htmlFor="hero-store-type"
                className="mb-2 block text-sm font-bold text-[#10213E]"
              >
                Type of store{" "}
                <span className="text-red-500">*</span>
              </label>

              <select
                id="hero-store-type"
                name="storeType"
                value={form.storeType}
                onChange={handleChange}
                required
                className="h-[48px] w-full rounded-[13px] border border-[#CBD5E1] bg-white px-4 text-sm text-[#10213E] outline-none transition-all focus:border-[#FF7900] focus:ring-2 focus:ring-[#FF7900]/15"
              >
                <option value="">Select store type</option>
                <option value="Society Kirana / Grocery">
                  Society kirana / grocery
                </option>
                <option value="Supermarket">
                  Supermarket
                </option>
                <option value="Quick Commerce Dark Store">
                  Quick-commerce dark store
                </option>
                <option value="Premium / Gourmet Store">
                  Premium / gourmet store
                </option>
                <option value="Medical / Pharmacy">
                  Medical / pharmacy
                </option>
                <option value="Mobile / Electronics">
                  Mobile / electronics
                </option>
                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            {/* SUBMIT BUTTON */}

            <button
              type="submit"
              className="group flex min-h-[68px] w-full items-center justify-center gap-3 rounded-[15px] bg-gradient-to-r from-[#FF6500] to-[#FF7900] px-4 py-4 text-center text-base font-extrabold text-white shadow-lg shadow-orange-500/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/25 sm:text-xl"
            >
              <MessageCircle
                size={32}
                className="shrink-0"
              />

              Get My Free Layout & Quote

              <ArrowRight
                size={24}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-2"
              />
            </button>

            {/* PRIVACY NOTE */}

            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 pt-1 text-center text-xs font-semibold text-[#10213E] sm:text-sm">
              <ShieldCheck
                size={25}
                className="shrink-0 text-[#FF7900]"
              />

              <span>No charges for the site visit</span>

              <span className="hidden text-gray-300 sm:inline">
                |
              </span>

              <span>We never share your number.</span>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
