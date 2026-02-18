import Link from "next/link";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-24 text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Revitalize Your Outdoor Living Spaces
          </h1>

          <p className="mt-6 text-base text-white/80 sm:text-lg md:text-xl">
            Custom decks, patios, and outdoor construction in Pottsboro and
            Sherman, TX.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-2xl bg-sky-500 px-6 py-3 text-base font-semibold text-white hover:bg-sky-400"
            >
              Get a Free Estimate
            </Link>

            <Link
              href={SITE.phoneHref}
              className="rounded-2xl border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10"
            >
              Call {SITE.phoneDisplay}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Our Services
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Decks & Patios",
              "Tree Services",
              "Landscape Design",
              "Interior Remodeling",
              "Storm Damage Repair",
              "Haul Offs & Dump Trailer Rental",
            ].map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10"
              >
                <h3 className="text-lg font-semibold text-white">
                  {service}
                </h3>

                <p className="mt-3 text-sm text-white/70">
                  Professional, reliable service tailored to your property.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Callout Section */}
      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Veteran-Owned & Operated
          </h2>

          <p className="mt-6 text-white/80">
            Patriot Surface delivers integrity, precision, and craftsmanship
            you can trust.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="rounded-2xl bg-sky-500 px-6 py-3 text-base font-semibold text-white hover:bg-sky-400"
            >
              Talk With Us Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
