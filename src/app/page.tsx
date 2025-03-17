"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import styled from "styled-components"

// Importation directe des images
// Images du carrousel hero
import heroImage1 from "@/assets/img1.jpeg"
import heroImage2 from "@/assets/img2.jpeg"

// Images des produits "New This Week"
import newProduct1 from "@/assets/img3.jpeg"
import newProduct2 from "@/assets/img4.jpeg"
import newProduct3 from "@/assets/img5.jpeg"
import newProduct4 from "@/assets/img6.jpeg"

// Images des collections
import collection1 from "@/assets/img7.jpeg"
import collection2 from "@/assets/img2.jpeg"
import collection3 from "@/assets/img9.jpeg"

// Images de la section "Our Approach"
import approach1 from "@/assets/img9.jpeg"
import approach2 from "@/assets/img10.jpeg"
import approach3 from "@/assets/img2.jpeg"
import approach4 from "@/assets/img11.jpeg"

// Styled components
const PageContainer = styled.div`
  padding-bottom: 4rem;
`

const Section = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1rem;
  
  @media (min-width: 768px) {
    padding: 3rem 1.5rem;
  }
`

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 5fr 7fr;
  }
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.025em;
  color: #1a1a1a;
  margin-bottom: 1rem;
`

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
`

const HeroButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: #e5e5e5;
  color: #1a1a1a;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #d4d4d4;
  }
`

const ButtonIcon = styled.span`
  margin-left: 0.5rem;
`

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

const ImageContainer = styled.div`
  aspect-ratio: 3/4;
  background-color: white;
  position: relative;
`

const PaginationControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 0.5rem;
`

const PaginationButton = styled.button`
  padding: 0.5rem;
  border: 1px solid #e5e5e5;
`

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 1.2;
`

const SectionCount = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  color: #6b7280;
  margin-left: 0.5rem;
`

const SeeAllLink = styled(Link)`
  font-size: 0.875rem;
  color: #6b7280;
  
  &:hover {
    color: #1a1a1a;
  }
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
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
  position: relative;
  aspect-ratio: 4/5;
  background-color: white;
  margin-bottom: 1rem;
`

const AddButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  padding: 0.25rem;
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

const ProductName = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
`

const ProductPrice = styled.div`
  font-size: 0.875rem;
`

const CollectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const TabsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 1rem;
`

const TabButton = styled.button<{ $active?: boolean }>`
  font-size: 0.875rem;
  font-weight: ${(props) => (props.$active ? "500" : "400")};
  color: ${(props) => (props.$active ? "#1a1a1a" : "#6b7280")};
  
  &:hover {
    color: #1a1a1a;
  }
`

const FilterContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
`

const FilterLabel = styled.div`
  font-size: 0.875rem;
`

const SortContainer = styled.div`
  font-size: 0.875rem;
`

const SortOption = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
`

const MoreButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  margin: 2rem auto 0;
`

const ApproachSection = styled(Section)`
  text-align: center;
`

const ApproachTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

const ApproachDescription = styled.p`
  max-width: 48rem;
  margin: 0 auto 3rem;
  font-size: 0.875rem;
  color: #6b7280;
`

const Footer = styled.footer`
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 1rem;
  border-top: 1px solid #e5e5e5;
`

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const FooterColumn = styled.div`
  &:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const FooterTitle = styled.h3`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 1rem;
`

const FooterList = styled.ul`
  list-style: none;
`

const FooterItem = styled.li`
  margin-bottom: 0.5rem;
`

const FooterLink = styled(Link)`
  font-size: 0.75rem;
  
  &:hover {
    text-decoration: underline;
  }
`

const FooterButton = styled.button`
  font-size: 0.75rem;
  
  &:hover {
    text-decoration: underline;
  }
`

const LogoContainer = styled.div`
  margin-bottom: 1rem;
`

const LogoText = styled.div`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

