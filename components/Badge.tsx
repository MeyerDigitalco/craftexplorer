import { ReactNode } from 'react'

export function Badge({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={[
        'inline-flex items-center gap-2 border border-ink-700 bg-ink-900/60',
        'px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-haze-200',
        className,
      ].join(' ')}
    >
      {children}
    </span>
  )
}
