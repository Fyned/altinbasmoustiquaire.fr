import PageWrapper from '../components/layout/PageWrapper'
import { products } from '../data/products'
import ProductDetail from './components/ProductDetail'

export default function ProductFenetrePage() {
  const product = products.find(p => p.id === 'fenetre')
  return (
    <PageWrapper seoKey="productFenetre">
      <ProductDetail product={product} />
    </PageWrapper>
  )
}
