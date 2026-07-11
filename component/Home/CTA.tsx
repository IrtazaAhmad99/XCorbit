"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  slideInLeft,
} from "../../utils/animations";




export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#060B17] py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/15 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="rounded-[40px] border border-cyan-500/20 bg-linear-to-br from-[#111827] to-[#0B1220] p-10 md:p-16 text-center">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2">
            <Sparkles className="h-4 w-4 text-cyan-400" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Let's Build Something Amazing
            </span>
          </div>

          {/* Heading */}

          <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl">
            Ready To Grow
            <br />
            Your Business?
          </h2>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Whether you need a business website, an AI-powered solution,
            an e-commerce platform, or a custom web application,
            CloodyKit is here to turn your ideas into reality.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

            <Link href="/contact" className="group inline-flex items-center justify-center gap-3 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400">
              Book Free Consultation

              <ArrowRight className="transition group-hover:translate-x-1" />
            </Link>


          </div>

          {/* Stats */}

          <div className="mt-16 grid gap-10 border-t border-slate-800 pt-10 sm:grid-cols-3">

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">
                10+
              </h3>

              <p className="mt-2 text-slate-400">
                Projects Built
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">
                100%
              </h3>

              <p className="mt-2 text-slate-400">
                Modern Tech Stack
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">
                24/7
              </h3>

              <p className="mt-2 text-slate-400">
                Dedicated Support
              </p>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}