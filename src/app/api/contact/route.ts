import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, societe, nom, email, telephone, region, message } = body;

    await resend.emails.send({
      from: "Cerdak France <noreply@cerdak.fr>",
      to: ["france@cerdak.com"],           // ← change to real recipient
      reply_to: email,
      subject: `[Cerdak FR] Nouvelle demande — ${societe} (${type})`,
      html: `
        <h2>Nouvelle demande de partenariat</h2>
        <table>
          <tr><td><strong>Type</strong></td><td>${type}</td></tr>
          <tr><td><strong>Société</strong></td><td>${societe}</td></tr>
          <tr><td><strong>Contact</strong></td><td>${nom}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Téléphone</strong></td><td>${telephone || "—"}</td></tr>
          <tr><td><strong>Région</strong></td><td>${region}</td></tr>
        </table>
        <h3>Message</h3>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }
}
