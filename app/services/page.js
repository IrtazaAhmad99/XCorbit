import React from 'react'
import ServiceHero from "../../component/Services/ServiceHero"
import ServiceCard from "../../component/Services/ServiceCard"
import Process from "../../component/Services/Process"
import TechnologySection from "../../component/Services/TechnologySection"
import Choose from "../../component/Services/Choose"


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