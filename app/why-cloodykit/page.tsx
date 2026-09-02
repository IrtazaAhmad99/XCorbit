import React from 'react'
import type { Metadata } from "next";
import WhyChooseUs from "../../component/WhyChooseUs/WhyChooseHerSection"
import Promise from "../../component/WhyChooseUs/Promise"
import CoreValues from "../../component/WhyChooseUs/CoreValues"

export const metadata: Metadata = {
  title: "Why Choose CloodyKit | Web & AI Solutions",
  description:
    "Discover why businesses choose CloodyKit for modern websites, AI solutions, reliable technology, performance, and long-term digital growth.",
  alternates: {
    canonical: "/why-cloodykit",
  },
  openGraph: {
    title: "Why Choose CloodyKit | Web & AI Solutions",
    description:
      "Discover why businesses choose CloodyKit for modern websites, AI solutions, reliable technology, performance, and long-term digital growth.",
    url: "https://www.cloodykit.com/why-cloodykit",
    siteName: "CloodyKit",
    type: "website",
  },
};


const page = () => {
  return (
    <>
    <WhyChooseUs/>
    <Promise/>
    <CoreValues/>

    </>
  )
}

export default page