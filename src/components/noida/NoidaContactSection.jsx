"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTag,
  FaWhatsapp,
  FaArrowRight,
  FaLandmark,
  FaCity,
  FaBuilding,
  FaClock,
} from "react-icons/fa";

const cities = [
  {
    name: "Noida",
    icon: FaBuilding,
    href: "/supermarket-racks-in-noida",
    active: true,
  },
  {
    name: "Delhi",
    icon: FaLandmark,
    href: "/supermarket-racks-in-delhi",
  },
  {
    name: "Ghaziabad",
    icon: FaLandmark,
    href: "/supermarket-racks-in-ghaziabad",
  },
  {
    name: "Gurugram",
    icon: FaCity,
    href: "/supermarket-racks-in-gurugram",
  },
  {
    name: "Faridabad",
    icon: FaBuilding,
    href: "/supermarket-racks-in-faridabad",
  },
];

const contactDetails = [
  {
    label: "Address",
    value: "Delhi NCR, India",
    icon: FaMapMarkerAlt,
  },
  {
    label: "Phone",
    value: "+91 85879 01795",
    href: "tel:+918587901795",
    icon: FaPhoneAlt,
  },
  {
    label: "Email",
    value: "aryaindustry36@gmail.com",
    href: "mailto:aryaindustry36@gmail.com",
    icon: FaEnvelope,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function NoidaContactSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#071a30] px-4 py-6 text-white sm:px-7 sm:py-12">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 -top-64 h-[500px] w-[700px] rounded-full border-[35px] border-[#122a45]/70" />
        <div className="absolute -left-60 top-[-250px] h-[400px] w-[600px] rotate-[-35deg] rounded-full bg-[#19334e]/50 blur-[2px]" />
        <div className="absolute -bottom-80 -right-40 h-[550px] w-[650px] rounded-full border-[40px] border-[#19334e]/60" />
        <div className="absolute right-[-10%] top-0 h-[5px] w-[40%] rotate-[-12deg] rounded-full bg-[#ff6900]" />
        <div className="absolute bottom-[220px] left-[-5%] h-[48px] w-[45%] rotate-[7deg] rounded-[50%] bg-gradient-to-r from-[#ff6900] via-[#ff8500] to-transparent" />
        <div className="absolute bottom-[210px] left-0 h-[1px] w-[43%] bg-[#ff8b35]/70" />
      </div>

      <div className="mx-auto max-w-[1650px]">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.13 },
              },
            }}
            className="relative z-10"
          >
            <motion.h2
              variants={fadeUp}
              className="text-[38px] font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl "
            >
              Opening a Shop in Noida?
              <br />
              Lock Your{" "}
              <span className="relative inline-block text-[#ff760d]">
                Rack Price Today
                <span className="absolute -bottom-2 left-0 h-[5px] w-full rounded-full bg-gradient-to-r from-[#ff6900] to-transparent" />
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-9 max-w-[700px] text-lg leading-[1.65] text-[#d6dfeb] sm:text-lg "
            >
              Book a free site visit, pick a package, and we’ll have your racks
              fitted before opening day.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="/contact-us"
                className="group flex min-h-[68px] items-center justify-center gap-4 rounded-[20px] bg-[#ff6900] px-7 py-4 text-base font-extrabold text-white shadow-[0_10px_30px_rgba(255,105,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff7b19] hover:shadow-[0_15px_35px_rgba(255,105,0,0.3)] sm:text-base"
              >
                <FaTag className="text-2xl transition-transform group-hover:rotate-12" />
                Get My Package Price
                <FaArrowRight className="ml-1 transition-transform group-hover:translate-x-2" />
              </a>

              <a
                href="https://wa.me/918587901795"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[68px] items-center justify-center gap-3 rounded-[20px] border-[1.5px] border-white/90 bg-white/[0.03] px-6 py-4 text-base font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366] hover:bg-[#25D366] sm:text-base"
              >
                <FaWhatsapp className="text-[31px]" />
                Get Packages on WhatsApp
                <FaArrowRight className="transition-transform group-hover:translate-x-2" />
              </a>
            </motion.div>

            <div className="relative mt-10 hidden h-[115px] overflow-hidden lg:block">
              <svg
                viewBox="0 0 750 125"
                fill="none"
                className="absolute bottom-0 left-0 w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="#45617e" strokeWidth="1.5" opacity=".8">
                  <path d="M0 115H750" />
                  <path d="M20 115V76H47V115 M25 76V63H42V76 M29 63V56H38V63" />
                  <path d="M55 115V48H82V115 M60 48V35H77V48 M64 35V25H73V35" />
                  <path d="M90 115V73H117V115 M96 73V59H111V73" />
                  <path d="M132 115V31H160V115 M138 31V20H154V31 M142 20V12H150V20" />
                  <path d="M175 115V64H204V115 M182 64V50H197V64" />
                  <path d="M225 115V12H290V115 M235 12V3H280V12 M240 29H275 M240 45H275 M240 62H275 M240 79H275" />
                  <path d="M305 115V70H333V115 M310 70V56H328V70" />
                  <path d="M348 115V43H380V115 M353 43V28H375V43 M358 28V20H370V28" />
                  <path d="M395 115V75H425V115 M402 75V60H418V75" />
                  <path d="M443 115V53H471V115 M448 53V40H466V53" />
                  <path d="M490 115V24H522V115 M497 24V12H515V24" />
                  <path d="M535 115V68H562V115 M541 68V54H556V68" />
                  <path d="M578 115V83H606V115 M585 83V70H599V83" />
                  <path d="M620 115V52H649V115 M626 52V40H643V52" />
                  <path d="M662 115V74H691V115 M668 74V62H685V74" />
                  <path d="M705 115V88H734V115" />
                  <path d="M228 115V64H286V115 M235 64V40H279V64 M240 40L257 15L275 40 M246 115V75H268V115 M257 75V115" />
                </g>
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[30px] bg-gradient-to-br from-white to-[#f0f1f7] p-5 text-[#102443] shadow-[0_25px_65px_rgba(0,0,0,0.2)] sm:p-7 lg:p-8"
          >
            <div className="mb-6 flex items-center justify-center gap-4 sm:justify-start">
              <div className="relative flex h-[55px] w-[80px] shrink-0 flex-col justify-center gap-1">
                <div className="h-[11px] w-[60px] -skew-x-[35deg] rounded-sm bg-[#ff6900]" />
                <div className="ml-2 h-[11px] w-[60px] -skew-x-[35deg] rounded-sm bg-[#ff6900]" />
                <div className="ml-4 h-[11px] w-[48px] -skew-x-[35deg] rounded-sm bg-[#ff6900]" />
              </div>
              <div>
                <h3 className="text-[23px] font-black leading-tight tracking-tight sm:text-[30px]">
                  ARYA INSULATION
                </h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="h-[2px] flex-1 bg-[#ff6900]" />
                  <p className="text-[11px] font-bold tracking-[4px]">
                    PRIVATE LIMITED
                  </p>
                  <span className="h-[2px] flex-1 bg-[#ff6900]" />
                </div>
              </div>
            </div>

            <div className="divide-y divide-[#dce0e7]">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                const value = item.href ? (
                  <a
                    href={item.href}
                    className="break-words text-sm font-medium leading-relaxed hover:text-[#ff6900] sm:text-base lg:text-lg"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="break-words text-sm font-medium leading-relaxed sm:text-base lg:text-lg">
                    {item.value}
                  </span>
                );

                return (
                  <div
                    key={item.label}
                    className="grid grid-cols-[36px_90px_1fr] items-center gap-3 py-3 sm:grid-cols-[48px_165px_1fr] sm:gap-4"
                  >
                    <Icon className="text-xl text-[#ff6900] sm:text-[25px]" />
                    <span className="text-sm font-extrabold sm:text-lg">
                      {item.label}
                    </span>
                    {value}
                  </div>
                );
              })}
            </div>

            <div className="group relative mt-5 h-[190px] overflow-hidden rounded-[20px] bg-[#e7edf0] sm:h-[205px]">
              <iframe
                title="Arya Insulation Delhi NCR location map"
                src="https://maps.google.com/maps?q=28.620564%2C76.995915&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full border-0 grayscale-[15%] transition-all duration-500 group-hover:grayscale-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=28.620564%2C76.995915"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-1/2 top-4 -translate-x-1/2 rounded-xl bg-white px-4 py-2.5 text-center text-sm font-extrabold leading-tight text-[#102443] shadow-lg sm:text-base"
              >
                Arya Insulation
                <br />
                Delhi NCR, India
              </a>
              <div className="pointer-events-none absolute left-1/2 top-[48%] -translate-x-1/2 text-[#e74736] drop-shadow-md">
                <FaMapMarkerAlt className="text-[38px]" />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-[#53647b]">
              <FaClock className="text-[#ff6900]" />
              <span>Mon–Sat, 9:30 am – 7 pm</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mt-14 lg:mt-16"
        >
          <div className="flex items-center justify-center gap-5">
            <span className="hidden h-[2px] max-w-[240px] flex-1 bg-gradient-to-r from-transparent to-white/70 sm:block" />
            <h3 className="flex items-center gap-3 text-center text-base font-extrabold text-white sm:text-2xl ">
              <FaMapMarkerAlt className="shrink-0 text-[35px] text-[#ff6900] sm:text-[32px]" />
              <span>Supermarket Racks in Nearby Cities</span>
            </h3>
            <span className="hidden h-[2px] max-w-[240px] flex-1 bg-gradient-to-l from-transparent to-white/70 sm:block" />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            {cities.map((city) => {
              const Icon = city.icon;

              return (
                <motion.a
                  key={city.name}
                  href={city.href}
                  aria-current={city.active ? "page" : undefined}
                  whileHover={{ y: -5, scale: 1.025 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex min-h-[72px] min-w-[195px] items-center justify-center gap-4 rounded-full border-2 px-7 py-3 transition-all duration-300 ${
                    city.active
                      ? "border-[#ff6900] bg-[#ff6900]/10 text-white shadow-[0_0_25px_rgba(255,105,0,0.12)]"
                      : "border-white/90 bg-white/[0.02] text-white hover:border-[#ff6900] hover:bg-white/[0.08]"
                  }`}
                >
                  <Icon
                    className={`text-[34px] ${
                      city.active ? "text-[#ff790d]" : "text-white"
                    }`}
                  />
                  <span className="text-xs font-extrabold sm:text-base">
                    {city.name}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}