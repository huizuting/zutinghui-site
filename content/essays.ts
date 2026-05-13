// ─── ESSAYS ──────────────────────────────────────────────────────────────────
//
// To ADD an essay:
//   1. Copy the TEMPLATE at the bottom.
//   2. Paste it into the `essays` array.
//   3. Fill in the fields.
//   4. Save. The essay appears on /essays and gets its own page at /essays/your-slug.
//
// FIELD GUIDE
//   slug        URL-safe identifier. E.g. "on-forgetting-a-language"
//   title       Title as it appears on the page.
//   date        E.g. "January 2025"
//   description One or two sentences shown on the index page.
//   body        Full text as an array of paragraphs (strings in backticks).
//               Italics: <em>word</em>   Bold: <strong>word</strong>
// ─────────────────────────────────────────────────────────────────────────────

export type Essay = {
  slug: string;
  title: string;
  date: string;
  description: string;
  body: string[];
};

export const essays: Essay[] = [
  // Paste your entries here.
  // ── TEMPLATE (copy from here) ──────────────────────────────────────────────
  // {
  //   slug: "essay-title",
  //   title: "Essay Title",
  //   date: "May 2025",
  //   description: "One sentence shown on the index page.",
  //   body: [
  //     `Opening paragraph of your essay.`,
  //     `Second paragraph.`,
  //     `Third paragraph.`,
  //   ],
  // },
  // ── END TEMPLATE ──────────────────────────────────────────────────────────
];
