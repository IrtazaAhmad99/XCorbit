"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Client Name",
    role: "Business Owner",
    review:
      "This space is reserved for your first real client testimonial. Replace it once you complete your first commercial project.",
  },
  {
    name: "Client Name",
    role: "Startup Founder",
    review:
      "Professional communication, modern development practices, and a smooth project experience from start to finish.",
  },
  {
    name: "Client Name",
    role: "Entrepreneur",
    review:
      "Fast delivery, excellent support, and a solution tailored to our business needs. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#060B17] py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.12),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2">
            <span className="mr-2 h-2 w-2 rounded-full bg-cyan-400" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Testimonials
            </span>
          </div>

          <h2 className="mt-8 text-4xl font-bold text-white md:text-6xl">
            What Our Clients Say
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Building long-term relationships through quality work and reliable
            service.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.review}
              className="rounded-3xl border border-slate-800 bg-[#111827] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-500/40"
            >
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-cyan-400 text-cyan-400"
                  />
                ))}
              </div>

              <p className="leading-8 text-slate-400">
                "{testimonial.review}"
              </p>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white">
                  {testimonial.name}
                </h4>

                <p className="text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          * Placeholder testimonials — these will be replaced with verified
          client feedback as XCorbitSoft grows.
        </p>
      </div>
    </section>
  );
}