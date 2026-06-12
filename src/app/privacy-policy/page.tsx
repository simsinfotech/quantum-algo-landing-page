import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Quantum Algo",
  description: "Privacy Policy for Quantum Algo AI-driven forex trading services.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
      {/* Header */}
      <div className="border-b border-white/10 py-6">
        <div className="max-w-4xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/QA%20logo.png" alt="Quantum Algo" className="h-10 w-auto" />
          </Link>
          <Link
            href="/"
            className="text-sm text-[#B4348C] hover:text-[#B4348C]/80 underline font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "Clash Display, sans-serif" }}
        >
          Privacy Policy
        </h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: June 12, 2026</p>

        <div className="space-y-10 text-gray-300 leading-relaxed text-sm sm:text-base">
          <section>
            <h2
              className="text-xl sm:text-2xl font-semibold text-white mb-3"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              1. Introduction
            </h2>
            <p>
              Quantum Algo, operated by MarketScore (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), is committed to
              protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website and use our AI-driven forex trading
              services.
            </p>
          </section>

          <section>
            <h2
              className="text-xl sm:text-2xl font-semibold text-white mb-3"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              2. Information We Collect
            </h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-white">Personal Information:</strong> Name, email address, phone
                number, and payment details provided during registration or onboarding.
              </li>
              <li>
                <strong className="text-white">Trading Information:</strong> Prop firm account details,
                trading history, and performance data shared with us for account management.
              </li>
              <li>
                <strong className="text-white">Usage Data:</strong> IP address, browser type, device
                information, pages visited, and interaction patterns on our website.
              </li>
              <li>
                <strong className="text-white">Cookies & Tracking:</strong> We use cookies, pixels
                (including Meta Pixel), and similar technologies to analyze site traffic and improve user
                experience.
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-xl sm:text-2xl font-semibold text-white mb-3"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>To provide, operate, and maintain our AI trading services.</li>
              <li>To process onboarding, manage funded accounts, and communicate with you.</li>
              <li>To send service updates, performance reports, and promotional communications.</li>
              <li>To improve our website, algorithms, and user experience.</li>
              <li>To comply with legal obligations and enforce our terms.</li>
              <li>To detect and prevent fraud or unauthorized access.</li>
            </ul>
          </section>

          <section>
            <h2
              className="text-xl sm:text-2xl font-semibold text-white mb-3"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              4. Sharing of Information
            </h2>
            <p className="mb-3">
              We do not sell your personal information. We may share data with:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-white">Service Providers:</strong> Third-party platforms used for
                payment processing, email communications, and analytics.
              </li>
              <li>
                <strong className="text-white">Prop Firms:</strong> Partner prop trading firms as
                necessary to manage your funded accounts.
              </li>
              <li>
                <strong className="text-white">Legal Requirements:</strong> When required by law,
                regulation, or legal process.
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-xl sm:text-2xl font-semibold text-white mb-3"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              5. Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your personal information.
              However, no method of transmission over the Internet or electronic storage is 100% secure.
              While we strive to protect your data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2
              className="text-xl sm:text-2xl font-semibold text-white mb-3"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              6. Data Retention
            </h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes
              outlined in this policy, comply with legal obligations, resolve disputes, and enforce our
              agreements.
            </p>
          </section>

          <section>
            <h2
              className="text-xl sm:text-2xl font-semibold text-white mb-3"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              7. Your Rights
            </h2>
            <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Access, correct, or delete your personal data.</li>
              <li>Withdraw consent for data processing.</li>
              <li>Object to or restrict certain processing activities.</li>
              <li>Request a copy of your data in a portable format.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at the email address provided below.
            </p>
          </section>

          <section>
            <h2
              className="text-xl sm:text-2xl font-semibold text-white mb-3"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              8. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible
              for the privacy practices of these external sites. We encourage you to review their privacy
              policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2
              className="text-xl sm:text-2xl font-semibold text-white mb-3"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this
              page with an updated &quot;Last updated&quot; date. Your continued use of our services after
              changes are posted constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2
              className="text-xl sm:text-2xl font-semibold text-white mb-3"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              10. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:{" "}
              <a
                href="mailto:support@quantumalgo.com"
                className="text-[#B4348C] hover:text-[#B4348C]/80 underline"
              >
                support@quantumalgo.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
