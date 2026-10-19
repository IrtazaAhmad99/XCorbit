"use client"

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardVariant, } from "../../utils/animations";
import ParticleBackground from "../Particle/ParticleBackgroung";


export default function Hero() {

    return (

        <section id="#hero" className="relative min-h-screen flex items-center justify-center overflow-hidden ">


            <div className="absolute inset-0 bg-[#050B18]/80" />

            <div className="absolute top-20 left-1/2-translate-x-1/2 w-125 h-125 bg-cyan-500/20 blur-[120px] rounded-full" />


            <ParticleBackground />

            <div className="relative z-10 max-w-5xl mx-auto mt-12 px-6 text-center pt-20">



                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-sm text-gray-300 mb-8">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    Web Development • AI Automation •  Digital Marketing •  E-Commerce
                </motion.div>


                <motion.h1
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-3xl md:text-3xl lg:text-6xl font-bold tracking-tight leading-tight text-white" >
                    Web Development & AI Automation

                    <br />

                    <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                        for Businesses
                    </span>

                    <br />

                </motion.h1>


                <motion.p
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-gray-300">
                    CloodyKit provides{" "}
                    <Link
                        href="/services/web-development"
                        className="text-cyan-300 underline-offset-4 hover:underline"
                    >
                        web development
                    </Link>
                    ,{" "}
                    <Link
                        href="/services/ai-automation"
                        className="text-cyan-300 underline-offset-4 hover:underline"
                    >
                        AI automation
                    </Link>
                    ,
                    <Link
                        href="/services/business-growth"
                        className="text-cyan-300 underline-offset-4 hover:underline"
                    >
                        Business Growth
                    </Link>
                    , and{" "}
                    <Link
                        href="/services/e-commerce"
                        className="text-cyan-300 underline-offset-4 hover:underline"
                    >
                        E-Commerce
                    </Link>{" "}
                    for HVAC, roofing, plumbing, clinics, law firms, gyms, and
                    restaurants, stores, clothings stores and Brands in the USA, UK, Canada, and Australia.
                </motion.p>




                {/* Project Path Selection */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto"
                >
                    {/* Start a Project */}
                    <motion.div
                        variants={cardVariant}
                        className="group flex flex-col items-start text-left p-3 sm:p-6 md:p-8 rounded-2xl border border-cyan-400/20 bg-white/3 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/6 hover:-translate-y-1" >
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                            <ArrowRight size={24} />
                        </div>

                        <h2 className="text-sm sm:text-lg md:text-2xl font-semibold text-white">
                            I know what I want to build
                        </h2>

                        <p className="mt-3 flex-1 text-sm sm:text-base leading-7 text-gray-400">
                            Have a clear idea for a new website, online store,
                            or AI automation? Tell us what you need, and
                            let&apos;s bring it to life.
                        </p>

                        <Link
                            href="/contact"
                            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-400 to-purple-500 px-6 py-3.5 font-semibold text-black transition hover:scale-[1.02]"
                        >
                            Start a Project
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>

                    {/* Book a Consultation */}
                    <motion.div variants={cardVariant}
                        className="group flex flex-col items-start text-left p-3 sm:p-6 md:p-8 rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-400/5 hover:-translate-y-1" >
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-400/10 text-purple-300">
                            <Play size={24} />
                        </div>

                        <h2 className="text-sm sm:text-lg md:text-2xl font-semibold text-white">
                            I want to discuss my idea first
                        </h2>

                        <p className="mt-3 flex-1 text-sm sm:text-base leading-7 text-gray-400">
                            Not sure where to start? Let&apos;s discuss your
                            goals and explore whether a new website, AI
                            automation, or SEO is the right fit for your
                            business.
                        </p>

                        <Link
                            href="/booking"
                            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:border-purple-400/50 hover:bg-white/10"
                        >
                            Book Consultation
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </motion.div>



                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    animate="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-20 mb-5 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10" >
                    {
                        [
                            ["10+", "Projects Shipped"],
                            ["10+", "Happy Clients"],
                            ["4.9/5", "Client Rating"],
                            ["24/7", "Support"]

                        ].map((item) => (


                            <div key={item[1]}>

                                <h3 className="text-3xl font-bold text-white">

                                    {item[0]}

                                </h3>


                                <p className=" text-xs uppercase tracking-widest text-gray-400 mt-2" >

                                    {item[1]}

                                </p>


                            </div>


                        ))

                    }

                </motion.div>

            </div>



        </section>


    )
}