import type { Metadata } from 'next'
import { Section } from '@/components/Section'
import { GridOverlay } from '@/components/GridOverlay'
import { ContactForm } from '@/components/ContactForm'
import { site } from '@/content/site'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with CrafterExplorer Technology — book a briefing, request a demo, or discuss your USV programme.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-ink-700 pt-32 pb-16 md:pt-40 md:pb-20">
        <GridOverlay opacity={0.4} />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6">Contact</div>
            <h1 className="display-1 text-balance">
              Start a <span className="text-signal">briefing</span>.
            </h1>
            <p className="lede mt-8">
              Whether you&apos;re evaluating C2 software for a new fleet, integrating BlueHelm
              into an existing platform, or scoping a consulting engagement — let&apos;s talk.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-6">Enquiry</div>
            <ContactForm />
          </div>

          <aside className="lg:col-span-5 lg:pl-10 space-y-10">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal mb-3">Direct</div>
              <a
                href={`mailto:${site.email}`}
                className="block font-display text-2xl tracking-tight text-haze-50 hover:text-signal underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal mb-3">Address</div>
              <address className="not-italic text-haze-200 leading-relaxed">
                CrafterExplorer Technology Ltd<br />
                Dorchester<br />
                Dorset, United Kingdom
              </address>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal mb-3">Social</div>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-haze-100 hover:text-signal"
              >
                LinkedIn <span aria-hidden>→</span>
              </a>
            </div>

            <div className="border-t border-ink-700 pt-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal mb-3">Response</div>
              <p className="text-sm text-haze-300 leading-relaxed">
                We respond to all enquiries within one UK business day.
                For active bids or programme-critical timelines, please flag
                in your message and we&apos;ll prioritise accordingly.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  )
}
