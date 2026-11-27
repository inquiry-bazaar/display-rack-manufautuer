
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    MapPinned,
    Store,
    ShoppingCart,
    Boxes,
    MapPin,
    Truck,
    ChevronLeft,
    ChevronRight,
    Check,
} from "lucide-react";

const areas = [
    {
        id: "01",
        title: "North & North-West Delhi",
        icon: MapPinned,
        locations: "Rohini, Pitampura, Shalimar Bagh, Model Town, Ashok Vihar",
        days: "[X] days",
    },
    {
        id: "02",
        title: "West & South-West Delhi",
        icon: Store,
        locations: "Janakpuri, Uttam Nagar, Dwarka, Rajouri Garden, Punjabi Bagh",
        days: "3 days",
    },
    {
        id: "03",
        title: "South & South-East Delhi",
        icon: ShoppingCart,
        locations: "Saket, Malviya Nagar, Lajpat Nagar, Kalkaji, Vasant Kunj",
        days: "3 days",
    },
    {
        id: "04",
        title: "East Delhi & Shahdara",
        icon: Boxes,
        locations: "Laxmi Nagar, Mayur Vihar, Preet Vihar, Shahdara, Krishna Nagar",
        days: "3 days",
    },
  
];

export default function AreasWeServe() {
    const [active, setActive] = useState(2);

    const nextSlide = () => {
        setActive((prev) => (prev + 1) % areas.length);
    };

    const prevSlide = () => {
        setActive((prev) => (prev - 1 + areas.length) % areas.length);
    };

    return (
        <section className="relative isolate w-full mx-auto  overflow-hidden rounded-[28px] md:rounded-[48px] bg-[#061c34] px-4 py-9 sm:px-7 md:px-10 lg:px-12 lg:py-11">

            {/* BACKGROUND */}

            <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_50%_100%,rgba(13,52,83,0.65),transparent_65%),linear-gradient(120deg,#061c34,#00172e_70%,#071d35)]" />

            <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-64 w-80 rotate-[35deg] rounded-[50%] bg-gradient-to-br from-orange-500 via-[#a83c25] to-transparent opacity-90 blur-[1px]" />

            <div className="pointer-events-none absolute -bottom-28 -left-28 -z-10 h-64 w-80 rotate-[35deg] rounded-[50%] bg-gradient-to-br from-orange-500 via-[#a83c25] to-transparent opacity-50 blur-[1px]" />

            <div className="relative mx-auto  max-w-[1800px]">

                {/* HEADER */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-10 md:mb-14"
                >
                    <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-[#fff4e9] px-5 py-3 text-sm font-extrabold text-[#0a2340] md:px-7 md:text-xl">
                        <MapPin
                            size={24}
                            strokeWidth={3}
                            className="fill-orange-500 text-orange-500"
                        />
                        Areas We Serve
                    </div>

                    <h2 className="mb-3 text-[29px] font-extrabold leading-tight tracking-tight text-white sm:text-4xl ">
                        Supermarket Racks Delivered{" "}
                        <span className="text-[#ff790d]">
                            Across Delhi
                        </span>
                    </h2>

                    <p className="max-w-5xl text-sm leading-relaxed text-slate-100 sm:text-base lg:text-[21px]">
                        Our fitters cover every zone of Delhi. Delivery times are
                        counted from the day you approve the layout.
                    </p>
                </motion.div>

                {/* CARDS */}

                <div className="overflow-x-auto py-5 scrollbar-hide">
                    <div className="grid min-w-[1100px] grid-cols-4 items-center gap-3 ">

                        {areas.map((area, index) => {
                            const Icon = area.icon;
                            const isActive = active === index;

                            return (
                                <motion.div
                                    key={area.id}
                                    onClick={() => setActive(index)}
                                    layout
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.08,
                                        layout: { duration: 0.35 },
                                    }}
                                    animate={{
                                        scale: isActive ? 1.025 : 1,
                                        y: isActive ? -5 : 0,
                                    }}
                                    whileHover={{ y: -7 }}
                                    className={`relative flex min-h-[325px] cursor-pointer flex-col rounded-[32px] border-2 p-6 pt-7 shadow-xl transition-colors duration-300 ${isActive
                                            ? "z-10 border-[#ff7800] border-[5px] bg-[#fff4e9] shadow-[0_0_25px_rgba(255,119,0,0.45)]"
                                            : "border-white/80 bg-white"
                                        }`}
                                >
                                    {/* NUMBER */}

                                    <div
                                        className={`absolute -right-1 -top-4 flex h-12 w-[65px] items-center justify-center rounded-full border-2 text-2xl font-extrabold ${isActive
                                                ? "border-transparent bg-[#ffb66e] text-[#092343]"
                                                : "border-[#d6e0e9] bg-white text-[#092343]"
                                            }`}
                                    >
                                        {area.id}
                                    </div>

                                    {isActive && (
                                        <div className="absolute -left-2 -top-3 flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#fff4e9] bg-[#f66b0b] text-white">
                                            <Check size={24} strokeWidth={3} />
                                        </div>
                                    )}

                                    {/* ICON */}

                                    <div className="mb-3 flex h-14 items-center text-[#fa6900]">
                                        <Icon size={48} strokeWidth={1.8} />
                                    </div>

                                    {/* TITLE */}

                                    <h3 className="mb-2  text-[23px] font-extrabold leading-[1.12] tracking-tight text-[#0a2344]">
                                        {area.title}
                                    </h3>

                                    <div className="mb-3 h-[5px] w-[58px] rounded-full bg-[#ff6900]" />

                                    {/* LOCATIONS */}

                                    <div className="flex flex-1 items-start gap-3">
                                        <MapPin
                                            size={23}
                                            className="mt-1 shrink-0 fill-[#777] text-[#777]"
                                        />

                                        <p className="text-[16px] leading-[1.45] text-[#102542] ">
                                            {area.locations}
                                        </p>
                                    </div>

                                    {/* DELIVERY */}

                                    <div
                                        className={`mt-5 flex min-h-[84px] items-center justify-center gap-3 rounded-full px-3 ${isActive
                                                ? "bg-[#ff6900] text-white"
                                                : "bg-[#fff0e2] text-[#fa6900]"
                                            }`}
                                    >
                                        <Truck size={39} strokeWidth={2} className="shrink-0" />

                                        <div
                                            className={`h-[53px] w-[2px] shrink-0 ${isActive ? "bg-white" : "bg-[#ff750d]"
                                                }`}
                                        />

                                        <div className="flex flex-col">
                                            <span
                                                className={`text-[15px] font-semibold ${isActive ? "text-white" : "text-[#102542]"
                                                    }`}
                                            >
                                                Delivery:
                                            </span>

                                            <strong className="whitespace-nowrap text-[13px] font-extrabold leading-tight">
                                                {area.days}
                                            </strong>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* CONTROLS */}

                <div className="mt-4 flex items-center justify-center gap-7 md:gap-11">

                    <motion.button
                        type="button"
                        onClick={prevSlide}
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Previous area"
                        className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:bg-white hover:text-[#061c34]"
                    >
                        <ChevronLeft size={27} />
                    </motion.button>

                    <div className="flex items-center gap-3">
                        {areas.map((area, index) => (
                            <button
                                key={area.id}
                                type="button"
                                onClick={() => setActive(index)}
                                aria-label={`Go to ${area.title}`}
                                className={`rounded-full transition-all duration-300 ${active === index
                                        ? "h-4 w-4 scale-110 bg-[#ff7900]"
                                        : "h-3.5 w-3.5 bg-[#385a76] hover:bg-white"
                                    }`}
                            />
                        ))}
                    </div>

                    <motion.button
                        type="button"
                        onClick={nextSlide}
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Next area"
                        className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:bg-white hover:text-[#061c34]"
                    >
                        <ChevronRight size={27} />
                    </motion.button>

                </div>
            </div>

            {/* MOBILE CARDS */}

            <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 650px) {
          .scrollbar-hide > div {
            display: flex;
            min-width: 0;
            gap: 15px;
          }
          .scrollbar-hide > div > div {
            flex: 0 0 85%;
            scroll-snap-align: center;
          }
          .scrollbar-hide {
            scroll-snap-type: x mandatory;
          }
        }
      `}</style>
        </section>
    );
}
