
"use client";

import { motion } from "framer-motion";
import {
  Tag,
  Truck,
  Wrench,
  ShieldCheck,
  ArrowRight,
  Grid3X3,
  Maximize,
  Store,
  ShoppingCart,
  CalendarDays,
  Clock,
  Handshake,
  ChevronRight,
} from "lucide-react";

const rackPrices = [
  { name: "Wall rack, 5 shelves", size: "6 ft × 3 ft", price: "₹7,500", type: "wall" },
  { name: "Wall rack, 6 shelves", size: "7 ft × 4 ft", price: "₹9,800", type: "wall" },
  { name: "Double sided gondola", size: "5 ft × 3 ft", price: "₹11,500", type: "gondola" },
  { name: "Fruit & vegetable rack", size: "3-tier, 4 ft", price: "₹8,900", type: "fruit" },
  { name: "Heavy duty rack", size: "7 ft × 4 ft", price: "₹13,800", type: "heavy" },
  { name: "Checkout counter", size: "4 ft", price: "₹18,500", type: "counter" },
];

const storeTypes = [
  {
    category: "SMALL KIRANA",
    area: "150–300 sq ft",
    description: "4–6 wall racks + counter",
    price: "₹75,000",
    priceEnd: "– ₹1,20,000",
    time: "1 day",
    icon: Store,
  },
  {
    category: "LARGE KIRANA",
    area: "300–600 sq ft",
    description: "8–12 wall racks + 1 gondola run + counter",
    price: "₹1,20,000",
    priceEnd: "– ₹2,40,000",
    time: "1–2 days",
    icon: Store,
  },
  {
    category: "MINI SUPERMARKET",
    area: "600–1,500 sq ft",
    description: "15–25 wall racks + 2 gondola runs + fruit racks",
    price: "₹2,40,000",
    priceEnd: "– ₹5,50,000",
    time: "2–3 days",
    icon: ShoppingCart,
  },
  {
    category: "SUPERMARKET",
    area: "1,500+ sq ft",
    description: "Full layout with end caps and checkouts",
    custom: true,
    icon: Store,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

// Simple rack illustrations using CSS
function RackIllustration({ type }) {
  if (type === "counter") {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-6 w-12 rounded-sm border-2 border-[#8d989d] bg-gradient-to-b from-gray-300 to-gray-500 shadow-md" />
      </div>
    );
  }

  if (type === "gondola" || type === "fruit") {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="relative flex h-10 w-12 flex-col justify-end gap-1">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="h-2 w-full rounded-sm border border-gray-500 bg-gradient-to-b from-gray-300 to-gray-500 shadow-sm"
            />
          ))}
          <div className="absolute -left-1 bottom-0 h-full w-1 rounded bg-gray-600" />
          <div className="absolute -right-1 bottom-0 h-full w-1 rounded bg-gray-600" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative flex h-10 w-8 flex-col justify-between border-x-2 border-gray-500 px-0.5 py-0.5">
        {[0, 1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-1 w-full rounded-sm bg-gradient-to-b from-gray-400 to-gray-600 shadow-sm"
          />
        ))}
        <div className="absolute -left-1 top-0 h-full w-0.5 bg-gray-500" />
        <div className="absolute -right-1 top-0 h-full w-0.5 bg-gray-500" />
      </div>
    </div>
  );
}

