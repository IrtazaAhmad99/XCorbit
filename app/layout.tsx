import Navbar from "../component/Navbar/Navbar"
import "./globals.css";
import { Toaster } from "sonner";
import Footer from "../component/Home/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.CloodyKit.com"), // Replace after buying your domain

  title: {
    default: "CloodyKit | AI Automation & Web Development Agency",
    template: "%s | CloodyKit",
  },

  description:
    "CloodyKit helps businesses grow with modern websites, AI automation, and digital solutions designed for performance and scalability.",

  keywords: [
    "Web Development",
    "Next.js",
    "React",
    "AI Automation",
    "Business Websites",
    "Software Development",
    "Pakistan",
    "CloodyKit",
    "Meta Adds",
    "Sales",
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
    url: "http://localhost:3000",
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
        <Footer/>
      </body>
    </html>
  );
}
