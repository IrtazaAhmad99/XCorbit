
"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ShoppingBag,
  ShoppingCart,
  CreditCard,
  Package,
  Smartphone,
  Search,
  BarChart3,
  CheckCircle2,
  Shirt,
  Palette,
  Sparkles,
  Store,
  Truck,
  ShieldCheck,
  RefreshCw,
  ChevronDown,
  Layers3,
  Globe,
  Boxes,
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
    icon: ShoppingBag,
    number: "01",
    title: "Custom E-commerce Websites",
    description:
      "Build an online store around your products, brand identity, customer needs, and business model.",
    points: [
      "Custom storefront design",
      "Product and category pages",
      "Responsive layouts for mobile and desktop",
    ],
  },
  {
    icon: ShoppingCart,
    number: "02",
    title: "Cart & Checkout Experience",
    description:
      "Make it easier for customers to review their orders and complete purchases through a clear, practical buying journey.",
    points: [
      "Shopping cart functionality",
      "Streamlined checkout flow",
      "Order summary and validation",
    ],
  },
  {
    icon: CreditCard,
    number: "03",
    title: "Payment Integration",
    description:
      "Connect suitable payment methods based on your target market, provider availability, and business requirements.",
    points: [
      "Supported online payment gateways",
      "Cash-on-delivery workflows where appropriate",
      "Payment status and order handling",
    ],
  },
  {
    icon: Package,
    number: "04",
    title: "Product & Order Management",
    description:
      "Organize product information and order workflows so customers can shop while your team manages the store efficiently.",
    points: [
      "Product variants and categories",
      "Order tracking and status management",
      "Inventory features where required",
    ],
  },
  {
    icon: Smartphone,
    number: "05",
    title: "Mobile-Friendly Store Design",
    description:
      "Create a shopping experience that works smoothly across phones, tablets, laptops, and desktop screens.",
    points: [
      "Responsive product layouts",
      "Touch-friendly navigation",
      "Mobile shopping and checkout usability",
    ],
  },
  {
    icon: Search,
    number: "06",
    title: "E-commerce SEO & Performance",
    description:
      "Build a stronger technical foundation so search engines can understand your store and customers can navigate it efficiently.",
    points: [
      "SEO-friendly product and category structure",
      "Metadata and crawlability basics",
      "Performance and image optimization",
    ],
  },
];

const industries = [
  {
    icon: Shirt,
    title: "Clothing & Fashion",
    description:
      "Showcase collections, sizes, colors, product variants, and new arrivals through a store designed around your brand.",
  },
  {
    icon: Palette,
    title: "Art & Stationery",
    description:
      "Organize artwork, notebooks, stationery, and creative products into clear categories with useful product details.",
  },
  {
    icon: Sparkles,
    title: "Beauty & Skincare",
    description:
      "Present product benefits, ingredients, variants, and product collections in an easy-to-browse shopping experience.",
  },
  {
    icon: Store,
    title: "Retail & Lifestyle",
    description:
      "Bring your products online with organized catalogs, practical checkout options, and order management.",
  },
  {
    icon: Boxes,
    title: "Wholesale & B2B",
    description:
      "Explore product catalogs, bulk enquiry workflows, and business-specific purchasing features when your model needs them.",
  },
  {
    icon: Globe,
    title: "Multi-market Stores",
    description:
      "Plan country-specific shipping, currencies, payment options, and fulfillment workflows where your business can support them.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand Your Business",
    description:
      "We learn about your products, customers, target markets, fulfillment model, and the features your store actually needs.",
  },
  {
    number: "02",
    title: "Plan the Store",
    description:
      "We map out the site structure, product categories, customer journey, integrations, and checkout requirements.",
  },
  {
    number: "03",
    title: "Design & Develop",
    description:
      "We build the storefront, product pages, purchasing flow, and required store functionality for your business.",
  },
  {
    number: "04",
    title: "Test & Launch",
    description:
      "We test key shopping flows, responsive layouts, order handling, and supported integrations before launch.",
  },
];

const faqs = [
  {
    question: "Can you build a custom e-commerce website?",
    answer:
      "Yes. We can build a custom storefront and the required shopping functionality around your products and business requirements. The best technical approach depends on your budget, integrations, and expected store complexity.",
  },
  {
    question: "Can you integrate payment gateways?",
    answer:
      "We can integrate supported payment providers where their APIs, account eligibility, and regional availability allow it. We confirm the provider and requirements before implementation.",
  },
  {
    question: "Can my store accept cash on delivery?",
    answer:
      "A store can support a cash-on-delivery workflow when it fits your market and fulfillment process. The implementation can include order placement and the appropriate order statuses.",
  },
  {
    question: "Can you build a store for customers in multiple countries?",
    answer:
      "Yes, multi-market requirements can be planned where suitable payment providers, shipping options, tax rules, and fulfillment arrangements are available. Selling in multiple countries needs operational planning as well as website development.",
  },
  {
    question: "Will my e-commerce website be mobile-friendly?",
    answer:
      "We design responsive layouts so customers can browse products and use the store across mobile, tablet, and desktop screens. Key shopping flows should also be tested at different screen sizes.",
  },
  {
    question: "Will my products rank on Google automatically?",
    answer:
      "No website can guarantee rankings. We can establish SEO-friendly foundations such as descriptive metadata, logical categories, crawlable pages, and performance improvements. Rankings also depend on competition, content, authority, and ongoing SEO work.",
  },
  {
    question: "Can I add more products and features later?",
    answer:
      "The store can be planned with future growth in mind. The best way to add products, inventory management, new integrations, or advanced features depends on the architecture selected for your project.",
  },
];

