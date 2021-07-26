import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Navbar } from '../Navbar/Navbar';
import { AuthProvider } from '../../hooks/AuthContext';
const rendeRouter = () =>
    render(
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </AuthProvider>
    );

  beforeEach(async () => {
    rendeRouter();
  });
  afterEach(() => {
    jest.clearAllMocks();
});
describe('Navbar component', () => {

    it('should render the container', () => {
        const navbarElement = screen.getByRole('banner');
        expect(navbarElement).toBeInTheDocument();
    })
    it('should render the logo', () => {
        const logoElement = screen.getByText(/Calango do Ópaió/i);
        expect(logoElement).toBeInTheDocument();
    })
    it('should render the menu icon button', () => {
        const menuButton = screen.getByRole('button', {name:'open drawer'});
        expect(menuButton).toBeInTheDocument();      
    })
})
describe('Navbar list itens on menu', () => {
    it('should render home page',() => {
        const NavComponent = screen.getByText('Entrar');
        expect(NavComponent).toBeInTheDocument();
    })
    it('should render the car page',() => {
        const NavComponent = screen.getByText('Veículos');
        expect(NavComponent).toBeInTheDocument();
    })
    it('should render the brand page',() => {
        const NavComponent = screen.getByText('Marcas');
        expect(NavComponent).toBeInTheDocument();
    })
    it('should render user page',() => {
        const NavComponent = screen.getByText('Usuários');
        expect(NavComponent).toBeInTheDocument();
    })
    it('should render dashboard page',() => {
        const NavComponent = screen.getByText('Dashboard');
        expect(NavComponent).toBeInTheDocument();
    })
    it('should render exit page',() => {
        const NavComponent = screen.getByText('Sair');
        expect(NavComponent).toBeInTheDocument();
    })
})

