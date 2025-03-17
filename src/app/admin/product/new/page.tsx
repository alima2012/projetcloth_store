"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import styled from "styled-components"
import { ChevronLeft, Upload, X, Plus } from "lucide-react"

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

const Textarea = styled.textarea`
  min-height: 6rem;
  padding: 0.75rem;
  border: 1px solid #e5e5e5;
  border-radius: 0.375rem;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #1a1a1a;
  }
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

const ImageUploadContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
`

const ImageUploadBox = styled.div`
  aspect-ratio: 1;
  border: 2px dashed #e5e5e5;
  border-radius: 0.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: border-color 0.2s;
  
  &:hover {
    border-color: #9ca3af;
  }
`

const ImageUploadText = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  text-align: center;
`

const ImagePreviewBox = styled.div`
  aspect-ratio: 1;
  border-radius: 0.375rem;
  position: relative;
  overflow: hidden;
  background-color: #f3f4f6;
`

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const RemoveImageButton = styled.button`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 9999px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`

const VariantContainer = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 0.375rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
`

const RemoveVariantButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: #6b7280;
  
  &:hover {
    color: #ef4444;
  }
`

const AddVariantButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border: 1px dashed #e5e5e5;
  border-radius: 0.375rem;
  color: #6b7280;
  font-weight: 500;
  
  &:hover {
    background-color: #f9fafb;
    color: #1a1a1a;
  }
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

export default function NewProductPage() {
  // const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [images, setImages] = useState<string[]>([])
  const [variants, setVariants] = useState([{ id: 1, color: "", size: "", price: "", stock: "" }])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
      setImages((prev) => [...prev, ...newImages])
    }
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const addVariant = () => {
    setVariants((prev) => [...prev, { id: Date.now(), color: "", size: "", price: "", stock: "" }])
  }

  const removeVariant = (id: number) => {
    setVariants((prev) => prev.filter((variant) => variant.id !== id))
  }

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setIsSubmitting(true)

  //   try {
  //     // Simuler un appel API
  //     await new Promise((resolve) => setTimeout(resolve, 1500))

  //     // Rediriger vers la liste des produits
  //     router.push("/admin/product")
  //   } catch (error) {
  //     console.error("Erreur lors de la création du produit:", error)
  //     setIsSubmitting(false)
  //   }
  // }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    const response = await fetch("/api/products", {
      
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "T-Shirt", price: 19.99, category: "Clothing", image: "/img.jpg" }),
    });
    const data = await response.json();
    console.log(data);
  };
  

  return (
    <Container>
      <PageHeader>
        <BackButton href="/admin/product">
          <ChevronLeft size={20} />
        </BackButton>
        <Title>Ajouter un produit</Title>
      </PageHeader>

      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormSection>
            <SectionTitle>Informations générales</SectionTitle>

            <FormGrid>
              <FormGroup>
                <Label htmlFor="name">Nom du produit</Label>
                <Input id="name" type="text" required />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="sku">SKU</Label>
                <Input id="sku" type="text" required />
              </FormGroup>

              <FormRow>
                <FormGroup>
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" required />
                </FormGroup>
              </FormRow>

              <FormGroup>
                <Label htmlFor="category">Catégorie</Label>
                <Select id="category" required>
                  <option value="">Sélectionner une catégorie</option>
                  <option value="t-shirts">T-shirts</option>
                  <option value="shirts">Chemises</option>
                  <option value="jeans">Jeans</option>
                  <option value="jackets">Vestes</option>
                </Select>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="brand">Marque</Label>
                <Input id="brand" type="text" />
              </FormGroup>
            </FormGrid>
          </FormSection>

          <FormSection>
            <SectionTitle>Images du produit</SectionTitle>

            <ImageUploadContainer>
              {images.map((image, index) => (
                <ImagePreviewBox key={index}>
                  <ImagePreview src={image || "/placeholder.svg"} alt={`Product image ${index + 1}`} />
                  <RemoveImageButton type="button" onClick={() => removeImage(index)}>
                    <X size={12} />
                  </RemoveImageButton>
                </ImagePreviewBox>
              ))}

              <ImageUploadBox as="label" htmlFor="image-upload">
                <Upload size={24} color="#9ca3af" />
                <ImageUploadText>Ajouter une image</ImageUploadText>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
              </ImageUploadBox>
            </ImageUploadContainer>
          </FormSection>

          <FormSection>
            <SectionTitle>Variantes</SectionTitle>

            {variants.map((variant) => (
              <VariantContainer key={variant.id}>
                {variants.length > 1 && (
                  <RemoveVariantButton type="button" onClick={() => removeVariant(variant.id)}>
                    <X size={16} />
                  </RemoveVariantButton>
                )}

                <FormGrid>
                  <FormGroup>
                    <Label>Couleur</Label>
                    <Input type="text" placeholder="Noir, Blanc, etc." />
                  </FormGroup>

                  <FormGroup>
                    <Label>Taille</Label>
                    <Input type="text" placeholder="S, M, L, XL, etc." />
                  </FormGroup>

                  <FormGroup>
                    <Label>Prix (€)</Label>
                    <Input type="number" min="0" step="0.01" placeholder="99.99" />
                  </FormGroup>

                  <FormGroup>
                    <Label>Stock</Label>
                    <Input type="number" min="0" placeholder="10" />
                  </FormGroup>
                </FormGrid>
              </VariantContainer>
            ))}

            <AddVariantButton type="button" onClick={addVariant}>
              <Plus size={16} />
              Ajouter une variante
            </AddVariantButton>
          </FormSection>

          <ButtonGroup>
            <CancelButton href="/admin/product">Annuler</CancelButton>
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Création en cours..." : "Créer le produit"}
            </SubmitButton>
          </ButtonGroup>
        </Form>
      </FormContainer>
    </Container>
  )
}

