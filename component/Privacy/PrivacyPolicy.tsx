
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CloodyKit",
  description:
    "Read CloodyKit's Privacy Policy to learn how we handle personal information, website enquiries, consultation bookings, Google Calendar data, and meeting confirmations.",
  alternates: {
    canonical: "https://cloodykit.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | CloodyKit",
    description:
      "Learn how CloodyKit handles personal information, website enquiries, consultation bookings, and Google Calendar data.",
    url: "https://cloodykit.com/privacy-policy",
    siteName: "CloodyKit",
    type: "website",
  },
};

const lastUpdated = "October 12, 2026";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#050B18] px-5 py-20 text-white sm:px-8 sm:py-28">
      <article className="mx-auto max-w-4xl">
        <header className="mb-12 border-b border-white/10 pb-10">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            Legal & Privacy
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
            At CloodyKit, we respect your privacy and aim to handle your
            personal information responsibly. This policy explains what
            information we may collect, how we use it, and the choices
            available to you when you visit our website or contact us
            about our services.
          </p>

          <p className="mt-5 text-sm text-slate-400">
            Last updated: {lastUpdated}
          </p>
        </header>

        <div className="space-y-10 text-[15px] leading-8 text-slate-300">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              1. About CloodyKit
            </h2>
            <p>
              CloodyKit provides web development, AI automation, and
              digital business solutions. This Privacy Policy applies to
              information processed through cloodykit.com, including
              website enquiries and consultation booking features.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              2. Information We May Collect
            </h2>
            <p>
              Depending on how you interact with our website, we may
              collect the following information:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-cyan-400">
              <li>
                <strong className="text-white">Contact information:</strong>{" "}
                your name, email address, company name, and information
                you include in a message.
              </li>
              <li>
                <strong className="text-white">Consultation details:</strong>{" "}
                your selected appointment date and time, requested
                service, and any additional details you provide.
              </li>
              <li>
                <strong className="text-white">Technical information:</strong>{" "}
                limited information that may be processed by our website
                hosting, security, and operational services, such as
                request logs, browser information, and diagnostic data.
              </li>
              <li>
                <strong className="text-white">Communication records:</strong>{" "}
                information contained in messages exchanged with us
                regarding an enquiry or consultation.
              </li>
            </ul>
            <p className="mt-4">
              Please do not submit passwords, payment card details, or
              other sensitive information through general contact or
              consultation forms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              3. How We Use Your Information
            </h2>
            <p>We may use the information you provide to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-cyan-400">
              <li>Respond to questions and service enquiries.</li>
              <li>Arrange and manage consultation appointments.</li>
              <li>Check appointment availability and prevent scheduling conflicts.</li>
              <li>Create calendar events and provide meeting details.</li>
              <li>Send booking confirmations and relevant appointment communications.</li>
              <li>Provide requested services and communicate about projects.</li>
              <li>Maintain website security, troubleshoot errors, and improve reliability.</li>
              <li>Meet applicable legal obligations and address legitimate disputes.</li>
            </ul>
            <p className="mt-4">
              We do not use personal information for purposes that are
              incompatible with the purpose for which it was collected
              without an appropriate basis or notice where required.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              4. Google Calendar and Google Meet
            </h2>
            <p>
              If you book a consultation, CloodyKit may use a Google
              Calendar integration to check available appointment times
              and create a calendar event. The integration accesses
              CloodyKit&apos;s designated calendar, not your personal
              Google Calendar, unless a separate integration and
              authorization explicitly provides otherwise.
            </p>

            <p className="mt-4">
              To arrange your appointment, information such as your name,
              email address, selected time, and consultation details may
              be included in the calendar event. Google Calendar may
              process this information to create the event, invite you,
              and generate a Google Meet link when supported.
            </p>

            <p className="mt-4">
              Calendar availability information is used to identify
              suitable appointment times and manage scheduling. We do
              not use Google Calendar data for advertising, sell it,
              or use it to build advertising profiles.
            </p>

            <p className="mt-4">
              CloodyKit&apos;s use of information received through Google
              APIs is limited to providing the booking and scheduling
              features you interact with, in accordance with the
              Google API Services User Data Policy, including its
              Limited Use requirements.
            </p>

            <p className="mt-4">
              Google services are subject to Google&apos;s own privacy
              practices. You can review the{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300"
              >
                Google Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              5. Emails and Booking Communications
            </h2>
            <p>
              We may use email and calendar services to respond to
              enquiries, confirm appointments, share meeting links,
              and communicate information relevant to a requested
              consultation or service.
            </p>
            <p className="mt-4">
              Appointment invitations and related notifications may be
              delivered by Google Calendar or another email service
              configured for the booking system. Delivery can depend
              on the recipient&apos;s email provider and settings.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              6. Cookies and Technical Data
            </h2>
            <p>
              Our website or its service providers may process technical
              information needed to operate, protect, and troubleshoot
              the website. If cookies, analytics, or similar technologies
              are used, they should be described according to their
              actual implementation and purpose.
            </p>
            <p className="mt-4">
              You can manage cookies through your browser settings.
              Blocking certain cookies or technical features may affect
              how some website functions work.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              7. How We Share Information
            </h2>
            <p>
              We do not sell your personal information. We may share
              relevant information with service providers that help
              operate the website and deliver requested functionality,
              such as hosting, calendar scheduling, and email delivery.
            </p>
            <p className="mt-4">
              We may also disclose information when reasonably necessary
              to comply with applicable law, respond to lawful requests,
              protect rights and security, or handle legal claims.
              Service providers should process information only as
              appropriate for their services and applicable obligations.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              8. Data Security
            </h2>
            <p>
              We take reasonable steps appropriate to the information
              and services involved to protect information against
              unauthorized access, disclosure, alteration, or loss.
              However, no website, transmission method, or electronic
              storage system can be guaranteed to be completely secure.
            </p>
            <p className="mt-4">
              Access credentials and authorization tokens used for
              integrations should be protected and restricted to
              authorized server-side systems.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              9. Data Retention and Deletion Requests
            </h2>
            <p>
              We retain personal information only for as long as
              reasonably necessary for the purposes described in this
              policy, subject to applicable legal, operational, and
              recordkeeping requirements.
            </p>
            <p className="mt-4">
              You may contact us to request access to, correction of,
              or deletion of personal information we hold about you.
              We will review requests and respond in accordance with
              applicable law. Some information may need to be retained
              where legally required or where a valid exception applies.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              10. Third-Party Websites and Services
            </h2>
            <p>
              Our website may link to third-party websites or services.
              Those services operate under their own terms and privacy
              policies. CloodyKit is not responsible for the privacy
              practices of websites that we do not operate.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              11. Your Privacy Choices
            </h2>
            <p>
              Depending on your location and applicable law, you may
              have rights to request access to your personal information,
              correct inaccurate information, request deletion, or
              object to or restrict certain processing.
            </p>
            <p className="mt-4">
              To make a privacy-related request, contact CloodyKit using
              the contact information below. We may need to verify your
              identity before responding.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              12. Children&apos;s Privacy
            </h2>
            <p>
              CloodyKit&apos;s website and business services are intended
              for general business audiences, not specifically for
              children. Please contact us if you believe a child has
              submitted personal information through our website so
              that we can review the matter appropriately.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-white">
              13. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy as our website,
              services, integrations, or legal obligations change.
              Updates will be published on this page with a revised
              date. Where required, we will provide additional notice
              about material changes.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/3 p-6 sm:p-8">
            <h2 className="mb-3 text-2xl font-semibold text-white">
              14. Contact CloodyKit
            </h2>
            <p>
              If you have questions about this Privacy Policy or want
              to make a privacy-related request, contact us at:
            </p>
            <p className="mt-4">
              <strong className="text-white">Website:</strong>{" "}
              <a
                href="https://www.cloodykit.com"
                className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300"
              >
                cloodykit.com
              </a>
            </p>
            <p className="mt-2">
              <strong className="text-white">Email:</strong>{" "}
              <a
                href="mailto:cloodykit@gmail.com"
                className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300"
              >
                cloodykit@gmail.com
              </a>
            </p>
            <p className="mt-4 text-sm text-slate-400">
              Replace the placeholder above with a monitored business
              email address before publishing this policy.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
