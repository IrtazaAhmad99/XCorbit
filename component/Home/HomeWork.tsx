"use client";

import { motion } from "framer-motion";
import {
  Search,
  ClipboardList,
  Code2,
  Rocket,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  slideInLeft,
} from "../../utils/animations";
import PrimaryButton from "@/ui/PrimaryButton";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business goals, target audience, and project requirements before writing a single line of code.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "We create a clear roadmap, define the project scope, and choose the best technologies for long-term success.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Design & Development",
    description:
      "Our team designs modern user experiences and develops fast, scalable, and secure digital solutions.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "After rigorous testing, we launch your project and continue providing support and future improvements.",
    icon: Rocket,
  },
];

export default function HowWeWork() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#060B17] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="inline-flex items-center rounded-full border border-cyan-500/20  px-5 py-2"
          >
            <span className="mr-2 h-2 w-2 rounded-full bg-cyan-400"/>
            <PrimaryButton href="/process" text="Our Process" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="mt-8 text-4xl font-bold text-white md:text-6xl">
            How We Work
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="mt-6 text-lg leading-8 text-slate-400">
            Every successful project follows a structured process. Here's how
            we transform your ideas into powerful digital products.

          </motion.p>

        </div>

        <div className="relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1 }}
            style={{ transformOrigin: "left" }}
            className="  absolute left-0 right-0 top-10 hidden h-1 bg-linear-to-r from-transparent via-cyan-300/90 to-transparent lg:block"
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="grid gap-8 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative rounded-3xl border border-slate-800 bg-[#111827] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.08)]"
                >
                  {/* Step Number */}
                  <span className="text-sm font-bold tracking-widest text-cyan-400">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="mt-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1B2A4A] transition-colors duration-300 group-hover:bg-cyan-500/10">
                    <Icon className="h-8 w-8 text-cyan-400" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-8 text-2xl font-bold text-white">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 leading-8 text-slate-400">
                    {step.description}
                  </p>
                </div>
              );
            })}

          </motion.div>


        </div>
      </div>
    </section>
  );
}