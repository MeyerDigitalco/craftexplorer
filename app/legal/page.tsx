import type { Metadata } from 'next'
import { Section } from '@/components/Section'

export const metadata: Metadata = {
  title: 'Legal Notice',
  description: 'Legal notice for CrafterExplorer Technology Ltd.',
  alternates: { canonical: '/legal' },
}

export default function LegalPage() {
  return (
    <Section className="pt-32">
      <div className="max-w-3xl">
        <div className="eyebrow mb-6">Legal</div>
        <h1 className="display-2 mb-10">Legal Notice</h1>
        <div className="space-y-6 text-haze-200 leading-relaxed">
          <p>
            CrafterExplorer Technology Ltd is a company registered in England &amp; Wales.
            Registered office: Weymouth, Dorset, United Kingdom.
          </p>
          <h2 className="display-3 mt-10">Contact</h2>
          <p>
            <a className="text-signal" href="mailto:info@crafterexplorer.co.uk">info@crafterexplorer.co.uk</a>
          </p>
          <h2 className="display-3 mt-10">Trademarks &amp; copyright</h2>
          <p>
            All content on this site, including text, graphics, logos, images and software,
            is the property of CrafterExplorer Technology Ltd or its licensors and is
            protected by UK and international copyright law.
          </p>
          <p className="text-haze-400 text-sm mt-12">
            Placeholder notice — please replace with your finalised legal text before launch
            (including company registration number once available).
          </p>
        </div>
      </div>
    </Section>
  )
}
