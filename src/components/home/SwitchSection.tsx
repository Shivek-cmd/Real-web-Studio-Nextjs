"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

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

const CARDS = [
  {
    num: "01",
    title: "We Handle the Migration",
    desc: "We'll transfer your existing content, pages, and domain to your new site. Zero downtime, zero stress.",
    bullets: [
      "Full content transfer — pages, images, and domain",
      "Zero downtime during the entire switch",
      "Done and live within 72 hours",
    ],
    featured: false,
  },
  {
    num: "02",
    title: "Save Money Every Month",
    desc: "Most businesses pay $50–$200/month in hosting and maintenance costs. We bundle it all from $9.99/mo.",
    bullets: [
      "All-inclusive from just $9.99 per month",
      "Hosting, SSL, and support fully bundled",
      "No setup fees, no surprise invoices — ever",
    ],
    featured: true,
  },
  {
    num: "03",
    title: "Better Results, Guaranteed",
    desc: "Faster load times, better SEO, more conversions. Your new site will outperform your old one — or we'll make it right.",
    bullets: [
      "Faster load times and improved Google rankings",
      "Higher conversions from day one",
      "If it doesn't perform, we make it right",
    ],
    featured: false,
  },
];

export default function SwitchSection() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="switch" className="bg-gray-light px-[5%] py-[90px]">
      <div className="mx-auto max-w-[1080px]">

        {/* Header */}
        <div ref={titleRef} className="mb-14 text-center">
          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
            Already Have a Site?
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-[620px] text-[30px] font-extrabold leading-[1.2] tracking-[-0.5px] text-site-text sm:text-[40px]"
          >
            Migrate to RealWebStudio —{" "}
            <span className="text-orange">It&apos;s Free.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mx-auto mt-4 max-w-[500px] text-[15px] leading-[1.7] text-gray"
          >
            Stuck with an outdated website? Paying too much for hosting? We&apos;ll
            move you over for free and have your new site live within 72 hours.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="mb-12 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.52, delay: 0.1 + i * 0.1, ease: "easeOut" }}
              className={`relative flex flex-col overflow-hidden rounded-[20px] p-8 ${
                card.featured
                  ? "bg-dark shadow-large"
                  : "border border-site-border bg-white"
              }`}
            >
              {/* Corner decoration — featured card only */}
              {card.featured && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 h-[150px] w-[150px] rounded-full bg-orange opacity-[0.18]"
                />
              )}

              {/* Number badge */}
              <div className="relative mb-7 flex h-10 w-10 items-center justify-center rounded-[10px] bg-orange text-[13px] font-extrabold text-white shadow-orange">
                {card.num}
              </div>

              {/* Title */}
              <h3
                className={`mb-3 text-[21px] font-extrabold leading-[1.2] ${
                  card.featured ? "text-white" : "text-site-text"
                }`}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className={`mb-7 text-[14px] leading-[1.75] ${
                  card.featured ? "text-white/60" : "text-gray"
                }`}
              >
                {card.desc}
              </p>

              {/* Bullets */}
              <ul className="mt-auto flex flex-col gap-[14px]">
                {card.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckIcon />
                    <span
                      className={`text-[13.5px] leading-[1.6] ${
                        card.featured ? "text-white/75" : "text-site-text"
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

        {/* CTA */}
        <div className="text-center">
          <Link
            href="#get-started-form"
            className="rounded-full bg-orange px-8 py-[14px] text-[15px] font-bold text-white shadow-orange transition-all duration-200 hover:-translate-y-px hover:bg-orange-dark"
          >
            Migrate My Website Free →
          </Link>
          <p className="mt-5 text-[13px] text-gray">
            Free migration · No downtime · Cancel anytime
          </p>
        </div>

      </div>
    </section>
  );
}
