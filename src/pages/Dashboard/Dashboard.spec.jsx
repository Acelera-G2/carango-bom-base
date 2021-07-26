import { act, render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';
import DashboardService from '../../services/DashboardService/DashboardService';
import { AuthProvider } from '../../hooks/AuthContext';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();

describe('Dashboard', () => {

  const createInstance = () => render(   <AuthProvider>
    <Router history={history}>
      <Dashboard />
    </Router>
  </AuthProvider>);

  it('Should render the list dashboard', async () => {
    jest.spyOn(DashboardService, 'listar').mockResolvedValue({});
    const { container } = await createInstance();
    expect(container).toBeDefined();
  });
});