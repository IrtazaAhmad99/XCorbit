import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Smartphone,
  Gauge,
  Search,
  Wrench,
  House,
  Stethoscope,
  Scale,
  Dumbbell,
  Store,
  UtensilsCrossed,
  Building2,
  CalendarCheck,
  ShoppingCart,
  CheckCircle2,
  Layers3,
  MonitorSmartphone,
  MessageSquare,
  MapPin,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Website Development",
    description:
      "Build a website around your business, your customers, and the way you work instead of forcing your business into a generic template.",
    points: ["Custom layouts and functionality", "Responsive design", "Scalable architecture"],
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Website Development",
    description:
      "Give visitors a consistent, easy-to-use experience across mobile phones, tablets, laptops, and desktop screens.",
    points: ["Mobile-friendly layouts", "Clear navigation", "Accessible interactions"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Website Development",
    description:
      "Create an online storefront where customers can explore products, understand your offers, and complete purchases.",
    points: ["Product and category pages", "Shopping cart experiences", "Checkout integration"],
  },
  {
    icon: CalendarCheck,
    title: "Booking and Lead Generation Websites",
    description:
      "Make it easier for potential customers to contact you, request a quote, book an appointment, or take the next step.",
    points: ["Contact and inquiry forms", "Appointment booking options", "Clear calls to action"],
  },
  {
    icon: Gauge,
    title: "Website Performance Optimization",
    description:
      "Improve the technical foundations of your website to support a smoother browsing experience and better usability.",
    points: ["Performance improvements", "Image optimization", "Core Web Vitals considerations"],
  },
  {
    icon: Search,
    title: "SEO-Friendly Website Development",
    description:
      "Build pages with a clear structure that helps search engines understand your content and helps visitors find relevant information.",
    points: ["Semantic heading structure", "Metadata and indexability", "Internal linking foundations"],
  },
];

const industries = [
  {
    icon: Wrench,
    title: "HVAC Website Development",
    description:
      "Present your heating and cooling services, service areas, emergency availability, and quote request options clearly.",
    features: ["Service-specific pages", "Quote request forms", "Service area information"],
  },
  {
    icon: House,
    title: "Roofing Website Development",
    description:
      "Help property owners understand your roofing services, review your work, and request an inspection or estimate.",
    features: ["Roof repair and replacement pages", "Project galleries", "Estimate requests"],
  },
  {
    icon: Wrench,
    title: "Plumbing Website Development",
    description:
      "Make it straightforward for homeowners and businesses to find your plumbing services and contact you when they need help.",
    features: ["Individual service pages", "Click-to-call buttons", "Booking and inquiry options"],
  },
  {
    icon: Stethoscope,
    title: "Dental & Skin Clinic Website Development",
    description:
      "Present treatments, practitioner information, clinic details, and appointment options in a professional and reassuring format.",
    features: ["Treatment information", "Practitioner profiles", "Appointment requests"],
  },
  {
    icon: Building2,
    title: "Real Estate Website Development",
    description:
      "Showcase properties, communicate your expertise, and give buyers, sellers, and investors a clear way to make inquiries.",
    features: ["Property listing layouts", "Property inquiry forms", "Agent and agency profiles"],
  },
  {
    icon: Scale,
    title: "Law Firm Website Development",
    description:
      "Explain your practice areas, introduce your team, and help prospective clients understand how to contact your firm.",
    features: ["Practice area pages", "Professional profiles", "Consultation inquiries"],
  },
  {
    icon: Dumbbell,
    title: "Gym & Fitness Website Development",
    description:
      "Present memberships, training programs, facilities, and class information so prospective members know what to expect.",
    features: ["Membership information", "Class schedules", "Trial or inquiry forms"],
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant Website Development",
    description:
      "Give customers a convenient place to explore your menu, find your location, and discover ordering or reservation options.",
    features: ["Digital menus", "Location and opening hours", "Ordering or reservation links"],
  },
  {
    icon: Store,
    title: "Small Business Website Development",
    description:
      "Establish your online presence, introduce your products or services, and make it easier for local customers to reach you.",
    features: ["Product or service catalogs", "Contact information", "Directions and local details"],
  },
];

const locationGroups = [
  {
    country: "United States",
    cities: [
      "Atlanta", "Charlotte", "Chicago", "Dallas", "Denver", "Houston",
      "Los Angeles", "Miami", "Nashville", "New York", "Philadelphia",
      "Phoenix", "San Antonio", "San Francisco", "Seattle", "Tampa",
    ],
  },
  {
    country: "Canada",
    cities: ["Calgary", "Edmonton", "Ottawa", "Toronto", "Vancouver"],
  },
  {
    country: "United Kingdom",
    cities: ["Birmingham", "London", "Manchester"],
  },
  {
    country: "Australia",
    cities: ["Melbourne", "Sydney"],
  },
];

