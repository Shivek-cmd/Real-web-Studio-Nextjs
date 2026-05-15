"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

interface Section {
  id: string;
  title: string;
}

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  sections: Section[];
  children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, sections, children }: LegalLayoutProps) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const contentRef = useRef<HTMLDivElement>(null);

  const headerRef = useRef(null);
  const tocRef = useRef(null);
  const bodyRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });
  const tocInView = useInView(tocRef, { once: true, margin: "-40px" });
  const bodyInView = useInView(bodyRef, { once: true, margin: "-40px" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    const headings = contentRef.current?.querySelectorAll("[data-section]") ?? [];
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white px-[5%] py-[64px]">
      <div className="mx-auto max-w-[1080px]">

        {/* Document header — title acts as h2 (PageHero above carries the h1) */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-12 border-b border-site-border pb-8"
        >
          <h2 className="text-[30px] font-extrabold tracking-[-0.5px] text-site-text sm:text-[36px]">
            {title}
          </h2>
          <p className="mt-2 text-[14px] text-gray">
            Last updated: <strong className="text-site-text">{lastUpdated}</strong>
          </p>
        </motion.div>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">

          {/* Sticky TOC */}
          <motion.aside
            ref={tocRef}
            initial={{ opacity: 0, x: -20 }}
            animate={tocInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="hidden lg:block lg:w-[220px] lg:shrink-0"
          >
            <nav className="sticky top-[96px]">
              <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[1.5px] text-gray">
                Contents
              </p>
              <ul className="space-y-1">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={`block rounded-[8px] px-3 py-1.5 text-[13px] leading-[1.5] transition-all duration-150 ${
                        active === s.id
                          ? "bg-orange-light font-semibold text-orange"
                          : "text-gray hover:text-orange"
                      }`}
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-[12px] bg-gray-light p-4">
                <p className="mb-1 text-[12px] font-bold text-site-text">Questions?</p>
                <p className="mb-2 text-[12px] text-gray">We're here to help.</p>
                <Link href="/contact" className="text-[12px] font-bold text-orange hover:underline">
                  Contact Us →
                </Link>
              </div>
            </nav>
          </motion.aside>

          {/* Content — each section heading triggers its own reveal via CSS */}
          <motion.div
            ref={bodyRef}
            initial={{ opacity: 0, y: 28 }}
            animate={bodyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="min-w-0 flex-1"
          >
            <div ref={contentRef}>
              {children}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
