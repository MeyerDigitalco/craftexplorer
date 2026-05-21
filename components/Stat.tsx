type Props = {
  value: string
  label: string
  unit?: string
}

export function Stat({ value, label, unit }: Props) {
  return (
    <div className="border-l border-ink-700 pl-5 py-2">
      <div className="font-display text-4xl md:text-5xl tracking-tight text-haze-50">
        {value}
        {unit && <span className="ml-1 text-lg text-signal align-top">{unit}</span>}
      </div>
      <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-haze-400">
        {label}
      </div>
    </div>
  )
}
