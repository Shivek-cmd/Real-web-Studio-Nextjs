import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import CanadaDayBanner from "@/components/canada-day/CanadaDayBanner";
import CanadaDayHero from "@/components/canada-day/CanadaDayHero";
import DealSection from "@/components/canada-day/DealSection";
import ClaimSection from "@/components/canada-day/ClaimSection";
import ActivityTicker from "@/components/canada-day/ActivityTicker";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Canada Day Deal | $9.99/mo Websites for Canadian Businesses — RealWebStudio",
  description:
    "100 Canadian businesses. $9.99/month. A 4-page professional website — Home, About, Services & Contact. Limited Canada Day offer. Only 100 spots, first come first served.",
  keywords: [
    "Canada Day website deal",
    "cheap website Canada",
    "small business website $9.99",
    "affordable website design Canada",
    "Canadian business website",
    "Canada Day 2026 promo",
  ],
  alternates: { canonical: `${SITE_URL}/canada-day` },
  robots: { index: true, follow: true },
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_CA",
    type: "website",
    url: `${SITE_URL}/canada-day`,
    title: "🍁 Canada Day Deal — $9.99/mo Websites for 100 Canadian Businesses",
    description:
      "A 4-page professional website for just $9.99/month (was $29.99). Built for your business, your brand, your customers. Only 100 spots — first come, first served.",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "RealWebStudio Canada Day Deal — $9.99/mo websites for Canadian businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🍁 Canada Day Deal — $9.99/mo Websites for 100 Canadian Businesses",
    description:
      "A 4-page professional website for just $9.99/month. Only 100 spots — first come, first served.",
    images: [`${SITE_URL}/opengraph-image`],
  },
};

export default function CanadaDayPage() {
  return (
    <>
      <CanadaDayBanner />
      <CanadaDayHero />
      <DealSection />
      <ClaimSection />
      <ActivityTicker />
      <FinalCTA />
    </>
  );
}
