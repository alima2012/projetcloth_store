"use client"

import Image from "next/image"
import { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import { Search, Heart, ShoppingBag, User, Menu, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import StyledComponentsRegistry from "@/libs/registry"
import { theme } from "@/libs/theme"
import sliderImage1 from "./assets/img1.jpeg"
import sliderImage2 from "./assets/img2.jpeg"
import sliderImage3 from "./assets/img3.jpeg"
import sliderImage4 from "./assets/img4.jpeg"
import sliderImage5 from "./assets/img5.jpeg"
import sliderImage6 from "./assets/img6.jpeg"
import sliderImage7 from "./assets/img7.jpeg"
import sliderImage8 from "./assets/img8.jpeg"
import sliderImage9 from "./assets/img9.jpeg"
import sliderImage10 from "./assets/img10.jpeg"
import sliderImage11 from "./assets/img11.jpeg"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : prev - 1))
  }

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <Container>
          <Header>
            <MenuButton onClick={toggleMenu}>
              <Menu size={24} />
            </MenuButton>
            <Navigation isOpen={isMenuOpen}>
              <NavLink href="#">Home</NavLink>
              <NavLink href="#">Collections</NavLink>
              <NavLink href="#">New</NavLink>
            </Navigation>
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
            <Sidebar>
              <CategoryList>
                <CategoryItem>MEN</CategoryItem>
                <CategoryItem>WOMEN</CategoryItem>
                <CategoryItem>KIDS</CategoryItem>
              </CategoryList>
              <SearchContainer>
                <SearchIcon>
                  <Search size={20} />
                </SearchIcon>
                <SearchInput placeholder="Search" />
              </SearchContainer>
            </Sidebar>

            <Content>
              <CollectionHeading>
                <NewText>NEW</NewText>
                <CollectionText>COLLECTION</CollectionText>
                <SeasonText>
                  Summer
                  <br />
                  2024
                </SeasonText>
              </CollectionHeading>

              <SliderContainer>
                <Slider currentSlide={currentSlide}>
                  <Slide>
                    <Image
                      src={sliderImage1 || "/placeholder.svg"}
                      alt="Model in white outfit with tan shoes"
                      width={450}
                      height={600}
                      style={{ objectFit: "cover" }}
                    />
                  </Slide>
                  <Slide>
                    <Image
                      src={sliderImage2 || "/placeholder.svg"}
                      alt="Model in black t-shirt with embroidery"
                      width={450}
                      height={600}
                      style={{ objectFit: "cover" }}
                    />
                  </Slide>
                </Slider>
                <SliderControls>
                  <ShopButton>
                    <span>Go To Shop</span>
                    <ArrowRight size={20} />
                  </ShopButton>
                  <SliderButtons>
                    <SliderButton onClick={prevSlide}>
                      <ChevronLeft size={20} />
                    </SliderButton>
                    <SliderButton onClick={nextSlide}>
                      <ChevronRight size={20} />
                    </SliderButton>
                  </SliderButtons>
                </SliderControls>
              </SliderContainer>

              {/* New This Week Section */}
              <div>
                <SectionHeader>
                  <SectionTitle>
                    NEW
                    <div>
                      THIS WEEK <ProductCount>(50)</ProductCount>
                    </div>
                  </SectionTitle>
                  <SeeAllLink href="#">See All</SeeAllLink>
                </SectionHeader>

                <ProductGrid>
                  <ProductCard>
                    <ProductImage>
                      <Image
                        src={sliderImage3 || "/placeholder.svg"}
                        alt="Embroidered Sportswear Shirt"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <AddToCartButton>+</AddToCartButton>
                    </ProductImage>
                    <ProductInfo>
                      <ProductBrand>V-Neck T-Shirt</ProductBrand>
                      <ProductName>Embroidered Sportswear Shirt</ProductName>
                      <ProductPrice>$99</ProductPrice>
                    </ProductInfo>
                  </ProductCard>

                  <ProductCard>
                    <ProductImage>
                      <Image
                        src={sliderImage4 || "/placeholder.svg"}
                        alt="Basic Slim Fit T-Shirt"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <AddToCartButton>+</AddToCartButton>
                    </ProductImage>
                    <ProductInfo>
                      <ProductBrand>Cotton T-Shirt</ProductBrand>
                      <ProductName>Basic Slim Fit T-Shirt</ProductName>
                      <ProductPrice>$99</ProductPrice>
                    </ProductInfo>
                  </ProductCard>

                  <ProductCard>
                    <ProductImage>
                      <Image
                        src={sliderImage5 || "/placeholder.svg"}
                        alt="Blurred Print T-Shirt"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <AddToCartButton>+</AddToCartButton>
                    </ProductImage>
                    <ProductInfo>
                      <ProductBrand>Henley T-Shirt</ProductBrand>
                      <ProductName>Blurred Print T-Shirt</ProductName>
                      <ProductPrice>$99</ProductPrice>
                    </ProductInfo>
                  </ProductCard>

                  <ProductCard>
                    <ProductImage>
                      <Image
                        src={sliderImage6 || "/placeholder.svg"}
                        alt="Full Sleeve Zipper"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <AddToCartButton>+</AddToCartButton>
                    </ProductImage>
                    <ProductInfo>
                      <ProductBrand>Crewneck T-Shirt</ProductBrand>
                      <ProductName>Full Sleeve Zipper</ProductName>
                      <ProductPrice>$99</ProductPrice>
                    </ProductInfo>
                  </ProductCard>
                </ProductGrid>

                <PaginationControls>
                  <PaginationButton>1</PaginationButton>
                  <PaginationButton>
                    <ChevronRight size={16} />
                  </PaginationButton>
                </PaginationControls>
              </div>

              {/* XIV Collections Section */}
              <CollectionsSection>
                <CollectionsTitleSection>
                  <CollectionsTitle>XIV</CollectionsTitle>
                  <CollectionsTitle>COLLECTIONS</CollectionsTitle>
                  <CollectionsYear>23-24</CollectionsYear>
                </CollectionsTitleSection>

                <CategoryTabs>
                  <CategoryTab active>(ALL)</CategoryTab>
                  <CategoryTab>Men</CategoryTab>
                  <CategoryTab>Women</CategoryTab>
                  <CategoryTab>Kid</CategoryTab>
                </CategoryTabs>

                <FilterSortSection>
                  <FilterButton>Filter(s)</FilterButton>
                  <SortButton>
                    Sort(s)
                    <SortOptions>
                      <SortOption>Less to more</SortOption>
                      <SortOption>More to Less</SortOption>
                    </SortOptions>
                  </SortButton>
                </FilterSortSection>

                <ProductGrid>
                  <ProductCard>
                    <ProductImage>
                      <Image
                        src={sliderImage7 || "/placeholder.svg"}
                        alt="Basic Heavy Weight T-Shirt"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <AddToCartButton>+</AddToCartButton>
                    </ProductImage>
                    <ProductInfo>
                      <ProductBrand>Cotton T-Shirt</ProductBrand>
                      <ProductName>Basic Heavy Weight T-Shirt</ProductName>
                      <ProductPrice>$199</ProductPrice>
                    </ProductInfo>
                  </ProductCard>

                  <ProductCard>
                    <ProductImage>
                      <Image
                        src={sliderImage2 || "/placeholder.svg"}
                        alt="Soft Wash Straight Fit Jeans"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <AddToCartButton>+</AddToCartButton>
                    </ProductImage>
                    <ProductInfo>
                      <ProductBrand>Cotton Jeans</ProductBrand>
                      <ProductName>Soft Wash Straight Fit Jeans</ProductName>
                      <ProductPrice>$199</ProductPrice>
                    </ProductInfo>
                  </ProductCard>

                  <ProductCard>
                    <ProductImage>
                      <Image
                        src={sliderImage8 || "/placeholder.svg"}
                        alt="Basic Heavy Weight T-Shirt"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <AddToCartButton>+</AddToCartButton>
                    </ProductImage>
                    <ProductInfo>
                      <ProductBrand>Cotton T-Shirt</ProductBrand>
                      <ProductName>Basic Heavy Weight T-Shirt</ProductName>
                      <ProductPrice>$199</ProductPrice>
                    </ProductInfo>
                  </ProductCard>
                </ProductGrid>

                <LoadMoreButton>
                  More
                  <ChevronRight size={16} />
                </LoadMoreButton>
              </CollectionsSection>


                {/* Our Approach Section */}
                <ApproachSection>
                <ApproachHeader>
                  <ApproachTitle>OUR APPROACH TO FASHION DESIGN</ApproachTitle>
                  <ApproachText>
                    at elegant vogue , we blend creativity with craftsmanship to create fashion that transcends trends
                    and stands the test of time each design is meticulously crafted, ensuring the highest quality
                    exquisite finish
                  </ApproachText>
                </ApproachHeader>

                <ImageGallery>
                  <GalleryImageWrapper className="image1">
                    <Image
                      src={sliderImage9 || "/placeholder.svg"}
                      alt="Person in grey outfit"
                      width={400}
                      height={500}
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                  </GalleryImageWrapper>
                  <GalleryImageWrapper className="image2">
                    <Image
                      src={sliderImage10 || "/placeholder.svg"}
                      alt="Person in brown coat"
                      width={400}
                      height={600}
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                  </GalleryImageWrapper>
                  <GalleryImageWrapper className="image3">
                    <Image
                      src={sliderImage2 || "/placeholder.svg"}
                      alt="Person in white outfit"
                      width={400}
                      height={400}
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                  </GalleryImageWrapper>
                  <GalleryImageWrapper className="image4">
                    <Image
                      src={sliderImage11 || "/placeholder.svg"}
                      alt="White fabric detail"
                      width={400}
                      height={300}
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                  </GalleryImageWrapper>
                </ImageGallery>

                <BrandFooter>
                  <FooterLeft>
                    <FooterLinks>
                      <FooterLink href="#">INFO</FooterLink>
                      <FooterLink href="#">PRICING</FooterLink>
                      <FooterLink href="#">ABOUT</FooterLink>
                      <FooterLink href="#">CONTACTS</FooterLink>
                    </FooterLinks>
                    <LanguageSelector>
                      <LanguageOption>ENG</LanguageOption>
                      <LanguageOption>ESP</LanguageOption>
                      <LanguageOption>SAR</LanguageOption>
                    </LanguageSelector>
                  </FooterLeft>
                  <FooterLogo>
                    <LogoText>XIV</LogoText>
                    <LogoText>QR</LogoText>
                    <LogoSubtext>Near-field communication</LogoSubtext>
                  </FooterLogo>
                </BrandFooter>
              </ApproachSection>
            </Content>
          </Main>
        </Container>
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}

