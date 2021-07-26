import { HeaderApi } from '../HeaderApi'
const DashboardService = {
    
  async listar() {
    return  HeaderApi.getHeader(`users`,{})
  },

  async excluir(user) {
    const headers = {
      method: 'DELETE',
    }
    return  HeaderApi.getHeader(`users/${user}`,headers)
  }
};

export default DashboardService;