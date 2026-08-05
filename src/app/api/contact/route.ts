import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { SITE } from "@/lib/constants";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildEmailHtml(data: {
  name: string;
  email: string;
  company: string;
  role?: string;
  message: string;
}) {
  const rows = [
    ["Name", data.name],
    ["Email", data.email],
    ["Company", data.company],
    ...(data.role ? [["Role", data.role] as const] : []),
    ["Message", data.message],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-weight:600;color:#111827;vertical-align:top;width:140px;">${escapeHtml(label)}</td>
          <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5;color:#111827;max-width:640px;">
      <h2 style="margin:0 0 8px;font-size:20px;">New consultation request</h2>
      <p style="margin:0 0 24px;color:#6b7280;">Submitted via ${escapeHtml(SITE.name)} contact form.</p>
      <table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
        ${tableRows}
      </table>
      <p style="margin:24px 0 0;color:#6b7280;font-size:13px;">Reply directly to this email to respond to ${escapeHtml(data.name)}.</p>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please check the form and try again." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      console.error("Contact form missing RESEND_API_KEY, CONTACT_TO_EMAIL, or RESEND_FROM_EMAIL");
      return NextResponse.json(
        { error: "Email service is not configured yet. Please contact us by phone or email." },
        { status: 503 }
      );
    }

    const data = parsed.data;
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: data.email,
      subject: `Consultation request from ${data.name} (${data.company})`,
      html: buildEmailHtml(data),
    });

    if (error) {
      console.error("Resend send error:", error);
      const detail =
        process.env.NODE_ENV === "development" && error.message
          ? error.message
          : "We couldn't send your message. Please try again or email us directly.";
      return NextResponse.json({ error: detail }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
