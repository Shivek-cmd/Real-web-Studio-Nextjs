/**
 * SEO config - single source of truth for page metadata.
 */

import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const OG_IMAGE = {
  url: `${SITE_URL}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "RealWebStudio - Custom websites for Canadian small businesses",
};

const sharedOpenGraphDefaults = {
  siteName: SITE_NAME,
  locale: "en_CA",
  type: "website" as const,
};

const sharedTwitterDefaults = {
  card: "summary_large_image" as const,
  images: [OG_IMAGE.url],
};

export const seoConfig = {
  home: {
    title: "RealWebStudio | Custom Websites for Canadian Small Businesses",
    description:
      "Done-for-you websites for Canadian small businesses - live in 3 to 7 days, starting at $9.99/month. Proudly serving Edmonton, Calgary, Vancouver, Toronto, and all of Canada.",
    alternates: { canonical: `${SITE_URL}/` },
    robots: { index: true, follow: true },
    openGraph: {
      ...sharedOpenGraphDefaults,
      url: `${SITE_URL}/`,
      title: "RealWebStudio | Custom Websites for Canadian Small Businesses",
      description:
        "Done-for-you websites for Canadian small businesses - live in 3 to 7 days, starting at $9.99/month.",
      images: [OG_IMAGE],
    },
    twitter: {
      ...sharedTwitterDefaults,
      title: "RealWebStudio | Custom Websites for Canadian Small Businesses",
      description:
        "Done-for-you websites for Canadian small businesses - live in 3 to 7 days, starting at $9.99/month.",
    },
  } satisfies Metadata,

  about: {
    title: "About Us | RealWebStudio - Canadian Web Design Agency",
    description:
      "Learn about RealWebStudio - Edmonton's done-for-you web design agency serving small businesses across Canada. Our story, mission, and values.",
    alternates: { canonical: `${SITE_URL}/about` },
    robots: { index: true, follow: true },
    openGraph: {
      ...sharedOpenGraphDefaults,
      url: `${SITE_URL}/about`,
      title: "About RealWebStudio | Canadian Web Design Agency",
      description:
        "Edmonton-based web design agency helping Canadian small businesses grow online since day one.",
      images: [OG_IMAGE],
    },
    twitter: {
      ...sharedTwitterDefaults,
      title: "About RealWebStudio | Canadian Web Design Agency",
      description:
        "Edmonton-based web design agency helping Canadian small businesses grow online since day one.",
    },
  } satisfies Metadata,

  contact: {
    title: "Contact Us | RealWebStudio",
    description:
      "Get in touch with RealWebStudio. Call, WhatsApp, or email us - or book a free 15-minute discovery call. Serving Edmonton and all of Canada.",
    alternates: { canonical: `${SITE_URL}/contact` },
    robots: { index: true, follow: true },
    openGraph: {
      ...sharedOpenGraphDefaults,
      url: `${SITE_URL}/contact`,
      title: "Contact RealWebStudio | Get a Free Quote",
      description:
        "Reach out to RealWebStudio via WhatsApp, phone, email, or book a call. We respond within 2 hours.",
      images: [OG_IMAGE],
    },
    twitter: {
      ...sharedTwitterDefaults,
      title: "Contact RealWebStudio | Get a Free Quote",
      description:
        "Reach out to RealWebStudio via WhatsApp, phone, email, or book a call. We respond within 2 hours.",
    },
  } satisfies Metadata,

  portfolio: {
    title: "Portfolio | RealWebStudio - Real Results for Canadian Businesses",
    description:
      "See how RealWebStudio has helped 500+ Canadian small businesses grow online. Real portfolio from trades, healthcare, legal, real estate, and more.",
    alternates: { canonical: `${SITE_URL}/portfolio` },
    robots: { index: true, follow: true },
    openGraph: {
      ...sharedOpenGraphDefaults,
      url: `${SITE_URL}/portfolio`,
      title: "Portfolio | RealWebStudio - Real Results",
      description:
        "Real results from RealWebStudio clients across Canada - from +312% leads to #1 Google rankings.",
      images: [OG_IMAGE],
    },
    twitter: {
      ...sharedTwitterDefaults,
      title: "Portfolio | RealWebStudio - Real Results",
      description:
        "Real results from RealWebStudio clients across Canada - from +312% leads to #1 Google rankings.",
    },
  } satisfies Metadata,

  pricing: {
    title: "Pricing | RealWebStudio - Websites from $9.99/month",
    description:
      "Simple, transparent pricing for Canadian small businesses. No setup fees, no lock-in. Professional websites starting at $9.99/month. Cancel anytime.",
    alternates: { canonical: `${SITE_URL}/pricing` },
    robots: { index: true, follow: true },
    openGraph: {
      ...sharedOpenGraphDefaults,
      url: `${SITE_URL}/pricing`,
      title: "Pricing | RealWebStudio - Websites from $9.99/month",
      description:
        "No setup fees, no lock-in. Professional websites for Canadian businesses starting at $9.99/month.",
      images: [OG_IMAGE],
    },
    twitter: {
      ...sharedTwitterDefaults,
      title: "Pricing | RealWebStudio - Websites from $9.99/month",
      description:
        "No setup fees, no lock-in. Professional websites for Canadian businesses starting at $9.99/month.",
    },
  } satisfies Metadata,

  blog: {
    title: "Blog | RealWebStudio - Web Design, Local SEO & AI Growth Tips",
    description:
      "Read practical web design, local SEO, and AI growth insights for Canadian small businesses from the RealWebStudio team.",
    alternates: { canonical: `${SITE_URL}/blog` },
    robots: { index: true, follow: true },
    openGraph: {
      ...sharedOpenGraphDefaults,
      url: `${SITE_URL}/blog`,
      title: "Blog | RealWebStudio Insights",
      description:
        "Practical web design, local SEO, and AI growth insights for Canadian small businesses.",
      images: [OG_IMAGE],
    },
    twitter: {
      ...sharedTwitterDefaults,
      title: "Blog | RealWebStudio Insights",
      description:
        "Practical web design, local SEO, and AI growth insights for Canadian small businesses.",
    },
  } satisfies Metadata,

  privacyPolicy: {
    title: "Privacy Policy | RealWebStudio",
    description:
      "Privacy Policy for RealWebStudio. Learn how we collect, use, and protect your personal information in compliance with PIPEDA and Canadian privacy law.",
    alternates: { canonical: `${SITE_URL}/privacy-policy` },
    robots: { index: true, follow: true },
    openGraph: {
      ...sharedOpenGraphDefaults,
      url: `${SITE_URL}/privacy-policy`,
      title: "Privacy Policy | RealWebStudio",
      description:
        "Learn how RealWebStudio collects, uses, and protects your personal information.",
      images: [OG_IMAGE],
    },
    twitter: {
      ...sharedTwitterDefaults,
      title: "Privacy Policy | RealWebStudio",
      description:
        "Learn how RealWebStudio collects, uses, and protects your personal information.",
    },
  } satisfies Metadata,

  termsOfService: {
    title: "Terms of Service | RealWebStudio",
    description:
      "Terms of Service for RealWebStudio. Review our service terms, payment policies, client responsibilities, and more.",
    alternates: { canonical: `${SITE_URL}/terms-of-service` },
    robots: { index: true, follow: true },
    openGraph: {
      ...sharedOpenGraphDefaults,
      url: `${SITE_URL}/terms-of-service`,
      title: "Terms of Service | RealWebStudio",
      description:
        "Review RealWebStudio's service terms, payment policies, and client responsibilities.",
      images: [OG_IMAGE],
    },
    twitter: {
      ...sharedTwitterDefaults,
      title: "Terms of Service | RealWebStudio",
      description:
        "Review RealWebStudio's service terms, payment policies, and client responsibilities.",
    },
  } satisfies Metadata,

  thankYou: {
    title: "Thank You | RealWebStudio",
    description: "Thank you for reaching out to RealWebStudio.",
    alternates: { canonical: `${SITE_URL}/thank-you` },
    robots: { index: false, follow: false },
  } satisfies Metadata,
};
