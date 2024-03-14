import { render, screen } from '@testing-library/react';
import App from './App';
import Visualizer from './SortingVisualizer/SortingVisualizer'

test('renders learn react link', () => {
  render(<Visualizer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});