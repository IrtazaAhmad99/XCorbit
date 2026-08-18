"use client";

import { motion } from "framer-motion";

export default function OurStory() {
    return (
        <section className="relative py-28 md:py-36 overflow-hidden bg-[#050B18]">

            <div className="relative z-10 max-w-6xl mx-auto px-6">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-3xl mb-16"
                >
                    <span className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                        Our Story
                    </span>

                    <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                        Why we started{" "}
                        <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            CloodyKit
                        </span>
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        Every company starts with an idea. Ours started with
                        a simple belief — technology should help businesses
                        move forward.
                    </p>
                </motion.div>


                {/* Story Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >

                    {/* Decorative line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-cyan-400/70 via-cyan-400/20 to-transparent" />

                    <div className="pl-8 md:pl-12 max-w-4xl">

                        <p className="text-xl md:text-2xl leading-relaxed text-gray-200">
                            CloodyKit was built with a simple goal: to help
                            businesses use technology in a way that actually
                            creates value.
                        </p>

                        <p className="mt-8 text-lg leading-8 text-gray-400">
                            We saw businesses investing in websites, digital
                            tools, and online platforms without always getting
                            the results they expected. A website should not
                            simply exist. It should communicate, connect with
                            customers, and help a business grow.
                        </p>

                        <p className="mt-6 text-lg leading-8 text-gray-400">
                            That's where CloodyKit comes in. We combine modern
                            web development, AI solutions, and digital
                            automation to build experiences that are designed
                            around real business needs.
                        </p>


                        {/* Story milestones */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">

                            <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
                                <span className="text-cyan-400 text-sm font-semibold">
                                    01
                                </span>

                                <h3 className="mt-3 text-lg font-semibold text-white">
                                    The Idea
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-gray-400">
                                    A vision to build better digital
                                    experiences for modern businesses.
                                </p>
                            </div>


                            <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
                                <span className="text-cyan-400 text-sm font-semibold">
                                    02
                                </span>

                                <h3 className="mt-3 text-lg font-semibold text-white">
                                    The Journey
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-gray-400">
                                    Turning ideas into websites, AI systems,
                                    and practical digital solutions.
                                </p>
                            </div>


                            <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
                                <span className="text-cyan-400 text-sm font-semibold">
                                    03
                                </span>

                                <h3 className="mt-3 text-lg font-semibold text-white">
                                    The Future
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-gray-400">
                                    Helping businesses build, automate, and
                                    grow in an increasingly digital world.
                                </p>
                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}