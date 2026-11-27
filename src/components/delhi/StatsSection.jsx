
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate, useReducedMotion } from "framer-motion";
import {
  CalendarDays,
  Layers3,
  UsersRound,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    value: 15,
    suffix: "+",
    label: "Years of Experience",
    icon: CalendarDays,
  },
  {
    value: 500,
    suffix: "+",
    label: "Projects Delivered",
    icon: Layers3,
  },
  {
    value: 1000,
    suffix: "+",
    label: "Happy Clients",
    icon: UsersRound,
  },
  {
    value: 100,
    suffix: "%",
    label: "Quality Focus",
    icon: ShieldCheck,
  },
];

function AnimatedNumber({ value, suffix, active, reduceMotion }) {
  const [count, setCount] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!active) return;

    if (reduceMotion) {
      setCount(value);
      return;
    }

    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setCount(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [active, value, reduceMotion]);

  return (
    <span>
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.35,
  });

  const reduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-6 sm:px-4 sm:py-12">

        {/* Top Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="h-px w-full origin-left bg-[#E2E8F0]"
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 divide-x divide-y divide-[#E2E8F0] lg:grid-cols-4 lg:divide-y-0">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 25 }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.13,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex min-w-0 flex-col items-start px-4 py-7 sm:px-7 sm:py-9 lg:px-8 xl:px-10"
              >

                {/* Number + Icon */}
                <div className="flex-col md:flex-row md:flex  w-full flex-wrap items-center gap-5 sm:gap-5">

                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF1E5] text-[#F58220] transition-all duration-300 group-hover:bg-[#F58220] group-hover:text-white sm:h-[60px] sm:w-[60px]">
                    <Icon
                      size={27}
                      strokeWidth={1.8}
                      className="sm:h-8 sm:w-8"
                    />
                  </div>

                  {/* Number */}
                  <div className="min-w-0">
                    <h3 className="text-[34px] mt-2 md:mt-0 font-extrabold leading-none tracking-[-1.5px] text-[#102A43] sm:text-[48px] lg:text-[52px] xl:text-[58px]">
                      <AnimatedNumber
                        value={stat.value}
                        suffix={stat.suffix}
                        active={isInView}
                        reduceMotion={reduceMotion}
                      />
                    </h3>

                    {/* Orange Accent */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: 55 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: 0.4 + index * 0.13,
                      }}
                      className="mt-3 h-[4px] rounded-full bg-[#F58220]"
                    />
                  </div>
                </div>

                {/* Label */}
                <p className="mt-5 text-[14px] font-medium leading-relaxed text-[#718096] sm:text-[17px] lg:text-[18px]">
                  {stat.label}
                </p>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="h-px w-full origin-left bg-[#E2E8F0]"
        />

      </div>
    </section>
  );
}
