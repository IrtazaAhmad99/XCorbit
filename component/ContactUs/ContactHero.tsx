"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

import PrimaryButton from "../../ui/PrimaryButton";
import { fadeInUp, staggerContainer } from "@/utils/animations";

export default function Hero() {
  return (
    <section className="relative bg-[#030712] overflow-hidden pt-40 pb-28">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-105 w-105 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute right-10 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          variants={fadeInUp}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium tracking-wide text-cyan-400"
        >
          <Mail className="h-4 w-4" />
          CONTACT CLOODYKIT
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeInUp}
          className="max-w-5xl text-5xl font-bold leading-tight text-white md:text-7xl"
        >
          Let's Build Your
          <br />
          <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Next Big Idea
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="mt-8 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl"
        >
          Whether you're launching a new startup, improving an existing
          platform, or exploring AI-powered automation, we're here to help
          turn your vision into a modern digital solution.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 flex flex-col gap-5 sm:flex-row"
        >
          <PrimaryButton
            href="#contact-form"
            text="Start a Project"
          />
         

          <Link
            href="/service"
            className="group inline-flex items-center justify-center rounded-xl border border-white/10 px-7 py-4 font-medium text-white transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500/10"
          >
            Explore Services
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeInUp}
          className="mt-20 grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {[
            {
              number: "24h",
              label: "Average Response Time",
            },
            {
              number: "Worldwide",
              label: "Remote Collaboration",
            },
            {
              number: "100%",
              label: "Custom Solutions",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <h3 className="text-3xl font-bold text-cyan-400">
                {item.number}
              </h3>

              <p className="mt-2 text-gray-400">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}