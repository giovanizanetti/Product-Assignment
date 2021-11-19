import { useParams } from 'react-router-dom'
import { useProduct } from '../../hooks/useProduct'
import { capitalize, removeStringUnderline } from '../../helpers'
import { useState, useContext } from 'react'
import { Store } from '../../globalState/Store'

import { MdAddShoppingCart } from 'react-icons/md'

import ProductOptions from '../../components/ProductOptions'

const Product = () => {
  const [areAllPropertiesSelected, setAreAllPropertiesSlected, selectProduct] = useState(null)
  const { product } = useParams()
  const currentProduct = useProduct(product)
  const { titlePlural } = currentProduct
  const { choosenProductOptions, addProductToCart } = useContext(Store) || {}

  // useEffect(() => {
  //   if (product) {
  //     selectProduct(product)
  //   }
  // }, [selectProduct, product])

  /*
    I realized that not all product properties has a title. 
    I did the assumption that they are important
    otherwise they should be there. 
    Therefore, fot hose producrts I have use the slug property instead.
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
  const HandleAddToTheCart = () => {
    if (currentProduct.properties.length !== choosenProductOptions.length) {
      console.log('Select all options')
      setAreAllPropertiesSlected(false)
    } else {
      setAreAllPropertiesSlected(true)
      addProductToCart(choosenProductOptions)
    }
  }

  return (
    <div className='container m-auto px-2 text-gray-600'>
      <header className='bg-yellow-300 h-100 flex justify-between items-center relative '>
        <h1 className='sm:p-5 text-4xl font-bold m-5'>{titlePlural}</h1>
        <div className='sm:p-5 text-4xl font-bold m-5 hover:text-white'>
          <MdAddShoppingCart onClick={HandleAddToTheCart} size={30} />
        </div>
      </header>
      {areAllPropertiesSelected === false && (
        <small className='text-red-500 font-bold h-20'>Please, select all peoperties.</small>
      )}

      <div
        data-testid='productDetails-component'
        className='grid mx-4 sm:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-5'
      >
        {displayProductProperites()}
      </div>
    </div>
  )
}

export default Product
