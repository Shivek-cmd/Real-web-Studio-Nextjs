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
    <div className="flex flex-col items-center gap-2">
      <div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-[16px] border border-white/12 bg-white/6 backdrop-blur-sm">
        <span className="text-[30px] font-extrabold leading-none tracking-[-1px] text-white">
          {value === null ? "--" : String(value).padStart(2, "0")}
        </span>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </div>
      <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-white/35">
        {label}
      </span>
    </div>
  );
}

const EASE = [0.22, 1, 0.36, 1] as const;
function fu(i: number) {
  return {
    initial: { opacity: 0, y: 22 },
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
      <div className="absolute inset-0 bg-dark/60" />
      <div className="absolute inset-0 bg-linear-to-r from-dark/85 via-dark/55 to-dark/20" />
      <div className="absolute inset-0 bg-linear-to-t from-dark/50 via-transparent to-dark/10" />
      <div className="absolute inset-0 bg-linear-to-br from-[#D80621]/12 via-transparent to-transparent" />

      {/* Decorative glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #D80621 0%, transparent 70%)" }}
      />

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-[8%] right-[8%] h-px bg-linear-to-r from-transparent via-orange/50 to-transparent" />

      {/* Vertical divider — desktop only */}
      <div
        aria-hidden
        className="absolute bottom-8 left-[52%] top-8 hidden w-px -translate-x-1/2 bg-linear-to-b from-transparent via-white/12 to-transparent lg:block"
      />

      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(420px,500px)] lg:gap-24 xl:gap-32">

        {/* ── LEFT ─────────────────────────────────────── */}
        <div>

          {/* Canada Day label */}
          <motion.div {...fu(0)} className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D80621]/45 bg-[#D80621]/12 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[2.5px] text-[#ff5566] backdrop-blur-sm">
              <span className="animate-pulse">🍁</span>
              Canada Day Deal · July 1, 2026
            </span>
          </motion.div>

          {/* Big price */}
          <motion.div {...fu(1)} className="mb-3">
            <div className="flex items-end gap-3">
              <span className="text-[72px] font-extrabold leading-none tracking-[-3px] text-white sm:text-[88px]">
                $9.99
              </span>
              <div className="mb-3 flex flex-col gap-1">
                <span className="text-[18px] font-semibold text-white/40">/month</span>
                <span className="text-[15px] text-white/30 line-through">$29.99</span>
              </div>
            </div>
            <p className="mt-2 text-[15px] font-semibold text-green">
              You save $240/year — Canada Day only
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div {...fu(2)} className="mb-8 h-px w-full max-w-[400px] bg-white/10" />

          {/* Countdown */}
          <motion.div {...fu(3)} className="mb-8">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[2.5px] text-white/30">
              Deal ends in
            </p>
            <div className="flex items-start gap-3">
              <CountdownBox value={time?.d ?? null} label="Days" />
              <span className="mt-5 text-[22px] font-light text-white/20">:</span>
              <CountdownBox value={time?.h ?? null} label="Hours" />
              <span className="mt-5 text-[22px] font-light text-white/20">:</span>
              <CountdownBox value={time?.m ?? null} label="Mins" />
              <span className="mt-5 text-[22px] font-light text-white/20">:</span>
              <CountdownBox value={time?.s ?? null} label="Secs" />
            </div>
          </motion.div>

          {/* Spots remaining */}
          <motion.div
            {...fu(4)}
            className="mb-8 max-w-[380px] rounded-[14px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
          >
            <div className="mb-2.5 flex items-center justify-between">
              <span className="text-[12px] font-semibold text-white/45">Spots remaining</span>
              <span className="text-[12px] font-bold text-orange">
                {spots === null ? "—" : `${spotsUsed} claimed`}
              </span>
            </div>
            <div className="mb-3 h-2 overflow-hidden rounded-full bg-white/8">
              <div
                className="h-full rounded-full bg-linear-to-r from-orange to-[#D80621] transition-all duration-1000"
                style={{ width: `${spotsUsed}%` }}
              />
            </div>
            <div className="flex items-end gap-2">
              <span className="text-[38px] font-extrabold leading-none tracking-[-1.5px] text-white">
                {spots === null ? "--" : spots}
              </span>
              <span className="mb-1 text-[13px] text-white/35">of 100 spots left</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div {...fu(5)} className="mb-7 flex flex-wrap items-center gap-3">
            <Link
              href="#hero-form"
              className="rounded-full bg-orange px-8 py-[14px] text-[15px] font-bold text-white shadow-orange transition-all duration-200 hover:-translate-y-px hover:bg-orange-dark"
            >
              🍁 Claim My Spot →
            </Link>
            <Link
              href="#hero-form"
              className="rounded-full border border-white/25 px-7 py-[13px] text-[14px] font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-orange hover:text-orange"
            >
              Book a Free Call
            </Link>
          </motion.div>

          {/* Trust row */}
          <motion.div {...fu(6)} className="flex flex-wrap gap-5">
            {[
              { icon: "🇨🇦", text: "Canadian businesses only" },
              { icon: "⚡", text: "Live in 72 hours" },
              { icon: "🔒", text: "No lock-in" },
              { icon: "🎯", text: "First come, first served" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-1.5 text-[12px] font-medium text-white/45">
                <span>{b.icon}</span>
                {b.text}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Form ───────────────────────────────── */}
        <motion.div
          id="hero-form"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
          className="relative min-h-[610px] rounded-[16px] border border-site-border bg-white p-10 shadow-large lg:ml-4"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-orange px-4 py-1.5 text-[12px] font-bold text-white shadow-orange">
            🍁 Canada Day — $9.99/mo · No Credit Card Needed
          </div>

          <iframe
            src="https://api.leadconnectorhq.com/widget/form/HvqhZBIyHJPergCe8UQF"
            id="inline-HvqhZBIyHJPergCe8UQF"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Canada Day Page Form"
            data-height="537"
            data-layout-iframe-id="inline-HvqhZBIyHJPergCe8UQF"
            data-form-id="HvqhZBIyHJPergCe8UQF"
            title="Canada Day Page Form"
            className="h-134.25 min-h-134.25 w-full border-0"
            loading="lazy"
            scrolling="no"
          />

          <p className="mt-3 text-center text-[11px] text-gray">
            First come, first served · Canadian businesses only
          </p>
        </motion.div>

      </div>
    </section>
  );
}
