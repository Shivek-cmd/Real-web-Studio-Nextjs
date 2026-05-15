"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "Is there really no setup fee?",
    a: "Correct — zero setup fees, ever. You pay only the monthly plan price from day one. No onboarding charges, no domain fees, nothing hidden.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no lock-in contracts. Cancel with 30 days' notice and we'll hand over all your files — no questions, no penalties.",
  },
  {
    q: "What does 'monthly content updates' include?",
    a: "Text changes, image swaps, new contact details, adding team members, updating hours — anything you'd normally need to keep your site current. Bigger structural changes are quoted separately.",
  },
  {
    q: "How does free migration work?",
    a: "If you have an existing website, we copy all your content, pages, and images to your new RealWebStudio site at no charge. We handle the domain transfer and ensure zero downtime during the switch.",
  },
  {
    q: "What's the difference between Basic SEO and Advanced Local SEO?",
    a: "Basic SEO covers meta tags, page titles, and Google indexing. Advanced Local SEO adds Google Business Profile optimization, local citation building, keyword targeting for your city, and monthly rank tracking — everything you need to rank above competitors nearby.",
  },
  {
    q: "What counts as a 'custom' plan — when do I need it?",
    a: "If you need an online store, booking/appointment system, customer portal, or any third-party API integration, Custom is the right fit. Book a free call and we'll scope it out together.",
  },
];

function FAQItem({ item, i }: { item: (typeof FAQS)[0]; i: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: i * 0.07 }}
      className="border-b border-site-border last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[15.5px] font-semibold text-site-text">{item.q}</span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-[1.5px] transition-all duration-300 ${
            open ? "border-orange bg-orange text-white" : "border-site-border text-gray"
          }`}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d={open ? "M2 5h6" : "M5 2v6M2 5h6"}
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[14px] leading-[1.75] text-gray">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function PricingFAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white px-[5%] py-[90px]">
      <div className="mx-auto max-w-[760px]">

        <div ref={ref} className="mb-12 text-center">
          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
            FAQ
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="text-[28px] font-extrabold leading-[1.2] tracking-[-0.4px] text-site-text sm:text-[34px]"
          >
            Pricing Questions, Answered
          </motion.h2>
        </div>

        <div className="rounded-[20px] border border-site-border bg-gray-light px-7 py-2">
          {FAQS.map((item, i) => (
            <FAQItem key={item.q} item={item} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
