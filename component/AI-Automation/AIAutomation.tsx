"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Workflow,
  MessageCircle,
  CalendarCheck,
  UserRoundSearch,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Stethoscope,
  House,
  Scale,
  Dumbbell,
  Store,
  ChevronDown,
  Clock3,
  ChartNoAxesCombined,
} from "lucide-react";

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
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
    icon: MessageCircle,
    number: "01",
    title: "AI Chatbot Development",
    description:
      "Our AI chatbots give website visitors useful answers, guide them toward the right service, and capture enquiries—even when your team is unavailable.",
    points: [
      "Answer common customer questions",
      "Collect contact details and enquiries",
      "Guide visitors toward relevant services",
    ],
  },
  {
    icon: UserRoundSearch,
    number: "02",
    title: "AI Lead Qualification Automation",
    description:
      "Help your business identify promising enquiries with AI automation that asks relevant questions and organizes the information your team needs.",
    points: [
      "Ask qualifying questions",
      "Collect project or service requirements",
      "Route suitable leads to your team",
    ],
  },
  {
    icon: CalendarCheck,
    number: "03",
    title: "Booking & Follow-Up Automation",
    description:
      "Reduce manual back-and-forth by connecting enquiry workflows with appointment scheduling and timely automated follow-ups.",
    points: [
      "Support appointment requests",
      "Send confirmations and reminders",
      "Follow up on enquiries automatically",
    ],
  },
  {
    icon: Workflow,
    number: "04",
    title: "Business Workflow Automation",
    description:
      "Connect repetitive tasks across your tools so information moves between systems without unnecessary manual work.",
    points: [
      "Connect forms, email, and CRM tools",
      "Organize and route incoming requests",
      "Automate repetitive administrative tasks",
    ],
  },
  {
    icon: Bot,
    number: "05",
    title: "Custom AI Assistant Development",
    description:
      "Build AI-powered assistants around your business processes, approved information, and the tasks you want to simplify.",
    points: [
      "Assist with internal information searches",
      "Support staff with routine tasks",
      "Use your business-specific workflows",
    ],
  },
  {
    icon: ChartNoAxesCombined,
    number: "06",
    title: "AI Business Process Automation",
    description:
      "Identify suitable opportunities to use AI automation in customer communication, information handling, and day-to-day operations.",
    points: [
      "Review repetitive business processes",
      "Reduce unnecessary manual data handling",
      "Build around measurable business needs",
    ],
  },
];

const industries = [
  {
    icon: House,
    title: "AI Automation for HVAC, Roofing & Plumbing",
    description:
      "Capture service enquiries, collect job details, and help customers request appointments or estimates.",
  },
  {
    icon: Stethoscope,
    title: "AI Automation for Skin & Dental Clinics",
    description:
      "Answer general service questions, collect appointment requests, and direct patients to staff when needed.",
  },
  {
    icon: Building2,
    title: "AI Automation for Real Estate Agencies",
    description:
      "Ask buyers and renters about their requirements, organize enquiries, and help route leads to the right agent.",
  },
  {
    icon: Scale,
    title: "AI Automation for Law Firms",
    description:
      "Collect basic enquiry details and direct prospective clients toward the appropriate team or consultation process.",
  },
  {
    icon: Dumbbell,
    title: "AI Automation for Gyms & Fitness Studios",
    description:
      "Respond to membership questions, explain available plans, and capture trial-session or consultation requests.",
  },
  {
    icon: Store,
    title: "AI Automation for Shops & Local Businesses",
    description:
      "Answer frequently asked questions, guide customers through product or service options, and organize incoming requests.",
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
    title: "Understand Your Workflow",
    description:
      "We identify repetitive tasks, customer bottlenecks, and the places where automation could genuinely help.",
  },
  {
    number: "02",
    title: "Plan the Right Solution",
    description:
      "We define the workflow, tools, data access, human handoffs, and what a successful result should look like.",
  },
  {
    number: "03",
    title: "Build & Integrate",
    description:
      "We configure the AI or automation and connect it to the relevant website, business tools, or systems.",
  },
  {
    number: "04",
    title: "Test & Improve",
    description:
      "We test real scenarios, handle edge cases, and refine the workflow before and after launch.",
  },
];

