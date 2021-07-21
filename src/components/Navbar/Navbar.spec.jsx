import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { render, screen} from '@testing-library/react';
import { Navbar } from '..';

describe('Navbar component', () => {

    it('should render the container', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        const navbarElement = screen.getByRole('banner');
        expect(navbarElement).toBeInTheDocument();
    })
    it('should render the logo', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        const logoElement = screen.getByText(/Calango do Ópaió/i);
        expect(logoElement).toBeInTheDocument();
    })
    it('should render the menu icon button', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        const menuButton = screen.getByRole('button', {name:'open drawer'});
        expect(menuButton).toBeInTheDocument();
    })
})
describe('Navbar list itens on menu', () => {
    it('should render home page',() => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        const NavComponent = screen.getByText('Entar');
        expect(NavComponent).toBeInTheDocument();
    })
    it('should render the car page',() => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        const NavComponent = screen.getByText('Veículos');
        expect(NavComponent).toBeInTheDocument();
    })
    it('should render the brand page',() => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        const NavComponent = screen.getByText('Marcas');
        expect(NavComponent).toBeInTheDocument();
    })
    it('should render user page',() => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        const NavComponent = screen.getByText('Usuários');
        expect(NavComponent).toBeInTheDocument();
    })
    it('should render dashboard page',() => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        const NavComponent = screen.getByText('Dashboard');
        expect(NavComponent).toBeInTheDocument();
    })
    it('should render exit page',() => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        const NavComponent = screen.getByText('Sair');
        expect(NavComponent).toBeInTheDocument();
    })
})

