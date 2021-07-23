import React from 'react';
import { TableGrid } from './TableGrid';
import { render, screen} from '@testing-library/react';

describe('TableGrid component', () => {
    it('should render  on page', () => {
        //Arrenge
        render( <TableGrid />);
        //Action
        const tableElement = screen.getByRole('grid');
        //Assert
        expect(tableElement).toBeInTheDocument()
    })
})