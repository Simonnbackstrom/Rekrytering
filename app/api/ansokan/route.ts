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

  if (!namn || !epost || !meddelande || !cv) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const from = process.env.ANSOKAN_FROM;
  const to = process.env.ANSOKAN_TO;
  if (!from || !to) {
    console.error("ANSOKAN_FROM eller ANSOKAN_TO saknas");
    return NextResponse.json({ ok: false, error: "config" }, { status: 500 });
  }

  const cvBuffer = Buffer.from(await cv.arrayBuffer());

  const html = `
    <h2>Ny ansökan: Logistik- och lageradministratör</h2>
    <p><strong>Namn:</strong> ${escapeHtml(namn)}</p>
    <p><strong>E-post:</strong> ${escapeHtml(epost)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(telefon) || "–"}</p>
    <p><strong>Om sökanden:</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(meddelande)}</p>
    <p>CV bifogas som ${escapeHtml(cv.name)}.</p>
  `;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: epost,
    subject: `Ny ansökan – ${namn}`,
    html,
    attachments: [
      {
        filename: cv.name,
        content: cvBuffer,
      },
    ],
  });

  if (error) {
    console.error("Resend-fel:", error);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
