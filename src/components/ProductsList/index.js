import { useContext } from 'react'
import { Store } from '../../globalState/Store'
import Product from '../Product'
const ProductsList = () => {
  const { products } = useContext(Store)

  if (!products?.length) return <strong>Sorry! There are no products.</strong>

  return (
    <div data-testid='productsList-component' className='container lg:my-12  mx-auto px-4 md:px-12'>
      <div className='flex flex-wrap -mx-1 lg:-mx-4 lg:p-10'>
        {products && products.map(({ name, id, image }) => <Product key={id} productName={name} image={image} />)}
      </div>
    </div>
  )
}

export default ProductsList
