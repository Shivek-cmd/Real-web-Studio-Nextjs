"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CheckIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    className="mt-[1px] shrink-0"
  >
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

const PILLARS = [
  {
    num: "01",
    title: "Custom Website",
    desc: "A fast, beautiful site launched in 72 hours — built from day one to convert visitors into paying customers.",
    bullets: [
      "Mobile-first design and blazing-fast load times",
      "Conversion-optimized layouts and professional copy",
      "Hosting, SSL, and domain — zero setup headaches",
    ],
    featured: false,
  },
  {
    num: "02",
    title: "Local SEO & Rankings",
    desc: "Get found on Google by customers in your area who are actively searching for exactly what you offer.",
    bullets: [
      "Google Business Profile setup and optimization",
      "Local keyword targeting across your city and province",
      "Monthly reporting, rank tracking, and content updates",
    ],
    featured: true,
  },
  {
    num: "03",
    title: "AI Automation & Support",
    desc: "Your business stays active 24/7 — capturing leads, collecting reviews, and answering customers even when you're offline.",
    bullets: [
      "AI chatbot, WhatsApp & live chat integration",
      "Google review automation and reputation management",
      "Ongoing updates, fixes, and dedicated support",
    ],
    featured: false,
  },
];

export default function OfferingsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white px-[5%] py-[90px]">
      <div className="mx-auto max-w-[1080px]">

        {/* Header */}
        <div ref={ref} className="mb-14 text-center">
          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
            What&apos;s Included
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-[600px] text-[30px] font-extrabold leading-[1.2] tracking-[-0.5px] text-site-text sm:text-[40px]"
          >
            Website, SEO &amp; Growth —{" "}
            <span className="text-orange">all in one place.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mx-auto mt-4 max-w-[500px] text-[15px] leading-[1.7] text-gray"
          >
            Stop juggling multiple agencies. We handle your entire digital
            presence — design, rankings, and automation — from one team.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.52, delay: 0.1 + i * 0.1, ease: "easeOut" }}
              className={`relative flex flex-col overflow-hidden rounded-[20px] p-8 ${
                p.featured
                  ? "bg-dark shadow-large"
                  : "border border-site-border bg-gray-light"
              }`}
            >
              {/* Decorative corner circle — featured card only */}
              {p.featured && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 h-[150px] w-[150px] rounded-full bg-orange opacity-[0.18]"
                  style={{ filter: "none" }}
                />
              )}

              {/* Number badge */}
              <div className="relative mb-7 flex h-10 w-10 items-center justify-center rounded-[10px] bg-orange text-[13px] font-extrabold text-white shadow-orange">
                {p.num}
              </div>

              {/* Title */}
              <h3
                className={`mb-3 text-[21px] font-extrabold leading-[1.2] ${
                  p.featured ? "text-white" : "text-site-text"
                }`}
              >
                {p.title}
              </h3>

              {/* Description */}
              <p
                className={`mb-7 text-[14px] leading-[1.75] ${
                  p.featured ? "text-white/60" : "text-gray"
                }`}
              >
                {p.desc}
              </p>

              {/* Bullet list */}
              <ul className="mt-auto flex flex-col gap-[14px]">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckIcon />
                    <span
                      className={`text-[13.5px] leading-[1.6] ${
                        p.featured ? "text-white/75" : "text-site-text"
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
