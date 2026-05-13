import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-32">
      <p
        className="text-stone-400 text-sm mb-4 uppercase tracking-widest"
      >
        404
      </p>
      <h1
        className="text-3xl font-normal text-stone-900 mb-6"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Page not found
      </h1>
      <p className="text-stone-500 text-sm mb-10">
        This page does not exist, or has not been written yet.
      </p>
      <Link
        href="/"
        className="text-sm text-stone-400 hover:text-stone-700 transition-colors border-b border-stone-300 hover:border-stone-600 pb-px"
      >
        Return home
      </Link>
    </div>
  );
}
