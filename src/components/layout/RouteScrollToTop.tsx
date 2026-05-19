"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RouteScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) {
      return;
    }

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
  }, [pathname]);

  return null;
}
