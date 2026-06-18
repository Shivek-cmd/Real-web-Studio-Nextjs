"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ACTIVITIES = [
  { name: "Sarah M.", city: "Vancouver, BC", ago: "2 min ago" },
  { name: "James K.", city: "Toronto, ON", ago: "5 min ago" },
  { name: "Emily R.", city: "Calgary, AB", ago: "8 min ago" },
  { name: "Michael T.", city: "Ottawa, ON", ago: "12 min ago" },
  { name: "Jessica L.", city: "Montréal, QC", ago: "15 min ago" },
  { name: "David C.", city: "Edmonton, AB", ago: "19 min ago" },
  { name: "Amanda W.", city: "Winnipeg, MB", ago: "23 min ago" },
  { name: "Ryan B.", city: "Halifax, NS", ago: "27 min ago" },
  { name: "Stephanie H.", city: "Saskatoon, SK", ago: "31 min ago" },
  { name: "Daniel F.", city: "Kelowna, BC", ago: "35 min ago" },
  { name: "Natalie P.", city: "Hamilton, ON", ago: "38 min ago" },
  { name: "Chris O.", city: "Regina, SK", ago: "42 min ago" },
  { name: "Megan S.", city: "London, ON", ago: "46 min ago" },
  { name: "Tyler G.", city: "Victoria, BC", ago: "51 min ago" },
  { name: "Ashley N.", city: "Mississauga, ON", ago: "55 min ago" },
  { name: "Brandon L.", city: "Burnaby, BC", ago: "1 hr ago" },
  { name: "Caitlin M.", city: "Brampton, ON", ago: "1 hr ago" },
  { name: "Kevin T.", city: "Surrey, BC", ago: "2 hrs ago" },
];

// Show ticker only after 3s, then rotate every 6s
const DELAY_MS = 3_000;
const ROTATE_MS = 6_000;

export default function ActivityTicker() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => setVisible(true), DELAY_MS);
    return () => clearTimeout(show);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ACTIVITIES.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [visible]);

  if (!visible) return null;

  const activity = ACTIVITIES[index];

  return (
    <div className="pointer-events-none fixed bottom-6 left-4 z-50 max-w-[300px] sm:left-6 sm:max-w-[320px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 rounded-[14px] border border-white/10 bg-dark/95 p-3.5 shadow-large backdrop-blur-md"
        >
          {/* Avatar */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange to-[#D80621] text-[15px] font-bold text-white">
            {activity.name[0]}
          </div>

          {/* Text */}
          <div className="min-w-0">
            <p className="truncate text-[13px] font-semibold text-white">
              🍁 {activity.name}{" "}
              <span className="font-normal text-white/55">from {activity.city}</span>
            </p>
            <p className="text-[12px] text-white/40">just claimed a spot · {activity.ago}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
