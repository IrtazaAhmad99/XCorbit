import React from 'react'
import ProcessHero from "../../component/Process/ProcessHero"
import WhyProcess from "../../component/Process/WhyProcess"
import ProcessTimeLine from "../../component/Process/ProcessTimeLine"
import Technology from "../../component/Process/Technology"

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