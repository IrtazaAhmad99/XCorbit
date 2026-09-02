import Navbar from "../component/Navbar/Navbar"
import "./globals.css";
import { Toaster } from "sonner";
import Footer from "../component/Home/Footer";
import type { Metadata } from "next";
import ParticleBackground from "@/component/Particle/ParticleBackgroung";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cloodykit.com"), // Replace after buying your domain

  title: {
    default: "CloodyKit | AI Automation & Web Development Agency",
    template: "%s | CloodyKit",
  },

  description:
    "CloodyKit helps businesses grow with modern websites, AI automation, and digital solutions designed for performance and scalability.",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
  },

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
    url: "https://www.cloodykit.com/",
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
      <body className="min-h-full flex flex-col bg-[#060B17]">
        <ParticleBackground />
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
