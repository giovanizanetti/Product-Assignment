import { screen } from '@testing-library/react'
import { render } from '../../test-utils'

import Header from './index'

test('Header component renders without crashing', () => {
  render(<Header />)
  const HeaderComponent = screen.getByTestId('header-component')
  expect(HeaderComponent).toBeInTheDocument()
})

describe('Shopping cart link', () => {
  test('Should contain link', () => {
    render(<Header />)
    screen.debug()
    const shoppingCartLink = screen.getByTestId('shopping-cart-link')
    expect(shoppingCartLink).toBeInTheDocument()
  })
  test('Should the user has access to the shopping cart when click the link', () => {})
})

describe('Home link', () => {
  test('Should contain link', () => {})
  test('Should the user has access to home page when click the link', () => {})
})
