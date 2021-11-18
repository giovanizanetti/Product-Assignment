import { useParams } from 'react-router-dom'
import { useProduct } from '../../hooks/useProduct'

import ProductOptions from '../../components/ProductOptions'

const Product = () => {
  const { product } = useParams()
  const currentProduct = useProduct(product)
  const { titlePlural } = currentProduct

  const displayProductProperites = () => {
    const productProperties = currentProduct.properties.map((property) => {
      return (
        <div key={property.slug} className='container'>
          <div className='h-25'>
            <h2 className='text-lg mb-2 font-bold md:text-left break-normal'>{property.title}</h2>
            <ProductOptions options={property.options} />
          </div>
        </div>
      )
    })
    return productProperties
  }

  return (
    <div className='container m-auto px-2 text-gray-600'>
      <header className='bg-yellow-300 h-100'>
        <h1 className='p-5 text-4xl font-bold m-5'>{titlePlural}</h1>
      </header>
      <div
        data-testid='productDetails-component'
        className='grid mx-4 sm:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-6 '
      >
        {displayProductProperites()}
      </div>
    </div>
  )
}

export default Product
