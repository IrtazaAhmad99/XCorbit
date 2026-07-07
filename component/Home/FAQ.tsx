"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does cloodykit provide?",
    answer:
      "We specialize in custom web development, AI automation, AI agents, e-commerce solutions, business websites, and digital transformation.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "The timeline depends on the project scope. Small business websites typically take 2–4 weeks, while larger web applications require additional planning and development time.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer post-launch support, maintenance, bug fixes, and future feature development to help your business continue growing.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Absolutely. We can modernize your current website, improve performance, enhance user experience, and optimize it for better conversions.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply contact us through the contact section. We'll schedule a free consultation to understand your business and recommend the best solution.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#060B17] py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_70%)]" />

      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}

        <div className="mb-16 text-center">
          <div className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2">
            <span className="mr-2 h-2 w-2 rounded-full bg-cyan-400"></span>

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              FAQ
            </span>
          </div>

          <h2 className="mt-8 text-4xl font-bold text-white md:text-6xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Everything you need to know before starting your project.
          </p>
        </div>

        {/* FAQ Items */}

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-[#111827]"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-7 py-6 text-left"
                >
                  <span className="text-lg font-semibold text-white">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition duration-300 ${
                      isOpen
                        ? "rotate-180 text-cyan-400"
                        : "text-slate-500"
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 pb-7 leading-8 text-slate-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}