import React from 'react'
import type { Metadata } from "next";
import ContactHero from "../../component/ContactUs/ContactHero"
import ContactForm from "../../component/ContactUs/ContactForm"

export const metadata: Metadata = {
  title: "Contact CloodyKit | Web Development & AI Solutions",

  description:
    "Get in touch with CloodyKit to discuss web development, AI automation, and digital solutions for your business.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact CloodyKit | Web Development & AI Solutions",
    description:
      "Get in touch with CloodyKit to discuss web development, AI automation, and digital solutions for your business.",
    url: "https://www.cloodykit.com/contact",
    siteName: "CloodyKit",
    type: "website",
  },
};

const page = () => {
  return (
    <>
    <ContactHero/>
    <ContactForm/>
    </>
  )
}

export default page