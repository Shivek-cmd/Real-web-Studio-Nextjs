import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo.config";
import PageHero from "@/components/ui/PageHero";
import OurStory from "@/components/about/OurStory";
import Values from "@/components/about/Values";
import TeamSection from "@/components/about/TeamSection";
import AboutStats from "@/components/about/AboutStats";
import AboutCTA from "@/components/about/AboutCTA";
import JsonLd from "@/components/seo/JsonLd";
import { webPageSchema } from "@/lib/schema";

export const metadata: Metadata = seoConfig.about;

export default function AboutPage() {
  return (
    <>
      <JsonLd
        id="about-page-schema"
        data={webPageSchema({
          name: "About Us",
          description:
            "Learn about RealWebStudio, an Edmonton web design agency serving Canadian small businesses.",
          path: "/about",
        })}
      />
      <PageHero
        label="About Us"
        title={
          <>
            Built for Canadian Small Businesses,{" "}
            <span className="text-orange">By Canadians</span>
          </>
        }
        subtitle="RealWebStudio was founded in Edmonton, Alberta with one mission — give every Canadian small business a professional website they can actually afford and rely on."
        image="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1400"
        imageAlt="RealWebStudio team working on Canadian small business websites"
        imagePosition="50% 40%"
        cta={[
          { label: "Work With Us →", href: "/contact", variant: "primary" },
          { label: "See Portfolio", href: "/portfolio", variant: "outline" },
        ]}
      />
      <OurStory />
      <Values />
      <TeamSection />
      <AboutStats />
      <AboutCTA />
    </>
  );
}
