import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo.config";
import Hero from "@/components/home/Hero";
import MarqueeStrip from "@/components/home/MarqueeStrip";
import StatsStrip from "@/components/home/StatsStrip";
import WhySection from "@/components/home/WhySection";
import HowItWorks from "@/components/home/HowItWorks";
import BookingCalendar from "@/components/home/BookingCalendar";
import Services from "@/components/home/Services";
import SwitchSection from "@/components/home/SwitchSection";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import BlogSection from "@/components/home/BlogSection";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = seoConfig.home;

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <StatsStrip />
      <WhySection />
<Services />
      <HowItWorks />
<BookingCalendar />
      
      <SwitchSection />
      <Testimonials />
      <FAQ />
      <BlogSection />
      <FinalCTA />
    </>
  );
}
