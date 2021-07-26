import React from 'react';
import { TableGrid } from './TableGrid';
import { render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../hooks/AuthContext';
const rendeRouter = () =>
render(
  <AuthProvider>
    <BrowserRouter>
      <TableGrid />
    </BrowserRouter>
  </AuthProvider>
);


beforeEach(async () => {
    rendeRouter();
});
afterEach(() => {
    jest.clearAllMocks();
});
describe('TableGrid component', () => {
    it('should render  on page', () => {
        //Arrenge
       
        //Action
        const tableElement = screen.getByRole('grid');
        //Assert
        expect(tableElement).toBeInTheDocument()
    })
})