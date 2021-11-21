import {
  ADD_PRODUCT_OPTION,
  SELECT_PRODUCT,
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_FROM_THE_CART,
  EMPTY_CART,
} from '../types'

const AppReducer = (state = {}, action) => {
  console.log(action)
  console.log(state)
  switch (action.type) {
    case ADD_PRODUCT_OPTION:
      //check for duplicated
      const updatedOptions = state.choosenProductOptions.filter(
        (choosenOption) => choosenOption.property !== action.payload.property
      )

      console.log(updatedOptions)
      return {
        ...state,
        choosenProductOptions: [...updatedOptions, action.payload],
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
    case DELETE_PRODUCT_FROM_THE_CART:
      const filteredItems = state.cart.length && state.cart.filter((item) => item.id !== action.payload)
      return {
        ...state,
        cart: filteredItems,
      }
    case EMPTY_CART:
      return {
        ...state,
        cart: [],
      }
    default:
      return state
  }
}

export default AppReducer
