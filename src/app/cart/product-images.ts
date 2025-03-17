// Créez un fichier pour gérer les images de produits
import { StaticImageData } from 'next/image'

// Importez toutes vos images
import tshirtZipper from '@/assets/img1.jpeg'
import tshirtSlim from '@/assets/img10.jpeg'
import tshirtHeavy from '@/assets/img13.jpeg'
// ... autres imports

// Créez un objet qui mappe les IDs de produits à leurs images
const productImages: Record<string, StaticImageData> = {
  'img1': tshirtZipper,
  'img10': tshirtSlim,
  'img13': tshirtHeavy,
  // ... autres mappings
}

export default productImages
