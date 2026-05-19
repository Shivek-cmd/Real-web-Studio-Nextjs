import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo.config";
import PageHero from "@/components/ui/PageHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = seoConfig.portfolio;

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        label="Portfolio"
        title={
          <>
            Real Results for{" "}
            <span className="text-orange">Real Businesses</span>
          </>
        }
        subtitle="From local tradespeople to professional service firms — see how we've helped 500+ Canadian small businesses win online."
        image="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1400"
        imageAlt="Canadian business team celebrating growth results"
        imagePosition="50% 35%"
      />
      <PortfolioGrid />
    </>
  );
}
