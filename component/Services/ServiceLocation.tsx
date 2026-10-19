"use client";

import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";

const locations = [
    {
        country: "USA",
        cities: [
            "Miami",
            "New York",
            "Los Angeles",
            "Chicago",
            "Dallas",
        ],
    },
    {
        country: "Canada",
        cities: [
            "Toronto",
            "Vancouver",
            "Calgary",
            "Edmonton",
        ],
    },
    {
        country: "United Kingdom",
        cities: [
            "London",
            "Manchester",
            "Birmingham",
        ],
    },
    {
        country: "Australia",
        cities: [
            "Sydney",
            "Melbourne",
            "Brisbane",
        ],
    },
];

const services = [
    {
        title: "Web Development Services",
        keyword: "web development services",
        href: "/services/web-development",
        description:
            "Custom website development, responsive business websites, and web applications for businesses across our target markets.",
    },
    {
        title: "AI Automation Services",
        keyword: "AI automation services",
        href: "/services/ai-automation",
        description:
            "AI agents, workflow automation, and business process solutions designed to help companies work more efficiently.",
    },
    {
        title: "Business Growth Services",
        keyword: "business growth services",
        href: "/services/business-growth",
        description:
            "SEO and digital growth solutions that help businesses improve online visibility and attract relevant customers.",
    },
    {
        title: "E-commerce Development Services",
        keyword: "e-commerce development services",
        href: "/services/e-commerce",
        description:
            "E-commerce websites and online stores designed to deliver better shopping experiences and support business growth.",
    },
];

export default function ServiceLocations() {
    return (
        <section
            id="service-locations"
            className="relative overflow-hidden bg-[#060B17] py-24 sm:py-28"
        >
            <div className="mx-auto max-w-7xl px-6">
                {/* Section Heading */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2 text-sm text-slate-300">
                        <MapPin className="h-4 w-4 text-cyan-400" />
                        Our Service Areas
                    </div>

                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                        Where We Provide Services
                    </h2>

                    <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
                        CloodyKit works with businesses seeking web development,
                        AI automation, e-commerce solutions, and digital growth
                        services across the USA, Canada, the United Kingdom,
                        and Australia.
                    </p>
                </motion.div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {services.map((service, index) => (
                        <motion.article
                            key={service.href}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ delay: index * 0.08 }}
                            className="min-w-0 rounded-3xl border border-slate-800 bg-[#111827] p-6 transition-colors duration-300 hover:border-cyan-500/40 sm:p-8"
                        >
                            <Link href={service.href} >
                                <h3 className="text-xl font-bold text-white sm:text-2xl">
                                    {service.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-400">
                                    {service.description}
                                </p>

                                <div className="mt-7 border-t border-slate-800 pt-6">
                                    <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                                        Locations We Serve
                                    </h4>

                                    <div className="space-y-6">
                                        {locations.map((location) => (
                                            <div key={location.country}>
                                                <h5 className="mb-3 font-semibold text-white">
                                                    {location.country}
                                                </h5>

                                                <ul className="flex flex-wrap gap-2">
                                                    {location.cities.map((city) => (
                                                        <li key={city}>
                                                            <span className="inline-flex rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm leading-5 text-slate-300">
                                                                {service.keyword} in {city},{" "}
                                                                {location.country}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}