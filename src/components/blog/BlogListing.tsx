"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { blogCategories, blogPosts, blogTags, type BlogPost } from "@/lib/blog";

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-site-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-orange hover:shadow-orange"
    >
      <Link href={post.href} className="relative block h-[250px] shrink-0 overflow-hidden">
        <Image
          src={post.image}
          alt={post.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-600 group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-[5px] text-[11px] font-extrabold uppercase tracking-[1px] text-white shadow-sm ${post.categoryColor}`}
        >
          {post.category}
        </span>
        <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-site-text opacity-0 shadow-card transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
          <svg
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-[15px] w-[15px]"
          >
            <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" />
          </svg>
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-light px-3 py-1 text-[11px] font-semibold text-gray"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="mb-3 text-[17px] font-bold leading-[1.45] text-site-text transition-colors duration-150 group-hover:text-orange">
          <Link href={post.href}>{post.title}</Link>
        </h2>

        <p className="mb-5 flex-1 text-[13.5px] leading-[1.75] text-gray line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mb-4 border-t border-site-border" />

        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-orange-light">
            <Image
              src={post.authorAvatar}
              alt={post.author}
              fill
              sizes="36px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-semibold text-site-text">
              {post.author}
            </p>
            <p className="text-[12px] text-gray">
              {post.date}
              <span className="mx-1.5 text-site-border">.</span>
              {post.readTime}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogListing() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [activeTag, setActiveTag] = useState("All");
  const [sort, setSort] = useState("newest");

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const matchesSearch =
        normalizedQuery.length === 0 ||
        [post.title, post.excerpt, post.category, ...post.tags]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesCategory = category === "All" || post.category === category;
      const matchesTag = activeTag === "All" || post.tags.includes(activeTag);

      return matchesSearch && matchesCategory && matchesTag;
    }).sort((a, b) => {
      const diff = new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime();
      return sort === "newest" ? diff : -diff;
    });
  }, [activeTag, category, query, sort]);

  return (
    <section className="bg-gray-light px-[5%] py-[80px]">
      <div className="mx-auto max-w-[1080px]">
        <div className="mb-8">
          <div className="grid gap-4 lg:grid-cols-[1fr_210px]">
            <label className="relative block">
              <span className="sr-only">Search articles</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search web design, SEO, automation..."
                className="h-[52px] w-full rounded-full border border-site-border bg-white pl-12 pr-5 text-[14px] font-medium text-site-text outline-none transition-all duration-200 placeholder:text-gray/70 hover:shadow-card focus:border-orange focus:shadow-card"
              />
            </label>

            <label>
              <span className="sr-only">Sort articles</span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="h-[52px] w-full rounded-full border border-site-border bg-gray-light px-5 text-[14px] font-bold text-site-text outline-none transition-all duration-200 focus:border-orange focus:bg-white"
              >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
              </select>
            </label>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {blogCategories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full border px-4 py-2 text-[12px] font-extrabold uppercase tracking-[1px] transition-all duration-200 ${
                  category === item
                    ? "border-orange bg-orange text-white shadow-orange"
                    : "border-site-border bg-white text-gray hover:border-orange hover:text-orange"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
          <div>
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="text-[13px] font-semibold text-gray">
                Showing {filteredPosts.length} of {blogPosts.length} articles
              </p>
              {(query || category !== "All" || activeTag !== "All") && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setCategory("All");
                    setActiveTag("All");
                  }}
                  className="text-[13px] font-bold text-orange transition-colors duration-200 hover:text-orange-dark"
                >
                  Clear filters
                </button>
              )}
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 items-stretch gap-7 sm:grid-cols-2">
                {filteredPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>
            ) : (
              <div className="rounded-[20px] border border-site-border bg-white px-6 py-14 text-center shadow-card">
                <p className="text-[18px] font-extrabold text-site-text">
                  No articles found
                </p>
                <p className="mx-auto mt-3 max-w-[420px] text-[14px] leading-[1.7] text-gray">
                  Try a different keyword, category, or tag to bring the right insights back into view.
                </p>
              </div>
            )}
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border-l border-site-border pl-5">
              <p className="text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
                Tags
              </p>
              <h2 className="mt-2 text-[24px] font-extrabold leading-tight text-site-text">
                Browse by topic
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {["All", ...blogTags].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setActiveTag(tag)}
                    className={`rounded-full px-3 py-1.5 text-left text-[11px] font-semibold transition-all duration-200 ${
                      activeTag === tag
                        ? "bg-site-text text-white"
                        : "bg-white text-gray shadow-card hover:text-orange"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
