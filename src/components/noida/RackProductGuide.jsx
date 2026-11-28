
"use client";

import { motion } from "framer-motion";

import {
    FaBookOpen,
    FaBoxOpen,
    FaLayerGroup,
    FaAward,
    FaCheck,
    FaWheatAwn,
    FaBoxesStacked,
    FaCookieBite,
    FaBasketShopping,
    FaCapsules,
    FaMobileScreenButton,
} from "react-icons/fa6";

const products = [
    {
        name: "Atta, rice, oil tins",
        rack: "Heavy-duty wall rack",
        reason: "Shelves rated up to 150 kg, don't bend under bulk packs",
        icon: FaWheatAwn,
    },
    {
        name: "Packaged FMCG",
        rack: "Wall rack + double sided gondola",
        reason: "Adjustable shelves fit boxes of every height",
        icon: FaBoxesStacked,
    },
    {
        name: "Chips and snacks",
        rack: "Pegboard with hooks, chips stand",
        reason: "Hanging packs sell better and don't get crushed",
        icon: FaCookieBite,
    },
    {
        name: "Fruit and vegetables",
        rack: "Tiered or inclined rack",
        reason: "Open tiers keep produce visible and airy",
        icon: FaBasketShopping,
    },
    {
        name: "Medicines",
        rack: "Wall rack with drawer units",
        reason: "Strips stay sorted and easy to find",
        icon: FaCapsules,
    },
    {
        name: "Mobile accessories",
        rack: "Pegboard or slotted wall panel",
        reason: "Hundreds of small items on hooks, easy to rearrange",
        icon: FaMobileScreenButton,
    },
];

const rowVariants = {
    hidden: {
        opacity: 0,
        y: 15,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: "easeOut",
        },
    },
};

function RackDecoration() {
    return (
        <div className="pointer-events-none absolute right-0 top-0 hidden h-[220px] w-[430px] overflow-hidden opacity-40 lg:block">

            <div className="absolute right-8 top-5 flex h-[200px] w-[185px] flex-col justify-between border-x-[5px] border-t-[5px] border-[#edb98d]">
                {[1, 2, 3].map((item) => (
                    <div
                        key={item}
                        className="relative h-[3px] w-full bg-[#edb98d]"
                    >
                        <div className="absolute -top-8 left-4 h-8 w-8 border-x border-t border-[#edb98d]" />
                        <div className="absolute -top-6 left-14 h-6 w-10 border-x border-t border-[#edb98d]" />
                    </div>
                ))}
            </div>

            <div className="absolute right-[225px] top-16 flex h-[140px] w-[115px] flex-col justify-between border-x-[4px] border-t-[4px] border-[#edb98d]">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="h-[3px] w-full bg-[#edb98d]" />
                ))}
            </div>

            <div className="absolute right-[350px] top-24 flex h-[115px] w-[75px] flex-col justify-between border-x-[3px] border-t-[3px] border-[#edb98d]">
                {[1, 2].map((item) => (
                    <div key={item} className="h-[3px] w-full bg-[#edb98d]" />
                ))}
            </div>
        </div>
    );
}

