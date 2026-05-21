import Image from 'next/image'
import Link from 'next/link'
import { Section, SectionHeader } from '@/components/Section'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import { GridOverlay, CornerTicks } from '@/components/GridOverlay'
import { Stat } from '@/components/Stat'
import { Badge } from '@/components/Badge'
import { capabilities, stats, site } from '@/content/site'

export default function HomePage() {
  return (
    <>
      {/* ───────────────────────────  HERO  ─────────────────────────── */}
      <section className="relative isolate min-h-[100svh] flex items-end overflow-hidden">
        {/* background video */}
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
          autoPlay
          muted
          loop
          playsInline
          poster="/vessels/usv-action-1.jpg"
        >
          <source src="/videos/usv-fleet.mp4" type="video/mp4" />
        </video>
        {/* dark gradient overlay */}
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950/85 via-ink-950/60 to-ink-950" />
        <GridOverlay opacity={0.5} />

        <div className="container-x relative w-full pb-20 md:pb-28 pt-32">
          <div className="max-w-5xl">
            <div className="eyebrow mb-6">UK · Maritime Autonomy · C2</div>
            <h1 className="display-1 text-balance">
              Command &amp; control
              <br />
              <span className="text-signal">for the uncrewed ocean.</span>
            </h1>
            <p className="lede mt-8 max-w-2xl">
              We design and deliver next-generation USV control systems that simplify
              remote operations and enable safer, smarter missions at sea — engineered
              and proven in the United Kingdom.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/products" variant="primary">Explore the Platform</Button>
              <Button href="/contact" variant="secondary">Request a Demo</Button>
            </div>

            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 max-w-3xl">
              {stats.map((s) => (
                <Stat key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-haze-400">
          <span>Scroll</span>
          <span aria-hidden className="block w-px h-8 bg-haze-400/60" />
        </div>
      </section>

      {/* ───────────────────────────  MISSION STATEMENT  ─────────────────────────── */}
      <Section className="border-t border-ink-700">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-4">
            <div className="eyebrow">Mission</div>
            <h2 className="display-2 mt-5 text-balance">
              Turning software into <span className="text-signal">capability</span>.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-haze-200 leading-relaxed">
            <p>
              Software is only valuable when it translates into real-world capability.
              Our team understands the demands of offshore operations and the realities
              of autonomy at sea, and we design systems that are robust, practical, and
              intuitive — not laboratory experiments.
            </p>
            <p className="text-haze-400">
              From single-vessel survey to multi-vessel defence operations, our C2 stack
              integrates seamlessly with vessels and workflows to deliver safe, effective,
              and scalable USV operations.
            </p>
          </div>
        </div>
      </Section>

      {/* ───────────────────────────  CAPABILITIES  ─────────────────────────── */}
      <Section id="capabilities" className="bg-ink-900 border-y border-ink-700">
        <SectionHeader
          eyebrow="Capabilities"
          title={<>A single platform across the mission lifecycle.</>}
          intro="From command and control through simulation and data — engineered to integrate, scale, and certify."
        />

        <div className="grid md:grid-cols-3 gap-px bg-ink-700">
          {capabilities.map((c, i) => (
            <Reveal key={c.code} delay={i * 80}>
              <article className="relative bg-ink-900 p-8 h-full group">
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal">
                    {c.code} / Capability
                  </span>
                  <span aria-hidden className="h-px w-12 bg-ink-700 group-hover:bg-signal/70 transition-colors" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-4">{c.title}</h3>
                <p className="text-haze-300 leading-relaxed mb-6 min-h-[5.5rem]">{c.summary}</p>
                <ul className="space-y-2 text-sm text-haze-200">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span aria-hidden className="mt-2 inline-block h-px w-3 bg-signal/70 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/products" variant="secondary">See the Full Platform</Button>
        </div>
      </Section>

      {/* ───────────────────────────  PRODUCT SHOWCASE  ─────────────────────────── */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="eyebrow">BlueHelm</div>
            <h2 className="display-2 mt-5 text-balance">
              One operator. <span className="text-signal">Many vessels.</span>
            </h2>
            <p className="lede mt-6">
              Our flagship C2 software unifies live vessel control, mission planning,
              autonomy and certification into a single, user-friendly platform.
              Operate any vessel, anywhere.
            </p>

            <ul className="mt-8 space-y-4 text-haze-200">
              {[
                'Hardware-agnostic — integrates with any USV',
                'Modular architecture, scales across fleets',
                'Certification-ready software aligned to maritime frameworks',
                'Real-time telemetry with clear, operator-first UI',
              ].map((b) => (
                <li key={b} className="flex gap-4">
                  <span aria-hidden className="mt-3 h-px w-6 bg-signal/80 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button href="/products" variant="primary">Software Systems</Button>
            </div>
          </div>

          <Reveal as="div" className="lg:col-span-7 relative ticks">
            <div className="absolute -top-3 left-0 right-0 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-haze-400 pointer-events-none">
              <span>blueHelm.exe / live</span>
              <span>vsl.0421 · 51°36′N 002°27′W</span>
            </div>
            <div className="relative overflow-hidden border border-ink-700 bg-ink-900">
              <Image
                src="/software/main-screen.jpg"
                alt="BlueHelm command and control interface — live vessel telemetry"
                width={1600}
                height={900}
                className="w-full h-auto"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
              <CornerTicks />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {['/software/ecdis.jpg', '/software/position-hold.jpg', '/software/vision.jpg'].map((src, i) => (
                <div key={src} className="relative overflow-hidden border border-ink-700 bg-ink-900">
                  <Image
                    src={src}
                    alt=""
                    width={600}
                    height={360}
                    className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
                    sizes="20vw"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ───────────────────────────  UK / MADE IN BRITAIN  ─────────────────────────── */}
      <Section className="border-y border-ink-700 bg-ink-900">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="eyebrow">Provenance</div>
            <h2 className="display-2 mt-5 text-balance">
              Designed, built &amp; supported in the United Kingdom.
            </h2>
            <p className="lede mt-6">
              CET is headquartered in Weymouth, Dorset — on the south coast of England.
              Every line of code, every system integration, every customer briefing
              comes from a single sovereign team.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Badge>Sovereign Capability</Badge>
              <Badge>UK Supply Chain</Badge>
              <Badge>Direct Engineering Support</Badge>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-8">
            <Image
              src="/brand/made-in-britain-white.png"
              alt="Made in Britain"
              width={220}
              height={120}
              className="h-24 w-auto"
            />
            <div className="grid grid-cols-3 gap-3 w-full">
              {site.certifications.map((c) => (
                <div key={c.code} className="border border-ink-700 p-4 text-center">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-signal">{c.code}</div>
                  <div className="mt-2 text-xs text-haze-300 leading-tight">{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ───────────────────────────  VERTICALS  ─────────────────────────── */}
      <Section>
        <SectionHeader
          eyebrow="Where we operate"
          title="From defence to deep ocean."
          intro="Practical engineering for the missions that matter — survey, security, science and supply."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-700">
          {[
            { t: 'Defence', d: 'Persistent surveillance, force multiplication, sovereign maritime capability.' },
            { t: 'Offshore Energy', d: 'Wind farm survey, asset inspection, environmental monitoring.' },
            { t: 'Hydrographic Survey', d: 'High-precision bathymetry and seafloor mapping.' },
            { t: 'Research & Science', d: 'Persistent autonomy platforms for marine science.' },
          ].map(({ t, d }, i) => (
            <Reveal key={t} delay={i * 60}>
              <div className="bg-ink-950 p-8 h-full">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal mb-4">
                  Sector / {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display text-xl tracking-tight mb-3">{t}</h3>
                <p className="text-sm text-haze-300 leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ───────────────────────────  CTA  ─────────────────────────── */}
      <section className="relative isolate overflow-hidden border-t border-ink-700">
        <div aria-hidden className="absolute inset-0 -z-10 bg-radial-fade" />
        <GridOverlay opacity={0.35} />
        <div className="container-x py-24 md:py-32 text-center">
          <div className="eyebrow justify-center inline-flex">Let&apos;s talk</div>
          <h2 className="display-2 mt-6 text-balance max-w-3xl mx-auto">
            Ready to put your operation on the water — with confidence?
          </h2>
          <p className="lede mt-6 mx-auto text-center">
            Book a private briefing with our engineering team to explore how BlueHelm
            fits your fleet, your mission, and your compliance environment.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary">Request a Briefing</Button>
            <Link
              href={`mailto:${site.email}`}
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-haze-300 hover:text-haze-50 underline-offset-4 hover:underline px-2 py-3"
            >
              {site.email}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
