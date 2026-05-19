"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "Is there really no setup fee?",
    a: "Correct — zero setup fees, ever. You pay only the monthly plan price from day one. No onboarding charges, no domain fees, nothing hidden.",
  },
  {
    q: "How long does it take to go live?",
    a: "The Basic plan typically launches in 1–2 weeks once we have your content. The Growth plan takes 3–4 weeks due to the additional e-commerce setup, marketing integrations, and CRM configuration. Custom timelines are scoped on a per-project basis.",
  },
  {
    q: "What's included in the Growth plan's digital marketing?",
    a: "Growth is a complete done-for-you marketing service alongside your website. It includes social media management (3 posts per week), Google & Meta ad campaigns, campaign performance tracking and reporting, advanced local SEO, Google Review automation, lead generation setup, and full CRM setup and integration.",
  },
  {
    q: "How does the yearly billing work?",
    a: "The Basic plan offers annual billing at $9.99/month, charged as $120/year — saving you $180 compared to monthly. The Growth plan is monthly only at $249.99/month, giving you full flexibility with no long-term commitment.",
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
    q: "Does the Basic plan include an online store?",
    a: "No — Basic is focused on your core web presence: up to 5 pages (Home, About, Services, Contact) with a contact form. If you need a store, the Growth plan includes a basic e-commerce setup. For a fully custom store with advanced integrations, the Custom plan is the right fit.",
  },
  {
    q: "What is the AI chatbot available on the Custom plan?",
    a: "We implement an AI-powered chatbot through bizbull.ai that handles customer inquiries, qualifies leads, and automates responses 24/7 — fully customized to your business. It's available exclusively on the Custom plan.",
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
