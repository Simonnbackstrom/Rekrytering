import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const namn = String(formData.get("namn") ?? "").trim();
  const epost = String(formData.get("epost") ?? "").trim();
  const telefon = String(formData.get("telefon") ?? "").trim();
  const meddelande = String(formData.get("meddelande") ?? "").trim();
  const cv = formData.get("cv") as File | null;
  const hasCv = cv && cv.size > 0;

  if (!namn || !epost || !meddelande) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const from = process.env.ANSOKAN_FROM;
  const to = process.env.ANSOKAN_TO;
  if (!from || !to) {
    console.error("ANSOKAN_FROM eller ANSOKAN_TO saknas");
    return NextResponse.json({ ok: false, error: "config" }, { status: 500 });
  }

  const cvNote = hasCv
    ? `<p>CV bifogas som ${escapeHtml(cv.name)}.</p>`
    : `<p><em>Inget CV bifogat – kandidaten har fått ett bekräftelsemejl med instruktion att svara med CV. Svaret kommer till dig.</em></p>`;

  const html = `
    <h2>Ny ansökan: Logistik- och lageradministratör</h2>
    <p><strong>Namn:</strong> ${escapeHtml(namn)}</p>
    <p><strong>E-post:</strong> ${escapeHtml(epost)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(telefon) || "–"}</p>
    <p><strong>Om sökanden:</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(meddelande)}</p>
    ${cvNote}
  `;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: epost,
    subject: `Ny ansökan – ${namn}`,
    html,
    attachments: hasCv
      ? [{ filename: cv.name, content: Buffer.from(await cv.arrayBuffer()) }]
      : undefined,
  });

  if (error) {
    console.error("Resend-fel (ansökan):", error);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  if (!hasCv) {
    const confirmationHtml = `
      <p>Hej ${escapeHtml(namn)},</p>
      <p>Tack för din ansökan till rollen som Logistik- och lageradministratör hos Bohlins Maskiner. Vi har tagit emot dina uppgifter.</p>
      <p><strong>Ett sista steg:</strong> svara på detta mejl och bifoga ditt CV (PDF eller Word). Svaret går direkt till Mikael Bohlin, VD.</p>
      <p>Med vänliga hälsningar,<br>Bohlins Maskiner</p>
    `;

    const { error: confirmError } = await resend.emails.send({
      from,
      to: epost,
      replyTo: to,
      subject: "Bifoga CV till din ansökan hos Bohlins Maskiner",
      html: confirmationHtml,
    });

    if (confirmError) {
      console.error("Resend-fel (bekräftelse):", confirmError);
      return NextResponse.json({ ok: true, cvPending: true, confirmFailed: true });
    }

    return NextResponse.json({ ok: true, cvPending: true });
  }

  return NextResponse.json({ ok: true, cvPending: false });
}
