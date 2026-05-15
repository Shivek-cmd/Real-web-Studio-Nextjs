import RevealOnScroll from "@/components/ui/RevealOnScroll";

const STATS = [
  { value: "500+", label: "Clients Served" },
  { value: "4.9★", label: "Average Google Rating" },
  { value: "10+",  label: "Industries Covered" },
  { value: "72h",  label: "Average Launch Time" },
];

export default function CaseStudiesHero() {
  return (
    <section className="bg-dark px-[5%] py-[80px]">
      <div className="mx-auto max-w-[1080px]">

        <RevealOnScroll className="mb-14 text-center">
          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
            Case Studies
          </p>
          <h1 className="mb-4 text-[36px] font-extrabold leading-[1.15] tracking-[-0.5px] text-white sm:text-[48px]">
            Real Results for{" "}
            <span className="text-orange">Real Businesses</span>
          </h1>
          <p className="mx-auto max-w-[560px] text-[16px] leading-[1.7] text-white/55">
            From local tradespeople to professional service firms — see how we've helped Canadian small businesses win online.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((s, i) => (
            <RevealOnScroll key={s.label} delay={i * 0.08}>
              <div className="rounded-[14px] border border-white/10 bg-white/5 p-5 text-center">
                <p className="text-[28px] font-extrabold text-white sm:text-[32px]">{s.value}</p>
                <p className="mt-1 text-[12px] font-medium text-white/45">{s.label}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
