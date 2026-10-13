
import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
    const code = request.nextUrl.searchParams.get("code");
    const error = request.nextUrl.searchParams.get("error");

    if (error) {
        return NextResponse.json(
            { error: `Google authorization failed: ${error}` },
            { status: 400 }
        );
    }

    if (!code) {
        return NextResponse.json(
            { error: "Missing authorization code." },
            { status: 400 }
        );
    }

    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const redirectUri = process.env.GOOGLE_REDIRECT_URI;

    if (!clientId || !clientSecret || !redirectUri) {
        return NextResponse.json(
            { error: "Google OAuth environment variables are missing." },
            { status: 500 }
        );
    }

    const oauth2Client = new google.auth.OAuth2(
        clientId,
        clientSecret,
        redirectUri
    );

    try {
        const { tokens } = await oauth2Client.getToken(code);

        // Never return tokens to the browser or expose them in the response.
        // Store the refresh token securely on the server.
        if (!tokens.refresh_token) {
            return NextResponse.json(
                {
                    error:
                        "Google did not return a refresh token. Revoke this app's access in your Google Account and authorize again.",
                },
                { status: 400 }
            );
        }

        console.info("Google Calendar OAuth authorization completed.");

        return NextResponse.json({
            success: true,
            message:
                "Google authorization succeeded. Add the refresh token to your server environment securely before using Calendar API routes.",
        });
    } catch (err) {
        console.error("Google OAuth token exchange failed.");
        return NextResponse.json(
            { error: "Unable to complete Google authorization." },
            { status: 500 }
        );
    }
}
