import type { Metadata } from "next";
import { bio, contact } from "@/content/about";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h1
        className="text-3xl font-normal text-stone-900 mb-16"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        About
      </h1>

      <div
        className="space-y-6 text-stone-700"
        style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", lineHeight: "1.85" }}
      >
        {bio.map((paragraph, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>

      {contact.email && (
        <div className="mt-16 pt-8 border-t border-stone-200">
          <h2 className="text-xs uppercase tracking-widest text-stone-400 mb-6">
            Contact
          </h2>
          <p className="text-sm text-stone-500 leading-relaxed">
            <a
              href={`mailto:${contact.email}`}
              className="text-stone-700 hover:text-stone-500 transition-colors border-b border-stone-300 hover:border-stone-500 pb-px"
            >
              {contact.email}
            </a>
          </p>
        </div>
      )}

      {contact.links.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xs uppercase tracking-widest text-stone-400 mb-6">
            Elsewhere
          </h2>
          <ul className="space-y-2 text-sm text-stone-500">
            {contact.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-stone-700 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
