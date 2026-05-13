import Link from "next/link";
import { homeIntro } from "@/content/home";
import { fiction } from "@/content/fiction";
import { essays } from "@/content/essays";
import { notes } from "@/content/notes";
import { poems } from "@/content/poems";

const recentWork = [
  ...fiction.map((p) => ({ section: "fiction", slug: p.slug, title: p.title, date: p.date })),
  ...essays.map((p) => ({ section: "essays", slug: p.slug, title: p.title, date: p.date })),
  ...notes.map((p) => ({ section: "notes", slug: p.slug, title: p.title, date: p.date })),
  ...poems.map((p) => ({ section: "poems", slug: p.slug, title: p.title, date: p.date })),
].slice(0, 6);

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6">
      <section className="pt-24 pb-20">
        <p
          className="text-2xl sm:text-3xl leading-relaxed text-stone-800 font-light"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {homeIntro}
        </p>
      </section>

      {recentWork.length > 0 && (
        <>
          <hr className="border-stone-200" />
          <section className="py-16">
            <h2 className="text-xs uppercase tracking-widest text-stone-400 mb-10">
              Recent
            </h2>
            <ul className="space-y-5">
              {recentWork.map((piece) => (
                <li key={`${piece.section}/${piece.slug}`} className="flex items-baseline justify-between gap-4">
                  <Link
                    href={`/${piece.section}/${piece.slug}`}
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
            <div className="mt-12">
              <Link
                href="/writing"
                className="text-sm text-stone-400 hover:text-stone-700 transition-colors border-b border-stone-300 hover:border-stone-600 pb-px"
              >
                All writing
              </Link>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
