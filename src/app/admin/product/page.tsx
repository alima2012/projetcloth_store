"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import styled from "styled-components"
import { Plus, Search, Filter, Edit, Trash2, ChevronLeft, ChevronRight } from "lucide-react"

// Importation des images de produits pour la démo
import productImage1 from "@/assets/img1.jpeg"
import productImage2 from "@/assets/img10.jpeg"
import productImage3 from "@/assets/img14.jpeg"
import productImage4 from "@/assets/img2.jpeg"

const ProductsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
`

const AddButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #1a1a1a;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #000;
  }
`

const FiltersContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`

const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  min-width: 200px;
`

const SearchInput = styled.input`
  height: 2.5rem;
  padding: 0 1rem 0 2.5rem;
  border: 1px solid #e5e5e5;
  border-radius: 0.375rem;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: #1a1a1a;
  }
`

const SearchIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
`

const FilterButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  height: 2.5rem;
  padding: 0 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 0.375rem;
  background-color: white;
  
  &:hover {
    background-color: #f9fafb;
  }
`

const ProductsGrid = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  overflow: hidden;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const TableHead = styled.thead`
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e5e5;
`

const TableRow = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid #e5e5e5;
  }
`

const TableHeader = styled.th`
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
`

const TableCell = styled.td`
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  vertical-align: middle;
`

const ProductImage = styled.div`
  width: 3rem;
  height: 3rem;
  position: relative;
  border-radius: 0.25rem;
  overflow: hidden;
`

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const ProductName = styled.div`
  font-weight: 500;
`

const ProductSku = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
`

const StatusBadge = styled.span<{ $status: "in-stock" | "low-stock" | "out-of-stock" }>`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  
  ${(props) => {
    switch (props.$status) {
      case "in-stock":
        return `
          background-color: #dcfce7;
          color: #166534;
        `
      case "low-stock":
        return `
          background-color: #fef9c3;
          color: #854d0e;
        `
      case "out-of-stock":
        return `
          background-color: #fee2e2;
          color: #991b1b;
        `
      default:
        return ""
    }
  }}
`

const ActionButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.375rem;
  color: #6b7280;
  
  &:hover {
    background-color: #f3f4f6;
    color: #1a1a1a;
  }
`

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-top: 1px solid #e5e5e5;
`

const PaginationInfo = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`

const PaginationButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`

const PaginationButton = styled.button<{ $active?: boolean }>`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  
  ${(props) =>
    props.$active
      ? `
    background-color: #1a1a1a;
    color: white;
  `
      : `
    background-color: white;
    border: 1px solid #e5e5e5;
    
    &:hover {
      background-color: #f3f4f6;
    }
  `}
`

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Données de produits pour la démo
  const products = [
    {
      id: 1,
      name: "Basic Slim Fit T-Shirt",
      sku: "TSH-001",
      price: 99.99,
      stock: 45,
      status: "in-stock" as const,
      image: productImage1,
    },
    {
      id: 2,
      name: "Basic Heavy Weight T-Shirt",
      sku: "TSH-002",
      price: 129.99,
      stock: 32,
      status: "in-stock" as const,
      image: productImage2,
    },
    {
      id: 3,
      name: "Full Sleeve Zipper",
      sku: "ZIP-001",
      price: 199.99,
      stock: 8,
      status: "low-stock" as const,
      image: productImage3,
    },
    {
      id: 4,
      name: "Embroidered Sportswear Shirt",
      sku: "SPT-001",
      price: 149.99,
      stock: 0,
      status: "out-of-stock" as const,
      image: productImage4,
    },
    {
      id: 5,
      name: "Soft Wash Straight Fit Jeans",
      sku: "JNS-001",
      price: 179.99,
      stock: 24,
      status: "in-stock" as const,
      image: productImage1,
    },
  ]

  return (
    <ProductsContainer>
      <PageHeader>
        <Title>Produits</Title>
        <AddButton href="/admin/product/new">
          <Plus size={20} />
          Ajouter un produit
        </AddButton>
      </PageHeader>

      <FiltersContainer>
        <SearchContainer>
          <SearchIcon>
            <Search size={16} />
          </SearchIcon>
          <SearchInput
            type="text"
            placeholder="Rechercher un produit..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchContainer>

        <FilterButton>
          <Filter size={16} />
          Filtres
        </FilterButton>
      </FiltersContainer>

      <ProductsGrid>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Produit</TableHeader>
              <TableHeader>SKU</TableHeader>
              <TableHeader>Prix</TableHeader>
              <TableHeader>Stock</TableHeader>
              <TableHeader>Statut</TableHeader>
              <TableHeader>Actions</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <ProductInfo>
                    <ProductImage>
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </ProductImage>
                    <ProductName>{product.name}</ProductName>
                  </ProductInfo>
                </TableCell>
                <TableCell>
                  <ProductSku>{product.sku}</ProductSku>
                </TableCell>
                <TableCell>{product.price.toFixed(2)} €</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                  <StatusBadge $status={product.status}>
                    {product.status === "in-stock" && "En stock"}
                    {product.status === "low-stock" && "Stock faible"}
                    {product.status === "out-of-stock" && "Épuisé"}
                  </StatusBadge>
                </TableCell>
                <TableCell>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <ActionButton>
                      <Edit size={16} />
                    </ActionButton>
                    <ActionButton>
                      <Trash2 size={16} />
                    </ActionButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>

        <Pagination>
          <PaginationInfo>Affichage de 1 à 5 sur 12 produits</PaginationInfo>
          <PaginationButtons>
            <PaginationButton>
              <ChevronLeft size={16} />
            </PaginationButton>
            <PaginationButton $active>1</PaginationButton>
            <PaginationButton>2</PaginationButton>
            <PaginationButton>3</PaginationButton>
            <PaginationButton>
              <ChevronRight size={16} />
            </PaginationButton>
          </PaginationButtons>
        </Pagination>
      </ProductsGrid>
    </ProductsContainer>
  )
}

