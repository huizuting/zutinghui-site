import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { notes } from "@/content/notes";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return notes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const piece = notes.find((p) => p.slug === slug);
  return { title: piece?.title ?? "Not found" };
}

export default async function NotePiece({ params }: Props) {
  const { slug } = await params;
  const piece = notes.find((p) => p.slug === slug);
  if (!piece) notFound();

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6 text-xs text-stone-400 uppercase tracking-wider">
          <Link href="/notes" className="hover:text-stone-600 transition-colors">
            Notes
          </Link>
          <span>·</span>
          <span>{piece.date}</span>
        </div>
        <h1
          className="text-4xl font-normal text-stone-900 leading-snug"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {piece.title}
        </h1>
      </div>

      <article style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", lineHeight: "1.85" }}>
        <div className="space-y-6 text-stone-800">
          {piece.body.map((paragraph, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>
      </article>

      <div className="mt-20 pt-8 border-t border-stone-200">
        <Link
          href="/notes"
          className="text-sm text-stone-400 hover:text-stone-700 transition-colors"
        >
          ← All notes
        </Link>
      </div>
    </div>
  );
}
