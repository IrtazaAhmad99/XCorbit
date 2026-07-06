"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  cardVariant,
} from "../../utils/animations";
import { steps } from "../../data/array";



export default function ProcessTimeline() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300"
          >
            OUR WORKFLOW
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="mt-6 text-4xl font-bold md:text-5xl"
          >
            Our Proven
            <span className="bg-linear-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              Six-Step Process
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg text-gray-400 leading-8"
          >
            Every project follows a structured workflow designed to keep
            communication clear, development efficient, and delivery on time.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-24">

          {/* Center Line */}
          <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-linear-to-b from-violet-500 via-blue-500 to-cyan-500 lg:block" />

          <div className="space-y-20">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const left = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className={`relative flex items-center ${
                    left ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  {/* Card */}
                  <div className="w-full lg:w-[46%]">
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-violet-500/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-violet-600/20 to-blue-600/20 text-violet-300">
                          <Icon className="h-7 w-7" />
                        </div>

                        <div>
                          <p className="text-sm uppercase tracking-widest text-violet-400">
                            Step {step.number}
                          </p>

                          <h3 className="text-2xl font-semibold text-white">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-6 leading-8 text-gray-400">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center Circle */}
                  <div className="absolute left-1/2 hidden -translate-x-1/2 lg:flex">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-violet-500/30 bg-[#030712] shadow-[0_0_40px_rgba(139,92,246,.4)]">
                      <span className="text-xl font-bold text-violet-300">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}