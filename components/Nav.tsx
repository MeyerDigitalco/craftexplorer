'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Software / C2' },
  { href: '/about', label: 'About' },
  { href: '/consulting', label: 'Consulting' },
  { href: '/contact', label: 'Contact' },
]

export function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={[
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-md border-b border-ink-700/60'
          : 'bg-transparent border-b border-transparent',
      ].join(' ')}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="group flex items-center gap-3" aria-label="CrafterExplorer Technology — home">
          <Image
            src="/logos/cet-mark-white.png"
            alt=""
            width={64}
            height={64}
            priority
            className="h-8 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-sm tracking-wider text-haze-100">CRAFTER EXPLORER</span>
            <span className="font-mono text-[10px] tracking-[0.3em] text-signal/80 uppercase">Technology Ltd</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  'relative px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] transition-colors',
                  active ? 'text-signal' : 'text-haze-200 hover:text-haze-50',
                ].join(' ')}
              >
                {l.label}
                {active && (
                  <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-signal" aria-hidden />
                )}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="ml-3 inline-flex items-center gap-2 border border-signal/70 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-signal hover:bg-signal hover:text-ink-950 transition-colors"
          >
            Request Demo
            <span aria-hidden>→</span>
          </Link>
        </nav>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
        >
          <span className={`block h-px w-6 bg-haze-100 transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block h-px w-6 bg-haze-100 transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 bg-haze-100 transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* mobile drawer */}
      <div
        className={[
          'lg:hidden overflow-hidden bg-ink-950/95 backdrop-blur-md border-b border-ink-700 transition-[max-height] duration-300 ease-out',
          open ? 'max-h-[80vh]' : 'max-h-0',
        ].join(' ')}
      >
        <nav aria-label="Mobile" className="container-x py-6 flex flex-col gap-1">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  'py-3 border-b border-ink-700/60 font-mono text-xs uppercase tracking-[0.22em]',
                  active ? 'text-signal' : 'text-haze-100',
                ].join(' ')}
              >
                {l.label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center justify-center gap-2 border border-signal/70 px-4 py-3 font-mono text-xs uppercase tracking-[0.22em] text-signal"
          >
            Request Demo <span aria-hidden>→</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
