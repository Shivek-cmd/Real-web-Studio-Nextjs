"use client";

import { useEffect, useRef, useState } from "react";
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
  const [useStackEffect, setUseStackEffect] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setUseStackEffect(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  const isLast = index === total - 1;
  const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.94]);
  const opacity = useTransform(scrollYProgress, [0.6, 1], [1, isLast ? 1 : 0.55]);

  const num = String(index + 1).padStart(2, "0");
  const visibleTags = item.tags.slice(0, 4);
  const extraCount = item.tags.length - 4;

  return (
    <div ref={containerRef} className="border-t border-site-border lg:h-[78vh] lg:min-h-[620px] lg:border-t-0">
      <motion.div
        style={{
          scale: useStackEffect ? scale : 1,
          opacity: useStackEffect ? opacity : 1,
          transformOrigin: "top center",
          zIndex: index + 1,
        }}
        className="relative flex bg-white py-12 sm:py-14 lg:sticky lg:top-0 lg:h-[86vh] lg:min-h-[620px] lg:items-center lg:overflow-hidden lg:py-0"
      >
        <div className="absolute inset-x-0 top-0 hidden h-px bg-site-border lg:block" />

        <div className="mx-auto w-full max-w-300 px-[5%] sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-y-7 lg:grid-cols-[56px_minmax(0,1fr)_minmax(320px,380px)] lg:gap-x-16 xl:gap-x-24 lg:gap-y-0">
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

              <h2 className="mb-4 text-[30px] font-extrabold leading-[1.12] tracking-[-0.5px] text-site-text sm:text-[38px] lg:text-[50px]">
                {item.client}
              </h2>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange/25 bg-orange/10 px-4 py-1.5 text-[12px] font-semibold text-orange">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                {item.result}
              </div>

              <p className="mb-6 max-w-120 text-[14.5px] leading-[1.75] text-gray sm:mb-7">
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

              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  href={`/portfolio/${item.id}`}
                  className="rounded-full bg-orange px-6 py-3 text-center text-[13px] font-bold text-white shadow-orange transition-all duration-200 hover:-translate-y-px hover:bg-orange-dark"
                >
                  View Work
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-site-border px-6 py-3 text-center text-[13px] font-semibold text-site-text transition-all duration-200 hover:border-orange hover:text-orange"
                >
                  Start a Project
                </Link>
              </div>
            </div>

            <div className="relative h-[220px] w-full overflow-hidden rounded-[14px] sm:h-[300px] lg:h-77.5 lg:rounded-[18px]">
              <Image
                src={item.image}
                alt={item.client}
                fill
                sizes="(max-width: 1024px) 90vw, 380px"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
              />
              <div className="absolute inset-0 rounded-[14px] bg-linear-to-t from-black/30 to-transparent lg:rounded-[18px]" />

              {item.website && (
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 inline-flex max-w-[calc(100%-24px)] items-center gap-1.5 truncate rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-[11px] font-medium text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-orange/60 hover:text-orange"
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
