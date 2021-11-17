import React from 'react'
import ProductsList from '../../components/ProductsList'

const Home = () => {
  const products = [
    { name: 'business cards', id: 1 },
    { name: 'flyers', id: 2 },
    { name: 'posters', id: 3 },
  ]
  return (
    <div data-testid='home-component'>
      <ProductsList products={products} />
    </div>
  )
}

export default Home
