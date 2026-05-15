import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white px-[5%] py-[80px] lg:py-[100px]">
      <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-orange-light opacity-60 blur-[100px]" />

      <div className="relative mx-auto max-w-[1080px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          <RevealOnScroll>
            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
              About Us
            </p>
            <h1 className="mb-5 text-[38px] font-extrabold leading-[1.15] tracking-[-0.5px] text-site-text sm:text-[46px]">
              Built for Canadian Small Businesses,{" "}
              <span className="text-orange">By Canadians</span>
            </h1>
            <p className="mb-8 max-w-[480px] text-[17px] leading-[1.7] text-gray">
              RealWebStudio was founded in Edmonton, Alberta with one mission: give every Canadian small business a professional website they can actually afford — and actually rely on.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-full bg-orange px-7 py-[13px] text-[14px] font-bold text-white shadow-orange transition-all duration-200 hover:-translate-y-px hover:bg-orange-dark">
                Work With Us →
              </Link>
              <Link href="/#portfolio" className="rounded-full border border-site-border px-7 py-[13px] text-[14px] font-semibold text-site-text transition-all duration-200 hover:border-orange hover:text-orange">
                View Our Work
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.18} y={32}>
            <div className="relative h-[380px] overflow-hidden rounded-[18px] shadow-large lg:h-[440px]">
              <Image
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="RealWebStudio team working on Canadian small business websites"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-full bg-orange px-4 py-1.5 text-[12px] font-bold text-white shadow-orange">
                📍 Edmonton, Alberta · Canada
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