// Styled Components
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f3;
  font-family: 'Arial', sans-serif;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`

const Navigation = styled.nav<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    height: 100vh;
    background-color: white;
    flex-direction: column;
    padding: 2rem;
    transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s ease;
    z-index: 1000;
  }
`

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`

const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const IconButton = styled.button`
  background-color: #333;
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
  display: flex;
  padding: 2rem;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`

const Sidebar = styled.aside`
  width: 200px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
`

const CategoryItem = styled.li`
  margin-bottom: 1rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`

const SearchIcon = styled.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
`

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 2.5rem;
  border: none;
  background-color: #e6e6e6;
  border-radius: 4px;
  
  &::placeholder {
    color: #999;
  }
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    gap: 1rem;
  }
`

const CollectionHeading = styled.div`
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`

const NewText = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const CollectionText = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const SeasonText = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0 0 0;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 4rem;
`

const Slider = styled.div<{ currentSlide: number }>`
  display: flex;
  transform: translateX(${(props) => -props.currentSlide * 100}%);
  transition: transform 0.5s ease;
`

const Slide = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  img {
    border-radius: 4px;
    background-color: white;
  }
`

const SliderControls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

const ShopButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #e6e6e6;
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    background-color: #d9d9d9;
  }
`

const SliderButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`

const SliderButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  background: none;
  cursor: pointer;
  
  &:hover {
    background-color: #f0f0f0;
  }
`

