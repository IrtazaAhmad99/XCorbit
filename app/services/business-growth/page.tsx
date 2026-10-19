import type { Metadata } from "next";
import BusinessBrowth from "../../../component/BusinessGrowth/BusinessGrowth"


export const metadata: Metadata = {
  title: "Business Growth & Digital Marketing Services | USA, UK, Canada & Australia | CloodyKit",
  description:
    "SEO, website content strategy, lead generation and conversion improvements to help service businesses get found and generate relevant enquiries.",
  alternates: {
    canonical: "https://www.cloodykit.com/services/business-growth",
  },
  openGraph: {
    title: "Business Growth & SEO Services | CloodyKit",
    description:
      "A practical approach to business growth: SEO, useful content, clear customer journeys and measurable progress.",
    url: "https://www.cloodykit.com/services/business-growth",
    siteName: "CloodyKit",
    type: "website",
  },
};





const page = () => {
  return (
    <div>
      <BusinessBrowth/>
    </div>
  )
}

export default page