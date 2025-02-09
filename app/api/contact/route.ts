import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json(); // Read request body
    console.log("Received contact form data:", data);
    
    // Process the form data here (e.g., store it in a database)
    
    return NextResponse.json({ message: "Success!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error processing request" }, { status: 500 });
  }
}
