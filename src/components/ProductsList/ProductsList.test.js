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
  render(<ProductsList />)
  const ProductsListComponent = screen.getByTestId('productsList-component')
  expect(ProductsListComponent).toBeInTheDocument()
})
