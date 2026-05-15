"use client";

import { useEffect, useState } from "react";

type TocItem = {
  id: string;
  title: string;
};

export default function BlogTableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (items.length === 0) return;

    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((heading): heading is HTMLElement => Boolean(heading));

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleEntries[0]?.target.id) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-120px 0px -62% 0px",
        threshold: [0, 1],
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="border-l border-site-border">
      {items.map((item) => {
        const isActive = activeId === item.id;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`block border-l-2 py-2 pl-4 text-[13px] font-bold leading-snug transition-colors duration-200 ${
              isActive
                ? "border-orange text-orange"
                : "border-transparent text-gray hover:border-orange hover:text-orange"
            }`}
          >
            {item.title}
          </a>
        );
      })}
    </nav>
  );
}
