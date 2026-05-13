import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { fiction } from "@/content/fiction";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return fiction.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const piece = fiction.find((p) => p.slug === slug);
  if (!piece) return { title: "Not found" };
  const title = piece.subtitle
    ? `${piece.title} / ${piece.subtitle}`
    : piece.title;
  return { title };
}

export default async function FictionPiece({ params }: Props) {
  const { slug } = await params;
  const piece = fiction.find((p) => p.slug === slug);
  if (!piece) notFound();

  const isChinese = piece.lang === "zh";

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8 text-xs text-stone-400 uppercase tracking-wider">
          <Link href="/fiction" className="hover:text-stone-600 transition-colors">
            Fiction
          </Link>
          <span>·</span>
          <span>{piece.type}</span>
          <span>·</span>
          <span>{piece.date}</span>
        </div>

        <h1
          className="font-normal text-stone-900 leading-tight"
          style={{
            fontFamily: isChinese
              ? '"Noto Serif SC", "Source Han Serif SC", serif'
              : "var(--font-serif)",
            fontSize: isChinese ? "2rem" : "2.25rem",
            letterSpacing: isChinese ? "0.05em" : undefined,
          }}
        >
          {piece.title}
        </h1>

        {piece.subtitle && (
          <p
            className="mt-2 text-stone-500"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.25rem",
              fontStyle: "italic",
            }}
          >
            {piece.subtitle}
          </p>
        )}
      </div>

      {/* Body */}
      <article className={isChinese ? "lang-zh" : undefined}>
        <div
          className="text-stone-800"
          style={
            isChinese
              ? undefined
              : {
                  fontFamily: "var(--font-body)",
                  fontSize: "1.0625rem",
                  lineHeight: "1.85",
                }
          }
        >
          {piece.body.map((paragraph, i) => (
            <p
              key={i}
              className={isChinese ? undefined : "mb-6"}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>
      </article>

      <div className="mt-20 pt-8 border-t border-stone-200">
        <Link
          href="/fiction"
          className="text-sm text-stone-400 hover:text-stone-700 transition-colors"
        >
          ← All fiction
        </Link>
      </div>
    </div>
  );
}
