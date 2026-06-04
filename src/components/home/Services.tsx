"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ── SVG Icons ──────────────────────────────────────────── */
const IconSocial = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const IconSEO = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const IconLeads = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);
const IconAI = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    <path d="M9 8h1m4 0h1M9 12h6" />
  </svg>
);
const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const IconChat = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

/* ── Service Data ────────────────────────────────────────── */
const SERVICES = [
  {
    id: "svc-social",
    Icon: IconSocial,
    title: "Social Media Marketing",
    stat: "3× More Reach",
    statLabel: "avg. vs. no presence",
    body: "Done-for-you posts, reels, and stories every week that build your brand and bring local customers through the door — without you lifting a finger.",
    image: "https://images.pexels.com/photos/4549414/pexels-photo-4549414.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Social media marketing for small businesses",
  },
  {
    id: "svc-seo",
    Icon: IconSEO,
    title: "Local SEO",
    stat: "#1 Local Rank",
    statLabel: "Edmonton & across Canada",
    body: "We optimize your Google Business Profile, local citations, and on-page SEO so you rank when nearby customers search for exactly what you offer.",
    image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Local SEO optimization for Canadian businesses",
  },
  {
    id: "svc-leads",
    Icon: IconLeads,
    title: "Lead Generation",
    stat: "5× More Leads",
    statLabel: "vs. passive website",
    body: "Automated funnels, landing pages, and follow-up sequences that capture leads 24/7 and turn website visitors into paying customers on autopilot.",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Lead generation funnels for small businesses",
  },
  {
    id: "svc-ai",
    Icon: IconAI,
    title: "AI Implementation",
    stat: "24/7 Automated",
    statLabel: "sales & support",
    body: "We add AI chatbots, smart follow-up sequences, and automated workflows to your business so it runs efficiently even when you're asleep.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "AI automation implementation for businesses",
  },
  {
    id: "svc-reviews",
    Icon: IconStar,
    title: "Google Review Automation",
    stat: "4.9★ Average",
    statLabel: "client Google rating",
    body: "We automatically send review requests to every happy customer. More 5-star reviews mean more trust, more clicks, and more customers choosing you.",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Google review automation for local businesses",
  },
  {
    id: "svc-chat",
    Icon: IconChat,
    title: "Live Chat & WhatsApp",
    stat: "2min Response",
    statLabel: "average reply time",
    body: "Never miss a lead again. We set up live chat on your website and connect it to WhatsApp so customers can reach you instantly — and you respond from anywhere.",
    image: "https://images.pexels.com/photos/4049992/pexels-photo-4049992.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Live chat and WhatsApp integration for business",
  },
];

/* ── Flip Card ───────────────────────────────────────────── */
function ServiceCard({ svc, i }: { svc: (typeof SERVICES)[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
      /* perspective wrapper */
      className="flip-card h-[400px] cursor-pointer"
      style={{ perspective: "1200px" }}
    >
      <div className="flip-card-inner relative h-full w-full">

        {/* ── FRONT ────────────────────────────────────────── */}
        <div className="flip-card-front absolute inset-0 overflow-hidden rounded-[18px]">
          {/* Background image */}
          <Image
            src={svc.image}
            alt={svc.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />

          {/* Dark gradient overlay — stronger at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-dark/10" />

          {/* Top: icon chip */}
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-orange px-3 py-1.5 shadow-orange">
            <svc.Icon />
            <span className="text-[11px] font-bold uppercase tracking-[1px] text-white">
              RealWebStudio
            </span>
          </div>

          {/* Bottom: stat + label */}
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-[38px] font-extrabold leading-none tracking-[-1px] text-white">
              {svc.stat}
            </p>
            <p className="mt-1 text-[13px] font-medium text-white/70">{svc.statLabel}</p>
            <p className="mt-3 text-[15px] font-bold text-white">{svc.title}</p>
          </div>
        </div>

        {/* ── BACK ─────────────────────────────────────────── */}
        <div className="flip-card-back absolute inset-0 flex flex-col overflow-hidden rounded-[18px] bg-dark p-7">
          {/* Orange accent line at top */}
          <div className="mb-6 h-[3px] w-12 rounded-full bg-orange" />

          {/* Icon */}
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[12px] bg-orange text-white shadow-orange">
            <svc.Icon />
          </div>

          {/* Title */}
          <h3 className="mb-4 text-[20px] font-extrabold leading-[1.2] text-white">
            {svc.title}
          </h3>

          {/* Body */}
          <p className="flex-1 text-[14px] leading-[1.8] text-white/70">
            {svc.body}
          </p>

          {/* Stat pill */}
          <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-2">
            <span className="text-[18px] font-extrabold text-orange">{svc.stat}</span>
            <span className="text-[12px] text-white/50">{svc.statLabel}</span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

/* ── Section ─────────────────────────────────────────────── */
export default function Services() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section className="bg-gray-light px-[5%] py-[90px]">
      <div className="mx-auto max-w-[1080px]">

        <div ref={titleRef} className="mb-14 text-center">
          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
            Growth Services
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[32px] font-extrabold leading-[1.2] tracking-[-0.5px] text-site-text sm:text-[40px]"
          >
            Everything You Need to Grow Online
          </motion.h2>
          <p className="mx-auto mt-4 max-w-[1080px] text-[15px] leading-[1.7] text-gray">
            We provide complete business growth solutions, from website design and development to SEO, Google Ads, and digital marketing services that help businesses grow online and generate more customers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.id} svc={svc} i={i} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="#get-started-form"
            className="rounded-full bg-orange px-8 py-[14px] text-[15px] font-bold text-white shadow-orange transition-all duration-200 hover:-translate-y-px hover:bg-orange-dark"
          >
            Talk to Us About Growth →
          </Link>
        </div>

      </div>
    </section>
  );
}
