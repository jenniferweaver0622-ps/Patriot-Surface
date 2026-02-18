"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { NAV, SITE } from "@/lib/site";

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);

  const services = NAV.find((n) => n.label === "Services");

  // Close dropdowns on outside click + Esc
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }

      if (
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target as Node)
      ) {
        setMobileOpen(false);
      }
    }

    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 md:py-4 lg:py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={SITE.logoUrl}
            alt={`${SITE.name} logo`}
            width={260}
            height={80}
            className="h-24 w-auto sm:h-14 md:h-16 lg:h-20"
            priority
            unoptimized
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden flex-1 items-center justify-center gap-2 md:flex">
          {NAV.map((item) => {
            if (item.label !== "Services") {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-2 text-sm sm:text-base md:text-lg text-white/90 hover:bg-white/10"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.label} className="relative" ref={servicesRef}>
                <button
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  className="rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                >
                  Services ▾
                </button>

                {servicesOpen && services?.children && (
                  <div className="absolute left-0 mt-2 w-72 rounded-2xl border border-white/10 bg-slate-950 p-2 shadow-2xl">
                    {services.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                        onClick={() => setServicesOpen(false)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Phone + CTA (Desktop) */}
        <div className="ml-auto hidden items-center gap-3 md:flex">
          <div className="text-right">
            <div className="text-sm sm:text-base md:text-lg font-semibold text-white">
              {SITE.phoneDisplay}
            </div>
            <div className="text-xs text-white/60">Text us today!</div>
          </div>

          <Link
            href="/contact"
            className="rounded-2xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-400"
          >
            Talk With Us Now
          </Link>
        </div>

        {/* Hamburger Wrapper */}
        <div className="relative" ref={hamburgerRef}>
          <button
            type="button"
            onClick={() => {
              setMobileOpen((v) => !v);
              setServicesOpen(false);
            }}
            className="rounded-xl border border-white/20 px-3 py-2 text-white hover:bg-white/10"
          >
            ☰
          </button>

          {/* Right-Aligned Dropdown Panel */}
          {mobileOpen && (
            <div className="absolute right-0 mt-3 w-72 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 p-2 shadow-2xl">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mt-2 block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    <span className="opacity-70">→</span>
                  </div>
                </Link>
              ))}

              <Link
                href={SITE.phoneHref}
                className="mt-2 block rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white hover:bg-sky-400"
                onClick={() => setMobileOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span>Call/Text {SITE.phoneDisplay}</span>
                  <span>→</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
