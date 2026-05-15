import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function ContactForm() {
  return (
    <section className="bg-gray-light px-[5%] py-[80px]">
      <div className="mx-auto max-w-[1080px]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">

          <RevealOnScroll className="lg:sticky lg:top-[96px]">
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
              Send a Message
            </p>
            <h2 className="mb-4 text-[30px] font-extrabold leading-[1.2] tracking-[-0.3px] text-site-text sm:text-[36px]">
              Tell Us About Your Business
            </h2>
            <p className="mb-6 text-[15px] leading-[1.8] text-gray">
              Fill out the form and we'll get back to you within 2 hours. No pushy sales calls — just a friendly conversation about how we can help.
            </p>
            <ul className="space-y-3">
              {[
                "Free consultation, no commitment",
                "Transparent pricing from the first reply",
                "We serve all of Canada remotely",
                "Responses within 2 hours on weekdays",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[14px] text-gray">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange text-[11px] font-bold text-white">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-[14px] border border-orange/20 bg-orange-light p-5">
              <p className="mb-1 text-[13px] font-bold text-orange">Prefer a live conversation?</p>
              <p className="mb-3 text-[13px] text-gray">Book a free 15-minute discovery call directly in our calendar.</p>
              <a href="/#how" className="text-[13px] font-bold text-orange underline-offset-2 hover:underline">
                Book a Free Call →
              </a>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.18} y={32}>
            <div className="overflow-hidden rounded-[16px] border border-site-border bg-white shadow-card p-10">
              <iframe
                  src="https://api.leadconnectorhq.com/widget/form/ZgZvuabNtIRtYTaCsSWy"
                 id="inline-ZgZvuabNtIRtYTaCsSWy"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-activation-type="alwaysActivated"
                data-deactivation-type="neverDeactivate"
                data-form-name="Contact Us"
                data-height="504"
                data-layout-iframe-id="contact-form-cDGtShyVjnJmpPW9bWtH"
                data-form-id="cDGtShyVjnJmpPW9bWtH"
                title="Contact RealWebStudio"
                className="min-h-[504px] w-full border-0"
                loading="lazy"
              />
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
