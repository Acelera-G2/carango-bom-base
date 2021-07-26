import {HeaderApi} from '../HeaderApi'
const VehicleService = {
  async cadastrar(vehicle) {
    const headers = {
      method: 'POST',
      body: JSON.stringify(vehicle),
    }
    const response = HeaderApi.getHeader('vehicles',headers)
    return await response
  },

  async alterar(vehicleId,vehicle) {
    const headers = {
      method: 'PUT',
      body: JSON.stringify(vehicle),
    }
    const response = HeaderApi.getHeader(`vehicles/${vehicleId}`,headers)
    return await response
  },

  async consultar(vehicleId) {
    const response = HeaderApi.getHeader(`vehicles/${vehicleId}`,{})
    return await response
  },

  async listar() {
    const response = HeaderApi.getHeader(`vehicles`,{})
    return await response
  },

  async excluir(vehicleId) {
    const headers = {
      method: 'DELETE',
    }
    const response = HeaderApi.getHeader(`vehicles/${vehicleId}`,headers)
    return await response
  }
};

export default VehicleService;