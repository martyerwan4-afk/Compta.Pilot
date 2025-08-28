import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders heading', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(
      screen.getByRole('heading', { name: /ComptaPilot/i }),
    ).toBeInTheDocument();
  });
});
