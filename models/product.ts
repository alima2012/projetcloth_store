import type { ObjectId } from "mongodb"

export interface ProductVariant {
  id: string
  color: string
  size: string
  price: number
  stock: number
}

export interface Product {
  _id?: ObjectId
  name: string
  sku: string
  description: string
  category: string
  brand: string
  price: number
  stock: number
  status: "in-stock" | "low-stock" | "out-of-stock"
  images: string[]
  variants: ProductVariant[]
  createdAt: Date
  updatedAt: Date
}

export interface ProductInput {
  name: string
  sku: string
  description: string
  category: string
  brand: string
  price: number
  stock: number
  images: string[]
  variants: Omit<ProductVariant, "id">[]
}

