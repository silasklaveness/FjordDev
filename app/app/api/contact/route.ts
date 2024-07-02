import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { fullname, email, message } = await req.json();
  try {
    await connectDB();
    await Contact.create({ fullname, email, message });
    return NextResponse.json({
      msg: ["Message Sent Successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const errorList: string[] = [];
      for (const e in error.errors) {
        errorList.push(error.errors[e].message);
      }

      return NextResponse.json(
        {
          msg: errorList,
          success: false,
        },
        { status: 400 }
      );
    } else {
      console.error("Intern serverfeil:", error);
      return NextResponse.json(
        {
          msg: ["En intern serverfeil oppstod"],
          success: false,
        },
        { status: 500 }
      );
    }
  }
}
