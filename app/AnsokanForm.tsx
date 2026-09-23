"use client";

import { useState } from "react";

export default function AnsokanForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

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
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-8 p-6 rounded-md border border-[var(--color-border)] bg-[var(--color-primary-light)]">
        <p className="text-[17px] font-bold text-[var(--color-ink)]">Tack för din ansökan!</p>
        <p className="mt-2 text-[15px] text-[var(--color-ink-muted)]">
          Vi återkommer så snart vi har läst igenom din ansökan.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div>
        <label htmlFor="namn" className="block text-[14px] font-bold mb-2">
          Namn
        </label>
        <input
          id="namn"
          name="namn"
          type="text"
          required
          className="w-full px-4 py-3 rounded-md border border-[var(--color-border)] bg-white text-[15px] focus:outline-none focus:border-[var(--color-primary)]"
        />
      </div>

      <div>
        <label htmlFor="epost" className="block text-[14px] font-bold mb-2">
          E-post
        </label>
        <input
          id="epost"
          name="epost"
          type="email"
          required
          className="w-full px-4 py-3 rounded-md border border-[var(--color-border)] bg-white text-[15px] focus:outline-none focus:border-[var(--color-primary)]"
        />
      </div>

      <div>
        <label htmlFor="telefon" className="block text-[14px] font-bold mb-2">
          Telefon
        </label>
        <input
          id="telefon"
          name="telefon"
          type="tel"
          className="w-full px-4 py-3 rounded-md border border-[var(--color-border)] bg-white text-[15px] focus:outline-none focus:border-[var(--color-primary)]"
        />
      </div>

      <div>
        <label htmlFor="meddelande" className="block text-[14px] font-bold mb-2">
          Om dig
        </label>
        <textarea
          id="meddelande"
          name="meddelande"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-md border border-[var(--color-border)] bg-white text-[15px] focus:outline-none focus:border-[var(--color-primary)] resize-y"
        />
      </div>

      <div>
        <label htmlFor="cv" className="block text-[14px] font-bold mb-2">
          CV (PDF)
        </label>
        <input
          id="cv"
          name="cv"
          type="file"
          accept=".pdf,.doc,.docx"
          className="block w-full text-[14px] text-[var(--color-ink-muted)] file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-[14px] file:font-bold file:bg-[var(--color-primary-light)] file:text-[var(--color-primary)] hover:file:bg-[var(--color-primary-light)]"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Skickar…" : "Skicka ansökan"}
      </button>

      {status === "error" && (
        <p className="text-[14px] text-red-600">
          Något gick fel. Försök igen eller mejla jobb@bohlins-maskiner.se.
        </p>
      )}
    </form>
  );
}
