import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, password } = await req.json();

    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json({ error: "All input fields are required." }, { status: 400 });
    }

    // Check if user email is already occupied
    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (existingUser) {
      return NextResponse.json({ error: "Email is already registered." }, { status: 400 });
    }

    // Securely encrypt the user password before saving
    const hashedPassword = await bcrypt.hash(password, 12);

    // Save registration straight into PostgreSQL
    await prisma.user.create({
      data: {
        firstName,
        lastName,
        email: email.toLowerCase(),
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: "Account created successfully!" }, { status: 201 });
  } catch (error) {
    console.error("REGISTRATION_API_ERROR:", error);
    return NextResponse.json({ error: "Internal operational server glitch." }, { status: 500 });
  }
}