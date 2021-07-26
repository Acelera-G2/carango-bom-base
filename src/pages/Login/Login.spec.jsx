import React from 'react';
import { screen, render } from '@testing-library/react';
import Login from './Login';

describe('Login component', () => {
    it('should render title on page', () => {
        render(<Login />);
        const loginElement = screen.getByText('Login');
        expect(loginElement).toBeInTheDocument()
    })
    it('should render input on page', () => {
        render(<Login />);
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeInTheDocument()
    })
    it('should render button on page', () => {
        render(<Login />);
        const buttonElement = screen.getByRole('button', {name: /entrar/i});
        expect(buttonElement).toBeInTheDocument()
    })
})