"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";

const TABS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Too Expensive",
    body: "Agencies charge $3,000–$10,000 upfront. That's money most small businesses simply don't have sitting around — and the ROI never shows up.",
    image: "https://images.pexels.com/photos/5900134/pexels-photo-5900134.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Small business owner looking stressed at an expensive invoice next to her laptop",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Takes Months",
    body: "Traditional web projects drag on for 2–4 months. Your competitors are already getting customers while you're still waiting on revision round three.",
    image: "https://images.pexels.com/photos/3760811/pexels-photo-3760811.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Frustrated business owner resting his head on his desk waiting for his website to launch",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: "Too Complicated",
    body: "WordPress, plugins, hosting, domains, SSL, updates — it's a full-time job just to keep the lights on. You started a business, not a tech department.",
    image: "https://images.pexels.com/photos/4226215/pexels-photo-4226215.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Woman covering her face in frustration in front of a laptop, overwhelmed by website technology",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="17" y1="8" x2="23" y2="14" />
        <line x1="23" y1="8" x2="17" y2="14" />
      </svg>
    ),
    title: "Abandoned After Launch",
    body: "Most agencies disappear after they cash your cheque. Updates, bugs, backups — suddenly your problem. Your site breaks and no one picks up the phone.",
    image: "https://images.pexels.com/photos/5239941/pexels-photo-5239941.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Frustrated business owner leaning over her desk with phone and laptop, unable to reach web agency for support",
  },
];

const AUTO_INTERVAL = 5000;

export default function WhySection() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: "-120px" });
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % TABS.length);
    }, AUTO_INTERVAL);
  }, []);

  // Start/stop auto-switch based on visibility
  useEffect(() => {
    if (inView) {
      startTimer();
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [inView, startTimer]);

  const handleTabClick = (i: number) => {
    setActive(i);
    startTimer(); // reset timer on manual click
  };

  return (
    <section className="bg-white px-[5%] py-[90px]">
      <div className="mx-auto max-w-[1080px]">

        {/* ── Header ─────────────────────────────────────── */}
        <div ref={titleRef} className="mb-14 text-center">
          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
            The Problem
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[32px] font-extrabold leading-[1.2] tracking-[-0.5px] text-site-text sm:text-[40px]"
          >
            Getting a Website Should not Be This Hard
          </motion.h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-[1.7] text-gray">
            Small business owners in Canada face the same four obstacles over and over again.
            RealWebStudio was built to eliminate every single one.
          </p>
        </div>

        {/* ── 2-col: tabs | image ─────────────────────────── */}
        <div ref={sectionRef} className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Left: tab list */}
          <div className="flex flex-col gap-4">
            {TABS.map((tab, i) => {
              const isActive = active === i;
              return (
                <button
                  key={tab.title}
                  onClick={() => handleTabClick(i)}
                  className={`group w-full rounded-[14px] border px-5 py-5 text-left transition-all duration-300 ${
                    isActive
                      ? "border-l-[4px] border-orange bg-white shadow-card"
                      : "border-site-border bg-white hover:border-orange/40 hover:shadow-card"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon box */}
                    <div
                      className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] transition-colors duration-300 ${
                        isActive
                          ? "bg-orange text-white"
                          : "bg-gray-light text-gray group-hover:bg-orange-light group-hover:text-orange"
                      }`}
                    >
                      {tab.icon}
                    </div>

                    {/* Text */}
                    <div>
                      <h3
                        className={`mb-1.5 text-[16px] font-bold transition-colors duration-200 ${
                          isActive ? "text-site-text" : "text-site-text"
                        }`}
                      >
                        {tab.title}
                      </h3>
                      <p className="text-[13.5px] leading-[1.7] text-gray">{tab.body}</p>
                    </div>
                  </div>

                </button>
              );
            })}
          </div>

          {/* Right: image panel */}
          <div className="relative h-[420px] overflow-hidden rounded-[16px] shadow-large lg:h-full lg:min-h-[520px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={TABS[active].image}
                  alt={TABS[active].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority={active === 0}
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
                {/* Label chip */}
                <div className="absolute bottom-5 left-5 rounded-full bg-orange px-4 py-1.5 text-[12px] font-bold text-white shadow-orange">
                  {TABS[active].title}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* ── Solution callout ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-8 flex flex-col items-center justify-between gap-5 rounded-[14px] bg-orange px-8 py-6 text-white shadow-orange sm:flex-row"
        >
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[2px] text-white/70">
              The Solution
            </p>
            <h3 className="mt-1 text-[20px] font-extrabold">
              RealWebStudio eliminates all four problems — starting at $9.99/mo.
            </h3>
          </div>
          <a
            href="#get-started-form"
            className="shrink-0 rounded-full bg-white px-7 py-3 text-[14px] font-bold text-orange transition-all duration-200 hover:-translate-y-px hover:shadow-lg"
          >
            Get Started Free →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
