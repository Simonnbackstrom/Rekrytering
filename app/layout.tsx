import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Logistik och lageradministratör, Bohlins Maskiner Sollentuna",
  description:
    "Bohlins Maskiner söker en strukturerad Logistik och lageradministratör till vårt kontor i Sollentuna. Central roll i Jeeves, Upsales och Ascendo.",
  openGraph: {
    title: "Logistik och lageradministratör, Bohlins Maskiner",
    description:
      "Central roll som kopplar samman inköp, lager och kundservice. Sollentuna, heltid.",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={nunito.variable}>
      <body>{children}</body>
    </html>
  );
}
