import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { poems } from "@/content/poems";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return poems.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const poem = poems.find((p) => p.slug === slug);
  return { title: poem?.title ?? "Not found" };
}

export default async function PoemPage({ params }: Props) {
  const { slug } = await params;
  const poem = poems.find((p) => p.slug === slug);
  if (!poem) notFound();

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6 text-xs text-stone-400 uppercase tracking-wider">
          <Link href="/poems" className="hover:text-stone-600 transition-colors">
            Poems
          </Link>
          <span>·</span>
          <span>{poem.date}</span>
        </div>
        <h1
          className="text-4xl font-normal text-stone-900 leading-snug"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {poem.title}
        </h1>
      </div>

      <article>
        <div className="space-y-8">
          {poem.body.map((stanza, i) => (
            <p
              key={i}
              className="text-stone-800 leading-loose whitespace-pre-wrap"
              style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem" }}
              dangerouslySetInnerHTML={{ __html: stanza }}
            />
          ))}
        </div>
      </article>

      <div className="mt-20 pt-8 border-t border-stone-200">
        <Link
          href="/poems"
          className="text-sm text-stone-400 hover:text-stone-700 transition-colors"
        >
          ← All poems
        </Link>
      </div>
    </div>
  );
}
