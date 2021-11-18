// component - cart

import { screen } from '@testing-library/react'
import { render } from '../../test-utils'

import Cart from './index'

test('Cart component renders without crashing', () => {
  render(<Cart />)
  const CartComponent = screen.getByTestId('cart-component')
  expect(CartComponent).toBeInTheDocument()
})
