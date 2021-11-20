import { ADD_PRODUCT_OPTION, SELECT_PRODUCT, ADD_PRODUCT_TO_CART } from '../types'

const AppReducer = (state = {}, action) => {
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
