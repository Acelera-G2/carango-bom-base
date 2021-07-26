import { HeaderApi } from '../HeaderApi'
const BrandService = {
  async cadastrar(brand) {
    const headers = {
      method: 'POST',
      body: JSON.stringify(brand),
    }
    return  HeaderApi.getHeader('brands',headers)
  },

  async alterar(id,brand) {
    const headers = {
      method: 'PUT',
      body: JSON.stringify(brand),
      headers: { "Content-Type" : 'application/json'}
    }
    return  HeaderApi.getHeader(`/brands/${id}`,headers)
  },

  async consultar(id) {
    return  HeaderApi.getHeader(`brands/${id}`,{})
  },

  async listar() {
    return  HeaderApi.getHeader(`brands`,{})
  },

  async excluir(brand) {
    const headers = {
      method: 'DELETE',
    }
    return  HeaderApi.getHeader(`brands/${brand}`,headers)
  }
};

export default BrandService;