const process = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We discuss your business, target audience, website requirements, and the actions you want visitors to take.",
  },
  {
    number: "02",
    title: "Structure & Design",
    description:
      "We plan the pages, organize the content, and design an interface around your brand and customers' needs.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "We build the website, implement the required functionality, and prepare the responsive layouts.",
  },
  {
    number: "04",
    title: "Testing & Launch",
    description:
      "We check the main user journeys, forms, responsive behavior, and technical basics before launch.",
  },
];

const faqs = [
  {
    question: "What types of websites does CloodyKit develop?",
    answer:
      "CloodyKit offers website development for service businesses, local businesses, professional firms, clinics, real estate agencies, and online stores. The scope depends on your goals and required functionality.",
  },
  {
    question: "Can you build a website for my specific industry?",
    answer:
      "Yes. We can plan the page structure and functionality around your industry, whether you run an HVAC company, roofing business, plumbing service, clinic, law firm, gym, restaurant, or shop.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Responsive behavior is part of our development approach. We plan layouts for different screen sizes and test key interactions on mobile and desktop.",
  },
  {
    question: "Can you add booking forms or quote requests?",
    answer:
      "Yes. Depending on your requirements, a website can include contact forms, quote requests, appointment booking, or integrations with suitable third-party tools.",
  },
  {
    question: "Can my website be optimized for SEO?",
    answer:
      "We can implement SEO-friendly technical foundations, including page metadata, semantic headings, internal links, and crawlable page structures. Rankings depend on many factors beyond development alone.",
  },
  {
    question: "Do you work with businesses in the USA, UK, Canada, and Australia?",
    answer:
      "CloodyKit can discuss website projects with businesses targeting these markets. Contact us with your location, requirements, and preferred working arrangements so we can confirm whether your project is a fit.",
  },
  {
    question: "How much does business website development cost?",
    answer:
      "Website development pricing depends on the number of pages, design requirements, functionality, integrations, and content needs. Share your requirements with CloodyKit so the project scope and pricing can be discussed before work begins.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "The timeline depends on the size of the website, required features, content readiness, and feedback during the project. We discuss the scope and expected timeline with you before confirming project details.",
  },
  {
    question: "How do I get started with a website project?",
    answer:
      "Contact CloodyKit with a brief description of your business, your goals, and any features you need. We can discuss the project scope and the appropriate next steps.",
  },
];

