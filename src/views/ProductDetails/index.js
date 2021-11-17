import { useParams } from 'react-router-dom'
import { useProduct } from '../../hooks/useProduct'

const Product = () => {
  const { product } = useParams()
  const currentProduct = useProduct(product)
  const { titlePlural } = currentProduct
  return <div data-testid='productDetails-component'>{titlePlural}</div>
}

export default Product
