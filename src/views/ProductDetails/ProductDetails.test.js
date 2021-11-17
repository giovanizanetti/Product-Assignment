import { screen } from '@testing-library/react'
import { render } from '../../test-utils'
import ProductDetails from './index'

test('ProductDetails component renders without crashing', () => {
  render(<ProductDetails />)
  const ProductDetailsComponent = screen.getByTestId('productDetails-component')
  expect(ProductDetailsComponent).toBeInTheDocument()
})
