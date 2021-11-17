import React from 'react'
import { useParams } from 'react-router'

const ProductsList = ({products}) => {
  

  if(!products.length) return <strong>Sorry! There is no products.</strong>

  return (
    <div data-testid='productsList-component'>
      {products.map(product => <div key={product}>{product}</div>)}
    </div>
  )
}

export default ProductsList
