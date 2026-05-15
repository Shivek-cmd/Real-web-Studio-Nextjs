"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const POSTS = [
  {
    id: "post-1",
    category: "Web Design",
    categoryColor: "bg-orange",
    title: "Why Every Canadian Small Business Needs a Website in 2025 — Not Tomorrow, Now",
    excerpt: "Customers search online before calling anyone. If your business isn't there, a competitor is. Here's what you're missing and how to fix it fast.",
    author: "Sarah Mitchell",
    authorAvatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    date: "May 10, 2025",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Web design for Canadian small businesses in 2025",
    href: "/blog/canadian-small-business-website-2025",
  },
  {
    id: "post-2",
    category: "Local SEO",
    categoryColor: "bg-green",
    title: "Your Google Business Profile Is Your Most Underrated Marketing Asset",
    excerpt: "Most business owners set it up once and forget it. The ones who treat it like a living tool are pulling in customers every single week for free.",
    author: "James Okafor",
    authorAvatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    date: "Apr 28, 2025",
    readTime: "4 min read",
    image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Google Business Profile local SEO strategy",
    href: "/blog/google-business-profile-local-seo",
  },
  {
    id: "post-3",
    category: "AI & Growth",
    categoryColor: "bg-purple",
    title: "How Edmonton Trades Businesses Are Getting More Leads With AI in 2025",
    excerpt: "Plumbers, electricians, and contractors are quietly using AI chatbots and automation to capture leads while their competitors sleep. Here's how.",
    author: "Priya Sharma",
    authorAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    date: "Apr 15, 2025",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "AI lead generation for Edmonton trades businesses",
    href: "/blog/edmonton-trades-ai-leads-2025",
  },
];

function BlogCard({
  post,
  isHovered,
  isBlurred,
  onEnter,
  onLeave,
  i,
}: {
  post: (typeof POSTS)[0];
  isHovered: boolean;
  isBlurred: boolean;
  onEnter: () => void;
  onLeave: () => void;
  i: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.13, ease: "easeOut" }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="h-full"
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.025 : isBlurred ? 0.96 : 1,
          filter: isBlurred ? "blur(4px)" : "blur(0px)",
          opacity: isBlurred ? 0.45 : 1,
        }}
        transition={{ duration: 0.38, ease: "easeOut" }}
        className={`group flex h-full flex-col overflow-hidden rounded-[20px] border bg-white transition-shadow duration-300 ${
          isHovered
            ? "border-orange shadow-orange"
            : "border-site-border shadow-card"
        }`}
      >
        {/* ── Image ────────────────────────────────────── */}
        <div className="relative h-[260px] shrink-0 overflow-hidden">
          <Image
            src={post.image}
            alt={post.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-600 group-hover:scale-[1.07]"
          />

          {/* Subtle dark gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Category pill — top left */}
          <div className={`absolute left-4 top-4 rounded-full px-3 py-[5px] text-[11px] font-extrabold uppercase tracking-[1px] text-white shadow-sm ${post.categoryColor}`}>
            {post.category}
          </div>

          {/* Arrow button — top right, appears on hover */}
          <motion.div
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.6,
            }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-card"
          >
            <svg
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[15px] w-[15px] text-site-text"
            >
              <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" />
            </svg>
          </motion.div>
        </div>

        {/* ── Body ─────────────────────────────────────── */}
        <div className="flex flex-1 flex-col p-6">
          {/* Title */}
          <h3 className="mb-3 text-[17px] font-bold leading-[1.45] text-site-text transition-colors duration-150 group-hover:text-orange">
            <Link href={post.href}>{post.title}</Link>
          </h3>

          {/* Excerpt */}
          <p className="mb-5 flex-1 text-[13.5px] leading-[1.75] text-gray line-clamp-3">
            {post.excerpt}
          </p>

          {/* Divider */}
          <div className="mb-4 border-t border-site-border" />

          {/* Author row */}
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-orange-light">
              <Image
                src={post.authorAvatar}
                alt={post.author}
                fill
                sizes="36px"
                className="object-cover"
              />
            </div>

            {/* Name + meta */}
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-semibold text-site-text">
                {post.author}
              </p>
              <p className="text-[12px] text-gray">
                {post.date}
                <span className="mx-1.5 text-site-border">·</span>
                {post.readTime}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function BlogSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section className="bg-white px-[5%] py-[90px]">
      <div className="mx-auto max-w-[1080px]">

        {/* Header */}
        <div ref={titleRef} className="mb-14 text-center">
          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
            Insights
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[32px] font-extrabold leading-[1.2] tracking-[-0.5px] text-site-text sm:text-[40px]"
          >
            Latest from Our Blog
          </motion.h2>
          <p className="mx-auto mt-4 max-w-[480px] text-[15px] leading-[1.7] text-gray">
            Tips, strategies, and real talk to help Canadian small businesses grow online.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post, i) => (
            <BlogCard
              key={post.id}
              post={post}
              i={i}
              isHovered={hoveredId === post.id}
              isBlurred={hoveredId !== null && hoveredId !== post.id}
              onEnter={() => setHoveredId(post.id)}
              onLeave={() => setHoveredId(null)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/blog"
            className="inline-block rounded-full border-2 border-orange px-9 py-[13px] text-[14px] font-bold text-orange transition-all duration-200 hover:bg-orange hover:text-white"
          >
            Read All Articles
          </Link>
        </div>

      </div>
    </section>
  );
}
