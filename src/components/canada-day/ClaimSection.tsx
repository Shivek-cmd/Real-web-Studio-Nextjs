"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { getSpotsRemaining } from "@/lib/canada-day";

const WHO_ITS_FOR = [
  { icon: "🏪", text: "Local shops & retail stores" },
  { icon: "🔧", text: "Trades & home services" },
  { icon: "💼", text: "Freelancers & consultants" },
  { icon: "🍽️", text: "Restaurants & food businesses" },
  { icon: "💇", text: "Salons, spas & wellness" },
  { icon: "🏋️", text: "Fitness & health coaches" },
];

export default function ClaimSection() {
  const [spots, setSpots] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    setSpots(getSpotsRemaining());
  }, []);

  const spotsUsed = spots === null ? 0 : 100 - spots;

  return (
    <section id="claim" className="bg-dark px-[5%] py-[80px]">
      <div ref={ref} className="mx-auto max-w-[1080px]">

        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[2.5px] text-orange">
            🍁 Claim Your Spot
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[30px] font-extrabold leading-[1.2] tracking-[-0.5px] text-white sm:text-[38px]"
          >
            Only{" "}
            <span className="text-orange">
              {spots === null ? "—" : spots} spots
            </span>{" "}
            left at $9.99/mo
          </motion.h2>
          <p className="mx-auto mt-4 max-w-[460px] text-[15px] leading-[1.7] text-white/55">
            Fill in your details below. We&apos;ll reach out within 24 hours to get your site built.
            No credit card required to start.
          </p>

          {/* Spots progress */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto mt-6 max-w-[420px]"
          >
            <div className="mb-2 flex justify-between text-[12px]">
              <span className="font-semibold text-white/45">{spotsUsed} claimed</span>
              <span className="font-semibold text-orange">{spots ?? "—"} left</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-orange to-[#D80621] transition-all duration-1000"
                style={{ width: `${spotsUsed}%` }}
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_440px]">

          {/* Left: who it's for */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-6 text-[22px] font-bold text-white">
              Built for every Canadian small business:
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {WHO_ITS_FOR.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  className="flex items-center gap-3 rounded-[12px] border border-white/10 bg-white/5 px-4 py-3"
                >
                  <span className="text-[22px]">{item.icon}</span>
                  <span className="text-[14px] font-medium text-white/70">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Urgency callout */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.5 }}
              className="mt-8 rounded-[14px] border border-[#D80621]/30 bg-[#D80621]/10 p-5"
            >
              <p className="text-[14px] font-semibold leading-[1.6] text-white/80">
                🍁 <strong className="text-white">First come, first served. No exceptions.</strong>{" "}
                Once all 100 spots are claimed, this price is gone. Canada Day only — this deal will
                not be repeated.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: GHL form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="relative rounded-[20px] border border-white/10 bg-white p-8 shadow-large"
          >
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-orange px-4 py-1.5 text-[12px] font-bold text-white shadow-orange">
              🍁 Canada Day — $9.99/mo
            </div>

            <iframe
              src="https://api.leadconnectorhq.com/widget/form/ZgZvuabNtIRtYTaCsSWy"
              id="inline-canada-day-form"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-activation-type="alwaysActivated"
              data-deactivation-type="neverDeactivate"
              data-form-name="Canada Day Deal"
              data-height="504"
              data-layout-iframe-id="inline-canada-day-form"
              data-form-id="ZgZvuabNtIRtYTaCsSWy"
              title="Claim Canada Day Deal — RealWebStudio"
              className="h-[530px] min-h-[530px] w-full border-0"
              loading="lazy"
              scrolling="no"
            />

            <p className="mt-4 text-center text-[12px] text-gray">
              No setup fee · No credit card needed · Canadian businesses only
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
