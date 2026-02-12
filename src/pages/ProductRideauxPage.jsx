import PageWrapper from '../components/layout/PageWrapper'
import { products } from '../data/products'
import ProductDetail from './components/ProductDetail'

export default function ProductRideauxPage() {
  const product = products.find(p => p.id === 'rideaux')
  return (
    <PageWrapper seoKey="productRideaux">
      <ProductDetail product={product} />
    </PageWrapper>
  )
}
