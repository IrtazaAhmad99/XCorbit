
import { NextResponse } from "next/server";
import { getGoogleCalendar } from "../../../../libs/google-calendar";

export const runtime = "nodejs";

const TIME_ZONE = "Asia/Karachi";
const SLOT_MINUTES = 30;
const BUFFER_MINUTES = 10;
const BOOKING_DAYS = 15;

function getLocalDate(date: Date) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function getLocalTime(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(date);
}

function localDateTimeToUtc(date: string, time: string) {
  // Pakistan has a fixed UTC+5 offset.
  return new Date(`${date}T${time}:00+05:00`);
}

export async function GET() {
  try {
    const calendar = getGoogleCalendar();
    const now = new Date();
    const today = getLocalDate(now);
    const endDate = new Date(now.getTime() + BOOKING_DAYS * 86400000);
    const lastDate = getLocalDate(endDate);

    const rangeStart = localDateTimeToUtc(today, "00:00");
    const rangeEnd = localDateTimeToUtc(lastDate, "23:59");

    const busyResponse = await calendar.freebusy.query({
      requestBody: {
        timeMin: rangeStart.toISOString(),
        timeMax: rangeEnd.toISOString(),
        timeZone: TIME_ZONE,
        items: [{ id: "primary" }],
      },
    });

    const busy = busyResponse.data.calendars?.primary?.busy ?? [];
    const slots: { start: string; end: string }[] = [];

    for (let dayOffset = 0; dayOffset <= BOOKING_DAYS; dayOffset++) {
      const day = new Date(rangeStart.getTime() + dayOffset * 86400000);
      const date = getLocalDate(day);

      // Monday–Saturday only; Sunday is closed.
      const weekday = new Date(`${date}T12:00:00+05:00`).getUTCDay();
      if (weekday === 0) continue;

      for (let minutes = 10 * 60; minutes + SLOT_MINUTES <= 18 * 60; minutes += SLOT_MINUTES + BUFFER_MINUTES) {
        const hour = Math.floor(minutes / 60);
        const minute = minutes % 60;
        const startTime = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
        const start = localDateTimeToUtc(date, startTime);
        const end = new Date(start.getTime() + SLOT_MINUTES * 60000);

        if (start <= now) continue;
        if (end > rangeEnd) continue;

        const conflicts = busy.some((period) => {
          if (!period.start || !period.end) return false;

          const busyStart = new Date(period.start);
          const busyEnd = new Date(period.end);
          const bufferedStart = new Date(start.getTime() - BUFFER_MINUTES * 60000);
          const bufferedEnd = new Date(end.getTime() + BUFFER_MINUTES * 60000);

          return bufferedStart < busyEnd && bufferedEnd > busyStart;
        });

        if (!conflicts) {
          slots.push({
            start: start.toISOString(),
            end: end.toISOString(),
          });
        }
      }
    }

    return NextResponse.json({ slots });
  } catch (error) {
     if (error instanceof Error) {
    console.error("Calendar availability check failed:", error.message);
  } else {
    console.error("Calendar availability check failed:", String(error));
  }

  return NextResponse.json(
    { error: "Unable to check calendar availability." },
    { status: 500 }
  );
  }
}


