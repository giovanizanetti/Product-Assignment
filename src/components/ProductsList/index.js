import { useContext } from 'react'
import { Store } from '../../globalState/Store'
import { Link } from 'react-router-dom'
import { removeSpaceBetween } from '../../helpers'

import Product from '../Product'
const ProductsList = () => {
  const { products, selectProduct } = useContext(Store)

  if (!products?.length) return <strong>Sorry! There are no products.</strong>

  return (
    <div data-testid='productsList-component' className='container lg:my-12  mx-auto px-4 md:px-12'>
      <div className='flex flex-wrap -mx-1 lg:-mx-4 lg:p-10'>
        {products &&
          products.map(({ name, id, image }) => (
            <Link
              key={id}
              onClick={() => selectProduct(name)}
              data-testid='product-component'
              to={`/${removeSpaceBetween(name)}`}
              className='my-3 px-1 w-full md:w-1/2 md:p-3 lg:my-4 lg:px-4 lg:w-1/3 transform transition duration-500 hover:scale-110 lg:hover:scale-105'
            >
              <Product productName={name} image={image} />
            </Link>
          ))}
      </div>
    </div>
  )
}

export default ProductsList
