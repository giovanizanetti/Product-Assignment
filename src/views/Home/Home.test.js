import { render, screen } from '@testing-library/react';
import Home from './index';

test('Home component renders without crashing', () => {
  render(<Home />);
  const HomeComponent = screen.getByTestId('home-component')
  expect(HomeComponent).toBeInTheDocument();
});