export default function Ecommerce() {
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
              <ShoppingBag size={16} />
              E-commerce Development Services
            </motion.div>

            <motion.h1
              variants={reveal}
              className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Build an Online Store That Works for Your{" "}
              <span className="bg-linear-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Business
              </span>
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              Turn your products into an online shopping experience with custom
              e-commerce development, practical checkout flows, payment
              integrations, and store functionality tailored to your business.
            </motion.p>

            <motion.div
              variants={reveal}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-medium text-white transition hover:bg-blue-400"
              >
                Discuss Your Store
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
                Designed for your products
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-300" />
                Built for real shopping journeys
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
                  <p className="text-sm text-slate-400">Store preview</p>
                  <h2 className="mt-1 text-lg font-semibold">
                    Your products, online
                  </h2>
                </div>
                <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                  <ShoppingBag size={24} />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-[#101725] p-3">
                  <div className="flex aspect-4/3 items-center justify-center rounded-xl bg-linear-to-br from-blue-500/20 to-cyan-300/10">
                    <Shirt size={42} className="text-cyan-200" />
                  </div>
                  <p className="mt-3 text-sm font-medium">Product collection</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Clear product details
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#101725] p-3">
                  <div className="flex aspect-4/3 items-center justify-center rounded-xl bg-linear-to-br from-violet-500/20 to-blue-300/10">
                    <Palette size={42} className="text-violet-200" />
                  </div>
                  <p className="mt-3 text-sm font-medium">Brand experience</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Your style, your store
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-300/6 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-cyan-300/10 p-3 text-cyan-200">
                    <ShoppingCart size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">Shopping journey</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Browse → Cart → Checkout
                    </p>
                  </div>
                  <ArrowRight size={20} className="text-cyan-300" />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-xl bg-white/[0.035] p-4">
                <ShieldCheck size={20} className="shrink-0 text-cyan-300" />
                <p className="text-sm leading-6 text-slate-400">
                  Essential store features are planned around your products,
                  customers, and fulfillment requirements.
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
            More than a product catalog
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Give customers a better way to shop online.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400">
            An online store needs more than an attractive homepage. Customers
            should be able to find products, understand their options, complete
            an order, and know what happens next. We bring these pieces together
            in an e-commerce experience built around how your business operates.
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
              Everything your online store needs to get started
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Choose the capabilities your business needs today, with room to
              plan additional features as your store evolves.
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
              Industries we can support
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              E-commerce experiences for different types of businesses
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Your products, customers, and operations determine what your
              store needs. Here are some of the business types we can build for.
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
            Each store is scoped to the business. Not every store needs every
            integration or advanced feature.
          </motion.p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Built around your operation
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              The right store is the one your business can run.
            </h2>
            <p className="mt-6 leading-8 text-slate-400">
              Store design is only one part of e-commerce. Payment methods,
              shipping, order processing, product updates, and customer
              communication all affect the day-to-day experience. We plan the
              technical solution around these practical requirements.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 font-medium text-cyan-300 transition hover:text-cyan-200"
            >
              Plan your online store
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
                icon: Layers3,
                title: "Clear product structure",
                text: "Organize products, categories, variants, and details logically.",
              },
              {
                icon: CreditCard,
                title: "Practical checkout",
                text: "Plan payment and order flows around your target market.",
              },
              {
                icon: Truck,
                title: "Shipping workflows",
                text: "Account for delivery methods, locations, and fulfillment needs.",
              },
              {
                icon: RefreshCw,
                title: "Room to evolve",
                text: "Plan features that can grow with your product range and operations.",
              },
              {
                icon: Search,
                title: "Search-friendly pages",
                text: "Build a clear structure for customers and search engines.",
              },
              {
                icon: ShieldCheck,
                title: "Reliable order flows",
                text: "Test important purchasing, validation, and order-status scenarios.",
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
              From idea to online store
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              A structured approach helps keep the build focused on the
              features and workflows your business needs.
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
              E-commerce development questions
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
              <ShoppingBag size={27} />
            </div>

            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Have a product idea? Let’s build your online store.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              Tell us what you sell, who you want to reach, and how you want
              your store to operate. We’ll help you plan the right e-commerce
              solution for your business.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-medium text-white transition hover:bg-blue-400"
            >
              Discuss Your E-commerce Project
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
