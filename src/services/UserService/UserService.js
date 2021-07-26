import { HeaderApi } from '../HeaderApi'
const UserService = {
  async cadastrar(user) {
    const headers = {
      method: 'POST',
      body: JSON.stringify(user),
    }
    return  HeaderApi.getHeader('users',headers)
  },

  async alterar(id,brand) {
    const headers = {
      method: 'PUT',
      body: JSON.stringify(brand),
      headers: { "Content-Type" : 'application/json'}
    }
    return  HeaderApi.getHeader(`users/${id}`,headers)
  },

  async consultar(id) {
    return  HeaderApi.getHeader(`users/${id}`,{})
  },

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

export default UserService;