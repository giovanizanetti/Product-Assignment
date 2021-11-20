import React, { createContext, useReducer, useEffect } from 'react'
import { SELECT_PRODUCT, ADD_PRODUCT_OPTION, ADD_PRODUCT_TO_CART } from '../types'
import AppReducer from '../AppReducer'

import BusinesscardImg from '../../assets/businesscard.svg'
import Flyer from '../../assets/flyer.svg'
import Poster from '../../assets/poster.svg'

const initialState = {
  products: [
    { name: 'business cards', id: 1, image: BusinesscardImg },
    { name: 'flyers', id: 2, image: Flyer },
    { name: 'posters', id: 3, image: Poster },
  ],
  cart: [],
  choosenProductOptions: [],
  selectedProduct: null,
}

export const Store = createContext(initialState)

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  const { products, choosenProductOptions, selectedProduct, cart } = state || {}

  useEffect(() => console.log(state), [state])

  // Actions for changing state

  const selectProduct = (product) => {
    dispatch({
      type: SELECT_PRODUCT,
      payload: product,
    })
  }

  const addProductOption = (option) => {
    dispatch({
      type: ADD_PRODUCT_OPTION,
      payload: option,
    })
  }
  const addProductToCart = (choosenOptions) => {
    const productWithNameAndOptions = {
      name: selectedProduct,
      choosenOptions,
    }

    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: productWithNameAndOptions,
    })
  }

  return (
    <Store.Provider
      value={{
        products,
        choosenProductOptions,
        selectedProduct,
        cart,
        addProductOption,
        selectProduct,
        addProductToCart,
        dispatch,
      }}
    >
      {children}
    </Store.Provider>
  )
}
