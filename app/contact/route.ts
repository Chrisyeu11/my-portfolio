import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Example: Logging the message to the server (replace with email service)
    console.log("📩 New Contact Form Submission:");
    console.log(`🧑 Name: ${name}`);
    console.log(`📧 Email: ${email}`);
    console.log(`💬 Message: ${message}`);

    return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json({ success: false, message: "Error sending message." }, { status: 500 });
  }
}
