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

  test('renders LoginPage component', () => {
    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  test('handles input changes', () => {
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password' } });

    expect(screen.getByPlaceholderText('Email').value).toBe('test@example.com');
    expect(screen.getByPlaceholderText('Password').value).toBe('password');
  });

  test('handles login', async () => {
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'admin' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: '1' } });

    fireEvent.click(screen.getByText('Sign In'));

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalled();
      expect(screen.getByText('Successful Sign In')).toBeInTheDocument();
    });
  });

  test('handles sign up', async () => {
    fireEvent.click(screen.getByText("Don't have an account? Sign up"));

    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password' } });

    fireEvent.click(screen.getByText('Sign Up'));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('your-api-endpoint/signup', expect.any(Object));
      expect(screen.queryByText('Sign Up')).not.toBeInTheDocument();
      expect(screen.getByText('Sign In')).toBeInTheDocument();
    });
  });

  test('toggles between sign-in and sign-up', () => {
    fireEvent.click(screen.getByText("Don't have an account? Sign up"));

    expect(screen.getByText('Sign Up')).toBeInTheDocument();
    expect(screen.queryByText('Sign In')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('Already have an account? Sign in'));

    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.queryByText('Sign Up')).not.toBeInTheDocument();
  });

  test('shows success message on login', async () => {
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'admin' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: '1' } });

    fireEvent.click(screen.getByText('Sign In'));

    await waitFor(() => {
      expect(screen.getByText('Successful Sign In')).toBeInTheDocument();
    });
  });
});