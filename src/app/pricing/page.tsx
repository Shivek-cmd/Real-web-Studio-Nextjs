import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo.config";
import PageHero from "@/components/ui/PageHero";
import PricingPlans from "@/components/pricing/PricingPlans";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = seoConfig.pricing;

export default function PricingPage() {
  return (
    <>
      <PageHero
        label="Pricing"
        title={
          <>
            Simple, Transparent{" "}
            <span className="text-orange">Pricing</span>
          </>
        }
        subtitle="No setup fees. No hidden costs. No lock-in contracts. Professional websites for Canadian small businesses — starting at $9.99/month."
        image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400"
        imageAlt="RealWebStudio pricing — affordable websites for Canadian businesses"
        imagePosition="50% 40%"
        cta={[
          { label: "See All Plans →", href: "#plans", variant: "primary" },
          { label: "Book a Free Call", href: "/contact", variant: "outline" },
        ]}
      />
      <div id="plans">
        <PricingPlans />
      </div>
      <PricingFAQ />
      <FinalCTA />
    </>
  );
}
