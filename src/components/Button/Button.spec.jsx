import React from 'react';
import { render, screen } from '@testing-library/react'
import ButonGeneric from './ButtonGeneric';

describe('Button', () => {
    it('should have a component button', () => {
        //Assert
        render(<ButonGeneric/>)
    
        //Action
        const buttonComponent = screen.getByRole('button')

        //Expect
        expect(buttonComponent).toBeInTheDocument()
    });

});