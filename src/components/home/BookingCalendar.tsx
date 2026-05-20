export default function BookingCalendar() {
  return (
    <section className="bg-white px-[5%] py-[80px]">
      <div className="mx-auto max-w-[1080px]">

        <div className="mb-10 text-center">
          <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[2px] text-orange">
            Book a Call
          </p>
          <h2 className="text-[32px] font-extrabold leading-[1.2] tracking-[-0.5px] text-site-text sm:text-[38px]">
            Prefer to Talk First?
          </h2>
          <p className="mx-auto mt-4 max-w-[480px] text-[16px] leading-[1.7] text-gray">
            Book a free 15-minute discovery call. We&apos;ll answer your questions and figure out the best plan for your business.
          </p>
        </div>

        <div className="overflow-hidden rounded-[14px] border border-site-border shadow-card">
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/QZbyg6axqsgkINmlfT6a"
            style={{ width: "100%", border: "none", overflow: "hidden" }}
            scrolling="no"
            id="QZbyg6axqsgkINmlfT6a_1779297112087"
            title="Book a Discovery Call — RealWebStudio"
            className="h-[700px] min-h-[700px] w-full"
          />
        </div>

      </div>
    </section>
  );
}
