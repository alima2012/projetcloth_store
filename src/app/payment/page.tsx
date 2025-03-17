"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import styled from "styled-components"
import { ChevronLeft, CreditCard, Check } from "lucide-react"

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

const CheckoutHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
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

const CheckoutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 3fr 2fr;
  }
`

const FormSection = styled.div`
  margin-bottom: 2rem;
`

const SectionTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`

const FormRow = styled.div`
  margin-bottom: 1rem;
`

const FullWidthRow = styled(FormRow)`
  grid-column: 1 / -1;
`

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #000;
  }
`

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #000;
  }
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

const OrderItems = styled.div`
  margin: 1.5rem 0;
  max-height: 200px;
  overflow-y: auto;
`

const OrderItem = styled.div`
  display: flex;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`

const ItemImage = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  margin-right: 1rem;
  background-color: #f5f5f5;
`

const ItemDetails = styled.div`
  flex: 1;
`

const ItemName = styled.p`
  font-weight: 500;
  margin: 0 0 0.25rem 0;
`

const ItemMeta = styled.p`
  font-size: 0.75rem;
  color: #777;
  margin: 0;
`

const ItemPrice = styled.p`
  font-weight: 500;
  margin: 0;
  text-align: right;
`

const PayButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #000;
  color: white;
  border: none;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  margin-top: 1.5rem;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`

const PaymentMethods = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`

const PaymentMethod = styled.div<{ $active?: boolean }>`
  flex: 1;
  border: 1px solid ${(props) => (props.$active ? "#000" : "#ddd")};
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => (props.$active ? "#f9f9f9" : "white")};
  
  &:hover {
    border-color: #bbb;
  }
`

const PaymentIcon = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
`

const PaymentName = styled.div`
  font-size: 0.875rem;
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 4px;
  max-width: 400px;
  width: 100%;
  text-align: center;
`

const ProcessingIcon = styled.div`
  margin: 0 auto 1.5rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SuccessIcon = styled.div`
  margin: 0 auto 1.5rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #4caf50;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

const ModalText = styled.p`
  margin-bottom: 1.5rem;
  color: #666;
`

const ModalButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #000;
  color: white;
  border: none;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
`

