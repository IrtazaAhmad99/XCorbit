"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import projects from "../../data/array"
import {
  Briefcase,
  ArrowUpRight,
  ArrowRight
} from "lucide-react";

import {
  fadeInUp,
  staggerContainer,
  cardVariant,
} from "../../utils/animations";





export default function FeaturedProjects() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#030712] py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md"
          >
            <Briefcase className="h-4 w-4" />
            Featured Work
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Projects That
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Deliver Results
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400"
          >
            Every project is built with performance, scalability, and business
            growth in mind. From full-stack web applications to AI-powered
            automation, we create digital solutions that make an impact.
          </motion.p>
        </motion.div>

        {/* Project Grid will go here in Chunk 2 */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project) => (
           <Link 
           key={project.id}
           href={`/featureProduct/${project.slug}`}>
            <motion.div
              variants={cardVariant}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_45px_rgba(34,211,238,0.15)]"
            >
              {/* Image */}

              <div className="relative h-64 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}

                <div className="absolute inset-0 bg-linear-to-t from-[#030712] via-[#030712]/30 to-transparent" />

              </div>

              {/* Content */}

              <div className="relative p-8">

                {/* Top */}

                <div className="flex items-center justify-between">

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                    {project.category}
                  </span>

                  <motion.div
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ArrowUpRight className="h-5 w-5 text-cyan-400" />
                  </motion.div>

                </div>

                {/* Title */}

                <h3 className="mt-6 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                  {project.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.technologies.map((tech) => (

                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.08 }}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 transition-colors duration-300 hover:border-cyan-400/40 hover:text-cyan-300"
                    >
                      {tech}
                    </motion.span>

                  ))}

                </div>

              </div>

              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-cyan-500/5 via-transparent to-blue-500/5" />
              </div>

            </motion.div>
           </Link>
          ))}
        </motion.div>
        {/* Bottom CTA */}

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-24 flex flex-col items-center justify-center text-center"
        >
          {/* Divider */}

          <div className="mb-10 h-px w-32 bg-linear-to-r from-transparent via-cyan-400/60 to-transparent" />

          {/* Heading */}

         

          
        </motion.div>


      </div>
    </section>
  );
}