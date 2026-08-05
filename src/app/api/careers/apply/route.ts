import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  ALLOWED_CV_TYPES,
  MAX_CV_BYTES,
  careerApplicationFieldsSchema,
} from "@/lib/career-application-schema";
import { CAREER_OPENINGS } from "@/lib/careers";
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
  phone: string;
  positionTitle: string;
  linkedin?: string;
  portfolio?: string;
  coverLetter: string;
  cvFileName: string;
}) {
  const rows: [string, string][] = [
    ["Position", data.positionTitle],
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone],
    ...(data.linkedin ? [["LinkedIn", data.linkedin] as [string, string]] : []),
    ...(data.portfolio ? [["Portfolio / GitHub", data.portfolio] as [string, string]] : []),
    ["CV file", data.cvFileName],
    ["Cover note", data.coverLetter],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-weight:600;color:#111827;vertical-align:top;width:160px;">${escapeHtml(label)}</td>
          <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#374151;white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5;color:#111827;max-width:640px;">
      <h2 style="margin:0 0 8px;font-size:20px;">New job application</h2>
      <p style="margin:0 0 24px;color:#6b7280;">Submitted via ${escapeHtml(SITE.name)} careers page. CV is attached.</p>
      <table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
        ${tableRows}
      </table>
      <p style="margin:24px 0 0;color:#6b7280;font-size:13px;">Reply directly to this email to contact ${escapeHtml(data.name)}.</p>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const fields = careerApplicationFieldsSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      positionId: formData.get("positionId"),
      linkedin: formData.get("linkedin") || "",
      portfolio: formData.get("portfolio") || "",
      coverLetter: formData.get("coverLetter"),
    });

    if (!fields.success) {
      const first = fields.error.issues[0]?.message;
      return NextResponse.json(
        { error: first ?? "Please check the form and try again." },
        { status: 400 }
      );
    }

    const position = CAREER_OPENINGS.find((job) => job.id === fields.data.positionId);
    if (!position) {
      return NextResponse.json({ error: "Please select a valid open role." }, { status: 400 });
    }

    const cv = formData.get("cv");
    if (!(cv instanceof File) || cv.size === 0) {
      return NextResponse.json({ error: "Please upload your CV (PDF or Word)." }, { status: 400 });
    }

    if (cv.size > MAX_CV_BYTES) {
      return NextResponse.json({ error: "CV must be 5 MB or smaller." }, { status: 400 });
    }

    const typeOk =
      ALLOWED_CV_TYPES.includes(cv.type as (typeof ALLOWED_CV_TYPES)[number]) ||
      /\.(pdf|doc|docx)$/i.test(cv.name);

    if (!typeOk) {
      return NextResponse.json(
        { error: "CV must be a PDF or Word document (.pdf, .doc, .docx)." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CAREERS_TO_EMAIL || process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      console.error("Careers form missing RESEND_API_KEY, CONTACT_TO_EMAIL/CAREERS_TO_EMAIL, or RESEND_FROM_EMAIL");
      return NextResponse.json(
        { error: "Application service is not configured yet. Please email your CV to us directly." },
        { status: 503 }
      );
    }

    const buffer = Buffer.from(await cv.arrayBuffer());
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: fields.data.email,
      subject: `Job application: ${position.title} - ${fields.data.name}`,
      html: buildEmailHtml({
        name: fields.data.name,
        email: fields.data.email,
        phone: fields.data.phone,
        positionTitle: position.title,
        linkedin: fields.data.linkedin || undefined,
        portfolio: fields.data.portfolio || undefined,
        coverLetter: fields.data.coverLetter,
        cvFileName: cv.name,
      }),
      attachments: [
        {
          filename: cv.name,
          content: buffer,
        },
      ],
    });

    if (error) {
      console.error("Resend careers send error:", error);
      const detail =
        process.env.NODE_ENV === "development" && error.message
          ? error.message
          : "We couldn't submit your application. Please try again or email your CV directly.";
      return NextResponse.json({ error: detail }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Careers application error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
