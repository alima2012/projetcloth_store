"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Heart, Image, ShoppingBag, User } from "lucide-react"
import styled from "styled-components"

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  border-bottom: 1px solid var(--border);
  background-color: var(--background);
`

const Container = styled.div`
  display: flex;
  height: 64px;
  align-items: center;
  padding: 0 1rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
`

const MenuButton = styled.button`
  margin-right: 1rem;
  
  @media (min-width: 768px) {
    display: none;
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`

const NavLink = styled(Link)<{ $active?: boolean }>`
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.2s;
  color: ${(props) => (props.$active ? "var(--foreground)" : "var(--muted-foreground)")};
  
  &:hover {
    color: var(--foreground);
  }
`


const ActionContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
`

const IconButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: #1a1a1a;
  padding: 0.5rem;
  position: relative;
`

const CartCount = styled.span`
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  display: flex;
  height: 1.25rem;
  width: 1.25rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: white;
  font-size: 0.75rem;
  font-weight: 500;
  color: black;
  border: 1px solid var(--border);
`

export default function Navbar() {
  const pathname = usePathname()

  return (
    <Header>
      <Container>
        <MenuButton>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <path d="M3 6H21" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <path d="M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </MenuButton>

        <Nav>
          <NavLink href="/" $active={pathname === "/"}>
            Home
          </NavLink>
          <NavLink href="/collections" $active={pathname === "/collections"}>
            Collections
          </NavLink>
          <NavLink href="/" $active={pathname === "/"}>
            New
          </NavLink>
          
        </Nav>

        {/* <LogoContainer>
          <Image src="/assets/logo.jpg" alt="" width={32} height={32} />
        </LogoContainer> */}

        <ActionContainer>
          <IconButton href="">
            <Heart size={20} color="white"></Heart>
          </IconButton>
          <IconButton href="/cart">
            <ShoppingBag size={20} color="white" />
            <CartCount>0</CartCount>
          </IconButton>
          <IconButton href="/sign-in">
            <User size={20} color="white" />
          </IconButton>
        </ActionContainer>
      </Container>
    </Header>
  )
}

