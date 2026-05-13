import type { Metadata } from "next";
import Link from "next/link";
import { notes } from "@/content/notes";

export const metadata: Metadata = { title: "Notes" };

export default function NotesPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h1
        className="text-3xl font-normal text-stone-900 mb-16"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Notes
      </h1>

      {notes.length === 0 ? (
        <p className="text-sm text-stone-400">Nothing here yet.</p>
      ) : (
        <ul className="space-y-14">
          {notes.map((note) => (
            <li key={note.slug}>
              <Link href={`/notes/${note.slug}`} className="group block">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h2
                    className="text-lg font-normal text-stone-900 group-hover:text-stone-500 transition-colors"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {note.title}
                  </h2>
                  <span className="text-xs text-stone-400 whitespace-nowrap shrink-0">
                    {note.date}
                  </span>
                </div>
                {note.body[0] && (
                  <p
                    className="text-sm text-stone-500 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: note.body[0] }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
