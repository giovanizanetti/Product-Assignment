import { ADD_PRODUCT_OPTION, SELECT_PRODUCT, ADD_PRODUCT_TO_CART } from '../types'

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

const AppReducer = (state = { initialState }, action) => {
  console.log(state.cart)
  console.log(state)
  switch (action.type) {
    case ADD_PRODUCT_OPTION:
      return {
        ...state,
        choosenProductOptions: [...(state.choosenProductOptions || []), action.payload],
      }
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      }
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        choosenProductOptions: [],
      }
    default:
      return state
  }
}

export default AppReducer
