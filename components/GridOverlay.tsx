type Props = {
  className?: string
  opacity?: number
}

/**
 * Subtle technical grid + radial fade overlay used behind hero sections.
 * Decorative — aria-hidden.
 */
export function GridOverlay({ className = '', opacity = 0.6 }: Props) {
  return (
    <div
      aria-hidden
      className={[
        'pointer-events-none absolute inset-0 bg-grid-faint bg-grid',
        'mask-fade-b',
        className,
      ].join(' ')}
      style={{ opacity }}
    />
  )
}

export function CornerTicks({ className = '' }: { className?: string }) {
  return (
    <>
      <span aria-hidden className={`absolute top-0 left-0 w-3 h-3 border-t border-l border-signal/70 ${className}`} />
      <span aria-hidden className={`absolute top-0 right-0 w-3 h-3 border-t border-r border-signal/70 ${className}`} />
      <span aria-hidden className={`absolute bottom-0 left-0 w-3 h-3 border-b border-l border-signal/70 ${className}`} />
      <span aria-hidden className={`absolute bottom-0 right-0 w-3 h-3 border-b border-r border-signal/70 ${className}`} />
    </>
  )
}
