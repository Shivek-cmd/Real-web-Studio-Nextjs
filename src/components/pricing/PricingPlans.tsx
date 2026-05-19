"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

/* ── Icons ─────────────────────────────────────────────────── */
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

/* ── Feature item type ──────────────────────────────────────── */
type FeatureItem = string | { category: string } | { text: string; href: string };

/* ── Feature lists ──────────────────────────────────────────── */
const FEATURES_BASIC: FeatureItem[] = [
  { category: "Website" },
  "Home, About, Services & Contact pages",
  "1 contact form included",
  "Simple, custom design",
  "Mobile-responsive & fast-loading",
  "Hosted on our own servers",
  "SSL certificate & domain connection",
  { category: "Maintenance & SEO" },
  "Monthly content updates",
  "24/7 uptime monitoring",
  "Basic SEO optimization",
  "Google My Business setup",
  { category: "Support" },
  "Email support",
];

const FEATURES_GROWTH: FeatureItem[] = [
  { category: "Website" },
  "Everything in Basic",
  "Basic e-commerce store",
  "Up to 10 pages",
  "Hosted on our own servers",
  "Advanced performance optimization",
  { category: "Digital Marketing" },
  "Social media management (3 posts/week)",
  "Google & Meta ad campaigns",
  "Campaign performance tracking & reporting",
  "Advanced local SEO",
  "Google Review automation",
  "Lead generation setup",
  "CRM setup & integration",
  { category: "Support" },
  "Monthly performance reports",
  "Priority support",
];

const FEATURES_CUSTOM: FeatureItem[] = [
  { category: "Website" },
  "Everything in Growth",
  "Unlimited pages",
  "Full e-commerce / booking system",
  "Custom integrations & APIs",
  { category: "Advanced" },
  { text: "AI chatbot implementation", href: "https://bizbull.ai" },
  "Custom analytics & reporting",
  "Dedicated account manager",
  { category: "Support" },
  "White-glove onboarding",
  "Custom SLA & reporting",
];

/* ── Plan type ──────────────────────────────────────────────── */
interface Plan {
  name: string;
  tagline: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  yearlyTotal: number | null;
  noYearly: boolean;
  badge: string | null;
  featured: boolean;
  features: FeatureItem[];
  cta: string;
  ctaHref: string;
  custom: boolean;
  timeline: string | null;
}

/* ── Plans ──────────────────────────────────────────────────── */
const PLANS: Plan[] = [
  {
    name: "Basic",
    tagline: "Your professional web presence, done right.",
    monthlyPrice: 24.99,
    yearlyPrice: 9.99,
    yearlyTotal: 120,
    noYearly: false,
    badge: null,
    featured: false,
    features: FEATURES_BASIC,
    cta: "Get Started →",
    ctaHref: "/contact",
    custom: false,
    timeline: "Live in 1–2 weeks",
  },
  {
    name: "Growth",
    tagline: "Website + digital marketing, all-in-one.",
    monthlyPrice: 249.99,
    yearlyPrice: null,
    yearlyTotal: null,
    noYearly: true,
    badge: "Most Popular",
    featured: true,
    features: FEATURES_GROWTH,
    cta: "Start Growing →",
    ctaHref: "/contact",
    custom: false,
    timeline: "Live in 3–4 weeks",
  },
  {
    name: "Custom",
    tagline: "Built around your exact needs.",
    monthlyPrice: null,
    yearlyPrice: null,
    yearlyTotal: null,
    noYearly: false,
    badge: null,
    featured: false,
    features: FEATURES_CUSTOM,
    cta: "Get a Custom Quote →",
    ctaHref: "/contact",
    custom: true,
    timeline: null,
  },
];

/* ── Compare table ───────────────────────────────────────────── */
type CompareRow =
  | { isSection: true; label: string }
  | {
      isSection?: false;
      label: string;
      basic: string | boolean;
      growth: string | boolean;
      custom: string | boolean;
    };

