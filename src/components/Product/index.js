import React from 'react'
import { Link } from 'react-router-dom'
import { capitalize, removeSpaceBetween } from '../../helpers'

const Product = ({ productName }) => {
  const productRoute = productName && removeSpaceBetween(productName)
  return (
    <Link
      data-testid='product-component'
      to={`/${productRoute}`}
      className='my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 transform transition duration-500 hover:scale-105'
    >
      <div className='overflow-hidden rounded-lg shadow-lg'>
        <img alt='Placeholder' className='block h-auto w-full' src='https://picsum.photos/600/400/?random' />
        <div className='flex items-center justify-center leading-tight p-2 md:p-4'>
          <h2 className='text-lg'>{productName && capitalize(productName)}</h2>
        </div>
      </div>
    </Link>
  )
}

export default Product