// Add these styled-components to the existing styled components section

const ApproachSection = styled.section`
  padding: 4rem 0;
  margin: 2rem 0;
  background-color: white;
`

const ApproachHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  padding: 0 1rem;
`

const ApproachTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  letter-spacing: 0.05em;
`

const ApproachText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
  padding: 0 1rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .image1 {
    grid-column: 1 / span 4;
    grid-row: 1;
    
    @media (max-width: 768px) {
      grid-column: 1;
    }
  }
  
  .image2 {
    grid-column: 5 / span 3;
    grid-row: 1;
    margin-top: 3rem;
    
    @media (max-width: 768px) {
      grid-column: 1;
      margin-top: 0;
    }
  }
  
  .image3 {
    grid-column: 8 / span 3;
    grid-row: 1;
    margin-top: -2rem;
    
    @media (max-width: 768px) {
      grid-column: 1;
      margin-top: 0;
    }
  }
  
  .image4 {
    grid-column: 11 / span 2;
    grid-row: 1;
    margin-top: 4rem;
    
    @media (max-width: 768px) {
      grid-column: 1;
      margin-top: 0;
    }
  }
`

const GalleryImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
  
  img {
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.02);
  }
`

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const BrandFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
  border-top: 1px solid #eee;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    text-align: center;
  }
