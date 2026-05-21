import type { Metadata } from 'next'
import { Section } from '@/components/Section'

export const metadata: Metadata = {
  title: 'Legal Notice',
  description: 'Legal notice for Crafter Explorer Technology Ltd.',
  alternates: { canonical: '/legal' },
}

export default function LegalPage() {
  return (
    <Section className="pt-32">
      <div className="max-w-3xl">
        <div className="eyebrow mb-6">Legal</div>
        <h1 className="display-2 mb-3">Legal Notice</h1>
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-haze-400 mb-12">
          Last updated: May 2026
        </p>

        <div className="space-y-6 text-haze-200 leading-relaxed">
          <p>
            This website is operated by Crafter Explorer Technology Ltd,
            a company registered in England &amp; Wales.
          </p>

          <div className="grid sm:grid-cols-2 gap-px bg-ink-700 my-8">
            <div className="bg-ink-900 p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-signal mb-2">Company No.</div>
              <div className="font-display text-xl">13734245</div>
            </div>
            <div className="bg-ink-900 p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-signal mb-2">VAT No.</div>
              <div className="font-display text-xl">GB 462 4343 03</div>
            </div>
          </div>

          <h2 className="display-3 mt-12">Registered office</h2>
          <address className="not-italic border-l-2 border-signal/60 pl-5 py-2 text-haze-100">
            18 Teeling Road<br />
            Weymouth<br />
            Dorset, United Kingdom
          </address>

          <h2 className="display-3 mt-12">Contact</h2>
          <div className="border-l-2 border-signal/60 pl-5 py-2 text-haze-100">
            <div>Email: <a className="text-signal hover:text-signal-bright" href="mailto:info@crafterexplorer.co.uk">info@crafterexplorer.co.uk</a></div>
            <div>Website: <a className="text-signal hover:text-signal-bright" href="https://www.crafterexplorer.co.uk">www.crafterexplorer.co.uk</a></div>
          </div>

          <h2 className="display-3 mt-12">Website use</h2>
          <p>
            The information provided on this website is for general information
            purposes only. While we aim to keep content accurate and up to date,
            Crafter Explorer Technology Ltd makes no warranties or representations
            regarding completeness, accuracy or reliability. Use of information on
            this website is at your own risk.
          </p>

          <h2 className="display-3 mt-12">Intellectual property</h2>
          <p>
            Unless otherwise stated, all content on this website — including text,
            graphics, images, logos, branding, documents, software and design
            elements — is owned by or licensed to Crafter Explorer Technology Ltd
            and is protected under UK and international intellectual property laws.
          </p>
          <p>
            Content may not be copied, reproduced, distributed or used for
            commercial purposes without prior written permission.
          </p>

          <h2 className="display-3 mt-12">External links</h2>
          <p>
            This website may contain links to third-party websites. Crafter Explorer
            Technology Ltd is not responsible for the content, accuracy or privacy
            practices of external websites.
          </p>

          <h2 className="display-3 mt-12">Liability</h2>
          <p>
            To the fullest extent permitted by law, Crafter Explorer Technology Ltd
            excludes liability for any loss or damage arising from use of, or
            reliance upon, information contained on this website.
          </p>

          <h2 className="display-3 mt-12">Governing law</h2>
          <p>
            This Legal Notice and any disputes relating to use of this website
            shall be governed by the laws of England and Wales.
          </p>

          <h2 className="display-3 mt-12">Updates</h2>
          <p>
            We reserve the right to update this Legal Notice at any time.
            Changes will be published on this page.
          </p>
        </div>
      </div>
    </Section>
  )
}
