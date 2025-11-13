import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const submission = {
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
    };

    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    let emailed = false;
    let saved = false;
    console.log(smtpHost, smtpUser, smtpPass)
    if (smtpHost && smtpUser && smtpPass) {
      try {
        // dynamic import so this file won't crash if nodemailer is absent during build
        // @ts-ignore - nodemailer may not be installed or its type declarations may be missing
        const nodemailer = (await import('nodemailer')) as any;

        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: process.env.SMTP_SECURE === 'true',
          auth: { user: smtpUser, pass: smtpPass },
        });

        const from = process.env.SMTP_FROM || smtpUser;
        const to = process.env.CONTACT_RECEIVER || smtpUser;

        await transporter.sendMail({
          from,
          to,
          replyTo: `${name} <${email}>`,
          subject: `New contact form submission from ${name}`,
          text: `${message}\n\nFrom: ${name} <${email}>`,
          html: `<p>${String(message).replace(/\n/g, '<br/>')}</p><hr/><p>From: ${name} &lt;${email}&gt;</p>`,
        });

        emailed = true;
        console.log('Contact email sent (server):', { name, email });
      } catch (emailErr) {
        console.error('Failed to send contact email:', emailErr);
        // continue to fallback save below
      }
    }

    if (!emailed) {
      const filePath = process.env.CONTACTS_FILE || path.join(process.cwd(), 'contact_submissions.json');
      try {
        let existing: any[] = [];
        try {
          const raw = await fs.readFile(filePath, 'utf8');
          existing = JSON.parse(raw);
          if (!Array.isArray(existing)) existing = [];
        } catch {
          existing = [];
        }
        existing.push(submission);
        await fs.writeFile(filePath, JSON.stringify(existing, null, 2), 'utf8');
        saved = true;
        console.log('Contact submission saved to file:', filePath);
      } catch (fsErr) {
        console.error('Failed to save contact submission:', fsErr);
        return NextResponse.json({ error: 'Failed to persist submission' }, { status: 500 });
      }
    }

    return NextResponse.json({ success: true, emailed, saved }, { status: 200 });
  } catch (err) {
    console.error('Error in /api/contact route:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}