import React from 'react'
import { Link } from 'react-router-dom'
import { capitalize, removeSpaceBetween } from '../../helpers'

const Product = ({ productName, image }) => {
  const productRoute = productName && removeSpaceBetween(productName)
  return (
    <Link
      data-testid='product-component'
      to={`/${productRoute}`}
      className='my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 transform transition duration-500 hover:scale-110'
    >
      <div className='overflow-hidden rounded-xl shadow-lg bg-gray-100'>
        <img alt={productName} className='block h-auto w-full p-10' src={image} />
        <div className='flex items-center justify-center leading-tight p-2 md:p-4 bg-blue-500'>
          <h2 className='text-xl text-white'>{productName && capitalize(productName)}</h2>
        </div>
      </div>
    </Link>
  )
}

export default Product
