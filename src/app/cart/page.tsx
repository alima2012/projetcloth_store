"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Heart, RefreshCw, X } from "lucide-react"
import styled from "styled-components"

// Importation directe des images des produits du panier
import cartItem1 from "@/assets/img12.jpeg"
import cartItem2 from "@/assets/img15.jpeg"

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1rem;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`

const BackButton = styled(Link)`
  margin-right: 1rem;
`

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
`

const FavoritesLink = styled(Link)`
  margin-left: 1rem;
  font-size: 0.875rem;
  color: #6b7280;
`

const CartGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const CartItem = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 1.5rem;
`

const ItemImage = styled.div`
  width: 33.333333%;
  aspect-ratio: 1;
  background-color: white;
  position: relative;
`

const ItemDetails = styled.div`
  width: 66.666667%;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
`

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`

const ItemSize = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
`

const RemoveButton = styled.button`
  padding: 0;
`

const ColorSwatch = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: black;
  margin-bottom: 1rem;
`

const QuantityControls = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

const QuantityButton = styled.button`
  width: 2rem;
  height: 2rem;
  border: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
`

const QuantityDisplay = styled.div`
  width: 2rem;
  height: 2rem;
  border: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ItemActions = styled.div`
  display: flex;
  gap: 1rem;
`

const ActionButton = styled.button`
  padding: 0.25rem;
`

const ItemInfo = styled.div`
  text-align: right;
`

const ItemType = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
`

const ItemName = styled.p`
  font-size: 0.875rem;
  margin-bottom: 1rem;
`

const ItemPrice = styled.p`
  font-size: 0.875rem;
`

const OrderSummary = styled.div`
  background-color: white;
  padding: 1.5rem;
`

const SummaryTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const SummaryLabel = styled.span`
  font-size: 0.875rem;
`

const SummaryValue = styled.span`
  font-size: 0.875rem;
`

const ShippingValue = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
`

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e5e5e5;
  padding-top: 1rem;
  margin-bottom: 1.5rem;
`

const TotalLabel = styled.span`
  font-size: 1rem;
  font-weight: 500;
`

const TotalValue = styled.div`
  text-align: right;
`

const TotalAmount = styled.span`
  font-size: 1rem;
  font-weight: 500;
`

const TaxInfo = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
`

const TermsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
`

const TermsText = styled.label`
  font-size: 0.75rem;
  color: #4b5563;
`

const ContinueButton = styled.button`
  width: 100%;
  height: 3rem;
  background-color: #e5e5e5;
  color: black;
  font-weight: 500;

  &:hover {
    background-color: #d4d4d4;
  }
`

export default function CartPage() {
  // Données du panier avec les images importées
  const cartItems = [
    {
      id: 1,
      name: "Basic Heavy T-Shirt",
      price: "$99",
      color: "Black",
      size: "L",
      quantity: 1,
      image: cartItem1,
      type: "Cotton T Shirt",
    },
    {
      id: 2,
      name: "Basic Fit T-Shirt",
      price: "$99",
      color: "Black",
      size: "L",
      quantity: 1,
      image: cartItem2,
      type: "Cotton T Shirt",
    },
  ]

  const subtotal = "$180.00"
  const shipping = "$10"
  const total = "$190"

  return (
    <Container>
      <Header>
        <BackButton href="/">
          <ChevronLeft size={24} />
        </BackButton>
        <Title>SHOPPING BAG</Title>
        <FavoritesLink href="/favorites">FAVOURITES</FavoritesLink>
      </Header>

      <CartGrid>
        <CartItems>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <ItemImage>
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill style={{ objectFit: "cover" }} />
              </ItemImage>

              <ItemDetails>
                <ItemHeader>
                  <ItemSize>{item.size}</ItemSize>
                  <RemoveButton>
                    <X size={16} />
                  </RemoveButton>
                </ItemHeader>

                <ColorSwatch />

                <QuantityControls>
                  <QuantityButton>
                    <ChevronLeft size={16} />
                  </QuantityButton>
                  <QuantityDisplay>{item.quantity}</QuantityDisplay>
                  <QuantityButton>
                    <ChevronRight size={16} />
                  </QuantityButton>
                </QuantityControls>

                <ItemActions>
                  <ActionButton>
                    <RefreshCw size={16} />
                  </ActionButton>
                  <ActionButton>
                    <Heart size={16} />
                  </ActionButton>
                </ItemActions>

                <ItemInfo>
                  <ItemType>{item.type}</ItemType>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>{item.price}</ItemPrice>
                </ItemInfo>
              </ItemDetails>
            </CartItem>
          ))}
        </CartItems>

        <OrderSummary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>

          <SummaryRow>
            <SummaryLabel>Subtotal</SummaryLabel>
            <SummaryValue>{subtotal}</SummaryValue>
          </SummaryRow>
          <SummaryRow>
            <SummaryLabel>Shipping</SummaryLabel>
            <ShippingValue>{shipping}</ShippingValue>
          </SummaryRow>

          <TotalRow>
            <TotalLabel>TOTAL</TotalLabel>
            <TotalValue>
              <TotalAmount>{total}</TotalAmount>
              <TaxInfo>(TAX INCL.)</TaxInfo>
            </TotalValue>
          </TotalRow>

          <TermsContainer>
            <Checkbox type="checkbox" id="terms" />
            <TermsText htmlFor="terms">I agree to the Terms and Conditions</TermsText>
          </TermsContainer>

          <ContinueButton>CONTINUE</ContinueButton>
        </OrderSummary>
      </CartGrid>
    </Container>
  )
}

