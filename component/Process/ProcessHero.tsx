"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PrimaryButton from "../../ui/PrimaryButton";

import {
  fadeInUp,
  staggerContainer,
} from "../../utils/animations";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-28">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[130px]" />

        <div className="absolute left-20 bottom-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute right-10 top-20 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[60px_60px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-300"
          >
            OUR PROCESS
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="mt-8 text-5xl font-bold leading-tight md:text-7xl"
          >
            From Idea to Launch,
            <br />
            <span className="bg-linear-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              We Keep Everything Simple.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400"
          >
            Every successful project starts with a clear plan. Our proven
            workflow keeps communication transparent, development efficient,
            and delivery focused on real business results.
          </motion.p>

          {/* Button */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex justify-center"
          >
            <PrimaryButton href="/contact" text="start a projet" />
               
            
            
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            variants={fadeInUp}
            className="mt-20 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-3"
          >
            <div>
              <h3 className="text-3xl font-bold text-white">01</h3>
              <p className="mt-2 text-gray-400">Discovery & Strategy</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">06</h3>
              <p className="mt-2 text-gray-400">Clear Project Stages</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">100%</h3>
              <p className="mt-2 text-gray-400">Transparent Communication</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}