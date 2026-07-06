"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Bot,
  Rocket,
} from "lucide-react";

import {
  fadeInUp,
  staggerContainer,
  scaleIn,
} from "../../utils/animations";
import {stats} from "../../data/array"


export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#030712] py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            variants={scaleIn}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur"
          >
            <Sparkles className="h-4 w-4" />
            Our Services
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl"
          >
            Digital Solutions
            <br />
            Built To
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Grow Businesses
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl"
          >
            From powerful websites to intelligent AI automation, we build
            scalable digital products that help startups and businesses
            attract more customers, automate operations, and accelerate
            growth.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400"
            >
              Start Your Project
              <ArrowRight size={18} />
            </Link>

            
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            className="mt-20 grid gap-6 md:grid-cols-3"
          >
            {stats.map((item) => (
              <motion.div
                key={item.title}
                variants={scaleIn}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                  <item.icon className="h-7 w-7 text-cyan-400" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-400">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}