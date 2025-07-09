import ProductDetail from './ProductDetail'

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  return <ProductDetail productId={params.id} />
} 