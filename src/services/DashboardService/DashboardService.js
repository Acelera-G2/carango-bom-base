import { HeaderApi } from '../HeaderApi'
const DashboardService = {
    
  async listar() {
    return  HeaderApi.getHeader(`dashboard`,{})
  },
};

export default DashboardService;