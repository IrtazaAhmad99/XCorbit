import React from 'react'
import type { Metadata } from "next";
import PrivacyPolicy from '../../component/Privacy/PrivacyPolicy';

export const metadata: Metadata = {
  title: "Privacy Policy | CloodyKit",
  description:
    "Read CloodyKit's Privacy Policy to learn how we handle personal information, website enquiries, consultation bookings, Google Calendar data, and meeting confirmations.",
  alternates: {
    canonical: "https://www.cloodykit.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | CloodyKit",
    description:
      "Learn how CloodyKit handles personal information, website enquiries, consultation bookings, and Google Calendar data.",
    url: "https://www.cloodykit.com/privacy-policy",
    siteName: "CloodyKit",
    type: "website",
  },
};



const page = () => {
  return (
    <div>
        <PrivacyPolicy/>
    </div>
  )
}

export default page