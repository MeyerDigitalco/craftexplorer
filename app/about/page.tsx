import type { Metadata } from 'next'
import Image from 'next/image'
import { Section, SectionHeader } from '@/components/Section'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import { GridOverlay, CornerTicks } from '@/components/GridOverlay'
import { Stat } from '@/components/Stat'
import { team, stats, site } from '@/content/site'

export const metadata: Metadata = {
  title: 'About',
  description:
    'CrafterExplorer Technology — a UK-based team of USV specialists building command and control systems for the autonomous maritime era.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-ink-700 pt-32 pb-20 md:pt-40 md:pb-28">
        <div aria-hidden className="absolute inset-0 -z-10">
          <Image
            src="/team/peter-walker-usv.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/80 to-ink-950" />
        </div>
        <GridOverlay opacity={0.4} />

        <div className="container-x relative">
          <div className="max-w-4xl">
            <div className="eyebrow mb-6">About CET</div>
            <h1 className="display-1 text-balance">
              A team that has built USV companies — <span className="text-signal">and now builds the software the industry runs on</span>.
            </h1>
            <p className="lede mt-8">
              CrafterExplorer Technology is a UK-based team of industry-leading specialists
              dedicated to advancing the capability and safety of uncrewed surface vessels.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <Section>
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <div className="eyebrow">Origin</div>
            <h2 className="display-2 mt-5 text-balance">From the water, for the water.</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-haze-200 leading-relaxed">
            <p>
              Our people come from across the USV industry — designers, software engineers,
              system integrators, vessel operators and marine technology experts. Many have
              worked as freelancers and contractors across the sector; some have joined us
              full-time, bringing deep experience across vessel design, control systems,
              autonomy and regulatory compliance.
            </p>
            <p>
              Founded by Peter Walker, a recognised innovator in the USV sector, we combine
              practical engineering with a drive for continuous improvement. We&apos;ve built
              USV companies from start-ups into multi-million-pound, world-leading brands —
              and we have personally won industry awards for our work.
            </p>
            <p className="text-haze-400">
              At CET we believe in practical, reliable, user-friendly systems that empower
              operators while ensuring safety and regulatory alignment. Whether the mission
              is environmental monitoring, offshore renewables, defence, or commercial survey,
              we are committed to delivering best-in-class technology that shapes the future of
              autonomous maritime operations.
            </p>
          </div>
        </div>
      </Section>

      {/* STATS */}
      <section className="border-y border-ink-700 bg-ink-900">
        <div className="container-x py-14 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10">
          {stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <Section>
        <SectionHeader
          eyebrow="Leadership"
          title="The people behind the platform."
        />

        <div className="grid grid-cols-1 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <article className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                <div className="lg:col-span-5 relative ticks">
                  <div className="relative aspect-[4/5] overflow-hidden border border-ink-700 bg-ink-900">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="(min-width: 1024px) 40vw, (min-width: 640px) 60vw, 100vw"
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <CornerTicks />
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal">{m.role}</div>
                  <h3 className="font-display text-4xl lg:text-5xl tracking-tight mt-2">{m.name}</h3>
                  <p className="mt-6 text-haze-300 leading-relaxed text-base lg:text-lg">{m.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WHY CET? */}
      <Section className="border-t border-ink-700">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="eyebrow">Why CET?</div>
            <h2 className="display-2 mt-5 text-balance">
              Built by <span className="text-signal">operators</span>. Designed by <span className="text-signal">engineers</span>.
            </h2>
            <p className="lede mt-6">
              We&apos;re not a startup chasing a market — we&apos;ve worked in
              this one for years. Every feature is the answer to a problem
              we&apos;ve faced on the water ourselves.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-px bg-ink-700">
              {[
                'Real-world offshore experience',
                'Proven USV deployments',
                'Military & commercial applications',
                'UK designed and developed',
                'Vessel-agnostic platform',
                'Developed in accordance with recognised ISO software engineering standards',
              ].map((item, i) => (
                <li key={item} className="bg-ink-950 p-6 flex items-start gap-4 ticks">
                  <span aria-hidden className="mt-0.5 flex-shrink-0 inline-flex items-center justify-center w-6 h-6 border border-signal/70 text-signal">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-signal mb-1">
                      {String(i + 1).padStart(2, '0')} / Capability
                    </div>
                    <div className="font-display text-base lg:text-lg text-haze-50 leading-snug">
                      {item}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* PHILOSOPHY */}
      <Section className="bg-ink-900 border-y border-ink-700">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="eyebrow">Philosophy</div>
            <h2 className="display-2 mt-5 text-balance">
              Turning software into <span className="text-signal">capability</span>.
            </h2>
            <p className="lede mt-6">
              We believe software is only valuable when it translates into real-world
              capability. Our team&apos;s deep industry experience means we understand
              the demands of offshore operations and the challenges of autonomy at sea.
            </p>
            <p className="mt-4 text-haze-300 leading-relaxed">
              It&apos;s not just about writing code — it&apos;s about enabling our customers
              to achieve more on the water with confidence.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-px bg-ink-700">
              {[
                ['Practical', 'We deploy what works, not what looks clever on a slide.'],
                ['Reliable', 'Systems that perform under real maritime conditions.'],
                ['Intuitive', 'Operators succeed without thick manuals or specialist training.'],
                ['Compliant', 'Designed around regulatory frameworks from day one.'],
              ].map(([t, d]) => (
                <div key={t} className="bg-ink-950 p-6">
                  <div className="font-display text-xl mb-2">{t}</div>
                  <div className="text-sm text-haze-300 leading-relaxed">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden border-t border-ink-700">
        <GridOverlay opacity={0.35} />
        <div className="container-x py-24 md:py-32 text-center">
          <div className="eyebrow justify-center inline-flex">Work with us</div>
          <h2 className="display-2 mt-6 text-balance max-w-3xl mx-auto">
            We&apos;re looking for partners — operators, integrators, and missions worth building for.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary">Start a Conversation</Button>
            <Button href={site.linkedin} variant="secondary" external>LinkedIn</Button>
          </div>
        </div>
      </section>
    </>
  )
}
