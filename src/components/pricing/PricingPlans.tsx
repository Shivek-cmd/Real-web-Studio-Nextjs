"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

/* ── Check icons ─────────────────────────────────────────── */
const CheckIcon = ({ featured }: { featured?: boolean }) => (
  <svg width="17" height="17" viewBox="0 0 18 18" fill="none" className="mt-[2px] shrink-0">
    <circle cx="9" cy="9" r="9" fill="#FF6B35" fillOpacity={featured ? 1 : 0.15} />
    <path
      d="M5.5 9l2.5 2.5 4.5-4.5"
      stroke={featured ? "white" : "#FF6B35"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CrossIcon = () => (
  <svg width="17" height="17" viewBox="0 0 18 18" fill="none" className="mt-[2px] shrink-0">
    <circle cx="9" cy="9" r="9" fill="#6B7280" fillOpacity={0.12} />
    <path d="M6 6l6 6M12 6l-6 6" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

/* ── Plans ───────────────────────────────────────────────── */
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
  "Advanced local SEO",
  "Google Review automation",
  "Lead generation setup",
  "Monthly performance report",
  "Priority support",
];

const FEATURES_CUSTOM = [
  "Everything in Growth",
  "Unlimited pages",
  "E-commerce / booking systems",
  "Custom integrations & APIs",
  "AI chatbot implementation",
  "Dedicated account manager",
  "White-glove onboarding",
  "Custom SLA & reporting",
];

const PLANS = [
  {
    name: "Starter",
    tagline: "Perfect for getting online fast.",
    monthlyPrice: 9.99,
    yearlyPrice: 7.99,
    badge: null,
    featured: false,
    features: FEATURES_STARTER,
    cta: "Get Started →",
    ctaHref: "/contact",
    custom: false,
  },
  {
    name: "Growth",
    tagline: "For businesses ready to scale.",
    monthlyPrice: 49.99,
    yearlyPrice: 39.99,
    badge: "Most Popular",
    featured: true,
    features: FEATURES_GROWTH,
    cta: "Start Growing →",
    ctaHref: "/contact",
    custom: false,
  },
  {
    name: "Custom",
    tagline: "Built around your exact needs.",
    monthlyPrice: null,
    yearlyPrice: null,
    badge: null,
    featured: false,
    features: FEATURES_CUSTOM,
    cta: "Get a Custom Quote →",
    ctaHref: "/contact",
    custom: true,
  },
];

/* ── Compare table ───────────────────────────────────────── */
const COMPARE_ROWS: {
  label: string;
  starter: string | boolean;
  growth: string | boolean;
  custom: string | boolean;
}[] = [
  { label: "Pages included",        starter: "Up to 5",   growth: "Up to 10",  custom: "Unlimited"      },
  { label: "Custom design",         starter: true,        growth: true,         custom: true              },
  { label: "Mobile responsive",     starter: true,        growth: true,         custom: true              },
  { label: "Hosting & SSL",         starter: true,        growth: true,         custom: true              },
  { label: "Domain connection",     starter: true,        growth: true,         custom: true              },
  { label: "Monthly updates",       starter: true,        growth: true,         custom: true              },
  { label: "Google My Business",    starter: true,        growth: true,         custom: true              },
  { label: "Basic SEO",             starter: true,        growth: true,         custom: true              },
  { label: "Advanced local SEO",    starter: false,       growth: true,         custom: true              },
  { label: "Social media mgmt",     starter: false,       growth: true,         custom: true              },
  { label: "Review automation",     starter: false,       growth: true,         custom: true              },
  { label: "Lead generation",       starter: false,       growth: true,         custom: true              },
  { label: "E-commerce / booking",  starter: false,       growth: false,        custom: true              },
  { label: "AI chatbot",            starter: false,       growth: false,        custom: true              },
  { label: "Support",               starter: "Email",     growth: "Priority",   custom: "Dedicated mgr"  },
];

/* ── Plan Card ───────────────────────────────────────────── */
function PlanCard({
  plan,
  yearly,
  i,
}: {
  plan: (typeof PLANS)[0];
  yearly: boolean;
  i: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.52, delay: 0.08 + i * 0.1, ease: "easeOut" }}
      className={`relative flex flex-col rounded-[20px] p-8 ${
        plan.featured
          ? "bg-dark shadow-large"
          : "border border-site-border bg-white shadow-card"
      }`}
    >
      {/* Corner decoration */}
      {plan.featured && (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-[20px]">
          <div className="absolute -right-8 -top-8 h-[160px] w-[160px] rounded-full bg-orange opacity-[0.18]" />
        </div>
      )}

      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-orange px-4 py-1.5 text-[12px] font-bold text-white shadow-orange">
          {plan.badge}
        </div>
      )}

      {/* Plan name */}
      <p className="mb-1 text-[12px] font-extrabold uppercase tracking-[2px] text-orange">
        {plan.name}
      </p>
      <p className={`mb-5 text-[13px] leading-snug ${plan.featured ? "text-white/50" : "text-gray"}`}>
        {plan.tagline}
      </p>

      {/* Price */}
      {plan.custom ? (
        <div className="mb-1">
          <span className={`text-[36px] font-extrabold leading-none tracking-[-1px] ${plan.featured ? "text-white" : "text-site-text"}`}>
            Let&apos;s Talk
          </span>
        </div>
      ) : (
        <div className="mb-1 flex items-end gap-1">
          <span className={`text-[42px] font-extrabold leading-none tracking-[-1px] ${plan.featured ? "text-white" : "text-site-text"}`}>
            ${price!.toFixed(2)}
          </span>
          <span className={`mb-1.5 text-[14px] ${plan.featured ? "text-white/50" : "text-gray"}`}>/mo</span>
        </div>
      )}

      {yearly && !plan.custom && (
        <p className={`mb-5 text-[12px] ${plan.featured ? "text-white/50" : "text-gray"}`}>
          Billed annually · Save ${((plan.monthlyPrice! - plan.yearlyPrice!) * 12).toFixed(0)}/yr
        </p>
      )}

      {/* CTA */}
      <Link
        href={plan.ctaHref}
        className={`mb-8 mt-5 block rounded-full py-[13px] text-center text-[14px] font-bold transition-all duration-200 hover:-translate-y-px ${
          plan.featured
            ? "bg-orange text-white shadow-orange hover:bg-orange-dark"
            : "bg-orange text-white shadow-orange hover:bg-orange-dark"
        }`}
      >
        {plan.cta}
      </Link>

      {/* Features */}
      <ul className="flex flex-col gap-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <CheckIcon featured={plan.featured} />
            <span className={`text-[13.5px] leading-[1.55] ${plan.featured ? "text-white/75" : "text-gray"}`}>
              {f}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* ── Section ─────────────────────────────────────────────── */
