"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
} from "../../utils/animations";
import { reasons } from "../../data/array";



export default function WhyChooseUs() {
  return (
    <section className="bg-[#030712] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Heading */}
          <motion.div
            variants={fadeInUp}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <p className="font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Why Choose CloodyKit
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Built Around Your
              <span className="text-cyan-400"> Success</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              We combine modern technology, thoughtful design, and clear
              communication to deliver digital solutions that help businesses
              grow with confidence.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {reasons.map((reason) => (
              <motion.div
                key={reason.title}
                variants={scaleIn}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
                  <reason.icon className="h-8 w-8 text-cyan-400" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}