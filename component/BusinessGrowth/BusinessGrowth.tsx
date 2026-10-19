"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Search,
  ChartNoAxesCombined,
  Target,
  Users,
  MousePointerClick,
  Globe,
  FileText,
  Gauge,
  TrendingUp,
  CheckCircle2,
  House,
  Stethoscope,
  Building2,
  Scale,
  Dumbbell,
  Store,
  ChevronDown,
  BarChart3,
  Lightbulb,
  ClipboardCheck,
  Megaphone,
  MapPin,
} from "lucide-react";

const reveal: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const services = [
  {
    icon: Search,
    number: "01",
    title: "Search Engine Optimization (SEO)",
    description:
      "SEO is a core part of business growth. We improve the technical and content foundations of your website so search engines can understand your pages and potential customers can find relevant services.",
    points: [
      "Keyword and search-intent research",
      "On-page SEO and metadata",
      "Technical SEO recommendations",
    ],
  },
  {
    icon: Globe,
    number: "02",
    title: "Website Content Strategy",
    description:
      "Plan useful, relevant website content around the questions your potential customers ask and the services your business offers.",
    points: [
      "Service-page content planning",
      "Topic and content-gap research",
      "Internal linking and page structure",
    ],
  },
  {
    icon: Target,
    number: "03",
    title: "Lead Generation Strategy",
    description:
      "Make it easier for the right visitors to understand your services and take the next step toward contacting your business.",
    points: [
      "Clear calls to action",
      "Contact and enquiry journey review",
      "Landing-page recommendations",
    ],
  },
  {
    icon: MousePointerClick,
    number: "04",
    title: "Website Conversion Improvement",
    description:
      "Identify friction in the customer journey and improve how your website presents information, builds clarity, and guides visitors.",
    points: [
      "Usability and page-structure review",
      "Mobile experience improvements",
      "Enquiry-flow recommendations",
    ],
  },
  {
    icon: MapPin,
    number: "05",
    title: "Local SEO Foundations",
    description:
      "Help eligible local businesses improve their local search presence through accurate business information and relevant local website content.",
    points: [
      "Google Business Profile guidance",
      "Local landing-page strategy",
      "Business information consistency",
    ],
  },
  {
    icon: BarChart3,
    number: "06",
    title: "Performance & Growth Tracking",
    description:
      "Use appropriate analytics and search performance data to understand what visitors do and where your website may need improvement.",
    points: [
      "Search performance monitoring",
      "Website analytics setup guidance",
      "Data-informed improvement priorities",
    ],
  },
];

const industries = [
  {
    icon: House,
    title: "Business Growth for HVAC, Roofing & Plumbing",
    description:
      "Help local customers find relevant services, understand your service areas, and request an estimate or appointment.",
  },
  {
    icon: Stethoscope,
    title: "Business Growth for Skin & Dental Clinics",
    description:
      "Organize treatment and service information clearly and make it easier for prospective patients to enquire or book.",
  },
  {
    icon: Building2,
    title: "Business Growth for Real Estate Agencies",
    description:
      "Build useful location and property-related content that supports people researching local real estate services.",
  },
  {
    icon: Scale,
    title: "Business Growth for Law Firms",
    description:
      "Structure practice-area pages around relevant client questions while maintaining appropriate professional and advertising standards.",
  },
  {
    icon: Dumbbell,
    title: "Business Growth for Gyms & Fitness Studios",
    description:
      "Present memberships, classes, facilities, and introductory offers clearly so potential members can take the next step.",
  },
  {
    icon: Store,
    title: "Business Growth for Shops, Cafes & Local Businesses",
    description:
      "Improve discoverability for relevant local searches and make essential details, products, and contact options easy to find.",
  },
];

