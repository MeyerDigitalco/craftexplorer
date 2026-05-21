import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Section, SectionHeader } from '@/components/Section'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import { GridOverlay, CornerTicks } from '@/components/GridOverlay'
import { Badge } from '@/components/Badge'
import { capabilities, vessels, site } from '@/content/site'

export const metadata: Metadata = {
  title: 'Software / C2',
  description:
    'BlueHelm — UK-built command and control software for uncrewed surface vessels. Modular, certification-ready, hardware-agnostic.',
  alternates: { canonical: '/products' },
}

export default function ProductsPage() {
  return (
    <>
      {/* ───────────────────────────  HERO  ─────────────────────────── */}
      <section className="relative isolate overflow-hidden border-b border-ink-700 pt-32 pb-20 md:pt-40 md:pb-28">
        <div aria-hidden className="absolute inset-0 -z-10">
          <Image
            src="/software/main-screen.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/90 via-ink-950/85 to-ink-950" />
        </div>
        <GridOverlay opacity={0.45} />

        <div className="container-x relative">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="eyebrow mb-6">BlueHelm · Platform</div>
              <h1 className="display-1 text-balance">
                Software that <span className="text-signal">commands the water</span>.
              </h1>
              <p className="lede mt-8">
                A fully integrated C2 platform for uncrewed systems: simulation,
                live vessel control, mission planning and regulatory compliance —
                in one user-friendly stack.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="border border-ink-700 bg-ink-900/60 p-6 backdrop-blur-sm">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal mb-3">Built for</div>
                <ul className="space-y-2 text-sm text-haze-200">
                  <li>· Single &amp; multi-vessel ops</li>
                  <li>· Surface and hybrid surface/subsurface</li>
                  <li>· Research, survey &amp; defence platforms</li>
                  <li>· Certification-aligned deployments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────  PILLAR / VALUE PROP  ─────────────────────────── */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="eyebrow">Why BlueHelm</div>
            <h2 className="display-2 mt-5 text-balance">
              Robust, intuitive, future-proof.
            </h2>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-ink-700">
            {[
              ['Real-time awareness', 'Clear data presentation tuned for operator decision-making under load.'],
              ['Mission management', 'Single or multi-vessel autonomy with deterministic behaviours.'],
              ['Sensor integration', 'Plug-in payloads without complex reconfiguration.'],
              ['Modular architecture', 'Scale across vessel sizes and mission profiles.'],
              ['Certification-ready', 'Aligned with maritime regulatory frameworks from day one.'],
              ['Open by design', 'API-first — your systems, our backbone.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-ink-900 p-6">
                <h3 className="font-display text-lg mb-2">{t}</h3>
                <p className="text-sm text-haze-300 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ───────────────────────────  CAPABILITY MODULES (deep)  ─────────────────────────── */}
      {capabilities.map((c, i) => {
        const reversed = i % 2 === 1
        return (
          <section
            key={c.code}
            id={`capability-${c.code}`}
            className={[
              'border-t border-ink-700 py-20 md:py-28',
              i % 2 === 1 ? 'bg-ink-900' : '',
            ].join(' ')}
          >
            <div className="container-x">
              <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${reversed ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <Reveal className="lg:col-span-7">
                  <div className="relative ticks">
                    <div className="absolute -top-3 left-0 right-0 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-haze-400 pointer-events-none">
                      <span>module / {c.code}</span>
                      <span>{c.title.toLowerCase().replace(/[^a-z]+/g, '_')}.live</span>
                    </div>
                    <div className="relative overflow-hidden border border-ink-700 bg-ink-900">
                      <Image
                        src={c.image}
                        alt={`${c.title} interface`}
                        width={1600}
                        height={1000}
                        className="w-full h-auto"
                        sizes="(min-width: 1024px) 55vw, 100vw"
                      />
                      <CornerTicks />
                    </div>
                  </div>
                </Reveal>

                <div className="lg:col-span-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal mb-4">
                    Module {c.code}
                  </div>
                  <h3 className="display-3 text-balance">{c.title}</h3>
                  <p className="mt-6 text-haze-200 leading-relaxed">{c.summary}</p>
                  <ul className="mt-8 space-y-3 text-sm text-haze-200">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex gap-4">
                        <span aria-hidden className="mt-2.5 h-px w-5 bg-signal/80 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* ───────────────────────────  HARDWARE  ─────────────────────────── */}
      <Section className="border-t border-ink-700">
        <SectionHeader
          eyebrow="Hardware"
          title="Connect any vessel."
          intro="Our hardware kit bridges any USV platform to the BlueHelm control stack — purpose-built, ruggedised, and ready for deployment."
        />

        <div className="grid md:grid-cols-3 gap-px bg-ink-700">
          {[
            { src: '/hardware/a1-box.jpg',     t: 'A1 Control Box', d: 'Mission computer with full BlueHelm stack pre-loaded.' },
            { src: '/hardware/ai-hardware.png', t: 'AI Edge Module', d: 'GPU-accelerated edge compute for on-vessel autonomy.' },
            { src: '/hardware/controller.jpg', t: 'Operator Controller', d: 'Tactical manual override with ergonomic field-grade controls.' },
          ].map(({ src, t, d }) => (
            <div key={t} className="bg-ink-900 p-6">
              <div className="relative aspect-[4/3] mb-5 overflow-hidden border border-ink-700">
                <Image src={src} alt={t} fill className="object-cover" sizes="(min-width: 768px) 30vw, 100vw" />
              </div>
              <h3 className="font-display text-xl mb-2">{t}</h3>
              <p className="text-sm text-haze-300 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ───────────────────────────  USV RANGE  ─────────────────────────── */}
      <Section className="bg-ink-900 border-y border-ink-700">
        <SectionHeader
          eyebrow="USV Range"
          title="A platform of platforms."
          intro="BlueHelm runs across an expanding fleet of test vessels — from compact rapid-deploy craft to defence-grade workboats."
        />

        <div className="grid lg:grid-cols-3 gap-px bg-ink-700">
          {vessels.map((v) => (
            <Reveal key={v.name} className="bg-ink-950">
              <article className="relative h-full">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-ink-700">
                  <Image
                    src={v.image}
                    alt={`${v.name} USV`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge>{v.code}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl tracking-tight">{v.name}</h3>
                  <p className="text-sm text-haze-300 mt-1">{v.role}</p>
                  <dl className="mt-5 grid grid-cols-2 gap-3 text-xs">
                    {v.specs.map(([k, val]) => (
                      <div key={k} className="border border-ink-700 px-3 py-2">
                        <dt className="font-mono text-[9px] uppercase tracking-[0.22em] text-haze-400">{k}</dt>
                        <dd className="mt-0.5 text-haze-100">{val}</dd>
                      </div>
                    ))}
                  </dl>
                  {'spec' in v && v.spec && (
                    <a
                      href={v.spec}
                      className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-signal hover:text-signal-bright"
                    >
                      Download spec sheet <span aria-hidden>↓</span>
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ───────────────────────────  COMPLIANCE  ─────────────────────────── */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="eyebrow">Compliance</div>
            <h2 className="display-2 mt-5 text-balance">
              Certification you can deploy behind.
            </h2>
            <p className="lede mt-6">
              Our software and operational processes are aligned with international
              standards — so your audit, integration and customer onboarding are
              never the bottleneck.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-px bg-ink-700">
            {site.certifications.map((c) => (
              <div key={c.code} className="bg-ink-900 p-8 ticks">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal mb-3">Certified</div>
                <div className="font-display text-3xl tracking-tight">{c.code}</div>
                <div className="mt-3 text-sm text-haze-300">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ───────────────────────────  CTA  ─────────────────────────── */}
      <section className="relative isolate overflow-hidden border-t border-ink-700">
        <GridOverlay opacity={0.35} />
        <div className="container-x py-24 md:py-32">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="eyebrow">Briefing</div>
              <h2 className="display-2 mt-5 text-balance">
                See BlueHelm running live — on your vessel profile.
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-wrap gap-4 lg:justify-end">
              <Button href="/contact" variant="primary">Request a Demo</Button>
              <Link
                href="/consulting"
                className="font-mono text-[11px] uppercase tracking-[0.22em] text-haze-300 hover:text-haze-50 underline-offset-4 hover:underline px-2 py-3"
              >
                Consulting services →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
