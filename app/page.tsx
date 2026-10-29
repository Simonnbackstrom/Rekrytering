import Image from "next/image";
import Link from "next/link";
import AnsokanForm from "./AnsokanForm";

export default function Home() {
  return (
    <main>
      {/* NAV */}
      <header className="border-b border-[var(--color-border-soft)]">
        <div className="max-w-3xl mx-auto px-5 h-20 flex items-center justify-between">
          <Link href="/" aria-label="Bohlins Maskiner">
            <Image
              src="/logo-bohlins.svg"
              alt="Bohlins Maskiner"
              width={160}
              height={48}
              priority
              className="h-10 w-auto"
            />
          </Link>
          <Link href="#ansokan" className="btn-nav">
            Ansök
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="px-5 pt-16 sm:pt-24 pb-10">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow">Ledig tjänst på Bohlins Maskiner i Sollentuna</p>
          <h1 className="mt-4 text-[40px] leading-[1.1] sm:text-[64px] sm:leading-[1.05]">
            Teknisk fältsäljare
          </h1>
          <p className="mt-8 text-[18px] sm:text-[19px] leading-relaxed text-[var(--color-ink-muted)] max-w-[560px]">
            Vill du utvecklas inom teknisk försäljning, eller ta steget från en teknisk roll till ett jobb närmare kunderna? Som teknisk fältsäljare hos oss får du ett stort eget affärsansvar och träffar kunder inom svensk industri flera dagar i veckan.
          </p>
          <Link href="#ansokan" className="btn-primary mt-10">
            Skicka din ansökan
          </Link>
        </div>
      </section>

      {/* HERO BILD */}
      <section className="px-5 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/images/mote.jpg"
              alt="Glada medarbetare på Bohlins Maskiner"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAKTARUTA */}
      <section className="px-5 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-bg-alt)] p-8 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-y-7 gap-x-10">
            <div>
              <p className="sub-eyebrow">Ort</p>
              <p className="mt-2 text-[16px] font-semibold">Sollentuna, hybrid</p>
            </div>
            <div>
              <p className="sub-eyebrow">Omfattning</p>
              <p className="mt-2 text-[16px] font-semibold">Heltid, tillsvidare</p>
            </div>
            <div>
              <p className="sub-eyebrow">Tillträde</p>
              <p className="mt-2 text-[16px] font-semibold">Snarast, enligt överenskommelse</p>
            </div>
            <div>
              <p className="sub-eyebrow">Sista ansökningsdag</p>
              <p className="mt-2 text-[16px] font-semibold">30 november 2026</p>
            </div>
            <div className="sm:col-span-2">
              <p className="sub-eyebrow">Kontaktperson</p>
              <p className="mt-2 text-[16px] font-semibold">Mikael Bohlin, vd</p>
              <p className="text-[16px] font-semibold">070-767 78 87</p>
              <p className="text-[16px] font-semibold">mikael@bohlins-maskiner.se</p>
            </div>
          </div>
        </div>
      </section>

      {/* OM JOBBET */}
      <section className="px-5 py-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[28px] sm:text-[36px]">Om jobbet</h2>
          <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-[var(--color-ink-muted)] max-w-[640px]">
            <p>
              Du säljer hela vårt sortiment till svensk industri, från kopplingar och bromsar till limutrustning och Ex-klassad utrustning. Du arbetar både mot slutkunder och maskinbyggare, där återköp och långsiktiga samarbeten är en central del av affären.
            </p>
            <p>
              Ungefär tre dagar i veckan är du ute hos kunder. Du planerar själv dina dagar och kundbesök. Tjänsten utgår från kontoret i Sollentuna och du rapporterar till vd.
            </p>
          </div>
        </div>
      </section>

      {/* VAD DU GÖR */}
      <section className="px-5 py-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[28px] sm:text-[36px]">Vad du gör</h2>
          <ul className="bullets mt-6 space-y-3 text-[17px] leading-relaxed text-[var(--color-ink-muted)] max-w-[640px]">
            <li>Besöker befintliga och nya kunder och visar vad våra produkter och lösningar kan göra för dem.</li>
            <li>Planerar och genomför minst 40 kundbesök i månaden.</li>
            <li>Driver pågående affärer och startar nya projekt, stora som små.</li>
            <li>Är med vid leveranser, installationer och projektmöten hos kunder.</li>
            <li>Säljer både enstaka större investeringar och komponenter som kunderna köper återkommande.</li>
          </ul>
        </div>
      </section>

      {/* BILD 2 */}
      <section className="px-5 py-10">
        <div className="max-w-3xl mx-auto">
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src="/images/kontor.jpg"
              alt="Kontoret på Bohlins Maskiner i Sollentuna"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* VEM VI SÖKER */}
      <section className="px-5 py-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[28px] sm:text-[36px]">Vem vi söker</h2>
          <p className="mt-6 text-[17px] leading-relaxed text-[var(--color-ink-muted)] max-w-[640px]">
            Du är självgående och strukturerad och har koll på både planering och detaljer. Du tar initiativ, är prestigelös och tycker om att hitta lösningar tillsammans med kunden. Du drivs av att nå dina mål.
          </p>

          <p className="sub-eyebrow mt-10">Vi söker dig som har</p>
          <ul className="bullets mt-5 space-y-3 text-[17px] leading-relaxed text-[var(--color-ink-muted)] max-w-[640px]">
            <li>teknisk bakgrund eller erfarenhet av teknisk försäljning inom industrin</li>
            <li>vana att arbeta självständigt och bygga kundrelationer</li>
            <li>god svenska i tal och skrift</li>
            <li>B-körkort.</li>
          </ul>

          <p className="sub-eyebrow mt-10">Det är meriterande om du har</p>
          <ul className="bullets mt-5 space-y-3 text-[17px] leading-relaxed text-[var(--color-ink-muted)] max-w-[640px]">
            <li>ingenjörsutbildning</li>
            <li>kunskap om något av våra produktområden.</li>
          </ul>
        </div>
      </section>

      {/* BILD 3 */}
      <section className="px-5 py-10">
        <div className="max-w-3xl mx-auto">
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src="/images/produkt.jpg"
              alt="En av Bohlins Maskiners produkter"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* OM BOHLINS */}
      <section className="px-5 py-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[28px] sm:text-[36px]">Om Bohlins Maskiner</h2>
          <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-[var(--color-ink-muted)] max-w-[640px]">
            <p>
              Bohlins Maskiner grundades 1937 som ett handels- och agenturföretag för transmissionskomponenter, som kopplingar, bromsar och växlar, och för utrustning till kall- och smältlim. I dag säljer vi även pumpar och filter samt Ex-klassad utrustning, som belysning, värme och ventilation. Våra kunder är främst maskinbyggare inom bland annat verkstads-, stål-, pappers- och förpackningsindustrin.
            </p>
            <p>Vi är ett mindre företag med sex medarbetare och korta beslutsvägar.</p>
          </div>
        </div>
      </section>

      {/* VAD VI ERBJUDER */}
      <section className="px-5 py-10 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[28px] sm:text-[36px]">Vad vi erbjuder</h2>
          <ul className="bullets mt-6 space-y-3 text-[17px] leading-relaxed text-[var(--color-ink-muted)]">
            <li>Tjänstebil</li>
            <li>Tjänstepension</li>
            <li>Sjukvårdsförsäkring</li>
            <li>Friskvård och gym</li>
          </ul>
        </div>
      </section>

      {/* ANSÖKAN */}
      <section
        id="ansokan"
        className="px-5 py-20 border-t border-[var(--color-border-soft)]"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[32px] sm:text-[44px]">Låter det som du?</h2>
          <p className="mt-6 text-[17px] text-[var(--color-ink-muted)] leading-relaxed max-w-[640px]">
            Skicka din ansökan senast 30 november. Vi går igenom ansökningarna löpande och kan tillsätta tjänsten före sista ansökningsdag.
          </p>
          <AnsokanForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--color-border-soft)] px-5 py-10">
        <div className="max-w-3xl mx-auto text-[13px] text-[var(--color-ink-muted)]">
          Bohlins Maskiner AB · Djupdalsvägen 18, Sollentuna · bohlins-maskiner.se
        </div>
      </footer>
    </main>
  );
}
