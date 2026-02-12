import PageWrapper from '../components/layout/PageWrapper'
import { products } from '../data/products'
import ProductDetail from './components/ProductDetail'

export default function ProductPortePage() {
  const product = products.find(p => p.id === 'porte-fenetre')
  return (
    <PageWrapper seoKey="productPorte">
      <ProductDetail product={product} />
    </PageWrapper>
  )
}
