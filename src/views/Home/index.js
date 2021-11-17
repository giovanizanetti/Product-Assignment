import React from 'react'
import ProductsList from '../../components/ProductsList'

 const Home = () => {
  const products = ['business cards', 'flyers','posters' ]
  return (
    <div data-testid="home-component">
      <ProductsList products={products}/>
    </div>
  )
}

export default Home
