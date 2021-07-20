import React from 'react';
import { render, screen} from '@testing-library/react';
import {InputGeneric} from './InputGeneric';

describe('Input test', () => {
    it('should render input component on page',() => {
        render(<InputGeneric />);
        const inputComponent = screen.getByRole('input');
        expect(inputComponent).toBeInTheDocument();
    })
})
