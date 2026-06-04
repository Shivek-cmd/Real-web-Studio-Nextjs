import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { cities, getCity } from "@/lib/cities";
import { cityPageSchema } from "@/lib/schema";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return { title: "Not Found", robots: { index: false, follow: false } };

  const title = `Web Design ${city.name} | ${SITE_NAME}`;
  const description = `Professional web design in ${city.name}, ${city.provinceName}. RealWebStudio builds fast, modern websites for ${city.name} small businesses starting at $9.99/mo. Live in 72 hours. No setup fees.`;

  return {
    title,
    description,
    keywords: [
      `web design ${city.name.toLowerCase()}`,
      `${city.name.toLowerCase()} web design`,
      `website design ${city.name.toLowerCase()}`,
      `${city.name.toLowerCase()} web developer`,
      `${city.name.toLowerCase()} website`,
      `web design ${city.provinceName.toLowerCase()}`,
      "web design Canada",
      "small business website Canada",
      "affordable web design Canada",
    ],
    alternates: { canonical: absoluteUrl(`/web-design/${city.slug}`) },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: absoluteUrl(`/web-design/${city.slug}`),
      siteName: SITE_NAME,
      locale: "en_CA",
      type: "website",
      images: [{ url: city.heroImage, width: 1200, height: 630, alt: city.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [city.heroImage],
    },
  };
}

const SERVICES = [
  {
    icon: "🌐",
    title: "Website Design",
    body: "Modern, mobile-first websites built to convert visitors into customers. Custom design tailored to your brand.",
  },
  {
    icon: "📍",
    title: "Local SEO",
    body: "Rank on Google when customers search for your services locally. Google Business Profile setup included.",
  },
  {
    icon: "📣",
    title: "Google Ads",
    body: "Targeted ad campaigns that put your business in front of customers who are ready to buy right now.",
  },
  {
    icon: "📱",
    title: "Social Media Marketing",
    body: "Done-for-you posts, reels, and stories every week that build your brand and bring in local customers.",
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    body: "AI chatbots and automated follow-up sequences that capture and convert leads 24/7 — even while you sleep.",
  },
  {
    icon: "⭐",
    title: "Review Automation",
    body: "Automatically send review requests to every happy customer and build a 5-star reputation on Google.",
  },
];

const INDUSTRIES = [
  "Trades & Construction",
  "Healthcare & Dental",
  "Real Estate",
  "Restaurants & Food",
  "Legal Services",
  "Retail & E-commerce",
  "Immigration Services",
  "Fitness & Wellness",
  "Education & Tutoring",
  "Home Services",
  "Financial Services",
  "Beauty & Salons",
];

