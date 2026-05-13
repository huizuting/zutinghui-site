import type { Metadata } from "next";
import Link from "next/link";
import { essays } from "@/content/essays";

export const metadata: Metadata = { title: "Essays" };

export default function EssaysPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h1
        className="text-3xl font-normal text-stone-900 mb-16"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Essays
      </h1>

      {essays.length === 0 ? (
        <p className="text-sm text-stone-400">Nothing here yet.</p>
      ) : (
        <ul className="space-y-12">
          {essays.map((essay) => (
            <li key={essay.slug}>
              <Link href={`/essays/${essay.slug}`} className="group block">
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <h2
                    className="text-xl font-normal text-stone-900 group-hover:text-stone-500 transition-colors"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {essay.title}
                  </h2>
                  <span className="text-xs text-stone-400 whitespace-nowrap shrink-0">
                    {essay.date}
                  </span>
                </div>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {essay.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
