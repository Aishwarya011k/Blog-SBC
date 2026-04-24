import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Privacy Policy', href: '/privacy-policy' }
          ]} />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: April 2024</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          <p className="text-gray-600">
            Smart Brain Creations ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and blog.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
          <p className="text-gray-600">We may collect information about you in various ways, including:</p>
          <ul className="text-gray-600 ml-6">
            <li><strong>Email Subscriptions:</strong> When you subscribe to our newsletter, we collect your email address</li>
            <li><strong>Contact Forms:</strong> If you contact us, we collect the information you provide</li>
            <li><strong>Usage Data:</strong> We may automatically collect information about your visit through cookies and similar technologies</li>
            <li><strong>Analytics:</strong> We use Google Analytics to understand how visitors use our site</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-600">We use the information we collect for various purposes:</p>
          <ul className="text-gray-600 ml-6">
            <li>To improve and enhance our blog and services</li>
            <li>To send you newsletters and updates (if you've subscribed)</li>
            <li>To respond to your inquiries and support requests</li>
            <li>To analyze site usage and trends</li>
            <li>To maintain the security and integrity of our website</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Google AdSense</h2>
          <p className="text-gray-600">
            Our website uses Google AdSense to serve advertisements. Google uses cookies and other technologies to deliver personalized ads based on your browsing history. You can opt out of personalized ads by visiting Google's Ads Settings.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Cookies</h2>
          <p className="text-gray-600">
            We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings, but this may affect the functionality of some features.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Third-Party Links</h2>
          <p className="text-gray-600">
            Our blog may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Data Security</h2>
          <p className="text-gray-600">
            We implement appropriate security measures to protect your information. However, no method of transmission over the internet is completely secure. We cannot guarantee absolute security of your data.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Your Rights</h2>
          <p className="text-gray-600">
            You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at the information provided below.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Contact Us</h2>
          <p className="text-gray-600">
            If you have questions about this Privacy Policy or our privacy practices, please contact us:
          </p>
          <p className="text-gray-600">
            Smart Brain Creations<br/>
            Bangalore, Karnataka<br/>
            Email: contact@smartbraincreations.com<br/>
            Website: <a href="https://smartbraincreations.com" className="text-primary hover:underline">smartbraincreations.com</a>
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Changes to This Policy</h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with an updated "Last updated" date.
          </p>

          <div className="mt-12 p-6 bg-purple-50 rounded-lg border border-primary">
            <p className="text-gray-700">
              By continuing to use our website and blog, you acknowledge that you have read and agree to be bound by this Privacy Policy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
