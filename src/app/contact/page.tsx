import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo.config";
import PageHero from "@/components/ui/PageHero";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";

export const metadata: Metadata = seoConfig.contact;

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact Us"
        title={
          <>
            Let&apos;s Talk About{" "}
            <span className="text-orange">Your Website</span>
          </>
        }
        subtitle="We respond within 2 hours during business hours. Prefer a live conversation? Book a free 15-minute discovery call."
        image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1400"
        imageAlt="RealWebStudio team ready to help Canadian small businesses"
        imagePosition="50% 30%"
        cta={[
          { label: "Call Us Now", href: "tel:+15878756567", variant: "primary" },
          { label: "WhatsApp Us", href: "https://wa.me/15878756567", variant: "outline" },
        ]}
      />
      <ContactHero />
      <ContactForm />
      <ContactMap />
    </>
  );
}
