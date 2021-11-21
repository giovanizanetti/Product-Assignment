import React from 'react'
import ProductsList from '../../components/ProductsList'

const Home = () => {
  return (
    <div className='p-5 sm:p-10' data-testid='home-component'>
      <ProductsList />
    </div>
  )
}

export default Home
