import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders bracket challenge text', () => {
  render(<App />)
  const element = screen.getByText(/bracket challenge/i)
  expect(element).toBeInTheDocument()
})
