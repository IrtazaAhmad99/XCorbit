import React from 'react'
import type { Metadata } from "next";
import ServiceHero from "../../component/Services/ServiceHero"
import ServiceCard from "../../component/Services/ServiceCard"
import Process from "../../component/Services/Process"
import TechnologySection from "../../component/Services/TechnologySection"
import Choose from "../../component/Services/Choose"


export const metadata: Metadata = {
  title: "Web Development, AI & Digital Growth Services",
  description:
    "Explore CloodyKit's web development, AI automation, and digital growth services designed to help businesses build, automate, and grow online.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Web Development, AI & Digital Growth Services | CloodyKit",
    description:
      "Explore CloodyKit's web development, AI automation, and digital growth services designed to help businesses build, automate, and grow online.",
    url: "https://www.cloodykit.com/services",
    siteName: "CloodyKit",
    type: "website",
  },
};


const page = () => {
  return (
    <>
    <ServiceHero/>
    <ServiceCard/>
    <Process/>
    <TechnologySection/>
    <Choose/>
    </>
  )
}

export default page