import React from 'react';
import { screen, render, act } from '@testing-library/react';
import RegisterUser from './RegisterUser';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { AuthProvider } from '../../hooks/AuthContext';
import userEvent from "@testing-library/user-event";

const history = createMemoryHistory();
const rendeRouter = () =>
    render(
      <AuthProvider>
        <Router history={history}>
          <RegisterUser />
        </Router>
      </AuthProvider>
    );

  beforeEach(async () => {
    rendeRouter();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
describe('RegisterUser page', () => {
    it('should render User input',async () => {
    const inputVehicleModel = screen.getByRole('textbox', { name: /Usuário/i });
    const submitBtn = screen.getByRole('button', { name: 'Cadastrar' });

    userEvent.type(inputVehicleModel, 'ch');
    userEvent.click(submitBtn);

    const errorMessage = await screen.findByText(
      /Usuário precisa ter no mínimo 3 caracteres/i
    );

    expect(errorMessage).toBeInTheDocument();
    })
    it('should render User input',async () => {
        const inputVehicleModel = screen.getByLabelText(/Senha de Acesso/i);
        const submitBtn = screen.getByRole('button', { name: 'Cadastrar' });
    
        userEvent.type(inputVehicleModel, 'ch');
        userEvent.click(submitBtn);
    
        const errorMessage = await screen.findByText(
          /A senha precisa ter no mínimo 6 caracteres/i
        );
    
        expect(errorMessage).toBeInTheDocument();
    })
    it('should render User input',async () => {
        const inputVehicleModel = screen.getByLabelText(/Confirmar senha/i);
        const submitBtn = screen.getByRole('button', { name: 'Cadastrar' });
    
        userEvent.type(inputVehicleModel, 'ch');
        userEvent.click(submitBtn);
    
        const errorMessage = await screen.findByText(
          /A senha precisa ter no mínimo 6 caracteres/i
        );
    
        expect(errorMessage).toBeInTheDocument();
    })
})