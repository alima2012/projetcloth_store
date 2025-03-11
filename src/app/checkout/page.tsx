"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import styled from "styled-components"

// Importation directe des images des produits du checkout
import checkoutItem1 from "@/assets/img12.jpeg"
import checkoutItem2 from "@/assets/img15.jpeg"

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

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 2rem;
`

const Tab = styled.button<{ $active?: boolean }>`
  padding-bottom: 1rem;
  margin-right: 2rem;
  font-weight: ${(props) => (props.$active ? "500" : "400")};
  color: ${(props) => (props.$active ? "black" : "#9ca3af")};
  border-bottom: ${(props) => (props.$active ? "2px solid black" : "none")};
`

const CheckoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`

const CheckoutForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const SectionTitle = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
`

const Input = styled.input`
  height: 3rem;
  padding: 0 1rem;
  background-color: white;
  border: 1px solid #e5e5e5;
  width: 100%;

  &::placeholder {
    color: #9ca3af;
  }
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

const FormRow = styled.div`
  grid-column: span 2;
`

const Select = styled.select`
  height: 3rem;
  padding: 0 1rem;
  background-color: white;
  border: 1px solid #e5e5e5;
  width: 100%;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;
`

const ContinueButton = styled.button`
  height: 3rem;
  background-color: #e5e5e5;
  color: black;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #d4d4d4;
  }
`

const ButtonIcon = styled.span`
  margin-left: 0.5rem;
`

const OrderSummary = styled.div`
  background-color: white;
  padding: 1.5rem;
`

const SummaryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`

const SummaryTitle = styled.h2`
  font-size: 1rem;
  font-weight: 500;
`

const ItemCount = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
`

const OrderItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`

const OrderItem = styled.div`
  display: flex;
`

const ItemImage = styled.div`
  width: 25%;
  aspect-ratio: 1;
  background-color: white;
  border: 1px solid #e5e5e5;
  position: relative;
`

const ItemDetails = styled.div`
  width: 75%;
  padding-left: 1rem;
`

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
`

const ItemName = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
`

const ChangeButton = styled.button`
  font-size: 0.875rem;
  color: #1a1a1a;

  &:hover {
    text-decoration: underline;
  }
`

const ItemVariant = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
`

const ItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
`

const ItemQuantity = styled.span`
  font-size: 0.875rem;
  color: #2563eb;
`

const ItemPrice = styled.span`
  font-size: 0.875rem;
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
  font-size: 0.75rem;
  color: #6b7280;
  text-align: right;
`

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e5e5e5;
  padding-top: 1rem;
`

const TotalLabel = styled.span`
  font-size: 1rem;
  font-weight: 500;
`

const TotalValue = styled.span`
  font-size: 1rem;
  font-weight: 500;
`

export default function CheckoutPage() {
  // Données des produits avec les images importées
  const orderItems = [
    {
      id: 1,
      name: "Basic Heavy T-Shirt",
      price: "$99",
      color: "Black",
      size: "L",
      quantity: 1,
      image: checkoutItem1,
    },
    {
      id: 2,
      name: "Basic Fit T-Shirt",
      price: "$99",
      color: "Black",
      size: "L",
      quantity: 1,
      image: checkoutItem2,
    },
  ]

  const subtotal = "$180.00"
  const shipping = "Calculated at next step"
  const total = "$180.00"

  return (
    <Container>
      <Header>
        <BackButton href="/cart">
          <ChevronLeft size={24} />
        </BackButton>
        <Title>CHECKOUT</Title>
      </Header>

      <TabsContainer>
        <Tab $active>INFORMATION</Tab>
        <Tab>SHIPPING</Tab>
        <Tab>PAYMENT</Tab>
      </TabsContainer>

      <CheckoutGrid>
        <CheckoutForm>
          <FormSection>
            <SectionTitle>CONTACT INFO</SectionTitle>
            <Input type="email" placeholder="Email" />
            <Input type="tel" placeholder="Phone" />
          </FormSection>

          <FormSection>
            <SectionTitle>SHIPPING ADDRESS</SectionTitle>
            <FormGrid>
              <Input type="text" placeholder="First Name" />
              <Input type="text" placeholder="Last Name" />
              <FormRow>
                <Select>
                  <option value="" disabled selected>
                    Country
                  </option>
                  <option value="fr">France</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                </Select>
              </FormRow>
              <FormRow>
                <Input type="text" placeholder="State / Region" />
              </FormRow>
              <FormRow>
                <Input type="text" placeholder="Address" />
              </FormRow>
              <Input type="text" placeholder="City" />
              <Input type="text" placeholder="Postal Code" />
            </FormGrid>
          </FormSection>

          <ContinueButton>
            Shipping
            <ButtonIcon>
              <ChevronRight size={16} />
            </ButtonIcon>
          </ContinueButton>
        </CheckoutForm>

        <OrderSummary>
          <SummaryHeader>
            <SummaryTitle>YOUR ORDER</SummaryTitle>
            <ItemCount>(2)</ItemCount>
          </SummaryHeader>

          <OrderItems>
            {orderItems.map((item) => (
              <OrderItem key={item.id}>
                <ItemImage>
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill style={{ objectFit: "cover" }} />
                </ItemImage>

                <ItemDetails>
                  <ItemHeader>
                    <ItemName>{item.name}</ItemName>
                    <ChangeButton>Change</ChangeButton>
                  </ItemHeader>

                  <ItemVariant>
                    {item.color}/{item.size}
                  </ItemVariant>

                  <ItemFooter>
                    <ItemQuantity>({item.quantity})</ItemQuantity>
                    <ItemPrice>{item.price}</ItemPrice>
                  </ItemFooter>
                </ItemDetails>
              </OrderItem>
            ))}
          </OrderItems>

          <SummaryRow>
            <SummaryLabel>Subtotal</SummaryLabel>
            <SummaryValue>{subtotal}</SummaryValue>
          </SummaryRow>
          <SummaryRow>
            <SummaryLabel>Shipping</SummaryLabel>
            <ShippingValue>{shipping}</ShippingValue>
          </SummaryRow>

          <TotalRow>
            <TotalLabel>Total</TotalLabel>
            <TotalValue>{total}</TotalValue>
          </TotalRow>
        </OrderSummary>
      </CheckoutGrid>
    </Container>
  )
}

