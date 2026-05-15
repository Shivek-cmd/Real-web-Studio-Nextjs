import type { Metadata } from "next";
import { seoConfig } from "@/lib/seo.config";
import Link from "next/link";

export const metadata: Metadata = seoConfig.thankYou;

const NEXT_STEPS = [
  {
    icon: "📧",
    title: "Check Your Email",
    body: "We've sent a confirmation to your inbox. Check your spam folder if you don't see it within a few minutes.",
  },
  {
    icon: "📞",
    title: "We'll Reach Out Within 2 Hours",
    body: "A real person from our team will contact you via email or WhatsApp to kick off your project.",
  },
  {
    icon: "🚀",
    title: "Your Site Goes Live in 72 Hours",
    body: "Once we have your details, we get to work immediately. You'll receive a preview link before we publish.",
  },
];

export default function ThankYouPage() {
  return (
    <main className="flex min-h-[calc(100vh-200px)] items-center bg-white px-[5%] py-[80px]">
      <div className="mx-auto w-full max-w-[680px]">

        {/* Card */}
        <div className="overflow-hidden rounded-[20px] border border-site-border shadow-large">

          {/* Top orange band */}
          <div className="bg-orange px-8 py-8 text-center">
            <h1 className="text-[28px] font-extrabold leading-[1.2] text-white sm:text-[34px]">
              You're All Set!
            </h1>
            <p className="mt-2 text-[15px] text-white/80">
              Thank you for choosing RealWebStudio. Your website journey starts now.
            </p>
          </div>

          {/* Body */}
          <div className="bg-white px-8 py-8">

            {/* Next steps */}
            <p className="mb-6 text-center text-[12px] font-extrabold uppercase tracking-[2px] text-orange">
              What Happens Next
            </p>

            <div className="mb-8 space-y-5">
              {NEXT_STEPS.map((step, i) => (
                <div key={step.title} className="flex items-start gap-4">
                  {/* Number + icon */}
                  <div className="flex shrink-0 flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-light text-[20px]">
                      {step.icon}
                    </div>
                    {i < NEXT_STEPS.length - 1 && (
                      <div className="mt-1 h-6 w-px bg-orange-mid" />
                    )}
                  </div>
                  {/* Text */}
                  <div className="pt-1.5">
                    <p className="text-[15px] font-bold text-site-text">{step.title}</p>
                    <p className="mt-0.5 text-[13.5px] leading-[1.7] text-gray">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="mb-6 border-t border-site-border" />

            {/* Contact shortcut */}
            <div className="mb-6 rounded-[12px] bg-gray-light p-4 text-center">
              <p className="mb-1 text-[13px] font-semibold text-site-text">
                Need to reach us right now?
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-[13px]">
                <a
                  href="https://wa.me/15878756567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-orange hover:underline"
                >
                  💬 WhatsApp Us
                </a>
                <span className="text-site-border">|</span>
                <a href="tel:+15878756567" className="font-bold text-orange hover:underline">
                  📞 +1 587-875-6567
                </a>
                <span className="text-site-border">|</span>
                <a
                  href="mailto:support@realwebstudio.com"
                  className="font-bold text-orange hover:underline"
                >
                  ✉️ Email Us
                </a>
              </div>
            </div>

            {/* Social proof */}
            <p className="mb-5 text-center text-[13px] text-gray">
              Join{" "}
              <strong className="text-site-text">500+ Canadian businesses</strong> who
              trust RealWebStudio with their online presence.
            </p>

            {/* Back to home */}
            <div className="text-center">
              <Link
                href="/"
                className="inline-block rounded-full border border-site-border px-6 py-[10px] text-[13px] font-semibold text-site-text transition-all duration-200 hover:border-orange hover:text-orange"
              >
                ← Back to Homepage
              </Link>
            </div>

          </div>
        </div>

        {/* Stars below card */}
        <p className="mt-6 text-center text-[13px] text-gray">
          <span className="text-orange">★★★★★</span>{" "}
          Rated 4.9 by Canadian small businesses
        </p>

      </div>
    </main>
  );
}
