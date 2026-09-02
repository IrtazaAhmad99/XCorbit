import React from 'react'
import type { Metadata } from "next"
import FounderHerosection from "../../component/Founder/FounderHerosection"
import OurStory from "../../component/Founder/OurStory"
import OurMission from "../../component/Founder/OurMission"


export const metadata: Metadata = {
    title: "CloodyKit Founder | Our Story, Mission & Vision",

    description:
        "Discover the story behind CloodyKit, our mission to help businesses grow through web development, AI automation, and digital solutions, and the vision driving our journey forward.",

    alternates: {
        canonical: "/founder",
    },

    openGraph: {
        title: "CloodyKit Founder | Our Story, Mission & Vision",
        description:
            "Learn why CloodyKit was founded, what we believe, and how we use web development, AI automation, and digital solutions to help businesses grow.",
        url: "https://www.cloodykit.com/founder",
        siteName: "CloodyKit",
        type: "website",
    },
};

const page = () => {
    return (
        <>
            <FounderHerosection />
            <OurStory />
            <OurMission />

        </>
    )
}

export default page