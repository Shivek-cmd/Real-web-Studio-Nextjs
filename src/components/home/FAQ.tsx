"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const FAQS = [
  {
    q: "How fast will my website be live?",
    a: "Most websites are live within 72 hours of you submitting your information. Complex sites with custom features may take 5–7 business days.",
  },
  {
    q: "Do I need any technical skills?",
    a: "None at all. We handle everything — design, development, hosting, SSL, and ongoing maintenance. You just provide your business information and we take care of the rest.",
  },
  {
    q: "What's included in the $9.99/month plan?",
    a: "Your custom website (up to 5 pages), hosting, SSL certificate, domain connection, monthly content updates, 24/7 uptime monitoring, Google My Business setup, and basic SEO. Everything you need to have a professional online presence.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no contracts or lock-in periods. You can cancel your subscription anytime — no questions asked, no cancellation fees.",
  },
  {
    q: "What if I already have a website?",
    a: "We offer free migration from your existing website. We'll transfer all your content, connect your domain, and have your new site live with zero downtime.",
  },
  {
    q: "Do you serve businesses outside Edmonton?",
    a: "Yes! We serve businesses across Canada — Edmonton, Calgary, Vancouver, Toronto, Ottawa, and everywhere in between. 100% remote service.",
  },
  {
    q: "What kind of businesses do you work with?",
    a: "We work with all types of Canadian small businesses — trades, healthcare, legal, dental, real estate, restaurants, retail, and more. If you need customers, you need a website, and we can help.",
  },
  {
    q: "Will my website rank on Google?",
    a: "Every website we build includes basic on-page SEO. For serious local search visibility, we offer our Local SEO Growth service, which includes Google Business Profile optimization, local citations, and monthly content.",
  },
];

function FAQItem({ faq, i }: { faq: typeof FAQS[0]; i: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: i * 0.06 }}
      className="border-b border-site-border last:border-0"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-[15px] font-semibold text-site-text transition-colors duration-150 hover:text-orange"
      >
        {faq.q}
        <span
          className={`shrink-0 text-[20px] font-light leading-none text-orange transition-transform duration-200 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[14px] leading-[1.8] text-gray">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="bg-gray-light px-[5%] py-[80px]">
      <div className="mx-auto max-w-[760px]">

        <div ref={titleRef} className="mb-12 text-center">
          <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[2px] text-orange">
            FAQ
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[32px] font-extrabold leading-[1.2] tracking-[-0.5px] text-site-text sm:text-[38px]"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="rounded-[14px] border border-site-border bg-white px-6 py-2 shadow-card">
          {FAQS.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
