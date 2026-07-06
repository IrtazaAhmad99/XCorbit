"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { badges } from "../../data/array"
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
} from "@/utils/animations";


export default function ContactForm() {


  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        toast.success("Project inquiry sent successfully!", {
          description: "We'll review your requirements and get back to you within 24 hours.",
        });

        setFormData({
          fullName: "",
          email: "",
          number: "",
          service: "",
          message: "",
        });
      } else {
        toast.error( "Something went wrong.",data.message );
      }
    } catch (error) {
      console.error(error);

      toast.error("Failed to send inquiry.", {
        description: "Please try again in a few moments.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };




  return (
    <section
      id="contact-form"
      className="relative bg-[#030712] py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-blue-500/5 blur-[140px]" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-start">

        {/* LEFT SIDE */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Start Your Project
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            Let's Build
            <br />
            Something Amazing
            <span className="block bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Together.
            </span>
          </h2>

          <p className="mt-8 max-w-lg text-lg leading-8 text-gray-400">
            Tell us about your project and business goals. We'll review
            your inquiry and get back to you within 24 hours with the
            next steps.
          </p>

          <div className="mt-10 space-y-5">
            {badges.map((badge) => {
              const Icon = badge.icon;

              return (
                <div
                  key={badge.title}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Icon size={22} />
                  </div>

                  <p className="text-gray-300 font-medium">
                    {badge.title}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Contact Number
              </label>

              <input
                type="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                min={0}
                step={1}
                placeholder="Enter Your Number"
                className="w-full rounded-xl border border-white/10 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Service Required
              </label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-cyan-500"
              >
                <option>Web Development</option>
                <option>AI Automation</option>
                <option>Meta Adds</option>
                <option>E-Commerce</option>
                <option>Custom Software</option>
                <option>Other</option>
              </select>
            </div>


            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Tell Us About Your Project
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Describe your project, goals, timeline, and any specific requirements..."
                className="w-full resize-none rounded-xl border border-white/10 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-cyan-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-linear-to-r from-cyan-400 to-purple-500 px-6 py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Start Your Project"}
            </button>


          </form>
        </motion.div>

      </div>
    </section>
  );
}