"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { REVIEWS } from "@/lib/site";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? "text-yellow-300" : "text-white/20"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = useMemo(() => [...REVIEWS, ...REVIEWS], []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let animationFrame = 0;
    let paused = false;
    const speed = 0.6;

    const updateActiveCard = () => {
      const cards = Array.from(
        el.querySelectorAll<HTMLElement>("[data-review-card='true']")
      );

      if (!cards.length) return;

      const containerRect = el.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, idx) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(centerX - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = idx;
        }
      });

      setActiveIndex(closestIndex);
    };

    const tick = () => {
      if (!paused) {
        el.scrollLeft += speed;

        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }

        updateActiveCard();
      }

      animationFrame = requestAnimationFrame(tick);
    };

    el.scrollLeft = 0;
    updateActiveCard();
    animationFrame = requestAnimationFrame(tick);

    const handleMouseEnter = () => {
      paused = true;
    };

    const handleMouseLeave = () => {
      paused = false;
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [items]);

  return (
    <section className="overflow-hidden bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Reviews</h2>
          <p className="mt-4 text-white/70">
            Real feedback from Patriot Surface customers.
          </p>
        </div>

        <div
          ref={containerRef}
          className="mt-12 flex gap-6 overflow-x-hidden py-6"
        >
          {items.map((r, idx) => {
            const isActive = idx === activeIndex;

            return (
              <div
                key={`${r.name}-${idx}`}
                data-review-card="true"
                className={[
                  "w-[320px] shrink-0 rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-500 ease-out",
                  isActive
                    ? "scale-110 bg-white/10 opacity-100 shadow-2xl shadow-black/30"
                    : "scale-95 opacity-60",
                ].join(" ")}
              >
                <Stars rating={r.rating} />

                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  “{r.text}”
                </p>

                <div className="mt-6">
                  <div className="font-semibold text-white">{r.name}</div>
                  {r.location ? (
                    <div className="text-xs text-white/60">{r.location}</div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}