"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type CaseStudy = {
  id: string;
  client: string;
  category: string;
  categoryColor: "orange" | "green" | "purple";
  service: string;
  result: string;
  description: string;
  image: string;
  website?: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "protrucktraining",
    client: "Pro Truck Training",
    category: "Trades & Education",
    categoryColor: "orange",
    service: "Web Design · Local SEO",
    result: "Intake fully booked in 30 days",
    description:
      "Edmonton's leading Class 1 truck training school had a reputation that didn't match their online presence. A mobile-first site targeting high-intent keywords filled their next full intake within 30 days of going live.",
    image:
      "https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg?auto=compress&cs=tinysrgb&w=900",
    website: "https://protrucktraining.ca",
  },
  {
    id: "bizbull",
    client: "BizBull.ai",
    category: "Tech & SaaS",
    categoryColor: "purple",
    service: "Web Design · Brand Launch",
    result: "3× demo bookings at launch",
    description:
      "A brand-new AI platform needed a site as sharp as its product. We built a conversion-focused landing page with clear product messaging and a seamless demo booking flow — live in 48 hours and immediately outperforming their MVP page.",
    image:
      "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=900",
    website: "https://bizbull.ai",
  },
  {
    id: "optiwaysimmigration",
    client: "Optiways Immigration",
    category: "Immigration Services",
    categoryColor: "green",
    service: "Local SEO · Web Design",
    result: "#1 Google for 'immigration consultant Edmonton'",
    description:
      "RCIC-certified consultants with a 99% visa approval rate but near-zero visibility on Google. Targeted local SEO and a trust-forward redesign pushed them to the top position for their highest-value search terms.",
    image:
      "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=900",
    website: "https://optiwaysimmigration.com",
  },
  {
    id: "getsetvisa",
    client: "Get Set Visa",
    category: "Immigration & Visas",
    categoryColor: "green",
    service: "Web Design · Lead Gen",
    result: "+240% consultant bookings in 60 days",
    description:
      "A marketplace connecting 600+ CICC-certified consultants with visa applicants had a confusing user journey. We rebuilt the booking flow with clear steps and trust signals — doubling monthly consultant bookings within two months.",
    image:
      "https://images.pexels.com/photos/4427616/pexels-photo-4427616.jpeg?auto=compress&cs=tinysrgb&w=900",
    website: "https://www.getsetvisa.com",
  },
  {
    id: "oilcityreadymix",
    client: "Oil City Ready Mix",
    category: "Construction & Trades",
    categoryColor: "orange",
    service: "Web Design · Google Ads",
    result: "3× quote requests in 45 days",
    description:
      "A concrete supplier with a proven product and zero digital presence. A project-focused site with instant quote forms and targeted Google Ads tripled inbound quote requests from Edmonton's construction market within 6 weeks.",
    image:
      "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=900",
    website: "https://oilcityreadymix.com",
  },
  {
    id: "jerhrgroup",
    client: "JER HR Group",
    category: "HR & Consulting",
    categoryColor: "purple",
    service: "Web Redesign · Content Strategy",
    result: "+185% qualified leads in 90 days",
    description:
      "40+ senior HR consultants, 500+ national clients — and a website that buried all of it. A content-led redesign built around their deep expertise positioned JER as the go-to authority, driving a surge in high-value inbound inquiries.",
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900",
    website: "https://jerhrgroup.com",
  },
];

const PILL_BG: Record<CaseStudy["categoryColor"], string> = {
  orange: "bg-orange",
  green:  "bg-green",
  purple: "bg-purple",
};

function CaseStudyCard({
  study,
  index,
  height,
}: {
  study: CaseStudy;
  index: number;
  height: "tall" | "medium";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const heightClass =
    height === "tall" ? "h-[400px] lg:h-[545px]" : "h-[278px] lg:h-[260px]";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.09, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-[20px] ${heightClass} w-full`}
    >
      {/* Background image */}
      <Image
        src={study.image}
        alt={study.client}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      {/* Dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/25 to-transparent transition-colors duration-300 group-hover:from-black/92" />

      {/* Top row: category pill + service badge */}
      <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-2">
        <span
          className={`${PILL_BG[study.categoryColor]} rounded-full px-3 py-[5px] text-[10px] font-extrabold uppercase tracking-[1.5px] text-white`}
        >
          {study.category}
        </span>
        <span className="rounded-full border border-white/20 bg-black/25 px-3 py-[5px] text-[10px] font-medium text-white/70 backdrop-blur-sm">
          {study.service}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        {/* Result badge */}
        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-orange px-3 py-[5px] text-[11px] font-bold text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-white/75" />
          {study.result}
        </div>

        {/* Title + arrow */}
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="mb-1.5 text-[17px] font-extrabold leading-tight text-white lg:text-[19px]">
              {study.client}
            </h3>
            <p className="line-clamp-2 text-[12.5px] leading-[1.65] text-white/55">
              {study.description}
            </p>
            {study.website && (
              <a
                href={study.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-[10.5px] font-medium text-white/35 transition-colors duration-200 hover:text-orange/80"
                onClick={(e) => e.stopPropagation()}
              >
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path d="M1.5 7.5L7.5 1.5M7.5 1.5H3.5M7.5 1.5v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {study.website.replace(/^https?:\/\/(www\.)?/, "")}
              </a>
            )}
          </div>

          {/* Arrow circle */}
          <Link
            href="/contact"
            aria-label={`Start a project like ${study.client}`}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-white/30 text-white/65 transition-all duration-300 group-hover:border-orange group-hover:bg-orange group-hover:text-white">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 12L12 2M12 2H5M12 2v7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudiesGrid() {
  return (
    <section className="bg-gray-light px-[5%] py-[80px]">
      <div className="mx-auto max-w-[1080px]">

        {/* Staggered 2-col masonry */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-5">

          {/* Left column */}
          <div className="flex flex-1 flex-col gap-5">
            <CaseStudyCard study={CASE_STUDIES[0]} index={0} height="tall" />
            <CaseStudyCard study={CASE_STUDIES[3]} index={3} height="medium" />
            <CaseStudyCard study={CASE_STUDIES[4]} index={4} height="medium" />
          </div>

          {/* Right column */}
          <div className="flex flex-1 flex-col gap-5">
            <CaseStudyCard study={CASE_STUDIES[1]} index={1} height="medium" />
            <CaseStudyCard study={CASE_STUDIES[2]} index={2} height="medium" />
            <CaseStudyCard study={CASE_STUDIES[5]} index={5} height="tall" />
          </div>

        </div>

        {/* CTA row */}
        <div className="mt-14 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="rounded-full bg-orange px-8 py-[14px] text-[15px] font-bold text-white shadow-orange transition-all duration-200 hover:-translate-y-px hover:bg-orange-dark"
          >
            Get Results Like These →
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-site-border px-8 py-[14px] text-[15px] font-semibold text-site-text transition-all duration-200 hover:border-orange hover:text-orange"
          >
            Book a Free Call
          </Link>
        </div>

      </div>
    </section>
  );
}
