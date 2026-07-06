"use client";

import {Check,ArrowUpRight} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  cardVariant,
} from "../../utils/animations";
import PrimaryButton from "@/ui/PrimaryButton";
import {serve} from "../../data/array"



export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#060B17] py-28"  >

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          className="mx-auto mb-20 max-w-3xl text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}>


          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="inline-flex items-center rounded-full border border-cyan-500/20  px-5 py-2">
            <span className="mr-2 h-2 w-2 rounded-full bg-cyan-400" />
            <PrimaryButton href="/service" text="Explore Our Service" />
          </motion.div>




          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl"
          >
            Services Built To Grow
            <br />
            Your Business
          </motion.h2>


          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-6 text-lg leading-8 text-slate-400"
          >
            We combine web development, AI automation, and digital growth
            strategies to help businesses build faster, work smarter, and scale
            confidently.
          </motion.p>

        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid gap-8 lg:grid-cols-3"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}

        >
          {serve.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={cardVariant}
                whileHover={{
                  y: -10,
                  scale: 1.01,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
                className="group relative rounded-3xl border border-slate-800 bg-[#111827] p-9 shadow-2xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-cyan-700" >
                {/* Top */}

                <div className="mb-10 flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1B2A4A]">
                    <Icon className="h-8 w-8 text-cyan-400" />
                  </div>

                  <ArrowUpRight className="h-6 w-6 text-slate-500 transition-all duration-300 group-hover:text-cyan-400" />
                </div>

                {/* Content */}
                <h3 className="mb-4 text-3xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mb-8 leading-8 text-slate-400">
                  {service.description}
                </p>

                <div className="mb-8 border-t border-slate-800" />

                {/* Features */}
                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-white"
                    >
                      <Check className="h-5 w-5 text-cyan-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>


              </motion.div>

            );
          })}

        </motion.div>
      </div>
    </section>
  );
}