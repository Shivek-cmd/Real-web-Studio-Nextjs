"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
  {
    title: "Plumbing Pro Edmonton",
    category: "Trades & Services",
    image: "/portfolio/plumbing-pro.jpg",
    tag: "72-Hour Launch",
  },
  {
    title: "Prairie Law Group",
    category: "Legal Services",
    image: "/portfolio/prairie-law.jpg",
    tag: "Local SEO",
  },
  {
    title: "Northside Dental",
    category: "Healthcare",
    image: "/portfolio/northside-dental.jpg",
    tag: "Booking Integration",
  },
  {
    title: "Calgary Clean Co.",
    category: "Cleaning Services",
    image: "/portfolio/calgary-clean.jpg",
    tag: "Lead Generation",
  },
  {
    title: "Edmonton Auto Spa",
    category: "Automotive",
    image: "/portfolio/auto-spa.jpg",
    tag: "Review Automation",
  },
  {
    title: "Summit Real Estate",
    category: "Real Estate",
    image: "/portfolio/summit-realty.jpg",
    tag: "Custom Design",
  },
];

function PortfolioCard({ project, i }: { project: typeof PROJECTS[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-[14px] border border-site-border bg-gray-light shadow-card"
    >
      {/* Image */}
      <div className="relative h-[220px] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-orange/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-full bg-white px-5 py-2.5 text-[14px] font-bold text-orange">
            View Project →
          </span>
        </div>

        {/* Tag chip */}
        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-orange backdrop-blur-sm">
          {project.tag}
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-[1px] text-gray">
          {project.category}
        </p>
        <h3 className="text-[15px] font-bold text-site-text">{project.title}</h3>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="bg-white px-[5%] py-[80px]">
      <div className="mx-auto max-w-[1080px]">

        <div ref={titleRef} className="mb-12 text-center">
          <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[2px] text-orange">
            Our Portfolio
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[32px] font-extrabold leading-[1.2] tracking-[-0.5px] text-site-text sm:text-[38px]"
          >
            Websites We've Built for Canadian Businesses
          </motion.h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[16px] leading-[1.7] text-gray">
            Every site is custom-designed, fast-loading, and built to convert visitors into customers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <PortfolioCard key={p.title} project={p} i={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#get-started-form"
            className="rounded-full bg-orange px-8 py-[14px] text-[15px] font-bold text-white shadow-orange transition-all duration-200 hover:-translate-y-px hover:bg-orange-dark"
          >
            Get a Site Like These →
          </Link>
        </div>

      </div>
    </section>
  );
}
