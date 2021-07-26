import React from 'react';
import { createMemoryHistory } from 'history';
import { Router,Route } from 'react-router-dom';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BrandService from '../../services/BrandService/BrandService';

import ListUser from './ListUser';

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
        {id: 1, username:'Mathaus'},
        {id: 2, username:'Yanka'},
        {id: 3, username:'Renan'},
        {id: 4, username:'Leandro'}
      ]});
      jest.spyOn(BrandService, 'excluir').mockResolvedValue({id: 1, username:'Mathaus'});
    });
    beforeEach(async() => {
    act(async () => {
        global.fetch = render(
          <Router history={history}>
            <Route path="/">
              <ListUser />
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

  it('Should redirect to "registrar Usuários" when press "incluir" button', () => {
    const botaoExcluir = screen.getByTestId('adicionar');
    userEvent.click(botaoExcluir);
    expect(pushSpy).toHaveBeenCalledWith('/register-user/');
  });
});
