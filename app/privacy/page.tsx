import type { Metadata } from 'next'
import { Section } from '@/components/Section'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How CrafterExplorer Technology Ltd handles your personal data.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <Section className="pt-32">
      <div className="max-w-3xl">
        <div className="eyebrow mb-6">Privacy</div>
        <h1 className="display-2 mb-3">Privacy Policy</h1>
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-haze-400 mb-12">
          Last updated: May 2026
        </p>

        <div className="space-y-6 text-haze-200 leading-relaxed">
          <p>
            Crafter Explorer Technology Ltd is committed to protecting your privacy
            and handling your personal information responsibly.
          </p>

          <h2 className="display-3 mt-12">Information we collect</h2>
          <p>When you contact us through our website, we may collect:</p>
          <ul className="space-y-2 pl-5 list-disc marker:text-signal/70">
            <li>Name</li>
            <li>Company or organisation name (if provided)</li>
            <li>Email address</li>
            <li>Telephone number (if provided)</li>
            <li>Enquiry details and message content</li>
            <li>Technical information such as IP address, browser type or website usage data (through cookies or analytics, where applicable)</li>
          </ul>

          <h2 className="display-3 mt-12">How we use your information</h2>
          <p>We use your information to:</p>
          <ul className="space-y-2 pl-5 list-disc marker:text-signal/70">
            <li>Respond to enquiries and provide requested information</li>
            <li>Communicate regarding products, services or projects you have asked about</li>
            <li>Improve website performance and user experience</li>
            <li>Meet legal or regulatory obligations where required</li>
          </ul>
          <p>We do not sell or rent personal information to third parties.</p>

          <h2 className="display-3 mt-12">Data storage and sharing</h2>
          <p>
            Contact form submissions may be processed by third-party providers used
            to operate our website and email systems, including email delivery services.
            These providers only process data on our behalf.
          </p>

          <h2 className="display-3 mt-12">How long we keep data</h2>
          <p>
            We retain enquiry information only for as long as reasonably necessary
            for business, legal or operational purposes.
          </p>

          <h2 className="display-3 mt-12">Your rights</h2>
          <p>Under UK GDPR, you have rights relating to your personal data, including the right to:</p>
          <ul className="space-y-2 pl-5 list-disc marker:text-signal/70">
            <li>Request access to your data</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your data where applicable</li>
            <li>Object to certain processing activities</li>
          </ul>
          <p>To exercise these rights, contact:</p>
          <div className="border-l-2 border-signal/60 pl-5 py-2 text-haze-100">
            <div>Email: <a className="text-signal hover:text-signal-bright" href="mailto:info@crafterexplorer.co.uk">info@crafterexplorer.co.uk</a></div>
            <div>Company: Crafter Explorer Technology Ltd</div>
            <div>Website: <a className="text-signal hover:text-signal-bright" href="https://www.crafterexplorer.co.uk">www.crafterexplorer.co.uk</a></div>
          </div>

          <h2 className="display-3 mt-12">Cookies</h2>
          <p>
            Our website may use cookies or analytics tools to improve performance
            and understand website usage. You can manage cookie preferences through
            your browser settings.
          </p>

          <h2 className="display-3 mt-12">Changes to this policy</h2>
          <p>
            We may update this Privacy Policy periodically. Any updates will be
            published on this page.
          </p>
        </div>
      </div>
    </Section>
  )
}
