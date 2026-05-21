import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-ink-700 bg-ink-900 mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-12">
        {/* Brand + provenance */}
        <div className="md:col-span-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logos/cet-mark-white.png" alt="" width={80} height={80} className="h-10 w-auto" />
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

        {/* Navigate */}
        <div className="md:col-span-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal mb-4">Navigate</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="text-haze-200 hover:text-haze-50">Home</Link></li>
            <li><Link href="/products" className="text-haze-200 hover:text-haze-50">Software / C2</Link></li>
            <li><Link href="/about" className="text-haze-200 hover:text-haze-50">About</Link></li>
            <li><Link href="/consulting" className="text-haze-200 hover:text-haze-50">Consulting</Link></li>
            <li><Link href="/contact" className="text-haze-200 hover:text-haze-50">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal mb-4">Contact</div>
          <address className="not-italic text-sm text-haze-200 space-y-2">
            <div>Dorchester, Dorset, United Kingdom</div>
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

          <div className="mt-6 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.22em]">
            <span className="border border-ink-700 px-2 py-1 text-haze-300">ISO 9001</span>
            <span className="border border-ink-700 px-2 py-1 text-haze-300">ISO 27001</span>
            <span className="border border-ink-700 px-2 py-1 text-haze-300">ISO 45001</span>
          </div>
        </div>

        {/* Embedded location map */}
        <div className="md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal mb-4">Location</div>
          <div className="relative border border-ink-700 overflow-hidden ticks">
            <iframe
              title="CET location — Dorchester, Dorset, UK"
              src="https://www.google.com/maps?q=Dorchester%2C+Dorset%2C+UK&hl=en&z=11&output=embed"
              width="100%"
              height="180"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full block grayscale contrast-110 brightness-75 hover:brightness-100 hover:grayscale-0 transition-all duration-500"
              style={{ border: 0, filter: 'invert(0.92) hue-rotate(180deg) brightness(0.95) contrast(0.9)' }}
            />
          </div>
          <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-haze-400">
            50°42′N · 02°26′W · Dorset, UK
          </div>
        </div>
      </div>

      {/* Bottom bar — company numbers + agency credit */}
      <div className="border-t border-ink-700">
        <div className="container-x py-6 grid gap-6 md:grid-cols-12 items-center">
          <div className="md:col-span-7 font-mono text-[10.5px] uppercase tracking-[0.2em] text-haze-400 leading-relaxed">
            © {year} Crafter Explorer Technology Ltd. All rights reserved.<br className="hidden sm:block" />
            <span className="text-haze-500">
              Registered in England &amp; Wales No.{' '}
              <span className="text-haze-200">13734245</span>
              {' · '}VAT No.{' '}
              <span className="text-haze-200">GB 462 4343 03</span>
            </span>
          </div>

          <div className="md:col-span-5 flex flex-wrap items-center gap-x-6 gap-y-3 md:justify-end font-mono text-[10.5px] uppercase tracking-[0.2em] text-haze-400">
            <Link href="/legal" className="hover:text-haze-200">Legal Notice</Link>
            <Link href="/privacy" className="hover:text-haze-200">Privacy</Link>
            <a
              href="https://meyerdigitalco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 hover:text-haze-100"
              aria-label="Website by Meyer Digital Co."
            >
              <span className="text-haze-500 group-hover:text-haze-300">Proudly built by</span>
              <Image
                src="/brand/meyer-digital-co.png"
                alt="Meyer Digital Co."
                width={1024}
                height={1024}
                className="h-8 w-8 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-haze-300 group-hover:text-haze-50 normal-case tracking-normal font-sans text-xs hidden sm:inline">
                Meyer Digital Co.
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
