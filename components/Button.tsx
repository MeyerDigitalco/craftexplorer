import Link from 'next/link'
import { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] px-5 py-3 transition-colors duration-200 select-none'

const variants: Record<Variant, string> = {
  primary:
    'bg-signal text-ink-950 hover:bg-signal-bright border border-signal hover:border-signal-bright',
  secondary:
    'border border-signal/70 text-signal hover:bg-signal hover:text-ink-950',
  ghost:
    'border border-ink-600 text-haze-100 hover:border-haze-300 hover:text-haze-50',
}

type Props = {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
  external?: boolean
}

export function Button({ href, children, variant = 'primary', className = '', external }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children} <span aria-hidden>→</span>
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {children} <span aria-hidden>→</span>
    </Link>
  )
}
