import PageWrapper from '../components/layout/PageWrapper'
import { products } from '../data/products'
import ProductDetail from './components/ProductDetail'

export default function ProductBaieVitreePage() {
  const product = products.find(p => p.id === 'baie-vitree')
  return (
    <PageWrapper seoKey="productBaie">
      <ProductDetail product={product} />
    </PageWrapper>
  )
}