export default function RackProductGuide() {
    return (
        <section className="relative w-full overflow-hidden bg-white px-4 py-5 sm:px-7 sm:py-12">

            <div className="mx-auto max-w-[1700px]">

                {/* HEADER */}

                <div className="relative mb-9">

                    <RackDecoration />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10"
                    >

                        {/* LABEL */}

                        <div className="mb-2 inline-flex items-center gap-4 rounded-full bg-[#fff0e6] px-5 py-2">
                            <FaBookOpen className="text-[29px] text-[#f36b0b]" />

                            <span className="text-xs md:text-sm font-extrabold tracking-wide text-[#102443]">
                                BUYING GUIDE
                            </span>
                        </div>

                        {/* TITLE */}

                        <h2 className="max-w-[1050px] text-lg font-extrabold leading-[1.08] tracking-tight text-[#102443] sm:text-4xl ">
                            Which Rack for{" "}
                            <span className="text-[#f36b0b]">
                                Which Product?
                            </span>
                        </h2>

                        <p className="mt-3 text-sm font-medium text-[#64748b] sm:text-lg ">
                            A quick guide to help you choose the right rack based on what you sell.
                        </p>

                        <div className="mt-4 h-[7px] w-[83px] rounded-full bg-[#ff6900]" />

                    </motion.div>
                </div>

                {/* GUIDE TABLE */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.7 }}
                    className="overflow-hidden rounded-[27px] bg-white shadow-[0_12px_30px_rgba(16,36,67,0.13)]"
                >

                    {/* TABLE HEADER */}

                    <div className="grid grid-cols-[1fr_1fr_1.4fr] items-center bg-gradient-to-r from-[#10233c] to-[#07182c] text-white">

                        {/* PRODUCT HEADER */}

                        <div className="flex min-h-[76px] items-center gap-4 border-r border-white/30 px-5 sm:px-8 lg:px-12">
                            <FaBoxOpen className="shrink-0 text-[18px] text-[28px] text-[#e7e8e9]" />

                            <h3 className="text-sm font-extrabold sm:text-xl ">
                                What you sell
                            </h3>
                        </div>

                        {/* RACK HEADER */}

                        <div className="flex min-h-[76px] items-center gap-4 border-r border-white/30 px-5 sm:px-8 lg:px-12">
                            <FaLayerGroup className="shrink-0 text-[18px] text-[28px] text-[#e3e8ee]" />

                            <h3 className="text-sm font-extrabold sm:text-xl ">
                                Best rack
                            </h3>
                        </div>

                        {/* WHY HEADER */}

                        <div className="flex min-h-[76px] items-center gap-4 px-5 sm:px-8 lg:px-12">
                            <FaAward className="shrink-0 text-[18px] text-[28px] text-[#ff9b00]" />

                            <h3 className="text-sm font-extrabold sm:text-xl">
                                Why
                            </h3>
                        </div>

                    </div>

                    {/* TABLE ROWS */}

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ staggerChildren: 0.08 }}
                    >

                        {products.map((product, index) => {
                            const Icon = product.icon;

                            return (
                                <motion.div
                                    key={product.name}
                                    variants={rowVariants}
                                    className={`grid grid-cols-[1fr_1fr_1.4fr] items-center transition-colors duration-300 hover:bg-[#ffeadc] ${index % 2 === 1
                                            ? "bg-[#fff2e9]"
                                            : "bg-white"
                                        }`}
                                >

                                    {/* WHAT YOU SELL */}

                                    <div className="flex min-h-[81px] items-center gap-4 border-r border-[#e5e7eb] px-5 sm:px-8 lg:px-12">

                                        <div className="flex h-[53px] w-[58px] shrink-0 items-center justify-center rounded-xl">
                                            <Icon className="text-[18px] text-[28px] text-[#102b49] drop-shadow-[1px_2px_0px_#ff9a32]" />
                                        </div>

                                        <span className="text-sm font-extrabold leading-snug tracking-tight text-[#102443] sm:text-base ">
                                            {product.name}
                                        </span>

                                    </div>

                                    {/* BEST RACK */}

                                    <div className="flex min-h-[81px] items-center border-r border-[#e5e7eb] px-5 sm:px-8 lg:px-11">

                                        <span className="inline-flex rounded-full bg-[#fff0e6] px-4 py-3 text-sm font-extrabold leading-snug tracking-tight text-[#102443] sm:px-6 sm:text-base ">
                                            {product.rack}
                                        </span>

                                    </div>

                                    {/* WHY */}

                                    <div className="flex min-h-[81px] items-center gap-3 px-5 sm:gap-4 sm:px-8 lg:px-11">

                                        <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-[#ff6900] text-white shadow-sm">
                                            <FaCheck className="text-[15px]" />
                                        </div>

                                        <p className="text-sm font-medium leading-relaxed text-[#24354c] sm:text-base ">
                                            {product.reason}
                                        </p>

                                    </div>

                                </motion.div>
                            );
                        })}

                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