const faqs = [
  {
    question: "What can AI automation do for my business?",
    answer:
      "It can help answer common questions, organize leads, support booking workflows, send follow-ups, and connect repetitive tasks across business tools. The right solution depends on your actual process and requirements.",
  },
  {
    question: "Do I need an AI chatbot on my website?",
    answer:
      "Not necessarily. A chatbot can be useful when customers repeatedly ask similar questions or need help choosing a service. If your main problem is internal administration or disconnected tools, workflow automation may be a better fit.",
  },
  {
    question: "Do you provide AI automation services in the USA, UK, Canada, and Australia?",
    answer:
      "CloodyKit can discuss AI automation projects with businesses in these markets. Contact us with your location, requirements, and preferred working arrangements so we can confirm whether your project is a fit.",
  },
  {
    question: "Can you connect AI automation to my existing tools?",
    answer:
      "In many cases, yes. Integration depends on the tools' APIs, available connectors, permissions, and technical limitations. We assess compatibility before choosing an implementation.",
  },
  {
    question: "Will AI replace my team?",
    answer:
      "Our goal is to support your team by reducing repetitive work, not to remove human judgment where it matters. Sensitive, complex, or uncertain cases can be routed to a person.",
  },
  {
    question: "How much does an AI automation project cost?",
    answer:
      "Pricing depends on the number of workflows, integrations, complexity, and ongoing support needed. We first clarify the problem and scope so the proposed solution matches your requirements.",
  },
  {
    question: "How long does it take to set up AI automation?",
    answer:
      "The timeline depends on the number of workflows, the tools involved, and how ready your processes and information are. We discuss the scope and expected timeline with you before confirming project details.",
  },
  {
    question: "How do you handle privacy and inaccurate AI answers?",
    answer:
      "The design should limit access to necessary information, account for data privacy, test likely failure cases, and define when the system must hand off to a human. The appropriate safeguards depend on the use case and data involved.",
  },
];

