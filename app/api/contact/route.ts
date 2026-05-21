import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const Payload = z.object({
  name: z.string().min(2).max(120),
  company: z.string().min(1).max(200),
  email: z.string().email().max(200),
  phone: z.string().max(40).optional().or(z.literal('')),
  topic: z.enum(['demo', 'consulting', 'partnership', 'press', 'other']),
  message: z.string().min(10).max(5000),
  consent: z.union([z.literal('on'), z.literal('true'), z.boolean()]),
  // honeypot — checked after parse; permissive here so we can silent-accept bots
  website: z.string().max(2000).optional(),
})

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = Payload.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Please check the form fields and try again.' },
      { status: 400 },
    )
  }

  // Honeypot triggered (bot)
  if (parsed.data.website && parsed.data.website.length > 0) {
    // Silently accept so bots can't probe.
    return NextResponse.json({ ok: true })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL || 'info@crafterexplorer.co.uk'
  const from = process.env.CONTACT_FROM_EMAIL || 'website@crafterexplorer.co.uk'

  if (!apiKey) {
    // Don't 500 in dev — just log and pretend we sent.
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[contact] RESEND_API_KEY not set — skipping email send.')
      console.log('[contact] payload:', parsed.data)
      return NextResponse.json({ ok: true, dev: true })
    }
    return NextResponse.json(
      { error: 'Email service is not configured.' },
      { status: 500 },
    )
  }

  const resend = new Resend(apiKey)
  const { name, company, email, phone, topic, message } = parsed.data

  const subject = `CET website enquiry — ${topic} — ${company}`
  const html = `
    <h2 style="font-family:Arial,sans-serif;color:#0B0E13">New website enquiry</h2>
    <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
      <tr><td style="padding:4px 12px 4px 0;color:#6b7280">Name</td><td><strong>${escapeHtml(name)}</strong></td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#6b7280">Organisation</td><td>${escapeHtml(company)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#6b7280">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
      ${phone ? `<tr><td style="padding:4px 12px 4px 0;color:#6b7280">Phone</td><td>${escapeHtml(phone)}</td></tr>` : ''}
      <tr><td style="padding:4px 12px 4px 0;color:#6b7280">Topic</td><td>${escapeHtml(topic)}</td></tr>
    </table>
    <h3 style="font-family:Arial,sans-serif;color:#0B0E13;margin-top:24px">Message</h3>
    <pre style="font-family:inherit;white-space:pre-wrap;font-size:14px;line-height:1.5;color:#111827">${escapeHtml(message)}</pre>
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0" />
    <p style="font-family:Arial,sans-serif;font-size:12px;color:#6b7280">
      Sent from crafterexplorer.co.uk · ${new Date().toISOString()}
    </p>
  `
  const text = [
    `New website enquiry`,
    ``,
    `Name: ${name}`,
    `Organisation: ${company}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    `Topic: ${topic}`,
    ``,
    `Message:`,
    message,
    ``,
    `— Sent from crafterexplorer.co.uk`,
  ].filter(Boolean).join('\n')

  try {
    const { error } = await resend.emails.send({
      from: `CET Website <${from}>`,
      to: [to],
      replyTo: email,
      subject,
      html,
      text,
    })
    if (error) {
      console.error('[contact] resend error:', error)
      return NextResponse.json({ error: 'Email delivery failed.' }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] unexpected error:', err)
    return NextResponse.json({ error: 'Unexpected error.' }, { status: 500 })
  }
}
