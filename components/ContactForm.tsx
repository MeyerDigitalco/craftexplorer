'use client'

import { useState } from 'react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string>('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body?.error || 'Unable to send message. Please try again.')
      }
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-signal/60 bg-ink-900 p-8 ticks">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal mb-3">Message Received</div>
        <h3 className="font-display text-2xl mb-3">Thank you — we&apos;ll be in touch.</h3>
        <p className="text-haze-300 leading-relaxed">
          A member of our team will respond within one business day.
          For urgent enquiries, email{' '}
          <a href="mailto:info@crafterexplorer.co.uk" className="text-signal hover:text-signal-bright">
            info@crafterexplorer.co.uk
          </a>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <Field name="name"    label="Full name"    required />
        <Field name="company" label="Organisation" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <Field name="email" type="email" label="Email" required />
        <Field name="phone" type="tel" label="Phone (optional)" />
      </div>

      <div>
        <Label htmlFor="topic">Enquiry type</Label>
        <select
          id="topic"
          name="topic"
          required
          className="w-full bg-transparent border border-ink-700 px-4 py-3 text-haze-100 focus:outline-none focus:border-signal/70 transition-colors"
          defaultValue=""
        >
          <option value="" disabled>Select an option…</option>
          <option value="demo">Request a demo</option>
          <option value="consulting">Consulting enquiry</option>
          <option value="partnership">Partnership / integration</option>
          <option value="press">Press / media</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full bg-transparent border border-ink-700 px-4 py-3 text-haze-100 focus:outline-none focus:border-signal/70 transition-colors resize-y"
          placeholder="Tell us about your vessels, mission profile, or programme objectives…"
        />
      </div>

      {/* honeypot */}
      <div className="hidden" aria-hidden>
        <label>Don&apos;t fill this <input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <label className="flex items-start gap-3 text-sm text-haze-300">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 accent-signal"
        />
        <span>
          I have read and understand the{' '}
          <a href="/privacy" className="text-signal hover:text-signal-bright underline-offset-4 hover:underline">
            privacy policy
          </a>{' '}and consent to being contacted about my enquiry.
        </span>
      </label>

      {status === 'error' && (
        <div role="alert" className="border border-alert/60 bg-alert/10 text-sm px-4 py-3 text-haze-100">
          {errorMsg || 'Something went wrong sending your message.'}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center gap-3 bg-signal text-ink-950 font-mono text-[11px] uppercase tracking-[0.22em] px-6 py-4 hover:bg-signal-bright transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
        <span aria-hidden>→</span>
      </button>
    </form>
  )
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block font-mono text-[10px] uppercase tracking-[0.25em] text-haze-400 mb-2">
      {children}
    </label>
  )
}

function Field({
  name,
  label,
  type = 'text',
  required,
}: {
  name: string
  label: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <Label htmlFor={name}>{label}{required && <span className="text-signal ml-1">*</span>}</Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border border-ink-700 px-4 py-3 text-haze-100 focus:outline-none focus:border-signal/70 transition-colors"
      />
    </div>
  )
}
