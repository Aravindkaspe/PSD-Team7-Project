import React from 'react';
import { render, fireEvent, screen, waitFor, act } from '@testing-library/react';
import QuoteForm from './Pages/QuoteForm';

describe('QuoteForm Component', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    render(<QuoteForm onClose={mockOnClose} />);
  });

  test('renders QuoteForm component', () => {
    expect(screen.getByText('Quote')).toBeInTheDocument();
    expect(screen.getByText('Please allow up to 48 hours for a response.')).toBeInTheDocument();
  });

  test('handles input changes', () => {
    fireEvent.change(screen.getByLabelText('Name*'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email*'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Phone Number'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText('Service'), { target: { value: '3D Printing' } });
    fireEvent.change(screen.getByLabelText('Total Budget (INR)'), { target: { value: '5000' } });
    fireEvent.change(screen.getByLabelText('Project Description'), { target: { value: 'Description of the project' } });

    expect(screen.getByLabelText('Name*').value).toBe('John Doe');
    expect(screen.getByLabelText('Email*').value).toBe('john@example.com');
    expect(screen.getByLabelText('Phone Number').value).toBe('1234567890');
    expect(screen.getByLabelText('Service').value).toBe('3D Printing');
    expect(screen.getByLabelText('Total Budget (INR)').value).toBe('5000');
    expect(screen.getByLabelText('Project Description').value).toBe('Description of the project');
  });

  test('submits the form', async () => {
    fireEvent.change(screen.getByLabelText('Name*'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email*'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Phone Number'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText('Service'), { target: { value: '3D Printing' } });
    fireEvent.change(screen.getByLabelText('Total Budget (INR)'), { target: { value: '5000' } });
    fireEvent.change(screen.getByLabelText('Project Description'), { target: { value: 'Description of the project' } });

    await act(async () => {
      fireEvent.submit(screen.getByRole('button', { name: /send/i }));
    });

    await waitFor(() => expect(screen.getByText('Thank You!')).toBeInTheDocument());
    expect(screen.getByText('Your form has been submitted successfully.')).toBeInTheDocument();
  });

  test('shows Thank You message on submit', async () => {
    fireEvent.change(screen.getByLabelText('Name*'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email*'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Phone Number'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText('Service'), { target: { value: '3D Printing' } });
    fireEvent.change(screen.getByLabelText('Total Budget (INR)'), { target: { value: '5000' } });
    fireEvent.change(screen.getByLabelText('Project Description'), { target: { value: 'Description of the project' } });

    await act(async () => {
      fireEvent.submit(screen.getByRole('button', { name: /send/i }));
    });

    await waitFor(() => expect(screen.getByText('Thank You!')).toBeInTheDocument());
    expect(screen.getByText('Your form has been submitted successfully.')).toBeInTheDocument();
  });

  test('closes the modal on close button click', () => {
    fireEvent.click(screen.getByText('X'));
    expect(mockOnClose).toHaveBeenCalled();
  });
});