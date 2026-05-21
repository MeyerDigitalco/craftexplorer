import type { Metadata } from 'next'
import Image from 'next/image'
import { Section, SectionHeader } from '@/components/Section'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import { GridOverlay } from '@/components/GridOverlay'
import { consultingPillars } from '@/content/site'

export const metadata: Metadata = {
  title: 'Consulting',
  description:
    'Specialist USV consulting — system integration, operations and communications. Bringing autonomous and remote vessel programmes to life, safely.',
  alternates: { canonical: '/consulting' },
}

export default function ConsultingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-ink-700 pt-32 pb-20 md:pt-40 md:pb-28">
        <div aria-hidden className="absolute inset-0 -z-10">
          <Image
            src="/software/remote-ops-centre.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/80 to-ink-950" />
        </div>
        <GridOverlay opacity={0.45} />

        <div className="container-x relative">
          <div className="max-w-4xl">
            <div className="eyebrow mb-6">Consultancy Services</div>
            <h1 className="display-1 text-balance">
              Expertise that <span className="text-signal">de-risks</span> your USV programme.
            </h1>
            <p className="lede mt-8">
              Specialist offshore and USV consulting to support system integration,
              operations and project strategy. We help you bring autonomous and remote
              vessel programmes to life — safely and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <Section>
        <SectionHeader
          eyebrow="Service Pillars"
          title="Three disciplines. One integrated approach."
          intro="From a focused technical engagement to programme-level operational support, our consulting maps to the complexity of modern uncrewed operations."
        />

        <div className="grid lg:grid-cols-3 gap-px bg-ink-700">
          {consultingPillars.map((p, i) => (
            <Reveal key={p.code} delay={i * 80}>
              <article className="bg-ink-900 p-8 h-full">
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal">
                    {p.code} / Pillar
                  </span>
                  <span aria-hidden className="h-px w-12 bg-ink-700" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-4">{p.title}</h3>
                <p className="text-haze-300 leading-relaxed">{p.summary}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* DETAILED CAPABILITY */}
      <Section className="bg-ink-900 border-y border-ink-700">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="eyebrow">What we deliver</div>
            <h2 className="display-2 mt-5 text-balance">Bespoke engagement, deployed.</h2>
            <p className="lede mt-6">
              No two USV programmes look alike. Our consulting wraps around your team —
              filling capability gaps, accelerating delivery, and bringing hard-won
              experience from across the sector.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-ink-700">
            {[
              ['Software architecture', 'Modular, scalable C2 architecture aligned to your fleet and mission profile.'],
              ['Cloud & cyber', 'Cloud integration, cybersecurity hardening, and data governance.'],
              ['Autonomy strategy', 'Tactical and AI-driven behaviour design for single and multi-vessel ops.'],
              ['Mission planning', 'Operational doctrine, mission rehearsal and run-book development.'],
              ['Payload integration', 'Sensor and payload integration for survey, defence and science.'],
              ['Comms & networking', 'Resilient satellite, RF and IP networks for mission-critical links.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-ink-950 p-6">
                <h3 className="font-display text-lg mb-2">{t}</h3>
                <p className="text-sm text-haze-300 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PRINCIPLES */}
      <Section>
        <SectionHeader eyebrow="How we engage" title="Principles, not platitudes." />

        <div className="grid md:grid-cols-3 gap-px bg-ink-700">
          {[
            ['Efficient', 'Lean engagements that respect your timeline and your budget.'],
            ['Empowering', 'We transfer knowledge — your team owns the outcome.'],
            ['Visionary', 'Strategic horizon-scanning aligned to where the sector is heading.'],
          ].map(([t, d]) => (
            <div key={t} className="bg-ink-900 p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal mb-4">Principle</div>
              <div className="font-display text-2xl mb-3">{t}</div>
              <div className="text-sm text-haze-300 leading-relaxed">{d}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden border-t border-ink-700">
        <GridOverlay opacity={0.35} />
        <div className="container-x py-24 md:py-32 text-center">
          <div className="eyebrow justify-center inline-flex">Engage CET</div>
          <h2 className="display-2 mt-6 text-balance max-w-3xl mx-auto">
            Tell us about the programme. We&apos;ll tell you where we can move the needle.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary">Book a Consultation</Button>
          </div>
        </div>
      </section>
    </>
  )
}
