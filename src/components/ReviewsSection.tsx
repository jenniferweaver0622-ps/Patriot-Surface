"use client";

import { useMemo } from "react";
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
  const items = useMemo(() => [...REVIEWS, ...REVIEWS], []);

  return (
    <section className="overflow-hidden bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Reviews</h2>
          <p className="mt-4 text-white/70">
            Real feedback from Patriot Surface customers.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden">
          <div className="reviews-track flex w-max gap-6 py-6">
            {items.map((r, idx) => (
              <div
                key={`${r.name}-${idx}`}
                className="review-card w-[320px] shrink-0 rounded-3xl border border-white/10 bg-white/5 p-6 transition-transform duration-500 ease-out"
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
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950 to-transparent" />
        </div>
      </div>

      <style jsx>{`
        .reviews-track {
          animation: marquee 35s linear infinite;
        }

        .reviews-track:hover {
          animation-play-state: paused;
        }

        .review-card {
          transform: scale(0.95);
          opacity: 0.7;
        }

        .review-card:hover {
          transform: scale(1.05);
          opacity: 1;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}