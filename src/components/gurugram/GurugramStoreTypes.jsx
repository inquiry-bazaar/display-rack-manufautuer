
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaMapMarkerAlt,
  FaShoppingCart,
  FaGem,
  FaBox,
  FaStore,
  FaThLarge,
  FaLayerGroup,
  FaWarehouse,
  FaShoppingBag,
} from "react-icons/fa";

const storeTypes = [
  {
    id: 1,
    title: "Society Convenience Stores",
    image: "/products/1.webp",
    icon: FaShoppingCart,
    description:
      "Shops inside gated societies sell daily essentials and quick top-ups. Compact wall racks, one low gondola and a fruit rack fit 200–500 sq ft.",
    usually:
      "6–10 wall racks · 1 gondola · counter",
    bottomIcon: FaThLarge,
  },
  {
    id: 2,
    title: "Premium & Gourmet Stores",
    image: "/products/2.webp",
    icon: FaGem,
    description:
      "Imported foods and premium brands need a cleaner look: matte black or white racks, wooden-laminate shelves and LED shelf lights.",
    usually:
      "premium wall racks · low island units · lit header boards",
    bottomIcon: FaLayerGroup,
  },
  {
    id: 3,
    title: "Quick-Commerce Dark Stores",
    image: "/products/3.webp",
    icon: FaBox,
    description:
      "Built for picking speed, not browsing. Heavy-duty bays, labelled bin locations and aisles planned around the picker's route.",
    usually:
      "40–80 heavy-duty bays · bin labels · packing table",
    bottomIcon: FaWarehouse,
  },
  {
    id: 4,
    title: "High-Street & SCO Shops",
    image: "/products/5.webp",
    icon: FaStore,
    description:
      "Ground-floor shops in SCO plots and markets need wall racks that show stock from the road and a strong checkout counter.",
    usually:
      "tall wall racks · end caps near the door · checkout",
    bottomIcon: FaShoppingBag,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
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

export default function GurugramStoreTypes() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#fbfcff] px-4 py-14 sm:px-6 lg:px-9 lg:py-16">

      {/* BACKGROUND DECORATIONS */}

      <div className="pointer-events-none absolute -left-40 top-0 -z-10 h-[400px] w-[450px] rounded-full bg-[#fff2e9] opacity-60 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 top-20 -z-10 h-[450px] w-[500px] rounded-full bg-[#eaf3ff] opacity-70 blur-[110px]" />

      <div className="mx-auto max-w-[1750px]">

        {/* =====================================
            SECTION HEADER
        ===================================== */}

        <div className="relative mb-8 lg:mb-9">

          {/* GURUGRAM SKYLINE */}

          <div
            className="pointer-events-none absolute right-0 top-[-30px] hidden h-[190px] w-[48%] bg-contain bg-right-bottom bg-no-repeat opacity-80 lg:block"
            style={{
              backgroundImage:
                "url('/images/gurugram-skyline.png')",
            }}
          />

          {/* HEADER CONTENT */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >

            {/* LOCATION BADGE */}

            <div className="mb-3 inline-flex items-center gap-3 rounded-full bg-[#ffede2] py-2 pl-3 pr-5">

              <FaMapMarkerAlt className="text-[26px] text-[#f36b0b]" />

              <span className="text-sm font-extrabold tracking-wide text-[#102443] sm:text-lg">
                BUILT FOR GURUGRAM STORES
              </span>

            </div>

            {/* TITLE */}

            <h2 className="max-w-[1150px] text-[34px] font-extrabold leading-[1.12] tracking-tight text-[#102443] sm:text-4xl md:text-5xl lg:text-[55px]">

              Racks for the Way{" "}
              <span className="text-[#f4510b]">
                Gurugram Shops
              </span>

            </h2>

            {/* ORANGE UNDERLINE */}

            <div className="mt-3 h-[7px] w-[98px] rounded-full bg-[#ff6900]" />

            {/* DESCRIPTION */}

            <p className="mt-3 max-w-[950px] text-base leading-[1.6] text-[#354960] sm:text-lg lg:text-[21px]">
              Gurugram's retail runs from gated-society stores to premium high streets and dark stores.
              <br className="hidden lg:block" />
              Each needs a different rack plan.
            </p>

          </motion.div>
        </div>

        {/* =====================================
            STORE TYPE CARDS
        ===================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5"
        >

          {storeTypes.map((store) => {
            const Icon = store.icon;
            const BottomIcon = store.bottomIcon;

            return (
              <motion.article
                key={store.id}
                variants={cardVariants}
                whileHover={{
                  y: -7,
                  transition: { duration: 0.3 },
                }}
                className="group flex min-w-0 flex-col overflow-hidden rounded-[29px] border border-[#edf0f4] bg-white shadow-[0_9px_22px_rgba(20,40,65,0.09)] transition-shadow duration-300 hover:shadow-[0_18px_35px_rgba(20,40,65,0.13)]"
              >

                {/* IMAGE */}

                <div className="relative h-[235px] w-full overflow-hidden sm:h-[315px] ">

                  <Image
                    src={store.image}
                    alt={store.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* SUBTLE IMAGE OVERLAY */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071d30]/10 to-transparent" />

                  {/* ORANGE ICON BADGE */}

                  <div className="absolute left-4 top-3 flex h-[57px] w-[75px] items-center justify-center rounded-[20px] border-[3px] border-white bg-[#ff7100] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">

                    <Icon className="text-[30px]" />

                  </div>

                </div>

                {/* CARD CONTENT */}

                <div className="flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-5 sm:pb-5">

                  {/* TITLE */}

                  <h3 className="text-[21px] font-extrabold leading-[1.2] tracking-tight text-[#102443] sm:text-[22px] xl:text-[24px]">
                    {store.title}
                  </h3>

                  {/* ORANGE LINE */}

                  <div className="mb-3 mt-3 h-[5px] w-[68px] rounded-full bg-[#ff6900] transition-all duration-300 group-hover:w-[95px]" />

                  {/* DESCRIPTION */}

                  <p className="flex-1 text-[16px] leading-[1.55] text-[#182b43] sm:text-[15px]">
                    {store.description}
                  </p>

                  {/* USUALLY STRIP */}

                  <div className="mt-5 flex min-h-[76px] items-center gap-4 rounded-[20px] bg-[#fff0e5] px-4 py-3">

                    <BottomIcon className="shrink-0 text-[32px] text-[#ff6900] sm:text-[36px]" />

                    <p className="text-[9px] leading-[1.5] text-[#102443] sm:text-[14px]">

                      <span className="font-extrabold text-[#f4510b]">
                      
                      </span>{" "}

                      <span className="font-medium">
                        {store.usually}
                      </span>

                    </p>

                  </div>

                </div>

              </motion.article>
            );
          })}

        </motion.div>

      </div>

    </section>
  );
}
