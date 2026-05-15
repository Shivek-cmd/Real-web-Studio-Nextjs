import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const CONTACT_CARDS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
      </svg>
    ),
    label: "Phone",
    value: "+1 587-875-6567",
    href: "tel:+15878756567",
    cta: "Call Now",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+1 587-875-6567",
    href: "https://wa.me/15878756567",
    cta: "Message Us",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "support@realwebstudio.com",
    href: "mailto:support@realwebstudio.com",
    cta: "Send Email",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Office",
    value: "2311 90b St SW, Suite 201\nEdmonton, AB T6X 1V8",
    href: "https://maps.google.com/?q=2311+90b+St+SW,+Edmonton,+AB+T6X+1V8",
    cta: "Get Directions",
  },
];

export default function ContactHero() {
  return (
    <section className="bg-white px-[5%] py-[64px]">
      <div className="mx-auto max-w-[1080px]">

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_CARDS.map((c, i) => (
            <RevealOnScroll key={c.label} delay={i * 0.1}>
              <Link
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col rounded-[14px] border border-site-border bg-gray-light p-6 transition-all duration-200 hover:border-orange hover:shadow-card"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[12px] bg-orange-light text-orange transition-colors duration-200 group-hover:bg-orange group-hover:text-white">
                  {c.icon}
                </div>
                <p className="mb-1 text-[11px] font-extrabold uppercase tracking-[1.5px] text-gray">
                  {c.label}
                </p>
                <p className="mb-3 flex-1 whitespace-pre-line text-[14px] font-semibold leading-[1.6] text-site-text">
                  {c.value}
                </p>
                <span className="text-[13px] font-bold text-orange group-hover:underline">
                  {c.cta} →
                </span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.4}>
          <div className="mt-6 rounded-[14px] border border-site-border bg-gray-light p-5 text-center text-[14px] text-gray">
            <span className="font-semibold text-site-text">Business Hours: </span>
            Monday – Friday, 9:00 AM – 6:00 PM MST · Weekend responses within 4 hours
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
