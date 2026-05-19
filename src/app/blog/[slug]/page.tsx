import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogTableOfContents from "@/components/blog/BlogTableOfContents";
import JsonLd from "@/components/seo/JsonLd";
import { blogPosts, getBlogPost, getRelatedPosts, type BlogPost } from "@/lib/blog";
import { blogPostSchema } from "@/lib/schema";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | RealWebStudio",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${post.seoTitle} | RealWebStudio`,
    description: post.seoDescription,
    alternates: { canonical: absoluteUrl(post.href) },
    robots: { index: true, follow: true },
    authors: [{ name: post.author }],
    category: post.category,
    keywords: post.tags,
    openGraph: {
      siteName: SITE_NAME,
      locale: "en_CA",
      type: "article",
      url: absoluteUrl(post.href),
      title: post.seoTitle,
      description: post.seoDescription,
      publishedTime: post.sortDate,
      modifiedTime: post.updatedDate ?? post.sortDate,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.heroImage,
          width: 1200,
          height: 630,
          alt: post.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.seoDescription,
      images: [post.heroImage],
    },
  };
}

function RelatedCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-site-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-orange hover:shadow-orange">
      <Link href={post.href} className="relative block h-[250px] shrink-0 overflow-hidden">
        <Image
          src={post.image}
          alt={post.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-600 group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
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

        <h3 className="mb-3 text-[17px] font-bold leading-[1.45] text-site-text transition-colors duration-150 group-hover:text-orange">
          <Link href={post.href}>{post.title}</Link>
        </h3>
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
    </article>
  );
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);
  const articleUrl = absoluteUrl(post.href);
  const encodedUrl = encodeURIComponent(articleUrl);
  const encodedTitle = encodeURIComponent(post.title);

  return (
    <>
      <JsonLd id="blog-post-schema" data={blogPostSchema(post)} />
      <section className="relative min-h-[520px] overflow-hidden">
        <Image
          src={post.heroImage}
          alt={post.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "50% 44%" }}
        />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/92 via-dark/64 to-dark/20" />

        <div className="relative z-10 mx-auto flex min-h-[520px] w-full max-w-[1080px] items-end px-[5%] py-[86px]">
          <div className="max-w-[720px] text-left">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span
                className={`rounded-full px-3 py-[5px] text-[11px] font-extrabold uppercase tracking-[1.5px] text-white ${post.categoryColor}`}
              >
                {post.category}
              </span>
              <time dateTime={post.sortDate} className="text-[12px] font-semibold text-white/55">
                Published {post.date}
              </time>
            </div>

            <h1 className="text-[38px] font-extrabold leading-[1.12] tracking-[-0.5px] text-white sm:text-[54px]">
              {post.title}
            </h1>

            <p className="mt-5 max-w-[620px] text-[16px] leading-[1.8] text-white/68">
              {post.excerpt}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4 text-[13px] font-semibold text-white/62">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-orange">
                <Image
                  src={post.authorAvatar}
                  alt={post.author}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <span className="text-white">{post.author}</span>
              <span className="text-white/24">.</span>
              <span>{post.readTime}</span>
              <span className="text-white/24">.</span>
              <time dateTime={post.sortDate}>{post.date}</time>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-white px-[5%] py-[80px]">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-10 flex flex-wrap items-center gap-3 text-[13px] font-semibold text-gray">
            <Link href="/blog" className="text-orange transition-colors duration-200 hover:text-orange-dark">
              Blog
            </Link>
            <span className="text-site-border">/</span>
            <span>{post.category}</span>
            <span className="text-site-border">.</span>
            <time dateTime={post.sortDate}>{post.date}</time>
            <span className="text-site-border">.</span>
            <span>{post.readTime}</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:items-start">
            <aside className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
              <div>
                <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
                  Table of Contents
                </p>
                <BlogTableOfContents
                  items={post.sections.map((section) => ({
                    id: section.id,
                    title: section.title,
                  }))}
                />

                <div className="mt-9 border-l border-site-border pl-4">
                  <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
                    Share
                  </p>
                  <div className="flex items-center gap-2">
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-site-border text-[12px] font-extrabold text-site-text transition-all duration-200 hover:border-orange hover:bg-orange hover:text-white"
                      aria-label="Share on LinkedIn"
                    >
                      in
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-site-border text-[12px] font-extrabold text-site-text transition-all duration-200 hover:border-orange hover:bg-orange hover:text-white"
                      aria-label="Share on X"
                    >
                      X
                    </a>
                    <a
                      href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-site-border text-[12px] font-extrabold text-site-text transition-all duration-200 hover:border-orange hover:bg-orange hover:text-white"
                      aria-label="Share by email"
                    >
                      @
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            <article className="min-w-0">
              <div className="mb-8 flex flex-col gap-5 border-b border-site-border pb-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-orange-light">
                    <Image
                      src={post.authorAvatar}
                      alt={post.author}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[14px] font-extrabold text-site-text">
                      {post.author}
                    </p>
                    <p className="mt-1 text-[12.5px] font-semibold text-gray">
                      Published <time dateTime={post.sortDate}>{post.date}</time>
                      <span className="mx-1.5 text-site-border">.</span>
                      {post.readTime}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="mr-1 text-[12px] font-extrabold uppercase tracking-[1.5px] text-orange">
                    Share
                  </span>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-site-border px-3.5 py-2 text-[12px] font-bold text-site-text transition-all duration-200 hover:border-orange hover:text-orange"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-site-border px-3.5 py-2 text-[12px] font-bold text-site-text transition-all duration-200 hover:border-orange hover:text-orange"
                  >
                    X
                  </a>
                  <a
                    href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
                    className="rounded-full border border-site-border px-3.5 py-2 text-[12px] font-bold text-site-text transition-all duration-200 hover:border-orange hover:text-orange"
                  >
                    Email
                  </a>
                </div>
              </div>

              <div className="mb-8 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-light px-3 py-1.5 text-[11px] font-bold text-gray"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mb-10 border-l-[4px] border-orange pl-5 text-[18px] font-semibold leading-[1.8] text-site-text">
                {post.intro}
              </p>

              <div className="relative mb-12 h-[260px] overflow-hidden rounded-[14px] sm:h-[380px]">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 760px"
                    className="object-cover"
                  />
              </div>

              <div className="space-y-12">
                {post.sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-28">
                    <h2 className="text-[28px] font-extrabold leading-[1.2] tracking-[-0.3px] text-site-text">
                      {section.title}
                    </h2>
                    {section.subtitle && (
                      <p className="mt-3 text-[15px] font-semibold leading-[1.7] text-gray">
                        {section.subtitle}
                      </p>
                    )}
                    <div className="mt-6 space-y-5">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-[15.5px] leading-[1.9] text-gray"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {section.bullets && (
                      <ul className="mt-7 grid gap-3">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex gap-3 text-[14.5px] font-semibold leading-[1.7] text-site-text"
                          >
                            <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-orange" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              <div className="mt-14 border-l-[4px] border-orange bg-gray-light px-6 py-7">
                <p className="text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
                  Build the next step
                </p>
                <h2 className="mt-3 text-[24px] font-extrabold leading-tight text-site-text">
                  Want this working for your business?
                </h2>
                <p className="mt-3 max-w-[620px] text-[14px] leading-[1.8] text-gray">
                  RealWebStudio builds fast, conversion-focused websites for Canadian small businesses that need better visibility, clearer messaging, and more qualified leads.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex rounded-full bg-orange px-7 py-[13px] text-[14px] font-bold text-white shadow-orange transition-all duration-200 hover:-translate-y-px hover:bg-orange-dark"
                >
                  Book a Free Call
                </Link>
              </div>
            </article>
          </div>
        </div>
      </main>

      <section className="bg-white px-[5%] py-[80px]">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
                Keep Reading
              </p>
              <h2 className="text-[32px] font-extrabold leading-[1.2] tracking-[-0.5px] text-site-text">
                Related Blog Posts
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex rounded-full border border-site-border px-6 py-[12px] text-[14px] font-bold text-site-text transition-all duration-200 hover:border-orange hover:text-orange"
            >
              View All Articles
            </Link>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <RelatedCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
