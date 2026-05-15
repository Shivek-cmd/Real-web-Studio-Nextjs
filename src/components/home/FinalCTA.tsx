"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-dark px-[5%] py-[80px] text-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-[680px] text-center"
      >
        <p className="mb-4 text-[12px] font-extrabold uppercase tracking-[2px] text-orange">
          Ready to Start?
        </p>
        <h2 className="mb-5 text-[34px] font-extrabold leading-[1.2] tracking-[-0.5px] sm:text-[42px]">
          Your Website Could Be Live in{" "}
          <span className="text-orange">72 Hours</span>
        </h2>
        <p className="mb-8 text-[16px] leading-[1.7] text-white/70">
          Join 500+ Canadian businesses who trust RealWebStudio for their web presence.
          No setup fees, no lock-in, no technical headaches.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#get-started-form"
            className="rounded-full bg-orange px-8 py-[15px] text-[15px] font-bold text-white shadow-orange transition-all duration-200 hover:-translate-y-px hover:bg-orange-dark"
          >
            Get My Website Now →
          </Link>
          <Link
            href="tel:+15878756567"
            className="rounded-full border border-white/20 px-8 py-[15px] text-[15px] font-semibold text-white transition-all duration-200 hover:border-orange hover:text-orange"
          >
            📞 Call Us: +1 587-875-6567
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[13px] text-white/50">
          <span>✓ No setup fees</span>
          <span>✓ Cancel anytime</span>
          <span>✓ 72-hour launch</span>
          <span>✓ Canadian support</span>
        </div>
      </motion.div>
    </section>
  );
}
