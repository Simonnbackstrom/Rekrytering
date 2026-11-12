import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const META_PIXEL_ID = "2253814102146827";

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
      <head>
        <Script id="meta-pixel" strategy="beforeInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
