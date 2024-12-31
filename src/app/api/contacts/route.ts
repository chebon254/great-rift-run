import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

// Initialize Prisma Client
const prisma = new PrismaClient();

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate the input
    const validatedData = contactSchema.parse(body);

    // Create new contact in database
    const newContact = await prisma.contact.create({
      data: validatedData,
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        contact: newContact,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form submission error:", error);

    // Check if it's a validation error
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid form data",
          details: error.errors,
        },
        { status: 400 }
      );
    }

    // Return generic error for other cases
    return NextResponse.json(
      {
        success: false,
        error: "Failed to save contact data",
      },
      { status: 500 }
    );
  }
}
