"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Search } from "lucide-react"
import styled from "styled-components"

// Importation directe des images de produits
import productImage1 from "@/assets/img8.jpeg"
import productImage2 from "@/assets/img12.jpeg"
import productImage3 from "@/assets/img13.jpeg"
import productImage4 from "@/assets/img7.jpeg"
import productImage5 from "@/assets/img1.jpeg"
import productImage6 from "@/assets/img14.jpeg"

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1rem;
`

const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

const BreadcrumbLink = styled(Link)`
  font-size: 0.875rem;

  &:hover {
    text-decoration: underline;
  }
`

const BreadcrumbSeparator = styled.span`
  margin: 0 0.5rem;
`

const BreadcrumbCurrent = styled.span`
  font-size: 0.875rem;
`

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 2rem;
`

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 3fr;
  }
`

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const SidebarTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
`

const SizeSection = styled.div`
  margin-bottom: 1rem;
`

const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
`

const SizeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`

const SizeButton = styled.button`
  height: 2.5rem;
  border: 1px solid #e5e5e5;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f5f5f5;
  }
`

const FilterSection = styled.div`
  margin-bottom: 1rem;
`

const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const FilterIcon = styled(ChevronRight)<{ $expanded?: boolean }>`
  transform: ${(props) => (props.$expanded ? "rotate(90deg)" : "rotate(0)")};
  transition: transform 0.2s;
`

const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const FilterOption = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
`

const OptionLabel = styled.label`
  font-size: 0.875rem;
  flex: 1;
`

const OptionCount = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
`

const ProductsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const SearchContainer = styled.div`
  position: relative;
`

const SearchInput = styled.input`
  height: 3rem;
  padding: 0 1rem 0 2.5rem;
  background-color: #e5e5e5;
  border: none;
  width: 100%;

  &::placeholder {
    color: #9ca3af;
  }
`

const SearchIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
`

const CategoryTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const CategoryTag = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #e5e5e5;
  font-size: 0.875rem;

  &:hover {
    background-color: #f5f5f5;
  }
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ProductLink = styled(Link)`
  display: block;

  &:hover {
    img {
      opacity: 0.9;
    }
  }
`

const ProductImageContainer = styled.div`
  aspect-ratio: 3/4;
  background-color: white;
  margin-bottom: 1rem;
  position: relative;
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const ProductType = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
`

const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
`

const ProductName = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
`

const ProductPrice = styled.div`
  font-size: 0.875rem;
`

export default function CollectionsPage() {
  // Tableau d'images de produits importées
  const productImages = [productImage1, productImage2, productImage3, productImage4, productImage5, productImage6]

  // Données des produits
  const products = [
    {
      id: 1,
      name: "Basic Slim Fit T-Shirt",
      price: "$199",
      type: "Cotton T-Shirt",
      image: productImages[0],
    },
    {
      id: 2,
      name: "Basic Heavy Weight T-Shirt",
      price: "$199",
      type: "Crewneck T-Shirt",
      image: productImages[1],
    },
    {
      id: 3,
      name: "Full Sleeve Zipper",
      price: "$199",
      type: "Cotton T-Shirt",
      image: productImages[2],
    },
    {
      id: 4,
      name: "Basic Slim Fit T-Shirt",
      price: "$199",
      type: "Cotton T-Shirt",
      image: productImages[3],
    },
    {
      id: 5,
      name: "Basic Heavy Weight T-Shirt",
      price: "$199",
      type: "Crewneck T-Shirt",
      image: productImages[4],
    },
    {
      id: 6,
      name: "Full Sleeve Zipper",
      price: "$199",
      type: "Cotton T-Shirt",
      image: productImages[5],
    },
  ]

  const categories = ["NEW", "SHIRTS", "POLO SHIRTS", "SHORTS", "SUITS", "T-SHIRTS", "JEANS", "JACKETS", "COATS"]

  const sizes = ["XS", "S", "M", "L", "XL", "2X"]

  const filters = [
    { name: "Availability", count: 450 },
    { name: "Out Of Stack", count: 18 },
  ]

  const filterCategories = ["Category", "Colors", "Price Range", "Collections", "Tags", "Ratings"]

  return (
    <Container>
      <Breadcrumbs>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbCurrent>Products</BreadcrumbCurrent>
      </Breadcrumbs>
      <Title>PRODUCTS</Title>

      <ProductsGrid>
        <Sidebar>
          <SidebarTitle>Filters</SidebarTitle>

          <SizeSection>
            <SectionTitle>Size</SectionTitle>
            <SizeGrid>
              {sizes.map((size) => (
                <SizeButton key={size}>{size}</SizeButton>
              ))}
            </SizeGrid>
          </SizeSection>

          <FilterSection>
            <FilterHeader>
              <SectionTitle>Availability</SectionTitle>
              <FilterIcon $expanded size={16} />
            </FilterHeader>

            <FilterOptions>
              {filters.map((filter) => (
                <FilterOption key={filter.name}>
                  <Checkbox type="checkbox" id={filter.name.toLowerCase().replace(/\s+/g, "-")} />
                  <OptionLabel htmlFor={filter.name.toLowerCase().replace(/\s+/g, "-")}>{filter.name}</OptionLabel>
                  <OptionCount>({filter.count})</OptionCount>
                </FilterOption>
              ))}
            </FilterOptions>
          </FilterSection>

          {filterCategories.map((category) => (
            <FilterSection key={category}>
              <FilterHeader>
                <SectionTitle>{category}</SectionTitle>
                <FilterIcon size={16} />
              </FilterHeader>
            </FilterSection>
          ))}
        </Sidebar>

        <ProductsContent>
          <SearchContainer>
            <SearchIcon>
              <Search size={20} />
            </SearchIcon>
            <SearchInput type="search" placeholder="Search" />
          </SearchContainer>

          <CategoryTags>
            {categories.map((category) => (
              <CategoryTag key={category}>{category}</CategoryTag>
            ))}
          </CategoryTags>

          <ProductGrid>
            {products.map((product) => (
              <ProductLink href={`/products/${product.id}`} key={product.id}>
                <ProductImageContainer>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </ProductImageContainer>
                <ProductInfo>
                  <ProductType>{product.type}</ProductType>
                  <ProductDetails>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>{product.price}</ProductPrice>
                  </ProductDetails>
                </ProductInfo>
              </ProductLink>
            ))}
          </ProductGrid>
        </ProductsContent>
      </ProductsGrid>
    </Container>
  )
}

