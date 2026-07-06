"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
} from "../../utils/animations";
import {process} from "../../data/array"



export default function ProcessSection() {
  return (
    <section className="bg-[#030712] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Heading */}

          <motion.div
            variants={fadeInUp}
            className="mx-auto mb-20 max-w-3xl text-center"
          >
            <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Our Process
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              A Clear Process From
              <span className="text-cyan-400"> Idea To Launch</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              We follow a proven workflow that keeps projects transparent,
              efficient, and focused on delivering measurable results.
            </p>
          </motion.div>

          {/* Cards */}

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item) => (
              <motion.div
                key={item.step}
                variants={scaleIn}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                {/* Step Number */}

                <span className="text-sm font-bold tracking-widest text-cyan-400">
                  STEP {item.step}
                </span>

                {/* Icon */}

                <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 transition group-hover:bg-cyan-500">
                  <item.icon className="h-8 w-8 text-cyan-400 group-hover:text-black" />
                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-8 text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}