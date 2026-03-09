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
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Reviews</h2>
          <p className="mt-4 text-white/70">
            Real feedback from Patriot Surface customers.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, idx) => (
            <div
              key={`${r.name}-${idx}`}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <Stars rating={r.rating} />

              <p className="mt-4 text-sm leading-relaxed text-white/80">
                “{r.text}”
              </p>

              <div className="mt-6">
                <div className="font-semibold text-white">{r.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}