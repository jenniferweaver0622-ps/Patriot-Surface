"use client";

import { useEffect, useMemo, useState } from "react";
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
  const items = useMemo(() => REVIEWS, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (items.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length, isPaused]);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const getVisibleReviews = () => {
    const prevIndex = (activeIndex - 1 + items.length) % items.length;
    const nextIndex = (activeIndex + 1) % items.length;

    return [
      { ...items[prevIndex], position: "left", key: `left-${prevIndex}` },
      { ...items[activeIndex], position: "center", key: `center-${activeIndex}` },
      { ...items[nextIndex], position: "right", key: `right-${nextIndex}` },
    ];
  };

  const visibleReviews = getVisibleReviews();

  return (
    <section
      className="overflow-hidden bg-slate-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Reviews</h2>
          <p className="mt-4 text-white/70">
            Real feedback from Patriot Surface customers.
          </p>
        </div>

        <div className="mt-12 flex items-center gap-4">
          {/* Left arrow */}
          <button
            type="button"
            onClick={goPrev}
            className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:bg-white/10 md:flex"
            aria-label="Previous review"
          >
            ←
          </button>

          {/* Reviews */}
          <div className="grid flex-1 gap-6 md:grid-cols-3">
            {visibleReviews.map((review) => {
              const isCenter = review.position === "center";

              return (
                <div
                  key={review.key}
                  className={[
                    "rounded-3xl border border-white/10 p-6 transition-all duration-700 ease-in-out",
                    isCenter
                      ? "scale-105 bg-white/10 opacity-100 shadow-2xl shadow-black/30"
                      : "scale-95 bg-white/5 opacity-60",
                  ].join(" ")}
                >
                  <Stars rating={review.rating} />

                  <p
                    className={[
                      "mt-4 leading-relaxed text-white/80 transition-all duration-700",
                      isCenter ? "text-base" : "text-sm",
                    ].join(" ")}
                  >
                    “{review.text}”
                  </p>

                  <div className="mt-6">
                    <div className="font-semibold text-white">{review.name}</div>
                    {"location" in review && review.location ? (
                      <div className="text-xs text-white/60">{review.location}</div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right arrow */}
          <button
            type="button"
            onClick={goNext}
            className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:bg-white/10 md:flex"
            aria-label="Next review"
          >
            →
          </button>
        </div>

        {/* Mobile arrows */}
        <div className="mt-6 flex justify-center gap-4 md:hidden">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white hover:bg-white/10"
            aria-label="Previous review"
          >
            ←
          </button>

          <button
            type="button"
            onClick={goNext}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white hover:bg-white/10"
            aria-label="Next review"
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={[
                "h-2.5 w-2.5 rounded-full transition-all",
                idx === activeIndex ? "bg-white" : "bg-white/30 hover:bg-white/50",
              ].join(" ")}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}