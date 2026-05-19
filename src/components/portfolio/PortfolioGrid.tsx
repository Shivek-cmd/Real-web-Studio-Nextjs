"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems, type PortfolioItem } from "@/lib/portfolio";

function PortfolioCard({
  item,
  index,
  total,
}: {
  item: PortfolioItem;
  index: number;
  total: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const isLast = index === total - 1;
  const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.94]);
  const opacity = useTransform(scrollYProgress, [0.6, 1], [1, isLast ? 1 : 0.55]);

  const num = String(index + 1).padStart(2, "0");
  const visibleTags = item.tags.slice(0, 4);
  const extraCount = item.tags.length - 4;

  return (
    <div ref={containerRef} className="h-[78vh] min-h-[620px]">
      <motion.div
        style={{
          scale,
          opacity,
          transformOrigin: "top center",
          position: "sticky",
          top: 0,
          zIndex: index + 1,
        }}
        className="relative flex h-[86vh] min-h-[620px] items-center overflow-hidden bg-white"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-site-border" />

        <div className="mx-auto w-full max-w-300 px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-y-8 lg:grid-cols-[64px_1fr_380px] lg:gap-x-24 lg:gap-y-0">
            <div className="hidden lg:flex lg:justify-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange text-[13px] font-extrabold tracking-wide text-white shadow-orange">
                {num}
              </span>
            </div>

            <div>
              <div className="mb-3 flex items-center gap-3 lg:hidden">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange text-[11px] font-extrabold text-white shadow-orange">
                  {num}
                </span>
                <p className="text-[11px] font-extrabold uppercase tracking-[2px] text-orange">
                  {item.industry}
                </p>
              </div>

              <p className="mb-2 hidden text-[11px] font-extrabold uppercase tracking-[2px] text-orange lg:block">
                {item.industry}
              </p>

              <h2 className="mb-4 text-[34px] font-extrabold leading-[1.1] tracking-[-1px] text-site-text sm:text-[42px] lg:text-[50px]">
                {item.client}
              </h2>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange/25 bg-orange/10 px-4 py-1.5 text-[12px] font-semibold text-orange">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                {item.result}
              </div>

              <p className="mb-7 max-w-120 text-[14.5px] leading-[1.8] text-gray">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {visibleTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-site-border bg-gray-light px-3.5 py-1.5 text-[12px] font-medium text-gray"
                  >
                    {tag}
                  </span>
                ))}
                {extraCount > 0 && (
                  <span className="rounded-full border border-site-border bg-gray-light px-3.5 py-1.5 text-[12px] font-medium text-gray/50">
                    +{extraCount}
                  </span>
                )}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={`/portfolio/${item.id}`}
                  className="rounded-full bg-orange px-6 py-3 text-[13px] font-bold text-white shadow-orange transition-all duration-200 hover:-translate-y-px hover:bg-orange-dark"
                >
                  View Work
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-site-border px-6 py-3 text-[13px] font-semibold text-site-text transition-all duration-200 hover:border-orange hover:text-orange"
                >
                  Start a Project
                </Link>
              </div>
            </div>

            <div className="relative h-55 w-full overflow-hidden rounded-[18px] sm:h-65 lg:h-77.5">
              <Image
                src={item.image}
                alt={item.client}
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
              />
              <div className="absolute inset-0 rounded-[18px] bg-linear-to-t from-black/30 to-transparent" />

              {item.website && (
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-[11px] font-medium text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-orange/60 hover:text-orange"
                >
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <path
                      d="M1.5 7.5L7.5 1.5M7.5 1.5H3.5M7.5 1.5v4"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item.website.replace(/^https?:\/\/(www\.)?/, "")}
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function PortfolioGrid() {
  return (
    <>
      <div className="bg-white">
        {portfolioItems.map((item, i) => (
          <PortfolioCard
            key={item.id}
            item={item}
            index={i}
            total={portfolioItems.length}
          />
        ))}
      </div>

      <div className="border-t border-site-border bg-gray-light px-side-gap py-20">
        <div className="mx-auto flex max-w-270 flex-col items-center gap-4 text-center sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="rounded-full bg-orange px-8 py-3.5 text-[15px] font-bold text-white shadow-orange transition-all duration-200 hover:-translate-y-px hover:bg-orange-dark"
          >
            Get Results Like These
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-site-border px-8 py-3.5 text-[15px] font-semibold text-site-text transition-all duration-200 hover:border-orange hover:text-orange"
          >
            Book a Free Call
          </Link>
        </div>
      </div>
    </>
  );
}
