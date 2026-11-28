
"use client";

import { motion } from "framer-motion";
import {
  FaLayerGroup,
  FaBarcode,
  FaRoute,
  FaClone,
} from "react-icons/fa";

const features = [
  {
    icon: FaLayerGroup,
    title: "Heavy-duty bays rated up to [X kg] per shelf",
    description: "For bulk staples and beverages",
  },
  {
    icon: FaBarcode,
    title: "Label strips and location codes",
    description: "On every shelf for fast picking",
  },
  {
    icon: FaRoute,
    title: "Layout planned around the picker's route",
    description: "And the packing table",
  },
  {
    icon: FaClone,
    title: "Same bay design across sites",
    description: "So a second store copies the first",
  },
];

const fadeLeft = {
  hidden: { opacity: 0, x: -35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay: 0.15 },
  },
};

/* =========================================
   SVG WAREHOUSE RACK PLAN
========================================= */

function RackUnit({ x, y, label, tall = false }) {
  const width = 62;
  const height = tall ? 385 : 265;
  const levels = tall ? 6 : 5;

  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Rack shadow */}

      <rect
        x="3"
        y="4"
        width={width}
        height={height}
        rx="3"
        fill="#000"
        opacity=".25"
      />

      {/* Back panel */}

      <rect
        x="4"
        y="3"
        width={width - 8}
        height={height - 6}
        fill="#172a40"
        opacity=".9"
      />

      {/* Left upright */}

      <rect
        x="0"
        y="0"
        width="7"
        height={height}
        fill="#758494"
        stroke="#c4d0db"
        strokeWidth="1"
      />

      {/* Right upright */}

      <rect
        x={width - 7}
        y="0"
        width="7"
        height={height}
        fill="#596c7e"
        stroke="#9cabb9"
        strokeWidth="1"
      />

      {/* Upright holes */}

      {Array.from({ length: 17 }).map((_, i) => (
        <rect
          key={i}
          x="2"
          y={12 + i * 22}
          width="3"
          height="9"
          rx="1"
          fill="#17212c"
        />
      ))}

      {/* Shelves */}

      {Array.from({ length: levels }).map((_, i) => {
        const shelfY = 48 + i * ((height - 75) / levels);

        return (
          <g key={i}>
            <rect
              x="7"
              y={shelfY}
              width={width - 14}
              height="7"
              fill="#ff7800"
              stroke="#ffb34d"
              strokeWidth="1"
            />

            {/* Cartons */}

            {[0, 1].map((box, j) => (
              <g
                key={j}
                transform={`translate(${13 + j * 22}, ${shelfY - 35})`}
              >
                <rect
                  width="20"
                  height="34"
                  rx="2"
                  fill="#c99b6b"
                  stroke="#f2d3a7"
                  strokeWidth="1"
                />

                <path
                  d="M0 7 L20 7 M10 0 V7"
                  stroke="#f6d9b0"
                  strokeWidth="1"
                />

                <path
                  d="M5 15 H15"
                  stroke="#a9794b"
                  strokeWidth="1"
                />
              </g>
            ))}
          </g>
        );
      })}

      {/* Label */}

      {label && (
        <g transform={`translate(${width / 2}, ${height + 25})`}>
          <rect
            x="-27"
            y="0"
            width="54"
            height="34"
            rx="9"
            fill="#14283e"
            stroke="#dce7f2"
            strokeWidth="2"
          />
          <text
            x="0"
            y="23"
            textAnchor="middle"
            fill="white"
            fontSize="19"
            fontWeight="700"
          >
            {label}
          </text>
        </g>
      )}
    </g>
  );
}

