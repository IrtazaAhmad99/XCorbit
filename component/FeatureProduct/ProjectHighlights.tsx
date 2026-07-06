"use client";

import { motion } from "framer-motion";

import {
  fadeInUp,
  staggerContainer,
  cardVariant,
} from "../../utils/animations";
import{ highlights} from "../../data/array"



export default function ProjectHighlights() {
  return (
    <section className="relative bg-[#030712] py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-125 h-125 bg-cyan-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
    
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-flex  items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300 mb-5">
            Project Highlights
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Solutions Built to Deliver{" "}
            <span className="text-cyan-400">Real Impact</span>
          </h2>

          <p className="mt-6 text-gray-200 text-lg leading-relaxed">
            From AI-powered automation to scalable web applications, every
            project reflects our commitment to performance, usability, and
            long-term business value.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={cardVariant}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25 },
                }}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-7 transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
              >
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:scale-110">
                  <Icon className="w-7 h-7 text-cyan-400" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}