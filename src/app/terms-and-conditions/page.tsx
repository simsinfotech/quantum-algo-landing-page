import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Quantum Algo",
  description: "Terms and Conditions for Quantum Algo AI-driven forex trading services.",
};

export default function TermsAndConditions() {
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
          Terms & Conditions
        </h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: June 12, 2026</p>

        <div className="space-y-10 text-gray-300 leading-relaxed text-sm sm:text-base">
          <section>
            <h2
              className="text-xl sm:text-2xl font-semibold text-white mb-3"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using Quantum Algo&apos;s website and services, operated by MarketScore,
              you agree to be bound by these Terms & Conditions. If you do not agree with any part of
              these terms, you must not use our services.
            </p>
          </section>

          <section>
            <h2
              className="text-xl sm:text-2xl font-semibold text-white mb-3"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              2. Description of Services
            </h2>
            <p>
              Quantum Algo provides AI-driven algorithmic forex trading services, including but not
              limited to: automated trade execution on funded prop firm accounts, trading strategy
              development, account management, and related consulting. Our algorithms are designed to
              trade forex markets using momentum-based strategies with controlled risk parameters.
            </p>
          </section>

          <section>
            <h2
              className="text-xl sm:text-2xl font-semibold text-white mb-3"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              3. Eligibility
            </h2>
            <p>
              You must be at least 18 years of age and have the legal capacity to enter into binding
              agreements in your jurisdiction to use our services. By using Quantum Algo, you represent
              and warrant that you meet these requirements.
            </p>
          </section>

          <section>
            <h2
              className="text-xl sm:text-2xl font-semibold text-white mb-3"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              4. Risk Disclosure
            </h2>
            <p className="mb-3">
              <strong className="text-white">
                Trading forex and other financial instruments involves significant risk and may not be
                suitable for all individuals.
              </strong>
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                Past performance is not indicative of future results. All trading strategies, including
                those powered by AI, carry inherent risks.
              </li>
              <li>
                You acknowledge that losses can occur and that Quantum Algo does not guarantee profits or
                specific returns.
              </li>
              <li>
                While our algorithms target low drawdown (1-5%), actual performance may vary and
                drawdowns may exceed historical ranges under unusual market conditions.
              </li>
              <li>
                You should only use capital you can afford to lose and should seek independent financial
                advice if necessary.
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-xl sm:text-2xl font-semibold text-white mb-3"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              5. Prop Firm Accounts
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                Quantum Algo facilitates access to funded prop trading accounts through partner firms.
                The prop firm&apos;s own terms and conditions also apply to your funded account.
              </li>
              <li>
                We are not responsible for decisions, policies, or actions taken by third-party prop
                firms, including account termination, payout delays, or rule changes.
              </li>
              <li>
                Account funding and profit-sharing arrangements are subject to the specific terms agreed
                upon during your onboarding.
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-xl sm:text-2xl font-semibold text-white mb-3"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              6. Fees and Payments
            </h2>
            <p>
              Any fees, charges, or profit-sharing structures will be clearly communicated to you before
              you commit to our services. All payments are processed through secure third-party payment
              providers. Refund policies, if applicable, will be specified at the time of purchase.
            </p>
          </section>

          <section>
            <h2
              className="text-xl sm:text-2xl font-semibold text-white mb-3"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              7. Intellectual Property
            </h2>
            <p>
              All content, algorithms, strategies, branding, and materials on this website are the
              intellectual property of Quantum Algo / MarketScore. You may not reproduce, distribute,
              reverse-engineer, or create derivative works from any of our proprietary trading algorithms,
              systems, or content without prior written consent.
            </p>
          </section>

          <section>
            <h2
              className="text-xl sm:text-2xl font-semibold text-white mb-3"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              8. User Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                You agree to provide accurate and truthful information during registration and
                onboarding.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your account credentials.
              </li>
              <li>
                You agree not to use our services for any unlawful purpose or in violation of any
                applicable regulations.
              </li>
              <li>
                You will not attempt to interfere with, disrupt, or reverse-engineer our trading
                algorithms or systems.
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-xl sm:text-2xl font-semibold text-white mb-3"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              9. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Quantum Algo and MarketScore shall not be liable
              for any indirect, incidental, special, consequential, or punitive damages, including but
              not limited to loss of profits, data, or other intangible losses arising from your use of
              our services. Our total liability shall not exceed the amount you have paid to us in the 12
              months preceding the claim.
            </p>
          </section>

          <section>
            <h2
              className="text-xl sm:text-2xl font-semibold text-white mb-3"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              10. Disclaimer of Warranties
            </h2>
            <p>
              Our services are provided on an &quot;as is&quot; and &quot;as available&quot; basis without
              warranties of any kind, whether express or implied. We do not warrant that our services
              will be uninterrupted, error-free, or that our trading algorithms will always perform as
              expected.
            </p>
          </section>

          <section>
            <h2
              className="text-xl sm:text-2xl font-semibold text-white mb-3"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              11. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your access to our services at our discretion,
              with or without notice, for conduct that we believe violates these terms or is harmful to
              other users or our business interests.
            </p>
          </section>

          <section>
            <h2
              className="text-xl sm:text-2xl font-semibold text-white mb-3"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              12. Governing Law
            </h2>
            <p>
              These Terms & Conditions shall be governed by and construed in accordance with the laws of
              the United Arab Emirates. Any disputes arising from these terms shall be subject to the
              exclusive jurisdiction of the courts in the UAE.
            </p>
          </section>

          <section>
            <h2
              className="text-xl sm:text-2xl font-semibold text-white mb-3"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              13. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms & Conditions at any time. Changes will be
              effective immediately upon posting to this page. Your continued use of our services after
              any changes constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2
              className="text-xl sm:text-2xl font-semibold text-white mb-3"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              14. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us at:{" "}
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
