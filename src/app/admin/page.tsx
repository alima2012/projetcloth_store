"use client"

import { useState, useEffect } from "react"
import styled from "styled-components"

const DashboardContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

const PageHeader = styled.div`
  margin-bottom: 2rem;
`

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

const Subtitle = styled.p`
  color: #6b7280;
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`

const Section = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
`

const SeeAllLink = styled.button`
  font-size: 0.875rem;
  color: #6b7280;
  
  &:hover {
    color: #1a1a1a;
    text-decoration: underline;
  }
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const TableHead = styled.thead`
  border-bottom: 1px solid #e5e5e5;
`

const TableRow = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid #e5e5e5;
  }
`

const TableHeader = styled.th`
  padding: 0.75rem;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
`

const TableCell = styled.td`
  padding: 0.75rem;
  font-size: 0.875rem;
`

const StatusBadge = styled.span<{ $status: "completed" | "processing" | "cancelled" }>`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  
  ${(props) => {
    switch (props.$status) {
      case "completed":
        return `
          background-color: #dcfce7;
          color: #166534;
        `
      case "processing":
        return `
          background-color: #dbeafe;
          color: #1e40af;
        `
      case "cancelled":
        return `
          background-color: #fee2e2;
          color: #991b1b;
        `
      default:
        return ""
    }
  }}
`


export default function AdminDashboard() {
  const [isLoading, setIsLoading] = useState(true)

  // Simuler le chargement des données
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <div>Chargement du tableau de bord...</div>
  }

  return (
    <DashboardContainer>
      <PageHeader>
        <Title>Tableau de bord</Title>
        <Subtitle>Bienvenue dans votre espace administrateur</Subtitle>
      </PageHeader>

      <StatsGrid>
       
      </StatsGrid>

      <SectionGrid>
        <Section>
          <SectionHeader>
            <SectionTitle>Commandes récentes</SectionTitle>
            <SeeAllLink>Voir tout</SeeAllLink>
          </SectionHeader>

          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>ID</TableHeader>
                <TableHeader>Client</TableHeader>
                <TableHeader>Date</TableHeader>
                <TableHeader>Montant</TableHeader>
                <TableHeader>Statut</TableHeader>
              </TableRow>
            </TableHead>
            <tbody>
              <TableRow>
                <TableCell>C7245</TableCell>
                <TableCell>Astou</TableCell>
                <TableCell>12 Mars 2024</TableCell>
                <TableCell>129.99 €</TableCell>
                <TableCell>
                  <StatusBadge $status="completed">Complétée</StatusBadge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>C7244</TableCell>
                <TableCell>Ablaye</TableCell>
                <TableCell>11 Mars 2024</TableCell>
                <TableCell>89.99 €</TableCell>
                <TableCell>
                  <StatusBadge $status="processing">En cours</StatusBadge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>C7243</TableCell>
                <TableCell>Moussa</TableCell>
                <TableCell>10 Mars 2024</TableCell>
                <TableCell>199.99 €</TableCell>
                <TableCell>
                  <StatusBadge $status="completed">Complétée</StatusBadge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>C7242</TableCell>
                <TableCell>Alima</TableCell>
                <TableCell>10 Mars 2024</TableCell>
                <TableCell>59.99 €</TableCell>
                <TableCell>
                  <StatusBadge $status="cancelled">Annulée</StatusBadge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>C7241</TableCell>
                <TableCell>Ngoné</TableCell>
                <TableCell>9 Mars 2024</TableCell>
                <TableCell>149.99 €</TableCell>
                <TableCell>
                  <StatusBadge $status="completed">Complétée</StatusBadge>
                </TableCell>
              </TableRow>
            </tbody>
          </Table>
        </Section>
      </SectionGrid>
    </DashboardContainer>
  )
}

