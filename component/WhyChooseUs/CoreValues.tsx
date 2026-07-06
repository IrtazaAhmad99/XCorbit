"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  cardVariant,
} from "@/utils/animations";
import { values } from "../../data/array";



export default function CoreValues() {
  return (
    <section className="relative py-28 overflow-hidden  bg-[#030712]">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-10 top-20 h-80 w-80 rounded-full bg-cyan-500/5 blur-[140px]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="mx-auto max-w-7xl px-6"
      >
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Our Core Values
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Principles That Guide
            <span className="block bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Everything We Build
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            These values shape every decision we make—from planning and design
            to development, launch, and long-term support.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                variants={cardVariant}
                className="group rounded-3xl border border-white/10 bg-white/3 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-white/5"
              >
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-cyan-500/20">
                  <Icon size={30} />
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-semibold text-white">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-gray-400">
                  {value.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-8 h-0.5 w-12 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}