"use client"

import { useState } from "react"
import Image from "next/image"
import styled from "styled-components"
import { Heart } from "lucide-react"

// Importation directe des images
// Ces imports fonctionnent comme des variables qui contiennent les chemins optimisés
import img1 from "@/assets/img1.jpeg"
import img2 from "@/assets/img16.jpeg"
import img3 from "@/assets/img17.jpeg"
import img4 from "@/assets/img18.jpeg"
import img5 from "@/assets/img19.jpeg"
import Link from "next/link"


// Styled components
const Container = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 2rem;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const ImageSection = styled.div`
  flex: 1.5;
  display: flex;
  gap: 1rem;
`

const ThumbnailColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80px;
`

const ThumbnailButton = styled.button<{ $active?: boolean }>`
  width: 80px;
  height: 100px;
  padding: 0;
  border: ${(props) => (props.$active ? "2px solid black" : "1px solid #e5e5e5")};
  overflow: hidden;
  
  &:hover {
    border-color: #999;
  }
`

const MainImageContainer = styled.div`
  flex: 1;
  position: relative;
  min-height: 500px;
`

const MainImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const ProductInfo = styled.div`
  flex: 1;
  max-width: 400px;
`

const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 1rem;
`

const ProductTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
`

const FavoriteButton = styled.button`
  padding: 0.5rem;
  border-radius: 50%;
  
  &:hover {
    background-color: #f3f4f6;
  }
`

const Price = styled.div`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`

const TaxInfo = styled.div`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 2rem;
`

const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 2rem;
`

const Section = styled.div`
  margin-bottom: 2rem;
`

const SectionTitle = styled.h2`
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
`

const ColorGrid = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

const ColorButton = styled.button<{ $color: string; $active?: boolean }>`
  width: 2rem;
  height: 2rem;
  border-radius: 0;
  background-color: ${(props) => props.$color};
  border: ${(props) => (props.$active ? "2px solid black" : "1px solid #e5e5e5")};
  
  &:hover {
    border-color: #999;
  }
`

const SizeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5rem;
`

const SizeButton = styled.button<{ $active?: boolean }>`
  height: 2.5rem;
  border: ${(props) => (props.$active ? "2px solid black" : "1px solid #e5e5e5")};
  font-size: 0.875rem;
  background-color: ${(props) => (props.$active ? "black" : "transparent")};
  color: ${(props) => (props.$active ? "white" : "black")};
  
  &:hover {
    border-color: #999;
  }

  &:disabled {
    color: #999;
    border-color: #e5e5e5;
    cursor: not-allowed;
  }
`

const SizeHelp = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`

const SizeLink = styled.button`
  font-size: 0.75rem;
  color: #666;
  text-decoration: underline;
  
  &:hover {
    color: #000;
  }
`

const AddButton = styled.button`
  width: 100%;
  height: 3rem;
  background-color: #e5e5e5;
  font-weight: 500;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #d4d4d4;
  }

  &:disabled {
    background-color: #f3f4f6;
    color: #999;
    cursor: not-allowed;
  }
`

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(2) // Black selected by default
  const [selectedSize, setSelectedSize] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState(0)

  // Création d'un tableau avec les images importées
  const productImages = [img1, img2, img3, img4, img5]

  const product = {
    name: "ABSTRACT PRINT SHIRT",
    price: "$99",
    description: "Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.",
    colors: [
      { name: "Light Gray", value: "#D3D3D3" },
      { name: "Dark Gray", value: "#808080" },
      { name: "Black", value: "#000000" },
      { name: "Mint", value: "#98D8D8" },
      { name: "White", value: "#FFFFFF" },
      { name: "Light Blue", value: "#B8C7FF" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2X"],
  }

  return (
    <Container>
      <ImageSection>
        <ThumbnailColumn>
          {productImages.map((image, index) => (
            <ThumbnailButton key={index} $active={selectedImage === index} onClick={() => setSelectedImage(index)}>
              <Image
                src={image || "/placeholder.svg"}
                alt={`${product.name} view ${index + 1}`}
                width={80}
                height={100}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </ThumbnailButton>
          ))}
        </ThumbnailColumn>

        <MainImageContainer>
          <MainImage>
            <Image
              src={productImages[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </MainImage>
        </MainImageContainer>
      </ImageSection>

      <ProductInfo>
        <ProductHeader>
          <div>
            <ProductTitle>{product.name}</ProductTitle>
            <Price>{product.price}</Price>
            <TaxInfo>MRP incl. of all taxes</TaxInfo>
          </div>
          <FavoriteButton>
            <Heart size={20} />
          </FavoriteButton>
        </ProductHeader>

        <Description>{product.description}</Description>

        <Section>
          <SectionTitle>Color</SectionTitle>
          <ColorGrid>
            {product.colors.map((color, index) => (
              <ColorButton
                key={index}
                $color={color.value}
                $active={selectedColor === index}
                onClick={() => setSelectedColor(index)}
                aria-label={color.name}
              />
            ))}
          </ColorGrid>
        </Section>

        <Section>
          <SectionTitle>Size</SectionTitle>
          <SizeGrid>
            {product.sizes.map((size, index) => (
              <SizeButton key={index} $active={selectedSize === index} onClick={() => setSelectedSize(index)}>
                {size}
              </SizeButton>
            ))}
          </SizeGrid>
          <SizeHelp>
            <SizeLink>FIND YOUR SIZE</SizeLink>
            <span>|</span>
            <SizeLink>MEASUREMENT GUIDE</SizeLink>
          </SizeHelp>
        </Section>

        <AddButton disabled={selectedSize === null} ><Link href="/checkout">ADD</Link></AddButton>
      </ProductInfo>
    </Container>
  )
}

