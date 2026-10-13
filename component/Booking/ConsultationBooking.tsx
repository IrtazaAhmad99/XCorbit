"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Video,
} from "lucide-react";

type BookingSlot = {
  start: string;
  end: string;
};

type BookingDate = {
  value: string;
  day: string;
  number: number;
  month: string;
};

type BookingConfirmation = {
  start: string;
  end: string;
  meetLink: string | null;
};

const TIME_ZONE = "Asia/Karachi";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: TIME_ZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: TIME_ZONE,
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

const fullDateFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: TIME_ZONE,
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
});

const shortDayFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: TIME_ZONE,
  weekday: "short",
});

const monthFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: TIME_ZONE,
  month: "short",
});

function getDateKey(date: Date) {
  const parts = dateFormatter.formatToParts(date);
  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  return `${year}-${month}-${day}`;
}

export default function ConsultationBooking() {
  const [step, setStep] = useState<1 | 2>(1);

  const [slots, setSlots] = useState<BookingSlot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(true);
  const [availabilityError, setAvailabilityError] = useState("");

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("Web Development");
  const [message, setMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [bookingError, setBookingError] = useState("");
  const [confirmation, setConfirmation] =
    useState<BookingConfirmation | null>(null);

  // Load real availability from Google Calendar.
  useEffect(() => {
    let cancelled = false;

    async function loadAvailability() {
      setLoadingSlots(true);
      setAvailabilityError("");

      try {
        const response = await fetch("/api/booking/availability", {
          cache: "no-store",
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error || "Unable to load available appointment times."
          );
        }

        if (!cancelled) {
          const availableSlots: BookingSlot[] = Array.isArray(data.slots)
            ? data.slots
            : [];

          setSlots(availableSlots);

          if (
            selectedTime &&
            !availableSlots.some((slot) => slot.start === selectedTime)
          ) {
            setSelectedTime("");
          }

          if (
            selectedDate &&
            !availableSlots.some(
              (slot) => getDateKey(new Date(slot.start)) === selectedDate
            )
          ) {
            setSelectedDate("");
            setSelectedTime("");
          }
        }
      } catch (error) {
        if (!cancelled) {
          setAvailabilityError(
            error instanceof Error
              ? error.message
              : "Unable to load available appointment times."
          );
        }
      } finally {
        if (!cancelled) {
          setLoadingSlots(false);
        }
      }
    }

    loadAvailability();

    return () => {
      cancelled = true;
    };
  }, []);

  // Build the date picker from the slots returned by the server.
  const dates: BookingDate[] = Array.from(
    new Set(slots.map((slot) => getDateKey(new Date(slot.start))))
  ).map((value) => {
    // Noon in Pakistan is used to avoid date-boundary issues.
    const date = new Date(`${value}T12:00:00+05:00`);

    return {
      value,
      day: shortDayFormatter.format(date),
      number: Number(value.slice(8, 10)),
      month: monthFormatter.format(date),
    };
  });

  const chosenDate = dates.find((date) => date.value === selectedDate);

  const times = slots.filter(
    (slot) => getDateKey(new Date(slot.start)) === selectedDate
  );

  const selectedSlot = slots.find(
    (slot) =>
      slot.start === selectedTime &&
      getDateKey(new Date(slot.start)) === selectedDate
  );

  function handleContinue() {
    if (!selectedDate || !selectedSlot) {
      setBookingError("Please select an available date and time.");
      return;
    }

    setBookingError("");
    setStep(2);
  }

  function handleBack() {
    setBookingError("");
    setStep(1);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBookingError("");

    if (!selectedSlot) {
      setBookingError(
        "Your selected time is no longer available. Please choose another slot."
      );
      setStep(1);
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/booking/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          service,
          message: message.trim(),
          start: selectedSlot.start,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to create your booking. Please try again."
        );
      }

      setConfirmation({
        start: data.booking?.start || selectedSlot.start,
        end: data.booking?.end || selectedSlot.end,
        meetLink: data.booking?.meetLink || null,
      });

      // Refresh available slots after a successful booking.
      try {
        const refreshResponse = await fetch("/api/booking/availability", {
          cache: "no-store",
        });

        if (refreshResponse.ok) {
          const refreshedData = await refreshResponse.json();
          setSlots(
            Array.isArray(refreshedData.slots) ? refreshedData.slots : []
          );
        }
      } catch {
        // The booking succeeded; a refresh failure should not undo it.
      }
    } catch (error) {
      setBookingError(
        error instanceof Error
          ? error.message
          : "Unable to create your booking. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080b14] px-4 pt-28 pb-12 text-white sm:px-6 sm:pt-32 lg:px-8 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(91,100,220,0.15),transparent_55%)]" />

      <div className="relative mx-auto max-w-5xl">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <div className="mb-10 text-center">
          
          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Book a Consultation
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-indigo-300 sm:text-base">
            Tell us what you&apos;re building. Choose a suitable time and
            let&apos;s discuss how CloodyKit can help.
          </p>
        </div>

        {confirmation ? (
          <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/4 p-6 text-center sm:p-10">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
              <Check size={30} />
            </div>

            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Booking confirmed
            </p>

            <h2 className="text-2xl font-semibold sm:text-3xl">
              You&apos;re all set!
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/60">
              Your consultation has been booked. Check your email for the
              calendar invitation and appointment details.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5 text-left">
              <div className="flex items-start gap-3">
                <CalendarDays
                  className="mt-1 shrink-0 text-indigo-300"
                  size={20}
                />
                <div>
                  <p className="text-sm font-medium">Date</p>
                  <p className="mt-1 text-sm text-white/60">
                    {fullDateFormatter.format(new Date(confirmation.start))}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-3">
                <Clock3
                  className="mt-1 shrink-0 text-indigo-300"
                  size={20}
                />
                <div>
                  <p className="text-sm font-medium">Time</p>
                  <p className="mt-1 text-sm text-white/60">
                    {timeFormatter.format(new Date(confirmation.start))} –{" "}
                    {timeFormatter.format(new Date(confirmation.end))} PKT
                  </p>
                </div>
              </div>

              {confirmation.meetLink && (
                <div className="mt-5 flex items-start gap-3">
                  <Video
                    className="mt-1 shrink-0 text-indigo-300"
                    size={20}
                  />
                  <div>
                    <p className="text-sm font-medium">Google Meet</p>
                    <a
                      href={confirmation.meetLink}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block break-all text-sm text-indigo-300 underline underline-offset-4 hover:text-indigo-200"
                    >
                      Join your meeting
                    </a>
                  </div>
                </div>
              )}

              {!confirmation.meetLink && (
                <p className="mt-5 text-sm leading-6 text-white/50">
                  Your calendar invitation may contain the meeting link once
                  Google has finished preparing the event.
                </p>
              )}
            </div>

            <Link
              href="/"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Return to home
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/20">
            <div className="grid grid-cols-2 border-b border-white/10">
              <div
                className={`flex items-center justify-center gap-2 px-3 py-4 text-sm ${
                  step === 1
                    ? "border-b-2 border-indigo-400 text-white"
                    : "text-white/40"
                }`}
              >
                <CalendarDays size={17} />
                <span>Choose a time</span>
              </div>

              <div
                className={`flex items-center justify-center gap-2 px-3 py-4 text-sm ${
                  step === 2
                    ? "border-b-2 border-indigo-400 text-white"
                    : "text-white/40"
                }`}
              >
                <Check size={17} />
                <span>Your details</span>
              </div>
            </div>

            {step === 1 ? (
              <div className="grid lg:grid-cols-[1fr_0.85fr]">
                <div className="border-b border-white/10 p-5 sm:p-8 lg:border-b-0 lg:border-r">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-300">
                      <CalendarDays size={21} />
                    </div>
                    <div>
                      <h2 className="font-medium">Select a date</h2>
                      <p className="mt-1 text-xs text-white/50">
                        Choose an available day
                      </p>
                    </div>
                  </div>

                  {loadingSlots ? (
                    <div className="rounded-xl border border-white/10 px-4 py-8 text-center text-sm text-white/60">
                      Loading available dates...
                    </div>
                  ) : availabilityError ? (
                    <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-4">
                      <p className="text-sm text-red-300">
                        {availabilityError}
                      </p>
                      <button
                        type="button"
                        onClick={() => window.location.reload()}
                        className="mt-3 text-sm text-white underline underline-offset-4"
                      >
                        Try again
                      </button>
                    </div>
                  ) : dates.length === 0 ? (
                    <p className="rounded-xl border border-white/10 px-4 py-8 text-center text-sm leading-6 text-white/60">
                      There are currently no available appointments. Please
                      check back later.
                    </p>
                  ) : (
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                      {dates.map((date) => {
                        const isSelected = selectedDate === date.value;

                        return (
                          <button
                            key={date.value}
                            type="button"
                            onClick={() => {
                              setSelectedDate(date.value);
                              setSelectedTime("");
                              setBookingError("");
                            }}
                            className={`flex min-h-24 flex-col items-center justify-center rounded-2xl border px-2 py-3 transition ${
                              isSelected
                                ? "border-indigo-400 bg-indigo-400/15 text-white"
                                : "border-white/10 bg-white/2.5 text-white/65 hover:border-white/25 hover:bg-white/6"
                            }`}
                          >
                            <span className="text-xs">{date.day}</span>
                            <span className="my-1 text-2xl font-semibold">
                              {date.number}
                            </span>
                            <span className="text-xs">{date.month}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  <p className="mt-5 text-xs text-white/40">
                    Times are shown in Pakistan Standard Time (PKT, UTC+5).
                  </p>
                </div>

                <div className="p-5 sm:p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-300">
                      <Clock3 size={21} />
                    </div>
                    <div>
                      <h2 className="font-medium">Select a time</h2>
                      <p className="mt-1 text-xs text-white/50">
                        {chosenDate
                          ? `${chosenDate.day}, ${chosenDate.month} ${chosenDate.number}`
                          : "Choose a date first"}
                      </p>
                    </div>
                  </div>

                  {!selectedDate ? (
                    <div className="rounded-xl border border-white/10 px-4 py-8 text-center text-sm text-white/50">
                      Select a date to view available times.
                    </div>
                  ) : times.length === 0 ? (
                    <div className="rounded-xl border border-white/10 px-4 py-8 text-center text-sm text-white/50">
                      No available times for this date. Please choose another
                      day.
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      {times.map((slot) => {
                        const isSelected = selectedTime === slot.start;

                        return (
                          <button
                            key={slot.start}
                            type="button"
                            onClick={() => {
                              setSelectedTime(slot.start);
                              setBookingError("");
                            }}
                            className={`rounded-xl border px-3 py-3 text-sm transition ${
                              isSelected
                                ? "border-indigo-400 bg-indigo-400/15 text-white"
                                : "border-white/10 bg-white/2.5 text-white/65 hover:border-white/25 hover:bg-white/6"
                            }`}
                          >
                            {timeFormatter.format(new Date(slot.start))}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  <div className="mt-8 rounded-2xl border border-white/10 bg-black/15 p-4">
                    <div className="flex items-center gap-3">
                      <Video size={19} className="text-indigo-300" />
                      <div>
                        <p className="text-sm font-medium">
                          Online consultation
                        </p>
                        <p className="mt-1 text-xs text-white/50">
                          30 minutes · Google Meet
                        </p>
                      </div>
                    </div>

                    {selectedSlot && (
                      <div className="mt-4 border-t border-white/10 pt-4 text-sm text-white/70">
                        {fullDateFormatter.format(
                          new Date(selectedSlot.start)
                        )}
                        <p className="mt-1">
                          {timeFormatter.format(
                            new Date(selectedSlot.start)
                          )}{" "}
                          PKT
                        </p>
                      </div>
                    )}
                  </div>

                  {bookingError && (
                    <p role="alert" className="mt-4 text-sm text-red-300">
                      {bookingError}
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={handleContinue}
                    disabled={loadingSlots || !selectedSlot}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Continue
                    <ArrowRight size={17} />
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto max-w-2xl p-5 sm:p-8 lg:p-10"
              >
                <button
                  type="button"
                  onClick={handleBack}
                  className="mb-6 inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
                >
                  <ArrowLeft size={16} />
                  Back to date and time
                </button>

                <h2 className="text-2xl font-semibold">
                  Tell us about yourself
                </h2>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  Share a few details so we can make the most of your
                  consultation.
                </p>

                {selectedSlot && (
                  <div className="mt-6 flex items-start gap-3 rounded-2xl border border-indigo-400/20 bg-indigo-400/[0.07] p-4">
                    <CalendarDays
                      size={20}
                      className="mt-0.5 shrink-0 text-indigo-300"
                    />
                    <div>
                      <p className="text-sm font-medium">
                        {fullDateFormatter.format(
                          new Date(selectedSlot.start)
                        )}
                      </p>
                      <p className="mt-1 text-sm text-white/60">
                        {timeFormatter.format(
                          new Date(selectedSlot.start)
                        )}{" "}
                        PKT · 30 minutes
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="mb-2 block text-sm text-white/75"
                    >
                      Full name *
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      autoComplete="name"
                      required
                      maxLength={120}
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm outline-none transition placeholder:text-white/30 focus:border-indigo-400/60"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="booking-email"
                      className="mb-2 block text-sm text-white/75"
                    >
                      Email address *
                    </label>
                    <input
                      id="booking-email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm outline-none transition placeholder:text-white/30 focus:border-indigo-400/60"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="booking-company"
                      className="mb-2 block text-sm text-white/75"
                    >
                      Company
                    </label>
                    <input
                      id="booking-company"
                      type="text"
                      autoComplete="organization"
                      maxLength={150}
                      value={company}
                      onChange={(event) => setCompany(event.target.value)}
                      placeholder="Company or business name"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm outline-none transition placeholder:text-white/30 focus:border-indigo-400/60"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="booking-service"
                      className="mb-2 block text-sm text-white/75"
                    >
                      Service you&apos;re interested in *
                    </label>
                    <select
                      id="booking-service"
                      required
                      value={service}
                      onChange={(event) => setService(event.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-[#101420] px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-400/60"
                    >
                      <option>Web Development</option>
                      <option>AI Automation</option>
                      <option>Business Growth</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="booking-message"
                      className="mb-2 block text-sm text-white/75"
                    >
                      Tell us about your project
                    </label>
                    <textarea
                      id="booking-message"
                      rows={4}
                      maxLength={3000}
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder="What are you looking to build, improve, or automate?"
                      className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm outline-none transition placeholder:text-white/30 focus:border-indigo-400/60"
                    />
                  </div>
                </div>

                {bookingError && (
                  <p role="alert" className="mt-5 text-sm text-red-300">
                    {bookingError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting || !selectedSlot}
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {submitting ? (
                    "Booking your consultation..."
                  ) : (
                    <>
                      Request Booking
                      <ArrowRight size={17} />
                    </>
                  )}
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-white/40">
                  By booking, you agree to be contacted about your
                  consultation. Your appointment time is shown in Pakistan
                  Standard Time (PKT).
                </p>
              </form>
            )}
          </div>
        )}

        <p className="mt-8 text-center text-xs text-white/35">
          Powered by CloodyKit · AI Automation & Web Development
        </p>
      </div>
    </section>
  );
}