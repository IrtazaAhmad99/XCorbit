"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  slideInLeft,
} from "../../utils/animations";
import PrimaryButton from "@/ui/PrimaryButton";
import {pro} from "../../data/array"



export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#060B17] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto mb-24 max-w-3xl text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="inline-flex items-center rounded-full border border-cyan-500/20 px-5 py-2"
          >
            <span className="mr-2 h-2 w-2 rounded-full bg-cyan-400" />

            <PrimaryButton href="/featureProduct" text="Explore Our Work" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="mt-8 text-4xl font-bold text-white md:text-6xl">
            Featured Projects
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="mt-6 text-lg leading-8 text-slate-400">
            Real products built with modern technologies for businesses,
            startups, and entrepreneurs.
          </motion.p>
        </div>

        {/* Projects */}

        <div className="space-y-32">
          {pro.map((project, index) => (
            <div
              key={project.id}
              className={`grid items-center gap-16 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
            >
              {/* Image */}

              <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-[#111827]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={900}
                  height={650}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Content */}

              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  {project.category}
                </span>

                <h3 className="mt-4 text-4xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-6 leading-8 text-slate-400">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button */}

                <button className="group mt-10 inline-flex items-center gap-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-cyan-300 transition hover:bg-cyan-500 hover:text-black">
                  View Project

                  <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}