import React from 'react';
import { render } from '@testing-library/react';
import Slider from './Slider';

test('renders loading message', () => {
  const { getByText } = render(<Slider />);
  const loadingElement = getByText(/Loading.../i);
  
  expect(loadingElement).toBeInTheDocument();
});