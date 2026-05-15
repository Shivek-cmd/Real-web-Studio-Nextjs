"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About Us",      href: "/about"        },
  { label: "Case Studies",  href: "/case-studies" },
  { label: "Pricing",       href: "/pricing"      },
  { label: "Blog",          href: "/blog"         },
  { label: "Contact",       href: "/contact"      },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* ── Sticky Header ─────────────────────────────────── */}
      <header
        className={cn(
          "sticky top-0 z-[200] flex h-[68px] items-center justify-between border-b border-site-border bg-white/[0.97] px-[5%] backdrop-blur-[16px] transition-shadow duration-300",
          scrolled && "shadow-[0_4px_20px_rgba(0,0,0,0.09)]"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center no-underline">
          <Image
            src="/logo.png"
            alt="RealWebStudio"
            width={155}
            height={38}
            priority
            className="h-[160px] w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13.5px] font-medium text-gray transition-colors duration-200 hover:text-orange"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#start"
            className="rounded-full bg-orange px-[22px] py-[9px] text-[13.5px] font-bold text-white shadow-orange transition-all duration-200 hover:-translate-y-px hover:bg-orange-dark"
          >
            Get Started →
          </Link>
        </nav>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="flex items-center justify-center text-site-text lg:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M2 5.5h18M2 11h18M2 16.5h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </header>

      {/* ── Mobile Menu ───────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <div
            className="fixed inset-0 z-[300]"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/55 backdrop-blur-[3px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
            />

            {/* Slide-in Panel */}
            <motion.div
              className="absolute bottom-0 right-0 top-0 flex w-[min(320px,88vw)] flex-col overflow-y-auto bg-white"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
            >
              {/* Panel Header */}
              <div className="flex flex-shrink-0 items-center justify-between border-b border-site-border px-[22px] py-[18px]">
                <Link href="/" onClick={close} className="flex items-center no-underline">
                  <Image
                    src="/logo.png"
                    alt="RealWebStudio"
                    width={130}
                    height={32}
                    className="h-[160px] w-auto"
                  />
                </Link>
                <button
                  onClick={close}
                  aria-label="Close menu"
                  className="flex h-[38px] w-[38px] items-center justify-center rounded-full border-[1.5px] border-site-border text-gray transition-all duration-200 hover:border-orange hover:text-orange"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1.5 1.5l11 11M12.5 1.5l-11 11"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-1 flex-col py-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    className="flex items-center border-b border-site-border px-6 py-[14px] text-[15px] font-semibold text-site-text no-underline transition-colors duration-150 hover:bg-orange-light hover:text-orange"
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  href="/#start"
                  onClick={close}
                  className="mx-6 mt-4 flex items-center justify-center rounded-full bg-orange px-6 py-[14px] text-[15px] font-bold text-white shadow-orange no-underline transition-colors duration-200 hover:bg-orange-dark"
                >
                  Get Started →
                </Link>
              </nav>

              {/* Panel Footer */}
              <div className="flex-shrink-0 border-t border-site-border px-6 py-5 text-center text-[12px] leading-[1.6] text-gray">
                Website live in{" "}
                <strong className="text-orange">72 hours</strong>
                <br />
                Starting at just{" "}
                <strong className="text-orange">$9.99/month</strong>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
