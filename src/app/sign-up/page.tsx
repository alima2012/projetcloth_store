"use client";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fffff;
  margin-bottom: 30px;
`;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 420px;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: #fff;
 
`;

const Title = styled(CardTitle)`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: black;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledInput = styled(Input)`
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid black;
  font-size: 1rem;
`;

const SocialButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const SocialButton = styled(Button)`
  background-color: #999;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1.5rem;
  &:hover {
    background-color: #999;
    transform: scale(1.1);
  }
`;
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: bold;
  margin-left: 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`;
const FooterText = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #999;
`;

export default function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
  };

  return (
    <Container>
      <StyledCard>
        <CardHeader>
          <Title>Sign Up</Title>
        </CardHeader>
        <CardContent>
          <Form onSubmit={handleSubmit}>
            <StyledInput type="text" placeholder="Nom" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            <StyledInput type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            <StyledInput type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
            <StyledInput type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} required />
            <SocialButtonContainer>
                <SocialButton size="lg" disabled={pending}>Valider</SocialButton>
            </SocialButtonContainer>
          </Form>
          <Separator />
          <FooterText>
            Vous avez déjà un compte? <StyledLink href="sign-in">Se connecter</StyledLink>
          </FooterText>
        </CardContent>
      </StyledCard>
    </Container>
  );
}
