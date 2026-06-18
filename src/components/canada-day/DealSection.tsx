"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PAGES = [
  {
    title: "Home Page",
    desc: "Your first impression — designed to convert visitors into leads.",
    img: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
    imgAlt: "Business team — Home page",
    icon: "🏠",
  },
  {
    title: "About Page",
    desc: "Build trust. Tell your story. Show the face behind the brand.",
    img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    imgAlt: "Business people — About page",
    icon: "👤",
  },
  {
    title: "Services Page",
    desc: "Showcase what you offer with clarity and confidence.",
    img: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
    imgAlt: "Team working — Services page",
    icon: "🛠️",
  },
  {
    title: "Contact Page",
    desc: "Make it effortless for customers to reach you.",
    img: "https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=800",
    imgAlt: "Phone communication — Contact page",
    icon: "📞",
  },
];

const FEATURES = [
  "Custom design for your brand & colours",
  "Mobile-responsive & fast-loading",
  "SSL certificate included",
  "Hosting & daily backups included",
  "Domain connection (you own it forever)",
  "Monthly content updates",
  "Google My Business setup",
  "Basic SEO on every page",
  "30-day priority support",
  "No lock-in — cancel anytime",
];

function CheckIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 18 18" fill="none" className="mt-[2px] shrink-0">
      <circle cx="9" cy="9" r="9" fill="#FF6B35" fillOpacity={0.15} />
      <path
        d="M5.5 9l2.5 2.5 4.5-4.5"
        stroke="#FF6B35"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const EASE = [0.22, 1, 0.36, 1] as const;

export default function DealSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-gray-light px-side-gap py-20">
      <div ref={ref} className="mx-auto max-w-[1080px]">

        {/* ── Section header ──────────────────────────────── */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[2.5px] text-orange">
            🍁 What You Get
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-[30px] font-extrabold leading-[1.2] tracking-[-0.5px] text-site-text sm:text-[38px]"
          >
            A Complete Website, Built for{" "}
            <span className="text-orange">Your Business</span>
          </motion.h2>
          <p className="mx-auto mt-4 max-w-120 text-[16px] leading-[1.7] text-gray">
            One package. One price. Done for you in 72 hours — so you can focus on
            running your business.
          </p>
        </div>

        {/* ── Splash image + Price card ────────────────────── */}
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px] lg:items-start">

          {/* Splash image */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="relative overflow-hidden rounded-[20px] shadow-large"
            style={{ minHeight: 360 }}
          >
            <Image
              src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Professional website designed for a Canadian small business"
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover object-center"
            />
            {/* gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-dark/80 via-dark/20 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-r from-dark/40 via-transparent to-transparent" />

            {/* Overlay badge */}
            <div className="absolute left-6 top-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-bold text-white backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-green" />
                Professional · Mobile-Ready · Fast
              </span>
            </div>

            {/* Bottom text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-[22px] font-extrabold leading-[1.2] text-white">
                Your website — live in{" "}
                <span className="text-orange">72 hours.</span>
              </p>
              <p className="mt-1.5 text-[14px] text-white/65">
                Custom-designed for your brand. We build it, you own it.
              </p>
            </div>
          </motion.div>

          {/* Price card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2, ease: EASE }}
            className="sticky top-24"
          >
            <div className="relative overflow-hidden rounded-[20px] bg-dark p-7 shadow-large">
              {/* Glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-[180px] w-[180px] rounded-full opacity-20"
                style={{ background: "radial-gradient(circle, #FF6B35 0%, transparent 70%)" }}
              />

              <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#D80621] px-4 py-1.5 text-[12px] font-bold text-white">
                🍁 Canada Day Price
              </div>

              <p className="mb-1 text-[11px] font-extrabold uppercase tracking-[2px] text-orange">
                4-Page Website Package
              </p>

              <div className="flex items-end gap-2">
                <span className="text-[50px] font-extrabold leading-none tracking-[-2px] text-white">
                  $9.99
                </span>
                <span className="mb-2 text-[14px] text-white/40">/mo</span>
              </div>

              <div className="mb-5 mt-1 flex items-center gap-2">
                <span className="text-[14px] text-white/30 line-through">$29.99/mo</span>
                <span className="rounded-full bg-green/15 px-2.5 py-0.5 text-[11px] font-bold text-green">
                  Save $240/yr
                </span>
              </div>

              <Link
                href="#claim"
                className="mb-5 block rounded-full bg-orange py-3.25 text-center text-[14px] font-bold text-white shadow-orange transition-all duration-200 hover:-translate-y-px hover:bg-orange-dark"
              >
                🍁 Claim This Deal →
              </Link>

              <ul className="space-y-2.5">
                {FEATURES.slice(0, 6).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[13px] leading-normal text-white/60">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-center text-[11px] text-white/25">
                No setup fees · No credit card to start
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── 4-page photo cards ───────────────────────────── */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.25, ease: EASE }}
            className="mb-5 text-[18px] font-bold text-site-text"
          >
            Your 4-page website includes:
          </motion.h3>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {PAGES.map((page, i) => (
              <motion.div
                key={page.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.09, ease: EASE }}
                className="group relative overflow-hidden rounded-2xl shadow-card"
                style={{ minHeight: 200 }}
              >
                <Image
                  src={page.img}
                  alt={page.imgAlt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-dark/90 via-dark/40 to-dark/10" />

                {/* Top icon */}
                <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-[16px] backdrop-blur-sm">
                  {page.icon}
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[13px] font-extrabold text-white">{page.title}</p>
                  <p className="mt-1 text-[11px] leading-[1.45] text-white/55">{page.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Full features grid ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
          className="mb-10 rounded-[20px] border border-site-border bg-white p-7 shadow-card"
        >
          <p className="mb-5 text-[13px] font-extrabold uppercase tracking-[1.5px] text-site-text">
            Every spot includes:
          </p>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[14px] leading-normal text-gray">
                <CheckIcon />
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ── "Not a gimmick" callout ──────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
          className="relative overflow-hidden rounded-[20px] bg-dark p-8 text-center shadow-large"
        >
          {/* Subtle Canadian flag accent */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, #D80621 0%, transparent 70%)",
            }}
          />
          <div className="absolute bottom-0 left-[15%] right-[15%] h-px bg-linear-to-r from-transparent via-orange/40 to-transparent" />

          <p className="relative mb-3 text-[12px] font-extrabold uppercase tracking-[2.5px] text-orange">
            A Note from Us
          </p>
          <p className="relative mx-auto max-w-155 text-[16px] leading-[1.8] text-white/80">
            <strong className="font-bold text-white">This isn&apos;t a gimmick.</strong> This is us
            betting on Canadian small businesses — because we believe every local shop, every
            freelancer, every family-run business deserves to look professional online. Canada Day
            felt like the right moment to put our money where our mouth is.
          </p>
          <p className="relative mx-auto mt-5 text-[13px] text-white/35">
            🇨🇦 Canadian businesses only &nbsp;·&nbsp; 🍁 Canada Day only &nbsp;·&nbsp; 🔢 100 spots only
          </p>
        </motion.div>

      </div>
    </section>
  );
}
