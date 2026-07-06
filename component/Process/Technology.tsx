"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  cardVariant,
} from "../../utils/animations";
import {technologies} from "../../data/array"



export default function Technologies() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

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
            OUR TECH STACK
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="mt-6 text-4xl font-bold md:text-5xl"
          >
            Powered by
            <span className="bg-linear-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              Modern Technologies
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400"
          >
            We build modern, scalable, and high-performance digital solutions
            using industry-leading technologies trusted by startups and
            businesses worldwide.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.title}
                variants={cardVariant}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-violet-500/30 hover:bg-white/10 transition-all"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-violet-600/20 to-blue-600/20 text-violet-300 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {tech.title}
                </h3>

                <p className="mt-3 text-gray-400 leading-7">
                  {tech.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}