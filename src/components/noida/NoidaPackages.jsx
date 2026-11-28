
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaMapMarkerAlt,
  FaTruck,
  FaTag,
  FaTools,
  FaStore,
  FaShoppingCart,
  FaBriefcaseMedical,
  FaMobileAlt,
  FaCheck,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const benefits = [
  {
    icon: FaTruck,
    title: "Site Visit &",
    subtitle: "Layout Planning",
  },
  {
    icon: FaStore,
    title: "Customised to",
    subtitle: "Your Shop Size",
  },
  {
    icon: FaTag,
    title: "Fixed Price",
    subtitle: "After Approval",
  },
  {
    icon: FaTools,
    title: "Delivery &",
    subtitle: "Professional Fitting",
  },
];

const packages = [
  {
    id: 1,
    name: "Society Kirana Starter",
    category: "For 200–300 sq ft shops",
    price: "₹75,000",
    image: "/products/13.webp",
    icon: FaStore,
    featured: true,
    features: [
      "6 wall racks, 6 ft",
      "1 billing counter with rack",
      
      "Delivery and fitting",
    ],
  },
  {
    id: 2,
    name: "Mini Supermarket",
    category: "For 600–1,000 sq ft shops",
    price: "₹1,85,000",
    image: "/products/12.webp",
    icon: FaStore,
    icon: FaShoppingCart,
    features: [
      "14 wall racks",
      "2 double sided gondola runs with end caps",
      
      "Delivery and fitting",
    ],
  },
  {
    id: 3,
    name: "Pharmacy Pack",
    category: "For 150–300 sq ft chemists",
    price: "₹62,000",
     image: "/products/11.webp",
    icon: FaStore,
    icon: FaBriefcaseMedical,
    features: [
      "(4 wall racks with drawer units",
      "1 OTC display gondola",
      
      "Delivery and fitting",
    ],
  },
  {
    id: 4,
    name: "Mobile Shop Pack",
    category: "For accessory and electronics shops",
    price: "₹48,000",
     image: "/products/10.webp",
    icon: FaStore,
    icon: FaMobileAlt,
    features: [
      "3 pegboard wall panels with 60 hooks",
      "1 accessory display stand",
    
      "Delivery and fitting",
    ],
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

const WHATSAPP = "918587901795";

const getPackageEnquiryUrl = (packageName) => {
  const message = `Hello Arya Insulation, I am interested in the ${packageName} package. Please share more details.`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
};

export default function NoidaPackages() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-4 py-16 sm:px-7  sm:py-12">

      {/* BACKGROUND DECORATION */}

      <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[450px] w-[550px] rounded-full bg-[#fff2e8] opacity-70 blur-[100px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[400px] w-[500px] rounded-full bg-[#eef6ff] opacity-50 blur-[100px]" />

      <div className="mx-auto max-w-[1700px]">

        {/* SECTION HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#fff0e6] px-5 py-2 text-xs font-extrabold text-[#102443] sm:text-base">
            <FaMapMarkerAlt className="text-lg text-[#f36b0b]" />
            Noida Packages
          </div>

          <h2 className="mt-2 text-xl font-extrabold leading-tight tracking-tight text-[#102443] sm:text-4xl">
            Supermarket Rack Packages for{" "}
            <span className="text-[#f36b0b]">
              Noida Shops
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-[1250px] text-sm leading-relaxed text-[#53647b] sm:text-lg ">
            Pick the package closest to your shop. We adjust it to your exact
            size at the free site visit, and the price stays fixed once you approve.
          </p>
        </motion.div>

        {/* BENEFITS BAR */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-7 grid max-w-[1200px] grid-cols-2 gap-4 rounded-[25px] bg-[#f8fafc] px-5 py-5 shadow-[0_8px_25px_rgba(16,36,67,0.06)] md:grid-cols-4 md:gap-0 md:px-8"
        >
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`flex items-center justify-center gap-3 ${
                  index !== 0
                    ? "md:border-l md:border-[#d9e0e8] md:pl-5"
                    : ""
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#f36b0b] shadow-sm">
                  <Icon className="text-[27px]" />
                </div>

                <div className="text-sm font-extrabold leading-snug text-[#102443] sm:text-base">
                  {item.title}
                  <br />
                  {item.subtitle}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* PACKAGE CARDS */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >

          {packages.map((pkg) => {
            const Icon = pkg.icon;

            return (
              <motion.div
                key={pkg.id}
                variants={cardVariants}
                whileHover={{
                  y: -7,
                  transition: { duration: 0.3 },
                }}
                className={`group relative flex min-w-0 flex-col overflow-visible rounded-[24px] bg-white transition-all duration-300 ${
                  pkg.featured
                    ? "border-[1.5px] border-[#ff6900] shadow-[0_12px_35px_rgba(255,105,0,0.12)]"
                    : "border border-[#edf0f4] shadow-[0_10px_30px_rgba(16,36,67,0.07)] hover:shadow-[0_18px_40px_rgba(16,36,67,0.12)]"
                }`}
              >

                {/* MOST CHOSEN BADGE */}

                {pkg.featured && (
                  <div className="absolute -left-0.5 -top-4 z-20 flex items-center gap-2 rounded-r-full rounded-tl-full bg-[#ff6900] px-5 py-2.5 text-sm font-extrabold text-white shadow-md">
                    <FaStar />
                    Most Chosen
                  </div>
                )}

                {/* PACKAGE IMAGE */}

                <div className="relative h-[190px] w-full overflow-hidden rounded-t-[22px] bg-[#f3f5f7] sm:h-[390px] ">

                  <Image
                    src={pkg.image}
                    alt={`${pkg.name} supermarket rack package in Noida`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                </div>

                {/* PACKAGE CONTENT */}

                <div className="flex flex-1 flex-col px-5 pb-5 pt-3 sm:px-5">

                  {/* PACKAGE TITLE */}

                  <div className="flex items-center gap-3">

                    <div className="flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-2xl bg-[#fff1e6] text-[#f36b0b]">
                      <Icon className="text-[30px]" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[19px] font-extrabold leading-tight tracking-tight text-[#102443] sm:text-[21px]">
                        {pkg.name}
                      </h3>

                      <p className="mt-1 text-[13px] leading-snug text-[#64748b] sm:text-sm">
                        {pkg.category}
                      </p>
                    </div>
                  </div>

                  {/* PRICE */}

                  <div className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#fff0e5] px-3 py-2.5">
                    <span className="text-[25px] font-extrabold leading-none text-[#f36b0b] sm:text-[27px]">
                      {pkg.price}
                    </span>

                    <span className="text-sm text-[#53647b]">
                      (Approx.)
                    </span>
                  </div>

                  {/* FEATURES */}

                  <ul className="mt-4 flex-1 space-y-2.5">
                    {pkg.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-[14px] font-medium leading-[1.4] text-[#102443] sm:text-[15px]"
                      >
                        <FaCheck className="mt-0.5 shrink-0 text-[16px] text-[#ff6900]" />

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA BUTTON */}

                  <a
                    href={getPackageEnquiryUrl(pkg.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn mt-7 flex min-h-[55px] w-full items-center justify-center gap-4 rounded-full border-[1.5px] px-4 py-3 text-sm font-extrabold transition-all duration-300 sm:text-base ${
                      pkg.featured
                        ? "border-[#ff6900] bg-[#ff6900] text-white hover:border-[#e95b00] hover:bg-[#e95b00]"
                        : "border-[#ff6900] bg-white text-[#102443] hover:bg-[#ff6900] hover:text-white"
                    }`}
                  >
                Enquiry Now

                    <FaArrowRight className={`text-lg transition-transform duration-300 group-hover/btn:translate-x-2 ${
                      pkg.featured
                        ? "text-white"
                        : "text-[#f36b0b] group-hover/btn:text-white"
                    }`} />
                  </a>

                </div>
              </motion.div>
            );
          })}

        </motion.div>
      </div>
    </section>
  );
}
