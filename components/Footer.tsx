import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-ink-700 bg-ink-900 mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logos/cet-mark-bw.png" alt="" width={40} height={40} className="h-10 w-auto" />
            <div className="leading-tight">
              <div className="font-display tracking-wider">CRAFTER EXPLORER</div>
              <div className="font-mono text-[10px] tracking-[0.3em] text-signal/80 uppercase">Technology Ltd</div>
            </div>
          </Link>
          <p className="mt-6 max-w-md text-haze-300 text-sm leading-relaxed">
            UK-built command and control software for uncrewed surface vessels.
            Engineered in Dorset for operators worldwide.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Image
              src="/brand/made-in-britain-white.png"
              alt="Made in Britain"
              width={90}
              height={48}
              className="h-12 w-auto opacity-90"
            />
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-haze-400">
              Designed, built &amp; supported in the UK
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal mb-4">Navigate</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="text-haze-200 hover:text-haze-50">Home</Link></li>
            <li><Link href="/products" className="text-haze-200 hover:text-haze-50">Software / C2</Link></li>
            <li><Link href="/about" className="text-haze-200 hover:text-haze-50">About</Link></li>
            <li><Link href="/consulting" className="text-haze-200 hover:text-haze-50">Consulting</Link></li>
            <li><Link href="/contact" className="text-haze-200 hover:text-haze-50">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal mb-4">Contact</div>
          <address className="not-italic text-sm text-haze-200 space-y-2">
            <div>Weymouth, Dorset, United Kingdom</div>
            <div>
              <a href="mailto:info@crafterexplorer.co.uk" className="hover:text-haze-50 underline-offset-4 hover:underline">
                info@crafterexplorer.co.uk
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/company/crafter-explorer-technology"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-haze-50 underline-offset-4 hover:underline"
              >
                LinkedIn →
              </a>
            </div>
          </address>

          <div className="mt-6 flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-[0.22em]">
            <span className="border border-ink-700 px-2 py-1 text-haze-300">ISO 9001</span>
            <span className="border border-ink-700 px-2 py-1 text-haze-300">ISO 27001</span>
            <span className="border border-ink-700 px-2 py-1 text-haze-300">ISO 45001</span>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-700">
        <div className="container-x py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[11px] text-haze-400">
          <div>© {year} CrafterExplorer Technology Ltd. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/legal" className="hover:text-haze-200">Legal Notice</Link>
            <Link href="/privacy" className="hover:text-haze-200">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
