import {HeaderApi} from '../HeaderApi'
const VehicleService = {
  async cadastrar(vehicle) {
    const headers = {
      method: 'POST',
      body: JSON.stringify(vehicle),
    }
    return await HeaderApi.getHeader('vehicles',headers)
  },

  async alterar(vehicleId,vehicle) {
    const headers = {
      method: 'PUT',
      body: JSON.stringify(vehicle),
    }
    return await HeaderApi.getHeader(`vehicles/${vehicleId}`,headers)
  },

  async consultar(vehicleId) {
    return await HeaderApi.getHeader(`vehicles/${vehicleId}`,{})
  },

  async listar() {
    return await HeaderApi.getHeader(`vehicles`,{})
  },

  async excluir(vehicleId) {
    const headers = {
      method: 'DELETE',
    }
    return await HeaderApi.getHeader(`vehicles/${vehicleId}`,headers)
  }
};

export default VehicleService;