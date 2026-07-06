"use client";

import { motion } from "framer-motion";
import {CheckCircle2,} from "lucide-react";

import {
  fadeInUp,
  staggerContainer,
  scaleIn,
} from "@/utils/animations";
import { techStacks } from "../../data/array";



export default function TechnologiesSection() {
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
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <p className="font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Technologies We Use
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Modern Technologies For
              <span className="text-cyan-400"> Modern Businesses</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              We use trusted frameworks, tools, and AI technologies to build
              secure, scalable, and high-performing digital solutions.
            </p>
          </motion.div>

          {/* Categories */}

          <div className="grid gap-8 md:grid-cols-2">
            {techStacks.map((stack) => (
              <motion.div
                key={stack.title}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r ${stack.color}`}
                >
                  <stack.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {stack.title}
                </h3>

                <div className="mt-8 space-y-4">
                  {stack.tech.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-cyan-400" />

                      <span className="text-gray-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}