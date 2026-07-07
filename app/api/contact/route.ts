import { NextResponse } from "next/server";
import { Resend } from "resend";

console.log(process.env.RESEND_API_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await resend.emails.send({
      from: "CloodyKit <onboarding@resend.dev>",
      to: "iratzaahmad3321@gmail.com",
      subject: `New Project Inquiry from ${body.fullName}`,
      html: `
        <h2>New Project Inquiry</h2>

        <p><strong>Name:</strong> ${body.fullName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Contact Number:</strong> ${body.number}</p>
        <p><strong>Service:</strong> ${body.service}</p>

        <hr/>

        <p>${body.message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Inquiry sent successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email.",
      },
      { status: 500 }
    );
  }
}