"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const VIDEOS = [
  {
    id: "KtsXpaKmcT0",
    name: "Keith Garrod",
    quoteTitle: "My life changed forever",
    quote:
      "I didn't realize how many leads we were missing until Real Web Studio was set up. Calls and messages get answered right away now, even when we're busy. It honestly feels like someone is always watching our inbox.",
  },
  {
    id: "iWtS2Lucp2g",
    name: "Xavi Pascual",
    quoteTitle: "Highly recommend this",
    quote:
      "What I liked most was how hands-on the team was. They actually understood my business and set everything up for me. It didn't feel like software - it felt like support.",
  },
  {
    id: "7xgbimuqWGk",
    name: "Mark Snyder",
    quoteTitle: "Built by people who understand business",
    quote:
      "RealWebStudio is powered by the team at Chrishan Technology Solutions, and that really shows. From day one, they understood how our business works. It doesn't feel like just a platform - it feels like a well-supported system.",
  },
];

function VideoCard({ video, i }: { video: (typeof VIDEOS)[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
      className="overflow-hidden rounded-[14px] border border-site-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-orange hover:shadow-orange"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-gray-light">
        {active ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            title={`${video.name} testimonial`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            className="group absolute inset-0 block h-full w-full"
            aria-label={`Play ${video.name} testimonial`}
          >
            <Image
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={`${video.name} testimonial`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
            <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-orange text-white shadow-orange transition-all duration-200 group-hover:scale-110 group-hover:bg-orange-dark">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-1 h-6 w-6"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>

      <div className="p-5">
        <div className="mb-3 text-[13px] text-orange">★★★★★</div>
        <h3 className="mb-2 text-[17px] font-extrabold leading-[1.35] text-site-text">
          {video.quoteTitle}
        </h3>
        <p className="mb-5 text-[14px] leading-[1.7] text-gray">{video.quote}</p>
        <div className="flex items-center gap-3 border-t border-site-border pt-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange text-[14px] font-bold text-white">
            {video.name[0]}
          </div>
          <div>
            <p className="text-[13px] font-bold text-site-text">{video.name}</p>
            <p className="text-[12px] text-gray">Verified client</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="reviews" className="bg-white px-[5%] py-[80px]">
      <div className="mx-auto max-w-[1080px]">
        <div ref={titleRef} className="mb-12 text-center">
          <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[2px] text-orange">
            Client Reviews
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[32px] font-extrabold leading-[1.2] tracking-[-0.5px] text-site-text sm:text-[38px]"
          >
            Real Results from Real Canadian Businesses
          </motion.h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-[15px] font-semibold text-site-text">
            <span className="text-orange">★★★★★</span>
            <span>4.9 out of 5 . 500+ happy clients</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {VIDEOS.map((video, i) => (
            <VideoCard key={video.id} video={video} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
