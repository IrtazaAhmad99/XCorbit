import Image from "next/image";
import HeroSection from "../component/Home/HeroSection"
import Services from "../component/Home/Service";
import HowWeWork from "../component/Home/HomeWork";
import FeaturedProjects from "../component/Home/FeatureProduct";
import WhyChooseUs from "../component/Home/ChooseUs";
import FAQ from "../component/Home/FAQ";
import CTA from "../component/Home/CTA";




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
