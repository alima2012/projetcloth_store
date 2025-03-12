"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import styled from "styled-components"
import { ShoppingBag, Eye, EyeOff } from "lucide-react"

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: #f8f8f8;
`

const LoginCard = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 2rem;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 700;
`

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
  height: 3rem;
  padding: 0 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 0.375rem;
  width: 100%;
  
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
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
`

const SubmitButton = styled.button`
  height: 3rem;
  background-color: #1a1a1a;
  color: white;
  font-weight: 500;
  border-radius: 0.375rem;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #000;
  }
  
  &:disabled {
    background-color: #d1d5db;
    cursor: not-allowed;
  }
`

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 1rem;
  text-align: center;
`

export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      // Simuler une authentification
      // Dans un cas réel, vous feriez un appel API ici
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (email === "admin@6.com" && password === "admin123") {
        // Authentification réussie
        router.push("/admin")
      } else {
        setError("Identifiants invalides. Veuillez réessayer ")
      }
    } catch (error) {
      setError("Une erreur est survenue. Veuillez réessayer.")
      console.error("File attachment error:", error)

    } finally {
      setIsLoading(false)
    }
  }

  return (
    <LoginContainer>
      <LoginCard>
        <Logo>
          <ShoppingBag size={24} />
          Cloth_Store
        </Logo>

        <Title>Connexion Admin</Title>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="admin@xiv.com"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Mot de passe</Label>
            <PasswordContainer>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
              />
              <PasswordToggle type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </PasswordToggle>
            </PasswordContainer>
          </FormGroup>

          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? "Connexion en cours..." : "Se connecter"}
          </SubmitButton>

          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Form>
      </LoginCard>
    </LoginContainer>
  )
}

