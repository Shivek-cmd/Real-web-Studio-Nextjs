import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function OurStory() {
  return (
    <section className="bg-gray-light px-[5%] py-[80px]">
      <div className="mx-auto max-w-[1080px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          <RevealOnScroll y={32}>
            <div className="relative h-[360px] overflow-hidden rounded-[18px] shadow-large">
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="RealWebStudio founding story in Edmonton"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
              Our Story
            </p>
            <h2 className="mb-5 text-[30px] font-extrabold leading-[1.2] tracking-[-0.3px] text-site-text sm:text-[36px]">
              We Saw the Gap — and Decided to Fix It
            </h2>
            <div className="space-y-4 text-[15px] leading-[1.8] text-gray">
              <p>
                We started RealWebStudio after watching too many great small businesses fail online — not because their product was bad, but because getting a website was either too expensive, too slow, or too confusing.
              </p>
              <p>
                Agencies wanted $5,000 upfront. Freelancers disappeared after launch. DIY builders like Wix looked amateur. There was nothing built specifically for the Canadian small business owner who just needs a professional site that works.
              </p>
              <p>
                So we built it. Starting at $9.99/month, we handle everything — design, hosting, SSL, updates, and ongoing support. Your site is live in 72 hours, and we're by your side every month after that.
              </p>
              <p>
                Today, we're proud to have helped <strong className="text-site-text">500+ Canadian businesses</strong> across Edmonton, Calgary, Vancouver, Toronto, and beyond get online and start growing.
              </p>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