const locationGroups = [
  {
    country: "United States",
    label: "the United States",
    cities: [
      "Atlanta", "Charlotte", "Chicago", "Dallas", "Denver", "Houston",
      "Los Angeles", "Miami", "Nashville", "New York", "Philadelphia",
      "Phoenix", "San Antonio", "San Francisco", "Seattle", "Tampa",
    ],
  },
  {
    country: "Canada",
    label: "Canada",
    cities: ["Calgary", "Edmonton", "Ottawa", "Toronto", "Vancouver"],
  },
  {
    country: "United Kingdom",
    label: "the United Kingdom",
    cities: ["Birmingham", "London", "Manchester"],
  },
  {
    country: "Australia",
    label: "Australia",
    cities: ["Melbourne", "Sydney"],
  },
];

const process = [
  {
    number: "01",
    title: "Understand Your Goals",
    description:
      "We review your business, audience, services, target markets, and what you want your website to achieve.",
  },
  {
    number: "02",
    title: "Audit & Prioritize",
    description:
      "We identify SEO, content, usability, and conversion opportunities, then prioritize the work most relevant to your goals.",
  },
  {
    number: "03",
    title: "Implement Improvements",
    description:
      "We improve agreed website elements, content structure, technical foundations, and enquiry journeys.",
  },
  {
    number: "04",
    title: "Measure & Refine",
    description:
      "We review available performance data and refine the approach as we learn what is working and what needs attention.",
  },
];

const faqs = [
  {
    question: "What does Business Growth mean at CloodyKit?",
    answer:
      "Our business growth services focus on improving your website's visibility, content, usability, and ability to generate relevant enquiries. The right combination depends on your current website and business goals.",
  },
  {
    question: "Does this service include SEO?",
    answer:
      "Yes. SEO is a core part of our business growth service. It can include keyword research, on-page improvements, technical SEO, content planning, and local SEO foundations where relevant.",
  },
  {
    question: "Do you provide business growth services in the USA, UK, Canada, and Australia?",
    answer:
      "CloodyKit can discuss business growth and SEO projects with businesses in these markets. Contact us with your location, website, and goals so we can confirm whether your project is a fit.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO usually takes time, and the timeline depends on competition, website condition, content quality, website authority, and the work being done. Some improvements can be implemented quickly, but ranking and traffic changes are not guaranteed.",
  },
  {
    question: "Can you guarantee that my website will rank first on Google?",
    answer:
      "No. Search rankings depend on many factors outside any agency's control. We focus on sound SEO practices, relevant content, technical improvements, and measurable progress rather than guaranteed rankings.",
  },
  {
    question: "Can you help a local service business get more enquiries?",
    answer:
      "We can improve relevant website content, local SEO foundations, calls to action, and enquiry journeys. Results depend on your market, competition, service offering, website, and how potential customers search.",
  },
  {
    question: "Do I need a new website before starting SEO?",
    answer:
      "Not always. An existing website may be suitable for improvements. If its structure, performance, usability, or technical limitations prevent effective optimization, we can discuss whether development work is also needed.",
  },
  {
    question: "How much do business growth and SEO services cost?",
    answer:
      "Pricing depends on the size of your website, the amount of work needed, your market, and how much ongoing support you want. After reviewing your goals and current website, we propose a scope that matches your requirements.",
  },
  {
    question: "How do you measure progress?",
    answer:
      "Depending on your setup, useful indicators may include search impressions, relevant organic clicks, keyword visibility, qualified enquiries, and conversion actions. We choose metrics that align with your goals instead of focusing on traffic alone.",
  },
];

