import React from 'react';
import {screen, render} from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import RegisterUser from './RegisterUser';

describe('RegisterUser page', () => {
    it('should render User input', () => {
        render(<RegisterUser />)
        expect(screen.getByText(/Usuário/i)).toBeInTheDocument()
    })
})