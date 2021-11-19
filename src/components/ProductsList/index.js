import Product from '../Product'

import BusinesscardImg from '../../assets/businesscard.svg'
import Flyer from '../../assets/flyer.svg'
import Poster from '../../assets/poster.svg'

const ProductsList = () => {
  const products = [
    { name: 'business cards', id: 1, image: BusinesscardImg },
    { name: 'flyers', id: 2, image: Flyer },
    { name: 'posters', id: 3, image: Poster },
  ]

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
