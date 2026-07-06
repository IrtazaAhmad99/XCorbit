"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import {
  fadeInUp,
  slideInLeft,
  slideInRight,
} from "@/utils/animations";

const promises = [
  "Clean, scalable architecture built for long-term growth.",
  "Transparent communication throughout every stage of the project.",
  "Fast, responsive websites optimized for performance and SEO.",
  "Solutions tailored to your business goals instead of generic templates.",
];

export default function Promise() {
  return (
    <section className="relative py-28  bg-[#030712]">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        {/* Left */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Our Promise
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            We Build With
            <br />
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Quality, Speed
            </span>
            <br />
            & Long-Term Growth
            <br />
            In Mind.
          </h2>
        </motion.div>

        {/* Right */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <motion.p
            variants={fadeInUp}
            className="text-lg leading-8 text-gray-400"
          >
            At XCorbitSoft, we believe a successful digital product is more
            than just attractive design. It should be reliable, scalable, and
            built to support your business as it grows. Every project we
            deliver is crafted with attention to performance, maintainability,
            and a seamless user experience.
          </motion.p>

          <div className="mt-10 space-y-5">
            {promises.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
                  <CheckCircle2 size={20} />
                </div>

                <p className="text-gray-300 leading-7">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}