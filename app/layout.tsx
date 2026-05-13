import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: {
    default: "Zuting Hui",
    template: "%s — Zuting Hui",
  },
  description: "Writer. Essays, fiction, and notes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-stone-200 mt-32">
          <div className="max-w-2xl mx-auto px-6 py-10 text-sm text-stone-400">
            Zuting Hui
          </div>
        </footer>
      </body>
    </html>
  );
}
