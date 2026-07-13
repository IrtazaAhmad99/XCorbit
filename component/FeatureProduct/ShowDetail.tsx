"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { projects } from "../../data/array";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ShowDetail() {
  const { slug } = useParams();

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#030712] text-white">
        Project not found.
      </div>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] py-24 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-10 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6">

        {/* Hero Image */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          whileHover={{ scale: 1.02 }}
          className="overflow-hidden rounded-3xl border border-white/10"
        >
          <img
            src={project.details.img}
            alt={project.title}
            className="w-full object-cover transition duration-700 hover:scale-105"
          />
        </motion.div>

        {/* Title */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.1 }}
          className="mt-12"
        >
          <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            {project.category}
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            {project.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            {project.description}
          </p>
        </motion.div>

        {/* Overview */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <h2 className="mb-4 text-3xl font-bold">Overview</h2>

          <p className="leading-8 text-gray-300">
            {project.details.overview}
          </p>
        </motion.div>

        {/* Challenges */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <h2 className="mb-4 text-3xl font-bold">
            Challenges
          </h2>

          <p className="leading-8 text-gray-300">
            {project.details.challenges}
          </p>
        </motion.div>

        {/* Process */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <h2 className="mb-4 text-3xl font-bold">
            Development Process
          </h2>

          <p className="leading-8 text-gray-300">
            {project.details.process}
          </p>
        </motion.div>

        {/* Timeline */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-8"
        >
          <h2 className="mb-4 text-3xl font-bold">
            Timeline
          </h2>

          <span className="rounded-full bg-cyan-500 px-5 py-2 font-semibold text-black">
            {project.details.timeline}
          </span>
        </motion.div>

      </div>
    </main>
  );
}