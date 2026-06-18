"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { getSpotsRemaining } from "@/lib/canada-day";

export default function CanadaDayBanner() {
  const [spots, setSpots] = useState<number | null>(null);

  useEffect(() => {
    setSpots(getSpotsRemaining());
    const id = setInterval(() => setSpots(getSpotsRemaining()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="sticky top-[68px] z-[190] w-full overflow-hidden bg-[#0e0202]">

      {/* Sweeping red blink — moves left→right endlessly */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(216,6,33,0.18) 40%, rgba(255,107,53,0.22) 50%, rgba(216,6,33,0.18) 60%, transparent 100%)",
          width: "200%",
        }}
      />

      {/* Bottom pulse line */}
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        animate={{ opacity: [0.45, 1, 0.45] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(90deg, transparent, #D80621 30%, #FF6B35 50%, #D80621 70%, transparent)",
        }}
      />

      {/* Top hairline */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(216,6,33,0.5) 30%, rgba(255,107,53,0.6) 50%, rgba(216,6,33,0.5) 70%, transparent)",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto flex max-w-[1200px] items-center justify-center gap-x-4 overflow-hidden px-side-gap py-2.75">

        {/* Blinking dot + spots — always visible */}
        <div className="flex shrink-0 items-center gap-2">
          <motion.span
            className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#D80621]"
            animate={{ opacity: [1, 0.15, 1], scale: [1, 1.3, 1] }}
            transition={{ duration: 0.85, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="whitespace-nowrap text-[13px] font-extrabold text-white"
            animate={{ opacity: [1, 0.65, 1] }}
            transition={{ duration: 0.85, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[#ff4d5e]">{spots === null ? "—" : spots} spots left</span>
            <span className="hidden sm:inline"> — going fast!</span>
          </motion.span>
        </div>

        {/* Separator */}
        <span className="hidden shrink-0 text-white/20 md:block">|</span>

        {/* Deal copy — hidden on mobile */}
        <span className="hidden whitespace-nowrap text-[13px] font-medium text-white/75 md:inline">
          🍁 <strong className="font-bold text-white">Canada Day Deal</strong> — 4-page website for{" "}
          <strong className="text-orange">$9.99/mo</strong>{" "}
          <span className="text-white/30 line-through">$29.99</span>{" "}
          <span className="hidden font-medium text-green lg:inline">· Save $240/yr</span>
        </span>

        {/* Separator */}
        <span className="hidden shrink-0 text-white/20 lg:block">|</span>

        {/* Deadline — large screens only */}
        <span className="hidden whitespace-nowrap text-[12px] font-medium text-white/45 lg:inline">
          Ends July 1 · Canadian businesses only
        </span>

        {/* CTA — always visible, never wraps */}
        <motion.div
          className="shrink-0"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link
            href="#hero-form"
            className="rounded-full bg-orange px-5 py-[7px] text-[12px] font-bold text-white shadow-orange transition-all duration-200 hover:bg-orange-dark"
          >
            Claim Now →
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
