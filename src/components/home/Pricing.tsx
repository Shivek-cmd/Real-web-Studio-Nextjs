"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const FEATURES_STARTER = [
  "Custom-designed website (up to 5 pages)",
  "Mobile-responsive & fast-loading",
  "SSL certificate included",
  "Hosting & backups included",
  "Domain connection",
  "Monthly content updates",
  "24/7 uptime monitoring",
  "Google My Business setup",
  "Basic SEO optimization",
  "Email support",
];

const FEATURES_GROWTH = [
  "Everything in Starter",
  "Up to 10 pages",
  "Social media management",
  "Local SEO optimization",
  "Google Review automation",
  "Lead generation setup",
  "Monthly performance report",
  "Priority support",
];

interface Plan {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  badge?: string;
  highlight: boolean;
  features: string[];
  cta: string;
  ctaHref: string;
}

const PLANS: Plan[] = [
  {
    name: "Starter",
    monthlyPrice: 9.99,
    yearlyPrice: 7.99,
    highlight: false,
    features: FEATURES_STARTER,
    cta: "Get Started →",
    ctaHref: "#get-started-form",
  },
  {
    name: "Growth",
    monthlyPrice: 49.99,
    yearlyPrice: 39.99,
    badge: "Most Popular",
    highlight: true,
    features: FEATURES_GROWTH,
    cta: "Start Growing →",
    ctaHref: "#get-started-form",
  },
];

const CheckIcon = ({ highlight }: { highlight: boolean }) => (
  <svg width="17" height="17" viewBox="0 0 18 18" fill="none" className="mt-[2px] shrink-0">
    <circle cx="9" cy="9" r="9" fill="#FF6B35" fillOpacity={highlight ? 1 : 0.15} />
    <path
      d="M5.5 9l2.5 2.5 4.5-4.5"
      stroke={highlight ? "white" : "#FF6B35"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function PlanCard({ plan, yearly, i }: { plan: Plan; yearly: boolean; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
      className={`relative flex flex-col rounded-[20px] p-8 ${
        plan.highlight
          ? "bg-dark shadow-large"
          : "border border-site-border bg-white shadow-card"
      }`}
    >
      {/* Corner decoration wrapper — own overflow-hidden so badge isn't clipped */}
      {plan.highlight && (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-[20px]">
          <div className="absolute -right-8 -top-8 h-[150px] w-[150px] rounded-full bg-orange opacity-[0.18]" />
        </div>
      )}

      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-orange px-4 py-1.5 text-[12px] font-bold text-white shadow-orange">
          {plan.badge}
        </div>
      )}

      <p className={`mb-1 text-[12px] font-extrabold uppercase tracking-[2px] ${plan.highlight ? "text-orange" : "text-orange"}`}>
        {plan.name}
      </p>

      <div className="mb-1 flex items-end gap-1">
        <span className={`text-[42px] font-extrabold leading-none tracking-[-1px] ${plan.highlight ? "text-white" : "text-site-text"}`}>
          ${price.toFixed(2)}
        </span>
        <span className={`mb-1.5 text-[14px] ${plan.highlight ? "text-white/50" : "text-gray"}`}>
          /mo
        </span>
      </div>

      {yearly && (
        <p className={`mb-5 text-[12px] ${plan.highlight ? "text-white/50" : "text-gray"}`}>
          Billed annually · Save ${((plan.monthlyPrice - plan.yearlyPrice) * 12).toFixed(0)}/yr
        </p>
      )}

      <Link
        href={plan.ctaHref}
        className={`mb-7 mt-5 block rounded-full py-[13px] text-center text-[14px] font-bold transition-all duration-200 hover:-translate-y-px ${
          plan.highlight
            ? "bg-orange text-white shadow-orange hover:bg-orange-dark"
            : "bg-orange text-white shadow-orange hover:bg-orange-dark"
        }`}
      >
        {plan.cta}
      </Link>

      <ul className="space-y-3">
        {plan.features.map((f) => (
          <li key={f} className={`flex items-start gap-2.5 text-[14px] leading-[1.5] ${plan.highlight ? "text-white/75" : "text-gray"}`}>
            <CheckIcon highlight={plan.highlight} />
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="bg-gray-light px-[5%] py-[80px]">
      <div className="mx-auto max-w-[1080px]">

        <div ref={titleRef} className="mb-12 text-center">
          <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[2px] text-orange">
            Pricing
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[32px] font-extrabold leading-[1.2] tracking-[-0.5px] text-site-text sm:text-[38px]"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <p className="mx-auto mt-4 max-w-[480px] text-[16px] leading-[1.7] text-gray">
            No setup fees, no hidden costs, no lock-in contracts. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-site-border bg-white p-1.5">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-5 py-2 text-[13px] font-semibold transition-all duration-200 ${
                !yearly ? "bg-orange text-white shadow-orange" : "text-gray hover:text-site-text"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`rounded-full px-5 py-2 text-[13px] font-semibold transition-all duration-200 ${
                yearly ? "bg-orange text-white shadow-orange" : "text-gray hover:text-site-text"
              }`}
            >
              Yearly
              <span className="ml-1.5 text-[11px] font-bold text-green">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:max-w-[700px] lg:mx-auto">
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} yearly={yearly} i={i} />
          ))}
        </div>

        {/* Custom plan */}
        <div className="mt-8 rounded-[14px] border border-site-border bg-white p-6 text-center shadow-card md:flex md:items-center md:justify-between md:text-left">
          <div className="mb-4 md:mb-0">
            <h3 className="text-[18px] font-bold text-site-text">Need Something Custom?</h3>
            <p className="mt-1 text-[14px] text-gray">
              E-commerce, large sites, custom integrations — let's talk and build the right package for you.
            </p>
          </div>
          <Link
            href="#get-started-form"
            className="inline-block rounded-full border border-orange px-7 py-3 text-[14px] font-bold text-orange transition-all duration-200 hover:bg-orange hover:text-white"
          >
            Get a Custom Quote →
          </Link>
        </div>

      </div>
    </section>
  );
}
