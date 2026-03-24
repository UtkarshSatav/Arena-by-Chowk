import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Internal notification email (sent to your team)
function buildInternalEmail(data: {
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Inquiry – ARENAA</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#111;border:1px solid #222;border-radius:4px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:#000;padding:32px 40px;border-bottom:3px solid #FFB800;">
              <p style="margin:0;font-size:11px;letter-spacing:4px;text-transform:uppercase;color:#FFB800;font-weight:700;">ARENAA by CHOWK</p>
              <h1 style="margin:8px 0 0;font-size:22px;color:#fff;font-weight:900;text-transform:uppercase;letter-spacing:2px;">New Inquiry Received</h1>
            </td>
          </tr>

          <!-- Badge -->
          <tr>
            <td style="padding:24px 40px 0;">
              <span style="display:inline-block;background:#FFB800;color:#000;font-size:10px;font-weight:900;letter-spacing:3px;text-transform:uppercase;padding:6px 14px;border-radius:2px;">${data.type}</span>
            </td>
          </tr>

          <!-- Details -->
          <tr>
            <td style="padding:24px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                ${[
                  ['Full Name', data.name],
                  ['Email', data.email],
                  ['Phone', data.phone],
                  ['Inquiry Type', data.type],
                ].map(([label, value]) => `
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #1e1e1e;width:140px;">
                    <p style="margin:0;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#555;font-weight:700;">${label}</p>
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #1e1e1e;">
                    <p style="margin:0;font-size:14px;color:#fff;font-weight:600;">${value}</p>
                  </td>
                </tr>`).join('')}
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:0 40px 32px;">
              <p style="margin:0 0 10px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#555;font-weight:700;">Message</p>
              <div style="background:#0a0a0a;border-left:3px solid #FFB800;padding:16px 20px;border-radius:2px;">
                <p style="margin:0;font-size:14px;color:#ccc;line-height:1.7;">${data.message || '—'}</p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#000;padding:20px 40px;border-top:1px solid #1e1e1e;">
              <p style="margin:0;font-size:10px;color:#333;letter-spacing:1px;text-transform:uppercase;">Chowk Entertainment Pvt. Ltd. · WZ-24/1 FF Left Side Mukharjee Park, New Delhi – 110018</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// User confirmation email
function buildConfirmationEmail(name: string) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>We received your inquiry – ARENAA</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#111;border:1px solid #222;border-radius:4px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:#000;padding:40px;text-align:center;border-bottom:3px solid #FFB800;">
              <p style="margin:0 0 8px;font-size:11px;letter-spacing:4px;text-transform:uppercase;color:#FFB800;font-weight:700;">ARENAA by CHOWK</p>
              <h1 style="margin:0;font-size:26px;color:#fff;font-weight:900;text-transform:uppercase;letter-spacing:2px;">We Got Your Message</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;text-align:center;">
              <p style="margin:0 0 16px;font-size:16px;color:#fff;font-weight:700;">Hi ${name},</p>
              <p style="margin:0 0 24px;font-size:14px;color:#888;line-height:1.8;">
                Thank you for reaching out to ARENAA by CHOWK. Our team has received your inquiry and will get back to you within <strong style="color:#FFB800;">24–48 hours</strong>.
              </p>
              <div style="display:inline-block;background:#FFB800;border-radius:2px;margin:8px 0 32px;">
                <a href="https://arenaabychowk.com" style="display:block;padding:14px 32px;font-size:11px;font-weight:900;letter-spacing:3px;text-transform:uppercase;color:#000;text-decoration:none;">Visit Our Website →</a>
              </div>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <div style="height:1px;background:#1e1e1e;"></div>
            </td>
          </tr>

          <!-- Contact -->
          <tr>
            <td style="padding:28px 40px;text-align:center;">
              <p style="margin:0 0 6px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#444;font-weight:700;">Need immediate help?</p>
              <a href="mailto:info@arenaa.in" style="font-size:14px;color:#FFB800;font-weight:700;text-decoration:none;">info@arenaa.in</a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#000;padding:20px 40px;border-top:1px solid #1e1e1e;text-align:center;">
              <p style="margin:0 0 6px;font-size:10px;color:#333;letter-spacing:1px;text-transform:uppercase;">Chowk Entertainment Pvt. Ltd.</p>
              <p style="margin:0;font-size:10px;color:#333;letter-spacing:1px;text-transform:uppercase;">WZ-24/1 FF Left Side Mukharjee Park, New Delhi – 110018</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, type, message } = await req.json();

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'Mail configuration missing' }, { status: 500 });
    }

    // Send both emails in parallel
    await Promise.all([
      // 1. Internal notification to your team
      resend.emails.send({
        from: 'ARENAA Inquiries <info@arenaa.in>',
        to: ['info@arenaa.in'],
        subject: `New Inquiry: ${name} (${type})`,
        html: buildInternalEmail({ name, email, phone, type, message }),
        replyTo: email,
      }),

      // 2. Confirmation to the user
      resend.emails.send({
        from: 'ARENAA by CHOWK <info@arenaa.in>',
        to: [email],
        subject: 'We received your inquiry – ARENAA by CHOWK',
        html: buildConfirmationEmail(name),
      }),
    ]);

    return NextResponse.json({ message: 'Sent successfully' }, { status: 200 });
  } catch (error: unknown) {
    console.error('Resend error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: 'Failed to send', details: errorMessage }, { status: 500 });
  }
}
