import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-site-border bg-white/[0.97] px-[5%] pb-[26px] pt-[50px] text-gray">

      {/* ── Main Grid ─────────────────────────────────────────
          Same px-[5%] as Header — left edges always align.
          5 columns: Brand | Plans | Growth | Company | Contact
      ──────────────────────────────────────────────────────── */}
      <div className="mb-9 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1.4fr_1fr_1.2fr] lg:gap-8 xl:gap-12">

        {/* ── Brand ─────────────────────────────────────────── */}
        <div>
          <Image
            src="/logo.png"
            alt="RealWebStudio"
            width={140}
            height={40}
            className="h-[180px] w-auto"
          />
          <p className="mt-3 max-w-[240px] text-[13px] leading-[1.7]">
            Done-for-you websites for Canadian small businesses. Built,
            hosted & maintained starting at $9.99/month.
          </p>
          {/* Social proof pill */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-site-border bg-gray-light px-3 py-1.5 text-[12px] font-semibold text-site-text">
            <span className="text-orange">★★★★★</span> 4.9 · 500+ websites delivered
          </div>
        </div>

        {/* ── Website Plans ─────────────────────────────────── */}
        <div>
          <h5 className="mb-3.5 text-[11px] font-extrabold uppercase tracking-[1.5px] text-gray">
            Website Plans
          </h5>
          {[
            { label: "Starter — $9.99/mo",  href: "/pricing"  },
            { label: "Custom Plan",          href: "/pricing"  },
            { label: "Migrate My Website",   href: "/#switch"  },
            { label: "Portfolio",             href: "/portfolio"   },
            { label: "Get Started",          href: "/#start"   },
          ].map((l) => (
            <Link key={l.label} href={l.href}
              className="mb-[9px] block text-[13.5px] text-gray no-underline transition-colors duration-200 hover:text-orange">
              {l.label}
            </Link>
          ))}
        </div>

        {/* ── Growth Services ───────────────────────────────── */}
        <div>
          <h5 className="mb-3.5 text-[11px] font-extrabold uppercase tracking-[1.5px] text-gray">
            Growth Services
          </h5>
          {[
            { label: "Social Media Marketing",   href: "/#svc-social"  },
            { label: "SEO",                      href: "/#svc-seo"     },
            { label: "Lead Generation",          href: "/#svc-leads"   },
            { label: "AI Implementation",        href: "/#svc-ai"      },
            { label: "Google Review Automation", href: "/#svc-reviews" },
            { label: "Live Chat & WhatsApp",     href: "/#svc-chat"    },
          ].map((l) => (
            <Link key={l.label} href={l.href}
              className="mb-[9px] block text-[13.5px] text-gray no-underline transition-colors duration-200 hover:text-orange">
              {l.label}
            </Link>
          ))}
        </div>

        {/* ── Company ───────────────────────────────────────── */}
        <div>
          <h5 className="mb-3.5 text-[11px] font-extrabold uppercase tracking-[1.5px] text-gray">
            Company
          </h5>
          {[
            { label: "About Us",      href: "/about"      },
            { label: "Portfolio",      href: "/portfolio"    },
            { label: "Reviews",       href: "/#reviews"   },
            { label: "FAQ",           href: "/#faq"       },
            { label: "Get Started",   href: "/#start"     },
          ].map((l) => (
            <Link key={l.label} href={l.href}
              className="mb-[9px] block text-[13.5px] text-gray no-underline transition-colors duration-200 hover:text-orange">
              {l.label}
            </Link>
          ))}
        </div>

        {/* ── Contact ───────────────────────────────────────── */}
        <div>
          <h5 className="mb-3.5 text-[11px] font-extrabold uppercase tracking-[1.5px] text-gray">
            Contact
          </h5>
          <Link href="https://wa.me/15878756567" target="_blank" rel="noopener noreferrer"
            className="mb-[9px] block text-[13.5px] text-gray no-underline transition-colors duration-200 hover:text-orange">
            WhatsApp: +1 587-875-6567
          </Link>
          <Link href="tel:+15878756567"
            className="mb-[9px] block text-[13.5px] text-gray no-underline transition-colors duration-200 hover:text-orange">
            +1 587-875-6567
          </Link>
          <Link href="mailto:support@realwebstudio.com"
            className="mb-[9px] block text-[13.5px] text-gray no-underline transition-colors duration-200 hover:text-orange">
            support@realwebstudio.com
          </Link>
          <Link href="https://maps.google.com/?q=2311+90b+St+SW,+Edmonton,+AB+T6X+1V8"
            target="_blank" rel="noopener noreferrer"
            className="mb-[9px] block text-[13.5px] text-gray no-underline transition-colors duration-200 hover:text-orange">
            2311 90b St SW, Suite 201<br />
            Edmonton, AB T6X 1V8
          </Link>
        </div>

      </div>

      {/* ── Bottom Bar ────────────────────────────────────────── */}
      <div className="flex flex-col items-center justify-between gap-2.5 border-t border-site-border pt-[26px] text-[12px] sm:flex-row">
        <span>© 2025 RealWebStudio.com — All rights reserved.</span>
        <span>
          <Link href="/privacy-policy"
            className="ml-[18px] text-gray no-underline transition-colors duration-200 hover:text-orange">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service"
            className="ml-[18px] text-gray no-underline transition-colors duration-200 hover:text-orange">
            Terms of Service
          </Link>
        </span>
      </div>

    </footer>
  );
}
