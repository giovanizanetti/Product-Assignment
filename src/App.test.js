import { render, screen } from '@testing-library/react';
import App from './App';

test('App component renders without crashing', () => {
  render(<App />);
  const AppComponent = screen.getByTestId('app-component')
  expect(AppComponent).toBeInTheDocument();
});
