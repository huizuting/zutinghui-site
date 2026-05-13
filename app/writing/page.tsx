import type { Metadata } from "next";
import Link from "next/link";
import { fiction } from "@/content/fiction";
import { essays } from "@/content/essays";
import { notes } from "@/content/notes";
import { poems } from "@/content/poems";

export const metadata: Metadata = { title: "Writing" };

const sections = [
  {
    label: "Fiction",
    href: "/fiction",
    pieces: fiction.map((p) => ({ href: `/fiction/${p.slug}`, title: p.title, date: p.date })),
  },
  {
    label: "Essays",
    href: "/essays",
    pieces: essays.map((p) => ({ href: `/essays/${p.slug}`, title: p.title, date: p.date })),
  },
  {
    label: "Notes",
    href: "/notes",
    pieces: notes.map((p) => ({ href: `/notes/${p.slug}`, title: p.title, date: p.date })),
  },
  {
    label: "Poems",
    href: "/poems",
    pieces: poems.map((p) => ({ href: `/poems/${p.slug}`, title: p.title, date: p.date })),
  },
];

export default function WritingPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h1
        className="text-3xl font-normal text-stone-900 mb-16"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Writing
      </h1>

      <div className="space-y-16">
        {sections.map(({ label, href, pieces }) => (
          <section key={label}>
            <div className="flex items-baseline justify-between mb-6">
              <Link
                href={href}
                className="text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors"
              >
                {label}
              </Link>
            </div>

            {pieces.length === 0 ? (
              <p className="text-sm text-stone-400">Nothing here yet.</p>
            ) : (
              <ul className="space-y-5">
                {pieces.map((piece) => (
                  <li key={piece.href} className="flex items-baseline justify-between gap-4">
                    <Link
                      href={piece.href}
                      className="text-stone-800 hover:text-stone-500 transition-colors"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {piece.title}
                    </Link>
                    <span className="text-xs text-stone-400 whitespace-nowrap shrink-0">
                      {piece.date}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
