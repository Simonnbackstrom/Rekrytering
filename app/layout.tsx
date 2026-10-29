import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teknisk fältsäljare, Bohlins Maskiner Sollentuna",
  description:
    "Bohlins Maskiner söker en teknisk fältsäljare till vårt kontor i Sollentuna. Stort eget affärsansvar och kundbesök flera dagar i veckan inom svensk industri.",
  openGraph: {
    title: "Teknisk fältsäljare, Bohlins Maskiner",
    description:
      "Stort eget affärsansvar och kundbesök flera dagar i veckan. Sollentuna, hybrid. Sista ansökningsdag 30 november.",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
