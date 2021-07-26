import { HeaderApi } from '../HeaderApi'
const UserService = {
  async cadastrar(user) {
    const headers = {
      method: 'POST',
      body: JSON.stringify(user),
    }
    const response = HeaderApi.getHeader('users',headers)
    return await response
  },

  async alterar(id,brand) {
    const headers = {
      method: 'PUT',
      body: JSON.stringify(brand),
      headers: { "Content-Type" : 'application/json'}
    }
    const response = HeaderApi.getHeader(`/users/${id}`,headers)
    return await response
  },

  async consultar(id) {
   const response = HeaderApi.getHeader(`users/${id}`,{})
    return await response
  },

  async listar() {
    const response = HeaderApi.getHeader(`users`,{})
    return await response
  },

  async excluir(user) {
    const headers = {
      method: 'DELETE',
    }
    const response = HeaderApi.getHeader(`/users/${user}`,headers)
    return await response
  }
};

export default UserService;