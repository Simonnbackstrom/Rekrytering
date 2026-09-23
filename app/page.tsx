import Image from "next/image";
import Link from "next/link";
import AnsokanForm from "./AnsokanForm";

export default function Home() {
  return (
    <main>
      {/* NAV */}
      <header className="border-b border-[var(--color-border)]">
        <div className="max-w-2xl mx-auto px-5 h-16 flex items-center justify-between">
          <Link href="/" aria-label="Bohlins Maskiner">
            <Image
              src="/logo-bohlins.svg"
              alt="Bohlins Maskiner"
              width={140}
              height={24}
              priority
              className="h-6 w-auto"
            />
          </Link>
          <Link
            href="#ansokan"
            className="text-[14px] font-bold text-[var(--color-primary)]"
          >
            Ansök
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="px-5 pt-16 sm:pt-24 pb-12">
        <div className="max-w-2xl mx-auto">
          <p className="eyebrow">Ledig tjänst i Sollentuna</p>
          <h1 className="mt-4 text-[34px] leading-[1.15] sm:text-[52px] sm:leading-[1.05] font-extrabold tracking-tight">
            Logistik och lageradministratör
          </h1>
          <p className="mt-6 text-[18px] sm:text-[20px] leading-relaxed text-[var(--color-ink-muted)]">
            Vi söker dig som drivs av ordning, reda och smidiga flöden. En central roll där du kopplar samman inköp, lager och kundservice.
          </p>
          <Link href="#ansokan" className="btn-primary mt-8">
            Skicka din ansökan
          </Link>
        </div>
      </section>

      {/* OM JOBBET */}
      <section className="px-5 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[24px] sm:text-[28px] font-extrabold tracking-tight">
            Om jobbet
          </h2>
          <div className="mt-5 space-y-5 text-[17px] leading-relaxed text-[var(--color-ink-muted)]">
            <p>
              Som Logistik och lageradministratör har du helhetsansvar för vårt administrativa varuflöde. Du är länken mellan leverantörer, säljare och det fysiska lagret.
            </p>
            <p>
              Din vardag sker till stor del i våra system: <strong className="text-[var(--color-ink)] font-bold">Jeeves</strong>, <strong className="text-[var(--color-ink)] font-bold">Upsales</strong> och <strong className="text-[var(--color-ink)] font-bold">Ascendo</strong>. Erfarenhet av dessa är meriterande men inget krav. Vi ger dig en genomtänkt upplärning.
            </p>
          </div>
        </div>
      </section>

      {/* ARBETSUPPGIFTER */}
      <section className="px-5 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[24px] sm:text-[28px] font-extrabold tracking-tight">
            Vad du gör
          </h2>
          <ul className="mt-6 space-y-4 text-[17px] leading-relaxed text-[var(--color-ink-muted)]">
            <li>Tar emot ankommande gods och registrerar det i systemet.</li>
            <li>Administrerar utgående order och bokar transporter.</li>
            <li>Registrerar inköpsordrar och matchar leverantörsfakturor.</li>
            <li>Håller lagersaldon och kunddata korrekta.</li>
            <li>Hanterar reklamationer och transportskador.</li>
          </ul>
        </div>
      </section>

      {/* VEM ÄR DU */}
      <section className="px-5 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[24px] sm:text-[28px] font-extrabold tracking-tight">
            Vem vi söker
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-[var(--color-ink-muted)]">
            Du älskar struktur, gör rätt från början och håller huvudet kallt när tempot går upp. Du har lätt för att kommunicera med både kollegor och externa transportörer.
          </p>
          <ul className="mt-6 space-y-4 text-[17px] leading-relaxed text-[var(--color-ink-muted)]">
            <li>Erfarenhet av logistikadministration, inköp eller lager.</li>
            <li>Mycket god datorvana och logiskt systemtänk.</li>
            <li>Svenska obehindrat, goda kunskaper i engelska.</li>
          </ul>
        </div>
      </section>

      {/* OM BOHLINS */}
      <section className="px-5 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[24px] sm:text-[28px] font-extrabold tracking-tight">
            Om Bohlins Maskiner
          </h2>
          <div className="mt-5 space-y-5 text-[17px] leading-relaxed text-[var(--color-ink-muted)]">
            <p>
              Bohlins Maskiner är en industrileverantör sedan 1937. Vi säljer premiumprodukter för transmission, mätning och applicering till svensk industri.
            </p>
            <p>
              Vi sitter i fräscha lokaler i Sollentuna och satsar på automatisering, digitalisering och AI i kundsupporten. Här får du korta beslutsvägar och engagerade kollegor.
            </p>
          </div>
        </div>
      </section>

      {/* VI ERBJUDER */}
      <section className="px-5 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[24px] sm:text-[28px] font-extrabold tracking-tight">
            Vad vi erbjuder
          </h2>
          <ul className="mt-6 space-y-4 text-[17px] leading-relaxed text-[var(--color-ink-muted)]">
            <li>Sjukvårdsförsäkring.</li>
            <li>Friskvård och gym.</li>
            <li>Arbete på plats i fräscha lokaler i Sollentuna.</li>
            <li>Trygg tillsvidareanställning på heltid.</li>
          </ul>
        </div>
      </section>

      {/* ANSÖKAN */}
      <section id="ansokan" className="px-5 py-16 sm:py-24 border-t border-[var(--color-border)]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-extrabold tracking-tight">
            Låter det som du?
          </h2>
          <p className="mt-5 text-[17px] sm:text-[18px] text-[var(--color-ink-muted)] leading-relaxed">
            Fyll i formuläret nedan och bifoga ditt CV. Urval sker löpande.
          </p>
          <AnsokanForm />
          <p className="mt-8 text-[14px] text-[var(--color-ink-muted)]">
            Frågor? Mejla{" "}
            <a
              href="mailto:jobb@bohlins-maskiner.se"
              className="text-[var(--color-primary)] font-semibold"
            >
              jobb@bohlins-maskiner.se
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--color-border)] px-5 py-8">
        <div className="max-w-2xl mx-auto text-[13px] text-[var(--color-ink-muted)]">
          Bohlins Maskiner AB, Djupdalsvägen 18, Sollentuna
        </div>
      </footer>
    </main>
  );
}
