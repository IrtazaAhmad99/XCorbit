import React from 'react'
import type { Metadata } from "next";
import WorkHero from "../../component/FeatureProduct/WorkHero"
import ProjectHighlights from "../../component/FeatureProduct/ProjectHighlights"
import ProjectIncludes from "../../component/FeatureProduct/ProjectIncludes"


export const metadata: Metadata = {
  title: "Our Work | Web Development & AI Projects",
  description:
    "Explore websites, web applications, and digital solutions built by CloodyKit for businesses and modern digital experiences.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Our Work | Web Development & AI Projects | CloodyKit",
    description:
      "Explore websites, web applications, and digital solutions built by CloodyKit for businesses and modern digital experiences.",
    url: "https://www.cloodykit.com/work",
    siteName: "CloodyKit",
    type: "website",
  },
};

const page = () => {
  return (
    <>
     
        <WorkHero/>
        <ProjectHighlights/>
        <ProjectIncludes/>
    </>
  )
}

export default page