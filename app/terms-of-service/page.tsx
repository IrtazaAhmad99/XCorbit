import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | CloodyKit",
  description:
    "Review CloodyKit's Terms of Service for website use, consultation bookings, web development, AI automation, project scope, payments, and intellectual property.",
  alternates: {
    canonical: "https://www.cloodykit.com/terms-of-service",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms of Service | CloodyKit",
    description:
      "Terms and conditions for using CloodyKit's website and services.",
    url: "https://www.cloodykit.com/terms-of-service",
    siteName: "CloodyKit",
    type: "website",
  },
};

const sections = [
  {
    title: "1. Introduction",
    paragraphs: [
      "Welcome to CloodyKit. These Terms of Service apply to your use of https://cloodykit.com and the consultations, information, and services offered through the website.",
      "By using the website or booking a consultation, you agree to these terms. If you do not agree, please discontinue using the relevant services.",
    ],
  },
  {
    title: "2. Our Services",
    paragraphs: [
      "CloodyKit provides web development, AI-related services, automation solutions, and business growth services.",
      "Website descriptions are provided for general information. The exact deliverables, scope, fees, timelines, and conditions of a particular project will be agreed separately in writing.",
    ],
  },
  {
    title: "3. Consultation Bookings",
    paragraphs: [
      "When booking a consultation, you agree to provide accurate contact information and select an available appointment time.",
      "A booking is confirmed only when the booking process provides confirmation. Availability may change, and we may contact you if scheduling issues arise.",
      "If you need to cancel or reschedule, please contact us as early as reasonably possible. CloodyKit may also need to reschedule a consultation due to unforeseen circumstances.",
      "A consultation is an opportunity to discuss your needs and possible solutions. It does not guarantee acceptance of a project or any particular business outcome.",
    ],
  },
  {
    title: "4. Project Scope and Payment",
    paragraphs: [
      "Before a project begins, the client and CloodyKit should agree in writing on the scope of work, deliverables, fees, payment schedule, expected timeline, and other relevant conditions.",
      "Requests outside the agreed scope may require additional fees or a revised timeline. Changes will be discussed with the client before proceeding.",
      "Unless agreed otherwise in writing, third-party costs such as domains, hosting, software subscriptions, licenses, and advertising budgets are separate from CloodyKit's service fees.",
    ],
  },
  {
    title: "5. Client Responsibilities",
    paragraphs: [
      "Clients agree to provide accurate information, necessary materials, feedback, and approvals in a timely manner.",
      "Clients must have the necessary rights and permissions for any text, images, logos, data, credentials, or other materials they provide.",
      "Clients are responsible for reviewing deliverables and ensuring their use complies with applicable laws and industry requirements, except where specific responsibilities have been expressly agreed otherwise in writing.",
    ],
  },
  {
    title: "6. Acceptable Website Use",
    paragraphs: [
      "You must not use our website unlawfully, attempt unauthorized access, interfere with its operation, introduce malicious code, or infringe another person's rights.",
      "We may restrict access when reasonably necessary to protect the website, users, or services, or to comply with applicable law.",
    ],
  },
  {
    title: "7. Intellectual Property",
    paragraphs: [
      "Unless stated otherwise, the CloodyKit name, branding, website design, written content, and website materials are owned by or licensed to CloodyKit and may not be reused commercially without appropriate permission.",
      "Ownership and usage rights for custom designs, source code, and other project deliverables will be governed by the written agreement for the relevant project. Third-party tools and assets remain subject to their respective licenses.",
    ],
  },
  {
    title: "8. Third-Party Services",
    paragraphs: [
      "Our website or projects may rely on third-party services for hosting, scheduling, email, video meetings, analytics, or other functionality. Such services may have separate terms, privacy policies, charges, and availability limitations.",
      "CloodyKit does not control independent third-party services. We will address service dependencies within our control as provided for in any applicable project agreement.",
    ],
  },
  {
    title: "9. Availability and Disclaimers",
    paragraphs: [
      "We aim to keep our website accessible and information reasonably accurate, but we do not guarantee uninterrupted availability or error-free operation.",
      "Unless expressly agreed in writing and to the extent permitted by law, we do not guarantee particular sales, revenue, traffic, rankings, leads, or other business results from our services.",
    ],
  },
  {
    title: "10. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by applicable law, CloodyKit will not be liable for indirect, incidental, special, or consequential losses arising from use of the website or services.",
      "Nothing in these terms excludes or limits liability where such exclusion or limitation is prohibited by law. Any additional limitations agreed for a particular project must be set out in its written agreement.",
    ],
  },
  {
    title: "11. Privacy",
    paragraphs: [
      "Our handling of personal information is explained in our Privacy Policy. Please review it to understand how information may be collected and used.",
    ],
  },
  {
    title: "12. Changes to These Terms",
    paragraphs: [
      "We may update these terms from time to time. The latest version will be published on this page with an updated date. Your continued use of the website after changes are published will be subject to the updated terms to the extent permitted by applicable law.",
    ],
  },
  {
    title: "13. Applicable Law",
    paragraphs: [
      "Applicable law and dispute-resolution arrangements for a specific project should be set out in the written agreement between the parties. Nothing in these terms removes mandatory legal rights that apply to you.",
    ],
  },
  {
    title: "14. Contact Us",
    paragraphs: [
      "If you have questions about these Terms of Service, contact CloodyKit using the email address below.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#050B18] px-5 py-20 text-slate-200 sm:px-8">
      <article className="mx-auto max-w-4xl">
        <header className="mb-12 border-b border-white/10 pb-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            CloodyKit
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            The terms governing use of our website, consultation bookings, and
            professional services.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Last updated: October 12, 2026
          </p>
        </header>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-4 text-xl font-semibold text-white">
                {section.title}
              </h2>
              <div className="space-y-4 leading-7 text-slate-400">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.title === "11. Privacy" && (
                  <a
                    href="/privacy-policy"
                    className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300"
                  >
                    Read our Privacy Policy
                  </a>
                )}
                {section.title === "14. Contact Us" && (
                  <a
                    href="mailto:cloodykit@gmail.com"
                    className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300"
                  >
                    cloodykit@gmail.com
                  </a>
                )}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-14 border-t border-white/10 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} CloodyKit. All rights reserved.
        </footer>
      </article>
    </main>
  );
}