export default function AIAutomation() {
  return (
    <main className="overflow-hidden bg-[#080b14] text-white">
      {/* HERO */}
      <section className="relative isolate px-6 pb-24 pt-24 sm:px-10 sm:pb-28 sm:pt-32 lg:px-16">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-24 -top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute -left-20 top-64 h-80 w-80 rounded-full bg-cyan-500/10 blur-[110px]" />
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
              <Zap size={15} />
              AI Automation Services
            </motion.div>

            <motion.h1
              variants={reveal}
              className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="bg-linear-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                AI Automation
              </span>{" "}
              Services for Businesses in the USA, UK, Canada &amp; Australia
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              Spend less time on repetitive tasks. CloodyKit is an AI automation
              company that helps businesses build practical AI assistants,
              automate workflows, and improve the way they manage customer
              enquiries and everyday operations.
            </motion.p>

            <motion.div
              variants={reveal}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-medium text-white transition hover:bg-blue-400"
              >
                Discuss Your Project
                <ArrowRight size={18} />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3.5 font-medium text-slate-200 transition hover:border-cyan-300/50 hover:bg-white/4"
              >
                Explore Solutions
              </a>
            </motion.div>

            <motion.div
              variants={reveal}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400"
            >
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-300" />
                Built around your workflow
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-300" />
                Human handoffs when needed
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
              animate={{ y: [0, -9, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative rounded-3xl border border-white/10 bg-white/4 p-5 shadow-2xl shadow-blue-950/40 backdrop-blur-xl sm:p-7"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm text-slate-400">Automation overview</p>
                  <p className="mt-1 text-lg font-semibold">
                    Your workflow, connected
                  </p>
                </div>
                <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                  <Workflow size={24} />
                </div>
              </div>

              <div className="space-y-4 py-6">
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#101725] p-4">
                  <div className="rounded-xl bg-blue-400/10 p-3 text-blue-300">
                    <MessageCircle size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">Customer enquiry</p>
                    <p className="mt-1 text-sm text-slate-400">
                      A visitor asks about your service
                    </p>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                </div>

                <div className="ml-8 h-5 border-l border-dashed border-cyan-400/40" />

                <div className="flex items-center gap-4 rounded-2xl border border-cyan-300/20 bg-cyan-300/6 p-4">
                  <div className="rounded-xl bg-cyan-300/10 p-3 text-cyan-200">
                    <Bot size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">AI-powered workflow</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Organize details and identify next steps
                    </p>
                  </div>
                  <span className="rounded-full border border-cyan-300/20 px-2 py-1 text-xs text-cyan-200">
                    AI
                  </span>
                </div>

                <div className="ml-8 h-5 border-l border-dashed border-cyan-400/40" />

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#101725] p-4">
                  <div className="rounded-xl bg-violet-400/10 p-3 text-violet-300">
                    <CalendarCheck size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">Next step completed</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Route, follow up, or request human review
                    </p>
                  </div>
                  <CheckCircle2 size={20} className="text-cyan-300" />
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-white/[0.035] p-4">
                <ShieldCheck size={19} className="mt-0.5 shrink-0 text-cyan-300" />
                <p className="text-sm leading-6 text-slate-400">
                  Each workflow is designed around your requirements, with
                  appropriate checks and human oversight where needed.
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
            Practical AI for real business needs
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            AI automation should solve a problem, not add complexity.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400">
            Repetitive admin, slow enquiry responses, and disconnected tools can
            make everyday work harder than it needs to be. Our AI automation
            services help you identify the right opportunities and build a
            solution around your existing process—not force your business into
            a one-size-fits-all system.
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
              What we build
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              AI automation services designed around your business
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              From customer-facing AI assistants to behind-the-scenes workflow
              automation, choose the solution that fits your needs.
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
              Use cases by industry
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              AI automation for HVAC, clinics, real estate, law firms &amp; more
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Different industries have different workflows. We start with
              your customers, your team, and the tasks that take up the most
              time.
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

          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 text-sm leading-6 text-slate-500"
          >
            These are examples, not fixed packages. The right level of
            automation depends on your business, systems, and customer needs.
          </motion.p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Why CloodyKit
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              AI automation that fits the way you work
            </h2>
            <p className="mt-6 leading-8 text-slate-400">
              Effective automation starts with understanding your process.
              We focus on practical implementation, clear workflows, and
              integrations that serve a real business purpose.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 font-medium text-cyan-300 transition hover:text-cyan-200"
            >
              Talk to us about your workflow
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
                icon: UserRoundSearch,
                title: "Problem-first planning",
                text: "Choose automation based on a genuine bottleneck—not hype.",
              },
              {
                icon: Workflow,
                title: "Connected workflows",
                text: "Plan how information moves between your existing tools.",
              },
              {
                icon: ShieldCheck,
                title: "Human oversight",
                text: "Set boundaries and handoffs for sensitive or uncertain cases.",
              },
              {
                icon: Clock3,
                title: "Designed to save effort",
                text: "Target repetitive tasks and make processes easier to manage.",
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
              AI automation services in the USA, UK, Canada &amp; Australia
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              We build AI automation for businesses in the United States,
              Canada, the United Kingdom, and Australia. If your business is
              based in one of these markets, contact us to discuss your
              workflow and confirm project fit and availability.
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
                  AI Automation in {label}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cities.map((city) => (
                    <li
                      key={city}
                      className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-sm text-slate-300"
                    >
                      AI Automation {city}
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
              Our AI automation process: from repetitive task to working solution
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              A clear process helps us build the right thing and avoid adding
              unnecessary complexity.
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
              AI automation FAQs
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
              <Zap size={27} />
            </div>

            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to make your business workflows work smarter?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              Tell us what is taking too much time, creating friction, or
              slowing down your team. As your AI automation company, we’ll
              help you explore whether automation is the right fit.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-medium text-white transition hover:bg-blue-400"
            >
              Discuss Your Automation Idea
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
