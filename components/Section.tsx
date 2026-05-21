import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  id?: string
  as?: keyof JSX.IntrinsicElements
}

export function Section({ children, className = '', id, as = 'section' }: Props) {
  const As = as as any
  return (
    <As id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container-x">{children}</div>
    </As>
  )
}

type HeaderProps = {
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({ eyebrow, title, intro, align = 'left', className = '' }: HeaderProps) {
  return (
    <header
      className={[
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center mx-auto' : '',
        className,
      ].join(' ')}
    >
      {eyebrow && <div className="eyebrow mb-5">{eyebrow}</div>}
      <h2 className="display-2 text-balance max-w-4xl">{title}</h2>
      {intro && <p className="lede mt-6">{intro}</p>}
    </header>
  )
}
