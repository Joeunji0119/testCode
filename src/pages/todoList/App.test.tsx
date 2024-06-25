import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './Index';
import { fetchTodos as mockFetchTodos } from './api';

// API 모듈 모킹
jest.mock('./api');

const mockTodos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Learn TypeScript', completed: false },
];

describe('App Component', () => {
  beforeEach(() => {
    (mockFetchTodos as jest.Mock).mockResolvedValue(mockTodos);
  });

  test('renders the Todo List header', () => {
    render(<App />);
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
  });

  test('loads and displays todos', async () => {
    render(<App />);
    expect(mockFetchTodos).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
      expect(screen.getByText(/Learn TypeScript/i)).toBeInTheDocument();
    });
  });
});
