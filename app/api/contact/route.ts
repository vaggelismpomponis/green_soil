import { z } from "zod";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

const schema = z.object({
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
  consent: z.literal(true),
  honey: z.string().max(0).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const data = schema.parse(json);
    if (data.honey) {
      return new Response("ok", { status: 200 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const from = process.env.MAIL_FROM || process.env.SMTP_USER || "no-reply@localhost";
    const to = process.env.MAIL_TO || from;

    await transporter.sendMail({
      from,
      to,
      subject: `Νέο μήνυμα από ${data.email}`,
      text: `${data.message}\n\nemail: ${data.email}${data.phone ? `, τηλ: ${data.phone}` : ""}`,
    });

    return Response.json({ ok: true });
  } catch (err: any) {
    return Response.json({ ok: false, error: err?.message || "error" }, { status: 400 });
  }
}


