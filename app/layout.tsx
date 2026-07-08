import Navbar from "../component/Navbar/Navbar"
import "./globals.css";
import { Toaster } from "sonner";
import Footer from "../component/Home/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://cloodykit.com"), // Replace after buying your domain

  title: {
    default: "CloodyKit | AI Automation & Web Development Agency",
    template: "%s | CloodyKit",
  },

  description:
    "CloodyKit helps businesses grow with modern websites, AI automation, and digital solutions designed for performance and scalability.",

  keywords: [
    "AI Automation",
    "Web Development",
    "Next.js",
    "React",
    "Business Websites",
    "Software Development",
    "AI Chatbots",
    "Custom Web Applications",
    "Digital Solutions",
    "SEO",
    "Landing Pages",
    "Business Automation",
    "CloodyKit",
    "DashBord",
    "AI Websites",
    "Meta Adds",
    
  ],

  authors: [
    {
      name: "CloodyKit",
    },
  ],

  creator: "CloodyKit",

  openGraph: {
    title: "CloodyKit",
    description:
      "Modern web development and AI automation solutions for businesses.",
    url: "https://cloodykit.com",
    siteName: "CloodyKit",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CloodyKit",
    description:
      "Modern web development and AI automation solutions for businesses.",
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full"
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Toaster
          position="top-right"
          richColors
          closeButton
        />
        <Footer />
      </body>
    </html>
  );
}
