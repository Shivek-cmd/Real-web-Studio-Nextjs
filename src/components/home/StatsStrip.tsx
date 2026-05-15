"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const STATS: Stat[] = [
  { value: 500,  suffix: "+", label: "Websites Delivered"     },
  { value: 4.9,  suffix: "★", label: "Average Google Rating"  },
  { value: 72,   suffix: "h", label: "Average Time to Launch" },
  { value: 9.99, suffix: "/mo", label: "Starting Price (CAD)" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const isDecimal = value % 1 !== 0;
    const duration = 1200;
    const steps = 50;
    const increment = value / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(increment * step, value);
      setDisplay(isDecimal ? parseFloat(current.toFixed(1)) : Math.round(current));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {value % 1 !== 0 ? display.toFixed(1) : display}
      {suffix}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section className="bg-dark px-[5%] py-[52px]">
      <div className="mx-auto grid max-w-[1080px] grid-cols-2 gap-8 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="mb-1 text-[42px] font-extrabold leading-none tracking-[-1px] text-orange">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-[13px] font-medium text-white/60">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
