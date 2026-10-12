"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Video,
} from "lucide-react";

const ConsultationBooking = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("Web Development");
  const [message, setMessage] = useState("");

  // Temporary dates for UI development.
  // Google Calendar availability will replace these later.
  const dates = Array.from({ length: 10 }, (_, index) => {
    const date = new Date();
    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() + index + 1);

    return {
      value: [
        date.getFullYear(),
        String(date.getMonth() + 1).padStart(2, "0"),
        String(date.getDate()).padStart(2, "0"),
      ].join("-"),
      day: date.toLocaleDateString("en-US", {
        weekday: "short",
      }),
      number: date.getDate(),
      month: date.toLocaleDateString("en-US", {
        month: "short",
      }),
    };
  });

  // Placeholder times only; not real available slots yet.
  const times = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  const chosenDate = dates.find(
    (date) => date.value === selectedDate
  );

  const handleContinue = () => {
    if (!selectedDate || !selectedTime) return;
    setStep(2);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Real booking submission will be connected to the backend later.
    alert(
      "The booking interface is ready. Google Calendar integration is the next step."
    );
  };

  return (
    <main className="min-h-screen bg-[#050B18] px-4 pb-12 pt-28 text-white sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-cyan-300"
        >
          <ArrowLeft size={16} />
          Back to CloodyKit
        </Link>

        <div className="grid items-start gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          {/* Left introduction */}
          <section className="lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Let's talk business
            </span>

            <h1 className="mt-5 max-w-md text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Let's build something
              <span className="block bg-linear-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                meaningful.
              </span>
            </h1>

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
              Tell us what you're working on. We'll explore your goals,
              understand your requirements, and discuss how CloodyKit
              can help.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/3 p-4">
                <Clock3 className="mb-3 text-cyan-300" size={20} />
                <p className="text-sm font-medium">30 minutes</p>
                <p className="mt-1 text-xs text-gray-500">
                  Focused discussion
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/3 p-4">
                <Video className="mb-3 text-purple-300" size={20} />
                <p className="text-sm font-medium">Online meeting</p>
                <p className="mt-1 text-xs text-gray-500">
                  Google Meet
                </p>
              </div>
            </div>

            <p className="mt-5 text-xs leading-5 text-gray-500">
              No obligation. Just a practical conversation about
              your business and its next steps.
            </p>
          </section>

          {/* Booking card */}
          <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#0A1222] shadow-2xl shadow-black/20 sm:rounded-3xl">
            {/* Header */}
            <div className="border-b border-white/10 px-5 py-5 sm:px-7">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-medium tracking-[0.18em] text-cyan-300">
                    BOOK YOUR SESSION
                  </p>

                  <h2 className="mt-1.5 text-xl font-semibold sm:text-2xl">
                    {step === 1
                      ? "Choose a time"
                      : "Your details"}
                  </h2>
                </div>

                <div className="shrink-0 text-right">
                  <p className="text-xs text-gray-400">
                    Step {step} of 2
                  </p>
                  <div className="mt-2 flex gap-1.5">
                    <span
                      className={`h-1 w-8 rounded-full ${
                        step >= 1 ? "bg-cyan-400" : "bg-white/10"
                      }`}
                    />
                    <span
                      className={`h-1 w-8 rounded-full ${
                        step >= 2 ? "bg-cyan-400" : "bg-white/10"
                      }`}
                    />
                  </div>
                </div>
              </div>

              <p className="mt-2 text-sm text-gray-400">
                {step === 1
                  ? "Pick a date and time that works for you."
                  : "A few details so we can prepare for your meeting."}
              </p>
            </div>

            <div className="p-5 sm:p-7">
              {step === 1 ? (
                <div className="space-y-6">
                  {/* Date selection */}
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-sm font-medium">
                        <CalendarDays
                          size={16}
                          className="mr-2 inline text-cyan-300"
                        />
                        Select a date
                      </h3>

                      <span className="text-xs text-gray-500">
                        Next 10 days
                      </span>
                    </div>

                    <div className="grid grid-cols-5 gap-2">
                      {dates.map((date) => {
                        const active =
                          selectedDate === date.value;

                        return (
                          <button
                            key={date.value}
                            type="button"
                            aria-pressed={active}
                            onClick={() => {
                              setSelectedDate(date.value);
                              setSelectedTime("");
                            }}
                            className={`relative flex min-w-0 flex-col items-center rounded-xl border px-1 py-3 transition ${
                              active
                                ? "border-cyan-400 bg-cyan-400/10 text-white"
                                : "border-white/10 bg-white/2 text-gray-400 hover:border-white/30 hover:text-white"
                            }`}
                          >
                            <span className="text-[10px] sm:text-xs">
                              {date.day}
                            </span>

                            <span className="my-1 text-xl font-semibold sm:text-2xl">
                              {date.number}
                            </span>

                            <span className="text-[10px] sm:text-xs">
                              {date.month}
                            </span>

                            {active && (
                              <Check
                                size={12}
                                className="absolute right-1 top-1 text-cyan-300"
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time selection */}
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-sm font-medium">
                        <Clock3
                          size={16}
                          className="mr-2 inline text-cyan-300"
                        />
                        Select a time
                      </h3>

                      <span className="text-xs text-gray-500">
                        Your local time
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {times.map((time) => {
                        const active = selectedTime === time;

                        return (
                          <button
                            key={time}
                            type="button"
                            aria-pressed={active}
                            disabled={!selectedDate}
                            onClick={() => setSelectedTime(time)}
                            className={`rounded-lg border px-2 py-2.5 text-sm transition disabled:cursor-not-allowed disabled:opacity-30 ${
                              active
                                ? "border-purple-400 bg-purple-400/10 text-white"
                                : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>

                    {!selectedDate && (
                      <p className="mt-2 text-xs text-gray-500">
                        Choose a date first.
                      </p>
                    )}
                  </div>

                  {/* Selection summary */}
                  {chosenDate && selectedTime && (
                    <div className="flex items-center gap-3 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-3">
                      <CalendarDays
                        size={19}
                        className="shrink-0 text-cyan-300"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium">
                          {chosenDate.day}, {chosenDate.month}{" "}
                          {chosenDate.number}
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                          {selectedTime} · 30 minutes
                        </p>
                      </div>
                      <Check
                        size={18}
                        className="shrink-0 text-cyan-300"
                      />
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={handleContinue}
                    disabled={!selectedDate || !selectedTime}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-400 to-purple-500 px-5 py-3.5 text-sm font-semibold text-[#050B18] transition hover:shadow-lg hover:shadow-cyan-500/10 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Continue
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Appointment summary */}
                  <div className="flex items-center gap-3 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-3">
                    <CalendarDays
                      size={20}
                      className="shrink-0 text-cyan-300"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium">
                        {chosenDate?.day}, {chosenDate?.month}{" "}
                        {chosenDate?.number}
                      </p>
                      <p className="mt-1 text-xs text-gray-400">
                        {selectedTime} · 30-minute consultation
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="shrink-0 text-xs text-cyan-300 transition hover:text-white"
                    >
                      Change
                    </button>
                  </div>

                  {/* Compact details form */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="booking-name"
                        className="mb-2 block text-xs font-medium text-gray-300"
                      >
                        Full name *
                      </label>
                      <input
                        id="booking-name"
                        name="name"
                        value={name}
                        onChange={(event) =>
                          setName(event.target.value)
                        }
                        autoComplete="name"
                        required
                        maxLength={100}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-white/10 bg-white/3 px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/60"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="booking-email"
                        className="mb-2 block text-xs font-medium text-gray-300"
                      >
                        Email address *
                      </label>
                      <input
                        id="booking-email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(event) =>
                          setEmail(event.target.value)
                        }
                        autoComplete="email"
                        required
                        maxLength={254}
                        placeholder="you@company.com"
                        className="w-full rounded-xl border border-white/10 bg-white/3 px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/60"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="booking-company"
                        className="mb-2 block text-xs font-medium text-gray-300"
                      >
                        Company{" "}
                        <span className="text-gray-500">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="booking-company"
                        name="company"
                        value={company}
                        onChange={(event) =>
                          setCompany(event.target.value)
                        }
                        autoComplete="organization"
                        maxLength={150}
                        placeholder="Company name"
                        className="w-full rounded-xl border border-white/10 bg-white/3 px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/60"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="booking-service"
                        className="mb-2 block text-xs font-medium text-gray-300"
                      >
                        Service *
                      </label>
                      <select
                        id="booking-service"
                        name="service"
                        value={service}
                        onChange={(event) =>
                          setService(event.target.value)
                        }
                        className="w-full rounded-xl border border-white/10 bg-[#0A1222] px-3.5 py-3 text-sm text-white outline-none focus:border-cyan-400/60"
                      >
                        <option>Web Development</option>
                        <option>AI Automation</option>
                        <option>Business Growth</option>
                        <option>Multiple Services</option>
                        <option>Not Sure Yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="booking-message"
                      className="mb-2 block text-xs font-medium text-gray-300"
                    >
                      Project details{" "}
                      <span className="text-gray-500">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="booking-message"
                      name="message"
                      value={message}
                      onChange={(event) =>
                        setMessage(event.target.value)
                      }
                      maxLength={2000}
                      rows={3}
                      placeholder="Briefly describe what you need help with..."
                      className="w-full resize-y rounded-xl border border-white/10 bg-white/3 px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400/60"
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3.5 text-sm text-gray-300 transition hover:border-white/30 hover:text-white"
                    >
                      <ArrowLeft size={16} />
                      Back
                    </button>

                    <button
                      type="submit"
                      className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-400 to-purple-500 px-4 py-3.5 text-sm font-semibold text-[#050B18] transition hover:shadow-lg hover:shadow-cyan-500/10"
                    >
                      Request Booking
                      <ArrowRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>
                  </div>

                  <p className="text-center text-xs leading-5 text-gray-500">
                    Your appointment is not confirmed until the
                    booking system successfully reserves your slot.
                  </p>
                </form>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ConsultationBooking;