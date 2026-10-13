import React from 'react'
import ConsultationBooking from '../../component/Booking/ConsultationBooking'
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Book a Consultation | CloodyKit",
  description:
    "Discuss your business goals with CloodyKit. Book a consultation to explore custom web development, AI automation, and digital solutions tailored to your needs.",
  alternates: {
    canonical: "https://www.cloodykit.com/booking",
  },
};

const page = () => {
  return (
    <div>
        <ConsultationBooking/>
    </div>
  )
}

export default page