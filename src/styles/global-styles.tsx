"use client"

import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #f8f8f8;
    --foreground: #0a0a0a;
    --card: #ffffff;
    --card-foreground: #0a0a0a;
    --border: #e5e5e5;
    --input: #e5e5e5;
    --primary: #0a0a0a;
    --primary-foreground: #fafafa;
    --secondary: #f5f5f5;
    --secondary-foreground: #0a0a0a;
    --muted: #f5f5f5;
    --muted-foreground: #737373;
    --accent: #f5f5f5;
    --accent-foreground: #0a0a0a;
    --destructive: #ef4444;
    --destructive-foreground: #fafafa;
    --radius: 0.5rem;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    background-color: var(--background);
    color: var(--foreground);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`

