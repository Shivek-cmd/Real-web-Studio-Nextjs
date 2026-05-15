"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const TRUST_BADGES = [
  { icon: "⚡", text: "Live in 72 Hours" },
  { icon: "🔒", text: "No Lock-in Contracts" },
  { icon: "🇨🇦", text: "Canadian Business" },
];

type BezierEase = [number, number, number, number];
const EASE: BezierEase = [0.22, 1, 0.36, 1];

function fu(i: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay: i * 0.1, ease: EASE },
  };
}

export default function Hero() {
  return (
    <section
      id="start"
      className="relative overflow-hidden bg-white px-[5%] py-[72px] lg:py-[96px]"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-orange-light opacity-50 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div
          aria-hidden
          className="absolute bottom-6 left-1/2 top-6 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-site-border to-transparent lg:block"
        />

        {/* ── Left: Value Proposition ───────────────────────── */}
        <div>
          {/* Eyebrow pill */}
          <motion.div
            {...fu(0)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-mid bg-orange-light px-4 py-1.5 text-[13px] font-semibold text-orange"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange" />
           Proudly Canadian
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fu(1)}
            className="mb-5 text-[38px] font-extrabold leading-[1.15] tracking-[-0.5px] text-site-text sm:text-[44px] lg:text-[52px]"
          >
           Need a Website?{" "}
            <span className="text-orange">Get one for just $9.99/mo</span>
            <br />
            
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            {...fu(2)}
            className="mb-8 max-w-[480px] text-[17px] leading-[1.7] text-gray"
          >
            We build, host, and maintain your website so you can focus on running
            your business. No technical skills needed. No surprise fees. Just
            results — proudly serving Edmonton, Calgary, Vancouver, Toronto, and
            all of Canada.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fu(3)}
            className="mb-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="#get-started-form"
              className="rounded-full bg-orange px-7 py-[14px] text-[15px] font-bold text-white shadow-orange transition-all duration-200 hover:-translate-y-px hover:bg-orange-dark"
            >
              Get My Website →
            </Link>
            <Link
              href="/#portfolio"
              className="rounded-full border border-site-border px-7 py-[14px] text-[15px] font-semibold text-site-text transition-all duration-200 hover:border-orange hover:text-orange"
            >
              View Portfolio
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div {...fu(4)} className="flex flex-wrap gap-4">
            {TRUST_BADGES.map((b) => (
              <div
                key={b.text}
                className="flex items-center gap-1.5 text-[13px] font-medium text-gray"
              >
                <span>{b.icon}</span>
                {b.text}
              </div>
            ))}
          </motion.div>

          {/* Social proof */}
          <motion.div {...fu(5)} className="mt-6 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["#FF6B35", "#10B981", "#6C63FF", "#0ea5e9"].map((c) => (
                <div
                  key={c}
                  className="h-8 w-8 rounded-full border-2 border-white"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <div className="text-[13px] text-gray">
              <span className="font-bold text-orange">★★★★★</span>{" "}
              <span className="font-semibold text-site-text">4.9</span> · Trusted by{" "}
              <span className="font-semibold text-site-text">500+ Canadian businesses</span>
            </div>
          </motion.div>
        </div>

        {/* ── Right: GHL Form ───────────────────────────────── */}
        <motion.div
          id="get-started-form"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
          className="relative rounded-[14px] border border-site-border bg-gray-light p-1 shadow-card"
        >
          {/* Form badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-orange px-4 py-1.5 text-[12px] font-bold text-white shadow-orange">
            Free Setup — No Credit Card Needed
          </div>

          <div className="overflow-hidden rounded-[12px] bg-white p-10">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/ZgZvuabNtIRtYTaCsSWy"
              id="inline-ZgZvuabNtIRtYTaCsSWy"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-activation-type="alwaysActivated"
              data-deactivation-type="neverDeactivate"
              data-form-name="Get Started"
              data-height="504"
              data-layout-iframe-id="inline-cDGtShyVjnJmpPW9bWtH"
              data-form-id="cDGtShyVjnJmpPW9bWtH"
              title="Get Started — RealWebStudio"
              className="min-h-[504px] w-full border-0"
              loading="lazy"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
