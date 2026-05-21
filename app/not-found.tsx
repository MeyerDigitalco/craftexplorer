import Link from 'next/link'
import { GridOverlay } from '@/components/GridOverlay'

export default function NotFound() {
  return (
    <section className="relative isolate min-h-[70vh] flex items-center overflow-hidden">
      <GridOverlay opacity={0.5} />
      <div className="container-x py-32 text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal">Error · 404</div>
        <h1 className="display-1 mt-6">Signal lost.</h1>
        <p className="lede mt-6 mx-auto">
          The page you were trying to reach is off-station. Let&apos;s get you back to base.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-signal text-ink-950 font-mono text-[11px] uppercase tracking-[0.22em] px-5 py-3 hover:bg-signal-bright transition-colors"
          >
            Return Home <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
