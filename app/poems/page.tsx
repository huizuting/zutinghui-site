import type { Metadata } from "next";
import Link from "next/link";
import { poems } from "@/content/poems";

export const metadata: Metadata = { title: "Poems" };

export default function PoemsPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h1
        className="text-3xl font-normal text-stone-900 mb-16"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Poems
      </h1>

      {poems.length === 0 ? (
        <p className="text-sm text-stone-400">Nothing here yet.</p>
      ) : (
        <ul className="space-y-5">
          {poems.map((poem) => (
            <li key={poem.slug} className="flex items-baseline justify-between gap-4">
              <Link
                href={`/poems/${poem.slug}`}
                className="text-stone-800 hover:text-stone-500 transition-colors"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {poem.title}
              </Link>
              <span className="text-xs text-stone-400 whitespace-nowrap shrink-0">
                {poem.date}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
