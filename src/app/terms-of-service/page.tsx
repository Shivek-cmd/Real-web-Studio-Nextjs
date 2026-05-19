import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo.config";
import PageHero from "@/components/ui/PageHero";
import LegalLayout from "@/components/legal/LegalLayout";
import JsonLd from "@/components/seo/JsonLd";
import { webPageSchema } from "@/lib/schema";

export const metadata: Metadata = seoConfig.termsOfService;

const SECTIONS = [
  { id: "agreement", title: "Agreement to Terms" },
  { id: "services", title: "Services Provided" },
  { id: "payment", title: "Payment Terms" },
  { id: "cancellation", title: "Cancellation Policy" },
  { id: "client-responsibilities", title: "Client Responsibilities" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "acceptable-use", title: "Acceptable Use" },
  { id: "warranties", title: "Warranties & Disclaimers" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "governing-law", title: "Governing Law" },
  { id: "changes", title: "Changes to Terms" },
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

export default function TermsOfServicePage() {
  return (
    <>
      <JsonLd
        id="terms-of-service-schema"
        data={webPageSchema({
          name: "Terms of Service",
          description:
            "RealWebStudio service terms, payment policies, client responsibilities, and cancellation rules.",
          path: "/terms-of-service",
        })}
      />
      <PageHero
        label="Legal"
        title="Terms of Service"
        subtitle="Please read these terms carefully. By using RealWebStudio's services, you agree to be bound by these terms and conditions."
        image="https://images.pexels.com/photos/6077085/pexels-photo-6077085.jpeg?auto=compress&cs=tinysrgb&w=1400"
        imageAlt="Professional legal and business agreement"
        imagePosition="50% 45%"
      />

      <LegalLayout title="Terms of Service" lastUpdated="May 15, 2025" sections={SECTIONS}>

        <SectionHeading id="agreement" title="Agreement to Terms" />
        <p className="mb-4 text-[15px] leading-[1.8] text-gray">
          These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client," "you," or "your") and RealWebStudio ("Company," "we," "our," or "us"), a business registered in Alberta, Canada.
        </p>
        <p className="text-[15px] leading-[1.8] text-gray">
          By signing up for, accessing, or using any RealWebStudio service — including website design, hosting, maintenance, social media management, SEO, or any other digital marketing service — you agree to be bound by these Terms in their entirety. If you do not agree, please do not use our services.
        </p>

        <SectionHeading id="services" title="Services Provided" />
        <p className="mb-3 text-[15px] leading-[1.8] text-gray">
          RealWebStudio provides done-for-you digital services for small businesses, which may include:
        </p>
        <ul className="mb-4 list-disc space-y-1.5 pl-5 text-[15px] leading-[1.8] text-gray">
          <li>Custom website design and development</li>
          <li>Website hosting, SSL certificates, and domain connection</li>
          <li>Monthly website maintenance and content updates</li>
          <li>Local SEO optimization</li>
          <li>Social media marketing and content creation</li>
          <li>Lead generation funnels and landing pages</li>
          <li>AI chatbot and automation implementation</li>
          <li>Google Review automation</li>
          <li>Live chat and WhatsApp integration</li>
        </ul>
        <p className="text-[15px] leading-[1.8] text-gray">
          The specific services included in your plan are defined at the time of signup. RealWebStudio reserves the right to modify, add, or remove features from any plan with 30 days' written notice to active clients.
        </p>

        <SectionHeading id="payment" title="Payment Terms" />
        <p className="mb-3 text-[15px] leading-[1.8] text-gray">
          By subscribing to a RealWebStudio plan, you authorize us to charge your payment method on a recurring monthly or annual basis (depending on your selected billing cycle).
        </p>
        <ul className="mb-4 list-disc space-y-1.5 pl-5 text-[15px] leading-[1.8] text-gray">
          <li><strong>Billing date:</strong> Subscription fees are billed on the same date each month (or year) from your signup date.</li>
          <li><strong>Failed payments:</strong> If a payment fails, we will retry up to 3 times over 7 days. If payment remains unsuccessful, services may be suspended until the outstanding balance is resolved.</li>
          <li><strong>Taxes:</strong> Prices are listed in Canadian Dollars (CAD) and are exclusive of applicable taxes (e.g., GST/HST). Applicable taxes will be added at checkout based on your province of residence.</li>
          <li><strong>No refunds for partial months:</strong> Monthly subscription fees are non-refundable for partial billing periods. Annual plan refunds may be issued on a pro-rated basis at our discretion within the first 30 days.</li>
          <li><strong>Price changes:</strong> We will provide 30 days' written notice before changing subscription pricing. Continued use after the effective date constitutes acceptance.</li>
        </ul>

        <SectionHeading id="cancellation" title="Cancellation Policy" />
        <p className="mb-4 text-[15px] leading-[1.8] text-gray">
          You may cancel your RealWebStudio subscription at any time, without penalty. There are no cancellation fees or long-term contracts.
        </p>
        <ul className="mb-4 list-disc space-y-1.5 pl-5 text-[15px] leading-[1.8] text-gray">
          <li>To cancel, contact us via email at <a href="mailto:support@realwebstudio.com" className="font-semibold text-orange hover:underline">support@realwebstudio.com</a> or through your client portal.</li>
          <li>Cancellation takes effect at the end of the current billing period. You will retain access to your website and services until that date.</li>
          <li>Upon cancellation, we will provide you with an export of your website files and content within 14 business days upon request.</li>
          <li>After cancellation, your website will be taken offline. We are not responsible for any business impact resulting from service discontinuation.</li>
        </ul>
        <p className="text-[15px] leading-[1.8] text-gray">
          RealWebStudio reserves the right to cancel or suspend services immediately for violation of these Terms, non-payment, or conduct deemed harmful to the Company or other clients.
        </p>

        <SectionHeading id="client-responsibilities" title="Client Responsibilities" />
        <p className="mb-3 text-[15px] leading-[1.8] text-gray">To ensure we can deliver quality services, clients agree to:</p>
        <ul className="list-disc space-y-1.5 pl-5 text-[15px] leading-[1.8] text-gray">
          <li>Provide accurate business information, branding materials, and content required for website development in a timely manner.</li>
          <li>Review and approve website designs and content within 7 business days of receiving a preview link. Delays caused by the client may impact launch timelines.</li>
          <li>Maintain accurate billing information and ensure payment methods remain valid.</li>
          <li>Not use our services for any illegal, harmful, or deceptive purposes.</li>
          <li>Not attempt to copy, resell, or reverse-engineer our processes, templates, or proprietary systems.</li>
          <li>Promptly notify us of any unauthorized access to their account or website.</li>
        </ul>

        <SectionHeading id="intellectual-property" title="Intellectual Property" />
        <p className="mb-4 text-[15px] leading-[1.8] text-gray">
          Upon full payment of all outstanding fees, you own the original content (text, images, logos) you provide to us. RealWebStudio retains ownership of all underlying code, templates, frameworks, and proprietary tools used to build your website.
        </p>
        <p className="mb-4 text-[15px] leading-[1.8] text-gray">
          You are granted a non-exclusive, non-transferable licence to use the completed website while your subscription is active. This licence terminates upon cancellation.
        </p>
        <p className="text-[15px] leading-[1.8] text-gray">
          RealWebStudio reserves the right to display completed projects in our portfolio and marketing materials unless you have requested otherwise in writing prior to launch.
        </p>

        <SectionHeading id="acceptable-use" title="Acceptable Use" />
        <p className="mb-3 text-[15px] leading-[1.8] text-gray">You agree not to use RealWebStudio services to:</p>
        <ul className="list-disc space-y-1.5 pl-5 text-[15px] leading-[1.8] text-gray">
          <li>Publish, promote, or distribute content that is unlawful, defamatory, obscene, fraudulent, or infringes the rights of others</li>
          <li>Engage in spam, phishing, or deceptive marketing practices</li>
          <li>Violate any applicable Canadian federal or provincial laws</li>
          <li>Interfere with or disrupt our servers, networks, or services</li>
          <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
        </ul>

        <SectionHeading id="warranties" title="Warranties & Disclaimers" />
        <p className="mb-4 text-[15px] leading-[1.8] text-gray">
          RealWebStudio warrants that our services will be provided in a professional and workmanlike manner consistent with industry standards. We will make reasonable efforts to ensure your website is accessible, secure, and performant.
        </p>
        <p className="text-[15px] leading-[1.8] text-gray">
          However, we do not guarantee specific business outcomes such as search engine rankings, traffic volume, lead counts, or revenue. Digital marketing results vary based on industry, location, competition, and factors outside our control. All services are provided "as is" and "as available" to the fullest extent permitted by law.
        </p>

        <SectionHeading id="liability" title="Limitation of Liability" />
        <p className="mb-4 text-[15px] leading-[1.8] text-gray">
          To the maximum extent permitted by applicable Canadian law, RealWebStudio's total liability to you for any claim arising out of or related to these Terms or our services shall not exceed the total amount paid by you to us in the 3 months preceding the claim.
        </p>
        <p className="text-[15px] leading-[1.8] text-gray">
          RealWebStudio shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, revenue, data, or business opportunities, even if we have been advised of the possibility of such damages.
        </p>

        <SectionHeading id="indemnification" title="Indemnification" />
        <p className="text-[15px] leading-[1.8] text-gray">
          You agree to defend, indemnify, and hold harmless RealWebStudio and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, or expenses (including reasonable legal fees) arising out of or related to: (a) your use of our services; (b) your violation of these Terms; (c) your violation of any law or third-party rights; or (d) any content you provide to us.
        </p>

        <SectionHeading id="governing-law" title="Governing Law & Dispute Resolution" />
        <p className="mb-4 text-[15px] leading-[1.8] text-gray">
          These Terms are governed by and construed in accordance with the laws of the Province of Alberta and the federal laws of Canada applicable therein, without regard to conflict of law principles.
        </p>
        <p className="text-[15px] leading-[1.8] text-gray">
          Any dispute arising under these Terms shall first be addressed through good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to binding arbitration in Edmonton, Alberta in accordance with the Arbitration Act (Alberta), before a single arbitrator. The arbitrator's decision shall be final and binding.
        </p>

        <SectionHeading id="changes" title="Changes to These Terms" />
        <p className="text-[15px] leading-[1.8] text-gray">
          We reserve the right to update these Terms at any time. We will notify active clients of material changes via email at least 14 days before they take effect. The updated Terms will also be posted at this URL with a revised "Last Updated" date. Continued use of our services after the effective date constitutes your acceptance of the revised Terms.
        </p>

        <SectionHeading id="contact" title="Contact Us" />
        <p className="mb-4 text-[15px] leading-[1.8] text-gray">
          Questions about these Terms? We're happy to explain anything in plain language.
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

      </LegalLayout>
    </>
  );
}
