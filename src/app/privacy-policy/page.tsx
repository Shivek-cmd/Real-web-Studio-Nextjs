import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo.config";
import PageHero from "@/components/ui/PageHero";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = seoConfig.privacyPolicy;

const SECTIONS = [
  { id: "introduction", title: "Introduction" },
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use It" },
  { id: "how-we-share", title: "How We Share It" },
  { id: "data-storage", title: "Data Storage & Security" },
  { id: "cookies", title: "Cookies & Tracking" },
  { id: "your-rights", title: "Your Rights (PIPEDA)" },
  { id: "third-party", title: "Third-Party Links" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact Us" },
];

function SectionHeading({ id, title }: { id: string; title: string }) {
  return (
    <h2
      id={id}
      data-section
      className="mb-4 mt-10 scroll-mt-[100px] text-[22px] font-extrabold text-site-text first:mt-0"
    >
      {title}
    </h2>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        subtitle="Your privacy matters to us. This policy explains how RealWebStudio collects, uses, and protects your personal information in compliance with Canadian law."
        image="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1400"
        imageAlt="Professional and secure document handling"
        imagePosition="50% 60%"
      />

      <LegalLayout title="Privacy Policy" lastUpdated="May 15, 2025" sections={SECTIONS}>

        <SectionHeading id="introduction" title="Introduction" />
        <p className="mb-4 text-[15px] leading-[1.8] text-gray">
          RealWebStudio ("we," "our," or "us") is committed to protecting your privacy and complying with Canada's <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA) and applicable provincial privacy legislation, including Alberta's <em>Personal Information Protection Act</em> (PIPA).
        </p>
        <p className="mb-4 text-[15px] leading-[1.8] text-gray">
          This Privacy Policy describes how we collect, use, disclose, and safeguard personal information when you visit our website at <strong>realwebstudio.com</strong>, use our services, or communicate with us.
        </p>
        <p className="text-[15px] leading-[1.8] text-gray">
          By using our website or services, you consent to the practices described in this policy. If you do not agree, please discontinue use of our services and contact us to request deletion of any data we may hold.
        </p>

        <SectionHeading id="information-we-collect" title="Information We Collect" />
        <p className="mb-3 text-[15px] leading-[1.8] text-gray">We collect information in two ways:</p>
        <p className="mb-2 text-[15px] font-semibold text-site-text">Information you provide directly:</p>
        <ul className="mb-4 list-disc space-y-1.5 pl-5 text-[15px] leading-[1.8] text-gray">
          <li>Name, email address, phone number, and business name when you fill out our contact or onboarding forms</li>
          <li>Business details (industry, website goals, existing domain) provided during the signup process</li>
          <li>Payment information processed securely through our third-party payment processor (we do not store card data)</li>
          <li>Communications you send us via email, WhatsApp, or our contact form</li>
        </ul>
        <p className="mb-2 text-[15px] font-semibold text-site-text">Information collected automatically:</p>
        <ul className="list-disc space-y-1.5 pl-5 text-[15px] leading-[1.8] text-gray">
          <li>IP address, browser type, device type, and operating system</li>
          <li>Pages visited, time on site, referring URLs, and click behaviour (via Google Analytics and GTM)</li>
          <li>Cookies and similar tracking technologies (see Cookies section below)</li>
        </ul>

        <SectionHeading id="how-we-use" title="How We Use Your Information" />
        <p className="mb-3 text-[15px] leading-[1.8] text-gray">We use your personal information to:</p>
        <ul className="list-disc space-y-1.5 pl-5 text-[15px] leading-[1.8] text-gray">
          <li>Provide, manage, and improve our website design and digital marketing services</li>
          <li>Process payments and send invoices or receipts</li>
          <li>Communicate with you about your project, support requests, or account</li>
          <li>Send service-related notifications (e.g., website launch confirmations, maintenance alerts)</li>
          <li>Send marketing communications where you have opted in (you may unsubscribe at any time)</li>
          <li>Analyze website usage to improve performance and user experience</li>
          <li>Comply with legal obligations under Canadian law</li>
        </ul>
        <p className="mt-4 text-[15px] leading-[1.8] text-gray">
          We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
        </p>

        <SectionHeading id="how-we-share" title="How We Share Your Information" />
        <p className="mb-3 text-[15px] leading-[1.8] text-gray">
          We may share your information with trusted service providers who assist us in operating our business, strictly under confidentiality agreements:
        </p>
        <ul className="mb-4 list-disc space-y-1.5 pl-5 text-[15px] leading-[1.8] text-gray">
          <li><strong>GoHighLevel (GHL)</strong> — our CRM and marketing automation platform</li>
          <li><strong>Stripe</strong> — payment processing</li>
          <li><strong>Google Analytics / Google Tag Manager</strong> — website analytics</li>
          <li><strong>Vercel</strong> — website hosting and infrastructure</li>
          <li><strong>WhatsApp / Meta</strong> — customer communication (messages you send us)</li>
        </ul>
        <p className="text-[15px] leading-[1.8] text-gray">
          We may also disclose information where required by law, court order, or regulatory authority. In the event of a business acquisition or merger, your information may be transferred to the successor entity.
        </p>

        <SectionHeading id="data-storage" title="Data Storage & Security" />
        <p className="mb-4 text-[15px] leading-[1.8] text-gray">
          Your data is stored on servers located in Canada and the United States. We implement industry-standard security measures including SSL/TLS encryption, access controls, and regular security reviews to protect your information against unauthorized access, disclosure, or loss.
        </p>
        <p className="text-[15px] leading-[1.8] text-gray">
          We retain your personal information for as long as necessary to fulfill the purposes described in this policy, provide our services, and comply with our legal obligations — typically no longer than 7 years after our relationship ends, as required by Canadian tax and accounting regulations.
        </p>

        <SectionHeading id="cookies" title="Cookies & Tracking Technologies" />
        <p className="mb-3 text-[15px] leading-[1.8] text-gray">We use cookies and similar technologies to:</p>
        <ul className="mb-4 list-disc space-y-1.5 pl-5 text-[15px] leading-[1.8] text-gray">
          <li>Remember your preferences and session data</li>
          <li>Analyze traffic and user behaviour via Google Analytics</li>
          <li>Track marketing campaign performance via Google Tag Manager</li>
          <li>Enable embedded third-party tools (GHL forms, YouTube videos)</li>
        </ul>
        <p className="text-[15px] leading-[1.8] text-gray">
          You may disable cookies through your browser settings; however, some features of our website may not function correctly without them. We do not use cookies to build advertising profiles or sell data to advertisers.
        </p>

        <SectionHeading id="your-rights" title="Your Rights Under PIPEDA" />
        <p className="mb-3 text-[15px] leading-[1.8] text-gray">Under Canadian privacy law, you have the right to:</p>
        <ul className="mb-4 list-disc space-y-1.5 pl-5 text-[15px] leading-[1.8] text-gray">
          <li><strong>Access</strong> — request a copy of the personal information we hold about you</li>
          <li><strong>Correction</strong> — request correction of inaccurate or incomplete information</li>
          <li><strong>Withdrawal of consent</strong> — withdraw consent to our use of your information (subject to legal or contractual obligations)</li>
          <li><strong>Deletion</strong> — request deletion of your personal information where we are not legally required to retain it</li>
          <li><strong>Complaint</strong> — lodge a complaint with the Office of the Privacy Commissioner of Canada (OPC) if you believe we have violated your privacy rights</li>
        </ul>
        <p className="text-[15px] leading-[1.8] text-gray">
          To exercise any of these rights, please contact us at{" "}
          <a href="mailto:support@realwebstudio.com" className="font-semibold text-orange hover:underline">
            support@realwebstudio.com
          </a>. We will respond within 30 days.
        </p>

        <SectionHeading id="third-party" title="Third-Party Links" />
        <p className="text-[15px] leading-[1.8] text-gray">
          Our website may contain links to third-party websites (e.g., Google Maps, YouTube, social media platforms). We are not responsible for the privacy practices of those sites. We encourage you to review the privacy policies of any third-party sites you visit.
        </p>

        <SectionHeading id="childrens-privacy" title="Children's Privacy" />
        <p className="text-[15px] leading-[1.8] text-gray">
          Our services are intended for adults operating businesses. We do not knowingly collect personal information from individuals under the age of 18. If you believe we have inadvertently collected information from a minor, please contact us immediately and we will delete it.
        </p>

        <SectionHeading id="changes" title="Changes to This Policy" />
        <p className="text-[15px] leading-[1.8] text-gray">
          We may update this Privacy Policy from time to time. We will notify active clients of material changes via email. The "Last Updated" date at the top of this page reflects the most recent revision. Continued use of our services after any changes constitutes acceptance of the updated policy.
        </p>

        <SectionHeading id="contact" title="Contact Us" />
        <p className="mb-4 text-[15px] leading-[1.8] text-gray">
          If you have questions, concerns, or requests regarding this Privacy Policy or our handling of your personal information, please contact our Privacy Officer:
        </p>
        <div className="rounded-[14px] border border-site-border bg-gray-light p-5 text-[15px] leading-[1.8] text-gray">
          <p><strong className="text-site-text">RealWebStudio</strong></p>
          <p>2311 90b St SW, Suite 201, Edmonton, AB T6X 1V8</p>
          <p>
            Email:{" "}
            <a href="mailto:support@realwebstudio.com" className="font-semibold text-orange hover:underline">
              support@realwebstudio.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+15878756567" className="font-semibold text-orange hover:underline">
              +1 587-875-6567
            </a>
          </p>
        </div>
        <p className="mt-4 text-[14px] text-gray">
          If you are unsatisfied with our response, you may contact the{" "}
          <a
            href="https://www.priv.gc.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-orange hover:underline"
          >
            Office of the Privacy Commissioner of Canada
          </a>.
        </p>

      </LegalLayout>
    </>
  );
}
