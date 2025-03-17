import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import connectToDatabase from "@/lib/mongodb";

export async function POST(req: Request) {
  await connectToDatabase();
  try {
    const { firstName, lastName, email, password, role } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ firstName, lastName, email, password: hashedPassword, role });
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de l'ajout de l'utilisateur" }, { status: 500 });
  }
}
