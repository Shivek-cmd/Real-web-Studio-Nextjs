"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { getSpotsRemaining } from "@/lib/canada-day";

function getTimeLeft() {
  const TARGET = new Date("2026-07-02T05:59:59Z").getTime();
  const diff = Math.max(0, TARGET - Date.now());
  return {
    d: Math.floor(diff / 86_400_000),
    h: Math.floor((diff % 86_400_000) / 3_600_000),
    m: Math.floor((diff % 3_600_000) / 60_000),
    s: Math.floor((diff % 60_000) / 1_000),
  };
}

type TimeLeft = { d: number; h: number; m: number; s: number };

function CountdownBox({ value, label }: { value: number | null; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-[64px] w-[64px] items-center justify-center rounded-[12px] border border-white/15 bg-white/8 backdrop-blur-sm">
        <span className="text-[26px] font-extrabold leading-none tracking-[-1px] text-white">
          {value === null ? "--" : String(value).padStart(2, "0")}
        </span>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>
      <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[2px] text-white/40">
        {label}
      </span>
    </div>
  );
}

const EASE = [0.22, 1, 0.36, 1] as const;
function fu(i: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay: i * 0.1, ease: EASE },
  };
}

export default function CanadaDayHero() {
  const [spots, setSpots] = useState<number | null>(null);
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    function tick() {
      setSpots(getSpotsRemaining());
      setTime(getTimeLeft());
    }
    tick();
    const id = setInterval(tick, 1_000);
    return () => clearInterval(id);
  }, []);

  const spotsUsed = spots === null ? 0 : 100 - spots;

  return (
    <section
      id="start"
      className="relative overflow-hidden bg-dark px-[5%] py-[72px] lg:py-[96px]"
    >
      {/* Background image */}
      <Image
        src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1800"
        alt="Canadian business team"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-dark/55" />
      <div className="absolute inset-0 bg-linear-to-r from-dark/75 via-dark/50 to-dark/25" />
      <div className="absolute inset-0 bg-linear-to-t from-dark/50 via-transparent to-dark/15" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#D80621]/15 via-transparent to-transparent" />

      {/* Decorative ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #D80621 0%, transparent 70%)" }}
      />

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-[8%] right-[8%] h-[1.5px] bg-gradient-to-r from-transparent via-orange/55 to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(420px,500px)] lg:gap-24 xl:gap-32">

        {/* Vertical divider — desktop only */}
        <div
          aria-hidden
          className="absolute bottom-6 left-[52%] top-6 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/14 to-transparent lg:block"
        />

        {/* ── LEFT: Value Proposition ───────────────────────── */}
        <div>
          {/* Badges */}
          <motion.div {...fu(0)} className="mb-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D80621]/50 bg-[#D80621]/15 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[2.5px] text-[#ff4d5e] backdrop-blur-sm">
              <span className="animate-pulse">🍁</span>
              Canada Day Special · July 1
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange/40 bg-orange/15 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[2px] text-orange backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-orange" />
              100 Spots Only
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fu(1)}
            className="mb-4 text-[36px] font-extrabold leading-[1.12] tracking-[-1px] text-white sm:text-[44px] lg:text-[52px]"
          >
            100 Canadian Businesses.{" "}
            <span className="text-orange">$9.99/Month.</span>
            <br />
            <span className="text-[22px] font-bold text-white/60 sm:text-[28px] lg:text-[32px]">
              Will You Be One of Them?
            </span>
          </motion.h1>

          {/* Sub copy */}
          <motion.p
            {...fu(2)}
            className="mb-6 max-w-[540px] text-[17px] font-semibold leading-[1.6] text-white/85"
          >
            We{" "}
            <strong className="text-orange">build</strong> it. We{" "}
            <strong className="text-orange">host</strong> it. We{" "}
            <strong className="text-orange">maintain</strong> it. You just run your business.
          </motion.p>

          {/* What's included bullets */}
          <motion.ul {...fu(3)} className="mb-7 max-w-[520px] space-y-2.5 text-[15px] leading-[1.55] text-white/80">
            {[
              "4-page website — Home, About, Services & Contact",
              "Custom design for YOUR brand & colours",
              "Mobile-responsive, fast & SSL included",
              "Hosting, backups & domain connection",
              "Was $29.99/mo — you save $240/year",
            ].map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-[0.6em] h-2 w-2 flex-shrink-0 rounded-full bg-orange shadow-orange" />
                <span>{point}</span>
              </li>
            ))}
          </motion.ul>

          {/* Countdown */}
          <motion.div {...fu(4)} className="mb-7">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[2px] text-white/35">
              Deal ends in
            </p>
            <div className="flex items-start gap-2.5 sm:gap-3">
              <CountdownBox value={time?.d ?? null} label="Days" />
              <span className="mt-3.5 text-[20px] font-bold text-white/25">:</span>
              <CountdownBox value={time?.h ?? null} label="Hours" />
              <span className="mt-3.5 text-[20px] font-bold text-white/25">:</span>
              <CountdownBox value={time?.m ?? null} label="Mins" />
              <span className="mt-3.5 text-[20px] font-bold text-white/25">:</span>
              <CountdownBox value={time?.s ?? null} label="Secs" />
            </div>
          </motion.div>

          {/* Spots remaining */}
          <motion.div
            {...fu(5)}
            className="mb-7 max-w-[400px] rounded-[12px] border border-white/10 bg-white/6 p-4 backdrop-blur-sm"
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[12px] font-semibold text-white/50">Spots remaining</span>
              <span className="text-[12px] font-bold text-orange">
                {spots === null ? "—" : `${spotsUsed} claimed`}
              </span>
            </div>
            <div className="mb-2.5 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-orange to-[#D80621] transition-all duration-1000"
                style={{ width: `${spotsUsed}%` }}
              />
            </div>
            <div className="flex items-end gap-1.5">
              <span className="text-[36px] font-extrabold leading-none tracking-[-1.5px] text-white">
                {spots === null ? "--" : spots}
              </span>
              <span className="mb-1 text-[13px] text-white/40">of 100 spots left</span>
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div {...fu(6)} className="flex flex-wrap gap-4">
            {[
              { icon: "🇨🇦", text: "Canadian businesses only" },
              { icon: "📅", text: "Canada Day only" },
              { icon: "⚡", text: "Live in 72 hours" },
              { icon: "🔒", text: "No lock-in" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-1.5 text-[13px] font-medium text-white/55">
                <span>{b.icon}</span>
                {b.text}
              </div>
            ))}
          </motion.div>

          {/* Social proof */}
          <motion.div {...fu(7)} className="mt-6 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["#FF6B35", "#10B981", "#6C63FF", "#0ea5e9"].map((c) => (
                <div
                  key={c}
                  className="h-8 w-8 rounded-full border-2 border-white"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <div className="text-[13px] text-white/70">
              <span className="font-bold text-orange">★★★★★</span>{" "}
              <span className="font-semibold text-white">4.9</span> · Trusted by{" "}
              <span className="font-semibold text-white">500+ Canadian businesses</span>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT: Form Card ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
          className="relative min-h-[610px] rounded-[16px] border border-site-border bg-white p-10 shadow-large lg:ml-4"
        >
          {/* Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-orange px-4 py-1.5 text-[12px] font-bold text-white shadow-orange">
            🍁 Canada Day — $9.99/mo · No Credit Card Needed
          </div>

          <iframe
            src="https://api.leadconnectorhq.com/widget/form/ZgZvuabNtIRtYTaCsSWy"
            id="inline-canada-day-hero-form"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-activation-type="alwaysActivated"
            data-deactivation-type="neverDeactivate"
            data-form-name="Canada Day Deal"
            data-height="504"
            data-layout-iframe-id="inline-canada-day-hero-form"
            data-form-id="ZgZvuabNtIRtYTaCsSWy"
            title="Claim Canada Day Deal — RealWebStudio"
            className="h-[530px] min-h-[530px] w-full border-0"
            loading="lazy"
            scrolling="no"
          />

          {/* Bottom note */}
          <p className="mt-3 text-center text-[11px] text-gray">
            First come, first served · Canadian businesses only · No exceptions
          </p>
        </motion.div>

      </div>
    </section>
  );
}
