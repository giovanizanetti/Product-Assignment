import { capitalize } from '../../helpers'

const Product = ({ productName, image }) => {
  return (
    <div data-testid='product-component' className='overflow-hidden rounded-xl  bg-gray-100 filter drop-shadow-lg'>
      <img alt={productName} className='block h-auto w-full p-10' src={image} />
      <div className='flex items-center justify-center leading-tight p-2 md:p-4 bg-blue-500'>
        <h2 className='text-xl text-white'>{productName && capitalize(productName)}</h2>
      </div>
    </div>
  )
}

export default Product
