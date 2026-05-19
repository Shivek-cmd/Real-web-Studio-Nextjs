"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const TRUST_BADGES = [
  { icon: "⚡", text: "Live in 72 Hours" },
  { icon: "🔒", text: "No Lock-in Contracts" },
  { icon: "🇨🇦", text: "Canadian Business" },
];

const HERO_IMAGES = [
  {
    src: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Canadian business team planning a website launch",
  },
  {
    src: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Designer and developer working on a custom website",
  },
  {
    src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Small business team reviewing digital growth plans",
  },
  {
    src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Business owners discussing website strategy",
  },
];

const HERO_POINTS = [
  "We build your website for you - ready in 3-7 days",
  "FREE Hosting - nothing extra to pay",
  "Need changes? We handle it - or use our simple CMS yourself anytime",
  "You own your domain - always. It's yours, forever. No lock-in.",
  "No skills needed. No time wasted. We do everything for you.",
];

type BezierEase = [number, number, number, number];
const EASE: BezierEase = [0.22, 1, 0.36, 1];

function fu(i: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay: i * 0.1, ease: EASE },
  };
}

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);
  const [formLoaded, setFormLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % HERO_IMAGES.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="start"
      className="relative overflow-hidden bg-dark px-[5%] py-[72px] lg:py-[96px]"
    >
      {HERO_IMAGES.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ease-out ${
            activeImage === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

     <div className="absolute inset-0 bg-dark/55" />
<div className="absolute inset-0 bg-linear-to-r from-dark/75 via-dark/50 to-dark/25" />
<div className="absolute inset-0 bg-linear-to-t from-dark/50 via-transparent to-dark/15" />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(420px,500px)] lg:gap-24 xl:gap-32">
        <div
          aria-hidden
          className="absolute bottom-6 left-[52%] top-6 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/14 to-transparent lg:block"
        />

        {/* ── Left: Value Proposition ───────────────────────── */}
        <div>
          {/* Eyebrow pill */}
          <motion.div
            {...fu(0)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange/40 bg-orange/15 px-4 py-1.5 text-[13px] font-semibold text-orange backdrop-blur-sm"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange" />
           Proudly Canadian
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fu(1)}
            className="mb-4 text-[38px] font-extrabold leading-[1.15] tracking-[-0.5px] text-white sm:text-[44px] lg:text-[52px]"
          >
            <span className="block whitespace-nowrap">Need a Website?</span>
            <span className="block text-orange">Get one for just $9.99/mo</span>
          </motion.h1>
          {/* Value points */}
          <motion.ul
            {...fu(2)}
            className="mb-8 max-w-[560px] space-y-3 text-[16px] leading-[1.55] text-white/82 sm:text-[17px]"
          >
            {HERO_POINTS.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-[0.6em] h-2 w-2 flex-shrink-0 rounded-full bg-orange shadow-orange" />
                <span>{point}</span>
              </li>
            ))}
          </motion.ul>

          {/* CTA Buttons */}
          <motion.div
            {...fu(3)}
            className="mb-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="#get-started-form"
              className="rounded-full bg-orange px-7 py-[14px] text-[15px] font-bold text-white shadow-orange transition-all duration-200 hover:-translate-y-px hover:bg-orange-dark"
            >
              Get My Website →
            </Link>
            <Link
              href="/#portfolio"
              className="rounded-full border border-white/32 px-7 py-[14px] text-[15px] font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-orange hover:text-orange"
            >
              View Portfolio
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div {...fu(4)} className="flex flex-wrap gap-4">
            {TRUST_BADGES.map((b) => (
              <div
                key={b.text}
                className="flex items-center gap-1.5 text-[13px] font-medium text-white/72"
              >
                <span>{b.icon}</span>
                {b.text}
              </div>
            ))}
          </motion.div>

          {/* Social proof */}
          <motion.div {...fu(5)} className="mt-6 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["#FF6B35", "#10B981", "#6C63FF", "#0ea5e9"].map((c) => (
                <div
                  key={c}
                  className="h-8 w-8 rounded-full border-2 border-white"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <div className="text-[13px] text-white/72">
              <span className="font-bold text-orange">★★★★★</span>{" "}
              <span className="font-semibold text-white">4.9</span> · Trusted by{" "}
              <span className="font-semibold text-white">500+ Canadian businesses</span>
            </div>
          </motion.div>
        </div>

        {/* ── Right: GHL Form ───────────────────────────────── */}
        <motion.div
          id="get-started-form"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
          className="relative min-h-[610px] rounded-[16px] border border-site-border bg-white p-10 shadow-large lg:ml-4"
        >
          {/* Form badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-orange px-4 py-1.5 text-[12px] font-bold text-white shadow-orange">
            Free Setup — No Credit Card Needed
          </div>

          {!formLoaded && (
            <div className="absolute inset-10 flex min-h-[530px] items-center justify-center rounded-[10px] bg-white">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-orange/20 border-t-orange" />
            </div>
          )}

          <iframe
            src="https://api.leadconnectorhq.com/widget/form/ZgZvuabNtIRtYTaCsSWy"
            id="inline-ZgZvuabNtIRtYTaCsSWy"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-activation-type="alwaysActivated"
            data-deactivation-type="neverDeactivate"
            data-form-name="Get Started"
            data-height="504"
            data-layout-iframe-id="inline-cDGtShyVjnJmpPW9bWtH"
            data-form-id="cDGtShyVjnJmpPW9bWtH"
            title="Get Started — RealWebStudio"
            className="h-[530px] min-h-[530px] w-full border-0"
            loading="lazy"
            scrolling="no"
            onLoad={() => setFormLoaded(true)}
          />
        </motion.div>

      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {HERO_IMAGES.map((image, index) => (
          <button
            key={image.src}
            type="button"
            aria-label={`Show hero image ${index + 1}`}
            onClick={() => setActiveImage(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeImage === index
                ? "w-8 bg-orange"
                : "w-2.5 bg-white/45 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
