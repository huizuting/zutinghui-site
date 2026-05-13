"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

// Writing is active for all sub-section paths
function isWritingActive(pathname: string) {
  return (
    pathname.startsWith("/writing") ||
    pathname.startsWith("/fiction") ||
    pathname.startsWith("/essays") ||
    pathname.startsWith("/notes") ||
    pathname.startsWith("/poems")
  );
}

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-stone-200">
      <div className="max-w-2xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg tracking-tight text-stone-900 hover:text-stone-500 transition-colors"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Zuting Hui
        </Link>
        <nav className="flex gap-x-6">
          {links.map(({ href, label }) => {
            const active =
              label === "Writing"
                ? isWritingActive(pathname)
                : pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm transition-colors ${
                  active
                    ? "text-stone-900 underline underline-offset-4 decoration-stone-400"
                    : "text-stone-500 hover:text-stone-900"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