export default function PricingPlans() {
  const [yearly, setYearly] = useState(false);
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });
  const tableRef = useRef(null);
  const tableInView = useInView(tableRef, { once: true, margin: "-60px" });

  return (
    <section className="bg-gray-light px-[5%] py-[90px]">
      <div className="mx-auto max-w-[1080px]">

        {/* Header */}
        <div ref={titleRef} className="mb-12 text-center">
          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
            Pricing Plans
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[30px] font-extrabold leading-[1.2] tracking-[-0.5px] text-site-text sm:text-[40px]"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <p className="mx-auto mt-4 max-w-[480px] text-[15px] leading-[1.7] text-gray">
            No setup fees. No hidden costs. No lock-in contracts. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-site-border bg-white p-1.5">
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

        {/* Plan Cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} yearly={yearly} i={i} />
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[13px] text-gray">
          {["Free migration included", "Live in 72 hours", "Cancel anytime", "Canadian support team"].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <span className="text-orange">✓</span> {t}
            </span>
          ))}
        </div>

        {/* ── Comparison Table ─────────────────────────────── */}
        <div ref={tableRef} className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            animate={tableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="mb-8 text-center text-[22px] font-extrabold tracking-[-0.3px] text-site-text"
          >
            Compare Plans
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={tableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overflow-hidden rounded-[20px] border border-site-border bg-white shadow-card"
          >
            {/* Table header */}
            <div className="grid grid-cols-4 border-b border-site-border bg-gray-light px-6 py-4">
              <div className="text-[12px] font-extrabold uppercase tracking-[1.5px] text-gray">Feature</div>
              <div className="text-center text-[12px] font-extrabold uppercase tracking-[1.5px] text-gray">Starter</div>
              <div className="text-center text-[12px] font-extrabold uppercase tracking-[1.5px] text-orange">Growth</div>
              <div className="text-center text-[12px] font-extrabold uppercase tracking-[1.5px] text-gray">Custom</div>
            </div>

            {/* Rows */}
            {COMPARE_ROWS.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-4 items-center border-b border-site-border px-6 py-[14px] last:border-0 ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-light/50"
                }`}
              >
                <span className="text-[13.5px] font-medium text-site-text">{row.label}</span>

                {(["starter", "growth", "custom"] as const).map((col) => {
                  const val = row[col];
                  return (
                    <div key={col} className="flex justify-center">
                      {typeof val === "boolean" ? (
                        val ? <CheckIcon featured={col === "growth"} /> : <CrossIcon />
                      ) : (
                        <span className={`text-[12.5px] font-semibold ${col === "growth" ? "text-orange" : "text-site-text"}`}>
                          {val}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
