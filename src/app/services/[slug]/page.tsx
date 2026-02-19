import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES[slug];

  if (!service) return notFound();

  return (
    <div className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-3xl">
          <p className="text-sm text-white/60">Services</p>

          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            {service.title}
          </h1>

          <p className="mt-4 text-base text-white/75 sm:text-lg">
            {service.subtitle}
          </p>

          <ul className="mt-8 space-y-3">
            {service.bullets.map((bullet) => (
              <li
                key={bullet}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/85"
              >
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={service.ctaHref}
              className="rounded-2xl bg-sky-500 px-6 py-3 text-base font-semibold text-white hover:bg-sky-400"
            >
              {service.ctaText}
            </Link>

            <Link
              href="/contact"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white hover:bg-white/10"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
