"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const STATS = [
  { value: 500, suffix: "+", label: "Websites Delivered", sub: "across Canada" },
  { value: 4.9, suffix: "★", label: "Average Google Rating", sub: "from verified clients" },
  { value: 72, suffix: "h", label: "Average Launch Time", sub: "from signup to live" },
  { value: 9.99, suffix: "/mo", label: "Starting Price", sub: "all-inclusive, CAD" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isDecimal = value % 1 !== 0;

  useEffect(() => {
    if (!inView) return;
    const steps = 50;
    const increment = value / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const current = Math.min(increment * step, value);
      setDisplay(isDecimal ? parseFloat(current.toFixed(1)) : Math.round(current));
      if (step >= steps) clearInterval(timer);
    }, 1200 / steps);
    return () => clearInterval(timer);
  }, [inView, value, isDecimal]);

  return (
    <span ref={ref}>
      {isDecimal ? display.toFixed(1) : display}
      {suffix}
    </span>
  );
}

export default function AboutStats() {
  return (
    <section className="bg-dark px-[5%] py-[70px]">
      <div className="mx-auto max-w-[1080px]">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="mb-1 text-[42px] font-extrabold leading-none tracking-[-1px] text-orange">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="text-[14px] font-semibold text-white">{s.label}</p>
              <p className="mt-0.5 text-[12px] text-white/40">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
