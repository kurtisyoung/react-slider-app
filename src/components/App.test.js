import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders header and img elements', () => {
  const { getByText, getByAltText } = render(<App />);
  const headerElement = getByText(/Are you a/i);
  const imgElement = getByAltText(/Marvel/i);
  
  expect(headerElement).toBeInTheDocument();
  expect(imgElement).toBeInTheDocument();
});