const STEPS = [
  {
    num: "01",
    title: "Fill Out the Form",
    body: "Tell us about your business in 2 minutes. No phone calls or meetings needed to get started.",
  },
  {
    num: "02",
    title: "We Build Your Site",
    body: "Our team designs and develops your custom website from scratch. You get a preview link before anything goes live.",
  },
  {
    num: "03",
    title: "Go Live in 72 Hours",
    body: "Your site is published, secured with SSL, and connected to your domain — ready to bring in customers.",
  },
  {
    num: "04",
    title: "We Maintain It For You",
    body: "Monthly updates, backups, security patches, and support included every month. You just run your business.",
  },
];

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const faqs = [
    {
      q: `How much does web design cost in ${city.name}?`,
      a: `RealWebStudio offers professional web design in ${city.name} starting at just $9.99/month — all-inclusive with hosting, SSL, monthly updates, and ongoing support. No setup fees, no lock-in contracts. Ever.`,
    },
    {
      q: `How long does it take to launch a website in ${city.name}?`,
      a: `Most ${city.name} websites are live within 72 hours of you submitting your business information. Complex sites with custom features may take 5–7 business days.`,
    },
    {
      q: `Do you serve businesses in ${city.name}, ${city.provinceName}?`,
      a: `Absolutely. RealWebStudio serves businesses across ${city.provinceName} and all of Canada, including ${city.name}. Our service is 100% remote — no in-person meetings needed, ever.`,
    },
    {
      q: `What types of businesses in ${city.name} do you work with?`,
      a: `We work with all kinds of ${city.name} small businesses — trades, healthcare, legal, real estate, restaurants, retail, immigration services, and more. If you need customers, we can help you get them online.`,
    },
    {
      q: `Will my ${city.name} website rank on Google?`,
      a: `Every website we build includes basic on-page SEO. For stronger local visibility in ${city.name}, our Local SEO Growth service covers Google Business Profile optimisation, local citations, and monthly content — so you rank when nearby customers search for your services.`,
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. No lock-in contracts, no cancellation fees. Cancel anytime with 30 days' notice and we'll hand over all your files — no questions asked.",
    },
  ];

  return (
    <>
      <JsonLd id="city-page-schema" data={cityPageSchema(city)} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <PageHero
        label={`${city.name} Web Design`}
        title={
          <>
            Professional Web Design in{" "}
            <span className="text-orange">{city.name}</span>
          </>
        }
        subtitle={`RealWebStudio helps ${city.name} small businesses get online fast with modern, conversion-focused websites starting at $9.99/mo. Live in 72 hours. No setup fees. No lock-in.`}
        image={city.heroImage}
        imageAlt={city.imageAlt}
        cta={[
          { label: "Get My Website →", href: "/contact", variant: "primary" },
          { label: "View Portfolio", href: "/portfolio", variant: "outline" },
        ]}
      />

      {/* ── Why Us ───────────────────────────────────────────── */}
      <section className="bg-white px-[5%] py-[80px]">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-12 text-center">
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
              Why RealWebStudio
            </p>
            <h2 className="text-[30px] font-extrabold leading-[1.2] tracking-[-0.5px] text-site-text sm:text-[38px]">
              Why {city.name} Businesses Choose Us
            </h2>
            <p className="mx-auto mt-4 max-w-[580px] text-[15px] leading-[1.7] text-gray">
              Hundreds of Canadian small businesses trust RealWebStudio for their online presence.
              Here's what makes us different from every other agency in {city.name}.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: "⚡",
                title: "Live in 72 Hours",
                body: `Your ${city.name} website is designed, built, and published in 72 hours — not weeks. We've built the systems to deliver fast without cutting corners.`,
              },
              {
                icon: "💰",
                title: "Starting at $9.99/mo",
                body: "No $5,000 upfront bills. No surprise invoices. One flat monthly price covers your website, hosting, SSL, and ongoing support.",
              },
              {
                icon: "🔒",
                title: "No Lock-in, Ever",
                body: "Cancel anytime with 30 days' notice. Your domain is always yours. We earn your business every month — not because you're trapped.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-[14px] border border-site-border bg-white p-7 shadow-card"
              >
                <div className="mb-4 text-[32px]">{card.icon}</div>
                <h3 className="mb-2 text-[17px] font-extrabold text-site-text">{card.title}</h3>
                <p className="text-[14px] leading-[1.75] text-gray">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Strip ──────────────────────────────────────── */}
      <section className="bg-dark px-[5%] py-[56px]">
        <div className="mx-auto grid max-w-[1080px] grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {[
            { stat: "500+", label: "Websites Delivered" },
            { stat: "4.9★", label: "Google Rating" },
            { stat: "72h", label: "Average Launch Time" },
            { stat: "$9.99/mo", label: "Starting Price (CAD)" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[36px] font-extrabold leading-none tracking-[-1px] text-orange sm:text-[42px]">
                {item.stat}
              </p>
              <p className="mt-2 text-[13px] font-medium text-white/60">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="bg-gray-light px-[5%] py-[80px]">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-12 text-center">
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
              What We Offer
            </p>
            <h2 className="text-[30px] font-extrabold leading-[1.2] tracking-[-0.5px] text-site-text sm:text-[38px]">
              Web Design & Digital Services in {city.name}
            </h2>
            <p className="mx-auto mt-4 max-w-[580px] text-[15px] leading-[1.7] text-gray">
              Everything your {city.name} business needs to grow online — from your first website
              to full digital marketing.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((svc) => (
              <div
                key={svc.title}
                className="rounded-[14px] border border-site-border bg-white p-6"
              >
                <div className="mb-3 text-[28px]">{svc.icon}</div>
                <h3 className="mb-2 text-[16px] font-extrabold text-site-text">{svc.title}</h3>
                <p className="text-[14px] leading-[1.75] text-gray">{svc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ───────────────────────────────────────── */}
      <section className="bg-white px-[5%] py-[80px]">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-10 text-center">
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
              Industries
            </p>
            <h2 className="text-[30px] font-extrabold leading-[1.2] tracking-[-0.5px] text-site-text sm:text-[38px]">
              Who We Serve in {city.name}
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-[1.7] text-gray">
              We've built websites for all kinds of {city.name} businesses. If you need
              customers, we can help.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {INDUSTRIES.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-site-border bg-gray-light px-5 py-2.5 text-[13px] font-semibold text-site-text"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────── */}
      <section className="bg-gray-light px-[5%] py-[80px]">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-12 text-center">
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
              How It Works
            </p>
            <h2 className="text-[30px] font-extrabold leading-[1.2] tracking-[-0.5px] text-site-text sm:text-[38px]">
              Your {city.name} Website Live in 4 Steps
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div key={step.num} className="rounded-[14px] border border-site-border bg-white p-6">
                <p className="mb-3 text-[13px] font-extrabold text-orange">Step {step.num}</p>
                <h3 className="mb-2 text-[16px] font-extrabold text-site-text">{step.title}</h3>
                <p className="text-[14px] leading-[1.75] text-gray">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="bg-white px-[5%] py-[80px]">
        <div className="mx-auto max-w-[720px]">
          <div className="mb-10 text-center">
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
              FAQ
            </p>
            <h2 className="text-[30px] font-extrabold leading-[1.2] tracking-[-0.5px] text-site-text sm:text-[38px]">
              Web Design {city.name} — Questions Answered
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-[12px] border border-site-border bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-[15px] font-bold text-site-text marker:content-none">
                  {faq.q}
                  <span className="shrink-0 text-orange transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-5 text-[14px] leading-[1.8] text-gray">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="bg-dark px-[5%] py-[88px]">
        <div className="mx-auto max-w-[680px] text-center">
          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
            Ready to Start?
          </p>
          <h2 className="mb-5 text-[30px] font-extrabold leading-[1.2] tracking-[-0.5px] text-white sm:text-[40px]">
            Get Your {city.name} Website Live in 72 Hours
          </h2>
          <p className="mx-auto mb-8 max-w-[500px] text-[15px] leading-[1.7] text-white/65">
            Join 500+ Canadian businesses who trust RealWebStudio. No setup fees, no lock-in,
            no technical headaches — just a professional website that works.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-orange px-8 py-[14px] text-[15px] font-bold text-white shadow-orange transition-all duration-200 hover:-translate-y-px hover:bg-orange-dark"
            >
              Get My Website →
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-white/30 px-8 py-[14px] text-[15px] font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white/10"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-white/45">
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ 72-hour launch</span>
            <span>✓ Canadian support</span>
          </div>
        </div>
      </section>

      {/* ── Internal links to nearby / related cities ────────── */}
      <section className="bg-gray-light px-[5%] py-[56px]">
        <div className="mx-auto max-w-[1080px] text-center">
          <p className="mb-6 text-[13px] font-semibold text-gray">
            We also serve businesses across Canada —{" "}
            <Link href="/web-design" className="text-orange underline underline-offset-2 hover:text-orange-dark">
              see all cities we cover
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
