import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('renders GSIF header', () => {
  render(<App />);
  const headerElement = screen.getAllByText(/GSIF/i)[0];
  expect(headerElement).toBeInTheDocument();
});
