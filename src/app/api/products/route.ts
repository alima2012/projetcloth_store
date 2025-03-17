import { NextResponse } from "next/server";
import Product from "@/models/Product";
import connectToDatabase from "@/lib/mongodb";
export async function POST(req: Request) {
    await connectToDatabase();
    try {
      const body = await req.json();
      const newProduct = await Product.create(body);
      return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
      console.error("Erreur API :", error);
      return NextResponse.json({ message: "Erreur interne du serveur" }, { status: 500 });
    }
  }
  
