import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const data = {
    namn: formData.get("namn"),
    epost: formData.get("epost"),
    telefon: formData.get("telefon"),
    meddelande: formData.get("meddelande"),
    cv: (formData.get("cv") as File | null)?.name ?? null,
  };

  console.log("Ny ansökan:", data);

  return NextResponse.json({ ok: true });
}
