import { screen } from '@testing-library/react'
import { render } from '../../test-utils'

import ProductsList from './index'

beforeEach(() => {
  jest.mock('../../helpers/index', () => ({
    capitalize: jest.fn(() => 'Mocked'),
  }))
  jest.mock('../../helpers/index', () => ({
    removeSpaceBetween: jest.fn(() => 'Mocked1'),
  }))
})
const products = [
  { name: 'business cards', id: 1 },
  { name: 'flyers', id: 2 },
  { name: 'posters', id: 3 },
]

test('ProductsList component renders without crashing', () => {
  render(<ProductsList products={products} />)
  const ProductsListComponent = screen.getByTestId('productsList-component')
  expect(ProductsListComponent).toBeInTheDocument()
})

test('Renders a message if no product on the list', () => {
  render(<ProductsList products={[]} />)
  const textMessage = 'Sorry! There is no products.'
  const message = screen.getByText(textMessage)
  expect(message).toEqual(message)
})

test('Should render three product items to the page', () => {
  render(<ProductsList products={products} />)
  const productsList = screen.getAllByTestId('product-component')
  expect(productsList).toHaveLength(3)
})
