import { useParams } from 'react-router-dom'
import { useProduct } from '../../hooks/useProduct'
import { capitalize, removeStringUnderline } from '../../helpers'
import { useState, useContext, useEffect } from 'react'
import { Store } from '../../globalState/Store'

import { MdAddShoppingCart } from 'react-icons/md'

import ProductOptions from '../../components/ProductOptions'
import AddedToCartFeedback from '../../components/AddedToCartFeedback'

const Product = () => {
  const [areAllPropertiesSelected, setAreAllPropertiesSelected] = useState(null)
  const { product } = useParams()
  const currentProduct = useProduct(product)
  const { titlePlural } = currentProduct
  const { choosenProductOptions, addProductToCart, selectedProduct, selectProduct } = useContext(Store) || {}
  const [showFeedback, setShowFeedback] = useState(false)

  /*
    I realized that not all product properties has a title. 
    I did the assumption that they are important. 
    Therefore, for those products I have used the slug property instead.
  */

  useEffect(() => {
    if (selectedProduct === null) {
      selectProduct(product)
    }
  }, [product, selectedProduct, selectProduct])

  const displayProductProperites = () => {
    const productProperties = currentProduct.properties.map((property, index) => {
      const { title, options, slug } = property || {}
      const propertyTitle = title ? title : removeStringUnderline(slug)
      return (
        <div key={property.slug} className='container'>
          <div className='h-25 sm:mx-3'>
            <h2 className='text-lg mb-2 font-bold md:text-left break-normal'>{capitalize(propertyTitle)}</h2>
            <ProductOptions options={options} index={index} property={propertyTitle} />
          </div>
        </div>
      )
    })
    return productProperties
  }
  const handleAddToTheCart = () => {
    if (currentProduct.properties.length > choosenProductOptions.length) {
      setAreAllPropertiesSelected(false)
    } else {
      !selectedProduct && selectProduct(product)
      setAreAllPropertiesSelected(null)
      addProductToCart({
        name: product,
        choosenOptions: choosenProductOptions,
      })
      setShowFeedback(true)
    }
  }

  const handleFeedback = () => {
    selectProduct(null)
    setShowFeedback(false)
  }

  return (
    <>
      <AddedToCartFeedback handleFeedback={handleFeedback} showFeedback={showFeedback} productName={selectedProduct} />
      <div className='container m-auto px-2 text-gray-600'>
        <header className='bg-yellow-300 h-100 flex justify-between items-center relative '>
          <h1 className='sm:p-5 text-4xl font-bold m-5'>{titlePlural}</h1>
          <div className='sm:p-5 text-4xl font-bold m-5 hover:text-white'>
            <MdAddShoppingCart onClick={handleAddToTheCart} size={30} />
          </div>
        </header>
        {areAllPropertiesSelected === false && (
          <small className='text-red-500 font-bold h-20'>Please, select all properties.</small>
        )}

        <div
          data-testid='productDetails-component'
          className='grid mx-4 sm:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-5'
        >
          {displayProductProperites()}
        </div>
      </div>
    </>
  )
}

export default Product
