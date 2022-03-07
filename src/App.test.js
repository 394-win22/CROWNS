import { render, screen } from '@testing-library/react';
import App from './App';

test('renders I know my type button', () => {
  render(<App />);
  const linkElement = screen.getByText(/I know my type!/i);
  expect(linkElement).toBeInTheDocument();
});
