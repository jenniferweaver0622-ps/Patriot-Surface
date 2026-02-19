import Link from "next/link";
import { SERVICES } from "@/lib/site";

export default function ServicesIndex() {
  const entries = Object.entries(SERVICES);

  return (
    <div className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-sm text-white/60">Services</p>
        <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          What We Do
        </h1>
        <p className="mt-4 max-w-2xl text-white/70">
          Explore our services and request a quote when you’re ready.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map(([slug, s]) => (
            <Link
              key={slug}
              href={`/services/${slug}`}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-xl hover:shadow-black/30"
            >
              <h2 className="text-lg font-semibold text-white">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {s.subtitle}
              </p>
              <div className="mt-5 text-sm font-semibold text-white/80 group-hover:text-white">
                View service →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
