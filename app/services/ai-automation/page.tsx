import type { Metadata } from "next";
import AIAutomation from "../../../component/AI-Automation/AIAutomation"



export const metadata: Metadata = {
  title: "AI Automation Services | USA, UK, Canada & Australia | CloodyKit",
  description:
    "CloodyKit builds AI chatbots, lead qualification, booking follow-up and workflow automation for service businesses, clinics, real estate agencies and law firms.",
  alternates: {
    canonical: "https://www.cloodykit.com/services/ai-automation",
  },
  openGraph: {
    title: "AI Automation Services | CloodyKit",
    description:
      "Practical AI assistants and workflow automation built around your business, with human handoffs where they matter.",
    url: "https://www.cloodykit.com/services/ai-automation",
    siteName: "CloodyKit",
    type: "website",
  },
};





const page = () => {
  return (
    <div>
      <AIAutomation/>
    </div>
  )
}

export default page