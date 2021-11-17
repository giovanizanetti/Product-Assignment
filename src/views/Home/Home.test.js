import { screen } from '@testing-library/react'
import { render } from '../../test-utils'
import Home from './index'

test('Home component renders without crashing', () => {
  render(<Home />)
  const HomeComponent = screen.getByTestId('home-component')
  expect(HomeComponent).toBeInTheDocument()
})
