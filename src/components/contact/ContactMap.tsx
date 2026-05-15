import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function ContactMap() {
  return (
    <section className="bg-white px-[5%] py-[80px]">
      <div className="mx-auto max-w-[1080px]">

        <RevealOnScroll className="mb-8 text-center">
          <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[2.5px] text-orange">
            Find Us
          </p>
          <h2 className="text-[28px] font-extrabold text-site-text">
            2311 90b St SW, Suite 201 · Edmonton, AB T6X 1V8
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15} y={32}>
          <div className="overflow-hidden rounded-[16px] border border-site-border shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.123456789!2d-113.5!3d53.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjMxMSA5MGIgU3QgU1csIEVkbW9udG9uLCBBQiBUNlggMVY4!5e0!3m2!1sen!2sca!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RealWebStudio Office Location — Edmonton, AB"
              className="w-full"
            />
          </div>
          <p className="mt-4 text-center text-[13px] text-gray">
            We serve clients across Canada remotely — in-person meetings available in Edmonton by appointment.
          </p>
        </RevealOnScroll>

      </div>
    </section>
  );
}
