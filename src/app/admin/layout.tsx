"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import styled from "styled-components"
import { Users, ShoppingBag, BarChart2, LogOut, Menu, X } from "lucide-react"

const AdminLayout = styled.div`
  display: flex;
  min-height: 100vh;
`

const Sidebar = styled.aside<{ $isOpen: boolean }>`
  width: 250px;
  background-color: #1a1a1a;
  color: white;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: ${(props) => (props.$isOpen ? "0" : "-250px")};
  z-index: 50;
  transition: left 0.3s ease;

  @media (min-width: 768px) {
    position: sticky;
    top: 0;
    left: 0;
  }
`

const MobileMenuButton = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 100;
  background-color: #1a1a1a;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    display: none;
  }
`

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`

const NavLink = styled(Link)<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.375rem;
  color: ${(props) => (props.$active ? "white" : "#a3a3a3")};
  background-color: ${(props) => (props.$active ? "rgba(255, 255, 255, 0.1)" : "transparent")};
  transition: all 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
  }
`

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.375rem;
  color: #a3a3a3;
  margin-top: auto;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
  }
`

const Content = styled.main`
  flex: 1;
  padding: 2rem;
  margin-left: 0;
  
  @media (min-width: 768px) {
    margin-left: 0;
  }
`

export default function AdminLayoutComponent({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Fermer le menu sur mobile lors d'un changement de route
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Simuler une vérification d'authentification
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  // Rediriger si non authentifié
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/admin/login")
    }
  }, [isAuthenticated, router])

  const handleLogout = () => {
    // Logique de déconnexion ici
    setIsAuthenticated(false)
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <AdminLayout>
      <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </MobileMenuButton>

      <Sidebar $isOpen={isOpen}>
        <Logo>
          <ShoppingBag size={24} />
          Cloth_store
        </Logo>

        <NavMenu>
          <NavLink href="/admin" $active={pathname === "/admin"}>
            <BarChart2 size={20} />
            Tableau de bord
          </NavLink>
          <NavLink href="/admin/product" $active={pathname.startsWith("/admin/product")}>
            <ShoppingBag size={20} />
            Produits
          </NavLink>
          <NavLink href="/admin/users/new" $active={pathname.startsWith("/admin/users/new")}>
            <Users size={20} />
            Utilisateurs
          </NavLink>
          {/* <NavLink href="/admin/settings" $active={pathname.startsWith("/admin/settings")}>
            <Settings size={20} />
            Paramètres
          </NavLink> */}
        </NavMenu>

        <LogoutButton onClick={handleLogout}>
          <LogOut size={20} />
          Déconnexion
        </LogoutButton>
      </Sidebar>

      <Content>{children}</Content>
    </AdminLayout>
  )
}

