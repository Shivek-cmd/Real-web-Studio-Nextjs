"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mt-[1px] shrink-0">
    <circle cx="9" cy="9" r="9" fill="#FF6B35" />
    <path
      d="M5.5 9l2.5 2.5 4.5-4.5"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const VALUES = [
  {
    num: "01",
    title: "Speed Without Compromise",
    desc: "72-hour launches are our standard, not our promise. We've built the systems and the team to deliver fast without ever cutting corners on quality.",
    bullets: [
      "Live websites in 72 hours — guaranteed",
      "Built-in quality checks at every step",
      "No waiting weeks for a draft",
    ],
    featured: false,
  },
  {
    num: "02",
    title: "Honest Pricing, Always",
    desc: "No setup fees, no hidden costs, no surprise invoices. The price you see is the price you pay — month after month, with no lock-in contracts.",
    bullets: [
      "Zero setup fees or hidden charges",
      "Cancel anytime — no contracts",
      "Transparent monthly billing, period",
    ],
    featured: true,
  },
  {
    num: "03",
    title: "Results-First Mindset",
    desc: "Pretty websites are useless without customers. Everything we build is designed to convert visitors into calls, leads, and sales for your business.",
    bullets: [
      "Conversion-focused on every page",
      "Local SEO baked in from day one",
      "We stay after launch — updates & support",
    ],
    featured: false,
  },
];

export default function Values() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white px-[5%] py-[90px]">
      <div className="mx-auto max-w-[1080px]">

        {/* Header */}
        <div ref={ref} className="mb-14 text-center">
          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
            What We Stand For
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-[560px] text-[30px] font-extrabold leading-[1.2] tracking-[-0.5px] text-site-text sm:text-[38px]"
          >
            Our Values Drive{" "}
            <span className="text-orange">Everything We Do</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.num}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.52, delay: 0.1 + i * 0.1, ease: "easeOut" }}
              className={`relative flex flex-col rounded-[20px] p-8 ${
                v.featured
                  ? "bg-dark shadow-large"
                  : "border border-site-border bg-gray-light"
              }`}
            >
              {/* Corner decoration — featured card only */}
              {v.featured && (
                <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-[20px]">
                  <div className="absolute -right-8 -top-8 h-[150px] w-[150px] rounded-full bg-orange opacity-[0.18]" />
                </div>
              )}

              {/* Number badge */}
              <div className="relative mb-7 flex h-10 w-10 items-center justify-center rounded-[10px] bg-orange text-[13px] font-extrabold text-white shadow-orange">
                {v.num}
              </div>

              {/* Title */}
              <h3
                className={`mb-3 text-[21px] font-extrabold leading-[1.2] ${
                  v.featured ? "text-white" : "text-site-text"
                }`}
              >
                {v.title}
              </h3>

              {/* Description */}
              <p
                className={`mb-7 text-[14px] leading-[1.75] ${
                  v.featured ? "text-white/60" : "text-gray"
                }`}
              >
                {v.desc}
              </p>

              {/* Bullets */}
              <ul className="mt-auto flex flex-col gap-[14px]">
                {v.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckIcon />
                    <span
                      className={`text-[13.5px] leading-[1.6] ${
                        v.featured ? "text-white/75" : "text-site-text"
                      }`}
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
