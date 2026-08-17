"use client";


import { motion } from "framer-motion";

const FounderHerosection = () => {
  return (
     <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050B18]">

            <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-24">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT — Founder Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center lg:justify-start"
                    >
                        <div className="relative">

                            {/* Glow behind image */}
                            <div className="absolute -inset-6 bg-cyan-400/20 blur-3xl rounded-full" />

                            {/* Image container */}
                            <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border border-cyan-400/20 bg-white/5">

                                {/* <Image
                                    src="/images/founder.jpg"
                                    alt="Irtaza Ahmad - Founder of CloodyKit"
                                    fill
                                    className="object-cover"
                                    priority
                                /> */}

                            </div>

                        </div>
                    </motion.div>


                    {/* RIGHT — Introduction */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >

                        {/* Small label */}
                        <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-sm text-cyan-300">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            Founder of CloodyKit
                        </span>


                        {/* Name */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                            Irtaza Ahmad
                        </h1>


                        {/* Introduction */}
                        <p className="mt-6 text-lg md:text-xl leading-8 text-gray-300 max-w-xl">
                            I’m the founder behind CloodyKit, building modern
                            digital experiences that combine web development,
                            AI, and technology to help businesses grow.
                        </p>


                        {/* Small statement */}
                        <p className="mt-5 text-base leading-7 text-gray-400 max-w-xl">
                            I believe technology should do more than just look
                            good. It should solve real problems, create better
                            experiences, and help businesses move forward.
                        </p>


                        {/* Signature / intro line */}
                        <div className="mt-8 flex items-center gap-4">

                            <div className="h-px w-12 bg-cyan-400" />

                            <span className="text-sm tracking-widest uppercase text-gray-500">
                                Building what comes next
                            </span>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
  )
}

export default FounderHerosection