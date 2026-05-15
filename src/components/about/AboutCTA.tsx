import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function AboutCTA() {
  return (
    <section className="bg-white px-[5%] py-[80px]">
      <RevealOnScroll className="mx-auto max-w-[680px] text-center">
        <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
          Ready to Work Together?
        </p>
        <h2 className="mb-5 text-[32px] font-extrabold leading-[1.2] tracking-[-0.5px] text-site-text sm:text-[40px]">
          Let's Build Something That Grows Your Business
        </h2>
        <p className="mb-8 text-[16px] leading-[1.7] text-gray">
          Join 500+ Canadian small businesses who've trusted RealWebStudio with their online presence.
          No contracts. No setup fees. Live in 72 hours.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/#start" className="rounded-full bg-orange px-8 py-[14px] text-[15px] font-bold text-white shadow-orange transition-all duration-200 hover:-translate-y-px hover:bg-orange-dark">
            Get My Website →
          </Link>
          <Link href="/contact" className="rounded-full border border-site-border px-8 py-[14px] text-[15px] font-semibold text-site-text transition-all duration-200 hover:border-orange hover:text-orange">
            Contact Us
          </Link>
        </div>
      </RevealOnScroll>
    </section>
  );
}
