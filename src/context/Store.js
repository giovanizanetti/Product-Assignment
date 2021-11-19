import React, { createContext, useReducer } from 'react'
import AppReducer from '../AppReducer'

import BusinesscardImg from '../assets/businesscard.svg'
import Flyer from '../assets/flyer.svg'
import Poster from '../assets/poster.svg'

const initialState = {
  products: [
    { name: 'business cards', id: 1, image: BusinesscardImg },
    { name: 'flyers', id: 2, image: Flyer },
    { name: 'posters', id: 3, image: Poster },
  ],
  cart: {
    count: 0,
    items: [],
  },
}

export const Store = createContext(initialState)

export const StoreProvider = ({ children }) => {
  // eslint-disable-next-line
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions for changing state

  // function addItemToList(item) {
  //   dispatch({
  //     type: 'ADD_ITEM',
  //     payload: item,
  //   })
  // }
  // function removeItemFromList(item) {
  //   dispatch({
  //     type: 'REMOVE_ITEM',
  //     payload: item,
  //   })
  // }

  return <Store.Provider value={{ products: state.products }}>{children}</Store.Provider>
}
