import React from 'react'
import type { Metadata } from "next";
import WebDevelopment from '../../../component/WebDevelopment/WebDevelopment'


export const metadata: Metadata = {
  title: "Web Development Company | USA, UK, Canada & Australia | CloodyKit",
  description:
    "CloodyKit builds responsive, custom websites for service businesses, clinics, real estate agencies, law firms, gyms, restaurants, and online stores.",
  alternates: {
    canonical: "https://www.cloodykit.com/services/web-development",
  },
  openGraph: {
    title: "Web Development Services | CloodyKit",
    description:
      "Explore website development solutions for your business, from custom websites and booking features to e-commerce and SEO-friendly development.",
    url: "https://www.cloodykit.com/services/web-development",
    siteName: "CloodyKit",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
        <WebDevelopment/>
    </div>
  )
}

export default page