export default function BusinessGrowth() {
  return (
    <main className="overflow-hidden bg-[#080b14] text-white">
      {/* HERO */}
      <section className="relative isolate px-6 pb-24 pt-24 sm:px-10 sm:pb-28 sm:pt-32 lg:px-16">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-20 -top-16 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute -left-24 top-64 h-80 w-80 rounded-full bg-cyan-500/10 blur-[110px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[64px_64px] mask-[linear-gradient(to_bottom,black,transparent_90%)]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={reveal}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2 text-sm text-cyan-200"
            >
              <TrendingUp size={16} />
              Business Growth Services
            </motion.div>

            <motion.h1
              variants={reveal}
              className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="bg-linear-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Business Growth Digital Marketing Services in the USA, UK, Canada &amp; Australia
              </span>{" "}
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              Build a stronger foundation for business growth with SEO, useful
              website content, better customer journeys, and data-informed
              improvements designed around your business goals.
            </motion.p>

            <motion.div
              variants={reveal}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-medium text-white transition hover:bg-blue-400"
              >
                Discuss Your Growth Goals
                <ArrowRight size={18} />
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3.5 font-medium text-slate-200 transition hover:border-cyan-300/50 hover:bg-white/4"
              >
                Explore Services
              </a>
            </motion.div>

            <motion.div
              variants={reveal}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400"
            >
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-300" />
                Built around your goals
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-300" />
                Focused on useful outcomes
              </span>
            </motion.div>
          </motion.div>

          {/* HERO VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-lg"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative rounded-3xl border border-white/10 bg-white/4 p-5 shadow-2xl shadow-blue-950/40 backdrop-blur-xl sm:p-7"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm text-slate-400">Growth overview</p>
                  <p className="mt-1 text-lg font-semibold">
                    Build a stronger foundation
                  </p>
                </div>
                <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                  <ChartNoAxesCombined size={24} />
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-[#101725] p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-blue-400/10 p-3 text-blue-300">
                      <Search size={22} />
                    </div>
                    <div>
                      <p className="font-medium">Search visibility</p>
                      <p className="mt-1 text-sm text-slate-400">
                        Help relevant customers find your pages
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#101725] p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-violet-400/10 p-3 text-violet-300">
                      <FileText size={22} />
                    </div>
                    <div>
                      <p className="font-medium">Useful website content</p>
                      <p className="mt-1 text-sm text-slate-400">
                        Answer questions and explain your services
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/6 p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-cyan-300/10 p-3 text-cyan-200">
                      <Target size={22} />
                    </div>
                    <div>
                      <p className="font-medium">Clear next steps</p>
                      <p className="mt-1 text-sm text-slate-400">
                        Guide visitors toward useful actions
                      </p>
                    </div>
                    <ArrowRight size={20} className="ml-auto text-cyan-300" />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-3 rounded-xl bg-white/[0.035] p-4">
                <Lightbulb size={20} className="mt-0.5 shrink-0 text-cyan-300" />
                <p className="text-sm leading-6 text-slate-400">
                  A practical growth plan connects visibility, useful content,
                  and a clear customer journey.
                </p>
              </div>
            </motion.div>

            <div className="pointer-events-none absolute -bottom-7 -right-4 -z-10 h-40 w-40 rounded-full bg-blue-500/20 blur-[70px]" />
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-y border-white/[0.07] bg-white/2 px-6 py-16 sm:px-10 lg:px-16">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            A practical approach to growth
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Business growth starts with being found and making the next step clear.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400">
            A website can look good and still struggle to attract relevant
            visitors or generate enquiries. Business growth involves
            understanding how customers search, improving the pages they land
            on, and making it easier for them to take action. We focus on these
            connected pieces instead of treating traffic as the only measure of
            success.
          </p>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Our services
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Business growth services: the building blocks of online growth
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              We help you prioritize the improvements that fit your website,
              audience, and business objectives.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
                  variants={reveal}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group rounded-2xl border border-white/10 bg-white/2.5 p-6 transition-colors hover:border-cyan-300/30 hover:bg-white/4.5 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl border border-cyan-300/15 bg-cyan-300/8 p-3 text-cyan-200 transition group-hover:bg-cyan-300/[0.14]">
                      <Icon size={23} />
                    </div>
                    <span className="text-sm text-slate-600">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-21 text-sm leading-7 text-slate-400">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-slate-300"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-cyan-300"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="border-y border-white/[0.07] bg-[#0b101c] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-14 max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Industry use cases
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Business growth strategies for HVAC, clinics, real estate, law firms &amp; more
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              The right strategy depends on how people search for your services
              and what they need to know before contacting you.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <motion.div
                  key={industry.title}
                  variants={reveal}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl border border-white/8 bg-[#080b14]/70 p-6"
                >
                  <Icon size={24} className="text-cyan-300" />
                  <h3 className="mt-5 text-lg font-semibold">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {industry.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* GROWTH FOUNDATIONS */}
      <section className="px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              How we approach growth
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Focus on business growth you can measure.
            </h2>
            <p className="mt-6 leading-8 text-slate-400">
              More visitors are not always better if they are unlikely to
              become customers. We help connect search visibility, relevant
              content, website usability, and enquiry actions so improvements
              can be evaluated against your actual goals.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 font-medium text-cyan-300 transition hover:text-cyan-200"
            >
              Talk about your growth plan
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {[
              {
                icon: Search,
                title: "Relevant visibility",
                text: "Focus on search terms and pages that match your services and audience.",
              },
              {
                icon: FileText,
                title: "Useful content",
                text: "Answer real customer questions and explain your services clearly.",
              },
              {
                icon: Users,
                title: "Better customer journeys",
                text: "Help visitors understand your offer and find the next step.",
              },
              {
                icon: ClipboardCheck,
                title: "Clear priorities",
                text: "Use audits and available data to decide what to improve first.",
              },
              {
                icon: Gauge,
                title: "Technical foundations",
                text: "Address relevant crawlability, usability, and performance issues.",
              },
              {
                icon: Megaphone,
                title: "Consistent messaging",
                text: "Keep your website's service descriptions and calls to action clear.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={reveal}
                  className="rounded-2xl border border-white/10 bg-white/2.5 p-5"
                >
                  <Icon size={23} className="text-cyan-300" />
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section
        id="locations"
        className="scroll-mt-24 border-t border-white/[0.07] bg-[#0b101c] px-6 py-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-14 max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Locations
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Business growth services in the USA, UK, Canada &amp; Australia
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              We help businesses in the United States, Canada, the United
              Kingdom, and Australia improve their online visibility and
              enquiry journeys. If your business is based in one of these
              markets, contact us to discuss your goals and confirm project fit
              and availability.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-5 md:grid-cols-2"
          >
            {locationGroups.map(({ country, label, cities }) => (
              <motion.article
                key={country}
                variants={reveal}
                className="rounded-2xl border border-white/8 bg-[#080b14]/70 p-6 sm:p-7"
              >
                <h3 className="text-xl font-semibold">
                  Business Growth in {label}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cities.map((city) => (
                    <li
                      key={city}
                      className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-sm text-slate-300"
                    >
                      Business Growth {city}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-white/[0.07] bg-white/2 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Our process
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Our business growth process: from review to improvement
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              We establish priorities, implement agreed changes, and use
              available evidence to guide the next steps.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          >
            {process.map((step) => (
              <motion.div
                key={step.number}
                variants={reveal}
                className="rounded-2xl border border-white/10 bg-[#080b14] p-6"
              >
                <span className="text-sm font-semibold tracking-widest text-cyan-300">
                  STEP {step.number}
                </span>
                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-10 text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              FAQs
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Business growth &amp; SEO FAQs
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-3"
          >
            {faqs.map((faq) => (
              <motion.details
                key={faq.question}
                variants={reveal}
                className="group rounded-xl border border-white/10 bg-white/2.5 p-5 open:border-cyan-300/25"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-slate-100">
                  {faq.question}
                  <ChevronDown
                    size={19}
                    className="shrink-0 text-cyan-300 transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="mt-4 pr-6 text-sm leading-7 text-slate-400">
                  {faq.answer}
                </p>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24 sm:px-10 lg:px-16">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-cyan-300/15 bg-linear-to-br from-blue-600/20 via-[#101729] to-cyan-500/8 px-6 py-14 text-center sm:px-12 sm:py-16"
        >
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-blue-500/20 blur-[90px]" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
              <TrendingUp size={27} />
            </div>

            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Let’s build a stronger foundation for your business growth.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              Tell us about your business, your website, and what you want to
              improve. We’ll help you identify practical next steps for SEO,
              visibility, and generating relevant enquiries.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-medium text-white transition hover:bg-blue-400"
            >
              Discuss Your Growth Goals
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

