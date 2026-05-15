"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
}

export default function RevealOnScroll({
  children,
  className,
  delay = 0,
  y = 24,
  duration = 0.55,
}: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-72px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
