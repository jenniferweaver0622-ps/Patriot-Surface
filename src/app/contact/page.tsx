import Link from "next/link";
import { SITE } from "@/lib/site";

export default function ContactPage() {
  return (
    <div className="bg-slate-950">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Contact</h1>
        <p className="mt-4 text-white/70">
          Tell us about your project and we’ll get back to you.
        </p>

        <div className="mt-10 space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-white">
            <div className="text-sm text-white/60">Phone</div>
            <Link className="text-lg font-semibold hover:underline" href={SITE.phoneHref}>
              {SITE.phoneDisplay}
            </Link>
          </div>

          {SITE.email && (
            <div className="text-white">
              <div className="text-sm text-white/60">Email</div>
              <Link className="text-lg font-semibold hover:underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </Link>
            </div>
          )}

          <div className="pt-2">
            <Link
              href="/services"
              className="inline-flex rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white hover:bg-white/10"
            >
              View Services →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}