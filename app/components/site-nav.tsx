"use client";

import { useEffect, useRef, useState } from "react";

/*
  The only client component on the page.

  It exists for two things that genuinely need the browser: scroll-spy
  (IntersectionObserver) and closing the mobile disclosure on Escape / outside
  click. The disclosure itself is a native <details>/<summary>, so if this
  bundle never loads or fails, mobile navigation still opens, closes and
  answers the keyboard — the JavaScript only adds the conveniences on top.
*/

type Item = { id: string; label: string };

export default function SiteNav({ items }: { items: readonly Item[] }) {
  const [active, setActive] = useState<string>("");
  const detailsRef = useRef<HTMLDetailsElement>(null);

  // Scroll-spy: watch a thin band across the middle of the viewport and
  // treat the topmost section touching it as the current one.
  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const onScreen = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            onScreen.set(entry.target.id, entry.boundingClientRect.top);
          } else {
            onScreen.delete(entry.target.id);
          }
        }

        let best = "";
        let bestTop = Number.POSITIVE_INFINITY;
        for (const [id, top] of onScreen) {
          if (top < bestTop) {
            bestTop = top;
            best = id;
          }
        }
        setActive(best);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, [items]);

  // Escape closes the mobile menu and hands focus back to the summary.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const details = detailsRef.current;
      if (event.key !== "Escape" || !details?.open) return;
      details.open = false;
      details.querySelector("summary")?.focus();
    };

    const onPointerDown = (event: PointerEvent) => {
      const details = detailsRef.current;
      if (!details?.open) return;
      if (event.target instanceof Node && !details.contains(event.target)) {
        details.open = false;
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  const closeMenu = () => {
    const details = detailsRef.current;
    if (details) details.open = false;
  };

  const linkClass = (id: string) =>
    active === id ? "text-yellow" : "text-muted hover:text-yellow";

  return (
    <>
      {/* Desktop */}
      <ul className="hidden gap-6 font-mono text-sm md:flex">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
              className={`relative inline-block py-1 transition-colors ${linkClass(item.id)}`}
            >
              <span className="text-comment" aria-hidden>
                #
              </span>
              {item.label}
              <span
                aria-hidden
                className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-yellow transition-transform duration-200 ${
                  active === item.id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile — native disclosure, works with or without this bundle */}
      <details ref={detailsRef} className="relative md:hidden">
        <summary className="flex cursor-pointer list-none items-center gap-2 rounded-md border border-line px-3 py-1.5 font-mono text-xs font-semibold text-fg marker:content-none">
          <span aria-hidden className="flex flex-col gap-[3px]">
            <span className="block h-px w-3.5 bg-yellow" />
            <span className="block h-px w-3.5 bg-yellow" />
            <span className="block h-px w-3.5 bg-red" />
          </span>
          menu
        </summary>

        <ul className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-52 rounded-lg border border-line bg-panel p-2 font-mono text-sm shadow-2xl shadow-black/60">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={closeMenu}
                aria-current={active === item.id ? "location" : undefined}
                className={`block rounded-md px-3 py-2 transition-colors hover:bg-panel-2 ${linkClass(item.id)}`}
              >
                <span className="text-comment" aria-hidden>
                  #
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </>
  );
}