const COMPARE_ROWS: CompareRow[] = [
  { isSection: true, label: "Website" },
  { label: "Pages included",           basic: "Up to 5",              growth: "Up to 10",           custom: "Unlimited"        },
  { label: "Custom design",            basic: true,                    growth: true,                  custom: true               },
  { label: "Mobile responsive",        basic: true,                    growth: true,                  custom: true               },
  { label: "Contact forms",            basic: "1 form",                growth: "Unlimited",           custom: "Unlimited"        },
  { label: "E-commerce store",         basic: false,                   growth: "Basic store",         custom: "Full store"       },
  { label: "Hosting (own servers)",    basic: true,                    growth: true,                  custom: true               },
  { label: "SSL & domain connection",  basic: true,                    growth: true,                  custom: true               },
  { isSection: true, label: "SEO & Performance" },
  { label: "Basic SEO",                basic: true,                    growth: true,                  custom: true               },
  { label: "Advanced local SEO",       basic: false,                   growth: true,                  custom: true               },
  { label: "Google My Business",       basic: true,                    growth: true,                  custom: true               },
  { label: "Review automation",        basic: false,                   growth: true,                  custom: true               },
  { label: "Performance tracking",     basic: false,                   growth: true,                  custom: true               },
  { isSection: true, label: "Digital Marketing" },
  { label: "Social media posts",       basic: false,                   growth: "3 posts/week",        custom: "Custom"           },
  { label: "Google & Meta ads",        basic: false,                   growth: true,                  custom: true               },
  { label: "Ad campaign management",   basic: false,                   growth: true,                  custom: true               },
  { label: "Lead generation",          basic: false,                   growth: true,                  custom: true               },
  { label: "CRM setup & integration",  basic: false,                   growth: true,                  custom: true               },
  { isSection: true, label: "Maintenance & Support" },
  { label: "Monthly content updates",  basic: true,                    growth: true,                  custom: true               },
  { label: "24/7 uptime monitoring",   basic: true,                    growth: true,                  custom: true               },
  { label: "AI chatbot",               basic: false,                   growth: false,                 custom: true               },
  { label: "Custom integrations",      basic: false,                   growth: false,                 custom: true               },
  { label: "Support level",            basic: "Email",                 growth: "Priority",            custom: "Dedicated mgr"   },
  { isSection: true, label: "Billing" },
  { label: "Monthly price",            basic: "$24.99/mo",             growth: "$249.99/mo",          custom: "Custom quote"     },
  { label: "Annual price",             basic: "$9.99/mo ($120/yr)",    growth: "Monthly only",        custom: "Custom quote"     },
];

