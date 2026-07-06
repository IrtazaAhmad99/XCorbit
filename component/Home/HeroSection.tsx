"use client"

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardVariant, } from "../../utils/animations";


export default function Hero() {

    return (

        <section id="#hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">

       
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/hero.jpg')" }}
            />

            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-[#050B18]/80" />

            {/* Glow Effects */}

            <div className="absolute top-20 left-1/2-translate-x-1/2 w-125 h-125 bg-cyan-500/20 blur-[120px] rounded-full" />

            <div className="relative z-10 max-w-5xl mx-auto mt-12 px-6 text-center pt-20">



                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-sm text-gray-300 mb-8">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    AI • Web • Digital Solutions
                </motion.div>


                <motion.h1
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-3xl md:text-3xl lg:text-6xl font-bold tracking-tight leading-tight text-white" >
                    We Build Modern Websites

                    <br />

                    <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                        & AI Soultions
                    </span>

                    <br />

                </motion.h1>


                <motion.p
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-gray-300">
                    We help businesses transform ideas into powerful websites,
                    AI solutions, and digital experiences that drive growth.
                </motion.p>


                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-10 flex flex-col sm:flex-row justify-center gap-4" >
                    <Link href="/contact"
                        className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-linear-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition">
                        Start a Project
                        <ArrowRight size={18} />

                    </Link>


                    <Link href="/featureProduct"
                        className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition">

                        <Play size={18} />

                        Explore Our Work

                    </Link>
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