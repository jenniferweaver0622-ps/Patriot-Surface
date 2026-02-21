import Link from "next/link";
import { SITE } from "@/lib/site";

export default function ContactPage() {
  return (
    <div className="bg-slate-950">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Contact Patriot Surface
        </h1>

        <p className="mt-4 text-white/70">
          Choose the fastest way to reach us — Call/Text, email or Facebook message.
        </p>

        <div className="mt-10 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">

          {/* Phone */}
          <div>
            <div className="text-sm text-white/60">Phone</div>
            <Link
              href={SITE.phoneHref}
              className="text-lg font-semibold text-white hover:underline"
            >
              {SITE.phoneDisplay}
            </Link>
          </div>

          {/* Email + Facebook */}
          <div>
            <div className="text-sm text-white/60">Message Us</div>

            <div className="mt-3 flex flex-wrap gap-3">
              <Link
                href={`mailto:${SITE.email}?subject=Estimate Request`}
                className="rounded-2xl bg-sky-500 px-6 py-3 text-base font-semibold text-white hover:bg-sky-400"
              >
                Email Us
              </Link>

              <Link
                href={SITE.facebookMessengerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white hover:bg-white/10"
              >
                Facebook Message
              </Link>
            </div>

            <p className="mt-3 text-sm text-white/60">
              Email: {SITE.email}
            </p>
          </div>

          <div className="pt-4">
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