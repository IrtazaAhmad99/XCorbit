"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  cardVariant,
} from "@/utils/animations";
import {features} from "../../data/array"



export default function WhyProcess() {
  return (
    <section className="relative py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-violet-600/10 blur-[130px]" />
        <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300"
          >
            WHY CHOOSE OUR PROCESS
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl"
          >
            Built Around
            <span className="bg-linear-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              Communication,
            </span>
            <br />
            Speed & Results
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400"
          >
            Great digital products aren't created by writing code alone.
            They're built through understanding your goals, communicating
            clearly, and delivering with consistency from start to finish.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                variants={cardVariant}
                whileHover={{ y: -8 }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/30 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-violet-600/20 to-blue-600/20 text-violet-300 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}