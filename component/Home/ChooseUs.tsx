"use client";

import {ArrowRight} from "lucide-react";
import PrimaryButton from "../../ui/PrimaryButton";
import { fadeInUp, staggerContainer, cardVariant, } from "../../utils/animations";
import { motion } from "framer-motion";
import {feat} from "../../data/array"



export default function WhyChooseUs() {
  return (
    <section
      id="chooseus"
      className="relative overflow-hidden bg-[#060B17] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_right,rgba(6,182,212,0.12),transparent_65%)]" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          animate="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center rounded-full border border-cyan-500/20  px-5 py-2">
              <span className="mr-2 h-2 w-2 rounded-full bg-cyan-400" />
              <PrimaryButton href="/chooseus" text="Trusted Partner" />
            </div>


            <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl">
              Your Trusted Partner
              <br />
              For Digital Success
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              At CloodyKit, we don't just develop websites—we create modern,
              scalable digital solutions that help businesses grow, automate
              processes, and deliver better customer experiences.
            </p>

          </div>

          {/* Right Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {feat.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-slate-800 bg-[#111827] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-[0_0_35px_rgba(6,182,212,0.08)]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1B2A4A] transition-colors duration-300 group-hover:bg-cyan-500/10">
                    <Icon className="h-7 w-7 text-cyan-400" />
                  </div>

                  <h3 className="mb-4 text-xl font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="leading-7 text-slate-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}