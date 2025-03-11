"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import styled from "styled-components"
import { ChevronLeft, Eye, EyeOff } from "lucide-react"

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`

const BackButton = styled(Link)`
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  
  &:hover {
    background-color: #f9fafb;
  }
`

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
`

const FormContainer = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding: 2rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const FormRow = styled.div`
  grid-column: 1 / -1;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
`

const Input = styled.input`
  height: 2.5rem;
  padding: 0 0.75rem;
  border: 1px solid #e5e5e5;
  border-radius: 0.375rem;
  
  &:focus {
    outline: none;
    border-color: #1a1a1a;
  }
`

const PasswordContainer = styled.div`
  position: relative;
`

const PasswordToggle = styled.button`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
`

const Select = styled.select`
  height: 2.5rem;
  padding: 0 0.75rem;
  border: 1px solid #e5e5e5;
  border-radius: 0.375rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #1a1a1a;
  }
`

const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
`

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`

const CancelButton = styled(Link)`
  padding: 0.75rem 1.5rem;
  border: 1px solid #e5e5e5;
  border-radius: 0.375rem;
  font-weight: 500;
  
  &:hover {
    background-color: #f9fafb;
  }
`

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #1a1a1a;
  color: white;
  border-radius: 0.375rem;
  font-weight: 500;
  
  &:hover {
    background-color: #000;
  }
  
  &:disabled {
    background-color: #d1d5db;
    cursor: not-allowed;
  }
`

export default function NewUserPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simuler un appel API
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Rediriger vers la liste des utilisateurs
      router.push("/admin")
    } catch (error) {
      console.error("Erreur lors de la création de l'utilisateur:", error)
      setIsSubmitting(false)
    }
  }

  return (
    <Container>
      <PageHeader>
        <BackButton href="/admin">
          <ChevronLeft size={20} />
        </BackButton>
        <Title>Ajouter un utilisateur</Title>
      </PageHeader>

      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormSection>
            <SectionTitle>Informations personnelles</SectionTitle>

            <FormGrid>
              <FormGroup>
                <Label htmlFor="firstName">Prénom</Label>
                <Input id="firstName" type="text" required />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="lastName">Nom</Label>
                <Input id="lastName" type="text" required />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" type="tel" />
              </FormGroup>
            </FormGrid>
          </FormSection>

          <FormSection>
            <SectionTitle>Informations de compte</SectionTitle>

            <FormGrid>
              <FormGroup>
                <Label htmlFor="password">Mot de passe</Label>
                <PasswordContainer>
                  <Input id="password" type={showPassword ? "text" : "password"} required />
                  <PasswordToggle type="button" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </PasswordToggle>
                </PasswordContainer>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="role">Rôle</Label>
                <Select id="role" required>
                  <option value="">Sélectionner un rôle</option>
                  <option value="admin">Administrateur</option>
                  <option value="editor">Éditeur</option>
                  <option value="customer">Client</option>
                </Select>
              </FormGroup>

              <FormRow>
                <CheckboxLabel>
                  <Checkbox type="checkbox" />
                  Envoyer un email de bienvenue avec les instructions de connexion
                </CheckboxLabel>
              </FormRow>

              <FormRow>
                <CheckboxLabel>
                  <Checkbox type="checkbox" />
                  Activer le compte immédiatement
                </CheckboxLabel>
              </FormRow>
            </FormGrid>
          </FormSection>

          <ButtonGroup>
            <CancelButton href="/admin/users/new">Annuler</CancelButton>
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Création en cours..." : "Créer l'utilisateur"}
            </SubmitButton>
          </ButtonGroup>
        </Form>
      </FormContainer>
    </Container>
  )
}

