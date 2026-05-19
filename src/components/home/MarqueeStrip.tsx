import React from "react";

const ITEMS = [
  "500+ Websites Delivered",
  "⭐ 4.9 Google Rating",
  "Live in 72 Hours",
  "Edmonton · Calgary · Vancouver · Toronto",
  "Starting at $9.99/mo",
  "No Lock-in Contracts",
  "Canadian Owned & Operated",
  "Built · Hosted · Maintained",
];

export default function MarqueeStrip() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-dark py-[14px]">
      <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[1px] text-white/65"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