/* ── Plan Card ───────────────────────────────────────────────── */
function PlanCard({ plan, yearly, i }: { plan: Plan; yearly: boolean; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const showYearlyPrice = yearly && !plan.noYearly && !plan.custom;
  const price = showYearlyPrice ? plan.yearlyPrice : plan.monthlyPrice;

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
      {/* Corner glow */}
      {plan.featured && (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-[20px]">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-orange opacity-[0.18]" />
        </div>
      )}

      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-orange px-4 py-1.5 text-[12px] font-bold text-white shadow-orange">
          {plan.badge}
        </div>
      )}

      {/* Plan name & tagline */}
      <p className="mb-1 text-[12px] font-extrabold uppercase tracking-[2px] text-orange">{plan.name}</p>
      <p className={`mb-5 text-[13px] leading-snug ${plan.featured ? "text-white/50" : "text-gray"}`}>
        {plan.tagline}
      </p>

      {/* Price */}
      {plan.custom ? (
        <p className={`text-[36px] font-extrabold leading-none tracking-[-1px] ${plan.featured ? "text-white" : "text-site-text"}`}>
          Let&apos;s Talk
        </p>
      ) : plan.noYearly && yearly ? (
        <>
          <div className="flex items-end gap-1">
            <span className={`text-[42px] font-extrabold leading-none tracking-[-1px] ${plan.featured ? "text-white" : "text-site-text"}`}>
              ${plan.monthlyPrice!.toFixed(2)}
            </span>
            <span className={`mb-1.5 text-[14px] ${plan.featured ? "text-white/50" : "text-gray"}`}>/mo</span>
          </div>
          <p className="mt-1 text-[12px] font-semibold text-orange">Monthly billing only</p>
        </>
      ) : (
        <div className="flex items-end gap-1">
          <span className={`text-[42px] font-extrabold leading-none tracking-[-1px] ${plan.featured ? "text-white" : "text-site-text"}`}>
            ${price!.toFixed(2)}
          </span>
          <span className={`mb-1.5 text-[14px] ${plan.featured ? "text-white/50" : "text-gray"}`}>/mo</span>
        </div>
      )}

      {/* Sub-price note */}
      <p className={`mb-5 mt-1 text-[12px] ${plan.featured ? "text-white/40" : "text-gray"}`}>
        {plan.custom
          ? "Tailored to your needs"
          : plan.noYearly
          ? "No annual commitment required"
          : showYearlyPrice
          ? `Billed annually · $${plan.yearlyTotal}/yr total`
          : `Or $${plan.yearlyPrice}/mo billed yearly · Save $${(((plan.monthlyPrice! - plan.yearlyPrice!) * 12)).toFixed(0)}/yr`}
      </p>

      {/* CTA */}
      <Link
        href={plan.ctaHref}
        className="block rounded-full bg-orange py-3.5 text-center text-[14px] font-bold text-white shadow-orange transition-all duration-200 hover:-translate-y-px hover:bg-orange-dark"
      >
        {plan.cta}
      </Link>

      {/* Timeline */}
      {plan.timeline && (
        <p className={`mt-2.5 text-center text-[11.5px] font-medium ${plan.featured ? "text-white/40" : "text-gray"}`}>
          ⏱ {plan.timeline}
        </p>
      )}

      {/* Divider */}
      <div className={`my-6 h-px ${plan.featured ? "bg-white/10" : "bg-site-border"}`} />

      {/* Features with category subheadings */}
      <ul className="flex flex-col">
        {plan.features.map((f, idx) => {
          if (typeof f === "object" && "category" in f) {
            const topClass = idx > 0 ? "mt-4 pt-4" : "";
            const borderClass = idx > 0
              ? plan.featured ? "border-t border-white/10" : "border-t border-site-border"
              : "";
            const textClass = plan.featured ? "text-white/35" : "text-gray/60";
            return (
              <li
                key={`cat-${idx}`}
                className={`${topClass} ${borderClass} mb-2 text-[10.5px] font-extrabold uppercase tracking-[1.8px] ${textClass}`}
              >
                {f.category}
              </li>
            );
          }
          if (typeof f === "object" && "href" in f) {
            return (
              <li key={f.text} className="flex items-start gap-2.5 py-1.5">
                <CheckIcon featured={plan.featured} />
                <span className={`text-[13.5px] leading-[1.55] ${plan.featured ? "text-white/75" : "text-gray"}`}>
                  {f.text}{" "}
                  <span className="opacity-60">(</span>
                  <a
                    href={f.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange underline underline-offset-2 transition-opacity hover:opacity-70"
                  >
                    bizbull.ai
                  </a>
                  <span className="opacity-60">)</span>
                </span>
              </li>
            );
          }
          return (
            <li key={f as string} className="flex items-start gap-2.5 py-1.5">
              <CheckIcon featured={plan.featured} />
              <span className={`text-[13.5px] leading-[1.55] ${plan.featured ? "text-white/75" : "text-gray"}`}>
                {f as string}
              </span>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}

/* ── Main section ────────────────────────────────────────────── */
export default function PricingPlans() {
  const [yearly, setYearly] = useState(false);
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });
  const tableRef = useRef(null);
  const tableInView = useInView(tableRef, { once: true, margin: "-60px" });

  return (
    <section className="bg-gray-light px-side-gap py-[90px]">
      <div className="mx-auto max-w-270">

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
          <p className="mx-auto mt-4 max-w-120 text-[15px] leading-[1.7] text-gray">
            No setup fees. No hidden costs. No lock-in contracts. Cancel anytime.
          </p>

          {/* Monthly / Yearly toggle */}
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
              <span className="ml-1.5 text-[11px] font-bold text-green">Save 60%</span>
            </button>
          </div>
          {yearly && (
            <p className="mt-2 text-[11.5px] text-gray">
              Annual savings apply to Basic plan · Growth is billed monthly only
            </p>
          )}
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} yearly={yearly} i={i} />
          ))}
        </div>

        {/* Guarantee strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[13px] text-gray">
          {[
            "14-day money-back guarantee",
            "Cancel anytime",
            "No hidden fees",
            "You own your domain",
          ].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <span className="text-orange">✓</span> {t}
            </span>
          ))}
        </div>

        {/* ── Compare Plans ─────────────────────────────────────── */}
        <div ref={tableRef} className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            animate={tableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="mb-2 text-center text-[22px] font-extrabold tracking-[-0.3px] text-site-text"
          >
            Compare Plans
          </motion.h3>
          <p className="mb-8 text-center text-[14px] text-gray">
            See exactly what&apos;s included in each plan.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={tableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overflow-hidden rounded-[20px] border border-site-border bg-white shadow-card"
          >
            {/* Column headers */}
            <div className="grid grid-cols-4 border-b border-site-border bg-gray-light px-6 py-4">
              <div className="text-[12px] font-extrabold uppercase tracking-[1.5px] text-gray">Feature</div>
              <div className="text-center text-[12px] font-extrabold uppercase tracking-[1.5px] text-gray">Basic</div>
              <div className="text-center text-[12px] font-extrabold uppercase tracking-[1.5px] text-orange">Growth</div>
              <div className="text-center text-[12px] font-extrabold uppercase tracking-[1.5px] text-gray">Custom</div>
            </div>

            {/* Rows */}
            {COMPARE_ROWS.map((row, i) => {
              if (row.isSection) {
                return (
                  <div
                    key={`section-${i}`}
                    className="border-b border-site-border bg-orange/4 px-6 py-2.5"
                  >
                    <span className="text-[10.5px] font-extrabold uppercase tracking-[2px] text-orange">
                      {row.label}
                    </span>
                  </div>
                );
              }

              const dataRow = row as {
                label: string;
                basic: string | boolean;
                growth: string | boolean;
                custom: string | boolean;
              };

              return (
                <div
                  key={dataRow.label}
                  className={`grid grid-cols-4 items-center border-b border-site-border px-6 py-3.5 last:border-0 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-light/50"
                  }`}
                >
                  <span className="text-[13.5px] font-medium text-site-text">{dataRow.label}</span>
                  {(["basic", "growth", "custom"] as const).map((col) => {
                    const val = dataRow[col];
                    return (
                      <div key={col} className="flex justify-center">
                        {typeof val === "boolean" ? (
                          val ? <CheckIcon featured={col === "growth"} /> : <CrossIcon />
                        ) : (
                          <span
                            className={`text-center text-[12.5px] font-semibold ${
                              col === "growth" ? "text-orange" : "text-site-text"
                            }`}
                          >
                            {val}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
