const BrandService = {
  async cadastrar(brand) {
    const response = await fetch(`${process.env.REACT_APP_URL_BASE}/brands`, {
      method: 'POST',
      body: JSON.stringify(brand),
      headers: { "Content-Type" : 'application/json'}
    })
    return await response.json()
  },

  async alterar(id,brand) {
    const response = await fetch(`${process.env.REACT_APP_URL_BASE}/brands/${id}`, {
      method: 'PUT',
      body: JSON.stringify(brand),
      headers: { "Content-Type" : 'application/json'}
    })
    return await response.json()
  },

  async consultar(id) {
    const response = await fetch(`${process.env.REACT_APP_URL_BASE}/brands/${id}`)
    return response.json()
  },

  async listar() {
    const response = await fetch(`${process.env.REACT_APP_URL_BASE}/brands`)
    return await response.json()
  },

  async excluir(brand) {
    const response = await fetch(`${process.env.REACT_APP_URL_BASE}/brands/${brand}`, {
      method: 'DELETE',
    })
    return await response.json()
  }
};

export default BrandService;