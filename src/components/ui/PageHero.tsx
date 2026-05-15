"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface CtaButton {
  label: string;
  href: string;
  variant?: "primary" | "outline";
}

interface PageHeroProps {
  label: string;
  title: React.ReactNode;
  subtitle: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  cta?: CtaButton[];
}

export default function PageHero({
  label,
  title,
  subtitle,
  image,
  imageAlt,
  imagePosition = "50% 50%",
  cta,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[480px] items-center overflow-hidden lg:min-h-[530px]">

      {/* Background image */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: imagePosition }}
      />

      {/* Layered overlay — keeps image visible but ensures legibility */}
      <div className="absolute inset-0 bg-dark/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/92 via-dark/64 to-dark/20" />

      {/* Subtle bottom accent line */}
      <div className="absolute bottom-0 left-[8%] right-[8%] h-[1.5px] bg-gradient-to-r from-transparent via-orange/55 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1080px] px-[5%] py-[100px] text-left">

        {/* Label pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-5 inline-flex"
        >
          <span className="rounded-full border border-orange/40 bg-orange/15 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange backdrop-blur-sm">
            {label}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mb-5 text-[38px] font-extrabold leading-[1.15] tracking-[-0.5px] text-white sm:text-[52px]"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
          className="max-w-[620px] text-[16px] leading-[1.75] text-white/68"
        >
          {subtitle}
        </motion.p>

        {/* Optional CTA buttons */}
        {cta && cta.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center justify-start gap-4"
          >
            {cta.map((btn) =>
              btn.variant === "outline" ? (
                <Link
                  key={btn.label}
                  href={btn.href}
                  className="rounded-full border border-white/35 px-7 py-[13px] text-[14px] font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white hover:bg-white/10"
                >
                  {btn.label}
                </Link>
              ) : (
                <Link
                  key={btn.label}
                  href={btn.href}
                  className="rounded-full bg-orange px-7 py-[13px] text-[14px] font-bold text-white shadow-orange transition-all duration-200 hover:-translate-y-px hover:bg-orange-dark"
                >
                  {btn.label}
                </Link>
              )
            )}
          </motion.div>
        )}
      </div>

    </section>
  );
}
