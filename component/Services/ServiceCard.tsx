"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Bot,
  Palette,
  Search,
  Check,
  ArrowUpRight,
} from "lucide-react";

import {
  fadeInUp,
  staggerContainer,
  scaleIn,
} from "../../utils/animations";
import { services } from "../../data/array";


export default function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-[#030712] py-24">
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
              What We Offer
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Services Designed To Help
              <span className="text-cyan-400"> Your Business Grow</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              We combine strategy, design, development, and AI to create
              solutions that drive measurable business results.
            </p>
          </motion.div>

          {/* Cards */}

          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={scaleIn}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{ duration: 0.35 }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                {/* Icon */}

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r ${service.color}`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}

                <h3 className="mt-6 text-3xl font-bold text-white">
                  {service.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-8 text-gray-400">
                  {service.description}
                </p>

                {/* Features */}

                <div className="mt-8 space-y-4">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <div className="rounded-full bg-cyan-500/10 p-1">
                        <Check className="h-4 w-4 text-cyan-400" />
                      </div>

                      <span className="text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}

                <Link
                  href="/contact"
                  className="mt-10 inline-flex items-center gap-2 font-semibold text-cyan-400 transition group-hover:gap-3"
                >
                  Let's Build This
                  <ArrowUpRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}