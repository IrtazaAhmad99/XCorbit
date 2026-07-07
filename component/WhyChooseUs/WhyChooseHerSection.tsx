"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

import PrimaryButton from "../../ui/PrimaryButton";

import {
  fadeInUp,
  staggerContainer,
} from "../../utils/animations";

export default function Hero() {
  return (
    <section className="relative  bg-[#030712] overflow-hidden pt-40 pb-28">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-32 h-105 w-105 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
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
          <ShieldCheck className="h-4 w-4" />
          WHY CHOOSE CloodyKit
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeInUp}
          className="max-w-5xl text-5xl font-bold leading-tight text-white md:text-7xl"
        >
          Building Digital Solutions
          <br />
          <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            You Can Rely On
          </span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={fadeInUp}
          className="mt-8 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl"
        >
          We combine modern web development, AI automation, and
          business-focused thinking to create scalable digital solutions that
          help businesses grow with confidence.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 flex flex-col gap-5 sm:flex-row"
        >
          <PrimaryButton
            href="/contact"
            text="Start Your Project"
          />
            
          <Link
            href="/featureProduct"
            className="group inline-flex items-center justify-center rounded-xl border border-white/10 px-7 py-4 font-medium text-white transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500/10"
          >
            View Our Work
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}