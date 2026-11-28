
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaLayerGroup,
  FaWhatsapp,
  FaArrowRight,
  FaLightbulb,
  FaRegWindowMaximize,
} from "react-icons/fa";

const finishes = [
  {
    title: "Matte Black",
    image: "/finish/black.webp",
    type: "color",
    color: "#303030",
  },
  {
    title: "Signal White",
   image: "/finish/white.webp",
    type: "color",
    color: "#ffffff",
  },
  {
    title: "Light Grey",
    image: "/finish/grey.webp",
    type: "color",
    color: "#b3b7bb",
  },
 

  {
    title: "Branded Header Boards",
    image: "/finish/brand.webp",
    type: "brand",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
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

export default function PremiumFinishes() {
  const whatsappNumber = "91XXXXXXXXXX";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello, I want to see premium supermarket rack finish samples for my Gurugram store."
  )}`;

  return (
    <section className="relative isolate overflow-hidden bg-[#fcfcfd] px-4 py-12 sm:px-6 lg:px-10 lg:py-16">

      {/* Background decoration */}

      <div className="pointer-events-none absolute -right-32 top-0 -z-10 h-[450px] w-[450px] rounded-full bg-[#fff0e5] blur-[100px]" />

      <div className="mx-auto max-w-[1750px]">

        {/* ==================================
            TOP HERO AREA
        ================================== */}

        <div className="relative min-h-[430px] lg:min-h-[435px]">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full pt-2 lg:w-[55%]"
          >

            {/* Badge */}

            <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-[#ffede2] px-5 py-2">

              <FaLayerGroup className="text-[8px] md:text-[18px] text-[#f45d0a]" />

              <span className="text-xs font-extrabold tracking-wide text-[#102443] sm:text-s,m">
                FINISHES
              </span>

            </div>

            {/* Heading */}

            <h2 className="max-w-[800px] text-[18px] font-extrabold leading-[1.1] tracking-tight text-[#102443] sm:text-5xl">

              Premium Finishes for

              <span className="block text-[#e84b0b]">
                Gurugram Stores
              </span>

            </h2>

            {/* Underline */}

            <div className="mt-4 h-[7px] w-[105px] rounded-full bg-[#ff6900]" />

            {/* Description */}

            <p className="mt-6 max-w-[810px] text-sm leading-[1.65] text-[#354960] sm:text-lg ">
              Same strong MS steel, finished to match your store's interiors.
              Matte shades also hide fingerprints and glare under bright shop lighting.
            </p>

            {/* WhatsApp CTA */}

            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.035, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="mt-7 inline-flex min-h-[70px] items-center justify-center gap-3 rounded-[20px] bg-[#ff6500] px-6 py-4 text-base font-extrabold text-white shadow-[0_10px_25px_rgba(255,101,0,0.18)] transition-colors hover:bg-[#e95700] sm:px-8 sm:text-lg"
            >

              <FaWhatsapp className="text-[15px] md:text-[32px]" />

              <span>
                See Finish Samples on WhatsApp
              </span>

              <FaArrowRight className="ml-1 text-xl" />

            </motion.a>

          </motion.div>

          {/* RIGHT HERO IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mt-10 h-[280px] w-full overflow-hidden rounded-[55px_12px_55px_55px] border-l-[3px] border-[#ff6900] shadow-sm sm:h-[360px] lg:absolute lg:-right-10 lg:-top-16 lg:mt-0 lg:h-[450px] lg:w-[52%] lg:rounded-[100px_0_0_170px]"
            style={{
              clipPath: "polygon(12% 0, 100% 0, 100% 100%, 42% 100%, 0 48%, 4% 24%)",
            }}
          >

            <Image
              src="/why1.webp"
              alt="Premium wood laminate supermarket rack shelves with LED lighting"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover object-center"
            />

          </motion.div>

        </div>

        {/* ==================================
            FINISH CARDS
        ================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5 "
        >

          {finishes.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{
                y: -7,
                transition: { duration: 0.3 },
              }}
              className="group min-w-0 overflow-hidden rounded-[22px] border border-[#edf0f4] bg-white shadow-[0_9px_18px_rgba(15,35,55,0.12)] transition-shadow duration-300 hover:shadow-[0_16px_30px_rgba(15,35,55,0.16)]"
            >

              {/* Card Image */}

              <div className="relative h-[145px] overflow-hidden sm:h-[190px] xl:h-[253px]">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 17vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

              </div>

              {/* Card Label */}

              <div className="flex min-h-[78px] items-center gap-3 px-3 py-3 sm:min-h-[88px] sm:px-4">

                {/* Color Swatches */}

                {item.type === "color" && (
                  <div
                    className="h-9 w-9 shrink-0 rounded-[9px] border border-[#d3d9e0] shadow-sm sm:h-10 sm:w-10"
                    style={{
                      backgroundColor: item.color,
                    }}
                  />
                )}

                {/* Wood Icon */}

                {item.type === "wood" && (
                  <div className="h-9 w-9 shrink-0 rounded-lg bg-[#fff0e5] sm:h-10 sm:w-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #d78b37, #f6bd75, #b76b24)",
                    }}
                  />
                )}

                {/* LED Icon */}

                {item.type === "led" && (
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#ffede2] text-[#ff6900] sm:h-10 sm:w-10">
                    <FaLightbulb className="text-xl sm:text-2xl" />
                  </div>
                )}

                {/* Branding Icon */}

                {item.type === "brand" && (
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#ffede2] text-[#ff6900] sm:h-10 sm:w-10">
                    <FaRegWindowMaximize className="text-xl sm:text-2xl" />
                  </div>
                )}

                <h3 className="text-[14px] font-extrabold leading-[1.2] text-[#102443] sm:text-[18px] xl:text-[19px]">
                  {item.title}
                </h3>

              </div>

            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}
