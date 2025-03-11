"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import styled from "styled-components"
import { Search, Heart, ShoppingBag, User, Menu, ChevronRight } from "lucide-react"

// Types
type Size = "XS" | "S" | "M" | "L" | "XL" | "2X"
type Product = {
  id: number
  type: string
  name: string
  price: number
  image: string
}

export default function ProductsPage() {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const sizes: Size[] = ["XS", "S", "M", "L", "XL", "2X"]
  const categories = ["NEW", "SHIRTS", "POLO SHIRTS", "SHORTS", "SUITS", "T-SHIRTS", "JEANS", "JACKETS", "COATS"]

  const products: Product[] = [
    {
      id: 1,
      type: "Cotton T-Shirt",
      name: "Basic Slim Fit T-Shirt",
      price: 199,
      image: "/placeholder.svg?height=600&width=450",
    },
    {
      id: 2,
      type: "Crewneck T-Shirt",
      name: "Basic Heavy Weight T-Shirt",
      price: 199,
      image: "/placeholder.svg?height=600&width=450",
    },
    {
      id: 3,
      type: "Cotton T-Shirt",
      name: "Full Sleeve Zipper",
      price: 199,
      image: "/placeholder.svg?height=600&width=450",
    },
    // Add more products as needed
  ]

  return (
    <Container>
      <Header>
        <MenuButton>
          <Menu size={24} />
        </MenuButton>
        <Navigation>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Collections</NavLink>
          <NavLink href="#">New</NavLink>
        </Navigation>
        <Logo>
          <Image src="/placeholder.svg?height=40&width=40" alt="Logo" width={40} height={40} />
        </Logo>
        <HeaderIcons>
          <IconButton>
            <Heart size={24} />
          </IconButton>
          <CartButton>
            <ShoppingBag size={24} />
            <CartText>Cart</CartText>
          </CartButton>
          <IconButton>
            <User size={24} />
          </IconButton>
        </HeaderIcons>
      </Header>

      <Main>
        <Breadcrumb>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
          <ChevronRight size={16} />
          <BreadcrumbText>Products</BreadcrumbText>
        </Breadcrumb>

        <PageTitle>PRODUCTS</PageTitle>

        <ContentWrapper>
          <Sidebar>
            <FilterSection>
              <FilterTitle>Size</FilterTitle>
              <SizeGrid>
                {sizes.map((size) => (
                  <SizeButton key={size} selected={selectedSize === size} onClick={() => setSelectedSize(size)}>
                    {size}
                  </SizeButton>
                ))}
              </SizeGrid>
            </FilterSection>

            <FilterSection>
              <FilterTitle>Availability</FilterTitle>
              <CheckboxGroup>
                <CheckboxLabel>
                  <Checkbox type="checkbox" />
                  <span>Availability (450)</span>
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox type="checkbox" />
                  <span>Out Of Stack (18)</span>
                </CheckboxLabel>
              </CheckboxGroup>
            </FilterSection>

            <FilterSection>
              <FilterTitle>Category</FilterTitle>
              <FilterButton>
                Category
                <ChevronRight size={16} />
              </FilterButton>
            </FilterSection>

            <FilterSection>
              <FilterTitle>Colors</FilterTitle>
              <FilterButton>
                Colors
                <ChevronRight size={16} />
              </FilterButton>
            </FilterSection>

            <FilterSection>
              <FilterTitle>Price Range</FilterTitle>
              <FilterButton>
                Price Range
                <ChevronRight size={16} />
              </FilterButton>
            </FilterSection>

            <FilterSection>
              <FilterTitle>Collections</FilterTitle>
              <FilterButton>
                Collections
                <ChevronRight size={16} />
              </FilterButton>
            </FilterSection>

            <FilterSection>
              <FilterTitle>Tags</FilterTitle>
              <FilterButton>
                Tags
                <ChevronRight size={16} />
              </FilterButton>
            </FilterSection>

            <FilterSection>
              <FilterTitle>Ratings</FilterTitle>
              <FilterButton>
                Ratings
                <ChevronRight size={16} />
              </FilterButton>
            </FilterSection>
          </Sidebar>

          <Content>
            <SearchBar>
              <SearchIcon>
                <Search size={20} />
              </SearchIcon>
              <SearchInput
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </SearchBar>

            <Categories>
              {categories.map((category) => (
                <CategoryTag key={category}>{category}</CategoryTag>
              ))}
            </Categories>

            <ProductGrid>
              {products.map((product) => (
                <ProductCard key={product.id}>
                  <ProductImage>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </ProductImage>
                  <ProductInfo>
                    <ProductType>{product.type}</ProductType>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>${product.price}</ProductPrice>
                  </ProductInfo>
                </ProductCard>
              ))}
            </ProductGrid>
          </Content>
        </ContentWrapper>
      </Main>
    </Container>
  )
}

// Styled Components
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f3;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  border-bottom: 1px solid #eee;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  
  @media (min-width: 769px) {
    display: none;
  }
`

const Navigation = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`

const Logo = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const IconButton = styled.button`
  background: #333;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const CartButton = styled(IconButton)`
  border-radius: 20px;
  width: auto;
  padding: 0 1rem;
  display: flex;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    padding: 0;
    width: 40px;
    border-radius: 50%;
  }
`

const CartText = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`

const Main = styled.main`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: #666;
`

const BreadcrumbLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

const BreadcrumbText = styled.span`
  color: #333;
`

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`

const ContentWrapper = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const Sidebar = styled.aside`
  width: 280px;
  flex-shrink: 0;
  
  @media (max-width: 1024px) {
    width: 100%;
  }
`

const FilterSection = styled.div`
  margin-bottom: 2rem;
`

const FilterTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

const SizeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`

const SizeButton = styled.button<{ selected?: boolean }>`
  padding: 0.5rem;
  border: 1px solid ${(props) => (props.selected ? "#333" : "#ccc")};
  background: ${(props) => (props.selected ? "#333" : "white")};
  color: ${(props) => (props.selected ? "white" : "#333")};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: #333;
  }
`

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  
  span {
    font-size: 0.875rem;
    color: #666;
  }
`

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`

const FilterButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: white;
  border: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  
  &:hover {
    background: #f9f9f9;
  }
`

const Content = styled.div`
  flex: 1;
`

const SearchBar = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
`

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: none;
  background: #e6e6e6;
  border-radius: 4px;
  font-size: 1rem;
  
  &::placeholder {
    color: #666;
  }
`

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`

const CategoryTag = styled.button`
  padding: 0.5rem 1rem;
  background: white;
  border: 1px solid #eee;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
  
  &:hover {
    background: #f9f9f9;
  }
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`

const ProductCard = styled.div`
  background: white;
  border-radius: 4px;
  overflow: hidden;
`

const ProductImage = styled.div`
  position: relative;
  aspect-ratio: 3/4;
  background: #f9f9f9;
`

const ProductInfo = styled.div`
  padding: 1rem;
`

const ProductType = styled.div`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.25rem;
`

const ProductName = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`

const ProductPrice = styled.div`
  font-weight: 600;
`

