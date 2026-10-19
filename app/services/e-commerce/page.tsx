

import type { Metadata } from "next";
import Ecommerce from "../../../component/E-Commerce/Ecommerce";

export const metadata: Metadata = {
  title: "E-commerce Website Development Services | CloodyKit",
  description:
    "Build a custom online store with responsive design, product catalogs, checkout, payment integration, and e-commerce SEO foundations from CloodyKit.",
  alternates: {
    canonical: "https://www.cloodykit.com/services/e-commerce",
  },
  openGraph: {
    title: "E-commerce Website Development | CloodyKit",
    description:
      "Explore custom e-commerce development, shopping cart and checkout functionality, payment integrations, and online store optimization.",
    url: "https://www.cloodykit.com/services/e-commerce",
    siteName: "CloodyKit",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <Ecommerce/>
    </div>
  )
}

export default page