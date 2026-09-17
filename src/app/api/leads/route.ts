import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

const leadSchema = z.object({
  role: z.enum(["business", "driver"]),
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().default(""),
  city: z.string().trim().min(2).max(120),
  company: z.string().trim().max(160).optional().default(""),
  note: z.string().trim().max(1000).optional().default(""),
  website: z.string().max(0).optional().default(""),
  context: z.record(z.string(), z.unknown()).optional(),
});

export async function POST(request: Request) {
  const parsed = leadSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  const lead = parsed.data;

  // Honeypot: silently accept bot submissions.
  if (lead.website) return NextResponse.json({ ok: true });

  const host = process.env.ZOHO_SMTP_HOST;
  const port = Number(process.env.ZOHO_SMTP_PORT ?? "465");
  const user = process.env.ZOHO_SMTP_USER;
  const pass = process.env.ZOHO_SMTP_PASS;
  const toBusiness = process.env.LEADS_BUSINESS_TO ?? user;
  const toDriver = process.env.LEADS_DRIVER_TO ?? user;

  if (!host || !user || !pass || !(lead.role === "business" ? toBusiness : toDriver)) {
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json({ ok: false, error: "lead_delivery_not_configured" }, { status: 503 });
    }
    console.info("DEV LEAD", lead);
    return NextResponse.json({ ok: true, delivered: false });
  }

  const transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });
  const target = lead.role === "business" ? toBusiness : toDriver;
  const subject = lead.role === "business" ? `[Pilot] Interes business — ${lead.city}` : `[Pilot] Șofer — ${lead.city}`;
  const body = [
    `Rol: ${lead.role}`,
    `Nume: ${lead.name}`,
    `Email: ${lead.email}`,
    `Telefon: ${lead.phone || "-"}`,
    `Oraș: ${lead.city}`,
    `Companie: ${lead.company || "-"}`,
    `Notă: ${lead.note || "-"}`,
    `Context: ${JSON.stringify(lead.context ?? {}, null, 2)}`,
  ].join("\n");

  try {
    await transporter.sendMail({ from: user, to: target, replyTo: lead.email, subject, text: body });
    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("lead_delivery_failed", error);
    return NextResponse.json({ ok: false, error: "lead_delivery_failed" }, { status: 502 });
  }
}