const LogoSubtext = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.5rem;
`

export default function Home() {
  // Création des tableaux d'images pour chaque section
  const heroImages = [heroImage1, heroImage2]

  const newProducts = [
    { name: "Embroidered Sportswear Shirt", price: "$99", image: newProduct1, type: "V-Neck T-Shirt" },
    { name: "Basic Slim Fit T-Shirt", price: "$99", image: newProduct2, type: "V-Neck T-Shirt" },
    { name: "Blurred Print T-Shirt", price: "$99", image: newProduct3, type: "V-Neck T-Shirt" },
    { name: "Full Sleeve Zipper", price: "$99", image: newProduct4, type: "V-Neck T-Shirt" },
  ]

  const collections = [
    { name: "Basic Heavy Weight T-Shirt", price: "$199", image: collection1, type: "Cotton T-Shirt" },
    { name: "Soft Wash Straight Fit Jeans", price: "$199", image: collection2, type: "Cotton T-Shirt" },
    { name: "Basic Heavy Weight T-Shirt", price: "$199", image: collection3, type: "Cotton T-Shirt" },
  ]

  const approachImages = [approach1, approach2, approach3, approach4]

  return (
    <PageContainer>
      {/* Hero Section */}
      <Section>
        <HeroGrid>
          <HeroContent>
            <HeroTitle>
              NEW
              <br />
              COLLECTION
            </HeroTitle>
            <HeroSubtitle>
              Summer
              <br />
              2024
            </HeroSubtitle>
            <HeroButton href="/collections">
              Go To Shop
              <ButtonIcon>
                <ArrowRight size={16} />
              </ButtonIcon>
            </HeroButton>
          </HeroContent>

          <ImageGrid>
            {heroImages.map((image, index) => (
              <ImageContainer key={index}>
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Hero image ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={index === 0} // Priorité pour la première image
                />
              </ImageContainer>
            ))}
          </ImageGrid>
        </HeroGrid>
        
        <PaginationControls>
          <PaginationButton>
            <ChevronLeft size={16} />
          </PaginationButton>
          <PaginationButton>
            <ChevronRight size={16} />
          </PaginationButton>
        </PaginationControls>
      </Section>

      {/* New This Week Section */}
      <Section>
        <SectionHeader>
          <SectionTitle>
            NEW
            <br />
            THIS WEEK
            <SectionCount>(50)</SectionCount>
          </SectionTitle>
          <SeeAllLink href="/collections">See All</SeeAllLink>
        </SectionHeader>

        <ProductGrid>
          {newProducts.map((product, i) => (
            <ProductLink href={`/products/${i}`} key={i}>
              <ProductImageContainer>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <AddButton>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4V20M4 12H20" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </AddButton>
              </ProductImageContainer>
              <ProductInfo>
                <ProductType>{product.type}</ProductType>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductInfo>
            </ProductLink>
          ))}
        </ProductGrid>

        <PaginationControls>
          <PaginationButton>1</PaginationButton>
          <PaginationButton>
            <ChevronRight size={16} />
          </PaginationButton>
        </PaginationControls>
      </Section>

      {/* Collections Section */}
      <Section>
        <SectionTitle style={{ marginBottom: "2rem" }}>
          XIV
          <br />
          COLLECTIONS
          <br />
          23-24
        </SectionTitle>

        <TabsContainer>
          <TabButton $active>(ALL)</TabButton>
          <TabButton>Men</TabButton>
          <TabButton>Women</TabButton>
          <TabButton>KID</TabButton>

          <FilterContainer>
            <FilterLabel>Filter(s)</FilterLabel>
            <SortContainer>
              Sort(s)
              <SortOption>Less to more</SortOption>
              <SortOption>More to Less</SortOption>
            </SortContainer>
          </FilterContainer>
        </TabsContainer>

        <CollectionGrid>
          {collections.map((product, i) => (
            <ProductLink href={`/products/${i + 4}`} key={i}>
              <ProductImageContainer>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <AddButton>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4V20M4 12H20" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </AddButton>
              </ProductImageContainer>
              <ProductInfo>
                <ProductType>{product.type}</ProductType>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductInfo>
            </ProductLink>
          ))}
        </CollectionGrid>

        <MoreButton>
          More
          <ChevronRight size={16} style={{ marginLeft: "0.25rem" }} />
        </MoreButton>
      </Section>

      {/* Approach Section */}
      <ApproachSection>
        <ApproachTitle>OUR APPROACH TO FASHION DESIGN</ApproachTitle>
        <ApproachDescription>
          at elegant vogue, we blend creativity with craftsmanship to create fashion that transcends trends and stands
          the test of time each design is meticulously crafted, ensuring the highest quality exquisite finish
        </ApproachDescription>

        <ProductGrid>
          {approachImages.map((image, index) => (
            <ImageContainer key={index}>
              <Image
                src={image || "/placeholder.svg"}
                alt={`Fashion approach image ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </ImageContainer>
          ))}
        </ProductGrid>
      </ApproachSection>

      {/* Footer */}
      <Footer>
        <FooterGrid>
          <FooterColumn>
            <FooterTitle>INFO</FooterTitle>
            <FooterList>
              <FooterItem>
                <FooterLink href="/pricing">PRICING</FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink href="/about">ABOUT</FooterLink>
              </FooterItem>
              <FooterItem>
                <FooterLink href="/contacts">CONTACTS</FooterLink>
              </FooterItem>
            </FooterList>
          </FooterColumn>

          <FooterColumn>
            <LogoContainer>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L19 8V16L12 20L5 16V8L12 4Z" stroke="black" strokeWidth="2" />
              </svg>
            </LogoContainer>
            <LogoText>XIV</LogoText>
            <LogoText>QR</LogoText>
            <LogoSubtext>Near-field communication</LogoSubtext>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>LANGUAGES</FooterTitle>
            <FooterList>
              <FooterItem>
                <FooterButton>ENG</FooterButton>
              </FooterItem>
              <FooterItem>
                <FooterButton>ESP</FooterButton>
              </FooterItem>
              <FooterItem>
                <FooterButton>GER</FooterButton>
              </FooterItem>
            </FooterList>
          </FooterColumn>
        </FooterGrid>
      </Footer>
    </PageContainer>
  )
}

