"use client";

import { useRef, useState } from "react";

export default function AnsokanForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [fileName, setFileName] = useState<string>("Ingen fil vald");
  const fileRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/ansokan", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setFileName("Ingen fil vald");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-10 p-6 border border-[var(--color-border-soft)] bg-[var(--color-bg-alt)]">
        <p className="text-[17px] font-bold text-[var(--color-ink)]">
          Tack för din ansökan!
        </p>
        <p className="mt-2 text-[15px] text-[var(--color-ink-muted)]">
          Vi återkommer så snart vi har läst igenom den.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-6 max-w-[640px]">
      <div>
        <label htmlFor="namn" className="block text-[14px] font-bold mb-2">
          Namn *
        </label>
        <input id="namn" name="namn" type="text" required className="form-input" />
      </div>

      <div>
        <label htmlFor="epost" className="block text-[14px] font-bold mb-2">
          E-post *
        </label>
        <input id="epost" name="epost" type="email" required className="form-input" />
      </div>

      <div>
        <label htmlFor="telefon" className="block text-[14px] font-bold mb-2">
          Telefon
        </label>
        <input id="telefon" name="telefon" type="tel" className="form-input" />
      </div>

      <div>
        <label htmlFor="meddelande" className="block text-[14px] font-bold mb-2">
          Berätta kort om dig och varför du söker *
        </label>
        <textarea
          id="meddelande"
          name="meddelande"
          rows={6}
          required
          className="form-input resize-y"
        />
        <p className="mt-2 text-[13px] text-[var(--color-ink-muted)]">
          Ersätter personligt brev.
        </p>
      </div>

      <div>
        <label htmlFor="cv" className="block text-[14px] font-bold mb-2">
          CV, PDF eller Word *
        </label>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="file-btn"
          >
            Välj fil
          </button>
          <span className="text-[14px] text-[var(--color-ink-muted)]">{fileName}</span>
        </div>
        <input
          ref={fileRef}
          id="cv"
          name="cv"
          type="file"
          required
          accept=".pdf,.doc,.docx"
          onChange={(e) =>
            setFileName(e.target.files?.[0]?.name ?? "Ingen fil vald")
          }
          className="hidden"
        />
      </div>

      <p className="text-[13px] text-[var(--color-ink-muted)] leading-relaxed">
        När du skickar din ansökan behandlar vi dina personuppgifter för att kunna genomföra rekryteringen. Vi sparar dem i 3 månader efter avslutad rekrytering och raderar dem sedan.
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Skickar…" : "Skicka ansökan"}
      </button>

      <p className="text-[17px] leading-relaxed text-[var(--color-ink-muted)] max-w-[640px]">
        Frågor om tjänsten? Kontakta vd Mikael Bohlin på 070-767 78 87 eller mikael@bohlins-maskiner.se.
      </p>

      {status === "error" && (
        <p className="text-[14px] text-red-600">
          Något gick fel. Försök igen.
        </p>
      )}
    </form>
  );
}
