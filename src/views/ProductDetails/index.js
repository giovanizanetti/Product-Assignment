import { useParams } from 'react-router-dom'
import { useProduct } from '../../hooks/useProduct'
import { useEffect } from 'react'

import ProductOptions from '../../components/ProductOptions'

const Product = () => {
  const { product } = useParams()
  const currentProduct = useProduct(product)
  const { titlePlural } = currentProduct

  // useEffect(() => {
  //   const options = currentProduct.properties.map((property) => property)
  //   // const Options = Properties.options.map((option) => option)
  //   console.log(options)
  // }, [currentProduct])

  const displayProductProperites = () => {
    const productProperties = currentProduct.properties.map((property) => {
      return (
        <div key={property.slug} className='container'>
          <h2>{property.title}</h2>
          <div>
            <ProductOptions options={property.options} />
            {/* {console.log(property.options)} */}
          </div>
        </div>
      )
    })
    return productProperties
  }

  return (
    <div className='container m-auto'>
      <h1 className='p-5'>{titlePlural}</h1>
      <div
        data-testid='productDetails-component'
        className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 '
      >
        {displayProductProperites()}
      </div>
    </div>
  )

  // <div >{titlePlural}</div>
}

export default Product
