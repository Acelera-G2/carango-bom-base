import { HeaderApi } from '../HeaderApi'
const BrandService = {
  async cadastrar(brand) {
    const headers = {
      method: 'POST',
      body: JSON.stringify(brand),
    }
    const response = HeaderApi.getHeader('brands',headers)
    return await response
  },

  async alterar(id,brand) {
    const headers = {
      method: 'PUT',
      body: JSON.stringify(brand),
      headers: { "Content-Type" : 'application/json'}
    }
    const response = HeaderApi.getHeader(`/brands/${id}`,headers)
    return await response
  },

  async consultar(id) {
   const response = HeaderApi.getHeader(`brands/${id}`,{})
    return await response
  },

  async listar() {
    const response = HeaderApi.getHeader(`brands`,{})
    return await response
  },

  async excluir(brand) {
    const headers = {
      method: 'DELETE',
    }
    const response = HeaderApi.getHeader(`/brands/${brand}`,headers)
    return await response
  }
};

export default BrandService;