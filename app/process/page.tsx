import React from 'react'
import type { Metadata } from "next";
import ProcessHero from "../../component/Process/ProcessHero"
import WhyProcess from "../../component/Process/WhyProcess"
import ProcessTimeLine from "../../component/Process/ProcessTimeLine"
import Technology from "../../component/Process/Technology"

export const metadata: Metadata = {
  title: "Our Process | How We Build Websites & AI Solutions",
  description:
    "See how CloodyKit turns ideas into modern websites and AI solutions through a clear process covering strategy, development, technology, testing, and launch.",
  alternates: {
    canonical: "/process",
  },
  openGraph: {
    title: "Our Process | How We Build Websites & AI Solutions | CloodyKit",
    description:
      "See how CloodyKit turns ideas into modern websites and AI solutions through a clear process covering strategy, development, technology, testing, and launch.",
    url: "https://www.cloodykit.com/process",
    siteName: "CloodyKit",
    type: "website",
  },
};

const page = () => {
  return (
    <main className="bg-[#030712] text-white overflow-hidden">
      <ProcessHero />
      <WhyProcess/>
      <ProcessTimeLine/>
      <Technology/>
    </main>
  )
}

export default page