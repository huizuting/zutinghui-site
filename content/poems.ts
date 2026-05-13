// ─── POEMS ───────────────────────────────────────────────────────────────────
//
// To ADD a poem:
//   1. Copy the TEMPLATE at the bottom.
//   2. Paste it into the `poems` array.
//   3. Fill in the fields.
//   4. Save. The poem appears on /poems and gets its own page at /poems/your-slug.
//
// FIELD GUIDE
//   slug        URL-safe identifier. E.g. "early-light"
//   title       Title as it appears on the page.
//   date        E.g. "April 2025"
//   body        The poem as an array of stanzas.
//               Each stanza is one string enclosed in backticks.
//               Within a stanza, press Enter for a new line — it will be preserved.
//               Leave a blank line between stanzas by using a separate empty string: ``,
//               Italics: <em>word</em>
//
// EXAMPLE — a two-stanza poem:
//
//   body: [
//     `First line of the first stanza.
// Second line.
// Third line.`,
//     `First line of the second stanza.
// Second line.`,
//   ],
//
// ─────────────────────────────────────────────────────────────────────────────

export type Poem = {
  slug: string;
  title: string;
  date: string;
  body: string[];
};

export const poems: Poem[] = [
  // Paste your entries here.
  // ── TEMPLATE (copy from here) ──────────────────────────────────────────────
  // {
  //   slug: "poem-title",
  //   title: "Poem Title",
  //   date: "May 2025",
  //   body: [
  //     `First stanza, first line.
  // Second line.
  // Third line.`,
  //     `Second stanza.
  // Second line.`,
  //   ],
  // },
  // ── END TEMPLATE ──────────────────────────────────────────────────────────
];
