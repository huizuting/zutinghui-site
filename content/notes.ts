// ─── NOTES ───────────────────────────────────────────────────────────────────
//
// Notes work the same way as essays.
// Each note gets its own page at /notes/your-slug.
//
// Notes are typically shorter — a few paragraphs.
// The first paragraph of `body` is shown as a preview on the index page.
//
// FIELD GUIDE
//   slug        URL-safe identifier. E.g. "reading-in-october"
//   title       Title.
//   date        E.g. "October 2024"
//   body        Full text as an array of paragraph strings.
// ─────────────────────────────────────────────────────────────────────────────

export type Note = {
  slug: string;
  title: string;
  date: string;
  body: string[];
};

export const notes: Note[] = [
  // Paste your entries here.
  // ── TEMPLATE (copy from here) ──────────────────────────────────────────────
  // {
  //   slug: "note-title",
  //   title: "Note Title",
  //   date: "May 2025",
  //   body: [
  //     `The first paragraph is shown as a preview on the notes index.`,
  //     `Second paragraph, visible only on the full note page.`,
  //   ],
  // },
  // ── END TEMPLATE ──────────────────────────────────────────────────────────
];
