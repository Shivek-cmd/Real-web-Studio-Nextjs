import Link from "next/link";

const CONTACT_LINKS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/15878756567",
    className: "bg-green text-white hover:bg-green/90",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M12.04 2a9.86 9.86 0 0 0-8.55 14.8L2.1 22l5.33-1.4A9.88 9.88 0 1 0 12.04 2Zm0 1.78a8.1 8.1 0 0 1 6.88 12.37 8.09 8.09 0 0 1-10.92 2.8l-.38-.22-3.17.83.85-3.08-.25-.4a8.08 8.08 0 0 1 6.99-12.3Zm-3.4 4.33c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.9 2.4 1.02 2.56.12.17 1.76 2.69 4.27 3.77 2.11.91 2.54.73 3 .68.46-.04 1.48-.6 1.69-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.16-.49-.29-.25-.12-1.48-.73-1.71-.81-.23-.09-.4-.13-.57.12-.16.25-.65.81-.79.98-.15.17-.29.19-.54.06-.25-.12-1.07-.39-2.03-1.25-.75-.67-1.26-1.49-1.41-1.74-.15-.25-.02-.39.11-.52.12-.12.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.57-1.37-.78-1.88-.21-.49-.42-.42-.57-.43h-.49Z" />
      </svg>
    ),
  },
  {
    label: "Call",
    href: "tel:+15878756567",
    className: "bg-orange text-white hover:bg-orange-dark",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.61a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6.27 6.27l1.29-1.29a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.61.63A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
];

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-28 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      {CONTACT_LINKS.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={link.label}
          className={`group flex h-12 w-12 items-center justify-center rounded-full shadow-orange transition-all duration-200 hover:-translate-y-1 sm:h-13 sm:w-13 ${link.className}`}
        >
          {link.icon}
          <span className="pointer-events-none absolute right-[60px] hidden whitespace-nowrap rounded-full border border-site-border bg-white px-3 py-1.5 text-[12px] font-bold text-site-text opacity-0 shadow-card transition-all duration-200 group-hover:translate-x-[-2px] group-hover:opacity-100 sm:block">
            {link.label}
          </span>
        </Link>
      ))}
    </div>
  );
}
