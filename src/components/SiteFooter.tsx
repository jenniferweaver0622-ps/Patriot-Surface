import Link from "next/link";
import { SITE } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-10 text-sm text-white/70">
        <div>Copyright © {SITE.name} | All Rights Reserved</div>
        <div>{SITE.cityLine}</div>
        <Link href="/contact" className="hover:text-white">
          Contact
        </Link>
      </div>
    </footer>
  );
}
