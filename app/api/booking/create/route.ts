
import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { getGoogleCalendar } from "../../../../libs/google-calendar";

export const runtime = "nodejs";

const TIME_ZONE = "Asia/Karachi";
const SLOT_MINUTES = 30;
const BUFFER_MINUTES = 10;

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const name = typeof body.name === "string" ? body.name.trim() : "";
        const email = typeof body.email === "string" ? body.email.trim() : "";
        const startValue = typeof body.start === "string" ? body.start : "";

        if (!name || !email || !startValue) {
            return NextResponse.json(
                { error: "Name, email, and appointment start time are required." },
                { status: 400 }
            );
        }

        if (
            name.length > 120 ||
            email.length > 254 ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ) {
            return NextResponse.json(
                { error: "Please provide a valid name and email address." },
                { status: 400 }
            );
        }

        const start = new Date(startValue);

        if (Number.isNaN(start.getTime())) {
            return NextResponse.json(
                { error: "Invalid appointment time." },
                { status: 400 }
            );
        }

        const end = new Date(start.getTime() + SLOT_MINUTES * 60_000);
        const now = new Date();

        if (start <= now) {
            return NextResponse.json(
                { error: "This appointment time has already passed." },
                { status: 400 }
            );
        }

        // Recheck the requested slot immediately before creating the event.
        const calendar = getGoogleCalendar();

        const busyResponse = await calendar.freebusy.query({
            requestBody: {
                timeMin: new Date(start.getTime() - BUFFER_MINUTES * 60_000).toISOString(),
                timeMax: new Date(end.getTime() + BUFFER_MINUTES * 60_000).toISOString(),
                timeZone: TIME_ZONE,
                items: [{ id: "primary" }],
            },
        });

        const busy = busyResponse.data.calendars?.primary?.busy ?? [];

        if (busy.length > 0) {
            return NextResponse.json(
                {
                    error:
                        "This appointment slot is no longer available. Please select another time.",
                },
                { status: 409 }
            );
        }

        const response = await calendar.events.insert({
            calendarId: "primary",
            conferenceDataVersion: 1,
            sendUpdates: "all",
            requestBody: {
                summary: `CloodyKit Consultation — ${name}`,
                description: `Consultation booked through CloodyKit.\nClient: ${name}\nEmail: ${email}`,
                start: {
                    dateTime: start.toISOString(),
                    timeZone: TIME_ZONE,
                },
                end: {
                    dateTime: end.toISOString(),
                    timeZone: TIME_ZONE,
                },
                attendees: [{ email, displayName: name }],
                conferenceData: {
                    createRequest: {
                        requestId: randomUUID(),
                        conferenceSolutionKey: { type: "hangoutsMeet" },
                    },
                },
            },
        });

        return NextResponse.json({
            success: true,
            booking: {
                eventId: response.data.id,
                start: response.data.start?.dateTime,
                end: response.data.end?.dateTime,
                meetLink:
                    response.data.hangoutLink ??
                    response.data.conferenceData?.entryPoints?.find(
                        (entry) => entry.entryPointType === "video"
                    )?.uri ??
                    null,
            },
        });
    } catch (error) {
        console.error(
            "Booking creation failed:",
            error instanceof Error ? error.message : String(error)
        );

        return NextResponse.json(
            { error: "Unable to create your booking. Please try again." },
            { status: 500 }
        );
    }
}
