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
    return NextResponse.json({ error: "Erreur lors de l'ajout du produit" }, { status: 500 });
  }
}
