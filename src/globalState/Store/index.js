import React, { createContext, useReducer, useEffect } from 'react'
import {
  SELECT_PRODUCT,
  ADD_PRODUCT_OPTION,
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_THE_CART,
  EMPTY_CART,
} from '../types'
import AppReducer from '../AppReducer'
import { v4 as generateUUID } from 'uuid'

import BusinesscardImg from '../../assets/businesscard.svg'
import Flyer from '../../assets/flyer.svg'
import Poster from '../../assets/poster.svg'

import { getItemsFromLocalStorage, addItemsToLocalStorage } from '../../helpers'
const CART = 'Cart'

const initialState = {
  products: [
    { name: 'business cards', id: 1, image: BusinesscardImg },
    { name: 'flyers', id: 2, image: Flyer },
    { name: 'posters', id: 3, image: Poster },
  ],
  cart: getItemsFromLocalStorage(CART, []),
  choosenProductOptions: [],
  selectedProduct: null,
}

export const Store = createContext(initialState)

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  const { products, choosenProductOptions, selectedProduct, cart } = state || {}

  useEffect(() => addItemsToLocalStorage(CART, cart), [cart])

  // Actions for changing state

  const selectProduct = (product) => {
    dispatch({
      type: SELECT_PRODUCT,
      payload: product,
    })
  }

  const addProductOption = (option) => {
    console.log(option)
    dispatch({
      type: ADD_PRODUCT_OPTION,
      payload: option,
    })
  }
  const addProductToCart = (choosenOptions) => {
    // const defaultProductCount = 1
    const productWithNameAndOptions = {
      name: state.selectedProduct,
      id: generateUUID(),
      choosenOptions,
      // count: defaultProductCount,
    }
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: productWithNameAndOptions,
    })
  }

  const deleteProductFromCart = (productId) => {
    dispatch({
      type: DELETE_PRODUCT_FROM_THE_CART,
      payload: productId,
    })
  }

  const emptyCart = () => {
    dispatch({
      type: EMPTY_CART,
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
        deleteProductFromCart,
        emptyCart,
        dispatch,
      }}
    >
      {children}
    </Store.Provider>
  )
}