export default function RackPricingSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-12 sm:px-6 lg:px-10 lg:py-16">

      {/* TOP PRICE SECTION */}

      <div className="mx-auto grid max-w-[1700px] grid-cols-1 items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">

        {/* LEFT CONTENT */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col"
        >
          <motion.div
            variants={itemVariants}
            className="mb-3 inline-flex w-fit items-center gap-3 rounded-full bg-[#fff0e3] px-5 py-2.5 text-sm font-extrabold text-[#102443]"
          >
            <Tag size={21} className="fill-[#f36b0b] text-[#f36b0b]" />
            DELHI PRICE LIST
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-[38px] font-extrabold leading-[1.12] tracking-tight text-[#102443] sm:text-5xl "
          >
            Supermarket Rack Price
            <span className="block text-[#f36b0b]">in Delhi</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="my-4 h-1 w-[72px] rounded-full bg-[#f36b0b]"
          />

          <motion.p
            variants={itemVariants}
            className="max-w-xl text-base leading-relaxed text-[#53647b] sm:text-base"
          >
            Transparent starting prices for common supermarket racks.
            Delivery and installation anywhere in Delhi are included.
          </motion.p>

          {/* BENEFITS */}

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-5"
          >
            {[
              { icon: Truck, title: "Delivery", desc: "Across Delhi" },
              { icon: Wrench, title: "Professional", desc: "Installation" },
              { icon: ShieldCheck, title: "GST", desc: "Included" },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-center gap-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#fff0e3] text-[#f36b0b]">
                    <Icon size={32} strokeWidth={2.3} />
                  </div>

                  <div className="whitespace-nowrap">
                    <p className="font-bold text-[#102443]">{item.title}</p>
                    <p className="text-sm text-[#102443] sm:text-sm">
                      {item.desc}
                    </p>
                  </div>

                  {index !== 2 && (
                    <div className="ml-1 hidden h-8 w-px bg-slate-300 sm:block" />
                  )}
                </div>
              );
            })}
          </motion.div>

          {/* CTA */}

          <motion.a
            variants={itemVariants}
            href="#enquiry"
            whileHover={{ scale: 1.035 }}
            whileTap={{ scale: 0.97 }}
            className="mt-9 flex w-fit items-center justify-center gap-6 rounded-full bg-gradient-to-r from-[#ff7300] to-[#ed5900] px-9 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/20 transition-shadow hover:shadow-orange-500/40 sm:text-base"
          >
            Get the Exact Price for My Shop
            <ArrowRight size={25} />
          </motion.a>
        </motion.div>

        {/* RIGHT PRICE TABLE */}

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,35,65,0.12)]"
        >
          {/* TABLE HEADER */}

          <div className="grid grid-cols-[75px_1.5fr_1fr_1fr] items-center bg-[#061d3e] text-white sm:grid-cols-[85px_1.5fr_1fr_1fr]">

            <div className="col-span-2 flex items-center gap-3 px-5 py-4">
              <Grid3X3 size={25} />
              <span className="font-bold sm:text-base">Rack</span>
            </div>

            <div className="flex items-center justify-center gap-2 px-2 py-4">
              <Maximize size={22} />
              <span className="whitespace-nowrap text-xs font-bold sm:text-base">
                Size (H × W)
              </span>
            </div>

            <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#f36b0b] px-2 py-4">
              <div className="absolute -left-5 top-0 h-full w-8 -skew-x-[35deg] bg-[#f36b0b]" />
              <div className="relative flex items-center gap-2">
                <Tag size={23} />
                <span className="whitespace-nowrap text-xs font-bold sm:text-base">
                  Delhi price from
                </span>
              </div>
            </div>
          </div>

          {/* TABLE ROWS */}

          {rackPrices.map((rack, index) => (
            <motion.div
              key={rack.name}
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
              className={`grid min-h-[59px] grid-cols-[75px_1.5fr_1fr_1fr] items-center transition-colors hover:bg-orange-50 sm:grid-cols-[85px_1.5fr_1fr_1fr] ${
                index % 2 === 0 ? "bg-white" : "bg-[#f4f5f8]"
              }`}
            >
              <div className="flex justify-center py-1">
                <div className="h-12 w-[62px] overflow-hidden rounded-2xl bg-[#fff0e3]">
                  <RackIllustration type={rack.type} />
                </div>
              </div>

              <div className="px-2 text-[13px] font-bold leading-tight text-[#102443] sm:px-4 sm:text-base lg:text-lg">
                {rack.name}
              </div>

              <div className="px-1 text-center text-xs font-bold  text-[#53647b] sm:text-base">
                {rack.size}
              </div>

              <div className="flex justify-center px-1">
                <span className="whitespace-nowrap rounded-full bg-[#fff0e3] px-3 py-2 text-sm font-bold text-[#e96000] sm:px-5 sm:text-lg">
                  {rack.price}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* BOTTOM STORE SIZE SECTION */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto mt-14 max-w-[1800px] overflow-hidden rounded-[28px] bg-[#071e40] p-4  "
      >
        {/* BACKGROUND DECORATION */}

        <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_15%_100%,rgba(77,105,147,0.32),transparent_45%),linear-gradient(120deg,#122b4d,#071e40)]" />

        <div className="pointer-events-none absolute -bottom-24 -left-16 h-40 w-80 -rotate-12 rounded-[50%] bg-[#496083]/30 blur-sm" />

        <div className="relative grid grid-cols-1 gap-4 lg:grid-cols-[0.95fr_4fr] lg:gap-3">

          {/* SECTION TITLE */}

          <div className="flex flex-col justify-center px-3 py-4 text-white sm:px-5 lg:py-8">
            <Store
              size={48}
              strokeWidth={2}
              className="mb-5 text-white"
            />

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-3xl">
              What a Typical
              <span className="block text-[#ff7900]">
                Delhi Store Needs
              </span>
            </h2>
          </div>

          {/* STORE CARDS */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4"
          >
            {storeTypes.map((store, index) => {
              const Icon = store.icon;

              return (
                <motion.div
                  key={store.category}
                  variants={itemVariants}
                  whileHover={{ y: -7 }}
                  className="flex min-w-0 flex-col rounded-[22px] border border-slate-200 bg-white p-4 shadow-lg sm:p-4"
                >
                  {/* CATEGORY */}

                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#fff2e7] text-[#f36b0b]">
                      <Icon size={35} strokeWidth={2.3} />
                    </div>

                    <div className="min-w-0">
                      <span className="inline-block whitespace-nowrap rounded-full bg-[#fff0e3] px-3 py-1 text-[11px] font-extrabold text-[#e85b00] sm:text-[9px]">
                        {store.category}
                      </span>

                      <h3 className="mt-2 text-xl font-extrabold tracking-tight text-[#102443] sm:text-[15px]">
                        {store.area}
                      </h3>
                    </div>
                  </div>

                  {/* DESCRIPTION */}

                  <p className="min-h-[54px] px-1 py-2 text-sm font-medium leading-relaxed text-[#53647b] sm:text-sm">
                    {store.description}
                  </p>

                  {/* PRICE AND TIME */}

                  <div className="mt-auto grid min-h-[76px] grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-2xl bg-[#fff0e3] px-3 py-3">

                    {store.custom ? (
                      <div className="col-span-3 flex items-center justify-center gap-3 text-center">
                        <Handshake
                          size={32}
                          className="shrink-0 text-[#f36b0b]"
                        />
                        <span className="text-base font-extrabold leading-tight text-[#102443]">
                          Custom quote
                          <br />
                          after site visit
                        </span>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-2">
                          <CalendarDays
                            size={25}
                            className="shrink-0 text-[#f36b0b]"
                          />

                          <div className="min-w-0">
                            <p className="text-sm font-extrabold leading-tight text-[#102443] sm:text-[10px]">
                              {store.price}
                            </p>
                            <p className="text-xs font-bold text-[#102443] sm:text-[10px]">
                              {store.priceEnd}
                            </p>
                          </div>
                        </div>

                        <div className="h-10 w-px bg-[#b9bdc6]" />

                        <div className="flex items-center gap-2">
                          <Clock
                            size={26}
                            className="shrink-0 text-[#f36b0b]"
                          />

                          <div className="min-w-0">
                            <p className="text-sm font-bold leading-tight text-[#102443] sm:text-sm">
                              Fitted in
                            </p>
                            <p className="text-sm font-extrabold text-[#102443] sm:text-sm">
                              {store.time}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
