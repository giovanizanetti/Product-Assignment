import React from 'react'
import { useParams } from 'react-router'
import Product from '../Product'

const ProductsList = ({ products }) => {
  if (!products.length) return <strong>Sorry! There is no products.</strong>

  return (
    <div data-testid='productsList-component' className='container my-12 mx-auto px-4 md:px-12'>
      <div className='flex flex-wrap -mx-1 lg:-mx-4'>
        {products.map((product) => (
          <Product key={product.id} productName={product.name} />
        ))}
      </div>
    </div>
  )
}

export default ProductsList
