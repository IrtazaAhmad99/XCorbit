"use client";

import { motion } from "framer-motion";
import { insights } from "../../data/array";


export default function OurMission() {
    return (
        <section className="relative py-28 md:py-36 overflow-hidden bg-[#050B18]">

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-3xl"
                >
                    <span className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                        Our Mission
                    </span>

                    <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                        Building technology that{" "}
                        <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                            moves businesses forward.
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-400 max-w-2xl">
                        Our mission is simple: build digital experiences and
                        intelligent solutions that help businesses attract
                        customers, work smarter, and grow.
                    </p>
                </motion.div>


                {/* What We Believe */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl border border-white/10 bg-white/3 p-8"
                    >
                        <span className="text-cyan-400 text-sm uppercase tracking-widest">
                            Web Development
                        </span>

                        <h3 className="mt-4 text-2xl font-semibold text-white">
                            Websites built for real businesses
                        </h3>

                        <p className="mt-4 text-gray-400 leading-7">
                            We create modern, responsive websites designed to
                            give businesses a professional online presence,
                            communicate their value, and turn visitors into
                            potential customers.
                        </p>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="rounded-3xl border border-white/10 bg-white/3 p-8"
                    >
                        <span className="text-cyan-400 text-sm uppercase tracking-widest">
                            AI Solutions
                        </span>

                        <h3 className="mt-4 text-2xl font-semibold text-white">
                            Technology that works while you work
                        </h3>

                        <p className="mt-4 text-gray-400 leading-7">
                            We explore AI automation, intelligent chat
                            systems, lead capture, and digital workflows that
                            help businesses save time and create better
                            customer experiences.
                        </p>
                    </motion.div>

                </div>


                {/* Founder Insights */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-28"
                >

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">

                        <div>
                            <span className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                                Founder Insights
                            </span>

                            <h3 className="mt-4 text-3xl md:text-4xl font-bold text-white">
                                Ideas, guides & experiences
                            </h3>
                        </div>

                        <p className="text-gray-400 max-w-md leading-7">
                            Thoughts on web development, AI automation, local
                            SEO, and digital growth for modern businesses.
                        </p>

                    </div>


                    {/* Articles */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {insights.map((insight, index) => (

                            <motion.article
                                key={insight.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                className="group rounded-3xl border border-white/10 bg-white/3 p-7 hover:border-cyan-400/30 transition"
                            >

                                <span className="text-sm text-cyan-400">
                                    {insight.category}
                                </span>

                                <h4 className="mt-4 text-xl font-semibold text-white group-hover:text-cyan-300 transition">
                                    {insight.title}
                                </h4>

                                <p className="mt-4 text-gray-400 leading-7">
                                    {insight.description}
                                </p>


                            </motion.article>

                        ))}

                    </div>

                </motion.div>

            </div>

        </section>
    );
}