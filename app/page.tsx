import type { Metadata } from "next";
import HeroSection from "../component/Home/HeroSection"
import Services from "../component/Home/Service";
import HowWeWork from "../component/Home/HomeWork";
import FeaturedProjects from "../component/Home/FeatureProduct";
import WhyChooseUs from "../component/Home/ChooseUs";
import FAQ from "../component/Home/FAQ";
import CTA from "../component/Home/CTA";


export const metadata: Metadata = {
  title: "AI Automation & Web Development Agency",

  description:
    "CloodyKit builds modern websites, AI automation systems, and digital solutions that help businesses grow, improve efficiency, and scale.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "CloodyKit | AI Automation & Web Development Agency",
    description:
      "CloodyKit builds modern websites, AI automation systems, and digital solutions that help businesses grow, improve efficiency, and scale.",
    url: "https://www.cloodykit.com/",
    siteName: "CloodyKit",
    type: "website",
  },
};



export default function Home() {
  return (
    <>
     <HeroSection/>
     <Services/>
     <FeaturedProjects/>
     <HowWeWork/>
     <WhyChooseUs/>
     <FAQ/>
     <CTA/>
    </>
  );
}
