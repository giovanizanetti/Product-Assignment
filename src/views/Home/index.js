import React from 'react'
import ProductsList from '../../components/ProductsList'

import BusinesscardImg from '../../assets/businesscard.svg'
import Flyer from '../../assets/flyer.svg'
import Poster from '../../assets/poster.svg'

const Home = () => {
  const products = [
    { name: 'business cards', id: 1, image: BusinesscardImg },
    { name: 'flyers', id: 2, image: Flyer },
    { name: 'posters', id: 3, image: Poster },
  ]
  return (
    <div data-testid='home-component'>
      <ProductsList products={products} />
    </div>
  )
}

export default Home
