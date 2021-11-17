import { screen } from '@testing-library/react'
import { render } from '../../test-utils'

import Product from './index'
const product = { productName: 'business cards' }
test('Product component renders without crashing', () => {
  render(<Product products={product} />)
  const ProductComponent = screen.getByTestId('product-component')
  expect(ProductComponent).toBeInTheDocument()
})
