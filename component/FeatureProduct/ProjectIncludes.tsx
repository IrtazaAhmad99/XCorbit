"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { fadeInUp, staggerContainer, cardVariant } from "../../utils/animations";
import {includes} from "../../data/array"


export default function ProjectIncludes() {
  return (
    <section className="relative bg-[#030712] py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-137.5 h-137.5 bg-cyan-500/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300 mb-5">
            Our Standards
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What Every Project{" "}
            <span className="text-cyan-400">Includes</span>
          </h2>

          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            Every solution we build follows the same high standards, ensuring
            your project is secure, scalable, and ready for long-term success.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {includes.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariant}
              whileHover={{ x: 6 }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition-all duration-300 hover:border-cyan-400/40"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}