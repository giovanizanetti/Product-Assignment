import { render, screen } from '@testing-library/react'
import Product from './index'

test('Product component renders without crashing', () => {
  const products = ['business cards', 'flyers', 'posters']
  render(<Product products={products} />)
  const ProductComponent = screen.getByTestId('product-component')
  expect(ProductComponent).toBeInTheDocument()
})