function WarehouseSVG() {
  return (
    <svg
      viewBox="0 0 1000 650"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Warehouse floor plan showing supermarket rack rows A to D and a continuous picking route"
    >

      <defs>
        <linearGradient id="warehouseFloor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#25394f" />
          <stop offset="100%" stopColor="#101f32" />
        </linearGradient>

        <linearGradient id="rackMetal" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#68798a" />
          <stop offset="50%" stopColor="#b1bfcb" />
          <stop offset="100%" stopColor="#47596b" />
        </linearGradient>

        <pattern
          id="floorGrid"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M60 0H0V60"
            fill="none"
            stroke="#718399"
            strokeWidth=".7"
            opacity=".18"
          />
        </pattern>

        <marker
          id="routeArrow"
          markerWidth="8"
          markerHeight="8"
          refX="5"
          refY="4"
          orient="auto"
        >
          <path
            d="M0 0 L8 4 L0 8 Z"
            fill="#ffb900"
          />
        </marker>
      </defs>

      {/* Main warehouse floor */}

      <rect
        x="28"
        y="25"
        width="944"
        height="565"
        rx="8"
        fill="url(#warehouseFloor)"
      />

      <rect
        x="28"
        y="25"
        width="944"
        height="565"
        rx="8"
        fill="url(#floorGrid)"
      />

      {/* Warehouse boundary */}

      <rect
        x="28"
        y="25"
        width="944"
        height="565"
        rx="8"
        fill="none"
        stroke="url(#rackMetal)"
        strokeWidth="13"
      />

      <rect
        x="43"
        y="40"
        width="914"
        height="535"
        rx="3"
        fill="none"
        stroke="#52667b"
        strokeWidth="2"
      />

      {/* Rack rows */}

      <RackUnit x={55} y={100} tall />
      <RackUnit x={220} y={100} label="A" />
      <RackUnit x={375} y={100} label="B" />
      <RackUnit x={530} y={100} label="C" />
      <RackUnit x={685} y={100} label="D" />
      <RackUnit x={850} y={100} tall />

      {/* Picking route */}

      <g
        fill="none"
        stroke="#ffb900"
        strokeWidth="3"
        strokeDasharray="12 10"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M165 145 V465 Q165 485 190 485 H820 Q840 485 840 465 V145" />

        <path d="M290 465 V190" markerEnd="url(#routeArrow)" />

        <path d="M445 465 V190" markerEnd="url(#routeArrow)" />

        <path d="M600 465 V190" markerEnd="url(#routeArrow)" />

        <path d="M755 465 V190" markerEnd="url(#routeArrow)" />

        <path d="M215 485 H250" markerEnd="url(#routeArrow)" />

        <path d="M780 485 H810" markerEnd="url(#routeArrow)" />
      </g>

      {/* Packing table */}

      <g transform="translate(360 445)">

        <rect
          width="285"
          height="78"
          rx="5"
          fill="#c6d0db"
          stroke="#f4f7fa"
          strokeWidth="2"
        />

        <rect
          x="0"
          y="0"
          width="285"
          height="10"
          fill="#eef2f6"
        />

        {/* Cartons */}

        <g transform="translate(65 15)">
          <rect width="52" height="46" rx="3" fill="#c9a078" />
          <path d="M0 10H52 M26 0V10" stroke="#e6c39c" strokeWidth="2" />
        </g>

        <g transform="translate(145 20)">
          <rect width="38" height="40" rx="3" fill="#c9a078" />
          <path d="M0 9H38 M19 0V9" stroke="#e6c39c" strokeWidth="2" />
        </g>

        {/* Packing scanner */}

        <g transform="translate(225 19)">
          <rect width="30" height="35" rx="4" fill="#27394c" />
          <rect x="5" y="5" width="20" height="10" rx="2" fill="#879bab" />
          <path d="M9 22H21" stroke="#ff9000" strokeWidth="2" />
        </g>

      </g>

      {/* Packing table label */}

      <g transform="translate(430 515)">
        <rect
          width="175"
          height="43"
          rx="13"
          fill="#ff8a00"
        />
        <text
          x="87"
          y="28"
          textAnchor="middle"
          fill="white"
          fontSize="19"
          fontWeight="700"
        >
          Packing Table
        </text>
      </g>

    </svg>
  );
}

/* =========================================
   MAIN SECTION
========================================= */

export default function DarkStoreSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#081729] px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-16">

      {/* Background decoration */}

      <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[550px] w-[550px] rounded-full bg-[#15304c] opacity-30 blur-[100px]" />

      <div className="mx-auto grid max-w-[1750px] items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10">

        {/* =================================
            LEFT CONTENT
        ================================= */}

        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10"
        >

          {/* Small heading */}

          <div className="mb-4 flex items-center gap-4">
            <span className="h-9 w-[4px] rounded-full bg-[#ff9800]" />

            <span className="text-sm font-bold tracking-[2px] text-white sm:text-base">
              DARK STORES
            </span>
          </div>

          {/* Main heading */}

          <h2 className="max-w-[700px] text-[39px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl ">

            Dark Store Racks in Gurugram, Ready in{" "}

            <span className="relative inline-block text-[#ff9500]">
              10 Days

              <svg
                viewBox="0 0 240 24"
                className="absolute -bottom-5 left-0 w-[210px]"
                fill="none"
              >
                <path
                  d="M5 12C60 0 155 3 205 20"
                  stroke="#ff9800"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M105 21C135 8 165 8 220 15"
                  stroke="#ff9800"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>

          </h2>

          {/* Description */}

          <p className="mt-10 max-w-[650px] text-sm leading-[1.65] text-[#cbd5e1] sm:text-base">
            A quick-commerce dark store earns money only once it's live.
            We plan the racking around picking speed and fit it fast,
            so you can start taking orders sooner.
          </p>

          {/* Feature list */}

          <div className="mt-7 space-y-4">

            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  className="group flex items-center gap-5"
                >

                  {/* Icon box */}

                  <div className="flex h-[74px] w-[74px] shrink-0 items-center justify-center rounded-[17px] border border-[#29415b] bg-[#15283d] transition-all duration-300 group-hover:border-[#ff9200] group-hover:bg-[#1d344d]">

                    <Icon className="text-[34px] text-[#ff9800]" />

                  </div>

                  {/* Text */}

                  <div>
                    <h3 className="text-base font-extrabold leading-[1.4] text-white sm:text-[18px]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-[#d0dae6] sm:text-base">
                      {item.description}
                    </p>
                  </div>

                </motion.div>
              );
            })}

          </div>

        </motion.div>

        {/* =================================
            RIGHT SVG DIAGRAM
        ================================= */}

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative min-w-0"
        >

          <div className="overflow-hidden rounded-[23px] border border-[#304a66] bg-[#0c1e32] p-3 shadow-[0_25px_80px_rgba(0,0,0,0.25)] sm:rounded-[26px] sm:p-5 lg:p-6">

            {/* SVG visualization */}

            <div className="w-full overflow-hidden rounded-xl">
              <WarehouseSVG />
            </div>

            {/* Caption */}

            <div className="mx-auto mt-4 flex min-h-[55px] max-w-[820px] items-center justify-center rounded-full border border-[#3c5874] bg-[#1b3048] px-4 py-3 text-center">

              <p className="text-xs font-medium leading-relaxed text-[#f1f5f9] sm:text-base">
                Sample dark store plan: rack rows A–D with one continuous picking route
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
