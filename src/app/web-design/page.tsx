import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { getCitiesByProvince } from "@/lib/cities";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: `Web Design Canada | ${SITE_NAME}`,
  description:
    "RealWebStudio provides professional web design across Canada. Find your city and get a fast, modern, SEO-friendly website starting at $9.99/mo. Live in 72 hours.",
  keywords: [
    "web design Canada",
    "website design Canada",
    "web design company Canada",
    "Canadian web designer",
    "small business web design Canada",
    "affordable web design Canada",
  ],
  alternates: { canonical: absoluteUrl("/web-design") },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Web Design Canada | ${SITE_NAME}`,
    description:
      "Professional web design for Canadian small businesses — fast, modern, and starting at $9.99/mo. Find your city.",
    url: absoluteUrl("/web-design"),
    siteName: SITE_NAME,
    locale: "en_CA",
    type: "website",
  },
};

const provinceOrder = [
  "Alberta",
  "British Columbia",
  "Ontario",
  "Manitoba",
  "Saskatchewan",
  "Nova Scotia",
];

export default function WebDesignHubPage() {
  const byProvince = getCitiesByProvince();

  const schema = [
    ...webPageSchema({
      name: "Web Design Canada",
      description:
        "Professional web design services for Canadian small businesses across every province.",
      path: "/web-design",
    }),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${SITE_URL}/web-design#city-list`,
      name: "Canadian Cities We Serve — Web Design",
      itemListElement: Object.values(byProvince)
        .flat()
        .map((city, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `Web Design ${city.name}`,
          url: absoluteUrl(`/web-design/${city.slug}`),
        })),
    },
  ];

  const orderedProvinces = [
    ...provinceOrder.filter((p) => byProvince[p]),
    ...Object.keys(byProvince).filter((p) => !provinceOrder.includes(p)),
  ];

  return (
    <>
      <JsonLd id="web-design-hub-schema" data={schema} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <PageHero
        label="Web Design Canada"
        title={
          <>
            Web Design Services{" "}
            <span className="text-orange">Across Canada</span>
          </>
        }
        subtitle="RealWebStudio builds professional, fast, and SEO-friendly websites for small businesses in every Canadian city — starting at $9.99/mo, live in 72 hours."
        image="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1400"
        imageAlt="Web design services for Canadian businesses"
        cta={[
          { label: "Get My Website →", href: "/contact", variant: "primary" },
          { label: "View Pricing", href: "/pricing", variant: "outline" },
        ]}
      />

      {/* ── Why us strip ─────────────────────────────────────── */}
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

      {/* ── City grid by province ─────────────────────────────── */}
      <section className="bg-white px-[5%] py-[80px]">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-12 text-center">
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
              Service Areas
            </p>
            <h2 className="text-[30px] font-extrabold leading-[1.2] tracking-[-0.5px] text-site-text sm:text-[38px]">
              Find Your City
            </h2>
            <p className="mx-auto mt-4 max-w-[540px] text-[15px] leading-[1.7] text-gray">
              We serve small businesses across Canada, 100% remotely. Click your city to see
              how we can help your local business grow online.
            </p>
          </div>

          <div className="space-y-12">
            {orderedProvinces.map((province) => (
              <div key={province}>
                <h3 className="mb-5 border-b border-site-border pb-3 text-[13px] font-extrabold uppercase tracking-[2px] text-orange">
                  {province}
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {byProvince[province].map((city) => (
                    <Link
                      key={city.slug}
                      href={`/web-design/${city.slug}`}
                      className="flex items-center justify-between rounded-[12px] border border-site-border bg-white px-5 py-4 transition-all duration-200 hover:border-orange hover:shadow-card"
                    >
                      <div>
                        <p className="text-[15px] font-bold text-site-text">
                          Web Design {city.name}
                        </p>
                        <p className="mt-0.5 text-[12px] text-gray">
                          {city.name}, {city.province}
                        </p>
                      </div>
                      <span className="text-orange">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's included ──────────────────────────────────── */}
      <section className="bg-gray-light px-[5%] py-[80px]">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-12 text-center">
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
              What's Included
            </p>
            <h2 className="text-[30px] font-extrabold leading-[1.2] tracking-[-0.5px] text-site-text sm:text-[38px]">
              Everything Your Business Needs
            </h2>
            <p className="mx-auto mt-4 max-w-[540px] text-[15px] leading-[1.7] text-gray">
              Every city page comes with the same all-inclusive package — no matter where in
              Canada you are.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🎨", title: "Custom Design", body: "A website built specifically for your business — not a template." },
              { icon: "📱", title: "Mobile-Responsive", body: "Looks and works perfectly on every phone, tablet, and desktop." },
              { icon: "🔒", title: "Hosting & SSL", body: "Fully hosted on our servers with SSL certificate included." },
              { icon: "📍", title: "Basic Local SEO", body: "On-page SEO and Google Business Profile setup for your city." },
              { icon: "🔧", title: "Monthly Maintenance", body: "Updates, backups, security patches — handled every month." },
              { icon: "💬", title: "Canadian Support", body: "Real people, based in Canada, available via email and WhatsApp." },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[14px] border border-site-border bg-white p-6"
              >
                <div className="mb-3 text-[28px]">{item.icon}</div>
                <h3 className="mb-2 text-[15px] font-extrabold text-site-text">{item.title}</h3>
                <p className="text-[14px] leading-[1.75] text-gray">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="bg-dark px-[5%] py-[88px]">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
            Ready to Start?
          </p>
          <h2 className="mb-5 text-[30px] font-extrabold leading-[1.2] tracking-[-0.5px] text-white sm:text-[40px]">
            Your Website Could Be Live in 72 Hours
          </h2>
          <p className="mx-auto mb-8 max-w-[480px] text-[15px] leading-[1.7] text-white/65">
            Join 500+ Canadian businesses who trust RealWebStudio. No setup fees, no lock-in,
            no technical headaches.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-orange px-8 py-[14px] text-[15px] font-bold text-white shadow-orange transition-all duration-200 hover:-translate-y-px hover:bg-orange-dark"
            >
              Get My Website Now →
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-white/30 px-8 py-[14px] text-[15px] font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white/10"
            >
              See Pricing
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
    </>
  );
}
