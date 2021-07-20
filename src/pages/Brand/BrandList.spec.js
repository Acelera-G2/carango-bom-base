import React from 'react';
import { createMemoryHistory } from 'history';
import { Router,Route } from 'react-router-dom';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BrandService from '../../services/BrandService/BrandService';

import BrandList from './BrandList';

describe('<BrandList />', () => {
  const history = createMemoryHistory();
  let pushSpy
  let globalRouter
    beforeEach(() => {
      jest.clearAllMocks();
      jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useHistory: () => ({
          push: jest.fn(),
        }),
      }));
      pushSpy = jest.spyOn(history, 'push');
    
      jest.spyOn(BrandService, 'listar').mockResolvedValue({content:[
        { id: 1, name: 'CHEVROLET' },
        { id: 2, name: 'FIAT'},
      ]});
      jest.spyOn(BrandService, 'excluir').mockResolvedValue({ id: 1, name: 'CHEVROLET' });
    });
    beforeEach(async() => {
    act(async () => {
        global.fetch = render(
          <Router history={history}>
            <Route path="/">
              <BrandList />
            </Route>
          </Router>
        );
      });
      globalRouter = global.fetch;
  });
  afterEach(() => {
      global.fetch = globalRouter;
  });
  it('Should render the component', () => {
    const deleteBtn = screen.getByRole('button', { name: 'Excluir' });
    const updateBtn =  screen.getByRole('button', { name: 'Alterar' });
    const createBtn =  screen.getByRole('button', { name: 'add' });
    expect(createBtn).toBeInTheDocument();
    expect(deleteBtn).toBeInTheDocument();
    expect(updateBtn).toBeInTheDocument();
  });

  it('Should redirect to "cadastro-marca" when press "incluir" button', () => {
    const botaoExcluir = screen.getByTestId('adicionar');
    userEvent.click(botaoExcluir);
    expect(pushSpy).toHaveBeenCalledWith('/register-brand/');
  });

  it('Should redirect to brand update route when user click on update button', async () => {
    const brandSelected = await screen.findByText('CHEVROLET');
    const updateBtn = screen.getByRole('button', { name: 'Alterar' });
    userEvent.click(brandSelected);
    userEvent.click(updateBtn);
    expect(pushSpy).toHaveBeenCalledWith( '/change-brand/' + 1);
  });

  it('Should delete item', async () => {
    const brandSelected = await screen.findByText('CHEVROLET');
    const deleteBtn = screen.getByRole('button', { name: 'Excluir' });
    userEvent.click(brandSelected);
    userEvent.click(deleteBtn);
    expect(pushSpy).toHaveBeenCalledTimes(0);
    expect(brandSelected).toBeInTheDocument();
  });
});
