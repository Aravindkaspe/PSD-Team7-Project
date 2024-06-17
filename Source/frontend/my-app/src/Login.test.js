import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './Components/LoginPage.js';
import { AuthContext } from './Contexts/AuthContext.js';

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({}),
  })
);

describe('LoginPage Component', () => {
  const mockLogin = jest.fn();

  beforeEach(() => {
    render(
      <Router>
        <AuthContext.Provider value={{ login: mockLogin }}>
          <LoginPage />
        </AuthContext.Provider>
      </Router>
    );
  });

  test('handles input changes', () => {
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password' } });

    expect(screen.getByPlaceholderText('Email').value).toBe('test@example.com');
    expect(screen.getByPlaceholderText('Password').value).toBe('password');
  });

 });