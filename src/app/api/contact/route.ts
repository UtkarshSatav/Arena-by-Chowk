import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, partnerType, message } = await req.json();

    // Check if credentials are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('EMAIL_USER or EMAIL_PASS environment variables are not set.');
      return NextResponse.json({ error: 'Mail server configuration missing' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'chowk0504@gmail.com',
      subject: `New Arena Inquiry: ${name} (${partnerType})`,
      text: `
        New partnership inquiry received:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Partner Type: ${partnerType}
        Message: ${message}
      `,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 24px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee;">
          <h2 style="color: #FFB800; border-bottom: 2px solid #FFB800; padding-bottom: 10px;">New Arena Inquiry</h2>
          <div style="margin-top: 20px; line-height: 1.6;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Partner Type:</strong> ${partnerType}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #FFB800; border-radius: 4px; font-style: italic;">
              ${message.replace(/\n/g, '<br/>')}
            </div>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #999;">This inquiry was sent from the ARENAA website form.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent from ${email} to chowk0504@gmail.com`);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ 
      error: 'Failed to send email', 
      details: errorMessage 
    }, { status: 500 });
  }
}
