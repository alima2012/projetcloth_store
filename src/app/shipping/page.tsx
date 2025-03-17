"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, RefreshCw, Heart, ChevronLeft, ChevronRight } from 'lucide-react'
import styled from "styled-components"

// Importez vos images en haut du fichier
import tshirtImage1 from '@/assets/img1.jpeg'
import tshirtImage2 from '@/assets/img10.jpeg'
import productImages from "../cart/product-images"

// Exemple d'utilisation du fichier product-images.ts
// import productImages from './product-images'

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f2f2f2;
  min-height: 100vh;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  margin-bottom: 2rem;
`

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

const NavLink = styled(Link)`
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  color: #000;
  
  &:hover {
    opacity: 0.8;
  }
`

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #000;
  color: white;
  border: none;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CartHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
`

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  font-size: 0.875rem;
`

const PageTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 auto;
`

const TabLink = styled.a`
  font-size: 0.875rem;
  color: #777;
  text-decoration: none;
  text-transform: uppercase;
  
  &:hover {
    color: #000;
  }
`

const CartContent = styled.div`
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
  gap: 1rem;
`

interface CartItemProps {
    $highlighted?: boolean
}

const CartItem = styled.div<CartItemProps>`
  display: flex;
  border: ${(props) => (props.$highlighted ? "1px solid #0066cc" : "none")};
  background-color: white;
  position: relative;
`

const ItemImage = styled.div`
  width: 120px;
  height: 150px;
  position: relative;
`

const ItemDetails = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const ItemSize = styled.span`
  font-weight: 500;
`

const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
`

const ColorSwatch = styled.div`
  width: 24px;
  height: 24px;
  background-color: #000;
  margin-top: 0.5rem;
`

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`

const QuantityButton = styled.button`
  width: 24px;
  height: 24px;
  border: 1px solid #ddd;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
    background-color: #f5f5f5;
  }
`

const QuantityValue = styled.span`
  width: 24px;
  text-align: center;
`

const ItemActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`

const ActionButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
    background-color: #f5f5f5;
  }
`

const ItemInfo = styled.div`
  padding: 1rem;
`

const ItemName = styled.h3`
  font-weight: 500;
  margin: 0 0 0.25rem 0;
`

const ItemDescription = styled.p`
  font-size: 0.875rem;
  color: #777;
  margin: 0 0 0.5rem 0;
`

const ItemPrice = styled.p`
  font-weight: 500;
  margin: 0;
`

const OrderSummary = styled.div`
  background-color: white;
  padding: 1.5rem;
`

const SummaryTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 0 1.5rem 0;
`

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`

const TotalRow = styled(SummaryRow)`
  font-weight: 600;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #ddd;
`

const TaxNote = styled.div`
  font-size: 0.75rem;
  color: #777;
  text-align: right;
`

const TermsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin: 1.5rem 0;
`

const Checkbox = styled.input`
  margin-top: 0.25rem;
`

const TermsLabel = styled.label`
  font-size: 0.875rem;
`

const ContinueButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #e5e5e5;
  border: none;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: #d5d5d5;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
`

export default function CartPage() {
    // Dans votre état initial
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Full Sleeve Zipper",
            description: "Crewneck T-Shirt",
            price: 99,
            size: "L",
            color: "Black",
            quantity: 1,
            imageId: 'img1', // Référence à l'ID de l'image
            highlighted: true,
        },
        {
            id: 2,
            name: "Basic Slim Fit T-Shirt",
            description: "Cotton T-Shirt",
            price: 90,
            size: "L",
            color: "Black",
            quantity: 1,
            imageId: 'img10', // Référence à l'ID de l'image
            highlighted: false,
        },
    ])

    const [termsAccepted, setTermsAccepted] = useState(false)

    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    const shipping = 10
    const total = subtotal + shipping

    const updateQuantity = (id: number, newQuantity: number) => {
        if (newQuantity < 1) return

        setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }

    const removeItem = (id: number) => {
        setCartItems(cartItems.filter((item) => item.id !== id))
    }

    return (
        <Container>
            <Header>
                <NavContainer>
                    <NavLink href="/checkout">Informations</NavLink>
                    <NavLink href="/cart">Shipping</NavLink>
                    <NavLink href="/payment">Paymant</NavLink>
                </NavContainer>
            </Header>

            <CartHeader>
                <BackButton href="/products">
                    <ChevronLeft size={16} />
                </BackButton>
                <PageTitle>SHOPPING BAG</PageTitle>
                <TabLink href="/favorites">FAVOURITES</TabLink>
            </CartHeader>

            <CartContent>
                <CartItems>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} $highlighted={item.highlighted}>
                            <ItemImage>
                                <Image
                                    src={productImages[item.imageId] || '/placeholder.svg'}
                                    alt={item.name}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </ItemImage>

                            <ItemDetails>
                                <ItemHeader>
                                    <ItemSize>{item.size}</ItemSize>
                                    <RemoveButton onClick={() => removeItem(item.id)}>
                                        <X size={16} />
                                    </RemoveButton>
                                </ItemHeader>

                                <ColorSwatch />

                                <QuantityControl>
                                    <QuantityButton onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                        <ChevronLeft size={16} />
                                    </QuantityButton>
                                    <QuantityValue>{item.quantity}</QuantityValue>
                                    <QuantityButton onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                        <ChevronRight size={16} />
                                    </QuantityButton>
                                </QuantityControl>

                                <ItemActions>
                                    <ActionButton>
                                        <RefreshCw size={14} />
                                    </ActionButton>
                                    <ActionButton>
                                        <Heart size={14} />
                                    </ActionButton>
                                </ItemActions>
                            </ItemDetails>

                            <ItemInfo>
                                <ItemName>{item.name}</ItemName>
                                <ItemDescription>{item.description}</ItemDescription>
                                <ItemPrice>${item.price}</ItemPrice>
                            </ItemInfo>

                            {/* {item.highlighted && (
                                <CloseButton>
                                    <X size={16} />
                                </CloseButton>
                            )} */}
                        </CartItem>
                    ))}
                </CartItems>

                <OrderSummary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>

                    <SummaryRow>
                        <span>Subtotal</span>
                        <span>${subtotal}</span>
                    </SummaryRow>

                    <SummaryRow>
                        <span>Shipping</span>
                        <span>${shipping}</span>
                    </SummaryRow>

                    <TotalRow>
                        <span>TOTAL</span>
                        <div>
                            <span>${total}</span>
                            <TaxNote>(TAX INCL.)</TaxNote>
                        </div>
                    </TotalRow>

                    <TermsContainer>
                        <Checkbox
                            type="checkbox"
                            id="terms"
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                        />
                        <TermsLabel htmlFor="terms">I agree to the Terms and Conditions</TermsLabel>
                    </TermsContainer>

                    <ContinueButton disabled={!termsAccepted}>
                       <Link href="/payment">CONTINUE</Link> 
                    </ContinueButton>
                </OrderSummary>
            </CartContent>
        </Container>
    )
}

