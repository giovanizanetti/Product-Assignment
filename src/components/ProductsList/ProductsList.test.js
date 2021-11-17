import { render, screen } from '@testing-library/react'
import ProductsList from './index'

beforeEach(() => {
  jest.mock('../../helpers/index', () => ({
    capitalize: jest.fn(() => 'Mocked'),
  }))
})

test('ProductsList component renders without crashing', () => {
  const products = [
    { name: 'business cards', id: 1 },
    { name: 'flyers', id: 2 },
    { name: 'posters', id: 3 },
  ]
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
