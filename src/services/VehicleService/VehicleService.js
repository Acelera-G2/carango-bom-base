const VehicleService = {
  async cadastrar(vehicle) {
    const response = await fetch(`${process.env.REACT_APP_URL_BASE}/vehicles`, {
      method: 'POST',
      body: JSON.stringify(vehicle),
      headers: { "Content-Type" : 'application/json'}
    })
    return await response.json()
  },

  async alterar(vehicleId,vehicle) {
    const response = await fetch(`${process.env.REACT_APP_URL_BASE}/vehicles/${vehicleId}`, {
      method: 'PUT',
      body: JSON.stringify(vehicle),
      headers: { "Content-Type" : 'application/json'}
    })
    return await response.json()
  },

  async consultar(vehicleId) {
    const response = await fetch(`${process.env.REACT_APP_URL_BASE}/vehicles/${vehicleId}`)
    return response.json()
  },

  async listar() {
    const response = await fetch(`${process.env.REACT_APP_URL_BASE}/vehicles`)
    return await response.json()
  },

  async excluir(vehicleId) {
    const response = await fetch(`${process.env.REACT_APP_URL_BASE}/vehicles/${vehicleId}`, {
      method: 'DELETE',
    })
    return await response.json()
  }
};

export default VehicleService;