export default function CheckoutPage() {
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "France",
    cardNumber: "",
    cardName: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  })

  // Simuler les articles du panier
  const cartItems = [
    {
      id: 1,
      name: "Full Sleeve Zipper",
      description: "Crewneck T-Shirt",
      price: 99,
      size: "L",
      color: "Black",
      quantity: 1,
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 2,
      name: "Basic Slim Fit T-Shirt",
      description: "Cotton T-Shirt",
      price: 90,
      size: "L",
      color: "Black",
      quantity: 1,
      image: "/placeholder.svg?height=120&width=120",
    },
  ]

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 10
  const total = subtotal + shipping

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setProcessing(true)

    // Simuler le traitement du paiement
    setTimeout(() => {
      setProcessing(false)
      setSuccess(true)
    }, 2000)
  }

  const handleContinueShopping = () => {
    router.push("/")
  }

  return (
    <Container>
      
      
     
     

      <CheckoutHeader>
        <BackButton href="/cart">
          <ChevronLeft size={16} />
        </BackButton>
        <PageTitle>CHECKOUT</PageTitle>
      </CheckoutHeader>

      <form onSubmit={handleSubmit}>
        <CheckoutContent>
          <div>
            <FormSection>
              <SectionTitle>Shipping Information</SectionTitle>
              <FormGrid>
                <FormRow>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </FormRow>
                <FormRow>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </FormRow>
                <FullWidthRow>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </FullWidthRow>
                <FullWidthRow>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </FullWidthRow>
                <FormRow>
                  <Label htmlFor="city">City</Label>
                  <Input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </FormRow>
                <FormRow>
                  <Label htmlFor="postalCode">Postal Code</Label>
                  <Input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                  />
                </FormRow>
                <FormRow>
                  <Label htmlFor="country">Country</Label>
                  <Select id="country" name="country" value={formData.country} onChange={handleInputChange} required>
                    <option value="France">Senegal</option>
                    <option value="Germany">Germany</option>
                   
                  </Select>
                </FormRow>
              </FormGrid>
            </FormSection>

            <FormSection>
              <SectionTitle>Payment Method</SectionTitle>
              <PaymentMethods>
                <PaymentMethod $active={paymentMethod === "card"} onClick={() => setPaymentMethod("card")}>
                  <PaymentIcon>
                    <CreditCard size={24} />
                  </PaymentIcon>
                  <PaymentName>Credit Card</PaymentName>
                </PaymentMethod>
                <PaymentMethod $active={paymentMethod === "paypal"} onClick={() => setPaymentMethod("paypal")}>
                  <PaymentIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19.5 8.5C19.5 11.5 17 14 14 14H11L10 19H7L8.5 8.5H14C17 8.5 19.5 5.5 19.5 8.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.5 3.5C16.5 6.5 14 9 11 9H8L7 14H4L5.5 3.5H11C14 3.5 16.5 0.5 16.5 3.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </PaymentIcon>
                  <PaymentName>Wave</PaymentName>
                </PaymentMethod>
                <PaymentMethod $active={paymentMethod === "om"} onClick={() => setPaymentMethod("om")}>
                  <PaymentIcon>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19.5 8.5C19.5 11.5 17 14 14 14H11L10 19H7L8.5 8.5H14C17 8.5 19.5 5.5 19.5 8.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.5 3.5C16.5 6.5 14 9 11 9H8L7 14H4L5.5 3.5H11C14 3.5 16.5 0.5 16.5 3.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </PaymentIcon>
                  <PaymentName>OrangeMoney</PaymentName>
                </PaymentMethod>
              </PaymentMethods>

              {paymentMethod === "card" && (
                <div>
                  <FormRow>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </FormRow>
                  <FormRow>
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      required
                    />
                  </FormRow>
                  <CardGrid>
                    <FormRow>
                      <Label htmlFor="expiryMonth">Expiry Month</Label>
                      <Select
                        id="expiryMonth"
                        name="expiryMonth"
                        value={formData.expiryMonth}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Month</option>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                          <option key={month} value={month.toString().padStart(2, "0")}>
                            {month.toString().padStart(2, "0")}
                          </option>
                        ))}
                      </Select>
                    </FormRow>
                    <FormRow>
                      <Label htmlFor="expiryYear">Expiry Year</Label>
                      <Select
                        id="expiryYear"
                        name="expiryYear"
                        value={formData.expiryYear}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Year</option>
                        {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </Select>
                    </FormRow>
                    <FormRow>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                      />
                    </FormRow>
                  </CardGrid>
                </div>
              )}

              {paymentMethod === "paypal" && (
                <div style={{ marginTop: "1rem" }}>
                  <p>You will be redirected to PayPal to complete your payment.</p>
                </div>
              )}
            </FormSection>
          </div>

          <div>
            <OrderSummary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>

              <OrderItems>
                {cartItems.map((item) => (
                  <OrderItem key={item.id}>
                    <ItemImage>
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </ItemImage>
                    <ItemDetails>
                      <ItemName>{item.name}</ItemName>
                      <ItemMeta>
                        Size: {item.size} | Qty: {item.quantity}
                      </ItemMeta>
                    </ItemDetails>
                    <ItemPrice>${item.price}</ItemPrice>
                  </OrderItem>
                ))}
              </OrderItems>

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

              <PayButton type="submit">{paymentMethod === "card" ? "Pay Now" : "Continue to PayPal"}</PayButton>
            </OrderSummary>
          </div>
        </CheckoutContent>
      </form>

      {processing && (
        <Modal>
          <ModalContent>
            <ProcessingIcon>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M12 6V12L16 14" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ProcessingIcon>
            <ModalTitle>Processing Payment</ModalTitle>
            <ModalText>Please wait while we process your payment...</ModalText>
          </ModalContent>
        </Modal>
      )}

      {success && (
        <Modal>
          <ModalContent>
            <SuccessIcon>
              <Check size={30} />
            </SuccessIcon>
            <ModalTitle>Payment Reussi!</ModalTitle>
            {/* <ModalText>Thank you for your purchase. Your order has been confirmed and will be shipped soon.</ModalText> */}
            <ModalButton onClick={handleContinueShopping}>Continue Shopping</ModalButton>
          </ModalContent>
        </Modal>
      )}
    </Container>
  )
}

