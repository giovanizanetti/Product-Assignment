import { useParams } from 'react-router-dom'
import { useProduct } from '../../hooks/useProduct'
import { capitalize, removeStringUnderline } from '../../helpers'

import ProductOptions from '../../components/ProductOptions'

const Product = () => {
  const { product } = useParams()
  const currentProduct = useProduct(product)
  const { titlePlural } = currentProduct

  /*
    I realized that not all product properties has a title. 
    I did the assumption that they are important
    otherwise they should be there. 
    Therefore, I have use the slug property instead.
  */

  const displayProductProperites = () => {
    const productProperties = currentProduct.properties.map((property, index) => {
      const { title, options, slug } = property || {}
      const propertyTitle = title ? title : removeStringUnderline(slug)
      return (
        <div key={property.slug} className='container'>
          <div className='h-25 sm:mx-3'>
            <h2 className='text-lg mb-2 font-bold md:text-left break-normal'>{capitalize(propertyTitle)}</h2>
            <ProductOptions options={options} index={index} />
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