`

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const FooterLink = styled.a`
  color: #666;
  text-decoration: none;
  font-size: 0.875rem;
  
  &:hover {
    color: #000;
  }
`

const LanguageSelector = styled.div`
  display: flex;
  gap: 1rem;
`

const LanguageOption = styled.button`
  background: none;
  border: none;
  color: #666;
  font-size: 0.875rem;
  cursor: pointer;
  padding: 0;
  
  &:hover {
    color: #000;
  }
`

const FooterLogo = styled.div`
  text-align: center;
`

const LogoText = styled.div`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
`

const LogoSubtext = styled.div`
  font-size: 0.75rem;
  color: #666;
  margin-top: 0.5rem;
`

// New This Week Section
const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  line-height: 1.2;
`

const SeeAllLink = styled.a`
  font-size: 0.875rem;
  color: #666;
  
  &:hover {
    text-decoration: underline;
  }
`

const ProductCount = styled.span`
  font-size: 0.875rem;
  color: #666;
  font-weight: normal;
  margin-left: 0.25rem;
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`

const ProductImage = styled.div`
  position: relative;
  aspect-ratio: 1;
  background-color: #f9f9f9;
`

const AddToCartButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;
`

const ProductInfo = styled.div`
  padding: 0.75rem 0;
`

const ProductBrand = styled.div`
  font-size: 0.75rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

const ProductName = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0.25rem 0;
`

const ProductPrice = styled.div`
  font-weight: 600;
`

const PaginationControls = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  gap: 0.5rem;
`

const PaginationButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  background: none;
  cursor: pointer;
  
  &:hover {
    background-color: #f0f0f0;
  }
`

// Collections Section
const CollectionsSection = styled.div`
  margin: 4rem 0;
`

const CollectionsTitleSection = styled.div`
  margin-bottom: 2rem;
`

const CollectionsTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.2;
  margin: 0;
`

const CollectionsYear = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.2;
  margin: 0;
`

const CategoryTabs = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
`

const CategoryTab = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  color: ${(props) => (props.active ? "#000" : "#666")};
  font-weight: ${(props) => (props.active ? "600" : "400")};
  padding: 0.5rem 0;
  
  &:hover {
    color: #000;
  }
`

const FilterSortSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`

const FilterButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-right: 1rem;
`

const SortButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

const SortOptions = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
`

const SortOption = styled.span`
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`

const LoadMoreButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  
  &:hover {
    text-decoration: underline;
  }
`

