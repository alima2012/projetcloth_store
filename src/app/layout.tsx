import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import StyledComponentsRegistry from "@/libs/registry"
import Navbar from "@/component/navbar"
import { GlobalStyles } from "@/styles/global-styles"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "XIV Fashion",
  description: "Élégant design de mode",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Navbar />
          <main>{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

