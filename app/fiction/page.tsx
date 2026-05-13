import type { Metadata } from "next";
import Link from "next/link";
import { fiction } from "@/content/fiction";

export const metadata: Metadata = { title: "Fiction" };

export default function FictionPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h1
        className="text-3xl font-normal text-stone-900 mb-16"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Fiction
      </h1>

      {fiction.length === 0 ? (
        <p className="text-sm text-stone-400">Nothing here yet.</p>
      ) : (
        <ul className="space-y-14">
          {fiction.map((story) => (
            <li key={story.slug}>
              <Link href={`/fiction/${story.slug}`} className="group block">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-xs text-stone-400 uppercase tracking-wider">
                    {story.type}
                  </span>
                  <span className="text-xs text-stone-300">·</span>
                  <span className="text-xs text-stone-400">{story.date}</span>
                </div>
                <h2
                  className="font-normal text-stone-900 group-hover:text-stone-500 transition-colors mb-1"
                  style={{
                    fontFamily:
                      story.lang === "zh"
                        ? '"Noto Serif SC", serif'
                        : "var(--font-serif)",
                    fontSize: story.lang === "zh" ? "1.2rem" : "1.25rem",
                    letterSpacing: story.lang === "zh" ? "0.04em" : undefined,
                  }}
                >
                  {story.title}
                </h2>
                {story.subtitle && (
                  <p
                    className="text-base text-stone-500 italic mb-2"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {story.subtitle}
                  </p>
                )}
                <p className="text-sm text-stone-500 leading-relaxed mt-2">
                  {story.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