export default function WebDevelopment() {
  return (
    <main className="overflow-hidden bg-[#080b14] text-white">
      {/* HERO */}
      <section className="relative isolate border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-120 w-180 -translate-x-1/2 rounded-full bg-blue-600/15 blur-[130px]" />
          <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[56px_56px] mask-[linear-gradient(to_bottom,black,transparent)]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-36">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/8 px-4 py-2 text-sm text-blue-200">
              <Code2 size={16} />
              Website Development Services
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Web Development Services for{" "}
              <span className="bg-linear-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Your Business in the USA, UK, Canada & Australia
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              CloodyKit provides web development services for businesses that
              need a clear, responsive website built around their services,
              customers, and goals. We create custom business websites that help
              visitors understand what you offer and take the next step.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-medium text-white transition hover:bg-blue-400"
              >
                Discuss Your Project
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#industries"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-medium text-white transition hover:border-blue-400/50 hover:bg-white/4"
              >
                Explore Industries
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-400" />
                Responsive layouts
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-400" />
                Business-focused features
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-400" />
                SEO-friendly foundations
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-4xl bg-blue-500/10 blur-2xl" />
            <div className="relative rounded-2xl border border-white/10 bg-[#101625]/95 p-4 shadow-2xl shadow-blue-950/40 sm:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs text-slate-500">
                  Your business, online
                </span>
              </div>

              <div className="grid gap-4 py-7 sm:grid-cols-[1fr_0.8fr]">
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
                    A stronger first impression
                  </span>
                  <p className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">
                    Built around your customers.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Clear information. Useful features. A path to get in touch.
                  </p>
                  <div className="mt-5 h-2 w-24 rounded-full bg-linear-to-r from-blue-500 to-cyan-300" />
                </div>

                <div className="rounded-xl border border-white/10 bg-[#080d19] p-4">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/15 text-cyan-300">
                      <Layers3 size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Your services</p>
                      <p className="mt-1 text-xs text-slate-500">
                        Clear and organized
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3 pt-4">
                    {["Service information", "Customer inquiries", "Mobile experience"].map(
                      (item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/2.5 p-3 text-xs text-slate-300"
                        >
                          <CheckCircle2
                            size={15}
                            className="shrink-0 text-cyan-400"
                          />
                          {item}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 sm:gap-3">
                {[
                  { icon: Smartphone, label: "Responsive" },
                  { icon: Search, label: "SEO-ready" },
                  { icon: MessageSquare, label: "Lead-focused" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.035] px-2 py-4 text-center text-xs text-slate-300"
                  >
                    <Icon size={20} className="text-blue-300" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              More than a website
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Build a business website around your customers.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-slate-300">
            <p>
              Potential customers often visit a website before deciding whether
              to call, book, visit a location, or make a purchase. If the
              information is confusing or the next step is difficult to find,
              that experience can create unnecessary friction.
            </p>
            <p>
              Our approach to website development starts with understanding
              your business. We organize the content, select the right
              functionality, and build a site that helps visitors understand
              your offer and act on it.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-white/[0.07] bg-[#0c111d]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              What we build
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Web development services built around your business
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Explore website development capabilities for your business.
              We'll discuss your requirements before defining the project scope.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ icon: Icon, title, description, points }) => (
              <article
                key={title}
                className="group rounded-2xl border border-white/10 bg-[#101625] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-[#121b2d] sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-cyan-300 transition group-hover:bg-blue-500/20">
                  <Icon size={23} />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {description}
                </p>
                <ul className="mt-5 space-y-3">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-slate-300"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-cyan-400"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Industry-specific solutions
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Industry-specific website development for businesses
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Every industry has different customers, requirements, and
              decision-making processes. Your website should reflect the
              services you provide and the information your customers need.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industries.map(
              ({ icon: Icon, title, description, features }, index) => (
                <article
                  key={title}
                  className="rounded-2xl border border-white/10 bg-linear-to-b from-white/4.5 to-white/1.5 p-6 transition hover:border-cyan-400/30 sm:p-7"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                      <Icon size={23} />
                    </div>
                    <span className="text-xs font-medium tracking-widest text-slate-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {description}
                  </p>
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Potential website features
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-slate-400"
                        >
                          <CheckCircle2
                            size={15}
                            className="mt-0.5 shrink-0 text-cyan-400"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-white"
                  >
                    Discuss your requirements
                    <ArrowRight size={16} />
                  </Link>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section id="locations" className="border-t border-white/[0.07] bg-[#0c111d] scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Locations
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Business website development across key markets
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              We build websites for businesses in the United States, Canada, the United Kingdom, and Australia.
               Contact us to discuss your requirements and confirm project fit
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {locationGroups.map(({ country, cities }) => (
              <article
                key={country}
                className="rounded-2xl border border-white/10 bg-[#101625] p-6 sm:p-7"
              >
                <h3 className="text-xl font-semibold"> Web development in {country}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cities.map((city) => (
                    <li
                      key={city}
                      className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-sm text-slate-300"
                    >
                      Web development in {city}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CLOODYKIT */}
      <section className="border-y border-white/[0.07] bg-[#0c111d]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Built with purpose
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              A website should support the way your business operates.
            </h2>
            <p className="mt-5 leading-8 text-slate-400">
              Good development isn't just about adding features. It's about
              choosing the right features, making information easy to find,
              and helping customers complete important tasks without
              unnecessary steps.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 font-medium text-cyan-300 transition hover:text-white"
            >
              Tell us about your project
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Smartphone,
                title: "Responsive by design",
                description:
                  "Layouts designed for mobile, tablet, and desktop experiences.",
              },
              {
                icon: Search,
                title: "Clear page structure",
                description:
                  "Meaningful headings and content that visitors can navigate.",
              },
              {
                icon: Gauge,
                title: "Performance in mind",
                description:
                  "Attention to loading behavior, assets, and technical quality.",
              },
              {
                icon: MapPin,
                title: "Business-relevant content",
                description:
                  "Pages that explain your services, location, and next steps.",
              },
            ].map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-[#101625] p-6"
              >
                <Icon size={24} className="text-cyan-300" />
                <h3 className="mt-5 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Our process
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              From your idea to a working website
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              A straightforward process keeps the project focused on your
              business goals and agreed requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <article
                key={step.number}
                className="relative rounded-2xl border border-white/10 bg-white/2.5 p-6"
              >
                <span className="text-sm font-semibold tracking-widest text-cyan-300">
                  STEP {step.number}
                </span>
                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-white/[0.07] bg-[#0c111d]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-10 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Frequently asked questions
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Web development FAQs
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Have a question about your website project? Start here, or
              contact us to discuss your specific requirements.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-white"
            >
              Ask us a question
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-white/10 bg-[#101625] p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-slate-100 marker:hidden">
                  {faq.question}
                  <ArrowRight
                    size={18}
                    className="shrink-0 text-cyan-300 transition-transform group-open:rotate-90"
                  />
                </summary>
                <p className="mt-4 pr-5 text-sm leading-7 text-slate-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-blue-600/8" />
        <div className="absolute -bottom-40 left-1/2 -z-10 h-72 w-150 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[100px]" />

        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:py-28">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
            <Code2 size={27} />
          </div>
          <h2 className="mt-7 text-3xl font-semibold tracking-tight sm:text-5xl">
            Ready to build a better website for your business?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            Tell us what your business does, what you want your website to
            achieve, and which features you need. Let's explore the right
            solution for your project.
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-7 py-4 font-medium text-white transition hover:bg-blue-400"
          >
            Let's Discuss Your Project
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}

