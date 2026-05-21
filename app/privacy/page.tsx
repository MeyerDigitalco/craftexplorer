import type { Metadata } from 'next'
import { Section } from '@/components/Section'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How CrafterExplorer Technology Ltd handles your data.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <Section className="pt-32">
      <div className="max-w-3xl prose-invert">
        <div className="eyebrow mb-6">Privacy</div>
        <h1 className="display-2 mb-10">Privacy Policy</h1>
        <div className="space-y-6 text-haze-200 leading-relaxed">
          <p>
            CrafterExplorer Technology Ltd respects your privacy. This page summarises how
            we handle the personal data you share with us through this website.
          </p>
          <h2 className="display-3 mt-10">Data we collect</h2>
          <p>
            When you submit our contact form we collect your name, organisation, email
            address, phone number (if provided), enquiry type and message content. We use
            this information solely to respond to your enquiry.
          </p>
          <h2 className="display-3 mt-10">How we use it</h2>
          <p>
            Submissions are delivered to <a className="text-signal" href="mailto:info@crafterexplorer.co.uk">info@crafterexplorer.co.uk</a>{' '}
            via Resend, our email delivery provider. We do not sell, rent or share your
            data with third parties for marketing purposes.
          </p>
          <h2 className="display-3 mt-10">Your rights</h2>
          <p>
            Under UK GDPR you have the right to access, correct or request deletion of
            your personal data. To exercise these rights, email
            <a className="text-signal" href="mailto:info@crafterexplorer.co.uk"> info@crafterexplorer.co.uk</a>.
          </p>
          <p className="text-haze-400 text-sm mt-12">
            This is a placeholder policy — please replace with your finalised legal copy
            before launch.
          </p>
        </div>
      </div>
    </Section>
  )
}
