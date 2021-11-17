import { screen } from '@testing-library/react'
import { render } from '../src/test-utils'
import App from './App'

test('App component renders without crashing', () => {
  render(<App />)
  const AppComponent = screen.getByTestId('app-component')
  expect(AppComponent).toBeInTheDocument()
})
