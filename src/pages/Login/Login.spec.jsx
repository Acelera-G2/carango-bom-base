import React from 'react';
import { screen, render } from '@testing-library/react';
import Login from './Login';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { AuthProvider } from '../../hooks/AuthContext';

const history = createMemoryHistory();
const rendeRouter = () =>
    render(
      <AuthProvider>
        <Router history={history}>
          <Login />
        </Router>
      </AuthProvider>
    );

  beforeEach(async () => {
    rendeRouter();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
describe('Login component', () => {
    it('should render title on page', () => {
        const loginElement = screen.getByText('Login');
        expect(loginElement).toBeInTheDocument()
    })
    it('should render input on page', () => {
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeInTheDocument()
    })
    it('should render button on page', () => {
        const buttonElement = screen.getByRole('button', {name: /entrar/i});
        expect(buttonElement).toBeInTheDocument()
    })
})